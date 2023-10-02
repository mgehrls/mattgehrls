import { getAllArticles } from "../../utils/md";

export default function Blog({ posts }) {
  console.log(posts);

  return (
    <div>
      <h1>Blog</h1>
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
