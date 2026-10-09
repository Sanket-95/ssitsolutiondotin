import { Seo, breadcrumb } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { Portfolio } from '@/sections/Portfolio';
import { Testimonials } from '@/sections/Testimonials';
import { CtaBand } from '@/sections/CtaBand';

export default function PortfolioPage() {
  return (
    <>
      <Seo path="/portfolio" jsonLd={[breadcrumb('Portfolio', '/portfolio')]} />
      <PageHeader
        eyebrow="Portfolio"
        title="Platforms delivered for public-sector and international clients"
        description="A selection of live projects demonstrating our approach to content platforms, corporate web presence and community portals."
      />
      <Portfolio />
      <Testimonials />
      <CtaBand />
    </>
  );
}
