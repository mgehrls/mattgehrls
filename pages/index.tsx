import LogoSection from "@/components/LogoSection";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        className="flex-1 order-2 h-full p-4"
      >
        <div className="md:px-4 flex flex-col justify-center items-center gap-20">
          <h1 className="py-10 sm:py-16 lg:py-40 text-3xl sm:text-5xl lg:text-7xl text-center max-w-sm sm:max-w-lg lg:max-w-4xl">
            <span className="font-bold text-orange-400">Dynamic</span>,{" "}
            <span className="italic font-semibold">responsive</span> software w/
            the latest tech for{" "}
            <span className="underline text-teal-400">web and mobile</span>
          </h1>
          <div
            style={{ backgroundColor: "#171717" }}
            className="py-10 sm:py-16 max-w-7xl"
          >
            <LogoSection />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg: gap-8 py-10 sm:py-16 lg:py-40">
            <Image
              width={384}
              height={600}
              alt="My github stats"
              src="https://github-readme-stats-mgehrls.vercel.app/api?username=mgehrls&show_icons=true&theme=dark&hide_rank=true"
            />
            <Image
              width={384}
              height={400}
              alt="My most used programming languages"
              src="https://github-readme-stats-mgehrls.vercel.app/api/top-langs/?username=mgehrls&theme=dark"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
