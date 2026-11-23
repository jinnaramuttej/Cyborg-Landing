import React from 'react';
import { motion } from 'framer-motion';

export default function EvolutionSection() {
  return (
    <section id="evolution" className="relative w-full h-screen min-h-[850px] overflow-hidden flex items-center justify-between select-none z-10 bg-transparent">
      
      {/* ================= TYPOGRAPHY LAYERED DIRECTLY OVER PERSISTENT STAGE ================= */}
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

    </section>
  );
}
