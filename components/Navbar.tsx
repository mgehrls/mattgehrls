import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import EmptyHex from "./EmptyHex";
import clsx from "clsx";

const links = [
  { href: "/", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="w-screen flex justify-center items-center">
      <nav className="max-w-7xl w-full px-2">
        <ul className="flex max-w-7xl h-10 w-full items-center justify-between lg:justify-evenly p-4 border-t border-white">
          {links.map((l) => (
            <li className="list-none" key={l.href}>
              <motion.div
                whileFocus={{ scale: 1.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  className={clsx(
                    "text-lg gap-2 flex items-center transition-all list-none",
                    l.href === path
                      ? "text-teal-400 font-bold max-h-8"
                      : "text-slate-200"
                  )}
                  href={l.href}
                >
                  {l.href === path && <EmptyHex />}
                  {l.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
