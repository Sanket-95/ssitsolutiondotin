import { Seo, breadcrumb } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { Technologies } from '@/sections/Technologies';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { CtaBand } from '@/sections/CtaBand';

export default function TechnologiesPage() {
  return (
    <>
      <Seo path="/technologies" jsonLd={[breadcrumb('Technologies', '/technologies')]} />
      <PageHeader
        eyebrow="Technologies"
        title="Mature technologies, engineered for longevity"
        description="Our teams work across modern frontend frameworks, backend runtimes, enterprise databases, container platforms and observability tooling."
      />
      <Technologies />
      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
