import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import DOMPurify from 'isomorphic-dompurify';

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
  try {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const rawHtml = processedContent.toString();
    
    // Sanitize the HTML to prevent XSS attacks
    const contentHtml = DOMPurify.sanitize(rawHtml, {
      ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'a', 'ul', 'ol', 'li', 'blockquote',
        'strong', 'em', 'code', 'pre', 'img', 'br',
        'table', 'thead', 'tbody', 'tr', 'th', 'td',
        'hr', 'div', 'span'
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id'],
      ALLOW_DATA_ATTR: false
    });

    // Ensure all required fields are present
    if (!matterResult.data.title || !matterResult.data.date || !matterResult.data.excerpt || !matterResult.data.author) {
      throw new Error(`Missing required fields in ${id}.md`);
    }

    return {
      id,
      contentHtml,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      author: matterResult.data.author,
    };
  } catch (error) {
    console.error(`Error loading article ${id}:`, error);
    throw error;
  }
}

export async function getAllArticles(): Promise<ArticleData[]> {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticlesData = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(async (fileName) => {
          try {
            const id = fileName.replace(/\.md$/, '');
            return await getArticle(id);
          } catch (error) {
            console.error(`Error loading article ${fileName}:`, error);
            return null;
          }
        })
    );

    // Filter out any null entries and sort by date
    return allArticlesData
      .filter((article): article is ArticleData => article !== null)
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
  } catch (error) {
    console.error('Error loading articles:', error);
    return [];
  }
} 