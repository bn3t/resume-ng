"use client";

import { ProcessedResume } from "../resume";
import Job from "../components/Job";

interface Page2Props {
  work: ProcessedResume["page2"];
}

const Page2 = ({ work }: Page2Props) => {
  return (
    <div className="print:columns-2 md:columns-2">
      {work.map((job, i) => (
        <Job key={`${job.name}-${i}`} job={job} index={i} incolumns={true} />
      ))}
    </div>
  );
};

export default Page2;
