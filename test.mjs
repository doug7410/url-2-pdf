import puppeteer from 'puppeteer';
import {writeFileSync} from "fs"


const saveAsPdf = async (url) => {
  const browser = await puppeteer.launch({
    // headless: false,
    // executablePath:
    //   '/app/chrome-headless-shell/linux-127.0.6523.0/chrome-headless-shell-linux64/chrome-headless-shell', //process.env.CHROME_EXEC,
  });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle0',
  });

  const result = await page.pdf({
    format: 'Letter',
  });

  await browser.close();

  return result;
};

(async () => {
  const pdf = await saveAsPdf('https://samplepal.net');
  writeFileSync('/app/file.pdf', pdf)
})();

