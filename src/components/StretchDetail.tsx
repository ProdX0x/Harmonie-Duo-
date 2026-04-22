import { motion } from 'motion/react';
import { X, Play, Info, Sparkles, Clock, Target } from 'lucide-react';
import { Stretch } from '../data/stretches';

interface StretchDetailProps {
  stretch: Stretch;
  onClose: () => void;
  onStart: () => void;
}

export const StretchDetail = ({ stretch, onClose, onStart }: StretchDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0c0e]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="bg-[#141417] w-full max-w-lg rounded-[40px] overflow-hidden border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full">
          <img
            src={stretch.image}
            alt={stretch.exerciseName}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-black/40 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-6 left-8">
             <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded-full text-[9px] font-bold uppercase tracking-widest border border-teal-500/20">
                  {stretch.zone}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest border ${
                  stretch.intensity === 'high' ? 'bg-rose-500/20 text-rose-400 border-rose-500/20' : 
                  stretch.intensity === 'medium' ? 'bg-orange-500/20 text-orange-400 border-orange-500/20' : 
                  'bg-teal-500/20 text-teal-400 border-teal-500/20'
                }`}>
                  Intensité {stretch.intensity}
                </span>
             </div>
             <h2 className="text-3xl font-serif italic text-white leading-tight">{stretch.exerciseName}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-around py-4 border-y border-white/5">
             <div className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">{stretch.duration}s</span>
                <span className="text-[8px] text-slate-600 uppercase tracking-tighter">Durée</span>
             </div>
             <div className="w-px h-8 bg-white/5"></div>
             <div className="flex flex-col items-center gap-1">
                <Target className="w-4 h-4 text-slate-500" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest truncate max-w-[80px]">{stretch.muscle}</span>
                <span className="text-[8px] text-slate-600 uppercase tracking-tighter">Muscle</span>
             </div>
          </div>

          <div className="space-y-3">
             <p className="text-slate-200 text-[15px] leading-relaxed italic font-serif opacity-90">
               "{stretch.description}"
             </p>
          </div>

          <div className="space-y-4">
             <div className="p-5 bg-white/[0.02] rounded-3xl border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Rôle Partenaire A</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed pl-3.5">{stretch.partnerRoleA}</p>
             </div>
             <div className="p-5 bg-white/[0.02] rounded-3xl border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Rôle Partenaire B</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pl-3.5">{stretch.partnerRoleB}</p>
             </div>
          </div>

          <div className="p-5 bg-teal-500/5 rounded-3xl border border-teal-500/10 flex items-start gap-4">
            <Sparkles className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
               <p className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">Le Saviez-vous ?</p>
               <p className="text-[12px] text-teal-200/60 italic leading-relaxed">{stretch.funFact}</p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onStart();
            }}
            className="w-full py-5 bg-teal-500 text-dark-bg rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-teal-400 transition-all shadow-xl shadow-teal-500/20 flex items-center justify-center gap-3"
          >
            <Play size={14} fill="currentColor" />
            Commencer cet étirement
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
