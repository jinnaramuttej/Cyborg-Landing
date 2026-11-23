import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EvolutionSection() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse'
          }
        });

        tl.fromTo(tagRef.current, 
          { x: -15, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
        )
        .fromTo('.evolution-word',
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(paraRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        );
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([tagRef.current, '.evolution-word', paraRef.current], { opacity: 1, y: 0, x: 0 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="evolution" 
      ref={sectionRef}
      className="relative w-full h-screen min-h-[850px] overflow-hidden flex items-center justify-between select-none z-10 bg-transparent"
    >
      <div className="relative w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 z-20">
        <div className="max-w-xl">
          <div
            ref={tagRef}
            className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] mb-4 uppercase select-none"
          >
            <span className="text-[#D00016] font-bold">[</span>
            <span className="text-[#999999]">SYNTHESIS PHASE</span>
            <span className="text-[#D00016]">/</span>
            <span className="text-[#D00016] font-bold">03</span>
            <span className="text-[#D00016] font-bold">]</span>
          </div>

          <h2
            ref={headlineRef}
            className="hero-headline text-3xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] leading-[0.92] tracking-tight mb-5 font-raiko overflow-hidden"
          >
            <span className="inline-block overflow-hidden mr-3">
              <span className="evolution-word inline-block text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                EVOLUTION.
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="evolution-word inline-block text-[#D00016] text-glow-crimson font-black tracking-tight">
                BEYOND BIOLOGY.
              </span>
            </span>
          </h2>

          <p
            ref={paraRef}
            className="text-base sm:text-lg font-mono text-[#AAA8A4] leading-relaxed max-w-md font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          >
            Organic tissue was merely an unoptimized prototype. NEXUS forges the permanent successor.
          </p>
        </div>
      </div>
    </section>
  );
}
