import { Github } from "lucide-react";

interface NavigationProps {
  name: string;
  githubUrl: string;
  version: string;
}

const Navigation = ({ name, githubUrl, version }: NavigationProps) => (
  <nav
    className="sticky top-0 mx-auto mb-4 flex max-w-7xl items-center justify-between bg-white p-6 shadow-md dark:bg-slate-900 dark:shadow-dark-md print:hidden lg:px-8"
    aria-label="Navigation"
  >
    <div className="flex flex-row items-center space-x-4">
      <a
        href={githubUrl}
        className="h-[25px] w-[25px] rounded-full bg-smo-blue-700 p-2 text-white dark:bg-smo-blue-900"
      >
        <Github className="h-6 w-6 translate-y-[1px]" />
        <span className="sr-only">View this project on github</span>
      </a>
      <div id="version" className="w-52 text-smo-blue-600 dark:text-smo-blue-400">
        Version: {version}
      </div>
    </div>

    <div className="flex items-center justify-end space-x-4">
      <a
        href={`${name}.pdf`}
        download
        className="rounded-lg border border-smo-blue-700 bg-smo-blue-100 px-4 py-2 text-smo-blue-700 dark:border-smo-blue-500 dark:bg-smo-blue-900 dark:text-smo-blue-50"
      >
        Download as PDF
      </a>
    </div>
  </nav>
);

export default Navigation;
