import { motion, AnimatePresence } from "framer-motion";

type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);

export default LayoutWrapper;
