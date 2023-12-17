"use client";

import clsx from "clsx";
import Markdown from "react-markdown";

import { Resume } from "../resume";

interface JobProps {
  job: Resume["work"][0];
  incolumns?: boolean;
  index: number;
}

export const Job = ({ job, index, incolumns = false }: JobProps) => {
  const endDate = job.endDate ? job.endDate : "Present";
  return (
    <div key={`${job.company}-${index}`} className={clsx("mb-4", "break-inside-avoid")}>
      <div className={clsx("flex flex-col justify-between")}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <h3 className="text-2xl font-semibold tracking-wide">{job.company}</h3>
            <div className={clsx("self-end text-gray-600")}>
              {job.startDate} - {endDate}
            </div>
          </div>
          <div className="w-full border-b-2 border-b-smo-blue-400"></div>
          <div className="flex flex-row justify-between">
            <div>{job.position}</div>
            {!incolumns && <div className="text-xl">{job.description}</div>}
          </div>
        </div>
      </div>
      {incolumns && <div className="text-xl">{job.description}</div>}
      <div className="prose prose-cv mt-1 max-w-full leading-normal">
        <Markdown>{job.summary}</Markdown>
      </div>
      <ul className="list-inside list-disc">
        {job.highlights?.map((highlight, i) => (
          <li key={`${highlight}-${i}`}>
            <Markdown components={{ p: "span" }}>{highlight}</Markdown>
          </li>
        ))}
      </ul>
      <ul className="mt-2">
        {job.technologies?.map((technology, i) => (
          <li
            key={`${technology}-${i}`}
            className="mb-2 mr-2 inline-block rounded-md bg-smo-blue-100 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
