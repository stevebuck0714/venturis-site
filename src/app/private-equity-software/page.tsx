import GPSolutionPage from '@/components/GPSolutionPage';

export const metadata = {
  title: 'Private Equity Operating Platform | Venturis',
  description: 'Run your entire private equity firm from one platform, from acquisition through exit.',
};

export default function PrivateEquitySoftwarePage() {
  return (
    <GPSolutionPage
      eyebrow="Private Equity Operating Platform"
      title="Run Your Entire Firm from One Platform"
      subtitle="From acquisition through exit, Venturis connects fund management, portfolio oversight, due diligence, liquidity, investment intelligence, and portfolio company actuals."
      sections={[
        {
          title: 'Fund Management',
          description: 'Operate funds, investors, governance, and economics from a connected GP workspace.',
          items: ['Fund KPIs', 'Fund Cash Flows', 'Waterfalls', 'Investors', 'Governance', 'Fees'],
        },
        {
          title: 'Portfolio Oversight',
          description: 'Give investment and operating teams a consistent view of company performance.',
          items: ['Portfolio company dashboards', 'EBITDA monitoring', 'Revenue trends', 'Net debt analysis', 'Ownership tracking'],
        },
        {
          title: 'Investment Intelligence',
          description: 'Bring private AI into research, market analysis, and investment committee workflows.',
          items: ['Private AI', 'Company research', 'Competitor analysis', 'IC support'],
        },
        {
          title: 'Portfolio Company Actuals',
          description: 'Use Corelytics to connect financial health, actuals, KPIs, and accounting data to portfolio oversight.',
          items: ['Financial health', 'Actuals', 'KPI monitoring', 'Accounting integrations'],
        },
      ]}
      differentiator={{
        title: 'One operating layer for the GP lifecycle',
        body: 'Venturis replaces the stitched-together stack of fund systems, spreadsheets, data rooms, shared drives, and portfolio monitoring tools with a single private equity operating platform.',
      }}
    />
  );
}
