import { Seo, breadcrumb } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { Contact } from '@/sections/Contact';

export default function ContactPage() {
  return (
    <>
      <Seo path="/contact" jsonLd={[breadcrumb('Contact', '/contact')]} />
      <PageHeader
        eyebrow="Contact"
        title="Let’s discuss your next project"
        description="Email us your requirements and our team will respond with a recommended approach, timeline and next steps."
      />
      <Contact />
    </>
  );
}
