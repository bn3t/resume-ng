import puppeteer from 'puppeteer';
import fileUrl from 'file-url';
import dayjs from 'dayjs';

export const exportPDF = async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: 'new',
  });
  const page = await browser.newPage();
  const url = fileUrl(`./dist/index.html`);
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.waitForSelector('main');
  await page.pdf({
    path: `dist/Bernard Niset ${dayjs().format('YYYY-MM-DD')}.pdf`,
    format: 'A4',
    printBackground: true,
    landscape: false,
    margin: {
      top: '15mm',
      right: '10mm',
      bottom: '15mm',
      left: '10mm',
    },
  });
  await browser.close();
};

exportPDF().catch(console.error);
