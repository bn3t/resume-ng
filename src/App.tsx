import "./App.css";

import resumeYaml from "./resume.yaml";

import { ProcessedResume, Resume, resumeSchema } from "./resume";
import Page0 from "./pages/Page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Education from "./components/Education";
import { useEffect } from "react";

const resume = resumeSchema.parse(resumeYaml) as Resume;

const processedResume: ProcessedResume = {
  ...resume,
  current: resume.work.filter((w) => w.disposition === "current"),
  page1: resume.work.filter((w) => w.disposition === "page1"),
  page2: resume.work.filter((w) => w.disposition === "page2"),
  page3: resume.work.filter((w) => w.disposition === "page3"),
};

function App() {
  useEffect(() => {
    document.title = `${processedResume.basics.name} - ${processedResume.basics.label}`;
  }, []);
  return (
    <>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 shadow-sm print:hidden lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1 justify-end">
          <a
            href={`${resume.basics.name}.pdf`}
            download
            className="rounded-lg border border-smo-blue-700  bg-smo-blue-100 px-4 py-2 text-smo-blue-700"
          >
            Download as PDF
          </a>
        </div>
      </nav>
      <main className="mx-auto space-y-4 p-16 shadow-lg print:m-0 print:w-full print:p-0 print:shadow-none sm:w-full lg:w-[800px]">
        <Page0 basics={processedResume.basics} skills={processedResume.skills} current={processedResume.current} />
        <div className="break-before-page">
          <Page1 work={processedResume.page1} />
        </div>
        <div className="break-before-page">
          <Page2 work={processedResume.page2} />
          <Education education={processedResume.education} />
        </div>
      </main>
    </>
  );
}

export default App;
