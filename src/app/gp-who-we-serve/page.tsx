import Link from 'next/link';

export const metadata = {
  title: 'GP Who We Serve | Venturis',
  description: 'Venturis GP Platform serves private equity firms, venture capital firms, and fund administrators.',
};

const audiences = [
  {
    href: '/who-we-serve/private-equity',
    label: 'Private Equity',
    summary: 'Run funds, portfolio companies, diligence, liquidity, reporting, and portfolio company actuals from one operating platform.',
  },
  {
    href: '/who-we-serve/venture-capital',
    label: 'Venture Capital',
    summary: 'Support fund activity, company monitoring, follow-on decisions, investor reporting, and investment intelligence.',
  },
  {
    href: '/who-we-serve/fund-administrators',
    label: 'Fund Administrators',
    summary: 'Support fund accounting, investor reporting, cash flows, waterfalls, operations, and governance.',
  },
];

export default function GPWhoWeServePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            GP Who We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
            Built for GP operating workflows
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Venturis supports firms and administrators managing funds, portfolio companies, diligence, liquidity, reporting, and company performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <Link key={audience.href} href={audience.href} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-light text-blue-900 mb-4">
                {audience.label}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {audience.summary}
              </p>
              <span className="text-blue-900 font-medium">
                Learn more... →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
