import clsx from "clsx";
import Markdown from "react-markdown";

import { Resume } from "../schema/resume";
import { formatDate } from "../utils/dates";

interface JobProps {
  job: Resume["work"][0];
  incolumns?: boolean;
  index: number;
}

export const Job = ({ job, index, incolumns = false }: JobProps) => {
  const endDate = job.endDate ? formatDate(job.endDate) : "Present";
  return (
    <div key={`${job.company}-${index}`} className={clsx("mb-4", "break-inside-avoid")}>
      <div className={clsx("flex flex-col justify-between")}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <h3 className="text-2xl font-semibold tracking-wider">{job.company}</h3>
            <div className="self-end text-gray-600 dark:text-gray-300">
              {formatDate(job.startDate)} - {endDate}
            </div>
          </div>
          <div className="w-full border-b-2 border-b-smo-blue-400 dark:border-smo-blue-900"></div>
          <div className="flex flex-row justify-between">
            <div className="tracking-wider">{job.position}</div>
            {!incolumns && <div className="text-xl italic">{job.description}</div>}
          </div>
        </div>
      </div>
      {incolumns && <div className="text-xl italic">{job.description}</div>}
      <div className="prose prose-cv mt-1 max-w-full leading-normal dark:prose-invert">
        <Markdown>{job.summary}</Markdown>
      </div>
      <ul className="ml-1 list-outside list-disc pl-4">
        {job.highlights?.map((highlight, i) => (
          <li key={`${highlight}-${i}`}>
            <Markdown components={{ p: "span" }}>{highlight}</Markdown>
          </li>
        ))}
      </ul>
      <ul className="mt-4">
        {job.technologies?.map((technology, i) => (
          <li
            key={`${technology}-${i}`}
            className="mb-2 mr-2 inline-block rounded-md bg-smo-blue-100 px-2 text-sm tracking-tighter text-gray-700 dark:bg-smo-blue-900 dark:text-smo-blue-50"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
