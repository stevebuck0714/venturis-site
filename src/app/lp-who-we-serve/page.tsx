import Link from 'next/link';

export const metadata = {
  title: 'LP Who We Serve | Venturis',
  description: 'Venturis LP Platform serves allocators including private banks, family offices, fund of funds, OCIOs, sovereign wealth funds, pensions, endowments, foundations, and insurers.',
};

const audiences = [
  { href: '/who-we-serve/private-banks', label: 'Private Banks' },
  { href: '/who-we-serve/family-offices', label: 'Family Offices' },
  { href: '/who-we-serve/fund-of-funds', label: 'Fund of Funds' },
  { href: '/who-we-serve/outsourced-cio', label: 'OCIOs' },
  { href: '/who-we-serve/sovereign-wealth-funds', label: 'Sovereign Wealth Funds' },
  { href: '/who-we-serve/pension-funds', label: 'Pensions, Endowments, Foundations' },
  { href: '/who-we-serve/insurance-alternative-investors', label: 'Insurance Alternative Investors' },
];

export default function LPWhoWeServePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            LP Who We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
            Built for allocator portfolio workflows
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Venturis supports LP teams managing portfolio construction, commitment pacing, fund monitoring, documentation, and private markets intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <Link key={audience.href} href={audience.href} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-light text-blue-900 mb-4">
                {audience.label}
              </h2>
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
