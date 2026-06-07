import Link from 'next/link';

type GPAudiencePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  capabilities: string[];
};

export default function GPAudiencePage({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  capabilities,
}: GPAudiencePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-blue-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {description}
          </p>
          <Link href={primaryHref} className="inline-flex rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors">
            {primaryLabel}
          </Link>
        </div>

        <section className="bg-gray-50 rounded-lg p-8 sm:p-12">
          <h2 className="text-3xl font-light text-blue-900 mb-8">
            Built Around Your Operating Workflows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div key={capability} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed">{capability}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
