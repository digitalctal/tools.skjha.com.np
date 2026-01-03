
import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onClick: (id: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  return (
    <div 
      className="card-minimal group cursor-pointer h-full flex flex-col"
      onClick={() => onClick(tool.id)}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl group-hover:bg-[#28a745] group-hover:text-white transition-all flex items-center justify-center text-black">
          {tool.icon}
        </div>
        <div className="text-slate-200 group-hover:text-[#28a745] transition-colors">
          <i className="fa-solid fa-chevron-right text-2xl"></i>
        </div>
      </div>
      
      <h3 className="text-2xl font-black mb-3 group-hover:text-[#28a745] transition-colors">
        {tool.name}
      </h3>
      
      <p className="text-slate-500 font-bold text-lg leading-snug mb-8 flex-grow">
        {tool.description}
      </p>
      
      <div className="pt-6 border-t border-slate-100">
        <span className="text-xs font-black uppercase tracking-widest text-slate-400">
          <i className="fa-solid fa-tag mr-2"></i> {tool.category}
        </span>
      </div>
    </div>
  );
};

export default ToolCard;
