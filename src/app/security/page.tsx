'use client';

import Image from 'next/image';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-blue-900 mb-8">Security & Infrastructure</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-blue-900 mb-6">Global Infrastructure</h2>
            <p className="text-gray-600 mb-6">
              Venturis leverages Microsoft Azure's enterprise-grade cloud platform to deliver secure, scalable, and reliable services worldwide. Our infrastructure is distributed across multiple Azure regions, ensuring:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8">
              <li>High availability and disaster recovery</li>
              <li>Data residency compliance</li>
              <li>Low-latency access for global clients</li>
              <li>Automatic scaling and load balancing</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-medium text-blue-900 mb-6">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement multiple layers of security to protect your sensitive financial data:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8">
              <li>End-to-end encryption for all data in transit and at rest</li>
              <li>Multi-factor authentication (MFA) for all user accounts</li>
              <li>Regular security audits and penetration testing</li>
              <li>Automated threat detection and prevention</li>
              <li>Regular backup and disaster recovery testing</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-medium text-blue-900 mb-6">Compliance & Certifications</h2>
            <p className="text-gray-600 mb-6">
              Our platform adheres to international security standards and regulations:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8">
              <li>SOC 2 Type II certified</li>
              <li>ISO 27001 compliant</li>
              <li>GDPR compliant</li>
              <li>Regular third-party security assessments</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-medium text-blue-900 mb-6">Access Control</h2>
            <p className="text-gray-600 mb-6">
              We implement strict access controls to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8">
              <li>Role-based access control (RBAC)</li>
              <li>IP whitelisting capabilities</li>
              <li>Detailed audit logging</li>
              <li>Session management and automatic timeouts</li>
              <li>Regular access reviews and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-blue-900 mb-6">Security Contact</h2>
            <p className="text-gray-600 mb-6">
              For security-related inquiries or to report potential vulnerabilities, please contact our security team:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-medium">Email: security@venturisfinancial.com</p>
              <p className="text-gray-600 mt-2">Response time: Within 24 hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 