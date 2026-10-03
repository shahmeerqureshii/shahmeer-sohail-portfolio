import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Portfolio', href: '#projects', id: 'projects' },
    { label: 'Stack', href: '#stack', id: 'stack' },
    { label: 'Experience', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // IntersectionObserver to auto-detect active section on scroll
  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.3,
    });

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Automatically close mobile drawer on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Backdrop Overlay for Outside Taps on Mobile */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        {/* Apple-Style Glassmorphism Island with Specular Sheen */}
        <div className="pointer-events-auto w-full max-w-4xl bg-[#161618]/70 backdrop-blur-2xl border-t border-x border-b border-white/20 rounded-full px-5 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.7)] shadow-black/60 flex items-center justify-between transition-all duration-300">
          
          {/* Brand / Name Wordmark */}
          <a
            href="#home"
            className="text-sm md:text-base font-semibold tracking-tight text-white hover:text-neutral-300 transition-colors shrink-0 pl-2 drop-shadow-sm"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {PERSONAL_INFO.name}
          </a>

          {/* Center Navigation Links with Active Pill Highlight */}
          <nav className="hidden md:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-b from-white/25 to-white/10 rounded-full backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] -z-10 animate-in fade-in duration-200" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Primary Action Button with Inner Sheen */}
          <div className="hidden md:flex items-center gap-3 shrink-0 pr-1">
            <button
              type="button"
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-black bg-gradient-to-b from-white via-neutral-100 to-neutral-300 hover:to-neutral-200 rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap shadow-[0_4px_12px_rgba(255,255,255,0.25)] border border-white/40"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-full bg-black/50 border-t border-x border-white/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Floating Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-6 right-6 md:hidden bg-[#161618]/90 backdrop-blur-3xl border border-white/20 rounded-2xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 pointer-events-auto z-50">
            <nav className="flex flex-col gap-3 text-sm font-medium text-neutral-300 mb-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-xl transition-colors ${
                      isActive ? 'bg-white/15 text-white font-semibold' : 'hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-black bg-gradient-to-b from-white to-neutral-200 rounded-xl flex items-center justify-center gap-2 border border-white/40 shadow-md"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};