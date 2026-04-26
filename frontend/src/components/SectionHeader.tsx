import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, dark, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 flex flex-col",
      centered ? "items-center text-center" : "items-start text-left"
    )}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-3"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-5xl font-display font-extrabold tracking-tight max-w-2xl",
          dark ? "text-white" : "text-brand-dark"
        )}
      >
        {title}
        <span className="text-brand-orange">.</span>
      </motion.h2>
      <div className={cn(
        "h-1 w-20 bg-brand-orange mt-6",
        centered ? "mx-auto" : ""
      )} />
    </div>
  );
}
