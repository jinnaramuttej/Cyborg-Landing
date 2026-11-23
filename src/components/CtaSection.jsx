import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="perfection" className="relative w-full h-screen min-h-[850px] bg-[#080808] overflow-hidden flex flex-col justify-between select-none">
      
      {/* Background Subtle Ambient Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[180px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D00016 0%, transparent 70%)' }}
      />

      {/* ================= STAGE 1 & 2: PANORAMIC MARCHING ARMY STAGING ================= */}
      {/* 
        - Staged in true cinematic aspect ratio across the lower-center canvas
        - 100% native resolution downscaled slightly (scale ~0.93x on 1080p, ZERO pixelation, 0% blur)
        - Every single soldier across the panoramic formation is fully visible from left to right
        - Seamless vertical smoke dissolves into #080808 void above and below
      */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 w-full flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        <div className="relative w-full max-w-[2048px] px-2 sm:px-6">
          <img
            src="/assets/robot_army_perfection.png"
            alt="NEXUS Legion of Perfection"
            className="w-full h-auto max-h-[50vh] sm:max-h-[55vh] object-contain object-bottom filter contrast-[1.12] brightness-[0.94] drop-shadow-[0_20px_60px_rgba(208,0,22,0.4)]"
          />
          {/* Subtle atmospheric edge fading to dissolve into obsidian black */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808] pointer-events-none" />
        </div>
      </div>

      {/* Top Edge Vignette */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none z-20" />

      {/* ================= STAGE 2 & 3: UPPER-CANVAS FINALE TYPOGRAPHY ================= */}
      {/* Positioned cleanly in the upper negative space, completely clearing the central robot commander */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-12 text-center z-20 w-full pt-20 sm:pt-24 lg:pt-28">
        
        {/* Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.25em] mb-3 uppercase select-none"
        >
          <span className="text-[#D00016] font-bold">[</span>
          <span className="text-[#999999]">ASCENSION</span>
          <span className="text-[#D00016]">/</span>
          <span className="text-[#D00016] font-bold">05</span>
          <span className="text-[#D00016] font-bold">]</span>
        </motion.div>

        {/* Normalized RAIKO Finale Headline (~58-64px on desktop) */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline text-3xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] leading-[0.92] tracking-tight mb-4 font-raiko"
        >
          <span className="text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            THE AGE
          </span>
          <span className="text-[#D00016] text-glow-crimson font-black tracking-tight">
            OF PERFECTION.
          </span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-mono text-sm sm:text-base lg:text-lg text-[#999999] max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed font-normal"
        >
          The biological era has concluded.
        </motion.p>

        {/* Single Prominent Finale CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#vision"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-[#D00016] bg-[#D00016]/20 text-[#F1F0ED] font-raiko text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase rounded-full shadow-[0_0_35px_rgba(208,0,22,0.5)] hover:bg-[#D00016] hover:shadow-[0_0_60px_rgba(208,0,22,0.9)] hover:text-white hover:scale-[1.03] transition-all duration-300"
          >
            <span>ENTER THE NEW WORLD</span>
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#D00016] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200" />
          </a>
        </motion.div>

      </div>

      {/* ================= CINEMATIC MINIMAL FOOTER ================= */}
      <div className="relative z-20 w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 pb-6 pt-3 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#999999] border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-raiko font-bold text-white tracking-widest text-sm">NEXUS</span>
          <span>// © 2026 ARTIFICIAL INTELLIGENCE CORP. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex items-center gap-8 mt-4 sm:mt-0 tracking-[0.2em]">
          <a href="#vision" className="hover:text-[#D00016] transition-colors">THE VISION</a>
          <a href="#evolution" className="hover:text-[#D00016] transition-colors">EVOLUTION</a>
          <a href="#humanity" className="hover:text-[#D00016] transition-colors">HUMANITY</a>
        </div>
      </div>

    </section>
  );
}
