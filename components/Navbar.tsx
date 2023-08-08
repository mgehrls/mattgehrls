import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import EmptyHex from "./EmptyHex";

const links = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="w-screen flex justify-center items-center bg-[#171717]">
      <nav className="flex max-w-7xl h-10 w-full items-center justify-between lg:justify-evenly p-4 border-t border-white">
        {links.map((l) => (
          <li className="list-none" key={l.href}>
            <motion.div whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
              <Link
                className={`${
                  l.href === path
                    ? "text-teal-400 font-bold list-none transition-all flex items-center gap-2 max-h-8     "
                    : "list-none text-slate-200 transition-all flex items-center gap-2"
                } text-lg`}
                href={l.href}
              >
                {l.href === path && <EmptyHex />}
                {l.label}
              </Link>
            </motion.div>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
