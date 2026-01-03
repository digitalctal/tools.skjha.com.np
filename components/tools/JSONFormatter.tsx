
import React, { useState } from 'react';
import { Copy, Trash2, CheckCircle, Code } from 'lucide-react';

const JSONFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleFormat = (type: 'pretty' | 'minify') => {
    try {
      const parsed = JSON.parse(input);
      const formatted = type === 'pretty' 
        ? JSON.stringify(parsed, null, 2) 
        : JSON.stringify(parsed);
      setOutput(formatted);
      setError('');
    } catch (e: any) {
      setError('Invalid JSON: ' + e.message);
      setOutput('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-sm font-bold text-slate-700">Input JSON</label>
          <button onClick={() => setInput('')} className="text-xs text-slate-500 hover:text-red-500">Clear</button>
        </div>
        <textarea
          className="w-full h-96 p-4 border border-slate-300 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 bg-white"
          placeholder='{"name": "SK Jha", "role": "Developer"}'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex space-x-3">
          <button 
            onClick={() => handleFormat('pretty')}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Prettify
          </button>
          <button 
            onClick={() => handleFormat('minify')}
            className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg font-bold hover:bg-slate-900 transition-colors"
          >
            Minify
          </button>
        </div>
        {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-sm font-bold text-slate-700">Formatted Output</label>
          <button 
            disabled={!output} 
            onClick={handleCopy}
            className={`flex items-center text-xs font-bold ${output ? 'text-blue-600 hover:text-blue-700' : 'text-slate-300'}`}
          >
            {copied ? <><CheckCircle className="w-3 h-3 mr-1" /> Copied</> : <><Copy className="w-3 h-3 mr-1" /> Copy Output</>}
          </button>
        </div>
        <div className="w-full h-96 p-4 border border-slate-300 rounded-xl font-mono text-sm bg-slate-50 overflow-auto whitespace-pre">
          {output || <span className="text-slate-400 italic">Formatted JSON will appear here...</span>}
        </div>
      </div>
    </div>
  );
};

export default JSONFormatter;
