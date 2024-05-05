import { Resume } from "../schema/resume";
import { formatDate } from "../utils/dates";
import Title from "./Title";

interface EducationProps {
  education: Resume["education"];
}

const Education = ({ education }: EducationProps) => (
  <div className="mt-4 break-inside-avoid">
    <Title title="Education" />
    {education.map((edu, i) => (
      <div key={`${edu.institution}-${i}`} className="mt-4">
        <div className="flex flex-col">
          <h3 className="border-b-2 border-b-smo-blue-400 text-2xl font-semibold tracking-wide dark:border-smo-blue-900">
            {edu.institution}
          </h3>
          <div className="flex flex-row justify-between">
            <div>
              {edu.studyType} {edu.area}
            </div>
            <div className="self-end text-gray-600 dark:text-gray-300">
              {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Education;
