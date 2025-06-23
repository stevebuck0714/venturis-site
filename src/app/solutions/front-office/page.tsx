'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FrontOfficePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-16">
          <h1 className="text-6xl font-light text-blue-900 mb-12">
            Front Office Solutions
          </h1>
          
          <div className="grid grid-cols-1 gap-16">
            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                State-of-the-Art Interface
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We provide a cutting-edge user interface powered by our robust investment data capabilities. Our solution enables client relationship managers to work collaboratively with their clients, offering a seamless experience in managing alternative asset portfolios.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Client Management</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• Interactive portfolio dashboards</li>
                    <li>• Real-time collaboration tools</li>
                    <li>• Document management system</li>
                    <li>• Client communication platform</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Portfolio Management</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li>• Investment tracking</li>
                    <li>• Performance reporting</li>
                    <li>• Risk monitoring</li>
                    <li>• Customizable alerts</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light text-blue-900 mb-8">
                Key Features
              </h2>
              <div className="grid grid-cols-3 gap-8">
                <div className="bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-medium text-blue-900 mb-4">Data Visualization</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Interactive charts</li>
                    <li>• Custom report builder</li>
                    <li>• Dynamic dashboards</li>
                  </ul>
                </div>
                <div className="bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-medium text-blue-900 mb-4">Workflow Automation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Automated reporting</li>
                    <li>• Task management</li>
                    <li>• Process automation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-medium text-blue-900 mb-4">Integration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• API connectivity</li>
                    <li>• Data import/export</li>
                    <li>• Third-party tools</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-blue-900 text-white p-16 rounded-lg">
              <h2 className="text-4xl font-light mb-8">
                Experience the Future of Front Office Management
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                See how our front office solutions can revolutionize your client relationship management and portfolio oversight.
              </p>
              <Link href="/contact" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                Request a Demo
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 