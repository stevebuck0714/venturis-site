import Link from 'next/link';

const words = [
  'Portfolio Construction',
  'Commitment Pacing',
  'Fund and Portfolio Monitoring',
  'Mandate Compliance',
  'Investor Reporting',
];

export default function LPPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <section className="mb-16">
          <div className="text-left pt-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-normal text-blue-900 mb-4 text-left leading-tight">
              Intelligence for Private Markets
            </h1>
            <div className="min-h-[3rem] sm:min-h-[4rem] flex flex-col sm:flex-row sm:items-center mb-12 sm:mb-24">
              <span className="text-xl sm:text-2xl lg:text-4xl font-light text-black mb-2 sm:mb-0 sm:mr-4">with</span>
              <div className="h-[1.2em] leading-[1.2] overflow-hidden text-2xl sm:text-3xl lg:text-6xl font-normal text-black">
                <div className="lp-word-rotation">
                  {words.map((word) => (
                    <div key={word} className="h-[1.2em] leading-[1.2] whitespace-nowrap">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-blue-900 mb-8 sm:mb-12 text-left leading-tight">
            Enabling Data-driven decisions in real time
          </h2>
          <div className="bg-gray-50 py-16 -mx-6">
            <div className="max-w-[90rem] mx-auto px-6">
              <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-20 gap-y-8 sm:gap-y-12">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 sm:mr-8 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Construction</h3>
                    <p className="text-lg text-gray-600">Reduced idle cash and improved portfolio performance through intelligent commitment pacing which updates on every data load. Track and Project portfolio performance, mandate adherence and projected drift from key financial metrics.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-green-200 transition-colors">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mandate Compliance</h3>
                    <p className="text-lg text-gray-600">Set, Track and Project adherence to investor mandates with automated monitoring and alerts. Easily see potential mandate drifts in time to make the necessary changes to the portfolio.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-indigo-200 transition-colors">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fund of Funds Management</h3>
                    <p className="text-lg text-gray-600">Track and Project Fund of Funds Waterfalls for any portfolio. Set Fund of Funds management fees and incentive fees to view detailed actual and projected waterfalls outputs for investors and management.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-teal-200 transition-colors">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Investor/Entity Reporting</h3>
                    <p className="text-lg text-gray-600">Report on any Investor or Entity with detailed actual and projected performance on their private equity portfolios. Develop portfolio strategies and allocations in real time with your clients and visualize the impacts on their existing portfolios.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advisor Productivity</h3>
                    <p className="text-lg text-gray-600">Increase productivity of your wealth advisors with AI-powered insights and automation. With AI driven insights your Advisors can have real time intelligence on opportunities and or issues with their clients&apos; portfolio</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Personalization</h3>
                    <p className="text-lg text-gray-600">Delivering personalized client interaction through advanced analytics and customization. Provide your clients with information and suggestions tailored to their portfolio, their goals and their interest.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 mb-16">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-blue-900 mb-4 leading-tight">LP Platform</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl leading-relaxed">
              Harness artificial intelligence and machine learning to solve complex allocator challenges across private capital portfolios
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">LP Platform Overview</h3>
              <p className="text-gray-600 mb-4">Portfolio construction, commitment pacing, mandate monitoring, and private markets intelligence for allocators</p>
              <div className="flex justify-end">
                <Link href="/solutions/investment-teams" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more... →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">LP Documentation</h3>
              <p className="text-gray-600 mb-4">Detailed explainers for portfolio construction, commitment pacing, forecasting, and allocator workflows</p>
              <div className="flex justify-end">
                <Link href="/documentation" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more... →
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">LP Insights</h3>
              <p className="text-gray-600 mb-4">Research, FAQs, and comparisons focused on private markets technology for allocator teams</p>
              <div className="flex justify-end">
                <Link href="/blog" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more... →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
