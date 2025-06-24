'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Who we are */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Who we are</h3>
            <ul className="space-y-2">
              <li><Link href="/group" className="text-gray-600 hover:text-gray-900">The Pictet Group</Link></li>
              <li><Link href="/history" className="text-gray-600 hover:text-gray-900">History</Link></li>
              <li><Link href="/ratings" className="text-gray-600 hover:text-gray-900">Corporate ratings</Link></li>
              <li><Link href="/partners" className="text-gray-600 hover:text-gray-900">Pictet Group Partners</Link></li>
            </ul>
          </div>

          {/* Who we serve */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Who we serve</h3>
            <ul className="space-y-2">
              <li><Link href="/institutional" className="text-gray-600 hover:text-gray-900">Institutional investors</Link></li>
              <li><Link href="/us-offshore" className="text-gray-600 hover:text-gray-900">US Offshore</Link></li>
              <li><Link href="/private-banking" className="text-gray-600 hover:text-gray-900">Private banking clients</Link></li>
            </ul>
          </div>

          {/* Responsibility */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Responsibility</h3>
            <ul className="space-y-2">
              <li><Link href="/responsible-vision" className="text-gray-600 hover:text-gray-900">Responsible vision</Link></li>
              <li><Link href="/responsible-investing" className="text-gray-600 hover:text-gray-900">Responsible investing</Link></li>
              <li><Link href="/environmental" className="text-gray-600 hover:text-gray-900">Environmental stewardship</Link></li>
              <li><Link href="/employer" className="text-gray-600 hover:text-gray-900">Responsible employer</Link></li>
              <li><Link href="/prix-pictet" className="text-gray-600 hover:text-gray-900">Prix Pictet</Link></li>
              <li><Link href="/campus" className="text-gray-600 hover:text-gray-900">Campus Pictet de Rochemont</Link></li>
            </ul>
          </div>

          {/* Corporate information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Corporate information</h3>
            <ul className="space-y-2">
              <li><Link href="/news" className="text-gray-600 hover:text-gray-900">Company news</Link></li>
              <li><Link href="/media" className="text-gray-600 hover:text-gray-900">Media relations</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-gray-900">Working at Pictet</Link></li>
              <li><Link href="/fraud-alert" className="text-gray-600 hover:text-gray-900">Fraud alert</Link></li>
              <li><Link href="/offices" className="text-gray-600 hover:text-gray-900">Offices</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contacts</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-sm text-gray-600">
            <p className="mb-4">©2025, Pictet Group</p>
            <ul className="flex flex-wrap gap-4">
              <li><Link href="/terms" className="hover:text-gray-900">Terms of use</Link></li>
              <li><Link href="/legal" className="hover:text-gray-900">Legal documents and notes</Link></li>
              <li><Link href="/cookies" className="hover:text-gray-900">Cookies policy</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-900">Privacy notice</Link></li>
              <li><Link href="/kid-complaint" className="hover:text-gray-900">KID-Complaint procedure</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 