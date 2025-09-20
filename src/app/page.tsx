'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const words = [
  'Portfolio Construction',
  'Private Fund Modeling and Monitoring',
  'Advanced Wealth Advisory Support',
  'Enhanced Client Engagement'
];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterPosition, setCurrentLetterPosition] = useState(0);

  useEffect(() => {
    const letterInterval = setInterval(() => {
      setCurrentLetterPosition((prev) => {
        if (prev < words[currentWordIndex].length - 1) {
          return prev + 1;
        } else {
          clearInterval(letterInterval);
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setCurrentLetterPosition(0);
          }, 2000);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(letterInterval);
  }, [currentWordIndex]);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        <section className="mb-16">
          <div className="text-left pt-8">
            <h1 className="text-6xl font-normal text-blue-900 mb-4 text-left">
              Accelerating Your Private Capital
            </h1>
            <div className="min-h-[4rem] flex items-end mb-24">
              <span className="text-4xl font-light text-black mr-4 flex items-end">with&nbsp;&nbsp;</span>
              <div className="text-6xl font-normal text-black">
                {words[currentWordIndex].slice(0, currentLetterPosition + 1).split('').map((letter, index) => (
                  <span key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enabling Section - 2x2 Grid */}
        <section className="mb-16">
          <h2 className="text-5xl font-light text-blue-900 mb-12 text-left">
            Enabling Data-driven decisions in real time
          </h2>
          <div className="bg-gray-50 py-16 -mx-6">
            <div className="max-w-[90rem] mx-auto px-6">
              <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Construction</h3>
                    <p className="text-lg text-gray-600">Reduced idle cash and improved portfolio performance through intelligent allocation strategies</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-green-200 transition-colors">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mandate Compliance</h3>
                    <p className="text-lg text-gray-600">Adherence to investor mandates with automated monitoring and alerts</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advisor Productivity</h3>
                    <p className="text-lg text-gray-600">Increase productivity of your wealth advisors with AI-powered insights and automation</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Personalization</h3>
                    <p className="text-lg text-gray-600">Delivering personalized client interaction through advanced analytics and customization</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mt-32 mb-16">
          <div className="text-left">
            <h2 className="text-5xl font-light text-blue-900 mb-4">Solutions</h2>
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl">
              Harness the power of artificial intelligence and machine learning to solve complex challenges in private capital and wealth management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/solutions/investment-teams" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group-hover:bg-gray-50 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Empowering Investment Teams</h3>
                <p className="text-gray-600">Advanced analytics and portfolio management tools for private equity, venture capital, and fund managers</p>
              </div>
            </Link>

            <Link href="/solutions/front-office" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group-hover:bg-gray-50 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wealth Advisory</h3>
                <p className="text-gray-600">Intelligent portfolio construction and client management solutions for wealth advisors and family offices</p>
              </div>
            </Link>

            <Link href="/solutions/secondary-market" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group-hover:bg-gray-50 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client Solutions</h3>
                <p className="text-gray-600">Enhanced client engagement and personalized investment solutions for wealth management firms</p>
              </div>
            </Link>
          </div>
        </section>

      </div>

      {/* Latest Insights Section */}
      <section className="bg-gray-50 py-16 -mx-6 mt-16">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="text-left mb-12">
            <h2 className="text-5xl font-light text-blue-900 mb-4">Latest Insights</h2>
            <p className="text-2xl text-gray-600 whitespace-nowrap">
              Stay informed with our latest thinking on private capital markets, technology trends, and industry developments
            </p>
          </div>
          
          <div className="scroll-container">
            <div className="scroll-content">
              
              <Link href="/articles/portfolio-construction" className="group">
                <div className="relative article-box bg-white border border-black rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <svg className="w-32 h-32" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">Portfolio Construction</h3>
                    <p className="text-gray-600 mb-4">Utilizing Regression Analysis, Neural Networks, and ML for Accurate Portfolio Construction and Ongoing Updates</p>
                    <div className="flex justify-end">
                      <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/articles/secondary-market-platform" className="group">
                <div className="relative article-box bg-white border border-black rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <svg className="w-32 h-32" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">Secondary Market Platform</h3>
                    <p className="text-gray-600 mb-4">Unlocking Liquidity in Private Markets for Retail Investors</p>
                    <div className="flex justify-end">
                      <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/articles/private-asset-reporting" className="group">
                <div className="relative article-box bg-white border border-black rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <svg className="w-32 h-32" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">Reporting Pain Points</h3>
                    <p className="text-gray-600 mb-4">An analysis of why legacy reporting methods are failing in private asset management and how automation is the answer</p>
                    <div className="flex justify-end">
                      <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/articles/market-trends" className="group">
                <div className="relative article-box bg-white border border-black rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <svg className="w-32 h-32" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">Private Market Trends & AI Predictions</h3>
                    <p className="text-gray-600 mb-4">Exploring how AI is transforming private markets and shaping investment decisions in 2025</p>
                    <div className="flex justify-end">
                      <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/articles/data-challenges-automation" className="group">
                <div className="relative article-box bg-white border border-black rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <svg className="w-32 h-32" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">Allocator Data Challenges</h3>
                    <p className="text-gray-600 mb-4">How automation is transforming data management for capital allocators in private markets</p>
                    <div className="flex justify-end">
                      <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Learn More →</span>
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}