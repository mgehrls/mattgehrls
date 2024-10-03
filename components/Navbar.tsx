import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import SelfClosingTag from "./svg/SelfClosingTag";

const links = [
  { href: "/", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex gap-6">
        {links.map((l) => (
          <li className="list-none" key={l.href}>
            <motion.div whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
              <Link
                className={clsx(
                  "text-lg gap-2 flex items-center transition-all",
                  l.href === path
                    ? "text-lightAccent dark:text-darkAccent font-bold max-h-8 underline"
                    : "text-lightModeText dark:text-darkModeText"
                )}
                href={l.href}
              >
                {l.href === path && <SelfClosingTag size={15} />}
                {l.label}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
