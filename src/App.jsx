import React from 'react';
import Navbar from './components/Navbar';
import Atmosphere from './components/Atmosphere';
import CinematicStage from './components/CinematicStage';
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
      {/* Persistent 5-Chapter Cinematic Crossfade Stage */}
      <CinematicStage />

      {/* Ambient Floating Crimson Particles & Background Atmosphere */}
      <Atmosphere />

      {/* Transparent Sticky Navigation */}
      <Navbar />

      {/* Main Narrative Content Chapters (Layered over Persistent Canvas) */}
      <main className="relative z-10">
        {/* 1. Chapter 01: The Creation */}
        <Hero onExplore={handleExplore} />

        {/* 2. Chapter 02: The Vision */}
        <VisionSection />

        {/* 3. Chapter 03: Evolution */}
        <EvolutionSection />

        {/* 4. Chapter 04: Humanity */}
        <HumanitySection />

        {/* 5. Chapter 05: The Age of Perfection */}
        <CtaSection />
      </main>
    </div>
  );
}
