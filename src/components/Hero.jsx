import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import QuotePanel from './QuotePanel';

export default function Hero({ onExplore }) {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[750px] overflow-hidden flex items-center justify-between select-none z-10 bg-transparent">
      
      {/* ================= MAIN THREE-PART ASYMMETRIC VIEWPORT ================= */}
      <div className="relative w-full max-w-[1740px] mx-auto h-full px-6 sm:px-12 lg:px-20 xl:px-24 flex items-center justify-between z-20">

        {/* ================= LEFT COLUMN: CLEAN TYPOGRAPHY & EXPLORE CTA ================= */}
        <div className="w-full max-w-full sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[640px] flex flex-col justify-center pt-8 z-30">
          
          {/* Normalized RAIKO Display Headline (~58-64px desktop / 36px mobile) */}
          <motion.h1
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hero-headline text-3xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] leading-[0.92] tracking-tight mb-5 sm:mb-6 font-raiko"
          >
            <span className="text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              PEACE
            </span>
            <span className="text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              THROUGH
            </span>
            <span className="text-[#D00016] text-glow-crimson font-black tracking-tight">
              PERFECTION.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-sm sm:text-base lg:text-lg font-mono text-[#999999] leading-relaxed max-w-[420px] mb-7 sm:mb-9 font-normal"
          >
            Humanity's greatest creation.
            <br />
            <span className="text-[#F1F0ED]/90 font-medium">Its ultimate replacement.</span>
          </motion.p>

          {/* Single Prominent CTA: EXPLORE THE VISION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#vision"
              onClick={onExplore}
              className="group inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 border-2 border-[#D00016] bg-[#D00016]/15 text-[#F1F0ED] font-raiko text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_0_25px_rgba(208,0,22,0.35)] hover:bg-[#D00016] hover:shadow-[0_0_45px_rgba(208,0,22,0.85)] hover:text-white transition-all duration-300 hover:scale-[1.02]"
            >
              <span>EXPLORE THE VISION</span>
              <ArrowRight className="w-4 h-4 text-[#D00016] group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </motion.div>

        </div>

        {/* ================= FAR RIGHT: VERTICAL DIALOGUE PANEL ================= */}
        <div className="hidden lg:flex items-center justify-end z-30 ml-auto pl-4">
          <QuotePanel />
        </div>

      </div>

    </section>
  );
}
