import puppeteer from 'puppeteer';

export async function url2pdf(url: string): Promise<Buffer>{
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
}

