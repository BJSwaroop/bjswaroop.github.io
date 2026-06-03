import NoiseOverlay from '@/components/NoiseOverlay';
import ScrollProgress from '@/components/ScrollProgress';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import Hiring from '@/components/Hiring';
import Qualities from '@/components/Qualities';
import Roles from '@/components/Roles';
import Work from '@/components/Work';
import Testimonials from '@/components/Testimonials';
import Empire from '@/components/Empire';
import Systems from '@/components/Systems';
import About from '@/components/About';
import Brands from '@/components/Brands';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <ScrollProgress />
      <Nav />

      <main id="main">
        {/* Hero is sticky (z-10) and dissolves as the content below scrolls over it. */}
        <Hero />

        {/* Everything below scrolls OVER the fading hero (z-20, opaque background). */}
        <div className="relative z-20 bg-[#050505]">
          <ProofBar />
          <Hiring />
          <Qualities />
          <Roles />
          <Work />
          <Testimonials />
          <Empire />
          <Systems />
          <About />
          <Brands />
          <Speaking />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
