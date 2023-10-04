import Image from "next/image";
import Link from "next/link";
import { Component } from "react";
import type { Element } from "hast";
import { ExtraProps } from "react-markdown";

export type Components = Partial<{
  [TagName in keyof JSX.IntrinsicElements]:  // Class component:
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

export const Para = (paragraph: { children?: boolean; node?: any}) => {
  const { node } = paragraph

  if (node.children[0].tagName === "img") {
    const image = node.children[0]
    const metastring = image.properties.alt
    const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
    const metaWidth = metastring.match(/{([^}]+)x/)
    const metaHeight = metastring.match(/x([^}]+)}/)
    const width = metaWidth ? metaWidth[1] : "768"
    const height = metaHeight ? metaHeight[1] : "432"
    const isPriority = metastring?.toLowerCase().match('{priority}')
    const hasCaption = metastring?.toLowerCase().includes('{caption:')
    const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

    return (
      <div className="postImgWrapper">
        <Image
          src={image.properties.src}
          width={width}
          height={height}
          className="postImg"
          alt={alt}
          priority={isPriority}
        />
          {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
      </div>
    )
  }
  return <p>{paragraph.children}</p>
};

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
  <ul className="text-lg">{children}</ul>
);

export const ListItem = ({ children, i }: { children: any; i: number }) => (
  <li className="pl-8 py-1 italic" key={i + 1}>
    {children}
  </li>
);
