import { Github } from "lucide-react";

interface NavigationProps {
  name: string;
  githubUrl: string;
}

const Navigation = ({ name, githubUrl }: NavigationProps) => {
  return (
    <nav
      className="sticky top-0 mx-auto mb-4 flex max-w-7xl items-center justify-between bg-white p-6 shadow-md print:hidden lg:px-8"
      aria-label="Navigation"
    >
      <a href={githubUrl} className="h-[25px] w-[25px] rounded-full bg-smo-blue-700 p-2 text-white">
        <Github className="h-6 w-6 translate-y-[1px]" />
        <span className="sr-only">View this project on github</span>
      </a>
      <div className="flex items-center justify-end space-x-4">
        <a
          href={`${name}.pdf`}
          download
          className="rounded-lg border border-smo-blue-700 bg-smo-blue-100 px-4 py-2 text-smo-blue-700"
        >
          Download as PDF
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
