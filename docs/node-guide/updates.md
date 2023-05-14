---
title: 'Guide Updates'
sidebar_position: 6
---

This page is a log of changes made to the guide and instructions on how to update your system. Only follow these insturctions if you have previously used this guide to setup your system. Reminder: these guides are community suggestions and not supported by the LUKSO Foundation -- DYOR.

## 5/4/2023

### Part 3 Step 4.2

Changed config file in [Part 3 Step 4.2](settings-security#42---configure-fail2ban) to include `findtime` and `bantime`. This will allow you to regain access after a period of time in case you accidently ban youself.

### Fix (optional)

**1. Open the Fail2Ban config file**

```
sudo nano /etc/fail2ban/jail.local
```

**2. Replace the current confiugations with these**

```
[sshd]
enabled=true
port=<ssh-port>
filter=sshd
logpath=/var/log/auth.log
maxretry=3
findtime=300
bantime=28800
ignoreip=
```

**3. Restart Fail2Ban**

```
sudo systemctl restart fail2ban
```

### Part 3 Step 4.3

In [Part 3 Step 4.3](settings-security#43---start-the-service) Fail2Ban was not configured to start on boot.

### Fix (recommended)

**1. Configure Fail2Ban to start on boot**

```
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

**2. Confirm Fail2Ban is running**

```
sudo systemctl status fail2ban
```

### Part 3 Step 6

:::warning
This only applies to Ubuntu Server installs. Ignore if you installed the Desktop version of Ubuntu.
:::

Only 100GB of disk space is allocated in the default installation of Ubuntu Server. These steps were added to configure Ubunut server to use the entire disk space of your drive.

### Fix

Follow [Part 3 Step 6](settings-security#step-6---resize-disk-volume-server-install-only) of the guide.
