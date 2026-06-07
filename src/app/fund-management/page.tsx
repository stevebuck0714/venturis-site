import GPSolutionPage from '@/components/GPSolutionPage';

export const metadata = {
  title: 'Fund Management Software for Private Equity | Venturis',
  description: 'Modern fund management software for PE firms moving beyond spreadsheets and disconnected reporting.',
};

export default function FundManagementPage() {
  return (
    <GPSolutionPage
      eyebrow="Fund Management Software"
      title="Modern Fund Management for PE Firms"
      subtitle="Move beyond spreadsheets and disconnected reporting with a single workspace for fund operations, investor reporting, and performance oversight."
      sections={[
        {
          title: 'Key Features',
          description: 'Manage the operational details that connect fund performance, capital activity, and investor communication.',
          items: [
            'Fund summaries',
            'Fund KPIs',
            'Cash flow tracking',
            'Capital activity',
            'Fee administration',
            'Waterfall calculations',
            'Governance tracking',
            'LP reporting',
          ],
        },
        {
          title: 'Built for PE Finance Teams',
          description: 'Give CFOs, COOs, fund accounting teams, and fund administrators a shared source of truth.',
          items: ['Investor activity', 'Capital calls', 'Distributions', 'Reporting packages', 'Operational governance'],
        },
      ]}
      differentiator={{
        title: 'A single workspace for fund operations',
        body: 'Venturis brings fund operations, investor reporting, and performance oversight into one platform so GP teams can work from the same data instead of reconciling disconnected systems.',
      }}
    />
  );
}
