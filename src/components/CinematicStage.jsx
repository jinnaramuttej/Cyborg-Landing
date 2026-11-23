import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicStage() {
  const containerRef = useRef(null);
  
  // Scene Layer Refs
  const heroLayerRef = useRef(null);
  const visionLayerRef = useRef(null);
  const evolutionLayerRef = useRef(null);
  const humanityLayerRef = useRef(null);
  const perfectionLayerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ================= 1. DESKTOP & STANDARD MOTION CHOREOGRAPHY =================
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Explicit initial states. Each incoming chapter starts slightly "pushed in"
        // (scale 1.08) and settles to a razor-sharp 1.0 when it becomes the active
        // chapter — so images are never upscaled/blurred at rest.
        gsap.set(heroLayerRef.current, { opacity: 1, scale: 1 });
        gsap.set(visionLayerRef.current, { opacity: 0, scale: 1.08 });
        gsap.set(evolutionLayerRef.current, { opacity: 0, scale: 1.08 });
        gsap.set(humanityLayerRef.current, { opacity: 0, scale: 1.08 });
        gsap.set(perfectionLayerRef.current, { opacity: 0, scale: 1.08 });

        // MASTER CONTINUOUS STORYTELLING TIMELINE (total length = 4; one unit per cut).
        // Each chapter rests crisp at integer times (0,1,2,3,4 == scroll 0/25/50/75/100%).
        // Transitions are SEQUENCED, not a flat cross-dissolve: the outgoing scene fades
        // out first (and pushes in via scale) while the incoming scene settles in just
        // after, so two busy images never sit at 50/50 and smear into a double-exposure.
        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            invalidateOnRefresh: true
          }
        });

        // Reusable chapter cut: outgoing recedes/fades early, incoming settles in late.
        const cut = (outRef, inRef, t) => {
          masterTl
            .to(outRef, { opacity: 0, duration: 0.5, ease: 'power2.in' }, t)
            .to(outRef, { scale: 1.08, duration: 1.0, ease: 'power1.in' }, t)
            .to(inRef, { scale: 1.0, duration: 1.0, ease: 'power2.out' }, t)
            .to(inRef, { opacity: 1, duration: 0.58, ease: 'power2.out' }, t + 0.42);
        };

        // ---------------- Chapter Cuts (Cinematic Transitions) ----------------
        cut(heroLayerRef.current, visionLayerRef.current, 0);          // Hero (Ultron in ring) -> Vision (metropolis)
        cut(visionLayerRef.current, evolutionLayerRef.current, 1);     // Vision -> Evolution (war)
        cut(evolutionLayerRef.current, humanityLayerRef.current, 2);   // Evolution -> Humanity (the creators)
        cut(humanityLayerRef.current, perfectionLayerRef.current, 3);  // Humanity -> Perfection (the legion)
      });

      // ================= 2. REDUCED MOTION FALLBACK =================
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(heroLayerRef.current, { opacity: 1 });
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

        // Plain sequential cross-fades (no scale/parallax): each chapter rests fully
        // opaque at its integer time, with a brief clean dip between — no double-exposure.
        reducedTl
          .to(heroLayerRef.current, { opacity: 0, duration: 0.5 }, 0)
          .to(visionLayerRef.current, { opacity: 1, duration: 0.5 }, 0.5)
          .to(visionLayerRef.current, { opacity: 0, duration: 0.5 }, 1)
          .to(evolutionLayerRef.current, { opacity: 1, duration: 0.5 }, 1.5)
          .to(evolutionLayerRef.current, { opacity: 0, duration: 0.5 }, 2)
          .to(humanityLayerRef.current, { opacity: 1, duration: 0.5 }, 2.5)
          .to(humanityLayerRef.current, { opacity: 0, duration: 0.5 }, 3)
          .to(perfectionLayerRef.current, { opacity: 1, duration: 0.5 }, 3.5);
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

      {/* LAYER 1: CHAPTER 01 — HERO SCENE (THE CREATION: ULTRON IN RED HALO OVER CRIMSON MEGACITY) */}
      <div 
        ref={heroLayerRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <img
          src="/assets/hero_background_master.png"
          alt="NEXUS Cybernetic Humanoid in Luminous Red Energy Ring overlooking Crimson Megacity"
          className="w-full h-full object-cover object-[72%_center] sm:object-center filter contrast-[1.05] brightness-[1.0]"
        />
        {/* Soft left gradient to ensure text legibility */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#080808]/85 via-[#080808]/45 to-transparent w-full md:w-[60%]" />
      </div>

      {/* ================= PERSISTENT CINEMATIC VIGNETTE & FILM GRADE ================= */}
      {/* Soft left vignette to guarantee text legibility without blocking art */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(ellipse 65% 85% at 15% 45%, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.38) 55%, transparent 100%)'
        }}
      />
      {/* Subtle screen edge framing */}
      <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_120px_rgba(8,8,8,0.95)]" />
    </div>
  );
}
