
import React, { useState, useEffect } from 'react';

const WordCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    chars: 0,
    lines: 0,
    paragraphs: 0
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const chars = text.length;
    const lines = text.trim() === '' ? 0 : text.split('\n').length;
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    
    setStats({ words, chars, lines, paragraphs });
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Words', value: stats.words, icon: 'fa-file-lines' },
          { label: 'Characters', value: stats.chars, icon: 'fa-font' },
          { label: 'Lines', value: stats.lines, icon: 'fa-list' },
          { label: 'Paragraphs', value: stats.paragraphs, icon: 'fa-paragraph' }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 text-center hover:border-[#28a745] transition-all">
            <div className="text-[#28a745] mb-2"><i className={`fa-solid ${item.icon}`}></i></div>
            <div className="text-4xl font-black text-black">{item.value}</div>
            <div className="text-xs text-slate-400 uppercase font-black tracking-widest mt-2">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="relative">
        <textarea
          className="w-full h-80 p-8 border-4 border-slate-100 rounded-[2.5rem] focus:ring-4 focus:ring-[#28a745]/10 focus:border-[#28a745] bg-white text-black font-medium text-xl placeholder-slate-300 outline-none transition-all shadow-inner"
          placeholder="Paste or start typing your content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="absolute top-6 right-6 flex space-x-3">
          <button 
            onClick={handleCopy}
            className="p-4 bg-black hover:bg-[#28a745] rounded-2xl text-white transition-all shadow-xl"
            title="Copy All"
          >
            <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'} text-lg`}></i>
          </button>
          <button 
            onClick={() => setText('')}
            className="p-4 bg-slate-100 hover:bg-red-600 rounded-2xl text-slate-500 hover:text-white transition-all"
            title="Clear"
          >
            <i className="fa-solid fa-trash-can text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
