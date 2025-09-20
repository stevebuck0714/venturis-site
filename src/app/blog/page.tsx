import { getAllArticles } from '../../utils/markdown';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Venturis Financial',
  description: 'Insights, trends, and thought leadership in private markets, AI-driven analytics, and financial technology.',
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-light text-blue-900 mb-8">
            Insights & Thought Leadership
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Stay ahead of the curve with our latest insights on private markets, AI-driven analytics, 
            portfolio management, and the future of alternative investments.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <Link 
                    href={`/articles/${article.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Want to stay informed about the latest trends in private markets and financial technology?
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
