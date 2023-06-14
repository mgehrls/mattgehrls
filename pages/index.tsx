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
        <div className="md:px-4 flex flex-col justify-center items-center gap-4">
          <h1 className="py-20 sm:py-32 lg:py-52 text-3xl sm:text-5xl lg:text-7xl font-bold text-center max-w-sm sm:max-w-lg lg:max-w-4xl">
            Dynamic, responsive software w/ the latest tech for web and mobile
          </h1>
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
      </motion.div>
    </AnimatePresence>
  );
}
