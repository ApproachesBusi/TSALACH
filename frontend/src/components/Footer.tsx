import React from 'react';
import { HardHat, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-orange p-1.5 rounded-md">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold leading-none tracking-tight">TSALACH</span>
                <span className="text-[10px] font-medium tracking-[0.2em] leading-none uppercase text-brand-orange">Construction</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Delivering high-quality workmanship, reliability, and on-time project completion. Professional construction services for modern needs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 flex items-center gap-2">
              Quick Links
              <div className="h-[2px] w-8 bg-brand-orange" />
            </h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 flex items-center gap-2">
              Our Services
              <div className="h-[2px] w-8 bg-brand-orange" />
            </h4>
            <ul className="space-y-4">
              {[
                'Residential Construction',
                'Commercial Construction',
                'Interior Renovation',
                'Project Management',
                'Building Maintenance',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 flex items-center gap-2">
              Get in Touch
              <div className="h-[2px] w-8 bg-brand-orange" />
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p>📍 123 Construction Way, Industrial Park, Lagos, Nigeria</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@tsalachgroup.com</p>
              <p>⏰ Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          <p>© {new Date().getFullYear()} Tsalach Construction Company (TCC). All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-orange">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
