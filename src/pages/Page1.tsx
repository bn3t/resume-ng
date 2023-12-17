import { ProcessedResume } from "../resume";
import Job from "../components/Job";

interface Page1Props {
  work: ProcessedResume["page1"];
}

const Page1 = ({ work }: Page1Props) => {
  return (
    <div className="print:columns-2 md:columns-2">
      {work.map((job, i) => (
        <Job key={`${job.name}-${i}`} job={job} index={i} incolumns={true} />
      ))}
    </div>
  );
};

export default Page1;
