import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920"
          alt="Construction Site"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-brand-orange" />
            <span className="text-brand-orange font-bold uppercase tracking-[0.4em] text-xs">
              Welcome to Tsalach Construction
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-extrabold text-white leading-[1] mb-8 tracking-tighter"
          >
            BUILDING YOUR <br />
            <span className="text-brand-orange">VISION</span> INTO <br />
            REALITY.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light"
          >
            Delivering excellence in residential, commercial, and industrial construction since 2012. Quality you can trust, durability you can see.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="bg-brand-orange text-white px-8 py-4 rounded font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-brand-orange/90 transition-all hover:gap-4 shadow-xl shadow-brand-orange/30 group"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-white hover:text-brand-dark transition-all"
            >
              View Our Projects
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
