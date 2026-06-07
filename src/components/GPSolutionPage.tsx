import Link from 'next/link';

export type GPSection = {
  title: string;
  description?: string;
  items: string[];
};

type GPSolutionPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta?: string;
  secondaryCta?: string;
  sections: GPSection[];
  differentiator?: {
    title: string;
    body: string;
  };
};

export default function GPSolutionPage({
  eyebrow,
  title,
  subtitle,
  primaryCta = 'Schedule Demo',
  secondaryCta = 'Watch Platform Tour',
  sections,
  differentiator,
}: GPSolutionPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8 max-w-4xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-demo" className="inline-flex justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors">
              {primaryCta}
            </Link>
            <Link href="/contact" className="inline-flex justify-center rounded-md border border-blue-900 px-6 py-3 text-base font-semibold text-blue-900 hover:bg-blue-50 transition-colors">
              {secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-light text-blue-900 mb-4">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {section.description}
                  </p>
                )}
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {differentiator && (
        <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="bg-blue-900 rounded-lg p-8 sm:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              {differentiator.title}
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-5xl">
              {differentiator.body}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
