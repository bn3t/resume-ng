"use client";

import { Resume } from "../resume";
import Title from "./Title";

interface SkillsProps {
  skills: Resume["skills"];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="mt-4">
      <Title title="Skills" />
      {skills.map((skill, i) => (
        <div key={`${skill.name}-${i}`}>
          <h3 className="text-lg tracking-wide">{skill.name}</h3>
          <div className="mb-2 max-w-[50px] border-b-2 border-smo-blue-600"></div>
          <ul className="flex flex-row flex-wrap text-xs">
            {skill.keywords.map((keyword) => (
              <li key={keyword} className="mb-1 mr-2 rounded-md bg-smo-blue-100 px-2 py-1">
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
