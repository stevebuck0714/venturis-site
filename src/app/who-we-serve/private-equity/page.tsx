import GPAudiencePage from '@/components/GPAudiencePage';

export const metadata = {
  title: 'Private Equity Firms | Venturis',
  description: 'Venturis helps private equity firms manage funds, portfolio companies, diligence, liquidity, reporting, and operating performance from one platform.',
};

export default function PrivateEquityAudiencePage() {
  return (
    <GPAudiencePage
      eyebrow="GP Application"
      title="Private Equity Operating Software"
      description="Venturis gives private equity firms a connected operating platform for fund management, portfolio oversight, due diligence, liquidity, investor reporting, and portfolio company actuals."
      primaryHref="/private-equity-software"
      primaryLabel="Explore Private Equity Software"
      capabilities={[
        'Manage fund KPIs, cash flows, waterfalls, fees, governance, and investor reporting.',
        'Monitor portfolio companies across valuation, ownership, revenue, EBITDA, debt, and operating metrics.',
        'Standardize diligence, investment committee preparation, and private AI research workflows.',
        'Track liquidity exposure across cash, facilities, uncalled commitments, and borrowing capacity.',
        'Connect Corelytics financial actuals to portfolio company performance visibility.',
      ]}
    />
  );
}
