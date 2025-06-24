'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import SecondaryNav from './SecondaryNav';
import ClientSelector from './ClientSelector';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {!isHomePage && <SecondaryNav />}
      {!isHomePage && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <ClientSelector showDropdown={false} />
          </div>
        </div>
      )}
      <main className="flex-grow container mx-auto px-4 py-8 bg-white">
        {children}
      </main>
      <div className="w-full h-[1px] bg-black"></div>
      <Footer />
    </div>
  );
};

export default Layout; 