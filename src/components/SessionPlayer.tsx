import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, X, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { Stretch, STRETCHES } from '../data/stretches';

interface SessionPlayerProps {
  stretchIds: string[];
  onComplete: () => void;
  onClose: () => void;
  routineName: string;
}

export const SessionPlayer = ({ stretchIds, onComplete, onClose, routineName }: SessionPlayerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentStretch = STRETCHES.find(s => s.id === stretchIds[currentIndex]);

  useEffect(() => {
    if (currentStretch) {
      setTimeLeft(currentStretch.duration);
    }
  }, [currentIndex, currentStretch]);

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      handleNext();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleNext = () => {
    if (currentIndex < stretchIds.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsActive(false);
    } else {
      setIsFinished(true);
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsActive(false);
    }
  };

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0c0c0e] flex flex-col items-center justify-center p-6 text-center">
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           className="w-24 h-24 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-12 h-12 text-teal-400" />
        </motion.div>
        <h2 className="text-4xl font-serif italic text-white mb-2">Séance terminée</h2>
        <p className="text-slate-500 mb-8 max-w-md text-sm leading-relaxed">Bravo à tous les deux. Votre corps et votre esprit sont désormais synchronisés.</p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-teal-500 text-dark-bg rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20"
        >
          Retourner au Rituel
        </button>
      </div>
    );
  }

  if (!currentStretch) return null;

  return (
    <div className="fixed inset-0 z-50 bg-dark-bg flex flex-col">
      {/* Header */}
      <div className="bg-dark-bg/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-400 leading-none mb-1">{routineName}</p>
          <p className="font-serif italic text-slate-400 text-sm">Étape {currentIndex + 1} / {stretchIds.length}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-600 transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-0.5 w-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / stretchIds.length) * 100}%` }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center">
        <motion.div
          key={currentStretch.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full max-w-2xl text-center"
        >
          {/* Exercise Illustration */}
          <div className="w-full aspect-video bg-[#141417] rounded-3xl mb-10 flex items-center justify-center border border-white/5 overflow-hidden shadow-2xl relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05),_transparent)]"></div>
             <div className="relative w-full h-full p-8">
                <svg viewBox="0 0 200 120" className="w-full h-full stroke-teal-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.15)]" fill="none" strokeWidth="1.2" strokeLinecap="round">
                   {/* Person A Abstract */}
                   <circle cx="80" cy="40" r="10" />
                   <path d="M80 50 L80 80 L60 110 M80 80 L100 110" />
                   <path d="M80 60 L100 70" />

                   {/* Person B Abstract */}
                   <circle cx="120" cy="40" r="10" strokeOpacity="0.4" />
                   <path d="M120 50 L120 80 L140 110 M120 80 L100 110" strokeOpacity="0.4" />
                   <path d="M120 60 L100 70" strokeOpacity="0.4" />
                </svg>
             </div>
             <div className="absolute bottom-4 right-6 flex items-center gap-1">
                {stretchIds.map((_, idx) => (
                  <div key={idx} className={`h-1 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-teal-500' : 'w-2 bg-white/10'}`}></div>
                ))}
             </div>
          </div>

          <span className="text-teal-400 font-serif italic text-lg mb-2 block tracking-tight">Ressenti & Union</span>
          <h2 className="text-4xl font-serif text-white mb-6 leading-tight max-w-sm mx-auto">{currentStretch.exerciseName}</h2>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-10 border-l-2 border-teal-500/30 pl-6 italic text-left max-w-md mx-auto">
            {currentStretch.description}
          </p>

          <div className="grid grid-cols-1 gap-4 mb-8 text-left max-w-md mx-auto">
            <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Rôle Partenaire A</p>
              <p className="text-slate-300 text-sm leading-relaxed">{currentStretch.partnerRoleA}</p>
            </div>
            <div className="p-5 bg-white/[0.03] rounded-2xl border border-white/5 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Rôle Partenaire B</p>
              <p className="text-slate-400 text-sm leading-relaxed">{currentStretch.partnerRoleB}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Controls */}
      <div className="bg-[#0c0c0e] border-t border-white/5 p-8 flex flex-col items-center gap-10">
        <div className="flex items-center justify-center gap-12">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 text-slate-700 hover:text-teal-400 disabled:opacity-10 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative flex flex-col items-center min-w-[120px]">
            <span className="text-5xl font-mono text-white tracking-tighter tabular-nums leading-none">
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-600 mt-3 font-bold">Durée Restante</span>
          </div>

          <button
            onClick={handleNext}
            className="p-3 text-slate-700 hover:text-teal-400 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="flex items-center gap-4 w-full max-w-sm">
          <button
            onClick={() => setTimeLeft(currentStretch.duration)}
            className="p-4 bg-white/5 text-slate-500 rounded-2xl hover:text-teal-400 transition-all border border-white/5"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-full text-dark-bg font-bold text-xs uppercase tracking-widest transition-all shadow-xl ${
              isActive ? 'bg-orange-500 shadow-orange-500/20' : 'bg-teal-500 shadow-teal-500/20 hover:bg-teal-400'
            }`}
          >
            {isActive ? (
              <><Pause className="w-4 h-4 fill-current" /> Pause</>
            ) : (
              <><Play className="w-4 h-4 fill-current" /> Commencer</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
