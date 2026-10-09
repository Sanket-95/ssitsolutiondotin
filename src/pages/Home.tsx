import { Seo } from '@/components/seo/Seo';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Technologies } from '@/sections/Technologies';
import { Portfolio } from '@/sections/Portfolio';
import { Industries } from '@/sections/Industries';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Process } from '@/sections/Process';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Industries />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
