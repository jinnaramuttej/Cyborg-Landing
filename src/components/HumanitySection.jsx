import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HumanitySection() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);
  const vanceCardRef = useRef(null);
  const elenaCardRef = useRef(null);

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
        .fromTo('.humanity-word',
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(paraRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(vanceCardRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
          '-=0.2'
        )
        .fromTo(elenaCardRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
          '-=0.4'
        );
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([tagRef.current, '.humanity-word', paraRef.current, vanceCardRef.current, elenaCardRef.current], {
          opacity: 1,
          y: 0,
          x: 0
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="humanity" 
      ref={sectionRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden flex flex-col justify-between select-none py-10 sm:py-12 lg:py-14 z-10 bg-transparent"
    >
      {/* ================= UPPER SECTION: HEADLINE IN NEGATIVE SPACE ================= */}
      <div className="relative w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 z-20 pt-2 sm:pt-4">
        <div className="max-w-2xl mx-auto text-center">
          <div
            ref={tagRef}
            className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.25em] mb-3 uppercase select-none"
          >
            <span className="text-[#D00016] font-bold">[</span>
            <span className="text-[#999999]">CHRONICLES</span>
            <span className="text-[#D00016]">/</span>
            <span className="text-[#D00016] font-bold">04</span>
            <span className="text-[#D00016] font-bold">]</span>
          </div>

          <h2
            ref={headlineRef}
            className="hero-headline text-2xl sm:text-4xl lg:text-[3rem] xl:text-[3.3rem] leading-[0.92] tracking-tight mb-2.5 font-raiko overflow-hidden"
          >
            <span className="inline-block overflow-hidden mr-3">
              <span className="humanity-word inline-block text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                HUMANITY.
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="humanity-word inline-block text-[#D00016] text-glow-crimson font-black tracking-tight">
                THE CREATOR'S TOUCH.
              </span>
            </span>
          </h2>

          <p
            ref={paraRef}
            className="text-xs sm:text-sm lg:text-base font-mono text-[#CCCCCC] leading-relaxed max-w-lg mx-auto font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          >
            Before the legion marched, there was a creator who envisioned peace, and the human bond that warned him of what perfection must destroy.
          </p>
        </div>
      </div>

      {/* ================= LOWER SECTION: UNBOXED CINEMATIC SUBTITLES ================= */}
      <div className="relative w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 z-20 pb-2 sm:pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-4xl">
          {/* Dr. Aaron Vance Narrative */}
          <div
            ref={vanceCardRef}
            className="border-l-2 border-[#D00016] pl-4 sm:pl-5 py-0.5 bg-[#080808]/40 backdrop-blur-sm"
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
          </div>

          {/* Elena Reyes Narrative */}
          <div
            ref={elenaCardRef}
            className="border-l-2 border-[#D00016]/70 hover:border-[#D00016] pl-4 sm:pl-5 py-0.5 bg-[#080808]/40 backdrop-blur-sm transition-colors duration-200"
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
          </div>
        </div>
      </div>
    </section>
  );
}
