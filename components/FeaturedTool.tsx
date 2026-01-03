
import React from 'react';
import { Tool } from '../types';

interface FeaturedToolProps {
  tool: Tool;
  onSelect: (id: string) => void;
}

const FeaturedTool: React.FC<FeaturedToolProps> = ({ tool, onSelect }) => {
  return (
    <div className="relative overflow-hidden bg-black border-4 border-black rounded-[4rem] p-12 md:p-20 mb-24 shadow-2xl shadow-black/20 group text-white">
      <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
         <div className="text-[12rem] font-black leading-none">{tool.name.charAt(0)}</div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-12">
        <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-[#28a745] rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-[#28a745]/30">
          <div className="text-4xl md:text-5xl">{tool.icon}</div>
        </div>
        
        <div className="flex-grow">
          <div className="inline-flex items-center space-x-3 text-[#28a745] font-black text-sm uppercase tracking-[0.3em] mb-6">
            <i className="fa-solid fa-star"></i>
            <span>Daily Highlight</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            {tool.name}
          </h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mb-10 leading-relaxed">
            {tool.description}
          </p>
          <button 
            onClick={() => onSelect(tool.id)}
            className="inline-flex items-center px-12 py-5 bg-white text-black rounded-[1.5rem] font-black text-xl hover:bg-[#28a745] hover:text-white transition-all group/btn shadow-xl"
          >
            Launch Tool <i className="fa-solid fa-arrow-right ml-4 group-hover/btn:translate-x-3 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTool;
