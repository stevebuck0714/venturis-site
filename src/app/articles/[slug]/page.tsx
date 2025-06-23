import { getArticle } from '@/utils/markdown';
import { Metadata } from 'next';
import Link from 'next/link';

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: { params: PageParams }
): Promise<Metadata> {
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

export default async function ArticlePage(
  { params }: { params: PageParams }
) {
  try {
    const { slug } = params;
    const article = await getArticle(slug);

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-blue-900 hover:text-blue-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
          
          <article className="prose lg:prose-xl prose-headings:text-blue-900 prose-headings:font-light prose-p:text-gray-700 prose-p:leading-relaxed [&_p]:mb-4 [&_strong]:block [&_strong]:mt-6 [&_strong]:mb-2">
            <h1 className="text-5xl font-light text-blue-900 mb-6">{article.title}</h1>
            
            <div 
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }} 
            />
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/request-demo" 
              className="inline-block px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors font-medium"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-blue-900 hover:text-blue-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-5xl font-light text-blue-900 mb-6">Article Not Found</h1>
          <p className="text-gray-700">The requested article could not be found.</p>
        </div>
      </div>
    );
  }
} 