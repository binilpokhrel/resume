const puppeteer = require('puppeteer');
const path = require('path');
const args = require('yargs').argv;
const colors = require('colors');

const logger = {
  error: message => console.log(message.red),
  warn: message => console.log(message.yellow),
  info: message => console.log(message.gray),
  debug: message => console.log(message.blue),
  success: message => console.log(message.green),
}

const term = args.term || '3A';
const label = args.label || 'resume';

const filePath = path.resolve(__dirname, `./build/${label}.html`);
(async () => {
  console.log('\n*** gen-pdf ***'.white)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  logger.info('Launching webpage...')
  await page.goto(`file:///${filePath}`, {waitUntil: 'networkidle2'});
  logger.info('Capturing PDF...')
  await page.pdf({
    path: path.resolve(__dirname, `../out/${term}/${label}.pdf`),
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });
  await browser.close();
  logger.success(`Success! Output at ${term}/${label}.pdf`);
})();