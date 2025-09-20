import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Venturis",
  description: "Privacy Policy and data protection information for Venturis Financial's services",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Venturis Financial ("we," "our," or "us") is committed to protecting the privacy and security of your personal and financial data. This Privacy Policy outlines how we collect, use, store, and protect your information in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) in the European Union and various financial privacy regulations in the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Regulatory Compliance</h2>
            <p className="text-gray-600">
              We adhere to the following regulations and standards:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>EU General Data Protection Regulation (GDPR)</li>
              <li>Gramm-Leach-Bliley Act (GLBA)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>SEC Regulation S-P (Privacy of Consumer Financial Information)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Collection and Processing</h2>
            <p className="text-gray-600">
              We collect and process the following types of information:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Professional information (company name, role, business address)</li>
              <li>Financial data (transaction records, investment portfolios, account information)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (platform interactions, preferences, settings)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-600">
              Under GDPR, we process your data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Contractual necessity for service provision</li>
              <li>Legal obligations under financial regulations</li>
              <li>Legitimate business interests</li>
              <li>Explicit consent for specific processing activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security Measures</h2>
            <p className="text-gray-600">
              We implement robust security measures including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>End-to-end encryption for data transmission</li>
              <li>Multi-factor authentication</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and monitoring</li>
              <li>Secure data centers with physical security measures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. International Data Transfers</h2>
            <p className="text-gray-600">
              For EU data transfers, we ensure compliance through:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>EU-US Data Privacy Framework compliance</li>
              <li>Data Processing Agreements with service providers</li>
              <li>Regional data storage where required</li>
            </ul>
          </section>


          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-600">
              We retain personal data for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Specific retention periods vary based on data type and regulatory requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Service Providers</h2>
            <p className="text-gray-600">
              We may share data with trusted third parties who assist us in operating our platform, conducting business, or servicing you. All third-party providers are contractually bound to protect your data with the same level of security as we do.
            </p>
          </section>


          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy periodically to reflect changes in our practices or regulatory requirements. We will notify you of any material changes and obtain consent where required by law.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 