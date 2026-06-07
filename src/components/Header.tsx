'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const gpAudienceLinks = [
  { href: '/gp-who-we-serve', label: 'GP Who We Serve' },
  { href: '/who-we-serve/private-equity', label: 'Private Equity' },
  { href: '/who-we-serve/venture-capital', label: 'Venture Capital' },
  { href: '/who-we-serve/fund-administrators', label: 'Fund Administrators' },
];

const lpAudienceLinks = [
  { href: '/lp-who-we-serve', label: 'LP Who We Serve' },
  { href: '/who-we-serve/private-banks', label: 'Private Banks' },
  { href: '/who-we-serve/family-offices', label: 'Family Offices' },
  { href: '/who-we-serve/fund-of-funds', label: 'Fund of Funds' },
  { href: '/who-we-serve/outsourced-cio', label: 'OCIOs' },
  { href: '/who-we-serve/sovereign-wealth-funds', label: 'Sovereign Wealth Funds' },
  { href: '/who-we-serve/pension-funds', label: 'Pensions, Endowments, Foundations' },
  { href: '/who-we-serve/insurance-alternative-investors', label: 'Insurance Alternative Investors' },
];

const gpInsightLinks = [
  { href: '/gp-insights', label: 'GP Insights' },
];

const lpInsightLinks = [
  { href: '/blog', label: 'LP Insights' },
  { href: '/documentation', label: 'LP Documentation' },
  { href: '/faq/portfolio-construction', label: 'Portfolio Construction FAQ' },
  { href: '/faq/commitment-pacing', label: 'Commitment Pacing FAQ' },
  { href: '/faq/ml-cash-flow-forecasting', label: 'ML Cash Flow Forecasting FAQ' },
  { href: '/solutions/venturis-vs-excel', label: 'Venturis vs Excel' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/advisory-team', label: 'Advisory Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
  { href: '/security', label: 'Security' },
];

const gpPlatformDropdownLinks = [
  { href: '/gp-who-we-serve', label: 'Who We Serve' },
  { href: '/gp-insights', label: 'Insights' },
];

const lpPlatformDropdownLinks = [
  { href: '/lp-who-we-serve', label: 'Who We Serve' },
  { href: '/blog', label: 'Insights' },
];

type NavLink = {
  href: string;
  label: string;
};

function DropdownSection({ title, links, onSelect }: { title: string; links: NavLink[]; onSelect: () => void }) {
  return (
    <div className="py-2 first:pt-0 border-t first:border-t-0 border-gray-100">
      <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
        {title}
      </div>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
          onClick={onSelect}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<'gp' | 'lp' | 'who' | 'insights' | 'company' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeDesktopMenus = () => setOpenMenu(null);
  const toggleDesktopMenu = (menu: 'gp' | 'lp' | 'who' | 'insights' | 'company') => {
    setOpenMenu((currentMenu) => (currentMenu === menu ? null : menu));
  };
  const navLinkClass = (isActive: boolean) =>
    `text-sm xl:text-base transition-colors border-b-2 pb-1 ${
      isActive
        ? 'text-blue-900 font-semibold border-blue-900'
        : 'text-gray-700 hover:text-blue-900 border-transparent'
    }`;
  const mobileNavLinkClass = (isActive: boolean) =>
    `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
      isActive ? 'text-blue-900 bg-blue-50' : 'text-gray-900 hover:bg-gray-50'
    }`;
  const isGpActive = pathname.startsWith('/solutions/gp-platform')
    || pathname.startsWith('/gp-')
    || pathname.startsWith('/private-equity-software')
    || pathname.startsWith('/fund-management')
    || pathname.startsWith('/portfolio-monitoring')
    || pathname.startsWith('/due-diligence')
    || pathname.startsWith('/liquidity-management')
    || pathname.startsWith('/fund-administration')
    || pathname.startsWith('/who-we-serve/private-equity')
    || pathname.startsWith('/who-we-serve/venture-capital')
    || pathname.startsWith('/who-we-serve/fund-administrators');
  const isLpActive = pathname.startsWith('/solutions/lp-platform')
    || pathname.startsWith('/lp-')
    || pathname.startsWith('/blog')
    || pathname.startsWith('/documentation')
    || pathname.startsWith('/faq')
    || pathname.startsWith('/solutions/investment-teams')
    || pathname.startsWith('/solutions/data-management')
    || pathname.startsWith('/solutions/venturis-vs-excel')
    || pathname.startsWith('/who-we-serve/private-banks')
    || pathname.startsWith('/who-we-serve/family-offices')
    || pathname.startsWith('/who-we-serve/fund-of-funds')
    || pathname.startsWith('/who-we-serve/outsourced-cio')
    || pathname.startsWith('/who-we-serve/sovereign-wealth-funds')
    || pathname.startsWith('/who-we-serve/pension-funds')
    || pathname.startsWith('/who-we-serve/insurance-alternative-investors');
  const isCorelyticsActive = pathname.startsWith('/corelytics');
  const isCompanyActive = pathname.startsWith('/about')
    || pathname.startsWith('/advisory-team')
    || pathname.startsWith('/contact')
    || pathname.startsWith('/careers')
    || pathname.startsWith('/security');

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between p-4 sm:p-6" aria-label="Global">
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl sm:text-3xl lg:text-5xl font-bold text-blue-900">
              Venturis<sup className="text-sm sm:text-base lg:text-xl">TM</sup>
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
          <div className="relative group">
            <Link href="/solutions/gp-platform" className={navLinkClass(isGpActive)}>
              GP Platform
            </Link>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute top-full left-0 pt-2 w-48 z-[100] transition-opacity">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                {gpPlatformDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                    onClick={closeDesktopMenus}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link href="/solutions/lp-platform" className={navLinkClass(isLpActive)}>
              LP Platform
            </Link>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute top-full left-0 pt-2 w-48 z-[100] transition-opacity">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                {lpPlatformDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                    onClick={closeDesktopMenus}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/corelytics" className={navLinkClass(isCorelyticsActive)}>
            Corelytics
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('company')}
            onMouseLeave={closeDesktopMenus}
          >
            <button
              type="button"
              className={`${navLinkClass(isCompanyActive)} flex items-center`}
              aria-expanded={openMenu === 'company'}
              onClick={() => toggleDesktopMenu('company')}
            >
              Company
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openMenu === 'company' && (
              <div className="absolute top-full left-0 pt-2 w-48 z-[100]">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                      onClick={closeDesktopMenus}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <Link href="/request-demo" className="text-sm font-semibold leading-6 text-white bg-blue-900 hover:bg-blue-800 px-4 xl:px-6 py-2 rounded-md transition-colors">
            Request a Demo
          </Link>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                    <Link href="/solutions/gp-platform" className={mobileNavLinkClass(isGpActive)} onClick={() => setIsMobileMenuOpen(false)}>
                      GP Platform
                    </Link>
                    <div className="ml-4 space-y-1">
                      {gpPlatformDropdownLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="block py-1 text-sm text-gray-600 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <Link href="/solutions/lp-platform" className={mobileNavLinkClass(isLpActive)} onClick={() => setIsMobileMenuOpen(false)}>
                      LP Platform
                    </Link>
                    <div className="ml-4 space-y-1">
                      {lpPlatformDropdownLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="block py-1 text-sm text-gray-600 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <Link href="/corelytics" className={mobileNavLinkClass(isCorelyticsActive)} onClick={() => setIsMobileMenuOpen(false)}>
                      Corelytics
                    </Link>

                    <div className="-mx-3 rounded-lg px-3 py-2">
                      <div className="text-base font-semibold leading-7 text-gray-900 mb-2">Company</div>
                      <div className="ml-4 space-y-1">
                        {companyLinks.map((link) => (
                          <Link key={link.href} href={link.href} className="block py-1 text-sm text-gray-600 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="py-6">
                    <Link href="/request-demo" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-900 hover:bg-blue-800 text-center" onClick={() => setIsMobileMenuOpen(false)}>
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
