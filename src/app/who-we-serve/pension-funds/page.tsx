import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: "Pension Funds, Endowments & Foundations Platform",
  description: "Comprehensive investment management platform for pension funds, endowments, and foundations. Advanced commitment pacing, portfolio dashboards, and multi-asset class reporting.",
  keywords: [
    'pension fund software',
    'endowment management',
    'foundation investment platform',
    'institutional asset management',
    'pension fund analytics',
    'endowment portfolio management',
    'commitment pacing pension',
    'institutional investment platform',
    'pension fund reporting',
    'endowment technology',
  ],
  canonical: '/who-we-serve/pension-funds',
  type: 'article',
  modifiedDate: '2024-09-12',
});

export default function PensionFundsPage() {
  const serviceSchema = generateServiceJsonLd({
    name: 'Pension Fund & Endowment Solutions',
    description: 'Comprehensive platform for pension funds, endowments, and foundations featuring advanced commitment pacing, portfolio dashboards, and multi-asset class reporting.',
    url: '/who-we-serve/pension-funds',
  });

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Who We Serve', url: '/who-we-serve' },
    { name: 'Pension Funds', url: '/who-we-serve/pension-funds' },
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
              Venturis LP for Pension Funds, Endowments and Foundations
            </h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: September 12, 2024</p>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Venturis LP provides detailed dashboards for all investments and portfolios combined with advanced commitment pacing capabilities.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Comprehensive View</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides Pension Plan Managers with a comprehensive view of your portfolios. Manage all of your Investments and portfolios from one application.
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