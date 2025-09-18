import { getArticle } from '../../../utils/markdown';
import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type Props = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateStaticParams() {
  try {
    const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
    const filenames = fs.readdirSync(articlesDirectory);
    
    const params = filenames
      .filter(filename => filename.endsWith('.md'))
      .map((filename) => ({
        slug: filename.replace(/\.md$/, ''),
      }));
    
    console.log('Generated params:', params);
    return params;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = params;
    const article = await getArticle(slug);
    return {
      title: article.title,
      description: article.excerpt,
    };
  } catch (error) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
}

export default async function ArticlePage({ params }: Props) {
  try {
    const { slug } = params;
    console.log('Loading article with slug:', slug);
    const article = await getArticle(slug);
    console.log('Article loaded successfully:', article.title);

    return (
      <article className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="text-gray-600 mb-6">
          By {article.author} • {article.date}
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error loading article:', error);
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p>The requested article could not be found.</p>
        <p className="text-gray-600 mt-4">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }
} 