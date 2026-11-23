import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // ScrollTrigger to dynamically track the active storytelling chapter
    const sections = [
      { id: 'hero', key: 'hero' },
      { id: 'vision', key: 'vision' },
      { id: 'evolution', key: 'evolution' },
      { id: 'humanity', key: 'humanity' },
      { id: 'perfection', key: 'perfection' },
    ];

    const triggers = sections.map(({ id, key }) => {
      return ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveSection(key),
        onEnterBack: () => setActiveSection(key),
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'THE VISION', href: 'vision', key: 'vision' },
    { label: 'EVOLUTION', href: 'evolution', key: 'evolution' },
    { label: 'HUMANITY', href: 'humanity', key: 'humanity' },
    { label: 'CONTACT', href: 'perfection', key: 'perfection' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-[#D00016]/20 py-4' 
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Brand Wordmark */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="group flex items-center gap-3"
        >
          <div className="font-raiko font-extrabold text-2xl lg:text-3xl tracking-[0.2em] text-[#F1F0ED] flex items-center select-none group-hover:text-[#D00016] transition-colors duration-200">
            <span>NEXUS</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 text-xs uppercase tracking-[0.25em] font-mono select-none">
          {navLinks.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <a
                key={item.key}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 transition-all duration-300 ${
                  isActive
                    ? 'text-[#D00016] font-bold'
                    : 'text-[#F1F0ED]/80 hover:text-[#D00016]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D00016] shadow-[0_0_12px_#D00016] rounded-full" />
                )}
              </a>
            );
          })}
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
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/96 backdrop-blur-xl border-b border-[#D00016]/30 px-6 py-6 select-none">
          <div className="flex flex-col space-y-4 text-xs tracking-[0.25em] font-mono uppercase">
            {navLinks.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <a
                  key={item.key}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-2 border-b border-white/5 transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#D00016] font-bold' : 'text-[#F1F0ED] hover:text-[#D00016]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D00016] shadow-[0_0_8px_#D00016]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}

    </header>
  );
}
