"use client";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col w-screen overflow-x-hidden min-h-screen max-h-screen text-slate-200">
          <div className="flex flex-col min-h-screen max-h-screen z-40">
            <Header />
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
      </body>
    </html>
  );
}
