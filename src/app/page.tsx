import NoiseOverlay from '@/components/NoiseOverlay';
import ScrollProgress from '@/components/ScrollProgress';
import Nav from '@/components/Nav';
import Loader from '@/components/Loader';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import WhatIDo from '@/components/WhatIDo';
import SectionDivider from '@/components/SectionDivider';
import Hiring from '@/components/Hiring';
import Qualities from '@/components/Qualities';
import Work from '@/components/Work';
import Testimonials from '@/components/Testimonials';
import Empire from '@/components/Empire';
import Systems from '@/components/Systems';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Brands from '@/components/Brands';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Loader />
      <NoiseOverlay />
      <ScrollProgress />
      <Nav />

      <main id="main">
        {/* Hero is sticky (z-10) and dissolves as the content below scrolls over it. */}
        <Hero />

        {/* Everything below scrolls OVER the fading hero (z-20, opaque background). */}
        <div className="relative z-20 bg-[#050505]">
          <ProofBar />
          <SectionDivider />
          <WhatIDo />
          <SectionDivider />
          <Hiring />
          <SectionDivider />
          <Qualities />
          <SectionDivider />
          <Work />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <Empire />
          <SectionDivider />
          <Systems />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Timeline />
          <SectionDivider />
          <Brands />
          <SectionDivider />
          <Speaking />
          <SectionDivider />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
