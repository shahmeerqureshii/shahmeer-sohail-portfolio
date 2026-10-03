import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface LoadingScreenProps {
  isVisible: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  const letters = 'Loading...'.split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#09090b]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_60%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="loader-wrapper" aria-live="polite" aria-label="Generating portfolio">
            {letters.map((letter, index) => (
              <span key={`${letter}-${index}`} className="loader-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                {letter}
              </span>
            ))}

            <div className="loader" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};