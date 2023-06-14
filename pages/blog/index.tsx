import FitForPublicConsumption from "@/components/blogPosts/FitForPublicConsumption";
import { AnimatePresence, motion } from "framer-motion";

export default function Blog() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        className="flex-1 order-2 h-full p-4"
      >
        <div className="flex justify-center items-center">
          <div className="max-w-2xl">
            <h1 className="pt-4 pl-4 text-3xl font-bold">Blog</h1>
            <div className="px-4">
              <FitForPublicConsumption />
            </div>
            <div className="p-6">
              <FitForPublicConsumption />
            </div>
            <div className="p-6">
              <FitForPublicConsumption />
            </div>
            <div className="p-6">
              <FitForPublicConsumption />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
