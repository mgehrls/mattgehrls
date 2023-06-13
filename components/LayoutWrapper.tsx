import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Navbar from "./Navbar";

type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <>
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
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </>
);

export default LayoutWrapper;
