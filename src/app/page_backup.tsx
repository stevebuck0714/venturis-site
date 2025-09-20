'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterPosition, setCurrentLetterPosition] = useState(0);

  const words = [
    'Portfolio Construction',
    'Private Fund Modeling and Monitoring',
    'Advanced Wealth Advisory Support',
    'Enhanced Client Engagement'
  ];

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
          }, 2000); // Pause before next word
          return prev;
        }
      });
    }, 100); // 100ms per letter

    return () => clearInterval(letterInterval);
  }, [currentWordIndex, words]);

  return (
    <main className="min-h-screen bg-white">
      {/* Cache buster: 2024-01-15-14:30 */}
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        {/* Hero Section */}
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

        {/* Enabling Section - Option 5: Clean Minimalist with 2x2 Layout */}
        <section className="mb-16">
          <h2 className="text-4xl font-light text-blue-900 mb-12 text-left">
            Enabling Data-driven decisions in real time
          </h2>
          
          <div className="bg-gray-50 py-16 -mx-6">
            <div className="max-w-[90rem] mx-auto px-6">
              <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-8 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
        <section className="mb-16 mt-32">
          <h2 className="text-6xl font-light text-blue-900 mb-8">Solutions</h2>
          
          <p className="text-2xl text-gray-700 leading-relaxed mb-12">
            We leverage artificial intelligence and machine learning to solve complex data challenges and improve portfolio performance and client engagement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Investment Management</h3>
                  <p className="text-gray-600 mb-4">Comprehensive portfolio analytics and monitoring solutions.</p>
                  <Link href="/solutions/investment-teams" className="text-blue-900 hover:text-blue-700">
                    Learn More →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                    </svg>
              </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Wealth Advisory Solutions</h3>
                  <p className="text-gray-600 mb-4">Tools to enhance client relationships and advisory services.</p>
                  <Link href="/solutions/front-office" className="text-blue-900 hover:text-blue-700">
                    Learn More →
                  </Link>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Client Solutions</h3>
                  <p className="text-gray-600 mb-4">Platform solutions for enhanced client engagement.</p>
                  <Link href="/solutions/secondary-market" className="text-blue-900 hover:text-blue-700">
                    Learn More →
                  </Link>
                </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        <section className="mb-16 mt-32">
          <div className="bg-gray-50 py-16 -mx-6">
            <div className="max-w-[90rem] mx-auto px-6">
              <h2 className="text-6xl font-light text-blue-900 mb-8">Latest Insights</h2>
              
              <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-left scrollbar-hide" id="latest-insights">
              {/* Duplicate articles for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6">
                      <div className="flex-shrink-0 w-96">
                        <article className="h-60 bg-white border border-black rounded-lg p-6 relative overflow-hidden mb-4">
                          {/* Background Chart */}
                          <div className="absolute inset-0 z-0 opacity-30">
                            <svg viewBox="0 0 400 200" className="w-full h-full">
                              <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#3B82F6" />
                                  <stop offset="100%" stopColor="#1E40AF" />
                                </linearGradient>
                              </defs>
                              <path d="M0,150 Q100,120 200,100 T400,80" stroke="url(#gradient1)" strokeWidth="3" fill="none" opacity="0.6"/>
                              <circle cx="100" cy="120" r="4" fill="#3B82F6" opacity="0.8"/>
                              <circle cx="200" cy="100" r="4" fill="#1E40AF" opacity="0.8"/>
                              <circle cx="300" cy="90" r="4" fill="#3B82F6" opacity="0.8"/>
                            </svg>
                          </div>
                          <div className="relative z-10 flex items-center justify-center h-full">
                            <p className="text-xl text-gray-900 font-bold text-center">
                              How automation is transforming data management for capital allocators in private markets
                            </p>
                          </div>
                        </article>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Allocator Data Challenges & Automation</h3>
                        <Link href="/articles/data-challenges-automation" className="text-blue-900 hover:text-blue-700 text-xl">
                          Read More →
                        </Link>
                      </div>

                      <div className="flex-shrink-0 w-96">
                        <article className="h-60 bg-white border border-black rounded-lg p-6 relative overflow-hidden mb-4">
                          {/* Background Chart */}
                          <div className="absolute inset-0 z-0 opacity-30">
                            <svg viewBox="0 0 400 200" className="w-full h-full">
                              <defs>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#10B981" />
                                  <stop offset="100%" stopColor="#059669" />
                                </linearGradient>
                              </defs>
                              <rect x="50" y="140" width="20" height="40" fill="url(#gradient2)" opacity="0.6"/>
                              <rect x="100" y="120" width="20" height="60" fill="url(#gradient2)" opacity="0.6"/>
                              <rect x="150" y="100" width="20" height="80" fill="url(#gradient2)" opacity="0.6"/>
                              <rect x="200" y="110" width="20" height="70" fill="url(#gradient2)" opacity="0.6"/>
                              <rect x="250" y="90" width="20" height="90" fill="url(#gradient2)" opacity="0.6"/>
                            </svg>
                          </div>
                          <div className="relative z-10 flex items-center justify-center h-full">
                            <p className="text-xl text-gray-900 font-bold text-center">
                              In the world of private assets, accurate and timely reporting is essential—yet it remains one of the most frustrating challenges for fund managers, family offices, and private banks.
                            </p>
                          </div>
                        </article>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Reporting Pain Points</h3>
                        <Link href="/articles/liquidity-solutions" className="text-blue-900 hover:text-blue-700 text-xl">
                          Read More →
                        </Link>
                      </div>

                      <div className="flex-shrink-0 w-96">
                        <article className="h-60 bg-white border border-black rounded-lg p-6 relative overflow-hidden mb-4">
                          {/* Background Chart */}
                          <div className="absolute inset-0 z-0 opacity-30">
                            <svg viewBox="0 0 400 200" className="w-full h-full">
                              <defs>
                                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#8B5CF6" />
                                  <stop offset="100%" stopColor="#7C3AED" />
                                </linearGradient>
                              </defs>
                              <circle cx="200" cy="100" r="60" fill="none" stroke="url(#gradient3)" strokeWidth="4" opacity="0.6"/>
                              <circle cx="200" cy="100" r="40" fill="none" stroke="#8B5CF6" strokeWidth="3" opacity="0.8"/>
                              <circle cx="200" cy="100" r="20" fill="url(#gradient3)" opacity="0.6"/>
                            </svg>
                          </div>
                          <div className="relative z-10 flex items-center justify-center h-full">
                            <p className="text-xl text-gray-900 font-bold text-center">
                              Utilizing Regression Analysis, Neural Networks, and ML for Accurate Portfolio Construction and Ongoing Updates
                            </p>
                          </div>
                        </article>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Portfolio Construction</h3>
                        <Link href="/articles/portfolio-construction" className="text-blue-900 hover:text-blue-700 text-xl">
                          Read More →
                        </Link>
                      </div>

                      <div className="flex-shrink-0 w-96">
                        <article className="h-60 bg-white border border-black rounded-lg p-6 relative overflow-hidden mb-4">
                          {/* Background Chart */}
                          <div className="absolute inset-0 z-0 opacity-15 flex items-center justify-center">
                            <svg className="w-32 h-32" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" strokeWidth="2">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                              <circle cx="12" cy="7" r="4"></circle>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                          </div>
                          <div className="relative z-10 flex items-center justify-center h-full">
                            <p className="text-xl text-gray-900 font-bold text-center">
                              Unlocking Liquidity in Private Markets for Retail Investors
                            </p>
                          </div>
                        </article>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Venturis Secondary Market Platform</h3>
                        <Link href="/articles/secondary-market-platform" className="text-blue-900 hover:text-blue-700 text-xl">
                          Read More →
                        </Link>
                      </div>

                      <div className="flex-shrink-0 w-96">
                        <article className="h-60 bg-white border border-black rounded-lg p-6 relative overflow-hidden mb-4">
                          {/* Background Chart */}
                          <div className="absolute inset-0 z-0 opacity-30">
                            <svg viewBox="0 0 400 200" className="w-full h-full">
                              <defs>
                                <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#EF4444" />
                                  <stop offset="100%" stopColor="#DC2626" />
                                </linearGradient>
                              </defs>
                              <rect x="80" y="60" width="240" height="80" fill="none" stroke="url(#gradient5)" strokeWidth="3" opacity="0.6"/>
                              <rect x="100" y="80" width="200" height="40" fill="url(#gradient5)" opacity="0.4"/>
                              <circle cx="120" cy="100" r="6" fill="#EF4444" opacity="0.8"/>
                              <circle cx="160" cy="100" r="6" fill="#DC2626" opacity="0.8"/>
                              <circle cx="200" cy="100" r="6" fill="#EF4444" opacity="0.8"/>
                              <circle cx="240" cy="100" r="6" fill="#DC2626" opacity="0.8"/>
                              <circle cx="280" cy="100" r="6" fill="#EF4444" opacity="0.8"/>
                            </svg>
                          </div>
                          <div className="relative z-10 flex items-center justify-center h-full">
                            <p className="text-xl text-gray-900 font-bold text-center">
                              Exploring how AI is transforming private markets and shaping investment decisions in 2025
                            </p>
                          </div>
                        </article>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Private Market Trends & AI Predictions</h3>
                        <Link href="/articles/market-trends" className="text-blue-900 hover:text-blue-700 text-xl">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}