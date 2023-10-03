import ArticlePreview from "@/components/blog/ArticlePreview";
import { getAllArticles } from "../../utils/md";
import { Article } from "../../utils/types";

export default function Blog({ articles }: { articles: Article[] }) {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-start justify-center max-w-4xl w-screen h-full gap-8 pt-8">
        <h1 className="text-2xl font-bold">Blog</h1>
        <div className="flex gap-8">
          {articles.map((article) => (
            <ArticlePreview key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();

  return {
    props: {
      articles: articles,
    },
  };
}
