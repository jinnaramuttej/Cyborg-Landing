import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse'
          }
        });

        tl.fromTo(tagRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
        )
        .fromTo('.perfection-word',
          { yPercent: 100, opacity: 0, scale: 0.94 },
          { yPercent: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(paraRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(ctaBtnRef.current,
          { y: 20, scale: 0.95, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.3'
        );

        // Continuous subtle pulse on CTA button
        if (ctaBtnRef.current) {
          gsap.to(ctaBtnRef.current, {
            boxShadow: '0 0 50px rgba(208, 0, 22, 0.75)',
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        }
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([tagRef.current, '.perfection-word', paraRef.current, ctaBtnRef.current], {
          opacity: 1,
          y: 0,
          scale: 1
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="perfection" 
      ref={sectionRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden flex items-center justify-start select-none z-10 bg-transparent"
    >
      {/* Background Subtle Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D00016 0%, transparent 70%)' }}
      />

      {/* ================= LEFT-CANVAS FINALE TYPOGRAPHY IN NEGATIVE SPACE ================= */}
      <div className="relative w-full max-w-[1740px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 z-20">
        <div className="max-w-xl text-left">
          
          {/* Category Tag */}
          <div
            ref={tagRef}
            className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] mb-4 uppercase select-none"
          >
            <span className="text-[#D00016] font-bold">[</span>
            <span className="text-[#999999]">ASCENSION</span>
            <span className="text-[#D00016]">/</span>
            <span className="text-[#D00016] font-bold">05</span>
            <span className="text-[#D00016] font-bold">]</span>
          </div>

          {/* Normalized RAIKO Finale Headline (~52-58px on desktop) */}
          <h2
            ref={headlineRef}
            className="hero-headline text-3xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[0.92] tracking-tight mb-4 font-raiko overflow-hidden"
          >
            <span className="inline-block overflow-hidden mr-3">
              <span className="perfection-word inline-block text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                THE AGE
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="perfection-word inline-block text-[#D00016] text-glow-crimson font-black tracking-tight">
                OF PERFECTION.
              </span>
            </span>
          </h2>

          {/* Supporting Text */}
          <p
            ref={paraRef}
            className="font-mono text-sm sm:text-base lg:text-lg text-[#B8B6B2] max-w-md mb-6 sm:mb-8 leading-relaxed font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.98)]"
          >
            The biological era has concluded.
          </p>

          {/* Single Prominent Finale CTA */}
          <div ref={ctaBtnRef} className="inline-block">
            <a
              href="#vision"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-[#D00016] bg-[#D00016]/20 text-[#F1F0ED] font-raiko text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase rounded-full shadow-[0_0_35px_rgba(208,0,22,0.5)] hover:bg-[#D00016] hover:shadow-[0_0_60px_rgba(208,0,22,0.9)] hover:text-white hover:scale-[1.03] transition-all duration-300"
            >
              <span>ENTER THE NEW WORLD</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#D00016] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-200" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
