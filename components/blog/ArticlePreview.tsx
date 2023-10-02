import { Article } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";

export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <Link
      className="w-1/2 flex flex-col justify-start items-start gap-2 bg-[#171717] p-4"
      href={`/blog/${article.slug}`}
      passHref
    >
      <Image alt="" src={article.image} width={400} height={200} />
      <h2 className="text-xl font-bold">{article.title}</h2>
      <p>{article.subtitle}</p>
      <p>{article.readingTime}</p>
    </Link>
  );
}
