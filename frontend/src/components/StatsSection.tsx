import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../constants';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-display font-black text-brand-orange mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
