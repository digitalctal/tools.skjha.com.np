
import React, { useState } from 'react';
import { Scale } from 'lucide-react';

const BMIForm: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    if (w > 0 && h > 0) {
      const result = w / (h * h);
      setBmi(parseFloat(result.toFixed(1)));
    }
  };

  const getStatus = (val: number) => {
    if (val < 18.5) return { text: 'Underweight', color: 'text-yellow-600' };
    if (val < 25) return { text: 'Normal', color: 'text-green-600' };
    if (val < 30) return { text: 'Overweight', color: 'text-orange-600' };
    return { text: 'Obese', color: 'text-red-600' };
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Weight (kg)</label>
          <input 
            type="number" 
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
            placeholder="e.g. 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Height (cm)</label>
          <input 
            type="number" 
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
            placeholder="e.g. 175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button 
          onClick={calculate}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
        >
          Calculate BMI
        </button>
      </div>

      {bmi && (
        <div className="pt-6 border-t text-center animate-in zoom-in-95 duration-300">
          <div className="text-sm text-slate-500 font-medium mb-1 uppercase tracking-wider">Your BMI Result</div>
          <div className="text-5xl font-black text-slate-900 mb-2">{bmi}</div>
          <div className={`text-lg font-bold ${getStatus(bmi).color}`}>
            {getStatus(bmi).text}
          </div>
          <div className="mt-4 text-[10px] text-slate-400 leading-tight">
            Standard BMI Categories: <br/>
            Underweight: &lt; 18.5 | Normal: 18.5 – 24.9 | Overweight: 25 – 29.9 | Obese: ≥ 30
          </div>
        </div>
      )}
    </div>
  );
};

export default BMIForm;
