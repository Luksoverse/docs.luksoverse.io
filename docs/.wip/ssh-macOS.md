The next steps will configure the client software on a personal device running Mac OS. You will use this device to control your node remotely.

#### Step 1: Open terminal
Go to Applications > Utilities, and then open Terminal

#### Step 2: Connect to node
Establish an SSH connection using a command with this syntax: `ssh <node-user>@<node-ip>`
1. Example command: `ssh joe@192.168.1.5`
2. Type `yes` and press `Enter` when prompted with the authenticity warning.
3. Enter the node user's password

You should now see the same command prompt you used while directly interacting with your node machine in the previous steps.

Copy and paste this guide's commands from the grey block into the terminal window.

:::tip
In Step 5 we will copy and paste commands from this guide into the terminal.

To copy commands from the guide, hover over the top right corner of the gray command block and click the copy button.

To paste a copied command into a Mac terminal, choose `Edit` > `Paste` from the terminal window.
:::
  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

## Configure Personal Device - Ubuntu
The next steps will configure the client software on a personal device running Ubuntu. You will use this device to control your node remotely.

#### Step 1: Connect to node (todo)



The SSH command requires the username, IP address, and port number of the node machine. 

Simplify the SSH command by updating the SSH config file with your node credentials.
```
nano ~/.ssh/config 
```

Copy/Paste the following into the config file.
Replace `<node-user>`, `<node-ip>`, and `<ssh-port>`
IP address and port number have been determined in previous steps. 
`<node-user>` is your node machine's user name.

```
Host lukso
  User <node-user>
  HostName <node-ip>
  Port <ssh-port>
```

Attempt to connect to verify the configuration:

```
ssh lukso
```

#### Step 3: Generate SSH Keys

SSH is more secure when using public/pricate keys instead of a password. In this step we well generate keys on your personal device and send the public key to the node machine.

On your **personal device**, create a new key pair for ssh authentication.

```
ssh-keygen -t rsa -b 4096
```

Copy the public key **keyname.pub** to a node machine. Replace **keyname.pub** with a key in home directory.

```
ssh-copy-id -i ~/.ssh/keyname.pub lukso
```

Test key login.  This time it should not prompt for a password.
```
ssh lukso
```