import React from 'react';
import Navbar from './components/Navbar';
import Atmosphere from './components/Atmosphere';
import Hero from './components/Hero';
import VisionSection from './components/VisionSection';
import EvolutionSection from './components/EvolutionSection';
import HumanitySection from './components/HumanitySection';
import CtaSection from './components/CtaSection';

export default function App() {
  const handleExplore = (e) => {
    e.preventDefault();
    const visionEl = document.getElementById('vision');
    if (visionEl) {
      visionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F1F0ED] selection:bg-[#D00016] selection:text-white">
      {/* Ambient Floating Crimson Particles & Background Atmosphere */}
      <Atmosphere />

      {/* Transparent Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Primary 100vh Hero Viewport */}
        <Hero onExplore={handleExplore} />

        {/* 2. Below-the-fold Narrative Sections (Revealed on Scroll) */}
        <VisionSection />
        <EvolutionSection />
        <HumanitySection />
        <CtaSection />
      </main>
    </div>
  );
}
