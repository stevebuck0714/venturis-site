import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: 'Why Choose Venturis for Portfolio Construction',
  description: 'Discover why leading investment teams choose Venturis for portfolio construction. AI-powered commitment pacing, allocator-grade forecasting, and real-time portfolio optimization.',
  keywords: [
    'why choose venturis',
    'portfolio construction platform',
    'commitment pacing software',
    'allocator grade forecasting',
    'portfolio construction benefits',
    'investment portfolio platform',
    'private markets portfolio construction',
    'AI portfolio construction',
    'automated commitment pacing',
    'portfolio optimization platform',
  ],
  canonical: '/solutions/why-choose-venturis-portfolio-construction',
  type: 'article',
  modifiedDate: '2024-12-02',
});

export default function WhyChooseVenturisPortfolioConstructionPage() {
  const serviceSchema = generateServiceJsonLd({
    name: 'Why Choose Venturis for Portfolio Construction',
    description: 'Comprehensive guide on why investment teams choose Venturis for portfolio construction, featuring AI-powered commitment pacing and allocator-grade forecasting.',
    url: '/solutions/why-choose-venturis-portfolio-construction',
  });

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Solutions', url: '/solutions' },
    { name: 'Investment Teams', url: '/solutions/investment-teams' },
    { name: 'Why Choose Venturis', url: '/solutions/why-choose-venturis-portfolio-construction' },
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
        <div className="max-w-[90rem] mx-auto px-6 py-16">
          {/* Back to Investment Teams Link */}
          <div className="mb-8">
            <Link 
              href="/solutions/investment-teams" 
              className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Investment Teams
            </Link>
          </div>

          <h1 className="text-6xl font-light text-blue-900 mb-2">
            See Why Investment Teams choose Venturis for Portfolio Construction
          </h1>
          <p className="text-sm text-gray-600 mb-6">Last Updated: December 2, 2024</p>
          
          <div>
            {/* Intro Section */}
            <section className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Allocators need more than dashboards—they need portfolio construction that updates on data loads, accurate pacing, forward liquidity, and mid quarter updates from GP portal data.
              </p>
            </section>

            {/* When to pick Venturis */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">When to pick Venturis</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>You prioritize commitment pacing & liquidity planning with live updates (not only quarter end).</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>You automate GP portal data - update portfolio forecasts any time, run NAV checks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>You need Board/Investor ready outputs for policy/mandate alerts, and any entity rollups (investor, fund, portfolio).</span>
                </li>
              </ul>
            </section>

            {/* Side by Side Comparison */}
            <section className="mb-12">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Capability</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Primary focus</td>
                      <td className="border border-gray-300 px-4 py-3">Allocator analytics (portfolio construction, liquidity management, monitoring, reporting)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Commitment pacing & construction</td>
                      <td className="border border-gray-300 px-4 py-3">Portfolio Construction with Native commitment pacing, Monte Carlo simulations</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Forward liquidity & LOC planning</td>
                      <td className="border border-gray-300 px-4 py-3">Yes (calls vs distributions, LOC vs cash, runway)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Mid quarter LP portal ingestion - auto updates</td>
                      <td className="border border-gray-300 px-4 py-3">Yes (ingest - normalize - update forecasts; NAV variance checks)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Mandate/Policy alerts</td>
                      <td className="border border-gray-300 px-4 py-3">Yes (strategy/sector/geo exposure, ESG, drift & breach alerts)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Reporting for IC/boards & any entity rollups</td>
                      <td className="border border-gray-300 px-4 py-3">One click board decks; investor, fund, portfolio</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Time to value</td>
                      <td className="border border-gray-300 px-4 py-3">Fast API integrations</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Best for</td>
                      <td className="border border-gray-300 px-4 py-3">LP teams wanting operational data → decisions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Why Venturis wins */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">Why Venturis wins for LP pacing & mid quarter decisions</h2>
              <ol className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                  <span><strong>Complete Solution</strong> – no additional modules to purchase</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                  <span><strong>API integration with legacy systems.</strong> Forecasts and alerts tie back to original docs and portal data.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                  <span><strong>Allocator first modeling.</strong> Pacing and liquidity scenarios reflect commitments, co invests, secondaries, and policy limits.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</span>
                  <span><strong>Board and Investor ready in a click.</strong> IC/Board/Investor packs with mandate adherence, exposures, and variance/NAV checks.</span>
                </li>
              </ol>
            </section>

            {/* Common Use Cases */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">Common Use Cases</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Commitment plan build out (staggered vs front loaded; impact on unfunded and liquidity).</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Quarter in progress updates from LP portals to pre empt quarter end surprises.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mandate compliance with strategy/sector/geo/ESG drift alerts and look through exposures.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>NAV validation using portfolio company data to sanity check GP valuations.</span>
                </li>
              </ul>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">FAQs</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Q1. Can Venturis work alongside an existing accounting/GL?</h3>
                  <p className="text-gray-700">Yes. Venturis consumes operational data and documents, leaving the GL intact while maintaining audit links.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Q2. Do we need an LP portal ingestion vendor?</h3>
                  <p className="text-gray-700">No, Venturis integrates with your LP portals with common ingestion approaches (APIs, vendor tools, secure file exchanges). If you already use a vendor, Venturis maps that data into pacing and monitoring models.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Q3. How quickly can we pilot?</h3>
                  <p className="text-gray-700">Most teams start with a subset of portfolios/funds and a standard data pack; implementation timing depends on scope and integrations.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Q4. What about security and bank grade permissions?</h3>
                  <p className="text-gray-700">Role based access, detailed audit logs, and segregation of data by entity/client are standard expectations; deployment options can align with enterprise requirements.</p>
                </div>
              </div>
            </section>

            <section className="bg-blue-900 text-white p-16 rounded-lg">
              <h2 className="text-4xl font-light mb-8">
                Ready to Transform Your Investment Operations?
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                Let us show you how our platform can enhance your investment team's capabilities and streamline your operations.
              </p>
              <Link href="/request-demo" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
