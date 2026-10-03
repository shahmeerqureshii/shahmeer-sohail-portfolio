import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenContact: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="resume" className="py-24 border-t border-neutral-800/80 scroll-mt-16">
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
              Curriculum Vitae · Career Track
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Experience & Resume
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PERSONAL_INFO.location} · Remote Worldwide</span>
          </div>
        </motion.div>

        {/* 2-Column Main Layout: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs text-neutral-400 font-mono uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-neutral-400" />
              <span>Work Experience</span>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-px before:bg-neutral-800/80">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={`${exp.company}-${idx}`} // Unique composite key
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-[#0a0a0b] border-2 border-neutral-600 group-hover:border-white transition-colors" />

                  <div className="p-6 rounded-2xl bg-[#0e0e11] border border-neutral-800/90 hover:border-neutral-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3
                        className="text-lg font-semibold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800 self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-neutral-400 mb-4 font-mono">
                      <span className="text-neutral-300 font-medium">{exp.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-500" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-850">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={`${tech}-${techIdx}`} // Unique key for badges too
                          className="text-[11px] px-2.5 py-1 rounded bg-neutral-900/90 text-neutral-400 border border-neutral-800 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education, Availability & Core Competencies (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-8"
          >

            {/* Education Card */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs text-neutral-400 font-mono uppercase tracking-wider mb-6">
                <GraduationCap className="w-4 h-4 text-neutral-400" />
                <span>Education</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#0e0e11] border border-neutral-800/90">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">
                    Oct 17, 2024 — Present
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">In Progress</span>
                </div>
                <h4
                  className="text-base font-semibold text-white mt-2 mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  BBA-IT (Bachelor of Business Administration in Information Technology)
                </h4>
                <p className="text-xs text-neutral-400 font-mono mb-3">Islamabad, PK</p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Integrating modern business administration, product strategy, IT systems management, enterprise front-end technologies, and digital visual communication.
                </p>
              </div>
            </div>

            {/* Certifications & Recognition */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs text-neutral-400 font-mono uppercase tracking-wider mb-6">
                <Award className="w-4 h-4 text-neutral-400" />
                <span>Selected Honors</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#0e0e11] border border-neutral-850">
                  <div className="flex items-center justify-between text-xs text-white font-medium mb-1">
                    <span>Excellence in Brand Identity Architecture</span>
                    <span className="text-neutral-500 font-mono text-[10px]">2025</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Awarded for mastery in vector-based brand identity design, packaging typography, and scalable design systems.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0e0e11] border border-neutral-850">
                  <div className="flex items-center justify-between text-xs text-white font-medium mb-1">
                    <span>Front-End UI/UX Innovation Honor</span>
                    <span className="text-neutral-500 font-mono text-[10px]">2026</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Recognized for exceptional achievement in building high-performance, accessible web applications using React and Tailwind.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Hire Callout */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 text-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Freelance</span>
              </div>
              <h4
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Need design + code?
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                Ready to collaborate on brand identities, web applications, or custom front-end builds. Based in Islamabad, PK & available remote worldwide.
              </p>
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full py-2.5 px-4 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors font-sans flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/5"
              >
                <span>Hire Shahmeer</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};