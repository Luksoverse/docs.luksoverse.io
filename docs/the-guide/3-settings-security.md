

# Part 3 - Settings & Security
In part three, we will update various settings to improve security.

## Step 1 - Configure SSH Server
In this step, the SSH server will be configured. The following keywords will be set:
- `ChallengeResponseAuthentication no` - disables keyboard authentication
- `PasswordAuthentication no` - disables password authentication
- `PermitRootLogin prohibit-password` - disables password and keyboard-interactive authentication for root
- `PermitEmptyPasswords no` - When password authentication is allowed, it specifies whether the server allows login to accounts with empty password strings. The default is no.

### 1.1 -  open the configuration file:

Connect to you node machine

```
sudo nano /etc/ssh/sshd_config
```
### 1.2 - configure the settings

Copy the code block below and paste the keywords to the top of the file.
 
```bash title=/etc/ssh/sshd_config
ChallengeResponseAuthentication no
PasswordAuthentication no
PermitRootLogin prohibit-password
PermitEmptyPasswords no
```

Save and exit

### 1.3 - validate SSH configuration 

Check that the ssdh_config file is valid. If this command results in errors, go back to the last step and double check the changes you made.

```
sudo sshd -t
```

### 1.4 - restart ssh service

```
sudo systemctl restart sshd
```

Close the ssh session

```
exit
```

### 1.5 - test connection

Reconnect to your node machine to verify the settings have not caused any connectivity issues.

## Step 2 - System Update
It is very important to keep your machine updated. In this step we will run a manual update and the configure the machine to automatically update.


### 2.1 - manually update the system
    
```shell=
sudo apt-get update -y
sudo apt dist-upgrade -y
sudo apt-get autoremove
sudo apt-get autoclean
```
### 2.2 - configure auto-update

```shell=
sudo apt-get install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

## Step 3 - Disable Root Access
A root access should not be used. Instead, a user should be using sudo to perform privileged operations on a system.

```
sudo passwd -l root
```

## Step 4 - Block Unauthorized Access
Install Fail2ban to block IP addresses that are attempting to access our node. Fail2ban blocks addresses after a certain number of failed attempts.

### 4.1 - install fail2ban
```
sudo apt-get install fail2ban -y
```
### 4.2 - configure fail2ban
Edit a config to monitor ssh logins

```
sudo nano /etc/fail2ban/jail.local
```

Replace `<ssh-port>` to match the ssh port number.

```
[sshd]
enabled=true
port=<ssh-port>
filter=sshd
logpath=/var/log/auth.log
maxretry=3
ignoreip=
```

Save changes and close the editor

### 4.3 - restart the service

```
sudo systemctl restart fail2ban
```


## Step 5 - Improve SSH Connection


WiFi power management may slow down SSH connections. Modifying the config file will disable it.

### 5.1 - open the configuration file
```
sudo nano /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf
```

### 5.2 - modify power setting
Find the wifi.power setting and change to to match the following:
```
[connection]
wifi.powersave = 2
```

Save changes and close the editor.

### 5.3 - restart the service:

```
sudo systemctl restart NetworkManager
```

---
References
- [Vlad's Guide](https://github.com/lykhonis/lukso-node-guide#auto-start)
- [Setup an Eth2 Mainnet Validator System on Ubuntu](https://github.com/metanull-operator/eth2-ubuntu)
- https://man.openbsd.org/sshd_config