'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function AnimatedWords() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 relative">
      <div className={`word-animation text-6xl text-black ${activeWord === 0 ? 'active' : ''}`}>
        {'Monitoring'.split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>
      <div className={`word-animation text-6xl text-black ${activeWord === 1 ? 'active' : ''}`}>
        {'Management'.split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>
      <div className={`word-animation text-6xl text-black ${activeWord === 2 ? 'active' : ''}`}>
        {'Forecasting'.split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-16">
          <div className="text-left max-w-[80rem]">
            <h2 className="text-7xl font-light text-blue-900 mb-8 whitespace-nowrap">
              Institutional Grade Portfolio Solutions
            </h2>
            <div className="space-y-6">
              <AnimatedWords />
              <div className="mt-16">
                <div className="text-4xl font-light text-black my-16">enabling</div>
              </div>
              <div className="mt-24">
                <div className="text-6xl font-light text-blue-900">
                  A Secondary Market for Retail Investors in Alternative Investments
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-black py-24 mt-24">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="max-w-[90rem]">
              <h3 className="text-5xl font-light text-white leading-tight mb-8 whitespace-nowrap">
                Closing the liquidity gap in the retail alternatives market
              </h3>
              <p className="text-2xl font-light text-white/80 leading-relaxed">
                Our innovative platform bridges the gap between retail investors and alternative investments, providing unprecedented access and liquidity in this traditionally restricted market space.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-24">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="max-w-[90rem]">
              <div className="flex items-start gap-24">
                <div className="text-8xl font-light text-blue-900/20">
                  Solutions
                </div>
                <p className="text-2xl font-light text-black leading-relaxed">
                  Utilizing our market tested, forward looking multi-asset platform, we are delivering the first secondary market platform for private capital that solves transparency and liquidity pain points for retail clients expanding the retail market for alternative investments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-12 bg-gray-50">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="grid grid-cols-3 gap-12">
              <div className="bg-white p-12 rounded-lg shadow-sm">
                <h3 className="text-3xl font-light text-blue-900 mb-6">
                  Empowering Investment Teams
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Through our suite of analytics and data management solutions, we help sophisticated Allocators understand and manage their investments in unprecedented detail.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We support all Alternative Allocators: Family Offices, Fund of Funds, Private Banks, Large Asset Managers, Sovereign Wealth Funds, Pension Funds and OCIO's.
                  </p>
                </div>
                <Link href="/solutions/investment-teams" className="inline-block mt-8 text-blue-900 hover:text-blue-700">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="bg-white p-12 rounded-lg shadow-sm">
                <h3 className="text-3xl font-light text-blue-900 mb-6">
                  Front Office Solutions
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We provide a state of the art user interface powered by our investment data capabilities. Our solution provides the tools and interfaces for client relationship managers to work collaboratively with their clients to manage the client's alternative asset portfolio.
                  </p>
                </div>
                <Link href="/solutions/front-office" className="inline-block mt-8 text-blue-900 hover:text-blue-700">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="bg-white p-12 rounded-lg shadow-sm">
                <h3 className="text-3xl font-light text-blue-900 mb-6">
                  Enabling a Secondary Market
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our Secondary Market platform enables peer to peer transactions for Alternative Assets solving the critical issue of investor liquidity. The platform combines transparency and liquidity to retail investors serving as a catalyst to expand the market.
                  </p>
                </div>
                <Link href="/solutions/secondary-market" className="inline-block mt-8 text-blue-900 hover:text-blue-700">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-6">
            <h2 className="text-4xl font-light text-blue-900 mb-12">Latest Insights</h2>
            <div className="scroll-container">
              <div className="scroll-content">
                {/* First set of articles */}
                <div className="flex gap-10">
                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/pain-points.jpg"
                        alt="Private Asset Reporting"
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Pain Points in Private Asset Reporting</h3>
                    <Link href="/articles/private-asset-reporting" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/liquidity-solutions.jpg"
                        alt="Liquidity Solutions"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Liquidity Solutions for Private Assets</h3>
                    <Link href="/articles/liquidity-solutions" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/data-challenges.jpg"
                        alt="Data Challenges and Automation"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Data Challenges and Automation</h3>
                    <Link href="/articles/data-challenges-automation" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/neural-networks.jpg"
                        alt="Neural Networks"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Utilizing Neural Networks</h3>
                    <Link href="/articles/neural-networks" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/secondary-market.jpg"
                        alt="Secondary Market Platform"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Secondary Market Platform</h3>
                    <Link href="/articles/secondary-market-platform" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/market-trends.jpg"
                        alt="Market Trends"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Market Trends</h3>
                    <Link href="/articles/market-trends" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>
                </div>

                {/* Duplicate set for seamless scrolling */}
                <div className="flex gap-10">
                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/pain-points.jpg"
                        alt="Private Asset Reporting"
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Pain Points in Private Asset Reporting</h3>
                    <Link href="/articles/private-asset-reporting" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/liquidity-solutions.jpg"
                        alt="Liquidity Solutions"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Liquidity Solutions for Private Assets</h3>
                    <Link href="/articles/liquidity-solutions" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/data-challenges.jpg"
                        alt="Data Challenges and Automation"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Data Challenges and Automation</h3>
                    <Link href="/articles/data-challenges-automation" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/neural-networks.jpg"
                        alt="Neural Networks"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Utilizing Neural Networks</h3>
                    <Link href="/articles/neural-networks" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/secondary-market.jpg"
                        alt="Secondary Market Platform"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Secondary Market Platform</h3>
                    <Link href="/articles/secondary-market-platform" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>

                  <article className="article-box">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src="/insights/market-trends.jpg"
                        alt="Market Trends"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-blue-900 mb-4 mt-6 min-h-[4rem] break-words">Market Trends</h3>
                    <Link href="/articles/market-trends" className="text-lg text-blue-900 hover:text-blue-700">Read More →</Link>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
