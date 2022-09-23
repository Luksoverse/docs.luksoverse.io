

The next steps will configure PuTTY (SSH client software) on a personal device running Windows. You will use this device to control your node remotely.

#### 2.1 - Download and install PuTTY
PuTTY is a free and popular SSH client for Windows
1. Visit the [PuTTY](https://putty.org) website
2. Download the MSI installer
3. Run the installer
4. Choose "Install anyway if prompted with a warning from Microsoft.
5. Accept the default options during installation
 
#### 2.2 - Configure PuTTY
1. Open PuTTY
2. Enter your node's IP address ([from step 1.3](#13---determine-node-ip-address)) in the Host Name box
3. Click "open"
4. Click "Accept" when prompted with the security alert.
5. Enter your node user name and password
 
You should now see the same command prompt you used while directly interacting with your node machine in the previous steps.

:::tip
In Step 5, we will copy and paste commands from this guide into the PuTTY terminal. 

To copy commands from the guide, hover over the top right corner of the gray command block and click the copy button.

Right-click anywhere inside the terminal window to paste the command.
:::
### Step 2: Generate the OpenSSH-compatible Keys with PuTTYgen
1. Start the PuTTYgen utility, by double-clicking on its .exe file or pressing the Windows key and searching for PuTTYgen
2. For Type of key to generate, select SSH-2 RSA
3. In the Number of bits in a generated key field, specify 4096
4. Click the Generate button
5. Move your mouse pointer around in the blank area of the Key section, below the progress bar (to generate some randomness) until the progress bar is full
6. A private/ public key pair has now been generated
8. Type a passphrase in the Key passphrase field & re-type the same passphrase in the Confirm passphrase field
9. Click the Save public key button & choose whatever filename you'd like (some users create a folder in their computer named my_keys)
10. Click the Save private key button & choose whatever filename you'd like (you can save it in the same location as the public key, but it should be a location that only you can access)
11. Right-click in the text field labeled Public key for pasting into OpenSSH authorized_keys file and choose Select All
12. Right-click again in the same text field and choose Copy

### Step 3: Save The Public Key On The Server
You now need to paste the public key copied in the last step in the `authorized_keys` file on your node.

1. Log into you node `ssh <node-user>@<node-ip>`
1. Open the file
```
nano ~/.ssh/authorized_keys
```
1. Paste the SSH public key into the file
1. Save and exit by pressing `Ctrl + X`, then `y` , then `Enter`

### Step 4: Create a PuTTY Profile to Save Your Server's Settings
Create a profile to save you connection information.

1. Start PuTTY by double-clicking its executable file or pressing the Windows key and searching for PuTTY
1. Navigate PuTTY's various categories, along the left-hand side of the window
1. PuTTY's initial window is the Session Category
1. In the Host Name field, enter the IP address of your node `<node-ip>`
1. Enter the port number in the Port field `<ssh-port>`
1. Select SSH under Protocol
1. Along the left-hand side of the window, select the Data sub-category, under Connection;
1. Enter your node username in the Auto-login username field `<node-user>`
1. Expand the SSH sub-category, under Connection;
1. Highlight the Auth sub-category and click the Browse button, on the right-hand side of the PuTTY window;
1. Browse to and select your previously-created private key;
1. Return to the Session Category and enter a name for this profile in the Saved Sessions field;
1. Click the Save button for the Load, Save or Delete a stored session

Now you can log in to your node and you will not be prompted for a password. However, if you had set a passphrase on your public key, you will be asked to enter the passphrase at that time (and every time you log in, in the future).

:::
  </TabItem>