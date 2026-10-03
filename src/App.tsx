import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectGallery } from './components/ProjectGallery';
import { TechStack } from './components/TechStack';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      // kept intentionally empty to avoid any splash initialization side-effects
    }

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <>
      <LoadingScreen isVisible={isLoading} />

      <div className="min-h-screen bg-[#0a0a0b] text-[#f4f4f5] flex flex-col font-sans selection:bg-neutral-800 selection:text-white antialiased">
        {/* Top Navigation */}
        <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with User Portrait, Bio, and Quick Proof Stats */}
        <Hero onOpenContact={scrollToContact} />

        {/* 2. About Section: Dual Discipline Story, Pillars & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <AboutSection onOpenContact={scrollToContact} />
        </motion.div>

        {/* 3. Real-Time Selected Works & Projects Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectGallery />
        </motion.div>

        {/* 4. Technical & Creative Stack */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <TechStack />
        </motion.div>

        {/* 5. Experience & Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ResumeSection onOpenContact={scrollToContact} />
        </motion.div>

        {/* 6. Functional Contact Form (FormSubmit Direct Delivery) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactSection />
        </motion.div>
      </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}


