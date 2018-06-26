#!/usr/bin/env node

'use strict'

const puppeteer = require('puppeteer')
const minimist = require('minimist')

const { getDomain, validateDir } = require('./utils')
const { dir, screen } = require('./config')

const args = minimist(process.argv)

const getScreenshot = async (url) => {
  if (!url) return console.warn('invalid URL. please use --url to pass the url argument')
  try {
    console.log('Luanching browser...')

    const browser = await puppeteer.launch({headless: true})

    console.log('Browser lauched')
    console.log('Opening new page...')

    const page = await browser.newPage()
    await page.setViewport({width: screen.width, height: screen.height})

    console.log('New Page Opened')
    console.log(`Going to ${url}...`)

    await page.goto(url)

    console.log(`${url} loaded`)
    console.log(`Taking Screenshot`)

    validateDir(dir)
    await page.screenshot({path: `${dir}/${getDomain(url)}.png`})

    console.log(`Screenshot saved`)
    console.log(`Closing browser...`)

    await browser.close()

    console.log(`Browser closed`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

getScreenshot(args.url)
