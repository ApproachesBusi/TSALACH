import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:px-12',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-brand-orange p-1.5 rounded-md group-hover:scale-110 transition-transform">
            <HardHat className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-2xl font-display font-bold leading-none tracking-tight",
              isScrolled ? "text-brand-dark" : "text-brand-dark md:text-white"
            )}>
              TSALACH
            </span>
            <span className={cn(
              "text-[10px] font-medium tracking-[0.2em] leading-none uppercase",
              isScrolled ? "text-brand-orange" : "text-brand-orange"
            )}>
              Construction
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'text-sm font-semibold uppercase tracking-wider transition-colors hover:text-brand-orange',
                isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-orange text-white px-6 py-2.5 rounded hover:bg-brand-orange/90 transition-colors text-sm font-bold uppercase tracking-tight shadow-lg shadow-brand-orange/20"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-brand-dark" />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-brand-dark" : "text-brand-dark md:text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-brand-dark uppercase tracking-wide hover:text-brand-orange"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-orange text-white text-center py-4 rounded font-bold uppercase"
              >
                Request a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
