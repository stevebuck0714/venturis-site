'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-16 mt-24">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h4 className="text-xl font-medium text-blue-900 mb-6">Company</h4>
            <div className="space-y-4">
              <Link href="/about" className="block text-gray-600 hover:text-blue-900">About Us</Link>
              <Link href="/careers" className="block text-gray-600 hover:text-blue-900">Careers</Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-900">Contact</Link>
              <Link href="/press" className="block text-gray-600 hover:text-blue-900">Press</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium text-blue-900 mb-6">Solutions</h4>
            <div className="space-y-4">
              <Link href="/solutions/investment-teams" className="block text-gray-600 hover:text-blue-900">Investment Teams</Link>
              <Link href="/solutions/front-office" className="block text-gray-600 hover:text-blue-900">Front Office</Link>
              <Link href="/solutions/secondary-market" className="block text-gray-600 hover:text-blue-900">Secondary Market</Link>
              <Link href="/platform" className="block text-gray-600 hover:text-blue-900">Platform</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium text-blue-900 mb-6">Resources</h4>
            <div className="space-y-4">
              <Link href="/blog" className="block text-gray-600 hover:text-blue-900">Blog</Link>
              <Link href="/insights" className="block text-gray-600 hover:text-blue-900">Insights</Link>
              <Link href="/documentation" className="block text-gray-600 hover:text-blue-900">Documentation</Link>
              <Link href="/support" className="block text-gray-600 hover:text-blue-900">Support</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium text-blue-900 mb-6">Legal</h4>
            <div className="space-y-4">
              <Link href="/legal/privacy" className="block text-gray-600 hover:text-blue-900">Privacy Policy</Link>
              <Link href="/legal/terms" className="block text-gray-600 hover:text-blue-900">Terms of Service</Link>
              <Link href="/security" className="block text-gray-600 hover:text-blue-900">Security</Link>
              <Link href="/compliance" className="block text-gray-600 hover:text-blue-900">Compliance</Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Venturis. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="https://twitter.com" className="text-gray-500 hover:text-blue-900">Twitter</Link>
              <Link href="https://linkedin.com" className="text-gray-500 hover:text-blue-900">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 