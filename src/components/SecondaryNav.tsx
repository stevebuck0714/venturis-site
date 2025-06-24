'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SecondaryNav = () => {
  const pathname = usePathname();
  const navItems = [
    { label: 'Portfolio Summary', href: '/portfolio-summary' },
    { label: 'Liquidity Position', href: '/liquidity-position' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Create Offer', href: '/create-offer' },
    { label: 'Offer Status', href: '/offer-status' },
    { label: 'Messages', href: '/messages' }
  ];

  return (
    <nav className="bg-gray-100 border-b border-gray-200 hover:bg-gray-200 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          <div className="font-bold text-gray-900 text-[1.2em]" style={{ fontFamily: 'Times New Roman, serif' }}>
            Private Fund Exchange
          </div>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200
                  ${pathname === item.href 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNav; 