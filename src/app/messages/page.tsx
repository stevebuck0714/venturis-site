'use client';

import DateDisplay from '@/components/DateDisplay';

export default function Messages() {
  return (
    <main className="p-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-0 mb-4">
        <div className="flex justify-end mb-0">
          <DateDisplay />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Messages</h1>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          {/* Sample Messages - Replace with actual message data */}
          <div className="border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">New Offer Received</h3>
                <p className="text-sm text-gray-600">From: Investment Team</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <p className="text-gray-700">A new offer has been submitted for PICTET SPV 1.</p>
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Document Update</h3>
                <p className="text-sm text-gray-600">From: System</p>
              </div>
              <span className="text-sm text-gray-500">Yesterday</span>
            </div>
            <p className="text-gray-700">New documents have been added to the Data Room.</p>
          </div>

          <div className="pb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Portfolio Update</h3>
                <p className="text-sm text-gray-600">From: Portfolio Manager</p>
              </div>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <p className="text-gray-700">Quarterly portfolio performance report is now available.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 