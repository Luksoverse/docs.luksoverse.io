# Luksoverse mainnet guide

Core contributors: [JordyDutch](https://github.com/JordyDutch) & [Selby]()

## Prepare Your System

:::danger
This guide is still in progress. You can use it but we will do some editting soon.
:::

:::warning
Install Ubuntu 22.04 (LTS) or later and choose the minimal version when prompted (also choose NOT to install third-party applications).

Erasing the disk and using your machine as a dedicated validator is highly recommended. Be aware, you will be wiping the drive clean, including any operating systems or files currently on the machine. Save any files you want to keep before proceeding.

After install is complete, in Settings,
-turn off WiFi and Bluetooth
-turn off analytics, location services and any other data sharing
-in Power Settings click Performance mode on and Screen Blank to "Never"
:::

Go to Luksoverse Docs website (using your normal computer, NOT your validator machine) and follow steps 1, 2, 3 and 5 (skip part 4 until mainnet is actually launching) to prepare your systems security and set up your Grafana/Prometheus Dashboard.

[https://docs.luksoverse.io/docs/node-guide/start-here/](https://docs.luksoverse.io/docs/node-guide/start-here/)

## Setup Your Wagyu Key Generator

:::info
Best practice is to generate your keys in a clean and separate location from your validator machine. For example, you can create a one-time unique user on your Mac or other operating system and delete all files after generating the keys.
:::

### Download the right file

Download the latests Wagyu Key Generator

[https://github.com/lukso-network/tools-wagyu-key-gen/releases/tag/v1.8.0](https://github.com/lukso-network/tools-wagyu-key-gen/releases/tag/v1.8.0)

- The **.dmg** version is for **MacOS**
- The **.AppImage** is for **Linux(Ubuntu)**
- The **.exe** is for **Windows**

### Ubuntu

For Ubuntu, follow these directions:

Open your terminal
`cd` to your file location, if it is in your Downloads folder run this command:

```
cd Downloads
```

:::warning
Make sure the version you downloaded matches the next command. At this moment, the latest version is **1.8.0**
:::

Enter the following command to make the file executable:

```
chmod u+x LUKSO.Wagyu.KeyGen-1.8.0.AppImage
```

Make sure Ubuntu is updated:

```
sudo apt update && sudo apt upgrade -y
```

Install FUSE to execute the file:

```
 sudo apt-get install fuse libfuse2
```

Execute the LUKSO Key Generator:

```
./LUKSO.Wagyu.KeyGen-1.8.0.AppImage
```

### MacOS

Download the latests Wagyu Key Generator, for MacOS you need the **.dmg** file.

[https://github.com/lukso-network/tools-wagyu-key-gen/releases/tag/v1.8.0](https://github.com/lukso-network/tools-wagyu-key-gen/releases/tag/v1.8.0)

Unzip the file and double click on it to install and run it.

### Windows

Download the latests Wagyu Key Generator, for Windows you need the **.exe** file.

[https://github.com/lukso-network/tools-wagyu-key-gen/releases/tag/v1.8.0](https://github.com/lukso-network/tools-wagyu-key-gen/releases/tag/v1.8.0)

Unzip the file and double click on it to install and run it.

:::info
We didn't tested this one yet, if someone is using Windows please confirm or chage this guide
:::

## Generate Your Validator Keys

NOTE: Have your withdrawal address prepared beforehand (this is the address where your LYX and rewards will withdraw to... it is recommended that you use a hardware wallet address).

Put this address on text doc and save on a clean USB drive (this address is needed during the key generating process, make sure it is accurate)

### Mnemonic

If this is the first time you are generating validator keys click on **CREATE NEW SECRET RECOVERY PHRASE**

If you are adding more validators or lost your validator password you can restore your old files by **using your existing recovery phrase**.

If you are creating an new secret recovery phrase, make sure you save your Mnemonic on a safe location. Use for example a Bildfodl to save your 24 words Mnemonic in steel and protect it from fire, water and other influences.

You can buy a Bildfodl here with our referal link on their official websites:

[Privacy Pro's official website](https://shop.privacypros.io?afmc=16t&utm_campaign=16t&utm_source=leaddyno&utm_medium=affiliate)
[Ledger officials website](https://shop.ledger.com/?r=655771bf89ed)

:::danger
Save your Mnemonic somewhere safe and offline! It is the only way to recover your validator funds!
:::

### Create your key

#### Amount of validators

Create a folder on your desktop and browse to the folder, save it as location to generate the keys. Choose the amount of validators you want to deposit.

#### Validator password

Create a password for your validator keystores, save it on a safe location and don't lose your password.

### Validator withdraw address

Create a new Ethereum address on for example a Ledger or Trezor wallet and never use it for anything else. Don't connect it to websites or trade with this wallet. At the moment you withdraw your validator funds, the funds will go to this address.

You can buy a Ledger or Trezor cold-wallet on their official websites here with our referall link:

[Ledger official website](https://shop.ledger.com/?r=655771bf89ed)

You should see 1 deposit_data file and a keystore for every validator you created. If you put in 15 you would see 15 `keystore-m` files

## Deposit Your LYXe

:::danger
⚠️ Be aware of scammers and phishing attacks. Please be sure to READ EVERYTHING and VERIFY DOMAINS, if you want to participate as a Genesis Validator check very carefully that the website is **deposit.mainnet.lukso.network!** ⚠️
:::

- Go to the **offical** LUKSO deposit website with a browser that has MetaMask installed.

- Click on the **Become a validator** button. Follow the checklist and make sure you did read and understand everything

- Once you get on the **Upload deposit data page** you upload your `deposit_data-[timestamp].json` file to the website.

- Connect your wallet

:::info
The deposit website will check if your `deposit_data-[timestamp].json` is valid for mainnet and if you have enough LYXe in your wallet.
:::

You now have to sign a transaction of 32 LYXe for every validator you want to deposit. If you have signed all transactions for every of your X amount of keys you are prepared for mainnet and you can wait for further instructions how to start up your node.

**If you want to add or change things, please contribute to our guides on our GitHub!**
[https://github.com/Luksoverse/docs.luksoverse.io](https://github.com/Luksoverse/docs.luksoverse.io)
