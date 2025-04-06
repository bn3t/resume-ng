import { ProcessedResume } from "../schema/resume";
import Job from "./Job";

interface Page2Props {
  work: ProcessedResume["page2"];
}

const Page3 = ({ work }: Page2Props) => {
  return (
    <div className="print:columns-1">
      {work.map((job, i) => (
        <Job key={`${job.name}-${i}`} job={job} index={i} incolumns={true} />
      ))}
    </div>
  );
};

export default Page3;
