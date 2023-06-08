import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const path = usePathname();

  return (
    <div className="flex flex-col items-center order-1 max-h-screen h-screen w-screen text-slate-200">
      <div className="max-w-lg">
        <Header />
        <Navbar />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex-1 order-2 h-full overflow-y-scroll p-4"
          >
            <div className="md:px-4 flex flex-col gap-4">
              <h1 className="pt-4 text-3xl font-bold">About Matt Gehrls</h1>
              <p>
                {
                  "I'm new to tech and all of my work is a work in progress. I spent the last year learning full-time once I trained my replacement in Summer 2022 after nearly a decade in Real Estate. I understand the importance of working as a team so while I focused on Frontend development, I have built normalized relational databases with working authentication using a few different services, and have a moderate understanding of design principles and how to use Figma/Illustrator. I started with mostly functional programming, but I've written apps in OOP. I'd like to think my knowledge base is deep enough to excel in frontend, but wide enough to understand and utilize the full stack."
                }
              </p>
              <Image
                width={384}
                height={600}
                alt="My github stats"
                src="https://github-readme-stats-mgehrls.vercel.app/api?username=mgehrls&show_icons=true&theme=dark&hide_rank=true"
              />
              <p>
                {
                  "Self study is only interesting for so long. I need to start working with others and growing in ways I can't expect. So if you are reading this site, I hope you understand that I know this isn't a finished product. I just started advertising my work to force myself to finish projects, and this is a first step."
                }
              </p>
              <Image
                width={384}
                height={400}
                alt="My most used programming languages"
                src="https://github-readme-stats-mgehrls.vercel.app/api/top-langs/?username=mgehrls&theme=dark"
              />
              <p>
                {
                  "I'm winging this process and hoping that transparency gets me a point or two. Follow along with my progress by checking out "
                }
                <a className="underline" href="https://github.com/mgehrls">
                  my github account!
                </a>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
