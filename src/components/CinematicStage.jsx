import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicStage() {
  const containerRef = useRef(null);
  
  // Scene Layer Refs
  const heroLayerRef = useRef(null);
  const heroCharRef = useRef(null);
  const haloRef = useRef(null);
  const fogRef = useRef(null);
  
  const visionLayerRef = useRef(null);
  const evolutionLayerRef = useRef(null);
  const humanityLayerRef = useRef(null);
  const perfectionLayerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ================= 1. AMBIENT LIVING STAGE TWEENS =================
      if (haloRef.current) {
        gsap.to(haloRef.current, {
          scale: 1.06,
          opacity: 0.45,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      if (fogRef.current) {
        gsap.to(fogRef.current, {
          opacity: 0.35,
          scale: 1.08,
          duration: 4.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      // ================= 2. DESKTOP & STANDARD MOTION CHOREOGRAPHY =================
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Explicit initial states: Hero layer is 100% active, all others are 0
        gsap.set(heroLayerRef.current, { opacity: 1 });
        gsap.set(heroCharRef.current, { opacity: 1, scale: 1, y: 0 });
        gsap.set(visionLayerRef.current, { opacity: 0, scale: 1.05 });
        gsap.set(evolutionLayerRef.current, { opacity: 0, scale: 1.05 });
        gsap.set(humanityLayerRef.current, { opacity: 0, scale: 1.04 });
        gsap.set(perfectionLayerRef.current, { opacity: 0, scale: 1.03 });

        // MASTER CONTINUOUS STORYTELLING TIMELINE
        // Seamlessly scrubs across the entire 5-chapter narrative
        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            invalidateOnRefresh: true
          }
        });

        masterTl
          // ---------------- CHAPTER 01 -> CHAPTER 02 (Hero -> Vision) ----------------
          // Camera pulls back, hero cyborg gracefully scales down and dissolves as metropolis emerges
          .to(heroCharRef.current, {
            scale: 0.85,
            y: -35,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1
          }, 0)
          .to(heroLayerRef.current, {
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1
          }, 0)
          .to(visionLayerRef.current, {
            opacity: 1,
            scale: 1.0,
            ease: 'power1.inOut',
            duration: 1
          }, 0)

          // ---------------- CHAPTER 02 -> CHAPTER 03 (Vision -> Evolution) ----------------
          // Sunset metropolis dims into dark, smoke-filled war environment with commander
          .to(visionLayerRef.current, {
            opacity: 0,
            scale: 0.96,
            ease: 'power1.inOut',
            duration: 1
          }, 1)
          .to(evolutionLayerRef.current, {
            opacity: 1,
            scale: 1.0,
            ease: 'power1.inOut',
            duration: 1
          }, 1)

          // ---------------- CHAPTER 03 -> CHAPTER 04 (Evolution -> Humanity) ----------------
          // War scene dissolves into quiet, clinical cyan/teal lab of Dr. Vance & Elena
          .to(evolutionLayerRef.current, {
            opacity: 0,
            scale: 0.96,
            ease: 'power1.inOut',
            duration: 1
          }, 2)
          .to(humanityLayerRef.current, {
            opacity: 1,
            scale: 1.0,
            ease: 'power1.inOut',
            duration: 1
          }, 2)

          // ---------------- CHAPTER 04 -> CHAPTER 05 (Humanity -> Perfection Army) ----------------
          // Lab memory fades into grand marching army panorama with stormy sky extension
          .to(humanityLayerRef.current, {
            opacity: 0,
            scale: 0.96,
            ease: 'power1.inOut',
            duration: 1
          }, 3)
          .to(perfectionLayerRef.current, {
            opacity: 1,
            scale: 1.0,
            ease: 'power1.inOut',
            duration: 1
          }, 3);
      });

      // ================= 3. REDUCED MOTION FALLBACK =================
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(heroLayerRef.current, { opacity: 1 });
        gsap.set(heroCharRef.current, { opacity: 1 });
        gsap.set(visionLayerRef.current, { opacity: 0 });
        gsap.set(evolutionLayerRef.current, { opacity: 0 });
        gsap.set(humanityLayerRef.current, { opacity: 0 });
        gsap.set(perfectionLayerRef.current, { opacity: 0 });

        const reducedTl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5
          }
        });

        reducedTl
          .to(heroCharRef.current, { opacity: 0, duration: 1 }, 0)
          .to(heroLayerRef.current, { opacity: 0, duration: 1 }, 0)
          .to(visionLayerRef.current, { opacity: 1, duration: 1 }, 0)
          .to(visionLayerRef.current, { opacity: 0, duration: 1 }, 1)
          .to(evolutionLayerRef.current, { opacity: 1, duration: 1 }, 1)
          .to(evolutionLayerRef.current, { opacity: 0, duration: 1 }, 2)
          .to(humanityLayerRef.current, { opacity: 1, duration: 1 }, 2)
          .to(humanityLayerRef.current, { opacity: 0, duration: 1 }, 3)
          .to(perfectionLayerRef.current, { opacity: 1, duration: 1 }, 3);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#080808] select-none"
    >
      {/* ================= SHARED PERSISTENT ENVIRONMENT STAGE ================= */}
      
      {/* LAYER 5: CHAPTER 05 — THE AGE OF PERFECTION (FINALE ARMY) */}
      <div 
        ref={perfectionLayerRef}
        className="absolute inset-0 w-full h-full will-change-transform opacity-0"
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
      </div>

      {/* LAYER 4: CHAPTER 04 — HUMANITY (DR. VANCE & ELENA REYES) */}
      <div 
        ref={humanityLayerRef}
        className="absolute inset-0 w-full h-full will-change-transform opacity-0"
      >
        <img
          src="/assets/humanity_final.png"
          alt="Dr. Aaron Vance and Elena Reyes - Humanity Interaction"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
        />
      </div>

      {/* LAYER 3: CHAPTER 03 — EVOLUTION (THE INVASION & COMMANDER) */}
      <div 
        ref={evolutionLayerRef}
        className="absolute inset-0 w-full h-full will-change-transform opacity-0"
      >
        <img
          src="/assets/evolution_final.png"
          alt="NEXUS Cybernetic Evolution Commander in Ruined Megacity"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
        />
      </div>

      {/* LAYER 2: CHAPTER 02 — THE VISION (SUNSET METROPOLIS & PORTAL RING) */}
      <div 
        ref={visionLayerRef}
        className="absolute inset-0 w-full h-full will-change-transform opacity-0"
      >
        <img
          src="/assets/vision_city_master.png"
          alt="NEXUS Metropolis Matrix with Horizon Portal Ring"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95]"
        />
      </div>

      {/* LAYER 1: CHAPTER 01 — HERO ENVIRONMENT (DARK CHAMBER & AMBIENT CITY) */}
      <div 
        ref={heroLayerRef}
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
      </div>

      {/* FOREGROUND HERO CYBORG WITH PERFECTLY CENTERED HALO CIRCLE */}
      <div
        ref={heroCharRef}
        className="absolute right-0 bottom-0 top-0 w-full sm:w-[75%] md:w-[62%] lg:w-[54%] xl:w-[50%] h-full flex items-end justify-center pointer-events-none z-10 will-change-transform"
      >
        <div className="relative h-full max-h-[77vh] flex items-end justify-center">
          
          {/* Luminous Red Energy Halo — Centered Directly on Ultron */}
          <div 
            ref={haloRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] md:w-[520px] lg:w-[580px] h-[340px] sm:h-[460px] md:h-[520px] lg:h-[580px] rounded-full pointer-events-none z-0"
            style={{
              border: '1.5px solid rgba(208, 0, 22, 0.45)',
              boxShadow: '0 0 40px rgba(208, 0, 22, 0.4), inset 0 0 30px rgba(208, 0, 22, 0.18)',
              background: 'radial-gradient(circle, rgba(208,0,22,0.1) 0%, rgba(208,0,22,0.015) 60%, transparent 80%)'
            }}
          />

          {/* Atmospheric Red Fog Glow — Centered Directly on Ultron */}
          <div 
            ref={fogRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[600px] lg:w-[750px] h-[450px] sm:h-[600px] lg:h-[750px] rounded-full pointer-events-none filter blur-[100px] opacity-30 z-0"
            style={{
              background: 'radial-gradient(circle, #D00016 0%, rgba(140,0,16,0.4) 45%, transparent 70%)'
            }}
          />

          {/* Ultron Cyborg Cutout */}
          <picture className="relative h-full w-full max-h-[77vh] flex items-end justify-center z-10">
            <source srcSet="/assets/nexus_hero_character_master.png" type="image/png" />
            <img
              src="/assets/nexus_hero_character_master.png"
              alt="NEXUS Cybernetic Humanoid Hero Character"
              className="h-full w-auto max-h-[77vh] object-contain object-bottom filter contrast-[1.08] brightness-[1.0] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />
          </picture>

        </div>
      </div>

      {/* ================= PERSISTENT CINEMATIC VIGNETTE & FILM GRADE ================= */}
      {/* Soft left vignette to guarantee text legibility without blocking art */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(ellipse 65% 85% at 15% 45%, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.45) 55%, transparent 100%)'
        }}
      />
      {/* Subtle screen edge framing */}
      <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_120px_rgba(8,8,8,0.95)]" />
    </div>
  );
}
