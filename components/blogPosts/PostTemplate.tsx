import { motion } from "framer-motion";
import Hexagon from "../Hexagon";
import { useState } from "react";
import Image from "next/image";

const pTagClasses = "text-slate-200 text-md tracking-wide leading-loose";
const headerClasses = "text-xl font-bold tracking-wide leading-loose";

const PostTemplate = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [hexHover, setHexHover] = useState(false);

  return (
    <div className="flex flex-col gap-4 mt-8">
      <div>
        <h1 className="text-2xl font-bold tracking-wide">
          Adding More to My Portfolio
        </h1>
        <hr className="border-white w-full max-w-sm" />
        <div className="flex justify-between max-w-sm">
          <p className="text-sm text-slate-100 tracking-wide leading-loose">
            by: Matt Gehrls
          </p>
          <p className="text-sm text-slate-100 tracking-wide leading-loose">
            06/15/2023
          </p>
        </div>
      </div>
      <p className={pTagClasses}>
        {
          "I have more to show off! I've spent the last 2 weeks working on this site, and while it is still a work in progress, I'm happy with the progress I've made. I've been using "
        }
        <a
          className="underline font-bold"
          href="https://www.framer.com/motion/"
        >
          Framer Motion
        </a>{" "}
        {
          " to animate the page transitions, and a button on the top right if you are looking at this on mobile. Here's what I'm talking about if you are on a wider screen."
        }
      </p>
      <Image
        className="rounded-lg shadow-xl self-center"
        src="/images/buttonzoomed.gif"
        alt="Animated button example"
        width={250}
        height={250}
      />
      <p className={pTagClasses}>
        {
          "Framer Motion is new to me but it's incredibly intuitive. I haven't explored everything it can do, and I'm excited to play with it's other features."
        }
      </p>
      <p className={pTagClasses}>
        {
          "I have a new to-do list and I'm excited to move on to another project. I'm going to do a few more updates on this site today; including adding more hexagons and teal and orange to create more visual consistancy. The contact form is exactly the same as the contact form for "
        }
        <a className="font-bold underline" href="http://streamsave.app">
          Streamsave
        </a>
        {
          " which is not ideal. Then I will turn my flutter game into something presentable. I did a lot of work there and I don't want it to go to waste. Then I'm going to use an idea a friend gave me to make a flutter mobile app that might have some commercial potential."
        }
      </p>
      <p className={pTagClasses}>
        {
          "I think a portfolio page in Next.JS and 3 portfolio projects in 2 different frameworks, SvelteKit and Flutter, should be enough to convince somebody I have the skills to do the job. Hopefully the market is better by then. There was some discussion with a local company about an internship in the fall, and I'd be excited about that, but if I can land a junior position before then of course that would be better."
        }
      </p>
      <p className={pTagClasses}>
        {"Thanks for reading and have a great day!"}
      </p>
    </div>
  );
};

export default PostTemplate;
