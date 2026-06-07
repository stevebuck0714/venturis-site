import Link from 'next/link';

export const metadata = {
  title: 'Who We Serve | Venturis',
  description: 'Venturis serves private markets teams across private equity firms, fund administrators, fund of funds, family offices, OCIOs, pensions, endowments, foundations, private banks, and insurers.',
};

const audiences = [
  {
    title: 'GP Application',
    description: 'Operating platform workflows for firms managing funds, deals, companies, reporting, and administration.',
    links: [
      { href: '/who-we-serve/private-equity', label: 'Private Equity', summary: 'Run funds, portfolio companies, diligence, liquidity, and reporting from one operating platform.' },
      { href: '/who-we-serve/venture-capital', label: 'Venture Capital', summary: 'Apply the same GP operating model to venture funds, companies, follow-ons, and investor reporting.' },
      { href: '/who-we-serve/fund-administrators', label: 'Fund Administrators', summary: 'Support fund accounting, cash flows, waterfalls, investor activity, reporting, and governance.' },
    ],
  },
  {
    title: 'LP Application',
    description: 'Allocator workflows for portfolio construction, pacing, monitoring, documentation, and private markets intelligence.',
    links: [
  { href: '/who-we-serve/private-banks', label: 'Private Banks' },
  { href: '/who-we-serve/family-offices', label: 'Family Offices' },
  { href: '/who-we-serve/fund-of-funds', label: 'Fund of Funds' },
  { href: '/who-we-serve/outsourced-cio', label: 'OCIOs' },
  { href: '/who-we-serve/sovereign-wealth-funds', label: 'Sovereign Wealth Funds' },
  { href: '/who-we-serve/pension-funds', label: 'Pensions, Endowments, Foundations' },
  { href: '/who-we-serve/insurance-alternative-investors', label: 'Insurance Alternative Investors' },
    ],
  },
];

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            Who We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
            Private markets operating teams need a shared source of truth
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Venturis supports GP, LP, and fund administration workflows across private markets organizations.
          </p>
        </div>

        <div className="space-y-16">
          {audiences.map((section) => (
            <section key={section.title}>
              <div className="mb-8">
                <h2 className="text-3xl font-light text-blue-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                  {section.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {section.links.map((audience) => (
                  <Link key={audience.href} href={audience.href} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-light text-blue-900 mb-4">
                      {audience.label}
                    </h3>
                    {'summary' in audience && (
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {audience.summary}
                      </p>
                    )}
                    <span className="text-blue-900 font-medium">
                      Learn more... →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
