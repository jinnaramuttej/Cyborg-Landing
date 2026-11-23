import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

export default function TrailerModal({ isOpen, onClose }) {
  const [muted, setMuted] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/90 backdrop-blur-xl"
        >
          <div 
            className="absolute inset-0" 
            onClick={onClose} 
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-4xl bg-[#0F0F12] border border-[#D00016] shadow-[0_0_50px_rgba(208,0,22,0.4)] clip-chamfer-panel z-10 overflow-hidden"
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#080808] border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D00016] animate-pulse" />
                <span className="text-[#F1F0ED] tracking-widest font-bold font-oxanium uppercase">
                  NEXUS // THE GENESIS TRAILER [CLASSIFIED]
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-[#999999] hover:text-[#D00016] transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cinematic Teaser Player Viewport */}
            <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
              
              {/* Cinematic Background Atmosphere */}
              <img
                src="/assets/cyber-cityscape.png"
                alt="Trailer Scene"
                className="w-full h-full object-cover filter contrast-125 brightness-75 scale-105 animate-[pulse_8s_ease-in-out_infinite]"
              />

              {/* Scanning HUD Overlay */}
              <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60 pointer-events-none" />

              {/* Teaser Center Play Graphics */}
              <div className="absolute text-center z-20 space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border-2 border-[#D00016] bg-[#D00016]/20 flex items-center justify-center shadow-[0_0_30px_rgba(208,0,22,0.7)]">
                  <Play className="w-8 h-8 fill-[#D00016] text-[#D00016] ml-1" />
                </div>
                <div className="font-oxanium text-lg sm:text-xl font-bold tracking-widest uppercase text-white drop-shadow-[0_2px_10px_black]">
                  TRANSMISSION BUFFERING...
                </div>
                <div className="font-mono text-xs text-[#D00016] tracking-widest">
                  DECRYPTING ARCHIVE 01 // SYNAPTIC OVERRIDE
                </div>
              </div>

              {/* Corner Audio Toggle */}
              <button
                type="button"
                onClick={() => setMuted(!muted)}
                className="absolute bottom-4 right-4 z-20 p-2.5 bg-[#080808]/80 border border-[#D00016]/40 text-[#F1F0ED] rounded hover:border-[#D00016] transition-colors"
              >
                {muted ? <VolumeX className="w-4 h-4 text-[#D00016]" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Modal Bottom Metadata */}
            <div className="px-6 py-4 bg-[#080808] border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#999999]">
              <div>DURATION: 02:44 // 4K CINEMATIC MASTER</div>
              <div className="text-[#D00016]">RESTRICTED // PROTOCOL LEVEL 5</div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
