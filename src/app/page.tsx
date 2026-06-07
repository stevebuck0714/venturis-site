import Link from 'next/link';
import StructuredData from '@/components/SEO/StructuredData';

// Define words array with explicit order
const wordsList = [
  'Funds',
  'Investments',
  'Portfolio Companies'
];

const words = wordsList;

export default function Home() {
  // Structured data for the homepage
  const homepageStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://venturisfinancial.com/#webpage',
      url: 'https://venturisfinancial.com',
      name: 'Venturis - Intelligence for Private Markets',
      description: 'Sophisticated intelligence and analytics for private markets, empowering investment teams with AI-driven portfolio construction and real-time decision-making tools.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://venturisfinancial.com/#website',
      },
      about: {
        '@type': 'Thing',
        name: 'Private Markets Intelligence',
      },
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'Venturis Platform',
        applicationCategory: 'BusinessApplication',
        description: 'AI-powered platform for private markets intelligence, portfolio construction, and investment analytics.',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://venturisfinancial.com/#service',
      name: 'Private Markets Intelligence Platform',
      description: 'Comprehensive platform providing portfolio construction, commitment pacing, mandate compliance, and advanced analytics for private markets.',
      provider: {
        '@type': 'Organization',
        name: 'Venturis',
        url: 'https://venturisfinancial.com',
      },
      serviceType: 'Financial Technology Platform',
      category: 'Investment Management Software',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Venturis Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Portfolio Construction',
              description: 'AI-driven portfolio construction and commitment pacing tools',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Investment Analytics',
              description: 'Advanced analytics and performance monitoring for private markets',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mandate Compliance',
              description: 'Automated mandate compliance monitoring and reporting',
            },
          },
        ],
      },
    },
  ];

  return (
    <>
      <StructuredData data={homepageStructuredData} />
      <div className="min-h-screen bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <section className="mb-8">
          <div className="text-left pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-normal text-blue-900 mb-4 text-left leading-tight">
              Intelligence for Private Markets
            </h1>
            <div className="min-h-[3rem] sm:min-h-[4rem] flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-10">
              <span className="text-xl sm:text-2xl lg:text-4xl font-light text-black mb-2 sm:mb-0 sm:mr-4">supporting</span>
              <div className="h-[1.2em] leading-[1.2] overflow-hidden text-2xl sm:text-3xl lg:text-6xl font-normal text-black">
                <div className="home-word-rotation">
                  {words.map((word) => (
                    <div key={word} className="h-[1.2em] leading-[1.2] whitespace-nowrap">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview Section */}
        <section className="mt-16 mb-16">
          <div className="text-left">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl leading-relaxed whitespace-nowrap">
              Intelligence for private markets across funds, investments, and portfolio companies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 hover:bg-blue-200 transition-colors mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">GP Platform Overview</h3>
              <p className="text-gray-600 mb-4">Fund management, diligence, portfolio monitoring, liquidity, reporting, and portfolio company performance for GP teams</p>
              <div className="flex justify-end">
                <Link href="/solutions/gp-platform" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more... →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 hover:bg-green-200 transition-colors mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">LP Platform Overview</h3>
              <p className="text-gray-600 mb-4">Portfolio construction, commitment pacing, mandate monitoring, and private markets intelligence for allocators</p>
              <div className="flex justify-end">
                <Link href="/solutions/lp-platform" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more... →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 hover:bg-purple-200 transition-colors mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corelytics Overview</h3>
              <p className="text-gray-600 mb-4">Daily financial visibility, benchmarking, and plain-language analysis for portfolio companies and operators</p>
              <div className="flex justify-end">
                <Link href="/corelytics" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more... →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
    </>
  );
}