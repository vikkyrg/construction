import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import ServiceFAQ from '../components/ServiceFAQ';

const FAQPage = () => {
  const generalFaqs = [
    { q: 'What types of construction projects do you handle?', a: 'We handle a wide range of projects including custom residential villas, commercial office towers, industrial warehouses (PEB), and luxury interior fit-outs.' },
    { q: 'Do you operate nationwide?', a: 'Currently, we focus primarily on major metropolitan areas across South and West India, with our headquarters in Chennai.' },
    { q: 'Are you licensed and insured?', a: 'Yes, Aura Constructions is fully licensed, and all our projects are comprehensively covered by contractor’s all-risk insurance policies.' },
    { q: 'Do you provide architectural design services?', a: 'We offer design-build services where we handle both architectural planning and civil execution, or we can work directly with your chosen architect.' },
    { q: 'How is pricing determined?', a: 'Pricing is based on detailed Bill of Quantities (BOQ) generated after analyzing architectural drawings and structural requirements.' }
  ];

  return (
    <div className="bg-[#F4F2ED] text-[#20201E] font-sans">
      <PageHeader 
        title="FREQUENTLY ASKED QUESTIONS" 
        subtitle="HELP & SUPPORT" 
        breadcrumb="FAQ" 
      />
      
      {/* We can re-use the ServiceFAQ component from the services pages since it has a nice UI */}
      <ServiceFAQ faqs={generalFaqs} />
      
      <CTA />
    </div>
  );
};

export default FAQPage;
