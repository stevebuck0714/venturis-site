'use client';

import Link from 'next/link';
import DateDisplay from '@/components/DateDisplay';

export default function PrimaryMarket() {
  return (
    <main className="p-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-end items-center mb-0">
        <DateDisplay />
      </div>

      {/* Market Categories */}
      <div className="mb-8 border-b">
        <div className="flex gap-8">
          <Link href="/opportunities" className="pb-4">
            <h2 className="text-2xl font-semibold text-gray-400">Secondary Market</h2>
            <div className="mt-1 h-1 bg-transparent"></div>
          </Link>
          <div className="pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Primary Market</h2>
            <div className="mt-1 h-1 bg-blue-600"></div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Search available Pictet Offerings</h2>
        <div className="grid grid-cols-5 gap-4">
          <select className="border p-2 rounded">
            <option>Strategy</option>
          </select>
          <select className="border p-2 rounded">
            <option>Region</option>
          </select>
          <select className="border p-2 rounded">
            <option>Industry</option>
          </select>
          <select className="border p-2 rounded">
            <option>Manager</option>
          </select>
          <select className="border p-2 rounded">
            <option>More Filters</option>
          </select>
        </div>
      </section>

      {/* Recent Listings Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Listings</h2>
        
        {/* Fund Cards */}
        {[
          {
            name: 'Primary Fund I',
            strategy: 'Growth Equity',
            sector: 'Technology',
            fundSize: '>$2Bil',
            vintage: '2024',
            targetReturn: '20%',
            minCommitment: '$ 10,000,000',
            firstClose: 'Q3 2024',
            finalClose: 'Q4 2024',
            managementFee: '2%',
            carryFee: '20%',
            postedDate: '5/14/2024',
            detailsLink: '#'
          },
          {
            name: 'Primary Fund II',
            strategy: 'Venture Capital',
            sector: 'Healthcare',
            fundSize: '>$500M',
            vintage: '2024',
            targetReturn: '25%',
            minCommitment: '$ 5,000,000',
            firstClose: 'Q2 2024',
            finalClose: 'Q3 2024',
            managementFee: '2%',
            carryFee: '20%',
            postedDate: '5/12/2024',
            detailsLink: '#'
          },
          {
            name: 'Primary Fund III',
            strategy: 'Infrastructure',
            sector: 'Renewable Energy',
            fundSize: '>$3Bil',
            vintage: '2024',
            targetReturn: '15%',
            minCommitment: '$ 15,000,000',
            firstClose: 'Q4 2024',
            finalClose: 'Q1 2025',
            managementFee: '1.75%',
            carryFee: '20%',
            postedDate: '5/10/2024',
            detailsLink: '#'
          }
        ].map((fund, index) => (
          <div key={index} className="border rounded-lg p-6 mb-6 bg-white shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div> {/* Fund logo placeholder */}
                <h3 className="text-lg font-semibold">{fund.name}</h3>
              </div>
              <div className="text-sm text-gray-600">
                <span>Posted Date: {fund.postedDate}</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Strategy</p>
                <p className="font-medium">{fund.strategy}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Sector</p>
                <p className="font-medium">{fund.sector}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Target Fund Size</p>
                <p className="font-medium">{fund.fundSize}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">Vintage</p>
                  <p className="font-medium">{fund.vintage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Target Return</p>
                  <p className="font-medium">{fund.targetReturn}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Min Commitment</p>
                <p className="font-medium">{fund.minCommitment}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">First Close</p>
                <p className="font-medium">{fund.firstClose}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Final Close</p>
                <p className="font-medium">{fund.finalClose}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">Mgmt Fee</p>
                  <p className="font-medium">{fund.managementFee}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Carry</p>
                  <p className="font-medium">{fund.carryFee}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Link 
                href={fund.detailsLink}
                className="text-blue-600 hover:text-blue-800"
              >
                View Details...
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
} 