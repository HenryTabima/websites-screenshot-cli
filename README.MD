# **Websites screenshot cli**

CLI script to take screenshots for a specific URL. usefull to take images for your personal projects

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and usage purposes.

### Prerequisites

You need to have `Node` installed and the `Google Chrome` browser

### Installing

Clone or download this repository

```bash
git clone git@github.com:HenryTabima/websites-screenshot-cli.git
```

Open the porject folder and install dependencies

```bash
cd websites-screenshot-cli
npm install
```

### **Usage**

```bash
node urlscreenshot.js --url [url's site]
```

or

```bash
chmod +x urlscreenshot.js   // this is only once
./urlscreenshot.js --url [url's site]
```

> **PD:** is better if you copy and paste the url from the website

#### **The Config File**

```javascript
module.exports = {
  dir: './screenshots',
  screen: {
    width: 1920,
    height: 1080
  }
}
```

`dir` is to define where you want to save your screenshots.

`screen` is to define the *width* and *height* of the screenshot.

## Built With

* [Puppeteer](https://github.com/GoogleChrome/puppeteer) - Node library which provides a high-level API to control Chrome or Chromium
* [Minimist](https://github.com/substack/minimist) - simple cli argument parser

## Author

<table>
  <tr>
    <td align="center"><a href="http://henrytabima.com"><img src="https://avatars0.githubusercontent.com/u/12721896?v=4" width="100px;" alt="Henry Tabima Giraldo"/><br /><sub><b>Henry Tabima Giraldo</b></sub></a><br />📖</td>
  </tr>
</table>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
