'use strict'

const fs = require('fs')

module.exports = {
  getDomain (url) {
    const urlParts = url.replace('http://', '').replace('https://', '').split(/[/?#]/)
    const domain = urlParts[0]
    return domain
  },
  validateDir (dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  }
}
