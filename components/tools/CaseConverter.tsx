
import React, { useState } from 'react';
import { Copy, Trash2, CheckCircle } from 'lucide-react';

const CaseConverter: React.FC = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const convert = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    let result = text;
    switch (type) {
      case 'upper': result = text.toUpperCase(); break;
      case 'lower': result = text.toLowerCase(); break;
      case 'title':
        result = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        break;
      case 'sentence':
        result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
        break;
    }
    setText(result);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button onClick={() => convert('upper')} className="px-4 py-2 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl text-sm font-bold transition-all">UPPERCASE</button>
        <button onClick={() => convert('lower')} className="px-4 py-2 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl text-sm font-bold transition-all">lowercase</button>
        <button onClick={() => convert('title')} className="px-4 py-2 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl text-sm font-bold transition-all">Title Case</button>
        <button onClick={() => convert('sentence')} className="px-4 py-2 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl text-sm font-bold transition-all">Sentence Case</button>
      </div>
      
      <div className="relative">
        <textarea
          className="w-full h-64 p-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Type or paste text to convert..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
           <button onClick={handleCopy} className="p-2 bg-white border shadow-sm rounded-lg text-slate-600 hover:text-blue-600">
             {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
           </button>
           <button onClick={() => setText('')} className="p-2 bg-white border shadow-sm rounded-lg text-slate-600 hover:text-red-600">
             <Trash2 className="w-5 h-5" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default CaseConverter;
