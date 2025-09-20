'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between p-6 px-6 lg:px-6" aria-label="Global">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-5xl font-bold text-blue-900">Venturis<sup className="text-xl">TM</sup></span>
          </Link>
        </div>
        
        <div className="flex lg:gap-x-12">
          <Link href="/solutions/investment-teams" className="text-gray-700 hover:text-blue-900">
            Investment Management
          </Link>
          <Link href="/solutions/front-office" className="text-gray-700 hover:text-blue-900">
            Wealth Advisory
          </Link>
          <Link href="/solutions/secondary-market" className="text-gray-700 hover:text-blue-900">
            Client Solutions
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsWhoWeServeOpen(true)}
            onMouseLeave={() => setIsWhoWeServeOpen(false)}
          >
            <button
              className="text-gray-700 hover:text-blue-900 flex items-center"
            >
              Who We Serve
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isWhoWeServeOpen && (
              <div
                className="absolute top-full left-0 pt-2 w-64 z-50"
              >
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="py-2">
                    <Link href="/who-we-serve/private-banks" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Private Banks
                    </Link>
                    <Link href="/who-we-serve/family-offices" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Family Offices
                    </Link>
                    <Link href="/who-we-serve/fund-of-funds" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Fund of Funds
                    </Link>
                    <Link href="/who-we-serve/outsourced-cio" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Outsourced CIO's
                    </Link>
                    <Link href="/who-we-serve/sovereign-wealth-funds" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Sovereign Wealth Funds
                    </Link>
                    <Link href="/who-we-serve/pension-funds" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Pension Funds, Endowments, Foundations
                    </Link>
                    <Link href="/who-we-serve/insurance-alternative-investors" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Insurance Alternative Investors
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-gray-700 hover:text-blue-900">
            Blog
          </Link>
        </div>

        <div className="flex lg:justify-end">
          <Link href="/request-demo" className="text-sm font-semibold leading-6 text-white bg-blue-900 hover:bg-blue-800 px-6 py-2 rounded-md transition-colors">
            Request a Demo
          </Link>
        </div>
      </nav>
    </header>
  );
} 