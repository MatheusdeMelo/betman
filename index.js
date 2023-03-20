import { firefox } from "playwright"

(async () => {
    const browser = await firefox.launch({headless: false})
    const page = await browser.newPage({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
    })
    await page.goto('https://www.bet365.com/#/AVR/B146/R^1/')
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(5000)
    await page.screenshot( { path: `./ssb365.png` } )
//    await page.pause()
    await browser.close()
})();