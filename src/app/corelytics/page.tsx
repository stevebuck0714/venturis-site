import Link from 'next/link';

export const metadata = {
  title: 'Corelytics | Tomorrow\'s Problem Is Hiding in Your Numbers',
  description: 'Corelytics connects to accounting and ERP systems, surfaces issues hiding in financial data, and gives operators plain-language analysis every day.',
};

const integrations = ['QuickBooks', 'Xero', 'NetSuite', 'Infor', 'Sage', 'Acumatica', 'Microsoft Dynamics'];

const steps = [
  {
    number: '01',
    title: 'Connect your books',
    body: 'Link your accounting system — QuickBooks, NetSuite, Infor, Acumatica, Dynamics, Xero, and others. We pull your data securely in minutes, not months. No data entry. No spreadsheets.',
  },
  {
    number: '02',
    title: 'See what actually matters',
    body: 'Your financial and operational data is normalized, benchmarked against 673 industry groups, and analyzed for problems automatically. Every morning, your CompanyPulse shows you what changed, what needs attention, and what is fine.',
  },
  {
    number: '03',
    title: 'Ask anything, anytime',
    body: 'Use AskCorelytics to query your own data in plain English. Get answers in seconds — projections, risk flags, plain-language summaries. Senior advisors are available on demand when you want experienced judgment.',
  },
];

const capabilities = [
  {
    title: 'Live Data — Updated Daily',
    body: 'Your accounting system and ERP, connected. Revenue, cash flow, margins, AR/AP, inventory turns, customer concentration, and product-level profitability pulled in every day.',
  },
  {
    title: 'CompanyPulse',
    body: 'One screen, every morning. What changed overnight, what crossed a threshold, and what needs your attention today.',
  },
  {
    title: 'Scenario Modeling',
    body: 'Model hiring, pricing, slow-pay clients, cash impact, runway, and margin against your actual numbers before you commit.',
  },
  {
    title: 'Automated Risk Detection',
    body: 'Anomaly detection, threshold alerts, and covenant tracking run continuously against live data so problems surface early.',
  },
  {
    title: 'Industry Benchmarking',
    body: 'Compare margins, liquidity ratios, and operating metrics against real data across 673 NAICS industry groups.',
  },
  {
    title: 'Set Up in Hours, Not Months',
    body: 'Connect to your accounting system and start getting answers the same day. No implementation project required.',
  },
];

const beforeAfter = [
  {
    title: 'Daily Financial Visibility',
    before: 'You spend weekends dumping ERP data into Excel, trying to piece together what is actually going on before briefing your team Monday morning.',
    after: 'CompanyPulse updates every day as your books update. Revenue, AR, AP, inventory, margins, and risks are visible before your first coffee.',
  },
  {
    title: 'Industry Benchmarking',
    before: 'You Google industry averages that are vague, outdated, and hard to compare against your business.',
    after: 'Benchmarks for your specific NAICS industry group show where you are above, below, or at par.',
  },
  {
    title: 'Customer Concentration Risk',
    before: 'You realize too late that a small group of clients drives most of your revenue after payment behavior changes.',
    after: 'Customer concentration, payment trends, and order volume shifts are always visible so risk appears early.',
  },
  {
    title: 'Operational Efficiency',
    before: 'Margins feel off, but pricing, inventory, and product-line profitability are fragmented across systems.',
    after: 'Margin by product, customer, and segment is pulled automatically so you can act on real drivers.',
  },
  {
    title: 'Hiring Decisions',
    before: 'You wait a week for a spreadsheet to understand whether you can afford key hires.',
    after: 'Ask whether you can afford three new hires and get an answer modeled against your actual trajectory in seconds.',
  },
];

export default function CorelyticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            Corelytics
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
            Tomorrow&apos;s problem? It&apos;s hiding in your numbers. Find and fix it today.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-6 max-w-4xl">
            Corelytics connects to your accounting and ERP systems, surfaces the issues hiding in your data, and gives you the analysis to act — in plain language, every day. When you need experienced judgment, senior advisors are available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-demo" className="inline-flex justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors">
              Explore a Working Demo
            </Link>
            <Link href="/contact" className="inline-flex justify-center rounded-md border border-blue-900 px-6 py-3 text-base font-semibold text-blue-900 hover:bg-blue-50 transition-colors">
              Talk to the Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 sm:py-10">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <p className="text-xl text-gray-700 leading-relaxed max-w-5xl mb-6">
            Built by operators who&apos;ve spent their careers inside financial systems for complex businesses. We&apos;ve seen what breaks — and built the tool we wished existed.
          </p>
          <h2 className="text-2xl font-light text-blue-900 mb-4">Connects to the tools you already use</h2>
          <div className="logo-marquee">
            <div className="logo-marquee-track">
              {[...integrations, ...integrations].map((integration, index) => (
                <span key={`${integration}-${index}`} className="flex h-20 min-w-56 items-center justify-center rounded-lg bg-white border border-gray-200 px-8 text-xl font-semibold text-blue-900 shadow-sm">
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">How It Works</p>
        <h2 className="text-3xl sm:text-5xl font-light text-blue-900 mb-6">
          Connection → Clarity → Action. In minutes.
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-5xl mb-8">
          You spent thousands on an ERP system or accounting platform and you&apos;re still exporting CSVs and building spreadsheets on the weekend to figure out what&apos;s going on. Your financial infrastructure is not giving you the information you need to manage your business. That&apos;s the problem we solve.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="text-blue-700 font-semibold mb-4">{step.number}</div>
              <h3 className="text-2xl font-light text-blue-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-900 text-white py-10 sm:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-light mb-6">
            See exactly what your business is doing. No card. No call. Just your numbers.
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-5xl mb-6">
            Sign up in under a minute. Explore a fully loaded demo account — real operational data, real financials, real cash flow. When you&apos;re ready to connect your own books, we&apos;re here.
          </p>
          <Link href="/request-demo" className="inline-flex rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 hover:bg-blue-50 transition-colors">
            Explore a Working Demo
          </Link>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">AskCorelytics</p>
            <h2 className="text-3xl sm:text-5xl font-light text-blue-900 mb-6">
              Financial statements tell you what already happened. AskCorelytics what to do next.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Ask about cash flow, a hiring decision, a client going slow-pay, inventory turns, or AP aging. Corelytics connects the dots between what your numbers are saying and what action to take — in plain English, in seconds, any time of day.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>Why is cash declining when revenue is up?</li>
              <li>Which customers are trending toward slow-pay?</li>
              <li>What&apos;s my inventory turn rate by product line and how does it compare to last year?</li>
              <li>What&apos;s my AP aging look like — are we leaving early-pay discounts on the table?</li>
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-sm font-semibold text-blue-700 mb-4">AskCorelytics</div>
            <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4">
              <p className="text-sm text-gray-500 mb-2">You · Just now</p>
              <p className="text-gray-900">“Why is cash tight when revenue has been growing?”</p>
            </div>
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-5">
              <p className="text-sm text-blue-700 font-semibold mb-2">Corelytics AI</p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Your accounts receivable have aged from 32 to 58 days over the past two quarters. Two clients — representing 34% of revenue — appear to have shifted to net-60 payment terms. At current collection rates, this is reducing your monthly available cash by approximately $47K.
              </p>
              <p className="text-sm font-semibold text-blue-900">Collections risk identified — 3 action paths modeled</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-light text-blue-900 mb-4">
            The full picture, every morning
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-5xl mb-8">
            Real visibility into your business — financial and operational — without a full-time CFO or a weekend of spreadsheets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-light text-blue-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="text-4xl font-light text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Years in production</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="text-4xl font-light text-blue-900 mb-2">1,000+</div>
              <div className="text-gray-600">Companies powered</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="text-4xl font-light text-blue-900 mb-2">673</div>
              <div className="text-gray-600">Industry benchmarks</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-3xl sm:text-5xl font-light text-blue-900 mb-6">
          The AI gives you clarity. The advisors give you confidence — when you want them.
        </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-5xl mb-8">
          Corelytics doesn&apos;t just show you the number — it tells you what&apos;s driving it, models what happens next, and drafts the communication you need. For the judgment calls that feel too big to make alone, experienced advisors are available.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-light text-blue-900 mb-4">The Platform</h3>
            <p className="text-gray-600 leading-relaxed">Real-time financial and operational visibility, intelligent analysis, risk monitoring, and industry benchmarks — all running live against your actual books.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-light text-blue-900 mb-4">Optional: Advisor Access</h3>
            <p className="text-gray-600 leading-relaxed">Senior advisors — operators who&apos;ve negotiated with lenders, managed cash crunches, and made the hard calls. Available when you want them, not required.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-light text-blue-900 mb-8">
            What changes when you can spot critical issues before they cause problems
          </h2>
          <div className="space-y-6">
            {beforeAfter.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-light text-blue-900 mb-6">{item.title}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-red-600 mb-3">Before</p>
                    <p className="text-gray-700 leading-relaxed">{item.before}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-3">With Corelytics</p>
                    <p className="text-gray-700 leading-relaxed">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
