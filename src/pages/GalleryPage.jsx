import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';

const GalleryPage = () => {
  return (
    <>
      <PageHeader 
        title="OUR WORK GALLERY" 
        subtitle="VISUAL SHOWCASE" 
        breadcrumb="GALLERY" 
      />
      <Gallery />
      <CTA />
    </>
  );
};

export default GalleryPage;
