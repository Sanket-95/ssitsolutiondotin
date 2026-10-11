import { Seo, breadcrumb } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { Portfolio } from '@/sections/Portfolio';
import { CtaBand } from '@/sections/CtaBand';

export default function PortfolioPage() {
  return (
    <>
      <Seo path="/portfolio" jsonLd={[breadcrumb('Portfolio', '/portfolio')]} />
      <PageHeader
        eyebrow="Portfolio"
        title="Platforms built for public-sector and international clients"
        description="A selection of live projects demonstrating our approach to content platforms, corporate web presence and community portals."
      />
      <Portfolio />
      <CtaBand />
    </>
  );
}
