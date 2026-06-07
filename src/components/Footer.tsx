import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/gp-platform" className="text-gray-300 hover:text-white">GP Platform</Link></li>
              <li><Link href="/gp-who-we-serve" className="text-gray-300 hover:text-white">GP Who We Serve</Link></li>
              <li><Link href="/private-equity-software" className="text-gray-300 hover:text-white">Private Equity Software</Link></li>
              <li><Link href="/fund-management" className="text-gray-300 hover:text-white">Fund Management</Link></li>
              <li><Link href="/portfolio-monitoring" className="text-gray-300 hover:text-white">Portfolio Monitoring</Link></li>
              <li><Link href="/solutions/lp-platform" className="text-gray-300 hover:text-white">LP Platform</Link></li>
              <li><Link href="/lp-who-we-serve" className="text-gray-300 hover:text-white">LP Who We Serve</Link></li>
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h3 className="font-semibold text-white mb-4">Insights</h3>
            <ul className="space-y-2">
              <li><Link href="/gp-insights" className="text-gray-300 hover:text-white">GP Insights</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">LP Insights</Link></li>
              <li><Link href="/documentation" className="text-gray-300 hover:text-white">LP Documentation</Link></li>
              <li><Link href="/faq/portfolio-construction" className="text-gray-300 hover:text-white">LP FAQs</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-white">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/security" className="text-gray-300 hover:text-white">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-300">© 2025 Venturis. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 