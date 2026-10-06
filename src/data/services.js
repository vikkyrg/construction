import { FaHome, FaCity, FaIndustry, FaHammer, FaPaintRoller, FaClipboardList } from 'react-icons/fa';

export const services = [
  { 
    id: '01', 
    slug: 'residential',
    categoryKey: 'RESIDENTIAL',
    title: 'Residential Construction', 
    shortTitle: 'Residential',
    description: 'Luxury homes, villas, and modern apartment complexes engineered for precision and comfort.', 
    icon: FaHome,
    features: [
      'Custom Architectural Design',
      'Sustainable Building Materials',
      'Smart Home Systems Integration',
      'Strict Quality & Safety Checks'
    ]
  },
  { 
    id: '02', 
    slug: 'commercial',
    categoryKey: 'COMMERCIAL',
    title: 'Commercial Construction', 
    shortTitle: 'Commercial',
    description: 'State-of-the-art office towers, retail centers, and business hubs designed for modern corporate needs.', 
    icon: FaCity,
    features: [
      'High-Rise Structural Engineering',
      'Glass & Steel Curtain Wall Facades',
      'HVAC & Energy Efficient Layouts',
      'Leed Certified Green Standards'
    ]
  },
  { 
    id: '03', 
    slug: 'industrial',
    categoryKey: 'INDUSTRIAL',
    title: 'Industrial Construction', 
    shortTitle: 'Industrial',
    description: 'Robust manufacturing plants, warehouses, and logistics hubs engineered for heavy operational scale.', 
    icon: FaIndustry,
    features: [
      'Heavy Heavy Steel Structures',
      'Reinforced Concrete Foundations',
      'Logistics & Loading Dock Layouts',
      'Industrial Safety Compliance'
    ]
  },
  { 
    id: '04', 
    slug: 'interior',
    categoryKey: 'INTERIOR DESIGN',
    title: 'Interior & Finishing', 
    shortTitle: 'Interior Design',
    description: 'Bespoke interior architecture, custom carpentry, ceiling concepts, and premium surface finishes.', 
    icon: FaPaintRoller,
    features: [
      'Custom False Ceiling & Lighting',
      'Luxury Flooring & Tile Work',
      'Modular Kitchens & Woodwork',
      '3D Space Planning & Design'
    ]
  },
  { 
    id: '05', 
    slug: 'renovation',
    categoryKey: 'RENOVATION',
    title: 'Renovation & Remodeling', 
    shortTitle: 'Renovation',
    description: 'Structural retrofitting, space optimization, and architectural transformations for existing properties.', 
    icon: FaHammer,
    features: [
      'Structural Strengthening',
      'Facade & Exterior Overhaul',
      'Plumbing & Electrical Upgrades',
      'Modern Layout Reconfiguration'
    ]
  },
  { 
    id: '06', 
    slug: 'management',
    categoryKey: 'PROJECT MANAGEMENT',
    title: 'Project Management', 
    shortTitle: 'Project Management',
    description: 'End-to-end site management, budget control, material procurement, and timeline delivery guarantees.', 
    icon: FaClipboardList,
    features: [
      'Comprehensive Cost Estimation',
      'On-site Engineering Supervision',
      'Quality Assurance & Audit',
      'On-Time Project Delivery'
    ]
  }
];
