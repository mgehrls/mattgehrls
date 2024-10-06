import React from "react";

type WorkItemProps = {
  link: string;
  linkAriaLabel: string;
  title: string;
  where: string;
  description: string;
  techUsed: string[];
};

const workItems: WorkItemProps[] = [
  {
    link: "https://www.mattgehrls.com",
    linkAriaLabel: "Matt Gehrls",
    title: "Matt Gehrls",
    where: "Personal Site",
    description: "My personal site, built with Next.js and Tailwind CSS.",
    techUsed: ["Next.js", "Tailwind CSS"],
  },
];

function Work() {
  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work"
    >
      <WorkItem
        link={workItems[0].link}
        linkAriaLabel={workItems[0].linkAriaLabel}
        title={workItems[0].title}
        where={workItems[0].where}
        description={workItems[0].description}
        techUsed={workItems[0].techUsed}
      />
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
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={linkAriaLabel}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}
                {" - "}
                <span className="inline-block">
                  {where}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {techUsed.map((tech) => (
            <li className="mr-1.5 mt-2" key={tech}>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
