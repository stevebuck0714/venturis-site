export type GPSection = {
  title: string;
  description?: string;
  items: string[];
  itemColumns?: 1 | 2;
};

type GPSolutionPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
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
  sections,
  differentiator,
}: GPSolutionPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight whitespace-nowrap">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-10 sm:py-12">
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
                <ul className={section.itemColumns === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3' : 'space-y-3'}>
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
        <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="bg-blue-900 rounded-lg p-8 sm:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              {differentiator.title}
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              {differentiator.body}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
