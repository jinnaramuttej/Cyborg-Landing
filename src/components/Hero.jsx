import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import QuotePanel from './QuotePanel';

export default function Hero({ onExplore }) {
  return (
    <section className="relative w-full h-screen min-h-[750px] bg-[#080808] overflow-hidden flex items-center justify-between select-none">
      
      {/* ================= LAYER 1 — ENVIRONMENT & BACKGROUND ================= */}
      {/* Atmospheric Red Fog / Glow behind character */}
      <div 
        className="absolute right-[10%] lg:right-[18%] top-[45%] -translate-y-1/2 w-[450px] sm:w-[600px] lg:w-[750px] h-[450px] sm:h-[600px] lg:h-[750px] rounded-full pointer-events-none filter blur-[100px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #D00016 0%, rgba(140,0,16,0.4) 45%, transparent 70%)'
        }}
      />

      {/* Luminous Red Energy Ring / Halo behind character */}
      <div 
        className="absolute right-[8%] sm:right-[14%] lg:right-[18%] xl:right-[20%] top-[43%] -translate-y-1/2 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-[300px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-full pointer-events-none z-10"
        style={{
          border: '1.5px solid rgba(208, 0, 22, 0.45)',
          boxShadow: '0 0 35px rgba(208, 0, 22, 0.35), inset 0 0 25px rgba(208, 0, 22, 0.15)',
          background: 'radial-gradient(circle, rgba(208,0,22,0.08) 0%, rgba(208,0,22,0.01) 60%, transparent 80%)'
        }}
      />

      {/* Atmospheric Cyber City Skyline Silhouette at Bottom Right */}
      <div 
        className="absolute right-0 bottom-0 w-full lg:w-[65%] h-[45%] pointer-events-none z-10 opacity-35 mix-blend-screen bg-cover bg-bottom"
        style={{
          backgroundImage: `url('/assets/vision_city.png')`,
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Subtle Black Edge Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/40 to-transparent pointer-events-none z-10" />

      {/* ================= MAIN THREE-PART ASYMMETRIC VIEWPORT ================= */}
      <div className="relative w-full max-w-[1740px] mx-auto h-full px-6 sm:px-12 lg:px-20 xl:px-24 flex items-center justify-between z-20">

        {/* ================= LEFT COLUMN: CLEAN TYPOGRAPHY & EXPLORE CTA ================= */}
        {/* Constrained properly for zero mobile blowout */}
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

        {/* ================= LAYER 2 — FOREGROUND CHARACTER ================= */}
        {/*
          - Grounded at bottom-0, uncropped across all viewports
          - Responsively positioned so it never overflows mobile screens
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 sm:right-[6%] md:right-[10%] lg:right-[16%] xl:right-[18%] bottom-0 w-[55%] sm:w-[45%] lg:w-[42%] max-w-[520px] h-[68vh] sm:h-[75vh] max-h-[76vh] pointer-events-none z-20 flex items-end justify-center"
        >
          <picture className="h-full w-full flex items-end justify-center pointer-events-none">
            <source srcSet="/assets/nexus_hero_character_refined.webp" type="image/webp" />
            <img
              src="/assets/nexus_hero_character_refined.png"
              alt="NEXUS Cybernetic Humanoid Hero"
              className="max-h-full h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.98)] select-none filter contrast-[1.08] brightness-[1.03]"
            />
          </picture>
        </motion.div>

        {/* ================= FAR RIGHT: VERTICAL DIALOGUE PANEL ================= */}
        <div className="hidden lg:flex items-center justify-end z-30 ml-auto pl-4">
          <QuotePanel />
        </div>

      </div>

      {/* Bottom Border Subtle Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D00016]/40 to-transparent z-30" />
    </section>
  );
}
