import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-[#D00016]/20 py-4' 
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Brand Wordmark */}
        <a href="#" className="group flex items-center gap-3">
          <div className="font-raiko font-extrabold text-2xl lg:text-3xl tracking-[0.2em] text-[#F1F0ED] flex items-center select-none">
            <span>NEXUS</span>
          </div>
        </a>

        {/* Desktop Navigation (Hidden on Mobile < 768px to prevent collision) */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 text-xs uppercase tracking-[0.25em] font-mono text-[#F1F0ED]/90">
          <a href="#vision" className="hover:text-[#D00016] transition-colors duration-200">
            THE VISION
          </a>
          <a href="#evolution" className="hover:text-[#D00016] transition-colors duration-200">
            EVOLUTION
          </a>
          <a href="#humanity" className="hover:text-[#D00016] transition-colors duration-200">
            HUMANITY
          </a>
          <a href="#perfection" className="hover:text-[#D00016] transition-colors duration-200">
            CONTACT
          </a>
        </nav>

        {/* Minimal Mobile Navigation Trigger (< 768px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[11px] font-mono tracking-widest text-[#D00016] uppercase border border-[#D00016]/40 px-3 py-1.5 rounded-sm bg-[#D00016]/10 hover:bg-[#D00016] hover:text-white transition-all"
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#080808]/96 backdrop-blur-xl border-b border-[#D00016]/30 px-6 py-6"
          >
            <div className="flex flex-col space-y-4 text-xs tracking-[0.25em] font-mono uppercase text-[#F1F0ED]">
              <a 
                href="#vision" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#D00016] transition-colors py-1 border-b border-white/5"
              >
                THE VISION
              </a>
              <a 
                href="#evolution" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#D00016] transition-colors py-1 border-b border-white/5"
              >
                EVOLUTION
              </a>
              <a 
                href="#humanity" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#D00016] transition-colors py-1 border-b border-white/5"
              >
                HUMANITY
              </a>
              <a 
                href="#perfection" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#D00016] transition-colors py-1"
              >
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
