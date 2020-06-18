const puppeteer = require("puppeteer");
const path = require("path");
const filePath = path.resolve(__dirname, '../out/resume.html'); 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:///${filePath}`, {waitUntil: 'networkidle2'});
  await page.pdf({
    path: path.resolve(__dirname, "../out/3A/resume.pdf"),
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });
   await browser.close();
})();