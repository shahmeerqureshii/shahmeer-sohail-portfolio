import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HERO_IMAGE_SRC = '/hero-portrait.png';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id='home' className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Hero Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111216]/90 border border-neutral-800/90 text-xs text-neutral-200 mb-8 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] font-medium tracking-wide">Available for work</span>
            </motion.div>

            {/* Main Typographic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Shahmeer Sohail
            </motion.h1>

            {/* Dual Discipline Descriptor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 mb-8"
            >
              <p className="text-xl sm:text-2xl text-neutral-200 font-light tracking-tight">
                Freelance Graphic Designer & Front-End Web Developer
              </p>
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
                Bridging the gap between timeless visual brand architecture and responsive front-end engineering. Creating bespoke brand identities, design systems, and fast, production-grade web applications. Translating abstract creative visions into cohesive, high-performing digital experiences.
              </p>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5 cursor-pointer"
              >
                <span>Explore Gallery</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-medium text-xs sm:text-sm hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Portrait Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            <div className="w-full max-w-[420px] relative">
              {/* Original Sized Tilt Card Wrapper */}
              <Tilt
                perspective={1000}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.01}
                transitionSpeed={2500}
                className="relative rounded-2xl overflow-hidden bg-[#0e0e11] border border-neutral-800/90 shadow-2xl shadow-black/80 hover:border-neutral-700/80 aspect-square select-none group cursor-pointer"
              >
                {!imageError ? (
                  <img
                    src={HERO_IMAGE_SRC}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-500 text-sm">
                    Image not available
                  </div>
                )}

                {/* Subtle dark gradient scrim at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/20 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};