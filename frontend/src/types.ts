export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
