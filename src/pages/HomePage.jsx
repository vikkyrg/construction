import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Process />
      <Gallery />
      <CTA />
      <Contact />
    </>
  );
};

export default HomePage;
