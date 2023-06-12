import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const path = usePathname();

  return (
    <div className="flex flex-col items-center w-screen overflow-x-hidden text-slate-200">
      <div className="max-w-lg flex flex-col max-h-screen lg:max-h-none">
        <div className="order-1">
          <Header />
        </div>
        <div className="order-3 lg:order-2">
          <Navbar />
        </div>
        <div className="order-2 flex-1 lg:order-3 overflow-y-scroll">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="flex-1 order-2 h-full p-4"
            >
              <div className="md:px-4 flex flex-col justify-center items-center gap-4">
                <h1 className="py-20 text-3xl font-bold text-center">
                  Dynamic, responsive software w/ the latest tech for web and
                  mobile
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
        </div>
      </div>
    </div>
  );
}
