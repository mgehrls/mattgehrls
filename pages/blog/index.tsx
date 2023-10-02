import { getAllArticles } from "../../utils/md";

export default function Blog({ posts }) {
  console.log(posts);

  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col items-center justify-center max-w-xl w-screen h-full gap-8">
        <h1>Blog - WIP</h1>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}
