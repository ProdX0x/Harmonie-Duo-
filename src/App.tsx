/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Calendar as CalendarIcon,
  Accessibility,
  Flame,
  Moon,
  Sun,
  LayoutDashboard,
  MoreVertical,
  ChevronRight,
  Clock,
  Heart
} from 'lucide-react';
import { STRETCHES, MORNING_ROUTINE, EVENING_ROUTINE, Stretch } from './data/stretches';
import { BodyMap } from './components/BodyMap';
import { DuoCalendar } from './components/Calendar';
import { SessionPlayer } from './components/SessionPlayer';
import { StretchDetail } from './components/StretchDetail';

type View = 'dashboard' | 'explore' | 'routines' | 'settings';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedZone, setSelectedZone] = useState<Stretch['zone'] | null>(null);
  const [activeRoutine, setActiveRoutine] = useState<{ ids: string[]; name: string } | null>(null);
  const [selectedStretchId, setSelectedStretchId] = useState<string | null>(null);
  const [scheduledSessions, setScheduledSessions] = useState<Record<string, { morning: boolean; evening: boolean }>>({
     [`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`]: { morning: true, evening: false }
  });

  const handleScheduleSelect = (type: 'morning' | 'evening', date: Date) => {
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    setScheduledSessions(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [type]: !prev[key]?.[type]
      }
    }));
  };

  const filteredStretches = selectedZone
    ? STRETCHES.filter(s => s.zone === selectedZone)
    : STRETCHES;

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-slate-200 font-sans pb-24 selection:bg-teal-500/30">
      {/* Header */}
      <header className="px-6 py-8 flex items-center justify-between sticky top-0 bg-[#0c0c0e]/80 backdrop-blur-md z-40 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-500 rounded-2xl flex items-center justify-center transform -rotate-3 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
             <Heart className="w-6 h-6 text-dark-bg fill-current" />
          </div>
          <div>
            <h1 className="text-2xl font-serif italic font-semibold text-teal-400 tracking-tight leading-none mb-1">DuoStretch</h1>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none">Rituel Bien-être</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/5 rounded-full px-4 py-2 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-[11px] font-medium tracking-tight">MODE DUO</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 space-y-12 mt-8">
        <AnimatePresence mode="wait">
          {currentView === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Daily Quote / Greeting */}
              <div className="space-y-1">
                <h2 className="text-3xl font-serif italic text-white flex items-center gap-2">
                  Bonjour <span className="text-teal-400 inline-block h-2 w-2 rounded-full bg-teal-400"></span>
                </h2>
                <p className="text-slate-500 text-sm">Prêts pour votre moment de connexion ?</p>
              </div>

              {/* Routines Quick Access */}
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => setActiveRoutine({ ids: MORNING_ROUTINE, name: 'Rituel Matin' })}
                  className="group relative overflow-hidden bg-white/5 p-6 rounded-[32px] border border-white/5 flex items-center justify-between transition-all hover:bg-white/10 hover:border-white/10"
                >
                  <div className="flex items-center gap-4 z-10 text-left">
                    <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif italic text-white">Routine Matin</h3>
                      <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Éveil • 6 ÉTAPES</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-teal-400/40 group-hover:text-teal-400 transform group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => setActiveRoutine({ ids: EVENING_ROUTINE, name: 'Routine Soir' })}
                  className="group relative overflow-hidden bg-white/5 p-6 rounded-[32px] border border-white/5 flex items-center justify-between transition-all hover:bg-white/10 hover:border-white/10"
                >
                  <div className="flex items-center gap-4 z-10 text-left">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-teal-400 transition-colors">
                      <Moon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif italic text-white">Routine Soir</h3>
                      <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Détente • 6 ÉTAPES</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-teal-400 transform group-hover:translate-x-1 transition-all" />
                </button>
              </div>

              {/* Calendar Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between px-2">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Calendrier Hebdo</h3>
                </div>
                <DuoCalendar
                  scheduledSessions={scheduledSessions}
                  onScheduleSelect={handleScheduleSelect}
                />
              </div>
            </motion.div>
          )}

          {currentView === 'explore' && (
            <motion.div
              key="explore"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10 pb-12"
            >
              <div className="space-y-1">
                <h2 className="text-3xl font-serif italic text-white">Exploration</h2>
                <p className="text-slate-500 text-sm uppercase tracking-widest">Zones Musculaires</p>
              </div>

              <BodyMap
                selectedZone={selectedZone}
                onZoneSelect={setSelectedZone}
              />

              <div className="space-y-6">
                <div className="flex items-center justify-between px-2">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    {selectedZone ? `${selectedZone}` : 'Tous les Muscles'}
                  </h3>
                  <span className="text-xs font-serif italic text-teal-400">{filteredStretches.length} trouvés</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {filteredStretches.map(stretch => (
                    <motion.div
                      layout
                      key={stretch.id}
                      onClick={() => setSelectedStretchId(stretch.id)}
                      className="group bg-white/5 p-4 rounded-3xl border border-white/5 flex items-center justify-between transition-all hover:bg-white/10 hover:border-white/10 hover:translate-x-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                         <div className="w-14 h-14 bg-white/5 rounded-2xl overflow-hidden border border-white/10 group-hover:border-teal-500/30 transition-all">
                            <img 
                              src={stretch.image} 
                              alt="" 
                              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                              referrerPolicy="no-referrer"
                            />
                         </div>
                         <div className="text-left">
                            <h4 className="font-medium text-slate-200 group-hover:text-white transition-colors">{stretch.exerciseName}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[9px] text-slate-500 uppercase tracking-widest leading-none">{stretch.muscle}</span>
                              <span className={`w-1 h-1 rounded-full ${stretch.intensity === 'high' ? 'bg-rose-500' : stretch.intensity === 'medium' ? 'bg-orange-400' : 'bg-teal-500'}`}></span>
                              <span className="text-[9px] text-slate-600 uppercase tracking-widest leading-none">{stretch.duration}s</span>
                            </div>
                         </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveRoutine({ ids: [stretch.id], name: stretch.exerciseName });
                        }}
                        className="w-10 h-10 bg-teal-500 text-dark-bg rounded-full flex items-center justify-center hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/10"
                      >
                         <Play size={14} fill="currentColor" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-1.5 flex items-center justify-around shadow-2xl z-40">
        <button
          onClick={() => setCurrentView('dashboard')}
          className={`flex items-center gap-2 px-6 h-12 rounded-full transition-all ${
            currentView === 'dashboard' ? 'bg-teal-500 text-dark-bg font-bold shadow-lg shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          {currentView === 'dashboard' && <span className="text-[10px] uppercase tracking-widest font-bold">Rituel</span>}
        </button>
        <button
          onClick={() => setCurrentView('explore')}
          className={`flex items-center gap-2 px-6 h-12 rounded-full transition-all ${
            currentView === 'explore' ? 'bg-teal-500 text-dark-bg font-bold shadow-lg shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Accessibility className="w-5 h-5" />
          {currentView === 'explore' && <span className="text-[10px] uppercase tracking-widest font-bold">Corps</span>}
        </button>
        <button
          onClick={() => setCurrentView('routines')}
          className={`flex items-center gap-2 px-6 h-12 rounded-full transition-all ${
            currentView === 'routines' ? 'bg-teal-500 text-dark-bg font-bold shadow-lg shadow-teal-500/20' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Flame className="w-5 h-5" />
          {currentView === 'routines' && <span className="text-[10px] uppercase tracking-widest font-bold">Stats</span>}
        </button>
      </nav>

      {/* Routine Player Overlay */}
      <AnimatePresence>
        {activeRoutine && (
          <SessionPlayer
            stretchIds={activeRoutine.ids}
            routineName={activeRoutine.name}
            onClose={() => setActiveRoutine(null)}
            onComplete={() => {}}
          />
        )}
      </AnimatePresence>

      {/* Stretch Detail Modal */}
      <AnimatePresence>
        {selectedStretchId && (
          <StretchDetail
            stretch={STRETCHES.find(s => s.id === selectedStretchId)!}
            onClose={() => setSelectedStretchId(null)}
            onStart={() => {
              const stretch = STRETCHES.find(s => s.id === selectedStretchId);
              if (stretch) {
                setActiveRoutine({ ids: [stretch.id], name: stretch.exerciseName });
                setSelectedStretchId(null);
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Minimalist local helper since we use lucide-react Play but it's not imported globally in code above
function Play({ size, fill, className }: { size?: number, fill?: string, className?: string }) {
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
