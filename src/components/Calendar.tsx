import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';

interface CalendarProps {
  onScheduleSelect: (time: 'morning' | 'evening', date: Date) => void;
  scheduledSessions: Record<string, { morning: boolean; evening: boolean }>;
}

export const DuoCalendar = ({ onScheduleSelect, scheduledSessions }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const padding = Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }, (_, i) => i);

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const getSessionKey = (day: number) => {
    return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
  };

  return (
    <div className="bg-white/5 rounded-3xl p-6 border border-white/5 shadow-inner">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-500/10 rounded-xl border border-teal-500/20">
            <CalendarIcon className="w-5 h-5 text-teal-400" />
          </div>
          <h2 className="text-xl font-serif italic text-white tracking-tight">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
        </div>
        <div className="flex gap-2 text-slate-400">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
            className="p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
            className="p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day) => (
          <div key={day} className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {padding.map((_, i) => (
          <div key={`pad-${i}`} className="aspect-square" />
        ))}
        {days.map((day) => {
          const key = getSessionKey(day);
          const sessions = scheduledSessions[key] || { morning: false, evening: false };

          return (
            <motion.div
              key={day}
              whileTap={{ scale: 0.95 }}
              className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all border ${
                isToday(day) ? 'bg-teal-500/10 border-teal-500/30' : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}
            >
              <span className={`text-sm font-medium ${isToday(day) ? 'text-teal-400 font-bold' : 'text-slate-400'}`}>
                {day}
              </span>

              <div className="flex gap-1 mt-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onScheduleSelect('morning', new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
                  }}
                  className={`p-0.5 rounded-full transition-all ${sessions.morning ? 'text-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.5)]' : 'text-slate-700 hover:text-teal-500/50'}`}
                >
                  <Sun className="w-3 h-3" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onScheduleSelect('evening', new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
                  }}
                  className={`p-0.5 rounded-full transition-all ${sessions.evening ? 'text-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.5)]' : 'text-slate-700 hover:text-teal-500/50'}`}
                >
                  <Moon className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
