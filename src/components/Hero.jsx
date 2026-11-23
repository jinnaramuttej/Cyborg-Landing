import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import QuotePanel from './QuotePanel';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onExplore }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Initial entrance timeline
        const tl = gsap.timeline({ delay: 0.2 });

        tl.from('.hero-word', {
          yPercent: 120,
          opacity: 0,
          duration: 1.0,
          stagger: 0.16,
          ease: 'power3.out'
        })
        .from(paraRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5')
        .from(ctaRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5')
        .from('.hero-quote-inner', {
          x: 25,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out'
        }, '-=0.6');

        // Scroll exit: subtle parallax glide up and fade out before Vision appears
        gsap.fromTo(contentRef.current, 
          { y: 0, opacity: 1 },
          {
            y: -60,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: '60% top',
              scrub: 1
            }
          }
        );

        if (quoteRef.current) {
          gsap.fromTo(quoteRef.current,
            { y: 0, opacity: 1 },
            {
              y: -40,
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: '60% top',
                scrub: 1
              }
            }
          );
        }
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(['.hero-word', paraRef.current, ctaRef.current, quoteRef.current], {
          opacity: 1,
          y: 0,
          x: 0
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative w-full h-screen min-h-[750px] overflow-hidden flex items-center justify-between select-none z-10 bg-transparent"
    >
      {/* ================= MAIN THREE-PART ASYMMETRIC VIEWPORT ================= */}
      <div className="relative w-full max-w-[1740px] mx-auto h-full px-6 sm:px-12 lg:px-20 xl:px-24 flex items-center justify-between z-20">

        {/* ================= LEFT COLUMN: CLEAN TYPOGRAPHY & EXPLORE CTA ================= */}
        <div 
          ref={contentRef}
          className="w-full max-w-full sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[640px] flex flex-col justify-center pt-8 z-30"
        >
          {/* Normalized RAIKO Display Headline (~58-64px desktop / 36px mobile) */}
          <h1
            ref={headlineRef}
            className="hero-headline text-3xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] leading-[0.92] tracking-tight mb-5 sm:mb-6 font-raiko overflow-hidden"
          >
            <span className="inline-block overflow-hidden mr-3">
              <span className="hero-word inline-block text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                PEACE
              </span>
            </span>
            <span className="inline-block overflow-hidden mr-3">
              <span className="hero-word inline-block text-[#F1F0ED] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                THROUGH
              </span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="hero-word inline-block text-[#D00016] text-glow-crimson font-black tracking-tight">
                PERFECTION.
              </span>
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            ref={paraRef}
            className="text-sm sm:text-base lg:text-lg font-mono text-[#999999] leading-relaxed max-w-[420px] mb-7 sm:mb-9 font-normal"
          >
            Humanity's greatest creation.
            <br />
            <span className="text-[#F1F0ED]/90 font-medium">Its ultimate replacement.</span>
          </p>

          {/* Single Prominent CTA: EXPLORE THE VISION */}
          <div ref={ctaRef}>
            <a
              href="#vision"
              onClick={onExplore}
              className="group inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 border-2 border-[#D00016] bg-[#D00016]/15 text-[#F1F0ED] font-raiko text-xs sm:text-sm font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_0_25px_rgba(208,0,22,0.35)] hover:bg-[#D00016] hover:shadow-[0_0_45px_rgba(208,0,22,0.85)] hover:text-white transition-all duration-300 hover:scale-[1.02]"
            >
              <span>EXPLORE THE VISION</span>
              <ArrowRight className="w-4 h-4 text-[#D00016] group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </div>

        </div>

        {/* ================= FAR RIGHT: VERTICAL DIALOGUE PANEL ================= */}
        <div ref={quoteRef} className="hidden lg:flex items-center justify-end z-30 ml-auto pl-4">
          <div className="hero-quote-inner">
            <QuotePanel />
          </div>
        </div>

      </div>

    </section>
  );
}
