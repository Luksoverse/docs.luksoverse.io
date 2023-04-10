# LUKSO node troubleshoot

Guide by [JordyDutch](https://github.com/JordyDutch)

## Permission denied

If you get an error that the permission is denied use `sudo` in front of your command.

## Sync issues

Make sure you are using the latest version of the CLI

```
sudo curl https://install.l16.lukso.network | sudo bash
```

Use the `refresh` command to fully update and restart your node and validators

```
sudo lukso network refresh
```

## Clear your node files

If the fixes above doesn't resolve your problems you can always clean your node and start fresh.

:::warning
This will delete all node "history" data and un-important info. All your important data like validator keys will stay exist.
:::

Clear your node data

```
sudo lukso network clear
```

Update and restart your node and validators

```
sudo lukso network refresh
```

## Change your node name

If you want to change your node name you can do this in the file `node_config.yaml`

```sh
sudo nano node_config.yaml
```

Change your node name for example to: `L16-Luksoverse-USERNAME`

Change `USERNAME` to your Discord or Telegram username.

Close it with `ctrl+X` and save it.

## Reset Docker

If you have any problems with your Docker processes, you can stop and delete all Docker processes with the following commands.

```
sudo docker ps -a | awk '{print $1}' | xargs -L1 sudo docker rm
```

```
sudo docker images | awk '{print $3}' | xargs -L1 sudo docker rmi
```

## More fixes will be added if necessary.
