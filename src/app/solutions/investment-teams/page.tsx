'use client';

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
            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Comprehensive Analytics Suite
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Through our suite of analytics and data management solutions, we help sophisticated Allocators understand and manage their investments in unprecedented detail. Our platform provides deep insights into portfolio performance, risk metrics, and market trends.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-8 rounded-lg flex flex-col">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Monitoring Investments</h3>
                  <ul className="space-y-4 text-lg text-gray-700 mb-4">
                    <li>• Real Time Performance Tracking</li>
                    <li>• Analytics</li>
                    <li>• Investment KPI's</li>
                    <li>• Historical Trend Analysis</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg flex flex-col">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Data Management</h3>
                  <ul className="space-y-4 text-lg text-gray-700 mb-4">
                    <li>• Automated data collection</li>
                    <li>• Data validation and cleaning</li>
                    <li>• Market Data Integration</li>
                    <li>• API integrations</li>
                  </ul>
                  <Link href="/solutions/data-management" className="inline-block mt-4 text-blue-900 hover:text-blue-700">
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg flex flex-col">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Capabilities</h3>
                  <ul className="space-y-4 text-lg text-gray-700 mb-4">
                    <li>• Benchmarking</li>
                    <li>• Neural Network Reforecasting</li>
                    <li>• Scenario Modeling</li>
                    <li>• Performance Attribution</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg flex flex-col">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Advanced Reporting</h3>
                  <ul className="space-y-4 text-lg text-gray-700 mb-4">
                    <li>• Investor Reporting</li>
                    <li>• Interactive Dashboards</li>
                    <li>• Automated Reporting</li>
                    <li>• Data Visualization</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Investment Monitoring
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 p-8 rounded-lg">
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

            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Liquidity Planning & Capital Allocation
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Reduce risks of Idle Cash Over Commitment using our Monte Carlo commitment pacing models to continuously update allocation plans based on desired strategies and liquidity options. Dynamic rebalancing can suggest reallocation strategies to maintain target weights and liquidity buffers.
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

            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Reporting
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Venturis expands your reporting capabilities beyond static reporting and to include robust BI solutions and real time queries.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    With Venturis there is no need to export data to get the answers you need. Investment and portfolio dashboards provide a wealth of information on individual asset and portfolio performance. Reporting is available for any Entity, Investor, Family Member or Portfolio.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Advanced Analytics & Forecasting with Neural Networks/ML
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 p-8 rounded-lg">
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
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Reforecasting Fund Cash Flows with Neural Network/ML Models
              </h2>
              <div className="space-y-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Our platform is designed to utilize your existing fund models or our fund models. The most important aspect of any model is how that model performs over time and how cash flows are re-forecasted when new transactions are loaded.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Our Neural Network/ML model for reforecasting empowers investors and fund managers to anticipate private fund cash flows with greater precision. By combining historical fund data—capital calls, distributions, commitments—with macroeconomic indicators like GDP growth, interest rates, and inflation our model learns how external economic forces shape fund behavior over time.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    On the technical side, we use a mix of regression-based models, tree-based methods and feedforward neural networks to capture both linear and non-linear dynamics in the data. All inputs are time-aligned, cleaned, and scaled, then passed through training pipelines with cross-validation and performance tracking using RMSE and R² metrics.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Easily use any of your existing private fund models, or one of ours, and use our Neural Network model to reforecast projected capital calls and distributions after each data load from your portfolio accounting system.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    What makes the system stand out is its adaptability—forecasts are not static but recalibrated as new data becomes available. This supports real-time reforecasting and gives investors forward-looking insights for pacing commitments, managing liquidity, and mitigating risk under changing market conditions.
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