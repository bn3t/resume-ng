import { ProcessedResume } from "../schema/resume";
import Job from "./Job";
import Title from "./Title";

interface TeachingProps {
  work: ProcessedResume["teaching"];
}

const Teaching = ({ work }: TeachingProps) => {
  if (work.length === 0) return null;
  return (
    <div className="mt-4">
      <Title title="Teaching" />
      {work.map((job, i) => (
        <Job key={`${job.name}-${i}`} job={job} index={i} />
      ))}
    </div>
  );
};

export default Teaching;
