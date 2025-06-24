'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CreateOffer() {
  const [bidAmount, setBidAmount] = useState(3150000);
  const [currentDate, setCurrentDate] = useState('');
  const [bidDays, setBidDays] = useState(5);
  const [expiryDate, setExpiryDate] = useState('');

  // Constants
  const fundMarketValue = 4000000;
  const remainingCommitments = 975000;

  useEffect(() => {
    // Set current date on component mount
    const now = new Date();
    setCurrentDate(now.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    }));

    // Calculate expiry date (5 days from now at 5:00 PM GMT)
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 5);
    expiry.setUTCHours(17, 0, 0, 0);
    
    // Format expiry date
    const month = expiry.toLocaleString('en-US', { month: 'long' });
    const day = expiry.getUTCDate();
    const year = expiry.getUTCFullYear();
    setExpiryDate(`${month} ${day}, ${year}    5:00 pm GMT`);
  }, []);

  // Calculate discount percentage
  const discountPercentage = ((bidAmount - fundMarketValue) / fundMarketValue) * 100;

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-4">
        {/* Header */}
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-1">PICTET SPV 1</h1>
            <p className="text-gray-600">Create Offer</p>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Date:</label>
            <input
              type="text"
              value={currentDate}
              readOnly
              className="w-full p-2 border rounded bg-gray-50"
            />
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-4 gap-6">
          {/* Fund Market Value */}
          <div>
            <label className="block text-gray-600 mb-1">Fund Market Value</label>
            <div className="flex items-center p-2 border rounded bg-gray-50">
              <span className="text-gray-500">$</span>
              <span className="ml-1">{fundMarketValue.toLocaleString()}</span>
            </div>
          </div>

          {/* Remaining Commitments */}
          <div>
            <label className="block text-gray-600 mb-1">Remaining Commitments</label>
            <div className="flex items-center p-2 border rounded bg-gray-50">
              <span className="text-gray-500">$</span>
              <span className="ml-1">{remainingCommitments.toLocaleString()}</span>
            </div>
          </div>

          {/* Discount Percentage */}
          <div>
            <label className="block text-gray-600 mb-1">Percent Prem/(Discount) to MV</label>
            <div className="p-2 border rounded bg-gray-50">
              {discountPercentage.toFixed(2)}%
            </div>
          </div>

          {/* Bid Duration */}
          <div>
            <label className="block text-gray-600 mb-1">Bid is open for # of Days</label>
            <input
              type="number"
              value={bidDays}
              onChange={(e) => setBidDays(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Bid Amount - Full Width */}
          <div className="col-span-2">
            <label className="block text-gray-600 mb-1">Bid</label>
            <div className="flex items-center">
              <div className="flex-grow flex items-center p-2 border rounded">
                <span className="text-gray-500">$</span>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(Number(e.target.value))}
                  className="ml-1 w-full focus:outline-none"
                />
              </div>
              <button 
                className="ml-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                onClick={() => {/* Handle bid placement */}}
              >
                Place a Bid
              </button>
            </div>
          </div>

          {/* Expiry Date */}
          <div className="col-span-2">
            <label className="block text-gray-600 mb-1">Offer Expires</label>
            <div className="p-2 border rounded bg-gray-50">
              {expiryDate}
            </div>
          </div>

          {/* Cancel Button - Aligned to the right */}
          <div className="col-span-4 flex justify-end mt-4">
            <button 
              className="text-red-600 font-medium hover:text-red-800"
              onClick={() => {/* Handle cancellation */}}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 