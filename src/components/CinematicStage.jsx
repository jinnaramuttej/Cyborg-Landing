import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CinematicStage() {
  const { scrollYProgress } = useScroll();

  // ================= SCROLL-LINKED CROSSFADE OPACITIES =================
  // Chapter 01: Hero / The Creation (0.00 - 0.22)
  const heroOpacity = useTransform(scrollYProgress, [0.00, 0.12, 0.22], [1.0, 1.0, 0.0]);
  const heroScale = useTransform(scrollYProgress, [0.00, 0.22], [1.0, 1.04]);
  const heroCharOpacity = useTransform(scrollYProgress, [0.00, 0.10, 0.22], [1.0, 0.9, 0.0]);
  const heroCharScale = useTransform(scrollYProgress, [0.00, 0.22], [1.0, 0.88]);
  const heroCharY = useTransform(scrollYProgress, [0.00, 0.22], [0, -25]);

  // Chapter 02: The Vision / Metropolis (0.12 - 0.42)
  const visionOpacity = useTransform(scrollYProgress, [0.12, 0.22, 0.32, 0.42], [0.0, 1.0, 1.0, 0.0]);
  const visionScale = useTransform(scrollYProgress, [0.12, 0.42], [1.04, 1.0]);

  // Chapter 03: Evolution / The Invasion (0.32 - 0.62)
  const evolutionOpacity = useTransform(scrollYProgress, [0.32, 0.42, 0.52, 0.62], [0.0, 1.0, 1.0, 0.0]);
  const evolutionScale = useTransform(scrollYProgress, [0.32, 0.62], [1.04, 1.0]);

  // Chapter 04: Humanity / The Creators (0.52 - 0.82)
  const humanityOpacity = useTransform(scrollYProgress, [0.52, 0.62, 0.72, 0.82], [0.0, 1.0, 1.0, 0.0]);
  const humanityScale = useTransform(scrollYProgress, [0.52, 0.82], [1.04, 1.0]);

  // Chapter 05: The Age of Perfection (0.72 - 1.00)
  const perfectionOpacity = useTransform(scrollYProgress, [0.72, 0.82, 1.00], [0.0, 1.0, 1.0]);
  const perfectionScale = useTransform(scrollYProgress, [0.72, 1.00], [1.03, 1.0]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#080808] select-none">
      
      {/* ================= SHARED PERSISTENT ENVIRONMENT STAGE ================= */}
      
      {/* LAYER 5: CHAPTER 05 — THE AGE OF PERFECTION (FINALE ARMY) */}
      <motion.div 
        style={{ opacity: perfectionOpacity, scale: perfectionScale }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src="/assets/robot_army_perfection.png"
          alt="NEXUS Legion of Perfection"
          className="w-full h-full object-cover object-bottom filter contrast-[1.08] brightness-[0.92]"
        />
        {/* Sky atmosphere blend */}
        <div 
          className="absolute inset-0 bg-cover bg-top opacity-60 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url('/assets/finale_atmosphere_extension.png')` }}
        />
      </motion.div>

      {/* LAYER 4: CHAPTER 04 — HUMANITY (DR. VANCE & ELENA REYES) */}
      <motion.div 
        style={{ opacity: humanityOpacity, scale: humanityScale }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src="/assets/humanity_final.png"
          alt="Dr. Aaron Vance and Elena Reyes - Humanity Interaction"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
        />
      </motion.div>

      {/* LAYER 3: CHAPTER 03 — EVOLUTION (THE INVASION & COMMANDER) */}
      <motion.div 
        style={{ opacity: evolutionOpacity, scale: evolutionScale }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src="/assets/evolution_final.png"
          alt="NEXUS Cybernetic Evolution Commander in Ruined Megacity"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
        />
      </motion.div>

      {/* LAYER 2: CHAPTER 02 — THE VISION (SUNSET METROPOLIS & PORTAL RING) */}
      <motion.div 
        style={{ opacity: visionOpacity, scale: visionScale }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src="/assets/vision_city_master.png"
          alt="NEXUS Metropolis Matrix with Horizon Portal Ring"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
        />
      </motion.div>

      {/* LAYER 1: CHAPTER 01 — HERO ENVIRONMENT (DARK CHAMBER & AMBIENT CITY) */}
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        {/* Distant Cyber City Skyline Silhouette at Bottom Right */}
        <div 
          className="absolute right-0 bottom-0 w-full lg:w-[68%] h-[55%] opacity-35 mix-blend-screen bg-cover bg-bottom"
          style={{
            backgroundImage: `url('/assets/vision_city_master.png')`,
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)'
          }}
        />

        {/* Luminous Red Energy Halo behind character */}
        <div 
          className="absolute right-[8%] sm:right-[14%] lg:right-[18%] xl:right-[20%] top-[43%] -translate-y-1/2 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-[300px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-full pointer-events-none"
          style={{
            border: '1.5px solid rgba(208, 0, 22, 0.45)',
            boxShadow: '0 0 35px rgba(208, 0, 22, 0.35), inset 0 0 25px rgba(208, 0, 22, 0.15)',
            background: 'radial-gradient(circle, rgba(208,0,22,0.08) 0%, rgba(208,0,22,0.01) 60%, transparent 80%)'
          }}
        />

        {/* Atmospheric Red Fog Glow */}
        <div 
          className="absolute right-[10%] lg:right-[18%] top-[45%] -translate-y-1/2 w-[450px] sm:w-[600px] lg:w-[750px] h-[450px] sm:h-[600px] lg:h-[750px] rounded-full pointer-events-none filter blur-[100px] opacity-25"
          style={{
            background: 'radial-gradient(circle, #D00016 0%, rgba(140,0,16,0.4) 45%, transparent 70%)'
          }}
        />
      </motion.div>

      {/* FOREGROUND HERO CYBORG (PULLS BACK AND DISSOLVES INTO VISION METROPOLIS) */}
      <motion.div
        style={{
          opacity: heroCharOpacity,
          scale: heroCharScale,
          y: heroCharY
        }}
        className="absolute right-0 bottom-0 top-0 w-full sm:w-[75%] md:w-[62%] lg:w-[54%] xl:w-[50%] h-full flex items-end justify-center pointer-events-none z-10 will-change-transform"
      >
        <picture className="h-full w-full max-h-[77vh] flex items-end justify-center">
          <source srcSet="/assets/nexus_hero_character_master.png" type="image/png" />
          <img
            src="/assets/nexus_hero_character_master.png"
            alt="NEXUS Cybernetic Humanoid Hero Character"
            className="h-full w-auto max-h-[77vh] object-contain object-bottom filter contrast-[1.08] brightness-[1.0] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          />
        </picture>
      </motion.div>

      {/* ================= PERSISTENT CINEMATIC VIGNETTE & FILM GRADE ================= */}
      {/* Soft left vignette to guarantee text legibility without blocking art */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(ellipse 65% 85% at 15% 45%, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.45) 55%, transparent 100%)'
        }}
      />
      {/* Subtle screen edge framing */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#080808]/70 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808]/80 to-transparent pointer-events-none z-20" />

    </div>
  );
}
