import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Hexagon from "./Hexagon";
import { contactConfig } from "@/utils/contactConfig";
import ContactLink from "./ContactLink";
import Navbar from "./Navbar";
import clsx from "clsx";

const Header = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [hexHover, setHexHover] = useState(false);

  return (
    <header className="w-screen flex flex-col justify-center items-center bg-[#171717]">
      <div className="w-full max-w-7xl flex lg:flex-col lg:gap-4 justify-between lg:justify-center py-4 px-8">
        <div className="flex gap-2 items-center justify-center">
          <Image
            className="rounded-full shadow-xl w-12 lg:w-40 drop-shadow-[-2px_2px_2px_rgba(44,192,165,1)]"
            alt="Man with short hair and beard"
            src="/images/square-headshot.jpg"
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
            className={clsx(
              "absolute top-0 right-0 lg:static lg:flex lg:justify-even lg:items-center transition-all duration-300 ease-in-out",
              showContactInfo ? "hidden" : ""
            )}
          >
            <div className="flex flex-col lg:flex-row gap-4 p-8 lg:gap-16 lg:p-0 pt-24 lg:pt-0 bg-black bg-opacity-90 z-10 lg:bg-transparent lg:z-0">
              {contactConfig.map((contact, i) => (
                <ContactLink
                  tabIndex={i + 2}
                  key={contact.href}
                  contact={contact}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          tabIndex={1}
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
      <Navbar />
    </header>
  );
};

export default Header;
