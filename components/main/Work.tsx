import { WorkItemProps, workItems } from "@/utils/workData";
import { ExternalLink } from "lucide-react";
import React from "react";

function Work() {
  return (
    <section
      id="work"
      className="flex flex-col gap-8 mt-24 scroll-mt-16"
      aria-label="Work"
    >
      {workItems.map((workItem) => (
        <WorkItem key={workItem.title} {...workItem} />
      ))}
    </section>
  );
}

export default Work;

function WorkItem({
  timeFrame,
  link,
  linkAriaLabel,
  title,
  where,
  description,
  techUsed,
}: WorkItemProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:dark:bg-slate-800/50 lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-slate-200/50 lg:group-hover:drop-shadow-lg" />
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        aria-label="2024 to Present"
      >
        {timeFrame}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="text-slate-900 dark:text-slate-200 leading-tight">
          <div>
            <a
              className="inline-flex items-center leading-tight text-slate-900 dark:text-slate-200 group-hover:text-indigo-900 focus-visible:text-indigo-900 group-hover:dark:text-teal-300 focus-visible:dark:text-teal-300 text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={linkAriaLabel}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span className="font-bold dark:font-medium">
                {title}
                {" - "}
                {where}
              </span>
              {link && (
                <ExternalLink
                  size={16}
                  className="inline-block ml-1.5 group-hover:scale-110"
                />
              )}
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-snug tracking-wide text-slate-700 dark:text-slate-400">
          {description}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {techUsed.map((tech) => (
            <li className="mr-1.5 mt-2" key={tech}>
              <div className="flex items-center rounded-full bg-indigo-900 text-indigo-200 dark:bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-teal-300 ">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
