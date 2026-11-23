import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="perfection" className="relative w-full h-screen min-h-[850px] overflow-hidden flex flex-col justify-between select-none z-10 bg-transparent">
      
      {/* Background Subtle Ambient Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[180px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D00016 0%, transparent 70%)' }}
      />

      {/* ================= UPPER-CANVAS FINALE TYPOGRAPHY ================= */}
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

      <div className="w-full h-12" />
    </section>
  );
}
