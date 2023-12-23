import puppeteer from "puppeteer";
import fileUrl from "file-url";
import dayjs from "dayjs";
import { copyFile } from "copy-file";
import fs from "fs/promises";
import { PDFDocument } from "pdf-lib";
import { parse } from "yaml";
import packageJson from "../package.json" with { type: "json" };

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
  await page.goto(url, { waitUntil: "networkidle2" });
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

export const modifyPDFProperties = async () => {
  const resume = parse(await fs.readFile("./src/resume.yaml", "utf8"));

  const pdfBuffer = await fs.readFile(DIST_PDF);
  const pdf = await PDFDocument.load(pdfBuffer);
  pdf.setAuthor(resume.basics.name);
  pdf.setTitle(resume.basics.label);
  pdf.setSubject(`Resume of ${resume.basics.name} - version ${packageJson.version}`);
  const pdfBytes = await pdf.save();
  await fs.writeFile(DIST_PDF, pdfBytes);
};

const main = async () => {
  await exportPDF();
  await modifyPDFProperties();
  await copyPDF();
};

main().catch(console.error);
