import Link from 'next/link';

export const metadata = {
  title: 'Careers | Venturis',
  description: 'Join our team and help transform the private markets technology landscape.',
};

const jobOpenings = [
  {
    id: 'account-manager-us',
    title: 'Account Manager - US',
    location: 'United States (Remote)',
    department: 'Sales',
    type: 'Full-time',
    description: 'We are seeking a dynamic Account Manager to drive growth in the US market. You will be responsible for managing existing client relationships and identifying new business opportunities within the private markets ecosystem.',
    responsibilities: [
      'Manage and grow existing client accounts in the US market',
      'Identify and pursue new business opportunities with private equity firms, family offices, and institutional investors',
      'Develop and maintain strong relationships with key decision makers',
      'Collaborate with product and engineering teams to ensure client success',
      'Present product demonstrations and proposals to prospective clients',
      'Meet and exceed quarterly and annual sales targets'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Finance, or related field',
      '3+ years of experience in B2B sales, preferably in financial technology or private markets',
      'Strong understanding of private equity, private credit, and alternative investments',
      'Excellent communication and presentation skills',
      'Proven track record of meeting sales targets',
      'Ability to travel as needed for client meetings'
    ]
  },
  {
    id: 'account-manager-eu',
    title: 'Account Manager - EU',
    location: 'Europe (Remote)',
    department: 'Sales',
    type: 'Full-time',
    description: 'Join our expanding European team as an Account Manager focused on growing our presence across EU markets. You will work with sophisticated institutional clients to deliver cutting-edge private markets technology solutions.',
    responsibilities: [
      'Drive business development across European markets',
      'Build and maintain relationships with European institutional investors, family offices, and fund managers',
      'Understand regional regulatory requirements and market dynamics',
      'Coordinate with global teams to ensure seamless client experience',
      'Conduct product demonstrations and manage the sales cycle',
      'Provide market feedback to product development teams'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Finance, or related field',
      '3+ years of B2B sales experience in financial services or fintech',
      'Strong knowledge of European private markets landscape',
      'Fluency in English; additional European languages preferred',
      'Experience with institutional investors and alternative asset managers',
      'Willingness to travel within Europe for client meetings'
    ]
  },
  {
    id: 'director-of-sales-us',
    title: 'Director of Sales - US',
    location: 'United States (Remote/Hybrid)',
    department: 'Sales Leadership',
    type: 'Full-time',
    description: 'Lead our US sales organization as Director of Sales. This is a strategic leadership role responsible for driving revenue growth, building the sales team, and establishing Venturis as the leading technology provider in the US private markets sector.',
    responsibilities: [
      'Develop and execute comprehensive sales strategy for the US market',
      'Build, lead, and scale the US sales team',
      'Establish relationships with key industry players and strategic partners',
      'Drive revenue growth and achieve ambitious sales targets',
      'Collaborate with executive team on go-to-market strategy',
      'Represent Venturis at industry conferences and events',
      'Provide strategic input on product development and market positioning'
    ],
    requirements: [
      'Bachelor\'s degree; MBA preferred',
      '7+ years of sales leadership experience in financial technology or private markets',
      'Proven track record of building and scaling high-performing sales teams',
      'Deep network within the private equity, private credit, and institutional investor community',
      'Experience selling enterprise software solutions to sophisticated financial institutions',
      'Strong leadership, communication, and strategic thinking skills',
      'Willingness to travel extensively for business development'
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[90rem] mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-light text-blue-900 mb-8">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Help us transform the private markets technology landscape. We're building the future of alternative investment management and looking for talented professionals to join our mission.
          </p>
        </div>

        {/* Company Culture Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-light text-blue-900 mb-6">Why Venturis?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation First</h3>
              <p className="text-gray-700">Work with cutting-edge technology including AI, machine learning, and advanced analytics to solve complex financial challenges.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Impact & Growth</h3>
              <p className="text-gray-700">Join a fast-growing company where your contributions directly impact product development and client success.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Industry Leadership</h3>
              <p className="text-gray-700">Work with industry experts and top-tier clients in the private markets ecosystem.</p>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-blue-900 mb-12">Current Openings</h2>
          
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`mailto:careers@venturisfinancial.com?subject=Application for ${job.title}&body=Dear Venturis Team,%0D%0A%0D%0AI am interested in the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                    className="mt-4 lg:mt-0 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors inline-block text-center"
                  >
                    Apply Now
                  </Link>
                </div>

                <p className="text-gray-700 mb-6">{job.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-light text-blue-900 mb-6">Don't See a Perfect Fit?</h2>
          <p className="text-xl text-gray-700 mb-8">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <Link
            href="mailto:careers@venturisfinancial.com?subject=General Inquiry&body=Dear Venturis Team,%0D%0A%0D%0AI am interested in opportunities at Venturis. Please find my resume attached.%0D%0A%0D%0ABest regards"
            className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
