import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';

import ServiceHero from '../components/ServiceHero';
import ServiceIntro from '../components/ServiceIntro';
import ServiceCapabilities from '../components/ServiceCapabilities';
import ServiceProcess from '../components/ServiceProcess';
import RelatedProjects from '../components/RelatedProjects';
import ServiceWhyChooseUs from '../components/ServiceWhyChooseUs';
import ServiceFAQ from '../components/ServiceFAQ';
import ServiceNavigation from '../components/ServiceNavigation';
import ServiceCTA from '../components/ServiceCTA';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const data = servicesData[serviceSlug];

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  return (
    <motion.div 
      key={serviceSlug}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="font-sans bg-[#F4F2ED] text-[#20201E]"
    >
      <ServiceHero data={data} />
      <ServiceIntro data={data} />
      <ServiceCapabilities capabilities={data.capabilities} />
      <ServiceProcess process={data.process} />
      <RelatedProjects projects={data.relatedProjects} />
      <ServiceWhyChooseUs title={data.title} points={data.whyChooseUs} />
      <ServiceFAQ faqs={data.faqs} />
      <ServiceNavigation prevService={data.prevService} nextService={data.nextService} />
      <ServiceCTA serviceTitle={data.title} />
    </motion.div>
  );
};

export default ServiceDetail;
