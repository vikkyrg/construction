import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';
import CTA from '../components/CTA';

const ProjectsPage = () => {
  return (
    <>
      <PageHeader 
        title="OUR FEATURED PROJECTS" 
        subtitle="PORTFOLIO & WORK" 
        breadcrumb="PROJECTS" 
      />
      <Projects />
      <CTA />
    </>
  );
};

export default ProjectsPage;
