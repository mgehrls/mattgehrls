import React from "react";

function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="mt-4">
        <p>
          I found code through automating repetitive tasks as a real estate
          transaction coordinator in 2018, started learning the basics in 2020,
          and in mid 2021 left my job to learn full stack development full time.
        </p>
        <p className="mt-4">
          Now I&apos;ve had the opportunity to lead development on a greenfield
          MVP for an international art competition, worked on multiple
          production CMS&apos;, and have coded extensively in an enterprise
          level code base.
        </p>
        <p className="mt-4">And I&apos;m ready for the next challenge.</p>
      </div>
    </section>
  );
}

export default About;
