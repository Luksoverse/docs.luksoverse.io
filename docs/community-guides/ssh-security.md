---
title: SSH Security
sidebar_position: 5
---

# Hardening SSH Security :muscle:

Guide by: [Johnny EBD](https://github.com/JohnnyEBD-LYX)

![](https://i.imgur.com/xMIlKZo.jpg)

> **_Disclaimer_**
> This article is for informational purposes only and does not constitute professional advice. The author does not guarantee accuracy of the information in this article and the author is not responsible for any damages or losses incurred by following this article.

This tutorial will show you how to set up an SSH two-factor authentication on your Ubuntu server using the well-known Google Authenticator, so you can continue to use your password and keys without worrying if they've been compromised or not.

You will also be shown how to stop malicious logins like brute-force DDoS attacks if, for some reason, your SSH port becomes exposed to the outside world, by banning IP addresses with the Fail2Ban service in place.

## 2FA with Google Authenticator

![](https://i.imgur.com/99K7VRO.jpg)

Two-factor authentication (2FA) requires two pieces of information in order to login. So you will also need to enter a time-based one-time password to log in to your SSH server. This one-time password is computed using the TOTP algorithm, which is an IETF standard, and it can help secure both password and keys access.

### Install and Configure Google Authenticator

> **_NOTE:_** The open-source server software used in this guide is called libpam-google-authenticator, which is installed from the default Ubuntu repository. Google the company isn't involved in the authentication process in any way, shape or form. Both the server software and the mobile app don’t need network access.

Log into your Ubuntu server and run the following command to install Google Authenticator from the default Ubuntu package repository:

```shell=
sudo apt install -y libpam-google-authenticator
```

Then run the google-authenticator command to create a new secret key in your home directory.

```shell=
google-authenticator
```

When asked `Do you want authentication tokens to be time-based?` Answer `y`.

Then you will see a QR code that you can scan using a TOTP app on your phone. There are a few recommended apps:

- **Google Authenticator** is the most well-known TOTP mobile app. You can install it via Google Play or Apple app store on your mobile phone. Please note that it isn’t open-source.
- If you don’t trust Google, you can either use **Authy**, a popular choice, or **FreeOTP**, an open-source TOTP mobile app developed by Red Hat.

Scan the QR code with your TOTP app on your mobile phone. Note that you need to enlarge the terminal window to scan the full QR code.

![](https://i.imgur.com/AeUWvCV.png)

The QR code represents the secret key, which is only known by your SSH server and your TOTP mobile app. Once the QR code is scanned, you can see a six-digit one-time password on your phone. By default, it changes every 30 seconds. You will need to enter this one-time password later in order to log in to Ubuntu server via SSH.

![](https://i.imgur.com/8ZX8rM4.jpg)

In the terminal window, you can see the secret key, verification code, and emergency scratch codes. It’s recommended that you save this information in a safe physical place for later use.

Then you can enter `y` to answer all of the remaining questions. This will update your Google Authenticator configuration file, disable multiple uses of the same authentication token, increase the time window and enable rate-limiting to protect against brute-force login attempts.

![](https://i.imgur.com/X4DeDHg.png)

### Configure SSH Daemon to Use Google Authenticator

#### Password Authentication with 2FA

Access the SSH server configuration file.

```shell=
sudo nano /etc/ssh/sshd_config
```

Find the following two parameters in the file, making sure both of them are set to `yes` and activated by uncommenting.

```
KbdInteractiveAuthentication yes

UsePAM yes
```

PAM stands for pluggable authentication module. It provides an easy way to plug different authentication method into your Linux system. To enable Google Authenticator with SSH, PAM and Kbd Interactive Authentication must be enabled.

Save and close the file. Next, edit the PAM rule file for SSH daemon.

```shell=
sudo nano /etc/pam.d/sshd
```

At the beginning of this file, you can see the following line, which enables password authentication when KbdInteractiveAuthentication is set to yes.

```
@include common-auth
```

To enable 2FA in SSH, add the following two lines right below it with spaces in between and **add a comment on the Standard Un\*x authentication (#@include common-auth) so it doesn't ask for password anymore**:

```
# Standard Un*x authentication.
#@include common-auth

# two-factor authentication via Google Authenticator
auth   required   pam_google_authenticator.so
```

![](https://i.imgur.com/r1rmGNd.png)

Save and close the file. Then restart SSH daemon for the change to take effect.

```shell=
sudo systemctl restart ssh
```

From now on SSH daemon will require you to enter user password and a verification code (the one-time password generated by Google Authenticator).

#### Public Key Authentication with 2FA

If you use SSH keys to log into your SSH server, then follow the instructions below.

Open SSH server configuration file.

```shell=
sudo nano /etc/ssh/sshd_config
```

Next, add the following line at the end of this file. This tells SSH daemon that the user must pass both public key authentication and challenge-response authentication.

```
AuthenticationMethods publickey,keyboard-interactive
```

Save and close the file. Then restart SSH daemon for the change to take effect.

```shell=
sudo systemctl restart ssh
```

From now on you need to use SSH keys and Google Authenticator verification code to login.

> **_KEY ASPECTS TO NOTE:_**
>
> - Emergency Scratch Codes are your backup codes. If you lose your phone, you can enter one of five emergency scratch codes instead of a one-time password to complete the two-step verification. These codes are for one-time use only.
> - If you want to change the secret key, simply log into your server and run google-authenticator command again to update the ~/.google_authenticator file.
> - Since the one-time password is computed using the shared secret key and the current time, it’s a good idea to check if the time synchronization on your Ubuntu server is active with `timedatectl` (if not please run `sudo systemctl start systemd-timesyncd.service`), although previously we have allowed a time skew of 4 minutes between the Ubuntu server and the mobile app.
> - Your Ubuntu server and the TOTP mobile app can use different time zones.

## Block Unauthorised Access :shield:

![](https://i.imgur.com/hdprr44.jpg)

### Fail2Ban

Fail2Ban is a free and open-source software that protects your SSH daemon (SSHD) from malicious logins like brute force attacks. It does this by monitoring server logs and detecting any suspicious activity.

The program detects an unreasonable number of failed attempts and automatically adds new entries to iptables that block the given IP. This IP (or host) is then banned/jailed for a specified time or indefinitely.

Therefore, installing this log-monitoring software is an excellent way to provide another layer to your server security. Still, it can only be one part of your overall server security plan.

![](https://i.imgur.com/mWMfZNj.jpg)

Install `fail2ban` to block IP addresses that exceed failed SSH login attempts.

```shell=
sudo apt-get install fail2ban -y
```

Edit a config to monitor ssh logins.

```shell=
sudo nano /etc/fail2ban/jail.local
```

Copy below text to file and you can add unbanable IPs in the last line, like your clients, separated by a space between them.

```
[sshd]
enabled=true
port=ssh
filter=sshd
logpath=/var/log/auth.log
maxretry=3
findtime=300
bantime=28800
ignoreip=
```

Close editor by pressing `ctrl` + `X`, then save and start `fail2ban` service:

```shell=
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

![](https://i.imgur.com/ZxQjm4K.jpg)

#### How to unban an IP address

After testing, you might want to unban the IP address you used. Make sure you have a banned IP with the command:

```shell=
sudo fail2ban-client status sshd
```

You should see something like the following listed:

```
Status for the jail: sshd

|- Filter
|  |- Currently failed:    0
|  |- Total failed:    3
|  `- File list:    /var/log/auth.log
`- Actions
|- Currently banned:    1
|- Total banned:    1
`- Banned IP list:    192.168.1.40
```

To unban IP address 192.168.1.40, you’d issue the command:

```shell=
sudo fail2ban-client set sshd unbanip 192.168.1.40
```

You should see the number `1` printed out because that’s how many IP addresses you just unbanned.

You can also manually ban an IP with the command:

```shell=
sudo fail2ban-client set sshd banip 192.168.1.40
```

That's it, your machine should be pretty resilient to hacking by now, even if passwords and keys get compromised.
