import Link from 'next/link';

export const metadata = {
  title: 'GP Platform | The Operating Platform for Private Equity Firms',
  description: 'Manage funds, portfolio companies, due diligence, liquidity, reporting, and portfolio company performance from a single platform.',
};

const operatingStack = [
  'Excel',
  'Data rooms',
  'Fund administration systems',
  'Portfolio monitoring tools',
  'Shared drives',
  'Email',
];

const modules = [
  {
    title: 'Private Equity Operating Platform',
    description: 'Run the firm from acquisition through exit with one connected workspace.',
    href: '/private-equity-software',
  },
  {
    title: 'Fund Management',
    description: 'Manage funds, investors, fees, cash flows, waterfalls, and reporting.',
    href: '/fund-management',
  },
  {
    title: 'Portfolio Management',
    description: 'Monitor every portfolio company, position, KPI, valuation, and operating metric.',
    href: '/portfolio-monitoring',
  },
  {
    title: 'Due Diligence',
    description: 'Standardize diligence workflows, checklists, IC memos, and research.',
    href: '/due-diligence',
  },
  {
    title: 'Liquidity Management',
    description: 'Track cash, subscription lines, borrowing capacity, and liquidity exposure.',
    href: '/liquidity-management',
  },
  {
    title: 'Fund Administration',
    description: 'Support accounting, investor reporting, cash flows, governance, and fund operations.',
    href: '/fund-administration',
  },
  {
    title: 'Corelytics Portfolio Company Actuals',
    description: 'Bring real-time financial visibility and operating metrics into the investment workflow.',
    href: '/corelytics',
  },
];

export default function GPPlatformPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <section className="py-10 sm:py-14">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mr-auto text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
              GP Platform
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight whitespace-nowrap">
              The Operating Platform for Private Equity Firms
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-4 max-w-4xl">
              Manage funds, portfolio companies, due diligence, liquidity, reporting, and portfolio company performance from a single platform.
            </p>
            <p className="text-2xl text-blue-900 font-light">
              One system for the entire investment lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl font-light text-blue-900 mb-6">
                Built Specifically for Private Equity
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Most PE firms operate across disconnected systems. Venturis brings everything together in one operating platform.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <p className="text-lg font-semibold text-gray-900 mb-6">Replace the stitched-together operating stack:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {operatingStack.map((item) => (
                  <div key={item} className="bg-gray-50 rounded-lg px-4 py-3 text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-light text-blue-900 mb-8">
            Platform Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {modules.map((module) => (
              <Link key={module.href} href={module.href} className="group bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-light text-blue-900 mb-4 group-hover:text-blue-700">
                  {module.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {module.description}
                </p>
                <span className="text-blue-900 font-medium group-hover:text-blue-700">
                  Learn more... →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
