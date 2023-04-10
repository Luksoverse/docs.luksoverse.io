# Johnny's Node Guide

Guide by [Johnny EBD](https://t.me/moonmclaren)

> **_Disclaimer_**
> This article (the guide) is for informational purposes only and does not constitute professional advice. The author does not guarantee accuracy of the information in this article and the author is not responsible for any damages or losses incurred by following this article. A full disclaimer can be found at the bottom of this page — please read it before continuing.

This is a guide to setup a Lukso validator node in a home environment. It suggests the use of a dedicated machine to run a node with validation, separate from a personal client for remote access.

> **_NOTE_**
> Most of the following steps require working in a terminal

## Pre-Requisites :spiral_note_pad:

- [Ubuntu](https://ubuntu.com/)
- Dedicated mini-PC

### My Setup :computer:

- Ubuntu 22.04.1 LTS
- Intel NUC 12 Pro core i7 1260p
- Kingston Fury Impact 32GB (16GBx2) DDR4 3200MHz
- Seagate Firecuda 530 Gen4 NVME 2TB with heatsink

#### **Auto Start**

I had to manually change the BIOS settings to ensure that, if power gets reset, NUC always auto starts. A simple test is to unplug and plug power cord right back in.

For NUC I followed the following steps:

1. Press F2 during boot to enter BIOS setup
2. Go to `Power` -> `Secondary Power Settings` menu
3. Set the option for `After Power Failure` to `Power On`
4. Press F10 to save changes and exit BIOS

## System Setup :gear:

> **_NOTE_**
> The following steps are performed directly on a node machine.

### Update Manually and Install Dependencies

```shell=
sudo apt-get update
sudo apt-get upgrade -y
sudo apt dist-upgrade -y
sudo apt-get autoremove
sudo apt-get autoclean
sudo apt-get install -y nano wget make curl git net-tools
```

### Keep your System Up to Date Automatically

```shell=
sudo apt-get install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

### Disable Root Access

Root access should not be used. Instead a user should be using `sudo` to perform privileged operations on a system.

```shell=
sudo passwd -l root
```

### Configure Firewall

By default deny all traffic:

```shell=
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

Allow P2P ports for Lukso clients:

```shell=
sudo ufw allow 30303/tcp
sudo ufw allow 13000/tcp
sudo ufw allow 12000/udp
sudo ufw allow 30303/udp
```

> **_NOTE:_** make sure to open same ports on your home router

Enable Firewall:

```shell=
sudo ufw enable
```

Verify firewall configuration:

```shell=
sudo ufw status
```

It should look something like this:

```
Status: active

To                         Action      From
--                         ------      ----
13000/tcp                  ALLOW       Anywhere
12000/udp                  ALLOW       Anywhere
30303/tcp                  ALLOW       Anywhere
30303/udp                  ALLOW       Anywhere
13000/tcp (v6)             ALLOW       Anywhere (v6)
12000/udp (v6)             ALLOW       Anywhere (v6)
30303/tcp (v6)             ALLOW       Anywhere (v6)
30303/udp (v6)             ALLOW       Anywhere (v6)
```

## Secure Remote Access :closed_lock_with_key:

### WireGuard tunnel via PiVPN

Please read [this](https://hackmd.io/@JohnnyEBD/HyTqm4ejc) dedicated guide with detailed steps on how to easily setup a VPN host using the PiVPN installation script.

### OpenSSH Server Setup

Also refer to [this](https://hackmd.io/@JohnnyEBD/HkXf-1SC9) essential guide on how to setup and securely access your Ubuntu server with SSH service.

### Hardening SSH Security :muscle:

Optionally follow [this](https://hackmd.io/@JohnnyEBD/HJAio-lzo) guide to vastly improve the security of SSH service on your Ubuntu server by enabling 2FA and Fail2Ban.

#### **Improve SSH Connection**

While setting up a system, SSH terminal may seem to be slow due to wifi power management settings on a node machine. To disable it, modify the config:

```shell=
sudo nano /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf
```

Config:

```
[connection]
wifi.powersave = 2
```

Close editor by pressing `ctrl` + `X`, then save. Restart `NetworkManager` service:

```shell=
sudo systemctl restart NetworkManager
```

## Node Setup

> **_NOTE_**
> Following steps are performed on a personal machine.

Access your remote node machine

```shell=
ssh johnnyebd
```

**TBD AS LUKSO IS PREPARING FOR MAINNET LAUNCH** :fire::rocket::new_moon:

In the meantime follow developments and instructions for [L16 beta](https://docs.lukso.tech/networks/l16-testnet).

## Monitoring :telescope:

Sets up a dashboard to monitor state of a node machine, node, and validators.

> **_NOTE:_** Following steps are performed on personal machine.

Access your remote node machine

```shell=
ssh johnnyebd
```

### Prometheus

Add user to collect node stats:

```shell=
sudo adduser --system prometheus --group --no-create-home
```

Identify latest version for `linux-amd64` [here](https://prometheus.io/download/), e.g. `2.38.0`, and install prometheus with the following:

```shell=
cd
wget https://github.com/prometheus/prometheus/releases/download/v2.38.0/prometheus-2.38.0.linux-amd64.tar.gz
tar xzvf prometheus-2.38.0.linux-amd64.tar.gz
cd prometheus-2.38.0.linux-amd64
sudo cp promtool /usr/local/bin/
sudo cp prometheus /usr/local/bin/
sudo chown root:root /usr/local/bin/promtool /usr/local/bin/prometheus
sudo chmod 755 /usr/local/bin/promtool /usr/local/bin/prometheus
cd
rm prometheus-2.38.0.linux-amd64.tar.gz
rm -rf prometheus-2.38.0.linux-amd64
```

#### **Configure**

```shell=
sudo mkdir -p /etc/prometheus/console_libraries /etc/prometheus/consoles /etc/prometheus/files_sd /etc/prometheus/rules /etc/prometheus/rules.d
```

Edit configuration file:

```shell=
sudo nano /etc/prometheus/prometheus.yml
```

Content of the configuration file should have:

```
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    scrape_interval: 5s
    static_configs:
      - targets: ['127.0.0.1:9090']
  - job_name: 'beacon node'
    scrape_interval: 5s
    static_configs:
      - targets: ['127.0.0.1:8080']
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['127.0.0.1:9100']
  - job_name: 'validator'
    scrape_interval: 5s
    static_configs:
      - targets: ['127.0.0.1:8081']
  - job_name: 'ping_google'
    metrics_path: /probe
    params:
      module: [icmp]
    static_configs:
      - targets:
        - 8.8.8.8
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 127.0.0.1:9115  # The blackbox exporter's real hostname:port.
  - job_name: 'ping_cloudflare'
    metrics_path: /probe
    params:
      module: [icmp]
    static_configs:
      - targets:
        - 1.1.1.1
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 127.0.0.1:9115  # The blackbox exporter's real hostname:port.
  - job_name: json_exporter
    static_configs:
    - targets:
      - 127.0.0.1:7979
  - job_name: json
    metrics_path: /probe
    static_configs:
    - targets:
      - https://api.coingecko.com/api/v3/simple/price?ids=lukso-token&vs_currencies=usd
    relabel_configs:
    - source_labels: [__address__]
      target_label: __param_target
    - source_labels: [__param_target]
      target_label: instance
    - target_label: __address__
      replacement: 127.0.0.1:7979
```

Prepare data directory for prometheus:

```shell=
sudo chown -R prometheus:prometheus /etc/prometheus
sudo mkdir /var/lib/prometheus
sudo chown prometheus:prometheus /var/lib/prometheus
sudo chmod 755 /var/lib/prometheus
```

Open port to access to metrics. This is optional, only for external use:

```shell=
sudo ufw allow 9090/tcp
```

#### **Configure Service**

```shell=
sudo nano /etc/systemd/system/prometheus.service
```

The content of service configuration file:

```
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
Restart=always
RestartSec=5
ExecStart=/usr/local/bin/prometheus \
	--config.file /etc/prometheus/prometheus.yml \
	--storage.tsdb.path /var/lib/prometheus/ \
	--storage.tsdb.retention.time=31d \
	--web.console.templates=/etc/prometheus/consoles \
	--web.console.libraries=/etc/prometheus/console_libraries

[Install]
WantedBy=multi-user.target
```

Enable service:

```shell=
sudo systemctl daemon-reload
sudo systemctl start prometheus
sudo systemctl enable prometheus
```

#### **Prometheus update script**

In order to easily update Prometheus you can run this [script](https://github.com/remyroy/ethstaker/blob/main/scripts/update-prometheus.py), courtesy of remyroy, for which you need to have one of python's latest version and you can check that with:

```shell=
python3 --version
```

If it's an older version than 3.10 or not installed at all you can run this command:

```shell=
sudo apt install python3.10 -y
```

After that you can download the script and run it.

```shell=
wget https://raw.githubusercontent.com/remyroy/ethstaker/main/scripts/update-prometheus.py
python3 update-prometheus.py
```

The script will check the current installed version and it will compare it with the latest stable release version on Github. If there is a new version available, it will prompt you to update it.

### Grafana

Install:

```shell=
cd
sudo apt-get install -y apt-transport-https
sudo apt-get install -y software-properties-common wget
wget -qO- https://packages.grafana.com/gpg.key | sudo tee /etc/apt/trusted.gpg.d/grafana.asc
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
sudo apt-get update
sudo apt-get install grafana
```

#### **Configure Service**

```shell=
sudo nano /lib/systemd/system/grafana-server.service
```

The content of service configuration file:

```
[Unit]
Description=Grafana instance
Documentation=http://docs.grafana.org
Wants=network-online.target
After=network-online.target
After=postgresql.service mariadb.service mysql.service

[Service]
EnvironmentFile=/etc/default/grafana-server
User=grafana
Group=grafana
Type=simple
Restart=on-failure
WorkingDirectory=/usr/share/grafana
RuntimeDirectory=grafana
RuntimeDirectoryMode=0750
ExecStart=/usr/sbin/grafana-server \
                            --config=${CONF_FILE} \
                            --pidfile=${PID_FILE_DIR}/grafana-server.pid \
                            --packaging=deb \
                            cfg:default.paths.logs=${LOG_DIR} \
                            cfg:default.paths.data=${DATA_DIR} \
                            cfg:default.paths.plugins=${PLUGINS_DIR} \
                            cfg:default.paths.provisioning=${PROVISIONING_CFG_DIR}


LimitNOFILE=10000
TimeoutStopSec=20
CapabilityBoundingSet=
DeviceAllow=
LockPersonality=true
MemoryDenyWriteExecute=false
NoNewPrivileges=true
PrivateDevices=true
PrivateTmp=true
PrivateUsers=true
ProtectClock=true
ProtectControlGroups=true
ProtectHome=true
ProtectHostname=true
ProtectKernelLogs=true
ProtectKernelModules=true
ProtectKernelTunables=true
ProtectProc=invisible
ProtectSystem=full
RemoveIPC=true
RestrictAddressFamilies=AF_INET AF_INET6 AF_UNIX
RestrictNamespaces=true
RestrictRealtime=true
RestrictSUIDSGID=true
SystemCallArchitectures=native
UMask=0027

[Install]
Alias=grafana.service
WantedBy=multi-user.target
```

Enable service:

```shell=
sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl enable grafana-server
```

Open port to access metrics. This is optional and only for external use:

```shell=
sudo ufw allow 3000/tcp
```

#### **Configure Dashboard**

Login to grafana by navigating to webrowser `http://192.168.86.29:3000`. Replace `192.168.86.29` with the IP of your node machine. This is same IP used to ssh.

Default credentials are username and password `admin`. Set a new secure (long) password when prompted by grafana.

##### **Data Source**

1. On the left-hand menu, hover over the gear menu and click on `Data Sources`
2. Then click on the Add Data Source button
3. Hover over the Prometheus card on screen, then click on the Select button
4. Enter http://127.0.0.1:9090/ into the URL field, then click Save & Test

##### **Install Dashboard**

1. Hover over the plus symbol icon in the left-hand menu, then click on Import
2. Copy and paste [the dashboard](https://github.com/lykhonis/lukso-node-guide/blob/main/grafana/dashboard.json) into the `Import via panel json` text box on the screen
3. Then click the Load button
4. Then click the Import button

##### **Enable Alerts**

1. On the left-hand menu, hover over the alarm menue and click on `Notification channels`
2. Click on `New channel`
3. Select `Type` and [configure](https://grafana.com/docs/grafana/latest/alerting/old-alerting/notifications/)

On lukso dashboard:

1. Scroll down on a dashboard to `Alerts` section
2. Select each alert and click `Edit`
3. In `Alert` tab, select notifications `send to`
4. Save and repeat for each alert

### Node Exporter

Add user to monitors node stats:

```shell=
sudo adduser --system node_exporter --group --no-create-home
```

Install:

```shell=
cd
wget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz
tar xzvf node_exporter-1.3.1.linux-amd64.tar.gz
sudo cp node_exporter-1.3.1.linux-amd64/node_exporter /usr/local/bin/
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
rm node_exporter-1.3.1.linux-amd64.tar.gz
rm -rf node_exporter-1.3.1.linux-amd64
```

#### **Configure Service**

```shell=
sudo nano /etc/systemd/system/node_exporter.service
```

The content of service configuration file:

```
[Unit]
Description=Node Exporter

[Service]
Type=simple
Restart=always
RestartSec=5
User=node_exporter
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
```

Enable service:

```shell=
sudo systemctl daemon-reload
sudo systemctl start node_exporter
sudo systemctl enable node_exporter
```

#### **Node Exporter update script**

In order to easily update Node Exporter you can run this [script](https://github.com/remyroy/ethstaker/blob/main/scripts/update-node-exporter.py), courtesy of remyroy. Download and run it with:

```shell=
wget https://raw.githubusercontent.com/remyroy/ethstaker/main/scripts/update-node-exporter.py
python3 update-node-exporter.py
```

The script will check the current installed version and it will compare it with the latest stable release version on Github. If there is a new version available, it will prompt you to update it.

### Json Exporter

#### **Prerequisites**

Check `go` version if installed:

```shell=
go version
```

If it is less than `1.18.5` please install following:

```shell=
wget https://dl.google.com/go/go1.18.5.linux-amd64.tar.gz
sudo tar -xvf go1.18.5.linux-amd64.tar.gz
rm go1.18.5.linux-amd64.tar.gz
sudo mv go /usr/local/go-1.18.5
sudo ln -sf /usr/local/go-1.18.5/bin/go /usr/bin/go
go version
```

#### **Build and Install**

User:

```shell=
sudo adduser --system json_exporter --group --no-create-home
```

Install:

```shell=
cd
git clone https://github.com/prometheus-community/json_exporter.git
cd json_exporter
sudo make build
sudo cp json_exporter /usr/local/bin/
sudo chown json_exporter:json_exporter /usr/local/bin/json_exporter
cd
rm -rf json_exporter
```

#### **Configure**

```shell=
sudo mkdir /etc/json_exporter
sudo chown json_exporter:json_exporter /etc/json_exporter
```

Setup `LYX` token price:

```shell=
sudo nano /etc/json_exporter/json_exporter.yml
```

The content of configuration file:

```
modules:
  default:
    metrics:
    - name: lyxusd
      path: "{.lukso-token.usd}"
      help: Lukso (LYX) price in USD
```

Change ownership of configuration file:

```shell=
sudo chown json_exporter:json_exporter /etc/json_exporter/json_exporter.yml
```

#### **Configure Service**

```shell=
sudo nano /etc/systemd/system/json_exporter.service
```

The content of service configuration file:

```
[Unit]
Description=JSON Exporter

[Service]
Type=simple
Restart=always
RestartSec=5
User=json_exporter
ExecStart=/usr/local/bin/json_exporter --config.file /etc/json_exporter/json_exporter.yml

[Install]
WantedBy=multi-user.target
```

Enable service:

```shell=
sudo systemctl daemon-reload
sudo systemctl start json_exporter
sudo systemctl enable json_exporter
```

### Ping

Pings google and cloudflare to track latency.

```shell=
sudo adduser --system blackbox_exporter --group --no-create-home
```

Install:

```shell=
cd
wget https://github.com/prometheus/blackbox_exporter/releases/download/v0.22.0/blackbox_exporter-0.22.0.linux-amd64.tar.gz
tar xvzf blackbox_exporter-0.22.0.linux-amd64.tar.gz
sudo cp blackbox_exporter-0.22.0.linux-amd64/blackbox_exporter /usr/local/bin/
sudo chown blackbox_exporter:blackbox_exporter /usr/local/bin/blackbox_exporter
sudo chmod 755 /usr/local/bin/blackbox_exporter
rm blackbox_exporter-0.22.0.linux-amd64.tar.gz
rm -rf blackbox_exporter-0.22.0.linux-amd64
```

Enable ping permissions:

```shell=
sudo setcap cap_net_raw+ep /usr/local/bin/blackbox_exporter
```

#### **Configure**

```shell=
sudo mkdir /etc/blackbox_exporter
sudo chown blackbox_exporter:blackbox_exporter /etc/blackbox_exporter
```

```shell=
sudo nano /etc/blackbox_exporter/blackbox.yml
```

The content of configuration file:

```
modules:
        icmp:
                prober: icmp
                timeout: 10s
                icmp:
                        preferred_ip_protocol: ipv4
```

Change ownership of configuration file:

```shell=
sudo chown blackbox_exporter:blackbox_exporter /etc/blackbox_exporter/blackbox.yml
```

#### **Configure Service**

```shell=
sudo nano /etc/systemd/system/blackbox_exporter.service
```

The content of service configuration file:

```
[Unit]
Description=Blackbox Exporter

[Service]
Type=simple
Restart=always
RestartSec=5
User=blackbox_exporter
ExecStart=/usr/local/bin/blackbox_exporter --config.file /etc/blackbox_exporter/blackbox.yml

[Install]
WantedBy=multi-user.target
```

Enable service:

```shell=
sudo systemctl daemon-reload
sudo systemctl start blackbox_exporter
sudo systemctl enable blackbox_exporter
```

Luksoverse wishes prosperous validation to everyone in hopes that this guide was complete and easy enough to follow. Any suggestions you might have please don't hesitate to reach out to any of us.

> **_Full Disclaimer_**
> This article (the guide) is for informational purposes only and does not constitute professional advice. The author does not warrant or guarantee the accuracy, integrity, quality, completeness, currency, or validity of any information in this article. All information herein is provided “as is” without warranty of any kind and is subject to change at any time without notice. The author disclaims all express, implied, and statutory warranties of any kind, including warranties as to accuracy, timeliness, completeness, or fitness of the information in this article for any particular purpose. The author is not responsible for any direct, indirect, incidental, consequential or any other damages arising out of or in connection with the use of this article or in reliance on the information available on this article. This includes any personal injury, business interruption, loss of use, lost data, lost profits, or any other pecuniary loss, whether in an action of contract, negligence, or other misuse, even if the author has been informed of the possibility.

## Credits

- https://github.com/metanull-operator/eth2-ubuntu
- https://github.com/lykhonis/lukso-node-guide
- https://github.com/remyroy/ethstaker
- https://github.com/SomerEsat/ethereum-staking-guides
