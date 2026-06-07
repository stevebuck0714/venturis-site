import GPSolutionPage from '@/components/GPSolutionPage';

export const metadata = {
  title: 'Fund Administration Platform | Venturis',
  description: 'Fund administration built for modern PE firms, supporting accounting, reporting, cash flows, and governance.',
};

export default function FundAdministrationPage() {
  return (
    <GPSolutionPage
      eyebrow="Fund Administration Platform"
      title="Fund Administration Built for Modern PE Firms"
      subtitle="Support fund accounting, investor reporting, cash flows, waterfalls, and governance from a single platform."
      sections={[
        {
          title: 'Key Capabilities',
          description: 'Give internal and outsourced fund administration teams one operating layer for fund activity.',
          items: [
            'Fund cash flows',
            'Investor activity',
            'Capital calls',
            'Distributions',
            'Waterfalls',
            'Fee tracking',
            'Reporting',
            'Governance',
          ],
        },
        {
          title: 'Built For',
          description: 'Support the teams responsible for fund operations, reporting, and administration.',
          items: ['Internal fund accounting teams', 'Outsourced fund administrators', 'PE finance teams'],
        },
      ]}
      differentiator={{
        title: 'Administration connected to the full GP platform',
        body: 'Fund administration becomes more powerful when it is connected to fund management, reporting, liquidity, and portfolio oversight instead of isolated in a back-office system.',
      }}
    />
  );
}
