import PageHeader from '../components/PageHeader';
import DetailedServices from '../components/DetailedServices';
import Process from '../components/Process';
import CTA from '../components/CTA';

const ServicesPage = () => {
  return (
    <>
      <PageHeader 
        title="OUR EXPERTISE & SERVICES" 
        subtitle="WHAT WE BUILD" 
        breadcrumb="SERVICES" 
      />
      <DetailedServices />
      <Process />
      <CTA />
    </>
  );
};

export default ServicesPage;
