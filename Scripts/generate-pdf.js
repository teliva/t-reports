const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //1 read our html page
    let htmlContent = '';
    const data = fs.readFile('example_template.html', 'utf8');

    await page.setContent(data);
    await page.pdf({ path: 'html.pdf', format: 'A4' });

    await browser.close()
})()