import { Seo, breadcrumb, siteUrl } from '@/components/seo/Seo';
import { PageHeader } from '@/sections/PageHeader';
import { Services } from '@/sections/Services';
import { Process } from '@/sections/Process';
import { CtaBand } from '@/sections/CtaBand';
import { services } from '@/data/services';

const servicesLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SS IT Solution Services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.description,
      url: `${siteUrl}/services#${s.id}`,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: 'Worldwide',
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Seo path="/services" jsonLd={[breadcrumb('Services', '/services'), servicesLd]} />
      <PageHeader
        eyebrow="Services"
        title="Software, cloud and automation services for the enterprise"
        description="Nine integrated practices that cover the full lifecycle of business technology — from strategy and architecture to delivery, operations and support."
      />
      <Services />
      <Process />
      <CtaBand />
    </>
  );
}
