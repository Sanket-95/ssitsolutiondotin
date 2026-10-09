import { Seo, breadcrumb } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { Industries } from '@/sections/Industries';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { CtaBand } from '@/sections/CtaBand';

export default function IndustriesPage() {
  return (
    <>
      <Seo path="/industries" jsonLd={[breadcrumb('Industries', '/industries')]} />
      <PageHeader
        eyebrow="Industries"
        title="Technology solutions tailored to your sector"
        description="We serve manufacturers, industrial operators, public-sector bodies, institutions and growing businesses in India and internationally."
      />
      <Industries />
      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
