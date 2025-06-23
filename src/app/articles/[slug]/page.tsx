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
  const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
  const filenames = fs.readdirSync(articlesDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
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
    const article = await getArticle(slug);

    return (
      <article className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        <div className="mt-8">
          <Link href="/articles" className="text-blue-600 hover:text-blue-800">
            ← Back to Articles
          </Link>
        </div>
      </article>
    );
  } catch (error) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p>The requested article could not be found.</p>
        <div className="mt-8">
          <Link href="/articles" className="text-blue-600 hover:text-blue-800">
            ← Back to Articles
          </Link>
        </div>
      </div>
    );
  }
} 