import GPSolutionPage from '@/components/GPSolutionPage';

export const metadata = {
  title: 'Portfolio Monitoring Software | Venturis',
  description: 'Monitor every portfolio company in one place, including performance, valuation, ownership, debt, and operating trends.',
};

export default function PortfolioMonitoringPage() {
  return (
    <GPSolutionPage
      eyebrow="Portfolio Monitoring Software"
      title="Monitor Every Portfolio Company in One Place"
      subtitle="See performance, valuation, ownership, debt, and operating trends across your portfolio with connected dashboards for investment and operating teams."
      sections={[
        {
          title: 'Key Features',
          description: 'Track the company-level details that drive portfolio visibility and GP decision-making.',
          items: [
            'Portfolio company dashboards',
            'Position tracking',
            'Financial projections',
            'Revenue analysis',
            'EBITDA analysis',
            'Net debt monitoring',
            'Trend analysis',
          ],
        },
        {
          title: 'Portfolio Oversight',
          description: 'Move from static quarterly views to a living view of portfolio company performance.',
          items: ['Operating metrics', 'Valuation inputs', 'Ownership tracking', 'Performance alerts', 'Cross-portfolio comparisons'],
        },
      ]}
      differentiator={{
        title: 'Beyond quarterly portfolio reporting',
        body: 'Most portfolio monitoring tools stop at quarterly reporting. Venturis extends into actual portfolio company financial performance so GPs can see what is changing while there is still time to act.',
      }}
    />
  );
}
