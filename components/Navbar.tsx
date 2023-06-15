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
    <div className="w-screen flex justify-center items-center">
      <nav className="flex max-w-7xl order-3 lg:order-2 h-10 w-full items-center justify-between lg:justify-evenly p-4 border-t border-white">
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
    </div>
  );
};

export default Navbar;
