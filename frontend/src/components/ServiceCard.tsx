import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  key?: string | number;
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = (Icons as any)[service.icon] || Icons.Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white overflow-hidden border border-gray-100 hover:border-brand-orange/30 transition-all duration-500 shadow-sm hover:shadow-xl rounded-xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8 relative">
        <div className="absolute -top-10 right-8 bg-brand-orange p-4 rounded-lg shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-display font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-brand-orange group-hover:gap-3 transition-all"
        >
          Learn More
          <Icons.ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
