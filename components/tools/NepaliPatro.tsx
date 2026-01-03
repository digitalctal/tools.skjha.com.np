
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin } from 'lucide-react';

const NepaliPatro: React.FC = () => {
  // Simplified Nepali Months and typical lengths (approximate for UI)
  const nepaliMonths = [
    "Baishakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin", 
    "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Current BS Year/Month (Approximate based on 2081 Jestha)
  const [currentBS, setCurrentBS] = useState({ year: 2081, month: 2 }); // Jestha = 1 (index)
  const [today, setToday] = useState({ day: 22, month: 1, year: 2081 }); // Example today

  const nextMonth = () => {
    setCurrentBS(prev => {
      let nm = prev.month + 1;
      let ny = prev.year;
      if (nm > 11) { nm = 0; ny++; }
      return { year: ny, month: nm };
    });
  };

  const prevMonth = () => {
    setCurrentBS(prev => {
      let nm = prev.month - 1;
      let ny = prev.year;
      if (nm < 0) { nm = 11; ny--; }
      return { year: ny, month: nm };
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm gap-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
            <CalendarIcon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900">{nepaliMonths[currentBS.month]} {currentBS.year}</h3>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Bikram Sambat Calendar</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={prevMonth} className="p-3 hover:bg-slate-100 rounded-xl transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => setCurrentBS({ year: 2081, month: 1 })} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold text-sm">Today</button>
          <button onClick={nextMonth} className="p-3 hover:bg-slate-100 rounded-xl transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
        <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200">
          {daysOfWeek.map(day => (
            <div key={day} className="py-4 text-center text-xs font-black uppercase tracking-widest text-slate-400">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: 32 }).map((_, i) => (
            <div 
              key={i} 
              className={`h-24 md:h-32 p-4 border-r border-b border-slate-100 flex flex-col justify-between hover:bg-slate-50 transition-colors cursor-pointer ${i + 1 === 22 && currentBS.month === 1 ? 'bg-red-50/50' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-xl font-black ${i + 1 === 22 && currentBS.month === 1 ? 'text-red-600' : 'text-slate-800'}`}>{i + 1}</span>
                <span className="text-[10px] text-slate-400 font-medium">Jun {i + 5}</span>
              </div>
              {i === 14 && (
                <div className="bg-red-100 text-red-700 text-[9px] font-bold px-1.5 py-0.5 rounded leading-tight">
                  Festival Day
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-red-600" /> Upcoming Festivals
          </h4>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-slate-700 font-medium">Ganga Dashahara</span>
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Jestha 32</span>
            </li>
            <li className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-slate-700 font-medium">Nirjala Ekadashi</span>
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Ashadh 04</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
          <h4 className="text-lg font-bold mb-4">Date Converter</h4>
          <div className="space-y-4">
            <input type="date" className="w-full bg-slate-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-red-500" />
            <div className="p-4 bg-slate-800 rounded-xl text-center">
               <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Converted BS Date</div>
               <div className="text-xl font-bold">Jestha 22, 2081</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NepaliPatro;
