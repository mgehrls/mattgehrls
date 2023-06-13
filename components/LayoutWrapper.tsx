import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Navbar from "./Navbar";

type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <>
    <div className="flex flex-col items-center w-screen overflow-x-hidden min-h-screen max-h-screen text-slate-200">
      <div className="max-w-7xl flex flex-col min-h-screen max-h-screen">
        <div
          className="order-1 fixed md:static top-0 left-0 w-full"
          style={{ backgroundColor: "#171717" }}
        >
          <Header />
        </div>
        <div
          style={{ backgroundColor: "#171717" }}
          className="order-3 md:order-2 fixed md:static bottom-0 left-0 w-full"
        >
          <Navbar />
        </div>
        <div className="order-2 flex-1 lg:order-3 py-24">
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
