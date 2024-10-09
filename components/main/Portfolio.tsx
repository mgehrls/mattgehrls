import { ExternalLink } from "lucide-react";
import React from "react";
import Image from "next/image";
import { PortfolioItemProps, portfolioItems } from "@/utils/projectData";

function Portfolio() {
  return (
    <div id="projects">
      <ul className="mt-24 scroll-mt-24">
        {portfolioItems.map((portfolioItem) => (
          <PortfolioItem key={portfolioItem.title} {...portfolioItem} />
        ))}
      </ul>
    </div>
  );
}

const PortfolioItem = ({
  title,
  description,
  href,
  ariaLabel,
  image,
  imageAlt,
}: PortfolioItemProps) => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:dark:bg-slate-800/50 lg:group-hover:bg-slate-200/50 lg:group-hover:shadow-slate-200/50 lg:group-hover:drop-shadow-lg" />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-semibold dark:font-medium leading-tight text-slate-900 dark:text-slate-200 group-hover:text-indigo-900 focus-visible:text-indigo-900 group-hover:dark:text-teal-300 focus-visible:dark:text-teal-300 text-base"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={ariaLabel}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title}
                <ExternalLink size={16} className="inline-block ml-1.5" />
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
        </div>
        <Image
          src={image}
          alt={imageAlt}
          loading="lazy"
          width="200"
          height="100"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        />
      </div>
    </li>
  );
};

export default Portfolio;
