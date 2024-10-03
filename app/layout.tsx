"use client";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lightPrimary dark:bg-darkPrimary text-lightModeText dark:text-darkModeText">
        <ThemeProvider attribute="class" defaultTheme="system">
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
        </ThemeProvider>
      </body>
    </html>
  );
}
