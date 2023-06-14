import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import Hexagon from "./Hexagon";

const anchorClasses =
  "text-lg flex items-center gap-3 hover:scale-125 transform transition-all duration-300 ease-in-out";
const divClasses = "flex justify-center items-center text-sm gap-2";

const Header = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [hexHover, setHexHover] = useState(false);

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-screen max-w-7xl flex lg:flex-col lg:gap-4 justify-between lg:justify-center p-4 lg:px-8 border-b border-white">
        <div className="">
          <div className="flex gap-2 items-center justify-center">
            <Image
              className="rounded-full shadow-xl w-12 lg:w-40 drop-shadow-[-2px_2px_2px_rgba(44,192,165,1)]"
              alt="Matt Gehrls Headshot"
              src="/images/square_headshot.jpg"
              width={150}
              height={150}
            />
            <div>
              <h1 className="font-bold lg:text-3xl">Matt Gehrls</h1>
              <h3 className="text-xs lg:text-lg">Full Stack Dev</h3>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="hidden lg:flex justify-even items-center">
            <div className="flex gap-16">
              <Email />
              <Phone />
              <LinkedIn />
              <Github />
            </div>
          </div>
          <button
            className="text-xs z-20 lg:hidden"
            onMouseEnter={() => {
              setHexHover(true);
            }}
            onMouseLeave={() => {
              setHexHover(false);
            }}
            onClick={() => {
              setShowContactInfo(!showContactInfo);
            }}
          >
            <motion.div
              initial={false}
              animate={{
                rotate: showContactInfo ? 180 : 0,
                scale: hexHover ? 1.2 : 1,
              }}
            >
              <Hexagon />
            </motion.div>
          </button>
          <AnimatePresence>
            {showContactInfo && (
              <motion.div
                initial={{ opacity: 0, x: 16, y: -30 }}
                animate={{ opacity: 1, x: 16, y: -15 }}
                exit={{ opacity: 0, x: 16, y: -30 }}
                className="absolute top-0 right-0"
              >
                <div className="flex flex-col justify-center items-center bg-black bg-opacity-90 z-10">
                  <div className="flex flex-col p-8">
                    <div className="flex flex-col gap-4 mt-16">
                      <Email />
                      <Phone />
                      <LinkedIn />
                      <Github />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;

function Email() {
  return (
    <a className={anchorClasses} href="mailto:matt.gehrls@gmail.com">
      <div className={divClasses}>
        <AiOutlineMail className="text-2xl" />
        <p>mattgehrls@gmail.com</p>
      </div>
    </a>
  );
}
function Phone() {
  return (
    <a className={anchorClasses} href="tel:16165002366">
      <div className={divClasses}>
        <AiOutlinePhone className="text-2xl" />
        <p>(1) 616-500-2366</p>
      </div>
    </a>
  );
}
function LinkedIn() {
  return (
    <a
      className={anchorClasses}
      target="_blank"
      href="https://www.linkedin.com/in/mattgehrls"
    >
      <div className={divClasses}>
        <AiOutlineLinkedin className="text-2xl" />
        <p>in/mattgehrls</p>
      </div>
    </a>
  );
}
function Github() {
  return (
    <a
      className={anchorClasses}
      target="_blank"
      href="https://github.com/mgehrls"
    >
      <div className={divClasses}>
        <AiOutlineGithub className="text-2xl" />
        <p>mgehrls</p>
      </div>
    </a>
  );
}
