# **Websites screenshot cli**

this scrpit is to take screenshots thought cli

## **Basic Installation**
Clone or download this repository
```
git clone git@github.com:HenryTabima/websites-screenshot-cli.git
```
Open the porject folder and install dependencies

with npm:
```
npm install
```
with yarn:
```
yarn install
```

## **Usage**

```
node urlscreenshot.js --url [url's site]
```
or
```
chmod +x urlscreenshot.js   // this is only once
./urlscreenshot.js --url [url's site]
```
**PD:** is better if you copy and paste the url from the website
### **The Config File**
```javascript
module.exports = {
  dir: './screenshots',
  screen: {
    width: 1920,
    height: 1080
  }
}
```
```dir``` is to define where you want to save your screenshots.

```screen``` is to define the *width* and *height* of the screenshot.

## Dependencies

* [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* [Minimist](https://github.com/substack/minimist)