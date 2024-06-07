import puppeteer from 'puppeteer';
import {writeFileSync} from "fs"

export async function url2pdf(url: string): Promise<string>{
  const pdf = await saveAsPdf(url);
  const path = '/app/files/file.pdf';
  writeFileSync(path, pdf)
  return path;
}

const saveAsPdf = async (url: string) => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
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

