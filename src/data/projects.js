import projectOceanview from '../assets/project-oceanview.jpg';
import projectBusinessHub from '../assets/project-business-hub.jpg';
import projectIndustrial from '../assets/project-industrial.jpg';
import projectRenovation from '../assets/project-renovation.jpg';
import galleryApartment from '../assets/gallery-apartment.jpg';
import galleryLuxuryInterior from '../assets/gallery-luxury-interior.jpg';
import gallerySteelStructure from '../assets/gallery-steel-structure.jpg';
import galleryFalseCeiling from '../assets/gallery-false-ceiling.jpg';

export const projects = [
  { 
    id: 1, 
    title: 'Oceanview Residence', 
    category: 'RESIDENTIAL', 
    slugCategory: 'residential',
    location: 'Chennai, Tamil Nadu', 
    year: '2026', 
    image: projectOceanview, 
    description: 'A luxury hillside residence with panoramic ocean views and sustainable architecture.' 
  },
  { 
    id: 2, 
    title: 'Business Hub Complex', 
    category: 'COMMERCIAL', 
    slugCategory: 'commercial',
    location: 'Bangalore, Karnataka', 
    year: '2025', 
    image: projectBusinessHub, 
    description: 'A modern commercial complex featuring an eco-friendly glass facade.' 
  },
  { 
    id: 3, 
    title: 'Manufacturing Facility', 
    category: 'INDUSTRIAL', 
    slugCategory: 'industrial',
    location: 'Coimbatore, Tamil Nadu', 
    year: '2025', 
    image: projectIndustrial, 
    description: 'Heavy industrial facility built with state-of-the-art structural steel framework.' 
  },
  { 
    id: 4, 
    title: 'Luxury Apartment Interior', 
    category: 'INTERIOR DESIGN', 
    slugCategory: 'interior',
    location: 'Mumbai, Maharashtra', 
    year: '2026', 
    image: galleryLuxuryInterior, 
    description: 'High-end interior fit-out featuring custom woodwork and Italian marble flooring.' 
  },
  { 
    id: 5, 
    title: 'Modern Home Renovation', 
    category: 'RENOVATION', 
    slugCategory: 'renovation',
    location: 'Hyderabad, Telangana', 
    year: '2024', 
    image: projectRenovation, 
    description: 'Complete architectural and interior transformation of a luxury private villa.' 
  },
  { 
    id: 6, 
    title: 'Tech Park Commercial Plaza', 
    category: 'COMMERCIAL', 
    slugCategory: 'commercial',
    location: 'Gurgaon, Haryana', 
    year: '2026', 
    image: galleryApartment, 
    description: 'Multi-story corporate headquarters with modern amenities and LEED certification.' 
  },
  { 
    id: 7, 
    title: 'Steel Structure Warehouse', 
    category: 'INDUSTRIAL', 
    slugCategory: 'industrial',
    location: 'Pune, Maharashtra', 
    year: '2025', 
    image: gallerySteelStructure, 
    description: 'Large-span pre-engineered steel structure for automated logistics storage.' 
  },
  { 
    id: 8, 
    title: 'Architectural Ceiling & Finish', 
    category: 'INTERIOR DESIGN', 
    slugCategory: 'interior',
    location: 'Delhi NCR', 
    year: '2026', 
    image: galleryFalseCeiling, 
    description: 'Custom acoustic ceiling design and integrated ambient lighting installation.' 
  },
];
