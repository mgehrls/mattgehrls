import React from "react";

function About() {
  return (
    <section id="about" aria-label="About me">
      <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-slate-200">
        About Me
      </h2>
      <div className="mt-12">
        {/* Add links and a short personal paragraph */}
        <p>
          For years I played with no-code/low-code tools for productivity, but
          in 2020 I took the plunge and started teaching myself to code through
          youtube videos, online tutorials, and reading documentation.
        </p>
        <p className="mt-4">
          Now I&apos;ve had the opportunity to lead development on a greenfield
          MVP for an international art competition, worked on multiple
          production CMS&apos;, and have coded extensively in an enterprise
          level code base during my internship at a software agency.
        </p>
        <p className="mt-4">
          I&apos;m now looking for work, learning .Net, and refreshing my
          portfolio to reflect the things I&apos;ve learned.
        </p>
      </div>
    </section>
  );
}

export default About;
