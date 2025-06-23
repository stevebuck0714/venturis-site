import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Venturis",
  description: "Terms of Service and conditions for using Venturis Financial's services and platform",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing or using Venturis Financial's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-600">
              Venturis Financial provides financial technology solutions for investment management, including but not limited to portfolio management, risk assessment, and market analysis tools. Our services are designed for professional use by qualified financial institutions and investment professionals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600">
              Users are responsible for:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Maintaining the confidentiality of their account credentials</li>
              <li>Ensuring all information provided is accurate and up-to-date</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Using the services in accordance with these terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Privacy and Security</h2>
            <p className="text-gray-600">
              We are committed to protecting your data and privacy. Our services comply with relevant data protection regulations, including GDPR and other applicable privacy laws. For detailed information about how we handle your data, please refer to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Venturis Financial and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              Venturis Financial shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. This includes but is not limited to loss of profits, data, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify, suspend, or discontinue any part of our services at any time. We will provide reasonable notice of any material changes to the services or these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Venturis Financial operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-2 text-gray-600">
              <p>Venturis Financial</p>
              <p>Email: legal@venturisfinancial.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 