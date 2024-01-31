import { Resume } from "../schema/resume";

interface LanguagesProps {
  languages: Resume["languages"];
}

const Languages = ({ languages }: LanguagesProps) => {
  if (!languages) return null;
  return (
    <>
      <h3 className="text-lg tracking-wide">Languages</h3>
      <div className="mb-2 max-w-[50px] border-b-2 border-smo-blue-400 dark:border-smo-blue-900"></div>
      <ul className="flex flex-row flex-wrap text-xs">
        {languages.map((language) => (
          <li
            key={language.language}
            className="mb-1 mr-2 rounded-md bg-smo-blue-100 px-2 py-1 dark:bg-smo-blue-900 dark:text-smo-blue-50"
          >
            {language.language}&nbsp;
            <span className="text-neutral-600 dark:text-smo-blue-400">({language.fluency})</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Languages;
