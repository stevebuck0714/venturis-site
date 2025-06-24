'use client';

import Image from 'next/image';
import DateDisplay from '@/components/DateDisplay';

export default function PortfolioSummary() {
  const portfolioData = [
    {
      investment: 'Investment G',
      dateOfFirstInvestment: 'May-21',
      holdingPeriod: 4.7,
      exitMethod: 'n/a',
      geography: 'France',
      industrySector: 'Manufacturing',
      currentOwnership: '86.00%',
      totalOriginalCost: '€5,703.00',
      proceedsRepayments: '€0.00',
      cashIncome: '€70.00',
      totalCashRealised: '€70.00',
      fairValue: '€7,863.00',
      totalRealised: '€7,933.00',
      totalReturn: '€2,230.00',
      moic: '1.4x',
      grossIrr: '30.00%'
    },
    {
      investment: 'Investment H',
      dateOfFirstInvestment: 'May-21',
      holdingPeriod: 3.2,
      exitMethod: 'n/a',
      geography: 'Germany',
      industrySector: 'Business services',
      currentOwnership: '75.00%',
      totalOriginalCost: '€14,344.00',
      proceedsRepayments: '€530.00',
      cashIncome: '€74.00',
      totalCashRealised: '€604.00',
      fairValue: '€18,650.00',
      totalRealised: '€19,254.00',
      totalReturn: '€4,910.00',
      moic: '1.3x',
      grossIrr: '34.00%'
    },
    {
      investment: 'Investment I*',
      dateOfFirstInvestment: 'May-18',
      holdingPeriod: 2.7,
      exitMethod: 'n/a',
      geography: 'Poland',
      industrySector: 'Healthcare',
      currentOwnership: '21.00%',
      totalOriginalCost: '€12,829.00',
      proceedsRepayments: '€12,623.00',
      cashIncome: '€1,160.00',
      totalCashRealised: '€13,783.00',
      fairValue: '€13,489.00',
      totalRealised: '€27,272.00',
      totalReturn: '€14,443.00',
      moic: '2.1x',
      grossIrr: '37.00%'
    },
    {
      investment: 'Investment J**',
      dateOfFirstInvestment: 'May-12',
      holdingPeriod: 0.7,
      exitMethod: 'n/a',
      geography: 'Sweden',
      industrySector: 'Hotel & casino',
      currentOwnership: '95.00%',
      totalOriginalCost: '€17,500.00',
      proceedsRepayments: '€0.00',
      cashIncome: '€521.80',
      totalCashRealised: '€521.00',
      fairValue: '€25,317.00',
      totalRealised: '€25,838.00',
      totalReturn: '€8,338.00',
      moic: '1.5x',
      grossIrr: '79.00%'
    },
    {
      investment: 'Investment K',
      dateOfFirstInvestment: 'Sep-22',
      holdingPeriod: 0.3,
      exitMethod: 'n/a',
      geography: 'UK',
      industrySector: 'Manufacturing',
      currentOwnership: '86.00%',
      totalOriginalCost: '€9,214.00',
      proceedsRepayments: '€0.00',
      cashIncome: '€70.00',
      totalCashRealised: '€70.00',
      fairValue: '€8,527.00',
      totalRealised: '€8,597.00',
      totalReturn: '€617.00',
      moic: '0.9x',
      grossIrr: 'n/a'
    },
    {
      investment: 'Investment L',
      dateOfFirstInvestment: 'Nov-22',
      holdingPeriod: 0.2,
      exitMethod: 'n/a',
      geography: 'Germany',
      industrySector: 'Consumer retail',
      currentOwnership: '84.00%',
      totalOriginalCost: '€7,856.00',
      proceedsRepayments: '€0.00',
      cashIncome: '€25.00',
      totalCashRealised: '€25.00',
      fairValue: '€7,856.00',
      totalRealised: '€7,881.00',
      totalReturn: '€25.00',
      moic: '1.0x',
      grossIrr: 'n/a'
    }
  ];

  return (
    <main className="p-8 max-w-[95%] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Portfolio Summary</h1>
        <DateDisplay />
      </div>
      
      {/* Portfolio Table */}
      <div className="overflow-x-auto shadow-md rounded-lg mb-12">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600 whitespace-nowrap w-[200px]">
                <div>Investment</div>
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 align-top max-w-[100px]">
                <div className="break-words">Date of First Investment</div>
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 align-top max-w-[80px]">
                <div className="break-words">Holding Period (yrs)</div>
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 align-top max-w-[80px]">
                <div className="break-words">Exit Method</div>
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 align-top max-w-[100px]">
                <div className="break-words">Geography</div>
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 align-top w-[150px] whitespace-nowrap">
                <div>Industry/Sector</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 align-top max-w-[120px]">
                <div className="break-words">Current % Ownership</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 w-[150px]">
                <div className="break-words">Total Original Cost</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 align-top max-w-[140px]">
                <div className="break-words">Proceeds/Repayments</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 align-top max-w-[100px]">
                <div className="break-words">Cash Income</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 align-top max-w-[100px]">
                <div className="break-words">Total Cash Realised</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 align-top max-w-[100px]">
                <div className="break-words">Fair Value</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 w-[150px]">
                <div className="break-words">Total Realised + Fair Value</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 align-top max-w-[100px]">
                <div className="break-words">Total Return</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 align-top max-w-[100px]">
                <div className="break-words">MOIC</div>
              </th>
              <th className="px-3 py-2 text-right font-medium text-gray-600 align-top max-w-[80px]">
                <div className="break-words">Gross IRR</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {portfolioData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 py-2 whitespace-nowrap">{item.investment}</td>
                <td className="px-3 py-2">{item.dateOfFirstInvestment}</td>
                <td className="px-3 py-2 text-right">{item.holdingPeriod}</td>
                <td className="px-3 py-2">{item.exitMethod}</td>
                <td className="px-3 py-2">{item.geography}</td>
                <td className="px-3 py-2 whitespace-nowrap">{item.industrySector}</td>
                <td className="px-3 py-2 text-right">{item.currentOwnership}</td>
                <td className="px-3 py-2 text-right">{item.totalOriginalCost}</td>
                <td className="px-3 py-2 text-right">{item.proceedsRepayments}</td>
                <td className="px-3 py-2 text-right">{item.cashIncome}</td>
                <td className="px-3 py-2 text-right">{item.totalCashRealised}</td>
                <td className="px-3 py-2 text-right">{item.fairValue}</td>
                <td className="px-3 py-2 text-right">{item.totalRealised}</td>
                <td className="px-3 py-2 text-right">{item.totalReturn}</td>
                <td className="px-3 py-2 text-right">{item.moic}</td>
                <td className="px-3 py-2 text-right">{item.grossIrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Performance Graph Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">3 Year Performance vs Benchmark</h2>
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/performance-graph.png"
            alt="3 year performance versus benchmark"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <div className="flex justify-center gap-8 mt-4">
          <div className="flex items-center">
            <div className="w-4 h-1 bg-blue-400 mr-2"></div>
            <span className="text-sm text-gray-600">Our portfolio</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-yellow-400 mr-2"></div>
            <span className="text-sm text-gray-600">Benchmark</span>
          </div>
        </div>
      </div>
    </main>
  );
} 