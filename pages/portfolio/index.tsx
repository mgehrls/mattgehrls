import { AnimatePresence, motion } from "framer-motion";
import streamSave from "../../public/images/desktop-landing.png";
import github from "../../public/images/github-mark-white.svg";
import jamStats from "../../public/images/jam-stats-mobile.png";
import Image from "next/image";
import Head from "next/head";

export default function Portfolio() {
  return (
    <AnimatePresence>
      <Head>
        <title>Portfolio | Matt Gehrls - Web Developer</title>
        <meta
          name="description"
          content="Porfolio for Matt Gehrls - Web Developer."
        />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        className="flex-1 order-2 h-full p-4"
      >
        <div className="flex justify-center items-center">
          <div className="w-full max-w-7xl p-4 flex flex-col justify-center items-center">
            <JamStats />
            <hr className="my-4 h-1 bg-white w-full" />
            <StreamSave />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const JamStats = () => {
  return (
    <div className="lg:my-8 mb-8">
      <div className="flex flex-col-reverse md:flex-row w-full gap-4">
        <div className="h-full flex flex-1 flex-col gap-8 justify-center md:m-8 mt-8">
          <h2 className="text-2xl font-bold underline">
            <a target="_blank" href="https://jam-stats.vercel.app">
              Jam-Stats - pending approval from Spotify
            </a>
          </h2>
          <p>
            Simple spotify stats of your favorite artists, songs, and playlists
            over time. Currently only usable if we add you to a whitelist.
          </p>

          <p>Next.JS app using NextAuth, Framer Motion, the Spotify API.</p>
          <p>
            The first collaboration between{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.trevormathiak.dev/"
            >
              Trevor Mathiak
            </a>{" "}
            and myself. Currently waiting on approval from Spotify before it is
            available for everyone. They denied our last attempt because it used
            to use ChatGPT to judge and assess your taste. That feature has been
            removed to comply with their terms of service.
          </p>
          <a target="_blank" href="https://github.com/trroev/jam-stats">
            <Image className="w-12 mt-4" alt="github logo" src={github} />
          </a>
        </div>
        <Image
          priority
          className="md:w-1/4 order-1 md:order-2 border-2 border-white"
          alt={"The website streamsave.vercel.app's homepage"}
          src={jamStats}
        />
      </div>
    </div>
  );
};

const StreamSave = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col-reverse md:flex-row w-full gap-4">
        <div className="h-full lg:w-1/3 flex flex-1 flex-col gap-8 justify-center md:m-8 mt-8">
          <h2 className="text-2xl font-bold underline">
            <a target="_blank" href="https://streamsave.app">
              StreamSave
            </a>
          </h2>
          <p>Organizing your favorite movies and shows in one place!</p>

          <p>
            Fullstack type safe Next.JS app with Clerk authentication,
            PlanetScale backend using{" "}
            <a
              target="_blank"
              className="underline"
              href="https://www.themoviedb.org/"
            >
              themoviedb.org
            </a>{" "}
            API for data and images.
          </p>
          <p>
            The logo for Streamsave was inspired by an image created by the A.I.
            image generator, Midjourney. But I needed a a loseless format, and
            the original was a .png. So I recreated it in Figma, made my edits,
            and exported it as an .svg. That is a workflow I can see being very
            useful in the future.
          </p>
          <a target="_blank" href="https://github.com/mgehrls/streamsave">
            <Image className="w-12 mt-4" alt="github logo" src={github} />
          </a>
        </div>
        <Image
          priority
          className="order-1 md:order-2 max-h-[837.38px] max-w-[624] h-auto w-auto border-2 border-white"
          alt={
            "Shows the homepage of a different website I made called StreamSave. It has a logo on the left and says 'fill your show hole with streamsave' as an attention grabber."
          }
          src={streamSave}
        />
      </div>
    </div>
  );
};
