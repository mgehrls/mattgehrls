import { AnimatePresence, motion } from "framer-motion";
import streamSave from "../../public/images/streamsaveHome.png";
import github from "../../public/images/github-mark-white.svg";
import jamStats from "../../public/images/jam-stats-mobile.png";
import Image from "next/image";

export default function Portfolio() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        className="flex-1 order-2 h-full p-4"
      >
        <div className="flex justify-center items-center">
          <div className="w-full max-w-7xl p-4">
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
    <div className="my-8">
      <div className="flex flex-col-reverse md:flex-row w-full gap-4">
        <div className="h-full flex flex-1 flex-col gap-8 justify-center md:m-8 mt-8">
          <h2 className="text-2xl font-bold underline">
            <a target="_blank" href="https://jam-stats.vercel.app">
              Jam-Stats - coming soons
            </a>
          </h2>
          <p>
            Log in with Spotify to see your data visualized and hear what a
            ChatGPT thinks of your music/podcast taste.
          </p>

          <p>
            Next.JS app using NextAuth, Framer Motion, Spotify and ChatGPT APIs.
          </p>
          <p>
            The first collaboration between{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.trevormathiak.dev/"
            >
              Trevor Mathiak
            </a>{" "}
            and me. Currently waiting on approval from Spotify before it is
            availble for everyone. Using git with multiple people was a learning
            experience. Having someone review and/or refactor your code makes me
            want to be better and teaches me new or different ways to achieve
            the same goals!
          </p>
          <a target="_blank" href="https://github.com/trroev/jam-stats">
            <Image className="w-12 mt-4" alt="github logo" src={github} />
          </a>
        </div>
        <Image
          priority
          className="md:w-1/4 order-1 md:order-2"
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
        <div className="h-full flex flex-1 flex-col gap-8 justify-center md:m-8 mt-8">
          <h2 className="text-2xl font-bold underline">
            <a target="_blank" href="https://streamsave.vercel.app">
              StreamSave
            </a>
          </h2>
          <p>Organizing your favorite movies and shows in one place!</p>

          <p>
            Fullstack type safe{" "}
            <a
              href="https://kit.svelte.dev/"
              aria-label="Go to Sveltekit's website"
              className="underline"
              target="_blank"
            >
              Sveltekit
            </a>{" "}
            app with{" "}
            <a
              href="https://supabase.com/"
              aria-label="Go to Supabase's website"
              className="underline"
              target="_blank"
            >
              Supabase
            </a>{" "}
            authentication and database using{" "}
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
            This was my first solo full stack project and taught me so much
            about database normalization, and typescript. The latest iteration
            was created after I spent a month learning design principals and
            figma. Some images are not optimized and it is a little gradient
            heavy, but I think it is a good showcase of my skill level in early
            2023.
          </p>
          <a
            target="_blank"
            href="https://github.com/mgehrls/streamsave-sveltekit"
          >
            <Image className="w-12 mt-4" alt="github logo" src={github} />
          </a>
        </div>
        <Image
          priority
          className="md:w-1/2 order-1 md:order-2"
          alt={"The website streamsave.vercel.app's homepage"}
          src={streamSave}
        />
      </div>
    </div>
  );
};
