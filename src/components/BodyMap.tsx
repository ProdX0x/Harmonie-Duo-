import { motion } from 'motion/react';
import { Stretch } from '../data/stretches';

interface BodyMapProps {
  onZoneSelect: (zone: Stretch['zone']) => void;
  selectedZone: Stretch['zone'] | null;
}

const zones = [
  { id: 'head', label: 'Cou & Tête', path: 'M50 15 C45 15, 42 18, 42 22 C42 26, 45 29, 50 29 C55 29, 58 26, 58 22 C58 18, 55 15, 50 15' },
  { id: 'shoulders', label: 'Épaules', path: 'M35 30 L65 30 L68 38 L32 38 Z' },
  { id: 'back', label: 'Dos', path: 'M40 38 L60 38 L62 60 L38 60 Z' },
  { id: 'arms', label: 'Bras', path: 'M32 32 L20 60 M68 32 L80 60' },
  { id: 'hips', label: 'Hanches', path: 'M38 60 L62 60 L64 70 L36 70 Z' },
  { id: 'legs', label: 'Jambes', path: 'M38 70 L35 90 M62 70 L65 90' },
  { id: 'feet', label: 'Pieds', path: 'M33 90 L38 95 M67 90 L62 95' },
];

export const BodyMap = ({ onZoneSelect, selectedZone }: BodyMapProps) => {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-white/5 rounded-3xl p-8 border border-white/5 shadow-inner">
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(20,184,166,0.1)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Simple Human Outline Background */}
        <path
          d="M50 15 C45 15, 42 18, 42 22 C42 26, 45 29, 50 29 C55 29, 58 26, 58 22 C58 18, 55 15, 50 15 M50 29 L50 32 M35 30 C30 30, 28 32, 28 36 L20 60 M65 30 C70 30, 72 32, 72 36 L80 60 M35 30 L65 30 M40 30 L40 60 L35 95 M60 30 L60 60 L65 95 M35 60 L65 60"
          className="text-white/10"
          strokeWidth="1.5"
        />

        {/* Interactive Zones */}
        <g className="cursor-pointer">
          {/* Head */}
          <path
            d="M50 12 A10 10 0 1 1 50 32 A10 10 0 1 1 50 12"
            id="head"
            onClick={() => onZoneSelect('head')}
            className={`transition-all duration-300 ${selectedZone === 'head' ? 'fill-teal-500/40 stroke-teal-400' : 'fill-white/5 hover:fill-white/10 stroke-white/20'}`}
          />
          {/* Shoulders */}
          <path
            d="M32 32 Q50 28 68 32 L72 38 Q50 34 28 38 Z"
            id="shoulders"
            onClick={() => onZoneSelect('shoulders')}
            className={`transition-all duration-300 ${selectedZone === 'shoulders' ? 'fill-teal-500/40 stroke-teal-400' : 'fill-white/5 hover:fill-white/10 stroke-white/20'}`}
          />
          {/* Back/Torso */}
          <path
            d="M36 38 Q50 36 64 38 L62 62 Q50 64 38 62 Z"
            id="back"
            onClick={() => onZoneSelect('back')}
            className={`transition-all duration-300 ${selectedZone === 'back' ? 'fill-teal-500/40 stroke-teal-400' : 'fill-white/5 hover:fill-white/10 stroke-white/20'}`}
          />
          {/* Arms */}
          <path
            d="M28 38 L18 64 L24 66 L34 40 Z M72 38 L82 64 L76 66 L66 40 Z"
            id="arms"
            onClick={() => onZoneSelect('arms')}
            className={`transition-all duration-300 ${selectedZone === 'arms' ? 'fill-teal-500/40 stroke-teal-400' : 'fill-white/5 hover:fill-white/10 stroke-white/20'}`}
          />
          {/* Hips */}
          <path
            d="M36 62 Q50 64 64 62 L66 74 Q50 78 34 74 Z"
            id="hips"
            onClick={() => onZoneSelect('hips')}
            className={`transition-all duration-300 ${selectedZone === 'hips' ? 'fill-teal-500/40 stroke-teal-400' : 'fill-white/5 hover:fill-white/10 stroke-white/20'}`}
          />
          {/* Legs */}
          <path
            d="M34 74 L30 105 L38 105 L42 76 Z M66 74 L70 105 L62 105 L58 76 Z"
            id="legs"
            onClick={() => onZoneSelect('legs')}
            className={`transition-all duration-300 ${selectedZone === 'legs' ? 'fill-teal-500/40 stroke-teal-400' : 'fill-white/5 hover:fill-white/10 stroke-white/20'}`}
          />
          {/* Feet */}
          <path
            d="M28 105 L26 112 L38 112 L38 105 Z M62 105 L62 112 L74 112 L72 105 Z"
            id="feet"
            onClick={() => onZoneSelect('feet')}
            className={`transition-all duration-300 ${selectedZone === 'feet' ? 'fill-teal-500/40 stroke-teal-400' : 'fill-white/5 hover:fill-white/10 stroke-white/20'}`}
          />
        </g>
      </svg>

      <div className="absolute top-4 left-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Zone Cible</p>
        <p className="text-xl font-serif italic text-teal-400 capitalize">
          {selectedZone ? zones.find(z => z.id === selectedZone)?.label : 'Corps Complet'}
        </p>
      </div>
    </div>
  );
};
