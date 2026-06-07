import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GP Insights - Venturis Financial',
  description: 'Insights for private equity firms, venture capital firms, and fund administrators modernizing GP operations.',
};

const articles = [
  {
    date: '2026-03-18',
    title: 'Why Private Equity Firms Need an Operating Platform, Not Another Point Solution',
    excerpt: 'PE firms are stitching together Allvue, Dynamo, DealCloud, SharePoint, Excel, data rooms, and monitoring tools. The next operating model needs one connected platform.',
    author: 'Venturis Research',
    href: '/private-equity-software',
  },
  {
    date: '2026-02-04',
    title: 'Liquidity Risk in Private Equity: What GPs Need to See Earlier',
    excerpt: 'Cash, subscription lines, uncalled commitments, borrowing base, and facility utilization need to be visible before liquidity becomes a board-level issue.',
    author: 'Venturis Research',
    href: '/liquidity-management',
  },
  {
    date: '2026-01-12',
    title: 'How Private AI Changes Deal Screening and Investment Committee Preparation',
    excerpt: 'Private AI can help deal teams standardize company research, competitor analysis, diligence checklists, and IC report creation without exposing sensitive data.',
    author: 'Venturis Research',
    href: '/due-diligence',
  },
  {
    date: '2025-11-20',
    title: 'From Quarterly Reporting to Continuous Portfolio Company Visibility',
    excerpt: 'Most GP reporting cycles still depend on stale company data. Continuous actuals and KPI monitoring can change how operating partners manage performance.',
    author: 'Venturis Research',
    href: '/corelytics',
  },
  {
    date: '2025-09-09',
    title: 'Fund Administration as a Strategic Operating Layer',
    excerpt: 'Fund administration is no longer just back-office processing. Connected cash flows, waterfalls, investor reporting, and governance can support better GP operations.',
    author: 'Venturis Research',
    href: '/fund-administration',
  },
  {
    date: '2025-07-16',
    title: 'Replacing the PE Spreadsheet Stack',
    excerpt: 'Funds, portfolios, data rooms, reporting, liquidity, and portfolio monitoring all break when Excel becomes the integration layer.',
    author: 'Venturis Research',
    href: '/solutions/gp-platform',
  },
  {
    date: '2025-05-28',
    title: 'Venture Capital Needs GP Operating Infrastructure Too',
    excerpt: 'VC firms face many of the same operating challenges as private equity: fund activity, portfolio monitoring, follow-on decisions, reporting, and investor communication.',
    author: 'Venturis Research',
    href: '/who-we-serve/venture-capital',
  },
];

export default function GPInsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-light text-blue-900 mb-8">
            GP Insights
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Research and perspective for private equity firms, venture capital firms, and fund administrators modernizing the GP operating model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.title} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
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
                  <Link href={article.href} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Explore the GP Platform
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              See how Venturis brings fund management, diligence, portfolio monitoring, liquidity, administration, and portfolio company actuals into one GP operating platform.
            </p>
            <Link href="/solutions/gp-platform" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              View GP Platform
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
