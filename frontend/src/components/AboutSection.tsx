import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Gem, Zap } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function AboutSection() {
  const values = [
    { icon: Gem, title: 'Quality', desc: 'Superior materials and craftsmanship.' },
    { icon: Shield, title: 'Safety', desc: 'Zero-compromise safety protocols.' },
    { icon: Zap, title: 'Speed', desc: 'On-time delivery, every single time.' },
    { icon: CheckCircle2, title: 'Integrity', desc: 'Transparent pricing and honest work.' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000"
                alt="About TCC"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-brand-orange p-10 rounded-2xl shadow-2xl text-white z-20 hidden md:block">
              <div className="text-5xl font-display font-black mb-1">12+</div>
              <div className="text-xs uppercase font-bold tracking-widest leading-tight">
                Years of <br /> Engineering <br /> Excellence
              </div>
            </div>
            
            {/* Decorative background */}
            <div className="absolute -top-10 -left-10 w-full h-full border-4 border-brand-orange/20 rounded-2xl -z-0" />
          </motion.div>

          <div>
            <SectionHeader
              centered={false}
              subtitle="About TCC"
              title="We Build Structures That Last For Generations"
            />
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Tsalach Construction Company (TCC) is a premium building contractor with over a decade of experience across residential and commercial sectors. Our passion is transforming blueprints into durable, functional, and aesthetically pleasing structures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="bg-brand-orange/10 p-3 rounded-lg h-fit">
                    <value.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-500">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 p-8 bg-brand-dark rounded-2xl text-white flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-orange">
                <img src="https://i.pravatar.cc/150?u=ceo" alt="CEO" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-sm italic text-gray-300 mb-2">
                  "Our mission is to lead the construction industry through innovation, safety, and unwavering commitment to quality."
                </p>
                <div className="font-bold text-brand-orange">Engr. David Tsalach</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Managing Director / CEO</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
