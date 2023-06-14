import { AnimatePresence, motion } from "framer-motion";

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
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <hr className="h-1 w-full" />
            <h3 className="text-xl font-bold">Coming Soon</h3>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
