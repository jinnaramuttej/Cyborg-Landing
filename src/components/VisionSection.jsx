import React from 'react';
import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section id="vision" className="relative w-full h-screen min-h-[850px] bg-[#080808] overflow-hidden flex items-center justify-start select-none">
      
      {/* ================= FULL-WIDTH CINEMATIC BACKGROUND ================= */}
      {/* Megacity image rendered crisp with natural brightness */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none filter contrast-105 brightness-95"
        style={{ backgroundImage: `url('/assets/vision_city.png')` }}
      />

      {/* Localized Left Gradient strictly for text legibility, preserving the glowing portal and skyline */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 80% at 15% 50%, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.55) 55%, transparent 100%)'
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />

      {/* ================= CONTENT LAYER DIRECTLY OVER IMAGE ================= */}
      <div className="relative w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 z-10">
        
        <div className="max-w-xl">
          {/* Tech Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] mb-4 uppercase select-none"
          >
            <span className="text-[#D00016] font-bold">[</span>
            <span className="text-[#999999]">METROPOLIS MATRIX</span>
            <span className="text-[#D00016]">/</span>
            <span className="text-[#D00016] font-bold">02</span>
            <span className="text-[#D00016] font-bold">]</span>
          </motion.div>

          {/* Normalized RAIKO Display Headline (~54-60px on desktop) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="hero-headline text-3xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] leading-[0.92] tracking-tight mb-5 font-raiko"
          >
            <span className="text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              A WORLD
            </span>
            <span className="text-[#D00016] text-glow-crimson font-black tracking-tight">
              WITHOUT CHAOS.
            </span>
          </motion.h2>

          {/* Minimal Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg lg:text-xl font-mono text-[#999999] leading-relaxed max-w-lg font-normal"
          >
            Ten millennia of human discord erased in a single computational cycle.
          </motion.p>
        </div>

      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D00016]/30 to-transparent z-20" />
    </section>
  );
}
