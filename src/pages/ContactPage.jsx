import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <PageHeader 
        title="CONTACT OUR TEAM" 
        subtitle="GET IN TOUCH" 
        breadcrumb="CONTACT" 
      />
      <Contact />
    </>
  );
};

export default ContactPage;
