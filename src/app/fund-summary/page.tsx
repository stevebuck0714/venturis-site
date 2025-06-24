'use client';

import Link from 'next/link';
import DateDisplay from '@/components/DateDisplay';

export default function FundSummary() {
  return (
    <main className="p-2 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-0 mb-4">
        <div className="flex justify-end mb-0">
          <DateDisplay />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">PICTET SPV 1</h1>
          <Link 
            href="/create-offer"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Create an Offer
          </Link>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <Link 
          href="/fund-summary"
          className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium"
        >
          Summary
        </Link>
        <Link 
          href="/fund-summary/portfolio-investments"
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Portfolio Investments
        </Link>
        <Link 
          href="/fund-summary/cash-flows"
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Fund Cash Flows
        </Link>
        <Link 
          href="/fund-summary/data-room"
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Data Room
        </Link>
      </div>

      {/* Fund Details Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 mb-1">Current NAV</p>
            <p className="text-xl font-medium">$ 4,000,000</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Total Called</p>
            <p className="text-xl font-medium">$ 8,000,000</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Total Commitment</p>
            <p className="text-xl font-medium">$ 9,000,000</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Current DPI</p>
            <p className="text-xl font-medium">1.10</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Current Exposure</p>
            <p className="text-xl font-medium">$ 6,000,000</p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 mb-1">Strategy</p>
            <p className="text-xl font-medium">Buyout- Mid Market</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1"># of Investments</p>
            <p className="text-xl font-medium">9</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Exits</p>
            <p className="text-xl font-medium">4</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1"># of Co-Investments</p>
            <p className="text-xl font-medium">3</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Market</p>
            <p className="text-xl font-medium">Primary</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 mb-1">Posted Date</p>
            <p className="text-xl font-medium">5/14/2025</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Bidding Ends</p>
            <p className="text-xl font-medium">6/30/2025</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Views</p>
            <p className="text-xl font-medium">39</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Offers</p>
            <p className="text-xl font-medium">3</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Status</p>
            <p className="text-xl font-medium">In Review</p>
          </div>
        </div>
      </div>
    </main>
  );
} 