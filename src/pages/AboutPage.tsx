import { Seo, breadcrumb } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { About } from '@/sections/About';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Process } from '@/sections/Process';
import { CtaBand } from '@/sections/CtaBand';

export default function AboutPage() {
  return (
    <>
      <Seo path="/about" jsonLd={[breadcrumb('About', '/about')]} />
      <PageHeader
        eyebrow="About"
        title="A technology partner focused on reliable outcomes"
        description="We combine software engineering, cloud infrastructure and industrial automation expertise to help organizations operate more efficiently."
      />
      <About />
      <WhyChooseUs />
      <Process />
      <CtaBand />
    </>
  );
}
