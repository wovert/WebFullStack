const puppeteer = require('puppeteer')
const { screenshot } = require('./config/default')
  
const app = async () => {
  const browser = await puppeteer.launch({
      // headless: false
    })
    const page = await browser.newPage()
    await page.goto('https://www.taobao.com/')
    await page.screenshot({
      path: `${screenshot}/${Date.now()}.png`
    })
    await browser.close()
}
app()