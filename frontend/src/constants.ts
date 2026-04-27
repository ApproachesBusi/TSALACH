import { NavItem, Service, Project, Testimonial, Stat } from './types';
import image2 from './Assets/image2.jpg';
import image3 from './Assets/image3.jpg';
import image4 from './Assets/image4.jpg';
import image5 from './Assets/image5.jpg';
import image6 from './Assets/image6.jpg';
import image11a from './Assets/image11a.jpg';
import image9 from './Assets/image9.jpg';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'res-const',
    title: 'Residential Construction',
    description: 'We build custom residential homes with a focus on durability, aesthetics, and modern comfort for families.',
    icon: 'Home',
    image: image9,
  },
  {
    id: 'com-const',
    title: 'Commercial Construction',
    description: 'Professional development of office buildings, multi-purpose facilities, and large-scale commercial infrastructures.',
    icon: 'Building2',
    image: image6,
  },
  {
    id: 'renovations',
    title: 'Renovations & Remodeling',
    description: 'Breathe new life into your existing spaces with our expert remodeling services for kitchens, bathrooms, and entire floors.',
    icon: 'Wrench',
    image: image11a,
  },
  {
    id: 'proj-mgmt',
    title: 'Project Management',
    description: 'End-to-end management ensuring your construction project stays on schedule, within budget, and meets all safety standards.',
    icon: 'ClipboardList',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Repairs',
    description: 'Comprehensive general construction services and ongoing building maintenance to protect your investment.',
    icon: 'HardHat',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Skyline Plaza',
    category: 'Commercial',
    description: 'A 15-story modern office complex in the heart of the business district.',
    image: image2,
  },
  {
    id: 'p2',
    title: 'Oakwood Estates',
    category: 'Residential',
    description: 'Luxury housing development featuring 24 bespoke smart homes.',
    image: image3,
  },
  {
    id: 'p3',
    title: 'The Modern Kitchen Expansion',
    category: 'Renovation',
    description: 'Complete high-tech kitchen remodel for a historic private manor.',
    image: image4,
  },
  {
    id: 'p4',
    title: 'Bridge Industrial Park',
    category: 'Commercial',
    description: 'Construction of three major logistics warehouses with eco-friendly features.',
    image: image5,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Samuel Adeyemi',
    role: 'CEO, Horizon Logistics',
    content: 'Tsalach Construction delivered our warehouse project ahead of schedule. Their attention to structural integrity and safety is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=samuel',
  },
  {
    id: 't2',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The renovation process was seamless. They listened to our vision and executed it with incredible precision. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
];

export const STATS: Stat[] = [
  { label: 'Completed Projects', value: 150, suffix: '+' },
  { label: 'Years of Experience', value: 12, suffix: '' },
  { label: 'Dedicated Employees', value: 85, suffix: '' },
  { label: 'Awards Winning', value: 5, suffix: '' },
];
