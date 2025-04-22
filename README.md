# Airdrop Auto Accept
<p align="center">
  <img src="https://github.com/Vinpasso/Airdrop-Auto-Accept/blob/main/res/logo_export.svg?raw=true" alt="Airdrop Auto Accept Logo"/>
</p>

Script to automatically accept incoming files via Airdrop without user interaction.
This script is designed to run on macOS and requires the preinstalled `osascript` command-line tool to interact with the system's GUI.

## Disclaimer

This script will allow anyone/your contacts (depending on your Airdrop and Bluetooth settings) to send files to your Mac without your explicit consent. This can be a security risk, as it may allow unwanted  or malicious files to be sent to your device. Use this script at your own risk and ensure that you trust the files that you are accepting.

## Setup

Download the script `airdrop-auto-accept.js` and run it in the pre-installed "Terminal" application with the following command:

```bash
osascript -l JavaScript airdrop-auto-accept.js
```

You can stop the script at any time by pressing `Ctrl + C` in the terminal.

Note that you may need to give permission to the terminal to control your computer in System Preferences > Security & Privacy > Privacy > Accessibility. This is necessary for the script to interact with the Airdrop window and accept incoming files automatically. If the necessary permissions are not granted, the script will throw an error and exit.

Please ensure that your Mac is set to be discoverable via Airdrop for "Everyone" or "Contacts Only" in the Airdrop settings according to your requirements.
You can do this by opening Finder, selecting "Airdrop" from the sidebar, and changing the "Allow me to be discovered by" setting to "Everyone"/"Contacts Only".

The script works by continuously scanning the notification center for incoming Airdrop notifications. When a notification is detected, it simulates a click on the "Accept" button to automatically accept the incoming file. There may be a short delay between the notification appearing and the script detecting it, therefore some delay is expected between the other Airdrop device initiating the transfer and the file being accepted on your Mac.

## File Transfer from Non-Apple Devices (QuickShare & Bluetooth)

Non-Apple devices cannot share files via AirDrop because of Apple's proprietary protocol 🙄. As a fallback, you can use the following open-source implementation of Google QuickShare for transferring files from Android devices to Apple Macs (https://github.com/grishka/NearDrop.git). However, this currently requires devices to be located on the same WiFi network.

As an alternative, this script also helps you to use Bluetooth to transfer files. 
To do this, make sure Bluetooth is enabled on both devices. 
On the Apple Mac, you have to enable Bluetooth file sharing in System Preferences > Sharing > Bluetooth Sharing and configure it to accept incoming files automatically.
Furthermore, if you want to accept files from any Bluetooth device, you need to keep the Bluetooth control panel open on your Mac to ensure that it is always discoverable.
When you send a file from another device, a window will pop up on your Mac asking if you want to pair the devices.
The script will automatically accept the pairing request and the file transfer can subsequently start.
