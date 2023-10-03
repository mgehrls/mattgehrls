import Image from "next/image";
import Link from "next/link";

export const Heading = {
  H1: ({ children }) => (
    <h1 className="text-4xl font-bold pt-8 pb-4">{children}</h1>
  ),
  H2: ({ children }) => (
    <h2 className="text-2xl font-bold pt-8 pb-4 underline">{children}</h2>
  ),
  H3: ({ children }) => (
    <h3 className="text-xl font-bold pt-8 pb-4 underline">{children}</h3>
  ),
};

export const Img = ({ src, alt }: { src: string; alt: string }) => {
  <Image src={src} alt={alt} className="w-full" />;
};

export const MdxLink = ({ children, href }) => (
  <Link className="text-lg underline" href={href}>
    {children}
  </Link>
);

export const Para = ({ children }) => (
  <p className="text-lg py-4 leading-loose tracking-wide">{children}</p>
);

export const Code = ({ children }) => (
  <code className="text-sm">{children}</code>
);

export const InlineCode = ({ children }) => (
  <code className="text-sm">{children}</code>
);

export const Blockquote = ({ children }) => (
  <blockquote className="text-lg">{children}</blockquote>
);

export const List = ({ children }) => (
  <ul className="text-lg">
    {children.map((child: any, i: number) => (
      <li className="pl-8 py-1 italic" key={i + 1}>
        {child}
      </li>
    ))}
  </ul>
);
