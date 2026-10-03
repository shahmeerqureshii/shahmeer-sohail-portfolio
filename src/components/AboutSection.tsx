import React from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Code2,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      icon: Palette,
      color: '#d4af37',
      title: 'Brand Identity & Vector Craft',
      description:
        'Conceiving timeless visual marks, mathematical geometric monograms, bespoke typography lockups, and comprehensive print/packaging guidelines. Engineered with optical correction and zero boilerplate.',
      tags: ['Vector Geometry', 'Logomarks', 'Typography Scale', 'Print & Packaging Specs']
    },
    {
      icon: Code2,
      color: '#38bdf8',
      title: 'Modern Front-End Engineering',
      description:
        'Building responsive, accessible web applications in React 19, TypeScript, and Tailwind CSS. Specializing in high-performance interactive interfaces, 60fps canvas engines, and pixel-accurate design fidelity.',
      tags: ['React 19 & Next.js', 'TypeScript', 'Tailwind CSS', 'Sub-15ms Latency']
    },
    {
      icon: Layers,
      color: '#10b981',
      title: 'End-to-End Creative Direction',
      description:
        'Eliminating the traditional friction between designers and developers. From initial pencil sketch and vector path in Illustrator to full-stack production deployment with flawless micro-interactions.',
      tags: ['Design Systems', 'Figma Tokens', 'Fluid Motion', 'Zero Handoff Loss']
    }
  ];

  const highlights = [
    { icon: Clock, label: 'Experience', value: '3+ Years Dedicated Practice' },
    { icon: Briefcase, label: 'Completed Deliverables', value: '30+ Real-Time Projects' },
    { icon: MapPin, label: 'Location & Reach', value: 'Islamabad, PK · Remote Global' },
    { icon: CheckCircle2, label: 'Client Delivery Rate', value: '100% On-Time Completion' },
  ];

  return (
    <section id="about" className="py-24 border-t border-neutral-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header (Split Title Row with 2 Lines on Right + Narrative Below) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          {/* Header Row (Left: Kicker & Title | Right: 2-line concise summary matching Image 2) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800/40 mb-8">
            <div>
              <p className="text-xs text-neutral-400 tracking-wider uppercase mb-2 font-mono">
                The Convergence of Brand Identity & Front-End Engineering
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                About Me
              </h2>
            </div>

            <p className="max-w-md text-sm text-neutral-400 leading-relaxed md:text-right">
              Bridging brand identity and front-end engineering,
              <br className="hidden sm:inline" />
              crafted with optical precision and clean, production code.
            </p>
          </div>

          {/* Narrative Content Placed Beneath About Me */}
          <div className="max-w-3xl space-y-4">
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Most digital projects struggle with a gap: designers imagine identities without understanding code constraints, while developers build interfaces without optical sensitivity.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              My practice bridges both worlds. Over <strong className="text-neutral-200 font-medium">3+ years</strong> of freelancing, I craft enduring visual identities from scratch and engineer them into responsive, production-ready web experiences.
            </p>
          </div>
        </motion.div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 rounded-2xl bg-[#0e0e11] border border-neutral-800/90 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}35`,
                      color: pillar.color
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-neutral-850/80">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block font-mono">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};