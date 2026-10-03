import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-[#070708] py-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-800/80">

          {/* Brand & Tagline */}
          <div>
            <a
              href="#home"
              className="text-lg font-semibold tracking-tight text-white hover:text-neutral-300 transition-colors block"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {PERSONAL_INFO.name}
            </a>
            <p className="text-neutral-400 mt-1">
              {PERSONAL_INFO.role}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-neutral-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Works</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#resume" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors flex items-center justify-center cursor-pointer"
              title="Send Mail"
              aria-label="Send Mail"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span className="font-mono text-[11px] text-neutral-400">
              {PERSONAL_INFO.location} · Remote Worldwide
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors text-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};