import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - Venturis Financial',
  description: 'Get help with Venturis platform, access documentation, training resources, and contact our support team.',
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-light text-blue-900 mb-8">
            Support Center
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Get the help you need to maximize your Venturis platform experience. From quick answers 
            to comprehensive training, we're here to support your success.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Quick Help</h3>
            <p className="text-gray-600 mb-4">Find instant answers to common questions</p>
            <Link 
              href="#faq" 
              className="inline-block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              View FAQ
            </Link>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Documentation</h3>
            <p className="text-gray-600 mb-4">Comprehensive guides and tutorials</p>
            <Link 
              href="/documentation" 
              className="inline-block bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Browse Docs
            </Link>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Contact Support</h3>
            <p className="text-gray-600 mb-4">Get personalized help from our team</p>
            <Link 
              href="#contact" 
              className="inline-block bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition-colors"
            >
              Get Help
            </Link>
          </div>
        </div>

        {/* Support Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-blue-900 mb-12 text-center">
            Support Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Platform Support */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Platform Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Data Integration</h4>
                    <p className="text-gray-600">Connect your fund accounting systems and data sources</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Dashboard Configuration</h4>
                    <p className="text-gray-600">Customize your analytics and reporting views</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">User Management</h4>
                    <p className="text-gray-600">Set up roles, permissions, and access controls</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">API Integration</h4>
                    <p className="text-gray-600">Connect third-party applications and workflows</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Training & Resources */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Training & Resources</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Getting Started Guide</h4>
                    <p className="text-gray-600">Step-by-step onboarding for new users</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Comprehensive User Manual</h4>
                    <p className="text-gray-600">Detailed documentation covering all platform features</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Live Training Sessions</h4>
                    <p className="text-gray-600">Scheduled webinars and Q&A sessions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Best Practices</h4>
                    <p className="text-gray-600">Industry insights and optimization tips</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mb-16">
          <h2 className="text-4xl font-light text-blue-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I connect my fund accounting system to Venturis?</h3>
              <p className="text-gray-600">Venturis supports API integrations with leading fund accounting systems including SS&C, Northern Trust, and State Street. Our implementation team will guide you through the secure connection process, which typically takes 2-3 business days.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What data security measures does Venturis implement?</h3>
              <p className="text-gray-600">Venturis employs enterprise-grade security including SOC 2 Type II compliance, end-to-end encryption, multi-factor authentication, and role-based access controls. All data is hosted in secure, FINRA-compliant cloud infrastructure.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I customize reports and dashboards?</h3>
              <p className="text-gray-600">Yes, Venturis offers extensive customization options. You can create custom dashboards, modify report templates, set up automated reporting schedules, and configure alerts based on your specific KPIs and investor requirements.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does the AI-powered forecasting work?</h3>
              <p className="text-gray-600">Our neural network models analyze historical fund cash flows, macroeconomic indicators, and portfolio company data to generate predictive forecasts. The models continuously learn and improve accuracy over time, providing reliable projections for commitment pacing and liquidity planning.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What is the typical implementation timeline?</h3>
              <p className="text-gray-600">Implementation typically takes 4-8 weeks depending on data complexity and customization requirements. This includes data integration, user training, custom reporting setup, and comprehensive testing to ensure accuracy.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide ongoing support after implementation?</h3>
              <p className="text-gray-600">Yes, we provide comprehensive ongoing support including dedicated customer success managers, 24/7 technical support, regular system updates, and continuous optimization recommendations based on your usage patterns.</p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div id="contact" className="bg-blue-50 rounded-lg p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Need Additional Help?
            </h2>
            <p className="text-lg text-gray-700">
              Our support team is ready to assist you with any questions or issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get help via email with detailed responses</p>
              <Link 
                href="mailto:support@venturis.com" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                support@venturis.com
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Priority Support</h3>
              <p className="text-gray-600 mb-4">Enterprise clients get 24/7 priority assistance</p>
              <Link 
                href="/contact" 
                className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Standard Support</h4>
              <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM EST</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900">Enterprise Support</h4>
              <p className="text-gray-600">24/7 Priority Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
