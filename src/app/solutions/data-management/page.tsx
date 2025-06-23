'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DataManagementPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-16">
          <h1 className="text-6xl font-light text-blue-900 mb-12">
            Data Management
          </h1>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Venturis Connex automates document collection across all of your unstructured data sources, 
                spend less time and money downloading and entering data and more time making informed decisions.
              </p>

              <h2 className="text-3xl font-light text-blue-900 mb-6">
                Collect data automatically for all your critical processes
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Connex automates the process of gathering data from all of your LP portal accounts from GP's and Fund Administrators. 
                Using MFA credentials, API's and scripts we can collect the data you need for your various use cases, such as:
              </p>
              <ul className="space-y-4 text-lg text-gray-700 mb-12">
                <li>• PCap Reports</li>
                <li>• Schedules of Portfolio Company Investments</li>
                <li>• Portfolio Company KPI's</li>
                <li>• Portfolio Company financials</li>
              </ul>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-medium text-blue-900 mb-6">
                  Connex automates Extraction & Fills in data gaps
                </h2>
                <p className="text-lg text-gray-700">
                  Create a unified and actionable data set by automatically calculating data points not contained on the PCAP.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-medium text-blue-900 mb-6">
                  Connex auto validates & cleanses data
                </h2>
                <p className="text-lg text-gray-700">
                  Our business rules engine identifies data exceptions and can alert you to the need to review.
                </p>
              </div>
            </section>

            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                Facilitate review and approval workflow while collecting a complete audit trail to ensure governance and compliance.
              </p>

              <div className="bg-gray-50 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-medium text-blue-900 mb-6">
                  Connex provides integration & reporting
                </h2>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>• Connex provides automated data feeds into downstream systems.</li>
                  <li>• Gain significant operational efficiency through exception driven processes.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-blue-900 mb-8">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-blue-900 mb-4">Scale Your Operations</h3>
                  <p className="text-gray-700">
                    Centralize operations and institutionalize your firm's process management practices. Enable users to extend current processes by editing existing workflows or create new workflows using on-screen tools.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-blue-900 mb-4">Automate Manual Tasks</h3>
                  <p className="text-gray-700">
                    The Playbook comes with an ever-expanding library of workflows tailored to the needs of Fund Managers, minimizing onboarding time and providing immediate value.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-blue-900 mb-4">Enhance Collaboration</h3>
                  <p className="text-gray-700">
                    Enhance collaboration across departments or with third-party stakeholders while connecting data, documents and comments directly to workflows.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-blue-900 mb-4">Gain Transparency</h3>
                  <p className="text-gray-700">
                    Ensure timely completion and track status via on-screen dashboards, scheduled workflows, task assignments and due date management.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-blue-900 mb-4">Increase Data Confidence</h3>
                  <p className="text-gray-700">
                    Extend workflows to leverage the full power of Connex to connect systems, validate and ensure data is complete, accurate and trustworthy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light text-blue-900 mb-8">Fund and Portfolio Company Data Import</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Investment Data Import</h3>
                  <p className="text-lg text-gray-700">
                    Venturis connects seamlessly to portfolio accounting systems and fund administrators to extract investment financial and investment attribute data ensuring accurate and timely access to all of your investments. Venturis uses API's to connect to leading portfolio accounting systems such as FIS Private Market Suite, LemonEdge, eFront and Allvue.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Portfolio Company Data Import</h3>
                  <p className="text-lg text-gray-700">
                    Venturis data lake includes API connections to leading accounting solutions such as Quickbooks, NetSuite, Dynamics, Sage and others. Through data lakes data from your portfolio companies can be automatically imported and can seamlessly update history and projection for each portfolio company. No more manual collection or data input saving time and money and reducing errors giving you instant access to update information.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Unstructured Data</h3>
                  <p className="text-lg text-gray-700">
                    With Venturis you can load any digital document through data lakes including PDF's or excel files. This data allows you to model potential investments quickly without the need to requisition financials from the target company or manually input data.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-medium text-blue-900 mb-4">Data Room Documents</h3>
                  <p className="text-lg text-gray-700">
                    All due diligence documents can be uploaded digitally to the VDR or imported and processed with Venturis Connex allowing you to query any information in real time.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-blue-900 text-white p-16 rounded-lg">
              <h2 className="text-4xl font-light mb-8">
                Ready to Transform Your Data Management?
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                Let us show you how Venturis Connex can streamline your data collection and management processes.
              </p>
              <Link href="/contact" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 