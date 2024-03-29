import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Navbar from "./Navbar";

type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <>
    <div className="flex flex-col w-screen overflow-x-hidden min-h-screen max-h-screen text-slate-200">
      <div className="flex flex-col min-h-screen max-h-screen z-40">
        <Header />
        <Navbar />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex-1 order-2 h-full p-4"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </>
);

export default LayoutWrapper;
