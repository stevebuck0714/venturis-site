import type { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'Documentation - Private Markets Portfolio Management Resources | Venturis',
  description: 'Comprehensive guides and frequently asked questions about private equity portfolio management, machine learning cash flow forecasting, commitment pacing, and allocator-grade software.',
  keywords: 'private equity documentation, portfolio management guides, FAQ, machine learning forecasting, commitment pacing, allocator software',
  alternates: {
    canonical: 'https://www.venturis.com/documentation',
  },
  openGraph: {
    title: 'Documentation - Private Markets Resources',
    description: 'Comprehensive guides and FAQ for institutional investors',
    url: 'https://www.venturis.com/documentation',
    type: 'website',
  },
};

export default function DocumentationPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Documentation', url: '/documentation' },
  ]);

  const faqPages = [
    {
      title: 'Neural Network/ML for Fund Models and Re-Forecasting',
      description: 'Discover how Venturis uses neural networks and machine learning trained on historical fund data and macroeconomic indicators to deliver dramatically more accurate fund models and cash flow forecasts than traditional static curve methods.',
      href: '/faq/ml-cash-flow-forecasting',
      icon: '🤖',
      topics: ['Neural Networks', 'FRED API', 'Reforecasting', 'RMSE Accuracy'],
    },
    {
      title: 'Commitment Pacing Strategies',
      description: 'Learn the strategic process of timing and sizing new fund commitments to maintain target allocation levels while managing cash flow. Understand the denominator effect, vintage year diversification, and the role of secondary market investments.',
      href: '/faq/commitment-pacing',
      icon: '📊',
      topics: ['Denominator Effect', 'Vintage Diversification', 'Secondaries', 'Target Allocation'],
    },
    {
      title: 'Portfolio Construction',
      description: 'Master the art of building diversified private equity portfolios across strategies, vintages, and managers. Understand how to balance buyout vs VC allocation, implement co-investments, and monitor portfolio metrics effectively.',
      href: '/faq/portfolio-construction',
      icon: '🎯',
      topics: ['Strategy Allocation', 'Manager Selection', 'Co-Investments', 'Rebalancing'],
    },
    {
      title: 'Allocator-Grade Software',
      description: 'Understand what distinguishes enterprise-level portfolio management platforms from basic tools. Learn about institutional security standards, data workflows, and when organizations need professional-grade software.',
      href: '/faq/allocator-grade-software',
      icon: '⚙️',
      topics: ['SOC 2 Compliance', 'Data ETL', 'Scalability', 'Portfolio Size'],
    },
    {
      title: 'Why Move from Excel',
      description: 'Discover the critical limitations of Excel for private markets portfolio management and when spreadsheets become a liability. Learn about error rates, scalability issues, and the business case for professional software.',
      href: '/faq/excel-alternatives',
      icon: '📈',
      topics: ['Spreadsheet Limitations', 'Error Reduction', 'Compliance', 'Audit Trails'],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        <h1 className="text-6xl font-light text-blue-900 mb-4">
          Documentation
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          In-depth answers to common questions about private equity portfolio management, technology, and best practices for LP allocators.
        </p>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqPages.map((faq) => (
            <Link
              key={faq.href}
              href={faq.href}
              className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-4">{faq.icon}</span>
                <h3 className="text-2xl font-semibold text-blue-900 group-hover:text-blue-700">
                  {faq.title}
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {faq.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {faq.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                <span>Read More</span>
                <svg
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-light text-blue-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team is here to help. Schedule a demo to see how Venturis can address your specific portfolio management challenges.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/request-demo"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/blog"
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Blog</h4>
              <p className="text-gray-600">Latest insights on private markets and portfolio management</p>
            </Link>
            <Link
              href="/support"
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Support</h4>
              <p className="text-gray-600">Get help with your Venturis platform</p>
            </Link>
            <Link
              href="/security"
              className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Security</h4>
              <p className="text-gray-600">Learn about our enterprise security standards</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

