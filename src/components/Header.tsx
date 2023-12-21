import Markdown from "react-markdown";

interface HeaderProps {
  name: string;
  role: string;
  summary: string;
}

const Header = ({ name, role, summary }: HeaderProps) => {
  console.log(summary);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row sm:gap-8 md:gap-16">
        <div className="w-full sm:w-[222px] sm:self-end">
          <h1 className="font-['League_Gothic_Variable'] text-[64px] font-normal leading-[1.1]">{name}</h1>
          <h2 className="uppercase">{role}</h2>
        </div>
        <div className="prose prose-sm max-w-none self-end sm:w-[600px]">
          <Markdown>{summary}</Markdown>
        </div>
      </div>
      <div className="mt-4 h-5 border-b-[12px] border-smo-blue-400" />
    </div>
  );
};

export default Header;
