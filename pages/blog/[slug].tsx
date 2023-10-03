import { serialize } from "next-mdx-remote/serialize";
import { getAllArticles } from "../../utils/md";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next/types";
import path from "path";
import Head from "next/head";
import {
  Blockquote,
  Code,
  Heading,
  Img,
  InlineCode,
  List,
  MdxLink,
  Para,
} from "@/components/mdx/MdxComponents";
import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import React from "react";

export default function ArticlePage({
  data,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <div className="flex justify-center items-start">
        <article className="w-full max-w-3xl bg-[#171717] p-8">
          <Image
            className="w-full"
            src={data ? data?.image : ""}
            alt=""
            width={400}
            height={200}
          />
          <ReactMarkdown
            components={{
              h1: Heading.H1,
              h2: Heading.H2,
              h3: Heading.H3,
              p: Para,
              code: Code,
              inlineCode: InlineCode,
              blockquote: Blockquote,
              ul: List,
              ol: List,
              image: Img,
              a: MdxLink,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const articles = await getAllArticles();

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { slug } = params as { slug: string };

  const source = fs.readFileSync(
    path.join("articles", (slug + ".md") as string),
    "utf8"
  );
  const { data, content } = matter(source);

  return {
    props: {
      data: data,
      content: content,
    },
  };
}
