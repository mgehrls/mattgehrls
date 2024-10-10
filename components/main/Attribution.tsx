import React from "react";

function Attribution() {
  return (
    <section
      id="attribution"
      className="mt-24 scroll-mt-16"
      aria-label="Attribution"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-slate-200">
        Attribution
      </h2>
      <p className="mt-12">
        Huge shout out to{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Brittany Chiang (opens in a new tab)"
          title="Brittany Chiang's portfolio site"
          className="font-semibold text-gray-900 dark:text-slate-200 hover:text-indigo-900 dark:hover:text-teal-300"
        >
          Brittany Chiang.
        </a>{" "}
        Their portfolio site was the inspiration for this one. I learned a lot
        from trying to recreate some of the features and functionality of their
        site. Their site&apos;s README gave permission to fork with attribution,
        but this site is entirely code written by me. I feel better about doing
        it that way.
      </p>
    </section>
  );
}

export default Attribution;
