const puppeteer = require('puppeteer')
const { mn } = require('./config/default')
const srcToImg = require('./helper/srcToImg')

const app = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://image.baidu.com/')
  console.log('https://image.baidu.com/')

  await page.setViewport({
    width: 1920,
    height: 4080
  })
  console.log('reset viewport')

  await page.focus('#kw')
  await page.keyboard.sendCharacter('狗')
  await page.click('.s_search')
  console.log('go to search list')

  page.on('load', async () => {
    console.log('page loading done, start fetch...')

    const srcList = await page.evaluate(() => {
      const images = document.querySelectorAll('img.main_img')
      return Array.prototype.map.call(images, img => img.src)
    })
    console.log(`get ${srcList.length} images, start download`)

    srcList.forEach(async (src) => {
      await page.waitFor(200) // sleep
      await srcToImg(src, mn)
    })

    await browser.close()
  })

}
app()