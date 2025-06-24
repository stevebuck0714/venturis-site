'use client';

import Link from 'next/link';
import DateDisplay from '@/components/DateDisplay';

export default function FundCashFlows() {
  const capitalCalls = [
    { date: '9/22/2015', percentage: 6.15, amount: 492308, name: 'Capital Call' },
    { date: '6/15/2016', percentage: 12.23, amount: 978462, name: 'Capital Call' },
    { date: '7/27/2016', percentage: 7.72, amount: 617846, name: 'Capital Call' },
    { date: '2/27/2017', percentage: 3.25, amount: 259893, name: 'Capital Call' },
    { date: '6/15/2017', percentage: 4.86, amount: 388468, name: 'Capital Call' },
    { date: '12/12/2017', percentage: 13.81, amount: 1104909, name: 'Capital Call' },
    { date: '4/25/2018', percentage: 1.99, amount: 159212, name: 'Capital Call' },
    { date: '7/13/2018', percentage: 1.79, amount: 142833, name: 'Capital Call' },
    { date: '8/20/2018', percentage: 7.25, amount: 579993, name: 'Capital Call' },
    { date: '3/25/2019', percentage: 14.66, amount: 1172923, name: 'Capital Call' },
    { date: '10/28/2019', percentage: 0.30, amount: 24048, name: 'Capital Call' },
    { date: '4/24/2023', percentage: 5.41, amount: 432875, name: 'Capital Call' }
  ];

  const distributions = [
    { date: '4/9/2021', percentage: 3.51, amount: 631113, name: 'Dist - Dividend' },
    { date: '11/22/2021', percentage: 9.30, amount: 1674419, name: 'Capital Gain' },
    { date: '11/22/2021', percentage: 3.72, amount: 669610, name: 'Capital Returned' },
    { date: '12/3/2021', percentage: 9.71, amount: 1748576, name: 'Capital Gain' },
    { date: '12/3/2021', percentage: 5.22, amount: 939359, name: 'Capital Returned' },
    { date: '4/7/2022', percentage: 14.50, amount: 2609987, name: 'Capital Gain' },
    { date: '4/7/2022', percentage: 6.52, amount: 1172923, name: 'Capital Returned' },
    { date: '9/21/2022', percentage: 0.24, amount: 42684, name: 'Capital Gain' },
    { date: '10/31/2022', percentage: 9.04, amount: 1627849, name: 'Capital Gain' },
    { date: '10/31/2022', percentage: 8.44, amount: 1519774, name: 'Capital Returned' },
    { date: '2/14/2023', percentage: 0.35, amount: 62935, name: 'Capital Returned' },
    { date: '4/24/2023', percentage: -0.01, amount: -2422, name: 'Capital Returned' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (percentage) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(percentage);
  };

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
          className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium"
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

      {/* Content Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column - Capital Calls */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Capital Calls</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Date</th>
                  <th className="px-4 py-2 text-right text-gray-600">%</th>
                  <th className="px-4 py-2 text-right text-gray-600">Amount ($)</th>
                  <th className="px-4 py-2 text-left text-gray-600">Name</th>
                </tr>
              </thead>
              <tbody>
                {capitalCalls.map((call, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-2">{call.date}</td>
                    <td className="px-4 py-2 text-right">{formatPercentage(call.percentage)}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(call.amount)}</td>
                    <td className="px-4 py-2">{call.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column - Distribution Curve */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Distribution Curve</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Date</th>
                  <th className="px-4 py-2 text-right text-gray-600">%</th>
                  <th className="px-4 py-2 text-right text-gray-600">Amount ($)</th>
                  <th className="px-4 py-2 text-left text-gray-600">Name</th>
                </tr>
              </thead>
              <tbody>
                {distributions.map((dist, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-2">{dist.date}</td>
                    <td className="px-4 py-2 text-right">{formatPercentage(dist.percentage)}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(dist.amount)}</td>
                    <td className="px-4 py-2">{dist.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
} 