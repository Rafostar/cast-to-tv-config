# cast-to-tv-config
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TFVDFD88KQ322)
[![Donate](https://img.shields.io/badge/Donate-PayPal.Me-lightgrey.svg)](https://www.paypal.me/Rafostar)

Manually configure Chromecast IP address for GNOME Shell Extension Cast to TV.

Requires Cast to TV version 9 or later.

This app is for those with unstable network connection where mdns scan does not always provide results.
Connecting to Chromecast by IP might also help those with unusual network configuration (e.g. VPN).
When configured connection is established using destination IP rather than getting device by name, thus network scan in extension is skipped entirely.

## Installation
```
sudo npm install -g cast-to-tv-config
```

## Usage
Simply run `cast-to-tv-config` in terminal and answer shown questions.<br>
Results are saved into Cast to TV extension folder, so there is no need to run it every time.<br>
Please note that launching devices scan in extension prefs will overwrite config file.

## Donation
If you like my work please support it by buying me a cup of coffee :grin:

[![PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TFVDFD88KQ322)
