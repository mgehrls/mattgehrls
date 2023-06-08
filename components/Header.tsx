import Image from "next/image";
import Contacts from "./Contacts";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  return (
    <div className="w-full flex justify-between p-4 border-b border-white">
      <div>
        <div className="flex gap-2 items-center justify-center">
          <Image
            className="rounded-full shadow-xl w-12"
            alt="Matt Gehrls Headshot"
            src="/images/square_headshot.jpg"
            width={150}
            height={150}
          />
          <div>
            <h1 className="font-bold">Matt Gehrls</h1>
            <h3 className="text-xs">Full Stack Dev</h3>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <button
          className="text-xs"
          onClick={() => {
            setShowContactInfo(true);
          }}
        >
          More Info v
        </button>
        <AnimatePresence>
          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              className="absolute top-0 right-0"
            >
              <Contacts
                showContactInfo
                setShowContactInfo={setShowContactInfo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
