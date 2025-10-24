import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: "Private Bank Investment Platform",
  description: "Investment management platform for private banks and private equity groups. Multi-asset class reporting, portfolio analytics, and client reporting for high-net-worth clients.",
  keywords: [
    'private bank software',
    'private banking platform',
    'private bank investment management',
    'wealth management private bank',
    'private banking technology',
    'private bank analytics',
    'HNWI investment platform',
    'private bank portfolio management',
    'private banking reporting',
    'private equity group software',
  ],
  canonical: '/who-we-serve/private-banks',
  type: 'article',
  modifiedDate: '2024-10-05',
});

export default function PrivateBanksPage() {
  const serviceSchema = generateServiceJsonLd({
    name: 'Private Bank Solutions',
    description: 'Comprehensive platform for private banks and private equity groups featuring multi-asset class reporting, portfolio analytics, and client reporting.',
    url: '/who-we-serve/private-banks',
  });

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Who We Serve', url: '/who-we-serve' },
    { name: 'Private Banks', url: '/who-we-serve/private-banks' },
  ]);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-12">
          <h1 className="text-6xl font-light text-blue-900 mb-4">
            Venturis LP for Private Banks – Private Equity Groups
          </h1>
          <div className="flex items-center gap-6 mb-4 text-gray-600">
            <span className="text-sm">Last Updated: October 5, 2024</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Serving 30+ private banks with 5,000+ HNW client accounts</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Venturis LP brings clarity to your investment exposures across all asset classes and delivers unmatched investment management, analytics and reporting.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Data Integration</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ditch the spreadsheets and utilize API's to leading portfolio accounting systems to extract accurate and timely investment data.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Advanced Portfolio Construction, Monitoring and Analytics</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Monte Carlo regression modeling for commitment pacing. Mandate monitoring, tracking and projection for any client or portfolio across your Thematic, SMA and Closed End Funds. Get alerts to issues in time to make necessary adjustments to portfolio composition.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Fund of Funds Modeling</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Utilize Fund of Fund Management Fees and Incentive Fees to report actual and project waterfall outcomes on any portfolio
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Detailed KPI's and Mandate Functionality</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    View actual and projected KPI's and Mandate metrics in real time
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}