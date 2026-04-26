/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServiceCard } from './components/ServiceCard';
import { SectionHeader } from './components/SectionHeader';
import { PortfolioSection } from './components/PortfolioSection';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SERVICES } from './constants';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Stats Banner */}
        <StatsSection />

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              subtitle="What We Offer"
              title="Expert Construction Solutions for Every Project"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index} 
                />
              ))}
              
              {/* Special CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-brand-orange rounded-xl p-12 flex flex-col justify-center items-center text-center shadow-xl shadow-brand-orange/20"
              >
                <h3 className="text-3xl font-display font-extrabold text-white mb-6">
                  Need a Custom Solution?
                </h3>
                <p className="text-white/80 mb-8 font-medium">
                  We specialize in tackling unique and complex construction challenges.
                </p>
                <a
                  href="#contact"
                  className="bg-brand-dark text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-brand-orange transition-all"
                >
                  Let's Discuss
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          className="w-6 h-6 invert" 
          alt="WhatsApp" 
        />
        <span className="absolute right-full mr-4 bg-brand-dark text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat With Us
        </span>
      </a>
    </div>
  );
}

