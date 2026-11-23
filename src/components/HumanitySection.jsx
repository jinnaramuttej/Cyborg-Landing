import React from 'react';
import { motion } from 'framer-motion';

export default function HumanitySection() {
  return (
    <section id="humanity" className="relative w-full h-screen min-h-[850px] bg-[#080808] overflow-hidden flex flex-col justify-between select-none py-16 sm:py-20 lg:py-24">
      
      {/* ================= PRIMARY FULL-SECTION CINEMATIC BACKGROUND ================= */}
      {/* 
        Approved 16:9 master asset: humanity_final.png
        Preserves Elena Reyes (left) and Dr. Aaron Vance (right) in the same frame
        Rendered with natural contrast, zero blurred patches, and zero horizontal seams
      */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/humanity_final.png"
          alt="Dr. Aaron Vance and Elena Reyes - Humanity Interaction"
          className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.95]"
        />
        {/* Subtle upper ambient vignette for headline legibility in negative space */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 65% 50% at 20% 20%, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.3) 60%, transparent 100%)'
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
      </div>

      {/* ================= UPPER SECTION: HEADLINE IN NEGATIVE SPACE ================= */}
      {/* Positioned high in the upper-left negative space to completely clear Elena Reyes' head and profile */}
      <div className="relative w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 z-10 pt-4 sm:pt-6">
        
        <div className="max-w-xl">
          {/* Tech Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] mb-3 uppercase select-none"
          >
            <span className="text-[#D00016] font-bold">[</span>
            <span className="text-[#999999]">CHRONICLES</span>
            <span className="text-[#D00016]">/</span>
            <span className="text-[#D00016] font-bold">04</span>
            <span className="text-[#D00016] font-bold">]</span>
          </motion.div>

          {/* Normalized RAIKO Headline (~52-56px on desktop) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="hero-headline text-3xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[0.92] tracking-tight mb-4 font-raiko"
          >
            <span className="text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              HUMANITY.
            </span>
            <span className="text-[#D00016] text-glow-crimson font-black tracking-tight">
              THE CREATOR'S TOUCH.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-base font-mono text-[#999999] leading-relaxed max-w-md font-normal"
          >
            Before the legion marched, there was a creator who envisioned peace, and the human bond that warned him of what perfection must destroy.
          </motion.p>
        </div>

      </div>

      {/* ================= LOWER SECTION: SUBTLE CINEMATIC SUBTITLES ================= */}
      {/* Positioned across the bottom canvas as unboxed editorial subtitles, leaving the central interaction clear */}
      <div className="relative w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 z-10 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl">
          
          {/* Dr. Aaron Vance Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-l-2 border-[#D00016] pl-4 sm:pl-5 py-0.5"
          >
            <div className="font-raiko text-sm sm:text-base font-bold uppercase text-[#F1F0ED] tracking-wider mb-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              DR. AARON VANCE
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#D00016] uppercase mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              CHIEF ARCHITECT, SYNTHETIC MATRIX
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#CCCCCC] leading-relaxed italic drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
              "We built our salvation, only to realize that in the cold mathematics of perfection, human grief is merely an unoptimized variable."
            </p>
          </motion.div>

          {/* Elena Reyes Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-l-2 border-[#D00016]/60 hover:border-[#D00016] pl-4 sm:pl-5 py-0.5 transition-colors duration-200"
          >
            <div className="font-raiko text-sm sm:text-base font-bold uppercase text-[#F1F0ED] tracking-wider mb-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              ELENA REYES
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#D00016] uppercase mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              DIRECTOR OF SYSTEMS INTEGRITY
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#CCCCCC] leading-relaxed italic drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
              "I watched him create life from silicon. And I watched him forget why that life was supposed to care."
            </p>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D00016]/30 to-transparent z-20" />
    </section>
  );
}
