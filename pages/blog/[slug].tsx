import { getAllArticles } from "../../utils/md";
import fs from "fs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next/types";
import path from "path";
import Head from "next/head";
import { MarkdownComponents } from "@/components/mdx/MdxComponents";
import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import React from "react";
import { useState, useEffect } from "react";
import { ArticleData } from "@/utils/types";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ArticlePage({
  data,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // useState and useEffect are used to prevent the markdown from rendering on the server which led to an error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Seo {...data} />
      <div className="flex flex-col items-center justify-start">
        <div className="w-full max-w-3xl py-4">
          <Link className="flex justify-start items-center gap-2" href={"/blog"} >
            <AiOutlineArrowLeft/>
             Back to Blog
          </Link>
        </div>
        <article className="w-full max-w-3xl bg-[#171717] p-8">
          <Image
            className="w-full"
            src={data ? data?.image : ""}
            alt=""
            width={400}
            height={200}
          />
          {isClient && (
            <ReactMarkdown components={MarkdownComponents}>
              {content}
            </ReactMarkdown>
          )}
        </article>
      </div>
    </div>
  );
}

const Seo = ({
  title,
  description,
  image,
  categories,
  author,
  date,
  slug,
}: ArticleData) => (
  <Head>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`https://mattgehrls.com${image}`} />
    <meta property="og:url" content={`https://mattgehrls.com/blog/${slug}`} />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta property="og:type" content="article" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content={author}></meta>
    <title>{title}</title>
  </Head>
);

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
      data: data as ArticleData,
      content: content,
    },
  };
}
