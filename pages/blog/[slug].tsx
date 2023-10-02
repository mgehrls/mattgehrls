import { serialize } from "next-mdx-remote/serialize";
import { getAllArticles } from "../../utils/md";
import { Article } from "../../utils/types";
import { MDXRemote } from "next-mdx-remote";

export default function Article({ article }: { article: Article }) {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-start justify-center max-w-4xl w-screen h-full gap-8 pt-8">
        <h2 className="text-4xl">
          Temporarily broken. Working on getting mdx to work
        </h2>
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

export async function getStaticProps({ params }: any) {
  const articles = await getAllArticles();
  const { slug } = params;
  const article = articles.find((article) => article.slug === slug);
  const source = await serialize(article?.content);

  return {
    props: {
      article: article,
    },
  };
}
