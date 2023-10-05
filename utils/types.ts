export type Article = {
    author: string,
    categories: string[],
    content: string,
    date: Date,
    featured: boolean,
    image: string,
    title: string,
    subtitle: string,
    slug: string,
    readingTime: string
}

export type ArticleData = {
    author: string,
    categories: string[],
    date: Date,
    image: string,
    title: string,
    description: string,
    subtitle: string,
    slug: string,
}