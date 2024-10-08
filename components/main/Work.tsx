import { WorkItemProps, workItems } from "@/utils/workData";
import { ExternalLink } from "lucide-react";
import React from "react";

function Work() {
  return (
    <section id="work" className="flex flex-col gap-8 mb-20" aria-label="Work">
      {workItems.map((workItem) => (
        <WorkItem key={workItem.title} {...workItem} />
      ))}
    </section>
  );
}

export default Work;

function WorkItem({
  link,
  linkAriaLabel,
  title,
  where,
  description,
  techUsed,
}: WorkItemProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:dark:bg-slate-800/50 lg:group-hover:bg-slate-400/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
          <div>
            <a
              className="inline-flex items-center font-medium leading-tight text-slate-900 dark:text-slate-200 group-hover:text-indigo-900 focus-visible:text-indigo-900 group-hover:dark:text-teal-300 focus-visible:dark:text-teal-300 text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={linkAriaLabel}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span className="font-bold dark:font-normal">
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
        <p className="mt-2 text-sm leading-normal text-slate-700 dark:text-slate-400">
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
