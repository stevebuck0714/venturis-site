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

const strengths = [
  {
    title: 'Enterprise grade accuracy',
    body: 'Audit-linked data flows and controls designed to stand up to IC, LPs, and auditors.',
  },
  {
    title: 'Live projections, not lagging reports',
    body: 'Mid-quarter ingestion keeps pacing, liquidity, and performance views current.',
  },
  {
    title: 'Depth without complexity',
    body: 'Advanced analytics wrapped in a clean, intuitive UI.',
  },
  {
    title: 'Enterprise integration',
    body: 'Works alongside leading fund-accounting and portfolio-monitoring stacks to reduce manual recs and rekeying.',
  },
  {
    title: 'Security by design',
    body: 'Cloud-native architecture with rigorous access controls and data governance.',
  },
];

const sections = [
  {
    title: 'Built with allocators, for allocators',
    body: "Venturis was developed in partnership large PE market clients. From day one, we've co-designed workflows around real investment committee needs - portfolio construction, commitment pacing, liquidity planning, performance analytics, and investor reporting - so the product reflects how leading allocators actually work.",
  },
  {
    title: 'What we do',
    body: "We unify alternative-asset data, automate fund and portfolio forecasting and monitoring, and deliver portfolio-level insight that's timely, accurate, and actionable - without forcing teams to live in spreadsheets or wait for quarter-end closes. Venturis connects to the systems you already use, ingests transactional detail, and turns it into live forecasts, risk flags, and decision-ready dashboards for funds, portfolios, entities, and investors.",
  },
  {
    title: 'Our experience',
    body: "Our leadership brings decades across private-markets technology, wealth platforms, and large-scale SaaS engineering. We've built and scaled systems used by global banks and institutional allocators, led cloud transformations, and shipped products that handle mission-critical financial workflows at scale. That depth shows up in the details - from our data model and controls to how fast your team gets to value.",
  },
  {
    title: 'Mission',
    body: "At Venturis, we're committed to empowering investment firms with innovative technology solutions that streamline operations, enhance decision-making, and drive growth. Our platform combines technology with deep industry expertise to deliver exceptional value to our clients.",
  },
  {
    title: 'How we work',
    body: 'Implementation is collaborative and practical. We align on your data sources, map your cash-flow conventions, and stand up production-ready dashboards quickly so teams can move from static reports to proactive portfolio management in weeks, not quarters.',
  },
  {
    title: 'The result',
    body: 'Cleaner data. Faster answers. Stronger decisions. Venturis gives allocator teams the confidence and clarity to allocate with foresight.',
  },
];

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
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
          About Venturis
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
          Financial technology built around how investment teams actually work
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-6xl">
          We&apos;re a team of financial technology experts with over 50 years of private markets experience dedicated to transforming how investment firms operate, making complex financial operations simpler and more efficient.
        </p>
      </section>

      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.slice(0, 2).map((section) => (
              <article key={section.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-light text-blue-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-3xl sm:text-5xl font-light text-blue-900 mb-8">
          Why our clients choose Venturis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {strengths.map((strength) => (
            <div key={strength.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-light text-blue-900 mb-3">{strength.title}</h3>
              <p className="text-gray-600 leading-relaxed">{strength.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.slice(2).map((section) => (
              <article key={section.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-light text-blue-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </article>
            ))}
        </div>
      </div>
      </section>
    </div>
  );
} 