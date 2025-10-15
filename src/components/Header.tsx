'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between p-4 sm:p-6" aria-label="Global">
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl sm:text-3xl lg:text-5xl font-bold text-blue-900">
              Venturis<sup className="text-sm sm:text-base lg:text-xl">TM</sup>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
          <Link href="/solutions/investment-teams" className="text-sm xl:text-base text-gray-700 hover:text-blue-900 transition-colors">
            Investment Management
          </Link>
          <Link href="/solutions/front-office" className="text-sm xl:text-base text-gray-700 hover:text-blue-900 transition-colors">
            Wealth Advisory
          </Link>
          <Link href="/solutions/secondary-market" className="text-sm xl:text-base text-gray-700 hover:text-blue-900 transition-colors">
            Client Solutions
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsWhoWeServeOpen(true)}
            onMouseLeave={() => setIsWhoWeServeOpen(false)}
          >
            <button className="text-sm xl:text-base text-gray-700 hover:text-blue-900 flex items-center transition-colors">
              Who We Serve
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isWhoWeServeOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="py-2">
                    <Link href="/who-we-serve/private-banks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Private Banks
                    </Link>
                    <Link href="/who-we-serve/family-offices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Family Offices
                    </Link>
                    <Link href="/who-we-serve/fund-of-funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Fund of Funds
                    </Link>
                    <Link href="/who-we-serve/outsourced-cio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Outsourced CIO's
                    </Link>
                    <Link href="/who-we-serve/sovereign-wealth-funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Sovereign Wealth Funds
                    </Link>
                    <Link href="/who-we-serve/pension-funds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Pension Funds, Endowments, Foundations
                    </Link>
                    <Link href="/who-we-serve/insurance-alternative-investors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Insurance Alternative Investors
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-sm xl:text-base text-gray-700 hover:text-blue-900 transition-colors">
            Blog
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:justify-end">
          <Link href="/request-demo" className="text-sm font-semibold leading-6 text-white bg-blue-900 hover:bg-blue-800 px-4 xl:px-6 py-2 rounded-md transition-colors">
            Request a Demo
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" onClick={() => setIsMobileMenuOpen(false)}>
            {/* Backdrop overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            <div 
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold text-blue-900">
                    Venturis<sup className="text-sm">TM</sup>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      href="/solutions/investment-teams"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Investment Management
                    </Link>
                    <Link
                      href="/solutions/front-office"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Wealth Advisory
                    </Link>
                    <Link
                      href="/solutions/secondary-market"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Client Solutions
                    </Link>
                    
                    {/* Mobile Who We Serve Section */}
                    <div className="-mx-3 block rounded-lg px-3 py-2">
                      <div className="text-base font-semibold leading-7 text-gray-900 mb-2">Who We Serve</div>
                      <div className="ml-4 space-y-1">
                        <Link
                          href="/who-we-serve/private-banks"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Private Banks
                        </Link>
                        <Link
                          href="/who-we-serve/family-offices"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Family Offices
                        </Link>
                        <Link
                          href="/who-we-serve/fund-of-funds"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Fund of Funds
                        </Link>
                        <Link
                          href="/who-we-serve/outsourced-cio"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Outsourced CIO's
                        </Link>
                        <Link
                          href="/who-we-serve/sovereign-wealth-funds"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Sovereign Wealth Funds
                        </Link>
                        <Link
                          href="/who-we-serve/pension-funds"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Pension Funds, Endowments, Foundations
                        </Link>
                        <Link
                          href="/who-we-serve/insurance-alternative-investors"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Insurance Alternative Investors
                        </Link>
                      </div>
                    </div>

                    <Link
                      href="/blog"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      href="/request-demo"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-900 hover:bg-blue-800 text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Request a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 