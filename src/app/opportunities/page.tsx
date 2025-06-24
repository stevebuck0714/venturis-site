'use client';

import Link from 'next/link';
import DateDisplay from '@/components/DateDisplay';

export default function Opportunities() {
  return (
    <main className="p-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-end items-center mb-0">
        <DateDisplay />
      </div>

      {/* Buttons Section */}
      <section className="mb-6">
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Offers</button>
          <Link 
            href="/create-offer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create an Offer
          </Link>
        </div>
      </section>

      {/* Market Categories */}
      <div className="mb-8 border-b">
        <div className="flex gap-8">
          <div className="pb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Secondary Market</h2>
            <div className="mt-1 h-1 bg-blue-600"></div>
          </div>
          <Link href="/opportunities/primary-market" className="pb-4">
            <h2 className="text-2xl font-semibold text-gray-400">Primary Market</h2>
            <div className="mt-1 h-1 bg-transparent"></div>
          </Link>
        </div>
      </div>

      {/* Search Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Search</h2>
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
            name: 'PICTET SPV 1',
            strategy: 'Buyout',
            sector: 'Telecommunications',
            fundSize: '>$1Bil',
            vintage: '2016',
            currentNAV: '$ 4,800,000',
            totalCalled: '$ 2,900,000',
            commitment: '$ 3,000,000',
            currentDPI: '0.75x',
            estEndDate: '9/30/2029',
            postedDate: '5/14/2025',
            detailsLink: '/fund-summary'
          },
          {
            name: 'PICTET SPV 2',
            strategy: 'Buyout',
            sector: 'Multi-Balanced',
            fundSize: '>$1Bil',
            vintage: '2016',
            currentNAV: '$ 4,800,000',
            totalCalled: '$ 2,900,000',
            commitment: '$ 3,000,000',
            currentDPI: '0.75x',
            estEndDate: '9/30/2029',
            postedDate: '5/14/2025',
            detailsLink: '#'
          },
          {
            name: 'PICTET SPV 3',
            strategy: 'Growth',
            sector: 'Utility',
            fundSize: '>$1Bil',
            vintage: '2016',
            currentNAV: '$ 4,800,000',
            totalCalled: '$ 2,900,000',
            commitment: '$ 3,000,000',
            currentDPI: '0.75x',
            estEndDate: '9/30/2029',
            postedDate: '5/14/2025',
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
                <p className="text-sm text-gray-600">Closed Fund Size</p>
                <p className="font-medium">{fund.fundSize}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">Vintage</p>
                  <p className="font-medium">{fund.vintage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Est. End Date</p>
                  <p className="font-medium">{fund.estEndDate}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Current NAV</p>
                <p className="font-medium">{fund.currentNAV}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Called</p>
                <p className="font-medium">{fund.totalCalled}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Commitment</p>
                <p className="font-medium">{fund.commitment}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Current DPI</p>
                <p className="font-medium">{fund.currentDPI}</p>
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