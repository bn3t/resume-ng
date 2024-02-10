import CustomMarkdown from "./CustomMarkdown";

interface HeaderProps {
  name: string;
  role: string;
  summary: string;
}

const Header = ({ name, role, summary }: HeaderProps) => (
  <div className="flex flex-col">
    <div className="flex flex-col sm:flex-row sm:gap-8 md:gap-16">
      <div className="w-full sm:w-[222px] sm:self-end">
        <h1 className="font-['League_Gothic_Variable'] text-[64px] font-normal leading-[1.1]">{name}</h1>
        <h2 className="uppercase dark:text-gray-300">{role}</h2>
      </div>
      <CustomMarkdown className="prose-sm max-w-none self-end sm:w-[600px]">{summary}</CustomMarkdown>
    </div>
    <div className="mt-4 h-5 border-b-[12px] border-smo-blue-400 dark:border-smo-blue-900" />
  </div>
);

export default Header;
