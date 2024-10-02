import LogoSection from "@/components/LogoSection";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    // <AnimatePresence>
    //   <motion.div
    //     initial={{ opacity: 0, y: 15 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: 15 }}
    //     className="flex-1 order-2 h-full p-4"
    //   >
    //     <div className="md:px-4 flex flex-col justify-center items-center gap-20">
    //       <h1 className="transition-all duration-500 py-10 sm:py-16 lg:py-20 xl:py-40 text-3xl sm:text-5xl lg:text-5xl xl:text-7xl text-center max-w-sm sm:max-w-lg lg:max-w-4xl">
    //         <span
    //           aria-label="brightly colored gradient behind text for emphasis"
    //           style={{
    //             backgroundColor: "#2CC0A5",
    //             background:
    //               "linear-gradient(to right, #2CC0A5 42%, #EB874E 100%)",
    //             WebkitBackgroundClip: "text",
    //             WebkitTextFillColor: "transparent",
    //             backgroundClip: "text",
    //           }}
    //           className="font-bold"
    //         >
    //           Test
    //         </span>
    //         ,{" "}
    //         <span
    //           aria-label="slightly bolder and italicized for emphasis"
    //           className="italic font-semibold"
    //         >
    //           responsive
    //         </span>{" "}
    //         software w/ the latest tech for{" "}
    //         <span className="underline text-teal-400">web and mobile</span>
    //       </h1>
    //       <div
    //         style={{ backgroundColor: "#171717" }}
    //         className="py-10 sm:py-16 max-w-7xl"
    //       >
    //         <LogoSection />
    //       </div>
    //     </div>
    //   </motion.div>
    // </AnimatePresence>
    <div>test</div>
  );
}
