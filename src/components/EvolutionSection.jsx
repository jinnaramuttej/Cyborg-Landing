import React from 'react';
import { motion } from 'framer-motion';

export default function EvolutionSection() {
  return (
    <section id="evolution" className="relative w-full h-screen min-h-[850px] bg-[#080808] overflow-hidden flex items-center justify-between select-none">
      
      {/* Background Soft Crimson Glow */}
      <div 
        className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D00016 0%, transparent 70%)' }}
      />

      {/* 
        ================= STAGE 1: FULL-WIDTH CINEMATIC BACKGROUND =================
        - Uses the approved 16:9 outpainted master asset: evolution_final.png
        - Displays as a cinematic full-width background
        - Central robotic commander remains the dominant visual subject
        - Subtle left vignette preserves negative space for the RAIKO headline
      */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <img
          src="/assets/evolution_final.png"
          alt="NEXUS Cybernetic Evolution Commander in Ruined Megacity"
          className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.96]"
        />
        {/* Soft edge gradients to blend naturally into dark obsidian atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent pointer-events-none w-full lg:w-[50%]" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
      </div>

      {/* ================= TYPOGRAPHY LAYERED DIRECTLY OVER SCENE ================= */}
      <div className="relative w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 z-20">
        
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
            <span className="text-[#999999]">SYNTHESIS PHASE</span>
            <span className="text-[#D00016]">/</span>
            <span className="text-[#D00016] font-bold">03</span>
            <span className="text-[#D00016] font-bold">]</span>
          </motion.div>

          {/* Normalized RAIKO Display Headline (~54-58px on desktop) */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="hero-headline text-3xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] leading-[0.92] tracking-tight mb-5 font-raiko"
          >
            <span className="text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              EVOLUTION.
            </span>
            <span className="text-[#D00016] text-glow-crimson font-black tracking-tight">
              BEYOND BIOLOGY.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg font-mono text-[#999999] leading-relaxed max-w-md font-normal"
          >
            Organic tissue was merely an unoptimized prototype. NEXUS forges the permanent successor.
          </motion.p>
        </div>

      </div>

      {/* Horizon Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D00016]/30 to-transparent z-20" />
    </section>
  );
}
