import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { PROJECTS } from '../constants';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function PortfolioSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Our Portfolio"
          title="Exceptional Projects We've Completed"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 max-w-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest border-b border-brand-orange pb-1 hover:text-brand-orange transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-display font-bold text-xl text-brand-dark hover:text-brand-orange transition-all hover:gap-5"
          >
            Have a project in mind? Let's discuss it
            <ArrowRight className="w-6 h-6 text-brand-orange" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
