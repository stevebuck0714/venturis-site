'use client';

import Link from 'next/link';

export default function DataRoom() {
  return (
    <main className="p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">PICTET SPV 1</h1>
        <Link 
          href="/create-offer"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Create an Offer
        </Link>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <Link 
          href="/fund-summary" 
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
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
          className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium"
        >
          Data Room
        </Link>
      </div>

      {/* Documents List */}
      <div className="space-y-6">
        <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-medium text-gray-900">Fund Financial Statements</h2>
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <span className="mr-2">download</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-medium text-gray-900">Fund Quarterly Reports</h2>
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <span className="mr-2">download</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-medium text-gray-900">Fund Account Statements</h2>
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <span className="mr-2">download</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
} 