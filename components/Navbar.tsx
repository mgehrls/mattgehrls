import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex order-3 lg:order-2 h-10 w-full items-center justify-between p-4">
      {links.map((l) => (
        <li className="list-none" key={l.href}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              className={`${
                l.href === path
                  ? "text-slate-400 font-bold list-none"
                  : "list-none text-slate-200"
              } text-base`}
              href={l.href}
            >
              {l.label}
            </Link>
          </motion.div>
        </li>
      ))}
    </nav>
  );
};

export default Navbar;