import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Stats from '../components/Stats';
import Process from '../components/Process';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="ABOUT OUR COMPANY" 
        subtitle="WHO WE ARE" 
        breadcrumb="ABOUT" 
      />
      <About />
      <Stats />
      <Process />
      <CTA />
    </>
  );
};

export default AboutPage;
