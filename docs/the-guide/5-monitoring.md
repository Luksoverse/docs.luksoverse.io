

# Part 5 - Monitoring

This guide will show you step by step how to do monitoring on your machine by giving you the instructions to install and configure all the tools needed. 

## Why would you want to do monitoring?

Here are some good reasons why you might want to do monitoring on your machine:

1. **Information visibility**: You want to expose and be able to easily see your machine details.
2. **Issue tracking and debugging**: You want to be able to inspect what happened in the past and see clearly how your machine reacted to some event.
3. **Issue prevention**: You want to be able to see potential resources exhaustion ahead of time.

## Overview

We will install 5 tools with this guide:

- [Node Exporter](https://prometheus.io/docs/guides/node-exporter/) - monitors the node machine's performance

- [JSON Exporter](https://github.com/prometheus-community/json_exporter) - scrapes LUKSO price information from CoinGecko.

- [Blackbox Exporter](https://github.com/prometheus/blackbox_exporter) monitors ping time between the node machine and two DNS servers.

- [Prometheus](https://prometheus.io/docs/introduction/overview/) - collects metrics from the node, JSON and Blackbox exporters.

- [Grafana](https://grafana.com/oss/grafana/) - queries Prometheus for metrics, displays the information on "dashboards," and provides alerts when data is abnormal.

Connect to your node machine and proceed to the next step.

## Step 1 - Node Exporter

Node_exporter



> add description

---

### 1.1 - Add a user

```
sudo adduser --system node_exporter --group --no-create-home
```

### 1.2 - Install

#### Download Node Exporter

Check https://prometheus.io/download/#node_exporter to make sure 1.3.1 is the latest stable. As of this writing, 1.4.0 was still in pre-release.
```
wget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz
```

#### Extract the archive
```
tar xzvf node_exporter-1.3.1.linux-amd64.tar.gz
```

#### Copy the binary to the following location and set ownership
```
sudo cp node_exporter-1.3.1.linux-amd64/node_exporter /usr/local/bin/
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
```

#### Clean up
```rm node_exporter-1.3.1.linux-amd64.tar.gz
rm -rf node_exporter-1.3.1.linux-amd64
```

### 1.3 - Configure the system service
#### Create a node explorer configuration file.

```
sudo nano /etc/systemd/system/node_exporter.service
```

#### Add the following to the file, then save and quit.

```shell title="contents of /etc/systemd/system/node_exporter.service"
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
### 1.4 - Enable the service

#### Refresh systemd to reflect the changes
```
sudo systemctl daemon-reload
```

#### Start and check the status of the service
```
sudo systemctl start node_exporter
sudo systemctl is-active node_exporter
```

The output should be
```
active
```

#### Set Node Exporter to start on boot
```
sudo systemctl enable node_exporter
```

## Step 2 - Json Exporter

### 2.1 -  Prerequisites 

#### Check `go` version and install if needed:

```
go version
```

If it is less than `1.17.7` install the following:

```shell=
wget https://dl.google.com/go/go1.17.7.linux-amd64.tar.gz
sudo tar -xvf go1.17.7.linux-amd64.tar.gz
rm go1.17.7.linux-amd64.tar.gz
sudo mv go /usr/local/go-1.17.7
sudo ln -sf /usr/local/go-1.17.7/bin/go /usr/bin/go
go version
```



### 2.2 - Add user

```shell=
sudo adduser --system json_exporter --group --no-create-home
```

### 2.3 - Install

```shell=
cd
git clone https://github.com/prometheus-community/json_exporter.git
cd json_exporter
make build
sudo cp json_exporter /usr/local/bin/
sudo chown json_exporter:json_exporter /usr/local/bin/json_exporter
cd
rm -rf json_exporter
```

### 2.4 - Configure

#### Create directory and set ownership
```
sudo mkdir /etc/json_exporter
sudo chown json_exporter:json_exporter /etc/json_exporter
```

#### Setup `LYX` token price:

```
sudo nano /etc/json_exporter/json_exporter.yml
```

Copy/paste the content of configuration file.

```
metrics:
- name: lyxusd
  path: "{.lukso-token.usd}"
  help: Lukso (LYX) price in USD
```

Save and exit

#### Change ownership of configuration file:

```shell=
sudo chown json_exporter:json_exporter /etc/json_exporter/json_exporter.yml
```

#### - Configure service

```shell=
sudo nano /etc/systemd/system/json_exporter.service
```

Copy/paste the content of configuration file.

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

### 2.5 - Enable service:

```shell=
sudo systemctl daemon-reload
sudo systemctl start json_exporter
sudo systemctl enable json_exporter
```

## Step 3 - Blackbox Exporter

Blackbox exporter pings google and cloudflare to track latency.

### 3.1 - Add a user for the service
```shell=
sudo adduser --system blackbox_exporter --group --no-create-home
```

### 3.2 - Install

```shell=
cd
wget https://github.com/prometheus/blackbox_exporter/releases/download/v0.18.0/blackbox_exporter-0.18.0.linux-amd64.tar.gz
tar xvzf blackbox_exporter-0.18.0.linux-amd64.tar.gz
sudo cp blackbox_exporter-0.18.0.linux-amd64/blackbox_exporter /usr/local/bin/
sudo chown blackbox_exporter:blackbox_exporter /usr/local/bin/blackbox_exporter
sudo chmod 755 /usr/local/bin/blackbox_exporter
rm blackbox_exporter-0.18.0.linux-amd64.tar.gz
rm -rf blackbox_exporter-0.18.0.linux-amd64
```

### 3.3 - Enable ping permissions

```
sudo setcap cap_net_raw+ep /usr/local/bin/blackbox_exporter
```

### 3.4 - Configure the exporter

#### Create directory and assign ownership
```
sudo mkdir /etc/blackbox_exporter
sudo chown blackbox_exporter:blackbox_exporter /etc/blackbox_exporter
```

#### Open configuration file
```
sudo nano /etc/blackbox_exporter/blackbox.yml
```

#### Copy/paste the contents below to the configuration file

```bash title=/etc/blackbox_exporter/blackbox.yml
modules:
        icmp:
                prober: icmp
                timeout: 10s
                icmp:
                        preferred_ip_protocol: ipv4
```

#### Change ownership of configuration file:

```shell=
sudo chown blackbox_exporter:blackbox_exporter /etc/blackbox_exporter/blackbox.yml
```

### 3.5 - Configure service

#### Open the configuration file

```
sudo nano /etc/systemd/system/blackbox_exporter.service
```

#### Copy/paste the contents below to the configuration file

```bash title=/etc/systemd/system/blackbox_exporter.service
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

### 3.6 - Enable the service

```shell=
sudo systemctl daemon-reload
sudo systemctl start blackbox_exporter
sudo systemctl enable blackbox_exporter
```

## Step 4 - Prometheus

### 4.1 - Add a user

```shell=
sudo adduser --system prometheus --group --no-create-home
```

### 4.2 - Install

As of this writing, the current version of Prometheus is 2.37.0 LTS

Confirm the current version for `linux-amd64` [here](https://prometheus.io/download/)

If a newer version exists, replace all occurrences of `2.37.0` with the new version number in the code box below.


```
cd
wget https://github.com/prometheus/prometheus/releases/download/v2.37.0/prometheus-2.37.0.linux-amd64.tar.gz
tar xzvf prometheus-2.37.0.linux-amd64.tar.gz
cd prometheus-2.37.0.linux-amd64
sudo cp promtool /usr/local/bin/
sudo cp prometheus /usr/local/bin/
sudo chown root:root /usr/local/bin/promtool /usr/local/bin/prometheus
sudo chmod 755 /usr/local/bin/promtool /usr/local/bin/prometheus
cd
rm prometheus-2.37.0.linux-amd64.tar.gz
rm -rf prometheus-2.37.0.linux-amd64
```

### 4.3 - Configure

```shell=
sudo mkdir -p /etc/prometheus/console_libraries /etc/prometheus/consoles /etc/prometheus/files_sd /etc/prometheus/rules /etc/prometheus/rules.d
```

#### Open the configuration file.

```shell=
sudo nano /etc/prometheus/prometheus.yml
```

#### Copy/paste the contents below to the configuration file.

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

#### Prepare data directory for prometheus:

```shell=
sudo chown -R prometheus:prometheus /etc/prometheus
sudo mkdir /var/lib/prometheus
sudo chown prometheus:prometheus /var/lib/prometheus
sudo chmod 755 /var/lib/prometheus
```

### 4.4 - Open port to access metrics.
Opening this port allows access to prometheus metrics in the web browser of you personal computer while connected to the local network. Opening a port in this way poses a slight security risk. For an alternative see **coming soon**


#### Open the port

```shell=
sudo ufw allow 9090/tcp
```
### 4.5 - Configure services

#### Open the configuration file

```shell=
sudo nano /etc/systemd/system/prometheus.service
```

#### Copy/paste the contents below to the configuration file

```shell= title=/etc/systemd/system/prometheus.service
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
ExecReload=/bin/kill -HUP $MAINPID

[Install]
WantedBy=multi-user.target
```

Enable service:

```shell=
sudo systemctl daemon-reload
sudo systemctl start prometheus
sudo systemctl enable prometheus
```
## Step 5 - Grafana

### 5.1 - Install

```shell=
cd
sudo apt-get install -y apt-transport-https
sudo apt-get install -y software-properties-common wget
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
sudo apt-get update
sudo apt-get install grafana-enterprise
```

### 5.2 - Configure Service

#### Open the configuration file
```shell=
sudo nano /lib/systemd/system/grafana-server.service
```

#### Copy/paste the contents below to the configuration file.

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

### 5.3 - Enable service

```shell=
sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl enable grafana-server
```
### 5.4 - Open port to access metrics.
Opening this port allows access to grafana's dashboard in the web browser of you personal computer while connected to the local network. Opening a port in this way poses a slight security risk. For an alternative see **coming soon**

```shell=
sudo ufw allow 3000/tcp
```

### 5.5 - Configure Dashboard

Login to grafana by opening a web browser `http://<node-ip>:3000`. Replace `<node-ip>` with IP of your node machine. This is same IP used to ssh.


```shell= title="Default credentials"
username: username
password: admin
```
 Set a new secure (long) password when prompted by grafana.

#### Data Source

1. On the left-hand menu, hover over the gear menu and click on `Data Sources`
2. Then click on the Add Data Source button
3. Hover over the Prometheus card on screen, then click on the Select button
4. Enter http://127.0.0.1:9090/ into the URL field, then click Save & Test

#### Install Dashboard

1. Hover over the plus symbol icon in the left-hand menu, then click on Import
2. Copy and paste the [dashboard](https://github.com/LYXstaker/docs/blob/main/grafana/dashboard.json) into the `Import via panel json` text box on the screen
3. Then click the Load button
4. Then click the Import button

### 5.6 - Enable Alerts

1. On the left-hand menu, hover over the alarm menu and click on `Notification channels`
2. Click on `New channel`
3. Select `Type` and [configure](https://grafana.com/docs/grafana/latest/alerting/old-alerting/notifications/)

On lukso dashboard:

1. Scroll down on a dashboard to `Alerts` section
2. Select each alert and click `Edit`
3. In `Alert` tab, select notifications `send to`
4. Save and repeat for each alert
---
* [Vlad's Guide](https://github.com/lykhonis/lukso-node-guide#prometheus)
* [CoinCashew](https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet/part-i-installation/monitoring-your-validator-with-grafana-and-prometheus?q=grafana)
* [Ethereum.org](https://ethereum.org/en/developers/tutorials/monitoring-geth-with-influxdb-and-grafana/)
* [Prysm Docs](https://docs.prylabs.network/docs/prysm-usage/monitoring/grafana-dashboard)
* [Ethstaker](https://github.com/remyroy/ethstaker/blob/main/monitoring.md)
