import clsx from "clsx";
import { Copy, Mail, Phone } from "lucide-react";
import React from "react";
import CopyToClipboard from "../svg/CopyToClipboard";

export interface Link {
  href: string;
  ariaLabel: string;
  title: string;
  icon: React.SVGProps<SVGSVGElement>;
}

function Links() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [phoneCopied, setPhoneCopied] = React.useState(false);

  const links = [
    {
      href: "https://www.linkedin.com/in/mattgehrls/",
      ariaLabel: "LinkedIn (opens in a new tab)",
      title: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
    },
    {
      href: "https://github.com/mgehrls",
      ariaLabel: "GitHub (opens in a new tab)",
      title: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      ),
    },
  ];

  const contacts = [
    {
      href: "mailto:matt.gehrls@gmail.com",
      ariaLabel: "Email",
      icon: <Mail size={25} />,
      text: "matt.gehrls@gmail.com",
      copied: emailCopied,
      setCopied: () =>
        handleCopyToClipboard("matt.gehrls@gmail.com", setEmailCopied),
    },
    {
      href: "tel:16165002366",
      ariaLabel: "Phone number: 616-500-2366",
      icon: <Phone size={25} />,
      text: "616-500-2366",
      copied: phoneCopied,
      setCopied: () => handleCopyToClipboard("616-500-2366", setPhoneCopied),
    },
  ];

  function handleCopyToClipboard(
    text: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="transition-all duration-300 ease-in-out mt-8 lg:mt-0 text-slate-600 dark:text-slate-400">
      <div className="flex items-center">
        <ul className="flex items-center z-10" aria-label="Social media">
          {links.map((link) => (
            <li key={link.href} className="mr-5 text-xs shrink-0">
              <a
                className="block hover:text-slate-900 focus:text-slate-900 hover:dark:text-slate-200 focus:dark:text-slate-200"
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.ariaLabel}
                title={link.title}
              >
                <span className="sr-only">{link.title}</span>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="border-[1px] border-current z-10 rounded-full px-4 py-2 text-sm font-bold hover:text-slate-900 focus:text-slate-900 hover:dark:text-slate-200 focus:dark:text-slate-200 hover:scale-105 focus:scale-105 transition-all duration-150 ease-in-out focus:outline"
          aria-label="Reveals links to email and phone, and buttons to copy that information to your clipboard"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide Contact" : "Show Contact"}
        </button>
      </div>
      <div
        className={clsx(
          "transition-all duration-150 ease-in-out motion-reduce:transition-none flex flex-col gap-4 justify-center",
          isOpen ? "opacity-100 h-10 mt-10" : "opacity-0 h-0 mt-0"
        )}
      >
        {contacts.map((contact) => (
          <div
            key={contact.href}
            className="transition-all duration-150 ease-in-out flex items-center justify-between gap-8"
          >
            <a
              className={clsx(
                "transition-all duration-150 ease-in-out flex gap-4 hover:text-slate-900 focus:text-slate-900 hover:dark:text-slate-200 focus:dark:text-slate-200 hover:scale-105 focus:scale-105",
                !isOpen && "hidden"
              )}
              href={contact.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={contact.ariaLabel}
              title={contact.ariaLabel}
            >
              {contact.icon}
              {contact.text}
            </a>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className={clsx(
                  "transition-all duration-500 ease-in-out",
                  contact.copied ? "opacity-100" : "opacity-0"
                )}
              >
                Copied!
              </span>
              <button
                onClick={() => contact.setCopied()}
                aria-label={`Copy ${contact.text} to clipboard`}
                className={clsx(
                  "mr-10 hover:text-slate-900 focus:text-slate-900 hover:dark:text-slate-200 focus:dark:text-slate-200 hover:scale-105 focus:scale-105 transition-all duration-150 ease-in-out",
                  !isOpen && "hidden"
                )}
              >
                <CopyToClipboard size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
