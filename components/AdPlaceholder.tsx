
import React from 'react';

interface AdPlaceholderProps {
  type: 'banner' | 'sidebar' | 'inline';
  label?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type, label = 'Promoted Content' }) => {
  const styles = {
    banner: 'w-full h-40 md:h-52 my-12',
    sidebar: 'w-full h-[600px] sticky top-28',
    inline: 'w-full h-32 my-10'
  };

  return (
    <div className={`${styles[type]} bg-slate-100 border-4 border-dashed border-slate-200 rounded-[2rem] flex items-center justify-center text-slate-400 overflow-hidden group hover:border-[#28a745] transition-colors`}>
      <div className="text-center px-6">
        <div className="mb-3 opacity-20 group-hover:text-[#28a745] group-hover:opacity-100 transition-all">
            <i className="fa-solid fa-rectangle-ad text-4xl"></i>
        </div>
        <p className="text-xs uppercase font-black tracking-[0.2em]">{label}</p>
        <p className="text-xs font-bold opacity-60">Revenue supports free hosting</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
