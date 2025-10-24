import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: "Family Office Investment Platform",
  description: "Comprehensive investment management platform for family offices. Multi-asset class reporting, portfolio analytics, and investor reporting for private and public investments.",
  keywords: [
    'family office software',
    'family office investment platform',
    'multi-asset class reporting',
    'family office technology',
    'private wealth management',
    'family office analytics',
    'investment management family office',
    'family office portfolio management',
    'family office reporting',
    'wealth management platform',
  ],
  canonical: '/who-we-serve/family-offices',
  type: 'article',
  modifiedDate: '2024-11-05',
});

export default function FamilyOfficesPage() {
  const serviceSchema = generateServiceJsonLd({
    name: 'Family Office Solutions',
    description: 'Comprehensive investment management platform for family offices featuring multi-asset class reporting, portfolio analytics, and advanced investor reporting.',
    url: '/who-we-serve/family-offices',
  });

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Who We Serve', url: '/who-we-serve' },
    { name: 'Family Offices', url: '/who-we-serve/family-offices' },
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
              Venturis LP for Family Offices
            </h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: November 5, 2024</p>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Venturis LP brings clarity to your investment exposures across all asset classes and delivers unmatched investment management, analytics as well as family member reporting.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Multi-Asset Class Reporting</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides family offices with a comprehensive view of their portfolios. Providing dashboards and analytics for each asset class with drill downs into investment detail. Multi-asset class reporting including Private Funds (Primary and Secondary market), Co-investments, Direct Investments, Public Debt and Public Equities.
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
                    Capturing ownership data at the position level allows you to report on any family member, entity or portfolio.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Advanced Fund and Portfolio Construction, Monitoring and Analytics</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Investment modeling and monitoring is the core of Venturis LP and is designed to more accurately project cash flows and market values across all your asset classes.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Advanced Wealth Advisory Functionality for your family members and their Entity's</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    View family member individual positions or entire portfolios, run simulations and plan investments for each family member in real time.
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