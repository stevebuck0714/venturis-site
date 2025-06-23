import React from 'react';

export const metadata = {
  title: 'Request a Demo | Venturis',
  description: 'Schedule a personalized demo of our private markets technology solutions.',
};

export default function RequestDemo() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-600">
            Experience how our solutions can transform your private markets operations
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
                Areas of Interest
              </label>
              <select
                id="interests"
                name="interests"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="front-office">Front Office Solutions</option>
                <option value="investment-teams">Investment Teams</option>
                <option value="secondary-market">Secondary Market Platform</option>
                <option value="multiple">Multiple Areas</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Tell us about your specific needs or any questions you have"
              />
            </div>

            <div className="flex items-center">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="/legal/privacy" className="text-blue-600 hover:text-blue-500">
                  privacy policy
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Request Demo
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-xl font-medium text-gray-900 mb-2">1. Quick Response</div>
              <p className="text-gray-600">We'll reach out within 24 hours to schedule your demo</p>
            </div>
            <div className="p-6">
              <div className="text-xl font-medium text-gray-900 mb-2">2. Personalized Demo</div>
              <p className="text-gray-600">Tailored presentation of features relevant to your needs</p>
            </div>
            <div className="p-6">
              <div className="text-xl font-medium text-gray-900 mb-2">3. Follow-up</div>
              <p className="text-gray-600">Detailed discussion of implementation and next steps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 