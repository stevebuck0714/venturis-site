import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, generateServiceJsonLd, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: 'Venturis vs Excel/Legacy Systems',
  description: 'Move from spreadsheets to an allocator-grade system. Discover why Excel and legacy tools fall short for private markets portfolio management and how Venturis delivers enterprise-grade solutions.',
  keywords: [
    'venturis vs excel',
    'excel alternative investment',
    'spreadsheet to portfolio system',
    'allocator grade software',
    'excel limitations private markets',
    'portfolio management vs excel',
    'investment software vs spreadsheet',
    'legacy system replacement',
    'enterprise portfolio platform',
    'spreadsheet risks investment',
  ],
  canonical: '/solutions/venturis-vs-excel',
  type: 'article',
  modifiedDate: '2024-11-08',
});

export default function VenturisVsExcelPage() {
  const serviceSchema = generateServiceJsonLd({
    name: 'Venturis vs Excel Comparison',
    description: 'Comprehensive comparison of Venturis allocator-grade platform vs Excel spreadsheets and legacy systems for private markets portfolio management.',
    url: '/solutions/venturis-vs-excel',
  });

  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Solutions', url: '/solutions' },
    { name: 'Investment Teams', url: '/solutions/investment-teams' },
    { name: 'Venturis vs Excel', url: '/solutions/venturis-vs-excel' },
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
            Venturis vs Excel/Legacy<br />
            From Spreadsheets to an Allocator Grade System
          </h1>
          <p className="text-sm text-gray-600 mb-6">Last Updated: November 8, 2024</p>
          
          <div>
            {/* Intro Section */}
            <section className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Spreadsheets are flexible and familiar—but they struggle when allocator teams need audit linked data, commitment pacing, liquidity scenarios, and repeatable board reporting across many entities. Here's a practical comparison to decide when to level up.
              </p>
            </section>

            {/* When to move beyond Excel */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">When to move beyond Excel</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>You maintain multiple versions of the truth across email/OneDrive.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Quarter end closes gate forecasts for weeks; mid quarter updates aren't feasible.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Board/IC packs take days, and exposure/mandate breaches are found late.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>You ingest documents from LP portals and rekey data manually.</span>
                </li>
              </ul>
            </section>

            {/* Side by Side Comparison */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">Side by Side Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Capability</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Venturis</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">Excel / Legacy Sheets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Data lineage & auditability</td>
                      <td className="border border-gray-300 px-4 py-3">End to end lineage from document - data - forecast; immutable audit links</td>
                      <td className="border border-gray-300 px-4 py-3">Cell level changes not attributable; comments & track changes are manual and lossy</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Version control</td>
                      <td className="border border-gray-300 px-4 py-3">Single source with roles & history</td>
                      <td className="border border-gray-300 px-4 py-3">File sprawl (v1 v9 FINAL), links break, hard to reconcile</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Commitment pacing & portfolio construction</td>
                      <td className="border border-gray-300 px-4 py-3">Native engine (commitment plans, J curve, Monte Carlo, policy limits)</td>
                      <td className="border border-gray-300 px-4 py-3">Custom formulas & tabs; high maintenance; fragile when adding scenarios</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Liquidity & cash flow modeling</td>
                      <td className="border border-gray-300 px-4 py-3">Calls/dists runway, LOC vs cash, stress tests</td>
                      <td className="border border-gray-300 px-4 py-3">Possible but manual and error prone; difficult for multi entity rollups</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Mid quarter LP portal ingestion</td>
                      <td className="border border-gray-300 px-4 py-3">Automated capture/normalization - forecasts auto update; NAV variance checks</td>
                      <td className="border border-gray-300 px-4 py-3">Manual download/rekey; updates lag until quarter end</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Exposures & mandate alerts</td>
                      <td className="border border-gray-300 px-4 py-3">Strategy/sector/geo exposures; drift/breach alerts</td>
                      <td className="border border-gray-300 px-4 py-3">Manual pivots/conditional formats; breaches often detected late</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Reporting (IC/Board)</td>
                      <td className="border border-gray-300 px-4 py-3">One click packs; consistent entity rollups (investor, fund, portfolio)</td>
                      <td className="border border-gray-300 px-4 py-3">Copy/paste to decks; inconsistent, time consuming, error risk</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Collaboration & permissions</td>
                      <td className="border border-gray-300 px-4 py-3">Role based access, review flows, segregation by client/entity</td>
                      <td className="border border-gray-300 px-4 py-3">Ad hoc sharing; risk of overexposure/overwrite</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Security & compliance</td>
                      <td className="border border-gray-300 px-4 py-3">Bank grade permissions, audit logs</td>
                      <td className="border border-gray-300 px-4 py-3">Workbook passwords & share links; hard to evidence controls</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Time to value</td>
                      <td className="border border-gray-300 px-4 py-3">Prebuilt allocator models; quick pilots</td>
                      <td className="border border-gray-300 px-4 py-3">Fast for one off analysis; slow/fragile at scale</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Total cost of ownership</td>
                      <td className="border border-gray-300 px-4 py-3">Predictable SaaS + time saved; fewer errors</td>
                      <td className="border border-gray-300 px-4 py-3">License is cheap; people time (ops, FP&A) expensive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* What spreadsheets are still great for */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">What spreadsheets are still great for</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Ad hoc analysis and quick prototypes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Small, low frequency programs with limited entities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Exploratory modeling before operationalizing in Venturis</span>
                </li>
              </ul>
            </section>

            {/* Typical migration path */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">Typical migration path (4–8 weeks)</h2>
              <ol className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                  <span><strong>Scope:</strong> choose 1–2 portfolios and 3–4 critical reports (pacing, liquidity, exposures, IC pack).</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                  <span><strong>Map:</strong> import current Excel logic; reconcile results.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                  <span><strong>Automate:</strong> connect LP portal ingestion and standard data packs.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</span>
                  <span><strong>Roll out:</strong> publish role based dashboards and board reports; retire redundant sheets.</span>
                </li>
              </ol>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">FAQs</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Q1. Can we keep some models in Excel?</h3>
                  <p className="text-gray-700">Yes—Venturis coexists with Excel. Keep your sandbox models in excel; operational forecasts and reporting live in Venturis.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Q2. How do we ensure numbers match our legacy workbooks?</h3>
                  <p className="text-gray-700">During onboarding, we run side by side reconciliations and lock methods; audit links confirm sources.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Q3. Can Venturis export back to Excel/PowerPoint?</h3>
                  <p className="text-gray-700">Yes—scheduled extracts and one click board decks; analysts can still slice in Excel and paste visuals into IC packs.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Q4. Do we need to change the GL?</h3>
                  <p className="text-gray-700">No. Venturis sits alongside existing accounting systems; it references source documents and operational data.</p>
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
