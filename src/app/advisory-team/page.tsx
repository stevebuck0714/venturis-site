import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advisory Team | Venturis',
  description: 'Meet the experienced operators available to support Venturis clients with practical judgment alongside the data.',
};

const advisors = [
  {
    initials: 'RB',
    name: 'Robin Bienemann',
    role: 'Advisor',
    specialty: 'Manufacturing, Growth-Stage Operations',
    bio: 'Entrepreneur in Residence at UConn. Has founded, scaled, and advised growth-stage companies across manufacturing and technology.',
    education: 'Springfield College, MIT Sloan School of Management',
  },
  {
    initials: 'SB',
    name: 'Steve Buck',
    role: 'Managing Partner',
    specialty: 'Enterprise Operations & Financial Systems',
    bio: 'CEO of Corelytics and architect of its strategic vision. Steve has led businesses across enterprise services, customer growth, and operational transformation - most recently at AT&T, Cordium US, and PivotData. He builds companies that scale on data, not gut feel.',
    education: 'University of Tennessee - Architecture, MBA',
  },
  {
    initials: 'KJ',
    name: 'Karen R. Jackson',
    role: 'Advisor',
    specialty: 'Technology Strategy & Digital Transformation',
    bio: 'Former Virginia Secretary of Technology. Helps leaders translate digital strategy into measurable financial and operational outcomes.',
    education: 'Christopher Newport University, William & Mary MBA',
  },
  {
    initials: 'DJ',
    name: 'Doug Jebb',
    role: 'Advisor',
    specialty: 'Startup Growth & Commercialization',
    bio: 'Started in venture capital, became an operator at Priceline, and now advises growth-stage companies on go-to-market execution.',
    education: 'Williams College, Harvard Business School',
  },
  {
    initials: 'DR',
    name: 'David Richards',
    role: 'Partner',
    specialty: 'Commercial Scaling & Enterprise Value',
    bio: 'Multi-time CEO who has built and scaled technology and healthcare companies including InfiNet, AutoNet, and Physicians Online. David has sat in the CEO chair through multiple market cycles - and knows exactly what the numbers mean when the pressure is on.',
    education: 'Williams College, UVA Darden School of Business',
  },
];

export default function AdvisoryTeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
          Advisory Team
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
          Experienced operators, not just analysts
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-6xl">
          When you want experienced judgment alongside the data, senior advisors are available - operators who&apos;ve built, scaled, and sold businesses. Advisory services are an optional add-on for teams that want experienced operators in the conversation.
        </p>
      </section>

      <section className="bg-gray-50 py-10 sm:py-12">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advisors.map((advisor) => (
              <article key={advisor.name} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-900 text-lg font-semibold text-white">
                    {advisor.initials}
                  </div>
                  <div>
                    <h2 className="text-2xl font-light text-blue-900 mb-1">{advisor.name}</h2>
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-2">{advisor.role}</p>
                    <p className="text-lg font-medium text-gray-900 mb-4">{advisor.specialty}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{advisor.bio}</p>
                    <p className="text-sm text-gray-500">{advisor.education}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
