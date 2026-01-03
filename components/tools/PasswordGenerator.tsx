
import React, { useState } from 'react';

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-12 py-8">
      <div className="bg-slate-50 p-10 rounded-[3rem] border-4 border-slate-100 text-center shadow-inner">
        <div className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Generated Result</div>
        <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 font-mono text-2xl md:text-3xl break-all min-h-[96px] flex items-center justify-center relative group shadow-sm">
          {password || <span className="text-slate-200 italic">Security starts here</span>}
          {password && (
            <button onClick={handleCopy} className="absolute right-4 top-4 p-3 bg-black text-white rounded-2xl hover:bg-[#28a745] transition-all">
               <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <label className="text-2xl font-black text-black uppercase tracking-tighter">Length: <span className="text-[#28a745]">{length}</span></label>
        </div>
        <input 
          type="range" min="8" max="64" value={length} 
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full h-4 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#28a745]"
        />
        <button 
          onClick={generate}
          className="w-full bg-black text-white py-6 rounded-[2rem] font-black text-2xl hover:bg-[#28a745] transition-all flex items-center justify-center space-x-4 shadow-2xl shadow-black/20"
        >
          <i className="fa-solid fa-rotate"></i>
          <span>Build Secure Key</span>
        </button>
      </div>

      <div className="flex items-center p-8 bg-green-50 text-green-900 rounded-[2.5rem] border-2 border-green-100 space-x-6">
        <div className="bg-[#28a745] text-white p-4 rounded-2xl">
            <i className="fa-solid fa-shield-halved text-3xl"></i>
        </div>
        <p className="font-bold text-lg leading-tight">
            Maximum Privacy: This tool generates data locally in your RAM. No characters are ever transmitted across the network.
        </p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
