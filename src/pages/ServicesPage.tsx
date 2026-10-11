import { Seo, breadcrumb, siteUrl } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { Services } from '@/sections/Services';
import { Process } from '@/sections/Process';
import { CtaBand } from '@/sections/CtaBand';
import { services } from '@/data/services';

const servicesLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SS IT Solution Skills',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'DefinedTerm',
      name: s.title,
      description: s.description,
      url: `${siteUrl}/services#${s.id}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Seo path="/services" jsonLd={[breadcrumb('Services', '/services'), servicesLd]} />
      <PageHeader
        eyebrow="Skills"
        title="Software, cloud and automation skills"
        description="Nine areas of capability covering the full lifecycle of business technology — from architecture to delivery, operations and support."
      />
      <Services />
      <Process />
      <CtaBand />
    </>
  );
}
