import clsx from "clsx";
import useActivePosition from "@/hooks/useActivePosition";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#work ", label: "Work", id: "work" },
  { href: "#projects", label: "projects", id: "projects" },
];

const sectionIds = ["about", "work", "projects"];

const Navbar = () => {
  const { activeSection, setActiveSection } = useActivePosition(sectionIds);
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {links.map((link) => (
          <li key={link.href} onClick={() => setActiveSection(link.id)}>
            <a
              className={clsx(
                "group flex items-center py-3",
                activeSection === link.id && "active"
              )}
              href={link.href}
            >
              <span
                className={clsx(
                  "mr-4 h-2 transition-all group-hover:w-12 group-hover:dark:bg-slate-200 group-hover:bg-slate-600 group-focus-visible:w-12 group-focus-visible:dark:bg-slate-200 group-focus-visible:bg-slate-600 motion-reduce:transition-none rounded-full",
                  activeSection === link.id
                    ? "w-12 dark:bg-slate-200 bg-slate-600"
                    : "w-2 dark:bg-slate-600 bg-slate-400"
                )}
              ></span>
              <span
                className={clsx(
                  "text-xs font-bold uppercase tracking-widest group-hover:dark:text-slate-200 group-hover:text-slate-600 group-focus-visible:dark:text-slate-200 group-focus-visible:text-slate-600",
                  activeSection === link.id
                    ? "dark:text-slate-200 text-slate-600"
                    : "dark:text-slate-500 text-slate-400"
                )}
              >
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
