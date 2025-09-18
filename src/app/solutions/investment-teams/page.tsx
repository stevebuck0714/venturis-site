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
                <p className="text-2xl text-blue-900 font-bold mb-6">
                  When your data management feels like chaos, it's not just frustrating – it directly undercuts portfolio performance. Opportunities slip through cracks, risks stay hidden, and your team ends up second-guessing every number instead of executing strategy. We know how to Turn your alternative investment Chaos into Clarity
                </p>
                
                {/* Four solution boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Portfolio Construction</h3>
                    <ul className="space-y-2 text-gray-700">
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
                    <Link href="#liquidity-planning" className="inline-block mt-4 text-blue-900 font-medium hover:text-blue-700">
                      Learn More.....
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Management and Monitoring</h3>
                    <ul className="space-y-2 text-gray-700">
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
                    <Link href="#investment-monitoring" className="inline-block mt-4 text-blue-900 font-medium hover:text-blue-700">
                      Learn More.....
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Advanced Capabilities</h3>
                    <ul className="space-y-2 text-gray-700">
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
                    <Link href="#advanced-analytics" className="inline-block mt-4 text-blue-900 font-medium hover:text-blue-700">
                      Learn More.....
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Advanced Reporting</h3>
                    <ul className="space-y-2 text-gray-700">
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
                    <Link href="#reporting" className="inline-block mt-4 text-blue-900 font-medium hover:text-blue-700">
                      Learn More.....
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Liquidity Planning section - MOVED ABOVE Investment Monitoring */}
            <section id="liquidity-planning">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Portfolio Construction with Liquidity Planning & Capital Allocation
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Reduce risks of Idle Cash Over Commitment using our Monte Carlo commitment pacing models to continuously update allocation plans based on desired strategies and liquidity options. Additionally, track and receive alerts on adherence to actual and projection portfolio mandates and key financial tracking metrics.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Set, track and monitor Fund of Funds Waterfalls for any portfolio with actual and projected waterfalls which include Fund of Funds Management Fees and Incentive Fees.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    You manage billions of dollars in alternative assets, sitting on idle cash or overcommitting can cost you millions each year.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Using Neural Network/ML modeling of fund cash flows yields more accurate commitment planning and increases portfolio returns.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    You ended the year with $200mil in cash on the books in your fund portfolio. If that were to be the norm each year what would it cost you on an annual basis? Venturis provides the tools to better forecast fund cash flows incorporating user defined liquidity measures to increase portfolio leverage.
                  </p>
                  <p className="text-xl text-gray-700 mt-8">
                    Commitment Pacing Models: Continuously updates allocation plans based on changing fund cash flows and macro conditions.
                  </p>
                </div>
              </div>
            </section>

            {/* Investment Monitoring section - MOVED BELOW Liquidity Planning */}
            <section id="investment-monitoring">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Investment Monitoring
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Access all underlying fund and portfolio company data, cash flows, capital account balances, investment KPI's, co-investments, direct Investments, public assets, portfolio leverage measures, and every other data point about your portfolio.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Measure performance in real-time with scenario analyses, asset modeling, cashflow forecasting, and more.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Empower your team with data and analysis to answer critical questions in real time.
                  </p>
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
                    Venturis expands your reporting capabilities beyond static reporting and to include robust BI solutions and real time queries.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    With Venturis there is no need to export data to get the answers you need. Investment and portfolio dashboards provide a wealth of information on individual asset and portfolio performance. Reporting is available for any Entity, Investor, Family Member or Portfolio.
                  </p>
                </div>
              </div>
            </section>

            <section id="advanced-analytics">
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Advanced Analytics & Forecasting with Neural Networks/ML
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 py-8 px-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Challenge: Manual models and static reports limit responsiveness and scenario planning.
                  </p>
                  <ul className="space-y-4 text-xl text-gray-700">
                    <li className="mb-4">
                      <span className="font-medium text-blue-900">Cash Flow Forecasting:</span> Dynamic multi-factor regression analysis of historical fund cash flows and macroeconomic data is used to create more accurate fund cash flow models.
                    </li>
                    <li className="mb-4">
                      <span className="font-medium text-blue-900">Performance Attribution:</span> Pinpoints drivers of fund and portfolio company performance.
                    </li>
                    <li className="mb-4">
                      <span className="font-medium text-blue-900">Risk Modeling:</span> AI models stress-test portfolios under various market conditions.
                    </li>
                    <li>
                      <span className="font-medium text-blue-900">Neural Network/ML models:</span> Continually updated fund cash flows reforecasting models developed to provide more accurate fund cash flow projections over the life of a fund.
                    </li>
                  </ul>
                </div>

                {/* Subsection: More on Neural Network/ML Models */}
                <div className="ml-8">
                  <h3 className="text-2xl font-medium text-blue-900 mb-6">
                    More on Neural Network/ML Models
                  </h3>
                  <div className="bg-blue-50 py-6 px-6 rounded-lg border-l-4 border-blue-900">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Our platform is designed to utilize your existing fund models or our fund models. The most important aspect of any model is how that model performs over time and how cash flows are re-forecasted when new transactions are loaded.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Our Neural Network/ML model for reforecasting empowers investors and fund managers to anticipate private fund cash flows with greater precision. By combining historical fund data—capital calls, distributions, commitments—with macroeconomic indicators like GDP growth, interest rates, and inflation our model learns how external economic forces shape fund behavior over time.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      On the technical side, we use a mix of regression-based models, tree-based methods and feedforward neural networks to capture both linear and non-linear dynamics in the data. All inputs are time-aligned, cleaned, and scaled, then passed through training pipelines with cross-validation and performance tracking using RMSE and R² metrics.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Easily use any of your existing private fund models, or one of ours, and use our Neural Network model to reforecast projected capital calls and distributions after each data load from your portfolio accounting system.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      What makes the system stand out is its adaptability—forecasts are not static but recalibrated as new data becomes available. This supports real-time reforecasting and gives investors forward-looking insights for pacing commitments, managing liquidity, and mitigating risk under changing market conditions.
                    </p>
                  </div>
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
              <Link href="/contact" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </Link>
            </section>
          </div>
        </div>
      </div>

    </main>
  );
} 