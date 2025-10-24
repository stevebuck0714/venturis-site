import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: "Outsourced CIO Platform (OCIO)",
  description: "Comprehensive platform for outsourced CIOs managing client alternative asset allocations. Advanced reporting, portfolio planning, and multi-client management capabilities.",
  keywords: [
    'OCIO software',
    'outsourced CIO platform',
    'OCIO technology',
    'outsourced chief investment officer',
    'OCIO investment management',
    'OCIO portfolio platform',
    'outsourced CIO reporting',
    'OCIO analytics',
    'multi-client investment platform',
    'OCIO alternative assets',
  ],
  canonical: '/who-we-serve/outsourced-cio',
  type: 'article',
  modifiedDate: '2024-11-18',
});

export default function OutsourcedCIOPage() {
  const serviceSchema = generateServiceJsonLd({
    name: 'Outsourced CIO Solutions',
    description: 'Platform for outsourced CIOs featuring comprehensive reporting, portfolio planning, and multi-client alternative asset management capabilities.',
    url: '/who-we-serve/outsourced-cio',
  });

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Who We Serve', url: '/who-we-serve' },
    { name: 'Outsourced CIO', url: '/who-we-serve/outsourced-cio' },
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
              Venturis LP for OCIO's
            </h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: November 18, 2024</p>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Reporting and a wealth of functionality to help you plan your clients' allocation to alternative assets.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Comprehensive View</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides OCIOs with a comprehensive view of your clients' portfolios. Manage all of your client portfolios from one application.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Data Integration</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Import data via excel templates or extract data from leading portfolio accounting systems to ensure accurate and timely investment data.
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

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Access VIA Client Installation</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis can be hosted in an Azure managed solution for each of your clients which can provide you will MFA access to each clients' instance of the application
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