import { Metadata } from "next";
import Image from "next/image";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbJsonLd } from '@/utils/seo';

export const metadata = generateSEOMetadata({
  title: "About Venturis",
  description: "Meet the team behind Venturis Financial - leaders in financial technology innovation. Over 50 years of private markets experience dedicated to transforming investment operations.",
  keywords: [
    'about venturis',
    'fintech leadership',
    'private markets experience',
    'investment technology team',
    'wealth management experts',
    'financial software company',
    'allocator technology',
    'investment platform team',
    'fintech innovation',
    'private markets technology',
  ],
  canonical: '/about',
  type: 'profile',
  modifiedDate: '2025-01-10',
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Venturis',
    description: 'Venturis was developed in partnership with two multi-billion-dollar allocators, bringing decades of private-markets technology and wealth platform experience.',
    url: 'https://venturisfinancial.com/about',
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About Venturis</h1>
              <p className="text-sm text-gray-600 mb-4">Last Updated: January 10, 2025</p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a team of financial technology experts with over 50 years of private markets experience dedicated to transforming how investment firms operate, making complex financial operations simpler and more efficient.
            </p>
          </div>

          {/* Built with allocators */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Built with allocators, for allocators</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Venturis was developed in partnership with two multi-billion-dollar allocators. From day one, we've co-designed workflows around real investment committee needs—portfolio construction, commitment pacing, liquidity planning, performance analytics, and investor reporting—so the product reflects how leading allocators actually work.
            </p>
          </div>

          {/* What we do */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What we do</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We unify alternative-asset data, automate fund and portfolio forecasting and monitoring, and deliver portfolio-level insight that's timely, accurate, and actionable—without forcing teams to live in spreadsheets or wait for quarter-end closes. Venturis connects to the systems you already use, ingests transactional detail, and turns it into live forecasts, risk flags, and decision-ready dashboards for funds, portfolios, entities, and investors.
            </p>
          </div>

          {/* Why allocators choose Venturis */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why allocators choose Venturis</h2>
            <ul className="text-lg text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Allocator-grade accuracy:</strong> Audit-linked data flows and controls designed to stand up to IC, LPs, and auditors.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Live projections, not lagging reports:</strong> Mid-quarter ingestion keeps pacing, liquidity, and performance views current.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Depth without complexity:</strong> Advanced analytics (PME variants, J-curves, scenario modeling) wrapped in a clean, intuitive UI.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Enterprise integration:</strong> Works alongside leading fund-accounting and portfolio-monitoring stacks to reduce manual recs and rekeying.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Security by design:</strong> Cloud-native architecture with rigorous access controls and data governance.</span>
              </li>
            </ul>
          </div>

          {/* Our experience */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our experience</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our leadership brings decades across private-markets technology, wealth platforms, and large-scale SaaS engineering. We've built and scaled systems used by global banks and institutional allocators, led cloud transformations, and shipped products that handle mission-critical financial workflows at scale. That depth shows up in the details—from our data model and controls to how fast your team gets to value.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Venturis, we're committed to empowering investment firms with innovative technology solutions that streamline operations, enhance decision-making, and drive growth. Our platform combines cutting-edge technology with deep industry expertise to deliver exceptional value to our clients.
            </p>
          </div>

          {/* How we work */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How we work</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Implementation is collaborative and practical. We align on your data sources, map your cash-flow conventions, and stand up production-ready dashboards quickly—so teams can move from static reports to proactive portfolio management in weeks, not quarters.
            </p>
          </div>

          {/* The result */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The result</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cleaner data. Faster answers. Stronger decisions. Venturis gives allocator teams the confidence and clarity to allocate with foresight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 