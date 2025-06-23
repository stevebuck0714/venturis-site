import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 bg-gray-50 shadow-sm">
      <div className="max-w-[90rem] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <span className="text-7xl font-medium text-blue-900 lowercase pl-0">
            venturis<span className="text-2xl align-super">tm</span>
          </span>
          <span className="text-[2rem] text-black font-normal -mt-2">
            financial
          </span>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          <Link href="/solutions/investment-teams" className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Investment Teams
          </Link>
          <Link href="/solutions/front-office" className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Front Office
          </Link>
          <Link href="/solutions/secondary-market" className="text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Secondary Market
          </Link>
          <Link 
            href="/request-demo" 
            className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors font-semibold"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 