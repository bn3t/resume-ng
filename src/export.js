import puppeteer from "puppeteer";
import fileUrl from "file-url";
import dayjs from "dayjs";
import { copyFile } from "copy-file";

const DIST_HTML = "./dist/index.html";
const DIST_PDF = "dist/Bernard Niset.pdf";
const DIST_PDF_WITH_DATE = `dist/Bernard Niset ${dayjs().format("YYYY-MM-DD")}.pdf`;

export const exportPDF = async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  });
  const page = await browser.newPage();
  const url = fileUrl(DIST_HTML);
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.waitForSelector("main");
  await page.pdf({
    path: DIST_PDF,
    format: "A4",
    printBackground: true,
    landscape: false,
    margin: {
      top: "15mm",
      right: "10mm",
      bottom: "15mm",
      left: "10mm",
    },
  });
  await browser.close();
};

export const copyPDF = async () => {
  await copyFile(DIST_PDF, DIST_PDF_WITH_DATE);
};

const main = async () => {
  await exportPDF();
  await copyPDF();
};

main().catch(console.error);
