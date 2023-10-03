import Image from "next/image";
import Link from "next/link";
import { Component } from "react";
import type { Element } from "hast";
import { ExtraProps } from "react-markdown";

export type Components = Partial<{
  [TagName in keyof JSX.IntrinsicElements]: // Class component:
  | (new (
        props: JSX.IntrinsicElements[TagName] & ExtraProps
      ) => JSX.ElementClass)
    // Function component:
    | ((
        props: JSX.IntrinsicElements[TagName] & ExtraProps
      ) => JSX.Element | string | null | undefined)
    // Tag name:
    | keyof JSX.IntrinsicElements;
}>;

export const Heading = {
  H1: ({ children }: { children: any }) => (
    <h1 className="text-4xl font-bold pt-8 pb-4 underline">{children}</h1>
  ),
  H2: ({ children }: { children: any }) => (
    <h2 className="text-2xl font-bold pt-8 pb-4 underline">{children}</h2>
  ),
  H3: ({ children }: { children: any }) => (
    <h3 className="text-xl font-bold pt-8 pb-4 underline">{children}</h3>
  ),
};

export const Img = ({ src, alt }: { src: string; alt: string }) => {
  <Image src={src} alt={alt} className="w-full" />;
};

export const MdxLink = ({
  children,
  href,
}: {
  children: any;
  href: string;
}) => (
  <Link className="text-lg underline" href={href}>
    {children}
  </Link>
);

export const Para = ({ children }: { children: any }) => (
  <p className="text-lg py-4 leading-loose tracking-wide">{children}</p>
);

export const Code = ({ children }: { children: any }) => (
  <code className="text-sm">{children}</code>
);

export const InlineCode = ({ children }: { children: any }) => (
  <code className="text-sm">{children}</code>
);

export const Blockquote = ({ children }: { children: any }) => (
  <blockquote className="text-lg">{children}</blockquote>
);

export const List = ({ children }: { children: any }) => (
  <ul className="text-lg">
    {children.map((child: any, i: number) => (
      <li className="pl-8 py-1 italic" key={i + 1}>
        {child}
      </li>
    ))}
  </ul>
);
