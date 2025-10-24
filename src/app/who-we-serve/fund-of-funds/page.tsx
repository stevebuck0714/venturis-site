import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: "Fund of Funds Management Platform",
  description: "Advanced analytics, incentive fee waterfalls, and commitment pacing for fund of funds managers. Comprehensive portfolio management and investor reporting platform.",
  keywords: [
    'fund of funds software',
    'fund of funds platform',
    'FoF management',
    'fund of funds analytics',
    'incentive fee calculation',
    'fund of funds reporting',
    'fund of funds technology',
    'alternative investment platform',
    'private markets fund of funds',
    'fund of funds waterfalls',
  ],
  canonical: '/who-we-serve/fund-of-funds',
  type: 'article',
  modifiedDate: '2024-10-28',
});

export default function FundOfFundsPage() {
  const serviceSchema = generateServiceJsonLd({
    name: 'Fund of Funds Solutions',
    description: 'Comprehensive platform for fund of funds managers featuring advanced analytics, incentive fee waterfalls, commitment pacing, and multi-asset class reporting.',
    url: '/who-we-serve/fund-of-funds',
  });

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Who We Serve', url: '/who-we-serve' },
    { name: 'Fund of Funds', url: '/who-we-serve/fund-of-funds' },
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
              Venturis LP for Fund of Funds
            </h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: October 28, 2024</p>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Venturis LP provides Fund of Funds Managers with advanced analytics, incentive fee waterfalls and commitment pacing for each fund.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Multi-Asset Class Reporting</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides Fund of Funds with a comprehensive view of their portfolios. Providing dashboards and analytics for each asset class with drill downs into investment detail. Multi-asset class reporting including Private Funds (Primary and Secondary market), Co-investments, Direct Investments, Public Debt and Public Equities.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Data Integration</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Extract information with leading portfolio accounting systems ensures accurate and timely investment data. Import data daily, weekly, monthly or quarterly. Import portfolio company data from your direct investments or your GP co-investments.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Investor Reporting</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Capturing ownership data at the position level allows you to report on any investor, family member, entity or portfolio.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Fund of Funds Reporting</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Reporting on actual and projected Fund of Fund Management Fees and Incentive Fees with actual and projected Waterfall reporting
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