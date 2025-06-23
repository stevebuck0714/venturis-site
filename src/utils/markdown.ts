import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export interface ArticleData {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  contentHtml: string;
}

export async function getArticle(id: string): Promise<ArticleData> {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    excerpt: matterResult.data.excerpt,
    author: matterResult.data.author,
  };
}

export async function getAllArticles(): Promise<ArticleData[]> {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      return await getArticle(id);
    })
  );

  // Sort posts by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
} 