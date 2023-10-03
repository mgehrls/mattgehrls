import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'
import { Article } from './types'

const articlesPath = path.join(process.cwd(), 'articles')

export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`)

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

export async function getArticleFromSlug(slug: any) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`)
    const source: Buffer | string = fs.readFileSync(articleDir)
    const { content, data } = matter(source)
  
    return {
      content,
      frontmatter: {
        slug,
        excerpt: data.excerpt,
        title: data.title,
        publishedAt: data.publishedAt,
        readingTime: readingTime(source as unknown as string).text,
        ...data,
      },
    }
  }


export async function getAllArticles() {
        const articles = fs.readdirSync(path.join(process.cwd(), 'articles'))

        return articles.reduce((allArticles: Article[], articleSlug: string) => {
            // get parsed data from mdx files in the "articles" dir
            const source = fs.readFileSync(
                path.join(process.cwd(), 'articles', articleSlug),
                'utf-8'
            )
            const { data, content } = matter(source)
            const { author, categories, date, featured, image, title, subtitle } = data

            return [
                {
                    
                  author,
                  categories,
                    content,
                    date,
                    featured,
                    image,
                    title,
                    subtitle,
                    slug: articleSlug.replace('.md', ''),
                    readingTime: readingTime(source).text,
                },
                ...allArticles,
            ]
        }, [] as Article[])
    }

