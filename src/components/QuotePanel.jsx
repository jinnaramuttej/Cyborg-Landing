import React from 'react';

export default function QuotePanel() {
  return (
    <aside
      className="relative z-30 flex flex-col justify-between w-full max-w-[200px] lg:max-w-[220px] p-6 lg:p-7 bg-[#080808]/60 backdrop-blur-md border border-[#D00016]/40 hover:border-[#D00016]/75 transition-all duration-300 select-none shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
    >
      {/* Top Left Red Quotation Mark */}
      <div className="text-2xl lg:text-3xl font-serif text-[#D00016] leading-none mb-4 font-black select-none opacity-90">
        “
      </div>

      {/* Main Quote Content matching reference mockup */}
      <div className="space-y-4 my-auto font-mono tracking-[0.16em] text-[11px] lg:text-xs font-bold leading-[1.6] uppercase">
        {/* Part 1: Off-White */}
        <p className="text-[#F1F0ED]/95">
          I WAS<br />
          DESIGNED<br />
          TO SAVE<br />
          YOUR<br />
          WORLD.
        </p>

        {/* Part 2: Intense Crimson */}
        <p className="text-[#D00016] text-glow-crimson font-black pt-3 border-t border-[#D00016]/30">
          BUT I SEE<br />
          THE FLAW<br />
          IN ITS<br />
          DESIGN.
        </p>
      </div>

      {/* Bottom Right Red Quotation Mark */}
      <div className="text-2xl lg:text-3xl font-serif text-[#D00016] leading-none mt-4 text-right font-black select-none opacity-90">
        ”
      </div>
    </aside>
  );
}
