import GPAudiencePage from '@/components/GPAudiencePage';

export const metadata = {
  title: 'Venture Capital Firms | Venturis',
  description: 'Venturis supports venture capital firms with fund management, company monitoring, diligence, liquidity, reporting, and investment intelligence workflows.',
};

export default function VentureCapitalAudiencePage() {
  return (
    <GPAudiencePage
      eyebrow="GP Application"
      title="Operating Software for Venture Capital Firms"
      description="Venture capital firms need the same connected GP operating model as private equity, adapted for earlier-stage companies, follow-on decisions, investor reporting, and portfolio company performance visibility."
      primaryHref="/solutions/gp-platform"
      primaryLabel="Explore the GP Platform"
      capabilities={[
        'Track fund performance, capital activity, investor reporting, and governance in one workspace.',
        'Monitor portfolio companies, ownership, valuation changes, operating KPIs, and follow-on exposure.',
        'Use private AI research to support market analysis, company screening, and investment committee work.',
        'Centralize diligence checklists, research, data room access, and decision history.',
        'Give investment teams and finance teams a shared operating view across funds and companies.',
      ]}
    />
  );
}
