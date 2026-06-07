import GPAudiencePage from '@/components/GPAudiencePage';

export const metadata = {
  title: 'Fund Administrators | Venturis',
  description: 'Venturis helps fund administrators support fund accounting, investor reporting, cash flows, waterfalls, operations, and governance from one platform.',
};

export default function FundAdministratorsAudiencePage() {
  return (
    <GPAudiencePage
      eyebrow="GP Application"
      title="Fund Administration Workflows for Modern Private Markets"
      description="Venturis supports internal and outsourced fund administrators with fund accounting, investor activity, cash flows, waterfalls, reporting, and operational governance."
      primaryHref="/fund-administration"
      primaryLabel="Explore Fund Administration"
      capabilities={[
        'Support fund cash flows, capital calls, distributions, fees, waterfalls, and investor activity.',
        'Coordinate fund operations, reporting packages, governance, and recurring administration workflows.',
        'Give fund accounting teams and PE finance teams a shared source of truth.',
        'Connect fund administration activity to broader GP platform workflows.',
        'Reduce spreadsheet-driven reconciliation across reporting, cash flows, and governance.',
      ]}
    />
  );
}
