import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 border-t border-neutral-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs text-neutral-400 tracking-wider uppercase mb-2 font-mono">
              Tools, Frameworks & Standards
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Technical & Creative Stack
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Selected with uncompromising focus on design precision, developer ergonomics, and blazing client-side performance.
          </p>
        </motion.div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 bg-[#0e0e11] border border-neutral-800/90 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3
                  className="text-base font-semibold text-white mb-6 pb-3 border-b border-neutral-800 flex items-center justify-between"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span>{group.category}</span>
                  <span className="text-xs font-mono text-neutral-500 font-normal">
                    {group.skills.length} Items
                  </span>
                </h3>

                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between text-xs text-neutral-300 py-1 border-b border-neutral-850 last:border-none"
                    >
                      <span className="font-medium">{skill}</span>
                      <span className="text-[10px] text-neutral-400 font-mono">Proficient</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 text-[11px] text-neutral-400 font-mono">
                Continuous active production use
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <p className="text-sm md:text-base font-serif italic text-neutral-200">
              “Simplicity is not the lack of clutter, that's a consequence of simplicity. Simplicity somehow essentially describes the purpose and place of an object and product.”
            </p>
            <p className="text-xs text-neutral-400">
              Jonathan Ive · Core guiding principle across all design & engineering deliverables
            </p>
          </div>
          <div className="shrink-0 text-xs font-mono text-neutral-400 border border-neutral-800 px-3 py-1.5 rounded bg-neutral-950">
            TypeScript 5+ · React 19 · Figma
          </div>
        </motion.div>

      </div>
    </section>
  );
};