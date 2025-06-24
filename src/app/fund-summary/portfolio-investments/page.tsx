'use client';

import Link from 'next/link';

export default function PortfolioInvestments() {
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
          className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium"
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

      {/* Schedule of Investments */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Schedule of Investments</h2>
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-2 font-medium text-gray-600 text-xs">Company Name</th>
              <th className="text-left p-2 font-medium text-gray-600 text-xs">Security Type</th>
              <th className="text-right p-2 font-medium text-gray-600 text-xs">Number of Shares</th>
              <th className="text-right p-2 font-medium text-gray-600 text-xs">Fund Ownership %</th>
              <th className="text-left p-2 font-medium text-gray-600 text-xs">Initial Investment Date</th>
              <th className="text-right p-2 font-medium text-gray-600 text-xs">Fund Commitment</th>
              <th className="text-right p-2 font-medium text-gray-600 text-xs">Total Invested</th>
              <th className="text-right p-2 font-medium text-gray-600 text-xs">Current Cost</th>
              <th className="text-right p-2 font-medium text-gray-600 text-xs">Reported Value</th>
              <th className="text-right p-2 font-medium text-gray-600 text-xs">Realized Proceeds</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {[
              { company: 'Company 1', type: 'Equity', shares: '1,250,000', ownership: '55.00', date: '3/15/2007', commitment: '5,000,000', invested: '5,000,000', cost: '4,500,000', value: '4,700,000', proceeds: '1,000,000' },
              { company: 'Company 1', type: 'Debt', shares: '12,789', ownership: '55.00', date: '6/15/2007', commitment: '5,000,000', invested: '5,000,000', cost: '5,000,000', value: '5,200,000', proceeds: '500,000' },
              { company: 'Company 3', type: 'Equity', shares: '', ownership: '12.00', date: '9/15/2007', commitment: '5,000,000', invested: '5,000,000', cost: '2,500,000', value: '2,700,000', proceeds: '-' },
              { company: 'Company 3', type: 'Debt', shares: '', ownership: '12.00', date: '9/15/2007', commitment: '5,000,000', invested: '5,000,000', cost: '5,000,000', value: '5,200,000', proceeds: '1,000,000' },
              { company: 'Company 4', type: 'Equity', shares: '', ownership: '90.00', date: '2/15/2008', commitment: '5,000,000', invested: '5,000,000', cost: '5,000,000', value: '10,000,000', proceeds: '-' },
              { company: 'Company 5', type: 'Equity', shares: '', ownership: '80.00', date: '5/15/2008', commitment: '4,000,000', invested: '4,000,000', cost: '4,000,000', value: '-', proceeds: '-' },
              { company: 'Company 6', type: 'Equity', shares: '', ownership: '65.00', date: '8/15/2008', commitment: '4,000,000', invested: '4,000,000', cost: '4,000,000', value: '5,000,000', proceeds: '-' },
              { company: 'Company 7', type: 'Equity', shares: '', ownership: '100.00', date: '11/15/2008', commitment: '4,000,000', invested: '4,000,000', cost: '4,000,000', value: '4,500,000', proceeds: '-' },
              { company: 'Company 8', type: 'Equity', shares: '', ownership: '60.00', date: '6/15/2010', commitment: '8,000,000', invested: '4,000,000', cost: '4,000,000', value: '4,000,000', proceeds: '250,000' },
            ].map((row, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2">{row.company}</td>
                <td className="p-2">{row.type}</td>
                <td className="p-2 text-right">{row.shares}</td>
                <td className="p-2 text-right">{row.ownership}%</td>
                <td className="p-2">{row.date}</td>
                <td className="p-2 text-right">$ {row.commitment}</td>
                <td className="p-2 text-right">$ {row.invested}</td>
                <td className="p-2 text-right">$ {row.cost}</td>
                <td className="p-2 text-right">$ {row.value}</td>
                <td className="p-2 text-right">$ {row.proceeds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
} 