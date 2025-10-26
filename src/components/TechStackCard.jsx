import { useRef } from 'react';

const techs = [
  'React', 'Vite', 'Tailwind', 'Framer Motion', 'FastAPI', 'Python', 'Node.js', 'TypeScript', 'MongoDB', 'GSAP', 'Spline', 'Lucide'
];

export default function TechStackCard() {
  const trackRef = useRef(null);

  return (
    <div className="relative rounded-2xl p-8 md:p-10 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 border border-white/10 shadow-xl overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-xl font-semibold">Tech Stack</h3>
        <span className="text-white/60 text-sm">Continuous</span>
      </div>
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-12 items-center whitespace-nowrap select-none will-change-transform group"
        >
          {/* Duplicate the row for seamless loop */}
          <MarqueeRow items={techs} />
          <MarqueeRow items={techs} ariaHidden />
        </div>
      </div>
      <style>{`
        .marquee-row {
          animation: marquee 30s linear infinite;
        }
        .marquee-row:hover { animation-play-state: paused; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function MarqueeRow({ items, ariaHidden = false }) {
  return (
    <div
      className="marquee-row flex items-center gap-12 pr-12"
      aria-hidden={ariaHidden}
      style={{ width: '200%' }}
    >
      {items.concat(items).map((t, i) => (
        <div
          key={t + i}
          className="h-12 flex items-center justify-center px-6 rounded-full bg-white/5 border border-white/10 text-white/80 text-xl font-medium"
          style={{ minWidth: 160 }}
        >
          {t}
        </div>
      ))}
    </div>
  );
}
