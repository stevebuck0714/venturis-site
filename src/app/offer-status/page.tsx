'use client';

import DateDisplay from '@/components/DateDisplay';

export default function OfferStatus() {
  // Sample data - in a real app this would come from an API or database
  const offers = [
    {
      id: 'OFF-2024-001',
      fundName: 'PICTET SPV 1',
      offerType: 'Secondary Sale',
      offerDate: '2024-05-14',
      amount: '€2,500,000',
      status: 'Under Review',
      statusColor: 'bg-yellow-100 text-yellow-800',
      lastUpdated: '2024-05-15',
      nextStep: 'Pending documentation review',
      assignedTo: 'Sarah Chen'
    },
    {
      id: 'OFF-2024-002',
      fundName: 'PICTET SPV 2',
      offerType: 'Secondary Sale',
      offerDate: '2024-05-10',
      amount: '€1,800,000',
      status: 'Approved',
      statusColor: 'bg-green-100 text-green-800',
      lastUpdated: '2024-05-14',
      nextStep: 'Pending transfer completion',
      assignedTo: 'Michael Brown'
    },
    {
      id: 'OFF-2024-003',
      fundName: 'PICTET SPV 3',
      offerType: 'Secondary Sale',
      offerDate: '2024-05-08',
      amount: '€3,200,000',
      status: 'Documentation Required',
      statusColor: 'bg-orange-100 text-orange-800',
      lastUpdated: '2024-05-13',
      nextStep: 'Awaiting signed transfer agreement',
      assignedTo: 'Emma Wilson'
    },
    {
      id: 'OFF-2024-004',
      fundName: 'PICTET SPV 4',
      offerType: 'Secondary Sale',
      offerDate: '2024-05-05',
      amount: '€1,500,000',
      status: 'Rejected',
      statusColor: 'bg-red-100 text-red-800',
      lastUpdated: '2024-05-12',
      nextStep: 'No further action required',
      assignedTo: 'James Thompson'
    }
  ];

  return (
    <main className="p-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Offer Status</h1>
        <DateDisplay />
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600">Total Offers</div>
          <div className="text-2xl font-bold">{offers.length}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600">Under Review</div>
          <div className="text-2xl font-bold">
            {offers.filter(offer => offer.status === 'Under Review').length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600">Approved</div>
          <div className="text-2xl font-bold text-green-600">
            {offers.filter(offer => offer.status === 'Approved').length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600">Requires Action</div>
          <div className="text-2xl font-bold text-orange-600">
            {offers.filter(offer => offer.status === 'Documentation Required').length}
          </div>
        </div>
      </div>

      {/* Offers Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Offer ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fund Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Step
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned To
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {offers.map((offer) => (
              <tr key={offer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {offer.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {offer.fundName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {offer.offerType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {offer.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${offer.statusColor}`}>
                    {offer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {offer.lastUpdated}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                  {offer.nextStep}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {offer.assignedTo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
} 