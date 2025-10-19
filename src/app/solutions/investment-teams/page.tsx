import Image from 'next/image';
import Link from 'next/link';

export default function InvestmentTeamsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-16">
          <h1 className="text-6xl font-light text-blue-900 mb-12">
            Empowering Investment Teams
          </h1>
          
          <div className="grid grid-cols-1 gap-16">
            {/* Problem Statement and Client Quotes */}
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Before using Venturis our clients faced significant issues that hindered their ability to focus on what mattered most, portfolio strategy and improving portfolio performance…here is what we heard most often.
              </p>
              
              {/* Speech Bubbles - Fixed positioning with research analyst moved down and left */}
              <div className="relative mb-16 min-h-[360px]">
                {/* First bubble - top left */}
                <div className="absolute top-0 left-0 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="relative bg-blue-50 rounded-2xl px-8 py-5 max-w-lg border border-blue-200">
                    <div className="absolute -left-2 top-4 w-4 h-4 bg-blue-50 border-l border-b border-blue-200 transform rotate-45"></div>
                    <p className="text-lg text-gray-800 font-medium">"I wish we had a single source of truth for all our alternative investments in one place."</p>
                    <p className="text-sm text-blue-600 mt-2 font-semibold">— Investment Director</p>
                  </div>
                </div>

                {/* Second bubble - top right */}
                <div className="absolute top-0 right-0 flex items-start space-x-4 flex-row-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="relative bg-green-50 rounded-2xl px-8 py-5 max-w-lg border border-green-200">
                    <div className="absolute -right-2 top-4 w-4 h-4 bg-green-50 border-r border-b border-green-200 transform -rotate-45"></div>
                    <p className="text-lg text-gray-800 font-medium">"We need real-time visibility into our portfolio's performance and risk – not data that's weeks old."</p>
                    <p className="text-sm text-green-600 mt-2 font-semibold">— Portfolio Manager</p>
                  </div>
                </div>

                {/* Third bubble - middle left */}
                <div className="absolute top-32 left-16 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="relative bg-purple-50 rounded-2xl px-8 py-5 max-w-lg border border-purple-200">
                    <div className="absolute -left-2 top-4 w-4 h-4 bg-purple-50 border-l border-b border-purple-200 transform rotate-45"></div>
                    <p className="text-lg text-gray-800 font-medium">"I want to make decisions based on data, not gut instinct or outdated spreadsheets."</p>
                    <p className="text-sm text-purple-600 mt-2 font-semibold">— Chief Investment Officer</p>
                  </div>
                </div>

                {/* Fourth bubble - middle right */}
                <div className="absolute top-32 right-8 flex items-start space-x-4 flex-row-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="relative bg-orange-50 rounded-2xl px-8 py-5 max-w-lg border border-orange-200">
                    <div className="absolute -right-2 top-4 w-4 h-4 bg-orange-50 border-r border-b border-orange-200 transform -rotate-45"></div>
                    <p className="text-lg text-gray-800 font-medium">"It'd be a game changer to have all this update automatically – no more scrambling to collect data."</p>
                    <p className="text-sm text-orange-600 mt-2 font-semibold">— Operations Manager</p>
                  </div>
                </div>

                {/* Fifth bubble - bottom left, moved down and left to avoid overlap */}
                <div className="absolute top-64 left-8 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="relative bg-red-50 rounded-2xl px-8 py-5 max-w-lg border border-red-200">
                    <div className="absolute -left-2 top-4 w-4 h-4 bg-red-50 border-l border-b border-red-200 transform rotate-45"></div>
                    <p className="text-lg text-gray-800 font-medium">"We'd rather focus on strategy, not spend all week wrangling spreadsheets."</p>
                    <p className="text-sm text-red-600 mt-2 font-semibold">— Research Analyst</p>
                  </div>
                </div>
              </div>

              {/* Problem/Solution Statement */}
              <div className="bg-white border border-blue-200 rounded-lg p-8 my-8 shadow-lg">
                <p className="text-xl text-gray-800 font-medium mb-6 leading-relaxed">
                  When your data management feels like chaos, it's not just frustrating – it directly undercuts portfolio performance. Opportunities slip through cracks, risks stay hidden, and your team ends up second-guessing every number instead of executing strategy.
                </p>
                <p className="text-3xl text-blue-900 font-bold mb-6">
                  We know how to turn your alternative investment <span className="text-red-600">Chaos</span> into <span className="text-green-600">Clarity</span>.
                </p>
                
                {/* Five solution boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Data Ingestion</h3>
                    <ul className="space-y-2 text-gray-700 flex-grow">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Automated data collection
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Data validation and cleaning
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Market Data Integration
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        API integrations with leading fund accounting systems
                      </li>
                    </ul>
                    <div className="flex justify-end mt-4">
                      <Link href="#data-ingestion-management" className="text-blue-900 font-medium hover:text-blue-700">
                        Learn More.....
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Portfolio Construction</h3>
                    <ul className="space-y-2 text-gray-700 flex-grow">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        With Liquidity Parameters and cash out
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Simulation and Scenario Modeling
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Portfolio Actual and Projected KPI's
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Mandate and Allocation Tracking and Projection
                      </li>
                    </ul>
                    <div className="flex justify-end mt-4">
                      <Link href="#liquidity-planning" className="text-blue-900 font-medium hover:text-blue-700">
                        Learn More.....
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Fund and Portfolio Monitoring</h3>
                    <ul className="space-y-2 text-gray-700 flex-grow">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Detailed fund and portfolio KPI's
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Portfolio Mandate monitoring
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Portfolio Cash Position Monitoring for current and projected portfolio cash
                      </li>
                    </ul>
                    <div className="flex justify-end mt-4">
                      <Link href="#investment-monitoring" className="text-blue-900 font-medium hover:text-blue-700">
                        Learn More.....
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Fund of Funds Support</h3>
                    <p className="text-gray-700 mb-3">Track FoF metrics for any portfolio</p>
                    <ul className="space-y-2 text-gray-700 flex-grow">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Fund of Funds Management Fees
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        FoF incentive Fees
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Investor Hurdle rate monitoring and projection
                      </li>
                    </ul>
                    <div className="flex justify-end mt-4">
                      <Link href="#fund-of-funds-support" className="text-blue-900 font-medium hover:text-blue-700">
                        Learn More.....
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Advanced Reporting</h3>
                    <ul className="space-y-2 text-gray-700 flex-grow">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Investor Reporting
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Interactive Dashboards
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Automated Reporting
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Data Visualization
                      </li>
                    </ul>
                    <div className="flex justify-end mt-4">
                      <Link href="#reporting" className="text-blue-900 font-medium hover:text-blue-700">
                        Learn More.....
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Advanced Capabilities</h3>
                    <ul className="space-y-2 text-gray-700 flex-grow">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Benchmarking with PME and Direct Alpha
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Neural Network Reforecasting of fund data
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Simulation and Scenario Modeling
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        Performance Attribution
                      </li>
                    </ul>
                    <div className="flex justify-end mt-4">
                      <Link href="#advanced-analytics" className="text-blue-900 font-medium hover:text-blue-700">
                        Learn More.....
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Ingestion and Management section */}
            <section id="data-ingestion-management">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Data Ingestion and Management
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Streamline your data collection and management processes with our comprehensive data ingestion platform. Automatically gather, validate, and organize investment data from multiple sources into a single, reliable system.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Our platform integrates with leading fund accounting systems, custodians, and market data providers to ensure you have access to timely, accurate, and complete investment information.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Eliminate manual data entry errors and reduce time spent on data preparation, allowing your team to focus on analysis and strategic decision-making.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Venturis Connex automates the collection of your data warehouse, fund accounting systems, and LP portals data daily. Connex downloads appropriate GP documents, examines the data as it is collected and applies the appropriate business rules to identify data exceptions. Connex can provide data in various formats and can push data to specific client data stores.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Automated Data Collection</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          API Integrations
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Real-time market data feeds
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Secure file transfer protocols
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Automated document processing
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Data Quality & Governance</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Data validation and cleansing
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Exception reporting and alerts
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Audit trails and lineage tracking
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Standardized data formats
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Link to Venturis vs Excel page */}
                  <div className="mt-8 pt-6 border-t border-gray-300 flex justify-end">
                    <Link 
                      href="/solutions/venturis-vs-excel" 
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-bold text-lg"
                    >
                      Venturis vs Excel
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Liquidity Planning section - MOVED ABOVE Investment Monitoring */}
            <section id="liquidity-planning">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Portfolio Construction
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Build pacing plans that hit target liquidity and diversification metrics. Model calls/distributions, strategies, and secondaries with allocator grade forecasts for each portfolio.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Commitment Pacing Software for Private Markets Allocators
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Hitting policy targets without over or under committing requires more than a spreadsheet. Our portfolio construction model utilizes a Monte Carlo model for portfolio initial construction and ongoing portfolio optimization based on metrics you set. Venturis models fund cash flows, recycling, and secondary activity to keep your portfolio on track. Set targets for liquidity, sector and vintage diversification, and strategy buckets, then simulate commitment plans that respect your liquidity, risk limits, and pipeline.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Build Pacing Plans with Confidence
                  </h3>
                  <ul className="space-y-2 text-xl text-gray-700 mb-6 ml-6">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Allocator grade cash flow engine (calls, dists, fees, FX, secondary trades)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Policy aware modeling (strategy/geography/manager caps)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Scenario testing (base, bear, accelerated deployment)</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Portfolio Construction from Plan to Execution
                  </h3>
                  <ul className="space-y-2 text-xl text-gray-700 mb-6 ml-6">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Use your fund models or ours to forecast and reforecast all fund capital calls & net outflows by quarter/month for each portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>See liquidity and strategy target bands and alert drifts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Export to manager reports; share securely with stakeholders</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    What Makes Venturis Different
                  </h3>
                  <ul className="space-y-2 text-xl text-gray-700 mb-6 ml-6">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Portfolio, Fund and Position level projections, comprehensive data ingestion, and allocator controls in one place.</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    FAQ
                  </h3>
                  <div className="space-y-4 text-xl text-gray-700 mb-6 ml-6">
                    <div>
                      <p className="flex items-start">
                        <span className="mr-3">•</span>
                        <span><strong>How is this better than Excel?</strong> — Maintain a single source of truth with versioned scenarios and audit trails; no broken links or manual roll forwards.</span>
                      </p>
                    </div>
                    <div>
                      <p className="flex items-start">
                        <span className="mr-3">•</span>
                        <span><strong>Can we model SMAs and evergreen funds?</strong> — Yes; configure pacing and liquidity rules per vehicle.</span>
                      </p>
                    </div>
                    <div>
                      <p className="flex items-start">
                        <span className="mr-3">•</span>
                        <span><strong>Do you integrate with fund accounting data?</strong> — Yes; connectors for leading systems and LP portals.</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Link to Why Choose Venturis page */}
                  <div className="mt-8 pt-6 border-t border-gray-300 flex justify-end">
                    <Link 
                      href="/solutions/why-choose-venturis-portfolio-construction" 
                      className="inline-flex items-center text-blue-900 hover:text-blue-700 font-bold text-lg"
                    >
                      Why Choose Venturis for Portfolio Construction
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Fund and Portfolio Monitoring section */}
            <section id="investment-monitoring">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Fund and Portfolio Monitoring
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Gain comprehensive visibility into your entire investment ecosystem with real-time access to fund performance and portfolio company metrics. Our unified platform consolidates data from all your investments—private equity funds, co-investments, direct investments, and public assets—into a single, coherent view.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Monitor key performance indicators across your portfolio with automated alerts for significant changes in valuations, cash flows, or operational metrics and mandates. Advanced analytics provide deep insights into fund performance attribution, sector exposure, vintage year analysis, and geographic diversification.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Monitor actual and projected liquidity and cash positions across all funds and investments, enabling proactive capital planning and optimal allocation decisions. Real-time dashboards display portfolio leverage, NAV trends, and commitment utilization alongside detailed drill-down capabilities for individual investments.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Empower your investment team with instant access to the data and analysis needed to make informed decisions, respond to market opportunities, and optimize portfolio performance in real time.
                  </p>
                </div>
              </div>
            </section>

            <section id="fund-of-funds-support">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Venturis Fund of Funds (FoF) Manager Support
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Venturis provides FoF managers a single system to model, assess, and report management & incentive fees, hurdles, and net performance across complex alternative portfolios—historically and forward-looking.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    What Venturis Does
                  </h3>
                  <ul className="space-y-2 text-xl text-gray-700 mb-6 ml-6">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Portfolio level FoF fees:</strong> Configure management and incentive/performance fees with portfolio specific hurdle rates with flexible bases (commitment, invested cost, NAV) and effective date changes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Historical fee tracking:</strong> Persist and audit all calculated and manually entered fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Forward projections:</strong> Project fees, carry waterfalls, and net returns for both the investor group (LPs) and the manager (FoF entity).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Investor & manager views:</strong> Dedicated outputs for LP reporting (net of FoF fees) and manager P&L (gross fees, net revenue after expenses, carry accruals).</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    How It Works
                  </h3>
                  <ol className="space-y-2 text-xl text-gray-700 mb-6 ml-6 list-decimal">
                    <li className="pl-2">
                      <strong>Ingest & normalize:</strong> Load commitments, capital activity, NAVs, and valuations from your sources; standardize to Venturis schema.
                    </li>
                    <li className="pl-2">
                      <strong>Model setup:</strong> Define fee schedules, hurdle parameters, and reporting cohorts (investor groups, sleeves, share classes).
                    </li>
                    <li className="pl-2">
                      <strong>Calculate & project:</strong> Run historical calculations and forward scenarios (base, stress, pacing).
                    </li>
                    <li className="pl-2">
                      <strong>Report & share:</strong> Publish investor ready and manager ready outputs (PDF, Excel, portal) with drill through.
                    </li>
                  </ol>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Outputs You Get
                  </h3>
                  <ul className="space-y-2 text-xl text-gray-700 mb-6 ml-6">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Historical fee ledger:</strong> Periodized management and incentive fees with drivers and audit notes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Projected fees & carry:</strong> Multi period forecasts with sensitivities (NAV growth, pacing, FX, write downs).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Net performance:</strong> Time weighted and money weighted returns net of FoF fees at portfolio and investor group levels.</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Controls & Governance
                  </h3>
                  <ul className="space-y-2 text-xl text-gray-700 mb-6 ml-6">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Role based approvals for fee schedules and overrides.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Versioning & audit trail on every calculation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Data lineage from source file → normalized record → fee output.</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Why Venturis for FoF
                  </h3>
                  <ul className="space-y-2 text-xl text-gray-700 mb-6 ml-6">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Purpose built for alternatives:</strong> Handles commitments, capital calls/distributions, and irregular cash flows natively.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Manager & investor alignment:</strong> One system produces both manager economics and LP net outcomes—with identical data.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span><strong>Faster closes:</strong> Automated workpapers and exports reduce manual fee work and reconciliation time.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="reporting">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Reporting
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Venturis delivers actual and projected performance reporting for any scope you choose—any entity, investor, fund, class, sleeve, SMA, or the entire portfolio—in a single, coherent view. Actuals reconcile end-to-end: Net IRR (since inception and period), TVPI/DPI/RVPI, time-weighted returns, cash yields, and fee transparency all tie back to source systems.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Forward-looking analytics show what's coming—projected capital calls and distributions, NAV paths, liquidity calendars, and pacing versus plan—enhanced with stress cases and macro overlays so you see ranges, not just point estimates.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Benchmarks and validation are embedded, including PME variants (KS-PME, LN-PME), Direct Alpha, public index stacks, and peer cohorts, alongside variance flags using portfolio-company KPIs. Interactive views highlight J-curves, cohort curves, IRR drift and policy exposures (sector, geography, stage, manager) with real-time alerts and click-through evidence.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Delivery fits your workflow with role-based dashboards for CIO/IC/Ops, scheduled IC/board packs, and PDF/Excel/API exports—everything versioned with clear lineage—so you always know where you are, where you're headed, and what to do next.
                  </p>
                </div>
              </div>
            </section>

            <section id="advanced-analytics">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Advanced Analytics
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Transform your investment decision-making with sophisticated analytics that go far beyond traditional spreadsheet models. Our advanced platform combines artificial intelligence, machine learning, and quantitative analysis to deliver actionable insights that drive superior investment performance.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Predictive Analytics</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <div>
                            <span className="font-medium">Commitment Pacing Models</span>
                            <p className="text-sm text-gray-600">AI-driven forecasting for optimal capital deployment timing</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <div>
                            <span className="font-medium">Cash Flow Forecasting</span>
                            <p className="text-sm text-gray-600">Neural networks predict fund distributions and capital calls</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <div>
                            <span className="font-medium">Scenario Modeling</span>
                            <p className="text-sm text-gray-600">Stress-test portfolios under various market conditions</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Performance Intelligence</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <div>
                            <span className="font-medium">Performance Attribution</span>
                            <p className="text-sm text-gray-600">Identify key drivers of fund and portfolio performance</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <div>
                            <span className="font-medium">Risk Analytics</span>
                            <p className="text-sm text-gray-600">Advanced risk modeling and concentration analysis</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <div>
                            <span className="font-medium">Benchmarking</span>
                            <p className="text-sm text-gray-600">PME analysis and peer comparison frameworks</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Machine Learning Deep Dive */}
                <div className="bg-blue-50 py-8 px-8 rounded-lg border-l-4 border-blue-900">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                    Machine Learning & Neural Networks
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our proprietary machine learning models combine historical fund performance data with macroeconomic indicators to generate highly accurate forecasts. By analyzing patterns in capital calls, distributions, and market conditions, our neural networks adapt and improve over time, delivering increasingly precise predictions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Data Integration</h4>
                      <p className="text-sm text-gray-600">Combines fund data, economic indicators, and market signals</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Adaptive Learning</h4>
                      <p className="text-sm text-gray-600">Models continuously improve with new data inputs</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Real-time Updates</h4>
                      <p className="text-sm text-gray-600">Forecasts refresh automatically with each data load</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you prefer to use your existing fund models or leverage our proven algorithms, our platform seamlessly integrates with your workflow. The result is dynamic forecasting that evolves with changing market conditions, enabling superior liquidity management and strategic decision-making.
                  </p>
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