import GPSolutionPage from '@/components/GPSolutionPage';

export const metadata = {
  title: 'Due Diligence and Investment Committee Software | Venturis',
  description: 'Standardize deal workflows from target screening to investment committee approval.',
};

export default function DueDiligencePage() {
  return (
    <GPSolutionPage
      eyebrow="Due Diligence & Investment Committee Software"
      title="Standardize the Deal Process"
      subtitle="Move from target screening to investment committee approval with a repeatable workflow for diligence, research, data room access, and IC preparation."
      sections={[
        {
          title: 'Modules',
          description: 'Keep deal teams aligned across diligence workstreams and investment committee deliverables.',
          items: ['Diligence Workspace', 'AI Research', 'Diligence Checklists', 'IC Report Creation', 'Data Room Access'],
        },
        {
          title: 'Deal Team Workflow',
          description: 'Create a repeatable process that reduces friction as opportunities move through review.',
          items: ['Target screening', 'Research capture', 'Diligence status tracking', 'Committee materials', 'Decision history'],
        },
      ]}
      differentiator={{
        title: 'Reduce friction and accelerate decisions',
        body: 'Venturis helps deal teams standardize the work between initial review and investment committee approval so decisions are faster, better documented, and easier to repeat.',
      }}
    />
  );
}
