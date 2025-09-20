import Image from 'next/image';
import Link from 'next/link';

export default function ClientSolutionsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-16">
          <h1 className="text-6xl font-light text-blue-900 mb-12">
            Client Solutions
          </h1>
          
          {/* Three horizontal sub-containers with arrows */}
          <div className="flex flex-col lg:flex-row items-center justify-center mb-16 gap-8">
            {/* Container 1 */}
            <div className="w-full lg:w-80 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">AI Assisted Personalization</h3>
              <p className="text-gray-700">Intelligent personalization engine that delivers tailored investment recommendations and insights</p>
            </div>
            
            {/* Arrow 1 */}
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-blue-600 transform lg:rotate-0 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
            
            {/* Container 2 */}
            <div className="w-full lg:w-80 bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-green-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green-900 mb-3">Proactive Portfolio Recommendations</h3>
              <p className="text-gray-700">Intelligent recommendation system that proactively identifies optimal investment opportunities based on client profiles</p>
            </div>
            
            {/* Arrow 2 */}
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-blue-600 transform lg:rotate-0 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
            
            {/* Container 3 */}
            <div className="w-full lg:w-80 bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-purple-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-purple-900 mb-3">Transaction Platform</h3>
              <p className="text-gray-700">Secondary market platform enabling liquidity and peer-to-peer transactions for alternative assets</p>
            </div>
          </div>
          
          {/* AI Assisted Personalization Header */}
          <h2 className="text-4xl font-light text-blue-900 mb-8">
            AI Assisted Personalization
          </h2>
          
          <div className="grid grid-cols-1 gap-12">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Client Solutions is designed to address the unique needs of wealth management firms serving Ultra High Net Worth individuals and families. Our comprehensive platform brings together portfolio management, client engagement, and innovative investment solutions in one integrated environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Digital Experience Imperative</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You need to deliver premium digital experiences that deepen client relationships and drive interest and engagement.
                  </p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-orange-900 mb-4">Critical Strategic Question</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Is your bank really prepared to profit from offering private equity?
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                To answer these questions you need to be able to offer and track the right value proposition to each of your clients across the entirety of your addressable client market, UHNI and institutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-green-900 mb-4">Elegant Client Applications</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Build elegant, personalized mobile and web applications that give HNW, UHNW, and institutional clients full transparency and control.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-purple-900 mb-4">AI-Powered Relationships</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Foster meaningful relationships by enabling easy collaboration with relationship managers and delivering AI-powered insights on a personalized basis to each client.
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                From portfolio construction and monitoring to client communication and alternative investment access, Client Solutions provides the technology infrastructure that modern wealth management firms need to compete and thrive in today's market.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Interactive Wealth Planning
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                "I have $3 million in investable assets. I want to be able to receive $250,000 each year beginning in year six while maintaining my wealth. What should my portfolio composition look like?" This is a question Private Bankers hear frequently from clients considering alternative investments. Our interactive portfolio simulation tools provide immediate answers, showing exactly how a proposed private equity investment would impact overall portfolio performance, risk profile, and cash flow projections.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Portfolio Simulation</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Real-time portfolio impact analysis
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Risk profile adjustments
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Performance projections
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Cash flow modeling
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Client Engagement</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Interactive dashboards
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Visual scenario modeling
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Client collaboration tools
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Personalized reporting
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-4">
                Secondary Market Platform
              </h2>
              <h3 className="text-2xl font-medium text-gray-800 mb-8">
                Revolutionizing Alternative Asset Liquidity for Retail Investors
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                A Secondary Market internal "Bulletin Board" platform can enable peer-to-peer transactions for Alternative Assets, solving the critical issue of investor liquidity. A readily accessible and transparent internal bulletin board can also enhance client engagement, leading to an increase in allocations to private equity. Bulletin board combined with portfolio simulations showing how a new investment would impact a clients portfolio adds another feature to drive satisfaction and stickiness for your UHNWI's.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Market Access</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Enables peer-to-peer transfers of fund interests
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Leverages existing LP data for automated pricing and compliance checks
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Offers deal structuring tools, secure communications, and transfer support
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Designed specifically for retail investors in private equity, private credit, real assets, etc.
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Transaction Support</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Cash Flow Forecasting Engine powers forward-looking valuation insights
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Capital Account Monitoring ensures up-to-date NAV and transaction records
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Performance Analytics provide buyers with historical fund performance
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      LP Portal Integration gives visibility across the investor base for pricing and matching
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Investor Functionality</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Secondary Listings: Investors list eligible fund interests with suggested pricing
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Automated Valuation Tools: Based on current LP cash flows, NAVs, and fund forecast models
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Buyer Matching & Negotiation: Algorithmic match and private offer room
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Legal & Compliance Workflow: Integrated subscription transfer and tax handling
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Platform Benefits</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Enhances investor confidence and stickiness
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Increases platform AUM via reinvestment of proceeds
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Creates recurring revenue streams from listing fees, transaction fees, and data analytics
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Builds a defensible moat by embedding secondary trading into the lifecycle of retail investing
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-blue-900 text-white p-16 rounded-lg">
              <h2 className="text-4xl font-light mb-8">
                Transform Your Client Experience
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                Discover how our Client Solutions platform can enhance client engagement and expand your alternative investment offerings.
              </p>
              <Link href="/contact" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                Learn More
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}