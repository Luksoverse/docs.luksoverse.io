---
title: 'Start here'
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

## Before you begin

Guide by [RobG](https://github.com/KEEZ-RobG)

Running a validator node is a highly technical task and a long term commitment. It's a responsibility to your investment and to the network. The network's **security and stability** depends on properly maintained nodes and validator software running 24/7. You will need to:

- Monitor you node continuously
- Be prepared to update your node whenever new client software is released
- Be ready to learn

## Start Now

L16 test net is live. If you are planning to run a validator for mainnet, start practicing ASAP!

## Codeblocks

You will see gray code blocks throughout the guide that allow you to easily copy and paste information.

```
example code block
```

Hovering over the top right side of a code block reveals a copy icon, which allows you to copy the information without highlighting the text.

![copy-button](./img-start/copy.gif)

Codeblocks are used for

- terminal commands
- configuration files
- examples

Some codeblocks in this guide will have titles.

```sh title="Code block title"
code block
```

The following are examples of the types of codeblocks you will see in this guide.

### Terminal commands

**no title**: all blocks without a title are terminal commands. copy and paste them directly to the terminal prompt.

```
nano ~/.ssh/config
```

### Configuration files

**filename**: codeblock titles that contain filenames contain information to copy/paste into a file editor.

```bash title=~/.ssh/config
Host lukso
  User <node-user>
  HostName <node-ip>
  Port <ssh-port>
```

### Example information

**Example:** some codeblocks will contain examples of what a file should look like.

This block is for a step that requires modifying a configuration file. It shows you what the file should look like after you make the modification. In this example, we are instructed to find the `wifi.powersave` setting and change the value to `2`.

```sh title=Example
[connection]
wifi.powersave = 2
```

## User specific information

Username, router and node IP addresses, and SSH port will differ for each user. Commands that require this information will have placeholders that must be replaced with your specific information.

This command needs the username and IP address of a node machine. The title will indicate the variables to replace.

```sh title="Replace: <node-user>, and <node-ip>"
ssh <node-user>@<node-ip>
```

You can copy/paste these commands and edit them in the terminal before pressing `enter`. In this example, the username is `node` and the ip address is `192.168.0.150`

![user-specific](./img-start/user-specific.gif)

The table below is a cheat sheet that identifies how to determine these variables and how they appear in the code blocks.

| Variable          | How to determine                                                   | Name          |
| ----------------- | ------------------------------------------------------------------ | ------------- |
| Node user name    | chosen during server/desktop install                               | `<node-user>` |
| Node IP address   | execute the command `hostname -I` in terminal                      | `<node-ip>`   |
| Router IP address | execute the command `ip route show default`                        | `<router-ip>` |
| SSH port          | chosen in [Part 1 - 2.2](node-machine#22---change-ssh-port-number) | `<ssh-port>`  |

## Guide Order

When using this guide to setup a node from start to finish, use the "next" button at the bottom of the pages to ensure you complete all steps and in the correct order.

---

References

- [Vlad's Guide](https://github.com/lykhonis/lukso-node-guide#auto-start)
- [Setup an Eth2 Mainnet Validator System on Ubuntu](https://github.com/metanull-operator/eth2-ubuntu)
- [ethstaker](https://discord.gg/enuHBXGS)

---
