import React from 'react';

/**
 * Page-level backdrop: dark, futuristic technical grid with thin geometric
 * lines, crosshair markers, and soft blue glows. Sits fixed behind all content.
 */
const Crosshair: React.FC<{ className: string }> = ({ className }) => (
  <div className={`absolute w-4 h-4 ${className}`}>
    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-sky-400/40" />
    <span className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-sky-400/40" />
  </div>
);

export const TechBackground: React.FC = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#030712]">
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Major grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.07) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)',
        }}
      />

      {/* Soft blue glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full bg-sky-500/[0.07] blur-[140px]" />
      <div className="absolute top-1/3 left-[-200px] w-[500px] h-[500px] rounded-full bg-indigo-600/[0.06] blur-[130px]" />

      {/* Thin geometric lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="fadeLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fadeLineV" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="18%" x2="100%" y2="18%" stroke="url(#fadeLine)" strokeWidth="1" />
        <line x1="0" y1="82%" x2="100%" y2="82%" stroke="url(#fadeLine)" strokeWidth="1" />
        <line x1="12%" y1="0" x2="12%" y2="100%" stroke="url(#fadeLineV)" strokeWidth="1" />
        <line x1="88%" y1="0" x2="88%" y2="100%" stroke="url(#fadeLineV)" strokeWidth="1" />
        <line x1="60%" y1="0" x2="100%" y2="45%" stroke="#38bdf8" strokeOpacity="0.06" strokeWidth="1" />
        <line x1="0" y1="60%" x2="35%" y2="100%" stroke="#38bdf8" strokeOpacity="0.06" strokeWidth="1" />
      </svg>

      {/* Crosshair markers at line intersections */}
      <Crosshair className="top-[18%] left-[12%] -translate-x-1/2 -translate-y-1/2" />
      <Crosshair className="top-[18%] left-[88%] -translate-x-1/2 -translate-y-1/2" />
      <Crosshair className="top-[82%] left-[12%] -translate-x-1/2 -translate-y-1/2" />
      <Crosshair className="top-[82%] left-[88%] -translate-x-1/2 -translate-y-1/2" />
      <Crosshair className="top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      {/* Tiny glowing nodes */}
      <span className="absolute top-[18%] left-[50%] w-1 h-1 rounded-full bg-sky-400/70 shadow-[0_0_8px_2px_rgba(56,189,248,0.5)]" />
      <span className="absolute top-[82%] left-[30%] w-1 h-1 rounded-full bg-sky-400/50 shadow-[0_0_8px_2px_rgba(56,189,248,0.35)]" />

      {/* Vignette for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,18,0.85)_100%)]" />
    </div>
  );
};
