const puppeteer = require('puppeteer');

(async () => {
    const params = process.argv.slice(2);
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const url = __dirname + `\\example_template.html?params=${params[0]}`;

    await page.goto(url);
    await page.pdf({ path: 'output.pdf', format: 'A4', printBackground: true });
    await browser.close()
})()