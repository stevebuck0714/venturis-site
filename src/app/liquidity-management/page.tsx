import GPSolutionPage from '@/components/GPSolutionPage';

export const metadata = {
  title: 'Liquidity Management for Private Equity | Venturis',
  description: 'Track available capital across funds, facilities, and commitments before liquidity becomes a problem.',
};

export default function LiquidityManagementPage() {
  return (
    <GPSolutionPage
      eyebrow="Liquidity Management for Private Equity"
      title="Understand Liquidity Before It Becomes a Problem"
      subtitle="Track available capital across funds, facilities, commitments, borrowing capacity, and liquidity exposure in one operating view."
      sections={[
        {
          title: 'Track',
          description: 'Monitor the liquidity inputs that can become hidden risks when markets tighten.',
          items: [
            'Cash',
            'Subscription lines',
            'Uncalled commitments',
            'Borrowing base',
            'Facility utilization',
            'Liquidity coverage',
          ],
        },
        {
          title: 'Why PE Firms Care',
          description: 'Liquidity risk is often hidden until it becomes urgent. Venturis gives finance and investment teams visibility before issues emerge.',
          items: ['Fund-level liquidity', 'Portfolio liquidity exposure', 'Forward-looking coverage', 'Capital planning', 'Facility monitoring'],
        },
      ]}
      differentiator={{
        title: 'Visibility before pressure arrives',
        body: 'Liquidity risk is often hidden until markets tighten. Venturis provides the visibility PE firms need to see constraints, exposures, and available capacity before they become a problem.',
      }}
    />
  );
}
