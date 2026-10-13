import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Technologies } from '@/sections/Technologies';
import { Portfolio } from '@/sections/Portfolio';
import { Industries } from '@/sections/Industries';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Process } from '@/sections/Process';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <About />
      <Services />
      {/* Bands alternate default/raised down the page, so these two swap tones from their standalone pages. */}
      <Portfolio tone="default" />
      <Technologies tone="raised" />
      <Industries />
      <WhyChooseUs />
      <Process />
      <Contact />
    </>
  );
}
