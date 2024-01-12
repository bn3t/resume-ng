import { copyFile } from "copy-file";
import dayjs from "dayjs";
import fs from "fs/promises";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer";
import { parse } from "yaml";

import packageJson from "../package.json" with { type: "json" };

const DIST = "./dist";

export const exportPDF = async (resume) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  });
  const page = await browser.newPage();
  // const url = fileUrl(`${DIST}/index.html`);
  await page.goto("http://localhost:5173", { waitUntil: "networkidle2" });
  await page.waitForSelector("main");
  await page.pdf({
    path: `${DIST}/${resume.basics.name}.pdf`,
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

export const copyPDF = async (resume) => {
  await copyFile(
    `${DIST}/${resume.basics.name}.pdf`,
    `${DIST}/${resume.basics.name} ${dayjs().format("YYYY-MM-DD")}.pdf`,
  );
};

export const loadResume = async () => {
  return parse(await fs.readFile("./resume/resume.yaml", "utf8"));
};

export const modifyPDFProperties = async (resume) => {
  const pdfBuffer = await fs.readFile(`${DIST}/${resume.basics.name}.pdf`);
  const pdf = await PDFDocument.load(pdfBuffer);
  pdf.setAuthor(resume.basics.name);
  pdf.setTitle(resume.basics.label);
  pdf.setSubject(`Resume of ${resume.basics.name} - version ${packageJson.version}`);
  const pdfBytes = await pdf.save();
  await fs.writeFile(`${DIST}/${resume.basics.name}.pdf`, pdfBytes);
};

const main = async () => {
  const resume = await loadResume();
  await exportPDF(resume);
  await modifyPDFProperties(resume);
  await copyPDF(resume);
};

main().catch(console.error);
