"use client";

import { Resume } from "../resume";
import Job from "./Job";
import Title from "./Title";

interface ExperienceProps {
  work: Resume["work"];
}

const Experience = ({ work }: ExperienceProps) => {
  return (
    <>
      <Title title="Experience" />
      {work.map((job, i) => (
        <Job key={`${job.name}-${i}`} job={job} index={i} />
      ))}
    </>
  );
};

export default Experience;
