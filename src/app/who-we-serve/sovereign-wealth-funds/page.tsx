import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: "Sovereign Wealth Fund Platform",
  description: "Holistic investment management platform for sovereign wealth funds. Multi-asset class reporting from fund investments to complex direct investments with advanced analytics.",
  keywords: [
    'sovereign wealth fund software',
    'SWF investment platform',
    'sovereign wealth fund technology',
    'SWF portfolio management',
    'sovereign wealth analytics',
    'SWF reporting platform',
    'sovereign wealth fund analytics',
    'institutional investment SWF',
    'sovereign fund management',
    'SWF direct investments',
  ],
  canonical: '/who-we-serve/sovereign-wealth-funds',
  type: 'article',
  modifiedDate: '2024-09-28',
});

export default function SovereignWealthFundsPage() {
  const serviceSchema = generateServiceJsonLd({
    name: 'Sovereign Wealth Fund Solutions',
    description: 'Comprehensive platform for sovereign wealth funds featuring holistic multi-asset class reporting, from fund investments to complex direct investments.',
    url: '/who-we-serve/sovereign-wealth-funds',
  });

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Who We Serve', url: '/who-we-serve' },
    { name: 'Sovereign Wealth Funds', url: '/who-we-serve/sovereign-wealth-funds' },
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
            Venturis LP for Sovereign Wealth Funds
          </h1>
          <div className="flex items-center gap-6 mb-4 text-gray-600">
            <span className="text-sm">Last Updated: September 28, 2024</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Trusted by sovereign wealth funds managing $25B+ in assets</span>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Venturis LP provides a holistic view of all asset classes from fund investments to complex direct investments.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Multi-Asset Class Reporting</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides Sovereign Wealth Funds with a comprehensive view of their portfolios. Providing dashboards and analytics for each asset class with drill downs into investment detail. Multi-asset class reporting including Private Funds (Primary and Secondary market), Co-investments, Direct Investments, Public Debt and Public Equities.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Comprehensive View</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides SWF's with a comprehensive view of your clients' portfolios. Manage all of your Investments and portfolios from one application.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Data Integration</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Extract information with leading portfolio accounting systems ensures accurate and timely investment data. Import data daily, weekly, monthly or quarterly. Import portfolio company data from your direct investments or your GP deals.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Intuitive Dashboards</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP's intuitive dashboards provide access to all underlying fund and portfolio company data across every private capital asset class: Private Funds, Co-investments, Direct Investments, Public Debt and Public Equities.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Advanced Portfolio Construction, Monitoring and Analytics</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Monte Carlo regression modeling for commitment pacing. Mandate monitoring, tracking and projection for any client or portfolio across your Thematic, SMA and Closed End Funds. Get alerts to issues in time to make necessary adjustments to portfolio composition.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Advanced Analytics</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides advance Neural Network/ML modeling for forecasting and re-forecasting of fund cashflows and Monte Carlo simulations models for commitment pacing. These technologies are designed to provide you with more accurate cash flow modeling, reducing the risks of over commitment and idle cash.
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