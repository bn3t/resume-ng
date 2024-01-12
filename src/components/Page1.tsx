import { ProcessedResume } from "../schema/resume";
import Job from "./Job";

interface Page1Props {
  work: ProcessedResume["page1"];
}

const Page1 = ({ work }: Page1Props) => {
  return (
    <div className="print:columns-2">
      {work.map((job, i) => (
        <Job key={`${job.name}-${i}`} job={job} index={i} incolumns={true} />
      ))}
    </div>
  );
};

export default Page1;
