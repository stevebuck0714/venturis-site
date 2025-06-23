'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SecondaryMarketPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-16">
          <h1 className="text-6xl font-light text-blue-900 mb-12">
            Secondary Market Platform
          </h1>
          
          <div className="grid grid-cols-1 gap-16">
            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Revolutionizing Alternative Asset Liquidity
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our Secondary Market platform enables peer-to-peer transactions for Alternative Assets, solving the critical issue of investor liquidity. By combining transparency and accessibility, we're expanding the market for retail investors in alternative investments.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Market Access</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• Enables peer-to-peer transfers of fund interests</li>
                    <li>• Leverages existing LP data for automated pricing and compliance checks</li>
                    <li>• Offers deal structuring tools, secure communications, and transfer support</li>
                    <li>• Designed specifically for retail investors in private equity, private credit, real assets, etc.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Transaction Support</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• Cash Flow Forecasting Engine powers forward-looking valuation insights</li>
                    <li>• Capital Account Monitoring ensures up-to-date NAV and transaction records</li>
                    <li>• Performance Analytics provide buyers with historical fund performance</li>
                    <li>• LP Portal Integration gives visibility across the investor base for pricing and matching</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Investor Functionality</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• Secondary Listings: Investors list eligible fund interests with suggested pricing</li>
                    <li>• Automated Valuation Tools: Based on current LP cash flows, NAVs, and fund forecast models</li>
                    <li>• Buyer Matching & Negotiation: Algorithmic match and private offer room</li>
                    <li>• Legal & Compliance Workflow: Integrated subscription transfer and tax handling</li>
                    <li>• Liquidity Window Configuration: Managers can enable time-bound liquidity events</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Platform Benefits</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• Enhances investor confidence and stickiness</li>
                    <li>• Increases platform AUM via reinvestment of proceeds</li>
                    <li>• Creates recurring revenue streams from listing fees, transaction fees, and data analytics</li>
                    <li>• Builds a defensible moat by embedding secondary trading into the lifecycle of retail investing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-blue-900 text-white p-16 rounded-lg">
              <h2 className="text-4xl font-light mb-8">
                Join the Alternative Asset Revolution
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                Discover how our Secondary Market platform can provide the liquidity and transparency you need in alternative investments.
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