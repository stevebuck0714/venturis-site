'use client';

import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
import ClientSelector from '@/components/ClientSelector';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24 pt-12 pb-24">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <div className="mb-16" style={{ fontFamily: 'Times New Roman' }}>
          <h1 className="text-5xl mb-2">Stability.</h1>
          <p className="text-5xl">Our answer to global instability.</p>
        </div>

        {/* Client Information Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6">
            {/* Client Selector and Meeting Info Row */}
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-8 w-1/2">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/pictet-logo-red.jpeg"
                    alt="Pictet Logo"
                    width={120}
                    height={120}
                    className="rounded"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">Select Client</h2>
                  <ClientSelector showDropdown={true} />
                </div>
              </div>
              <div className="text-right space-y-4">
                <div>
                  <p className="text-lg text-gray-700">June 27, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Meeting</p>
                  <p className="text-lg font-medium">March 30, 2025</p>
                </div>
              </div>
            </div>

            {/* Portfolio Link */}
            <div className="flex justify-end mt-4">
              <Link 
                href="/portfolio-summary" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Current Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
