import { Seo, breadcrumb } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { Contact } from '@/sections/Contact';

export default function ContactPage() {
  return (
    <>
      <Seo path="/contact" jsonLd={[breadcrumb('Contact', '/contact')]} />
      <PageHeader
        eyebrow="Contact"
        title="Let's connect"
        description="For job opportunities, collaborations, or questions about anything in this portfolio — send a message and we'll get back to you."
      />
      <Contact />
    </>
  );
}
