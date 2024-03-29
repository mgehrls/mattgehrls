import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Hexagon from "./Hexagon";
import { contactConfig } from "@/utils/contactConfig";
import ContactLink from "./ContactLink";

const Header = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [hexHover, setHexHover] = useState(false);

  return (
    <header className="w-screen flex justify-center items-center bg-[#171717]">
      <div className="w-full max-w-7xl flex lg:flex-col lg:gap-4 justify-between lg:justify-center p-4 lg:px-8">
        <div className="flex gap-2 items-center justify-center">
          <Image
            className="rounded-full shadow-xl w-12 lg:w-40 drop-shadow-[-2px_2px_2px_rgba(44,192,165,1)]"
            alt="Matt Gehrls smiling in a headshot. He has long hair and short beard wearing a shirt that matches the color scheme of the website."
            src="/images/square_headshot.jpg"
            width={150}
            height={150}
          />
          <div>
            <p className="font-bold lg:text-3xl text-gray-100">Matt Gehrls</p>
            <p className="text-xs lg:text-lg text-gray-100">
              Full Stack Web Dev
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={
              showContactInfo
                ? "absolute top-0 right-0 lg:static lg:flex lg:justify-even lg:items-center transition-all duration-300 ease-in-out"
                : "absolute top-0 right-0 hidden lg:static lg:flex lg:justify-even lg:items-center transition-all duration-300 ease-in-out"
            }
          >
            <div className="flex flex-col lg:flex-row gap-4 p-8 lg:gap-16 lg:p-0 pt-24 lg:pt-0 bg-black bg-opacity-90 z-10 lg:bg-transparent lg:z-0">
              {contactConfig.map((contact) => (
                <ContactLink key={contact.href} {...contact} />
              ))}
            </div>
          </div>
        </div>
        <button
          aria-label="show/hide contact information"
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
      </div>
    </header>
  );
};

export default Header;
