
import React, { useState, useEffect } from 'react';
import { RefreshCw, Trash2, Thermometer } from 'lucide-react';

const TemperatureConverter: React.FC = () => {
  const [value, setValue] = useState<string>('0');
  const [fromUnit, setFromUnit] = useState<string>('celsius');
  const [results, setResults] = useState({
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.15
  });

  const convert = (val: number, unit: string) => {
    let c = 0;
    if (unit === 'celsius') c = val;
    else if (unit === 'fahrenheit') c = (val - 32) * 5/9;
    else if (unit === 'kelvin') c = val - 273.15;

    setResults({
      celsius: Number(c.toFixed(4)),
      fahrenheit: Number((c * 9/5 + 32).toFixed(4)),
      kelvin: Number((c + 273.15).toFixed(4))
    });
  };

  useEffect(() => {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      convert(num, fromUnit);
    }
  }, [value, fromUnit]);

  const handleReset = () => {
    setValue('0');
    setFromUnit('celsius');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700">Temperature Value</label>
            <input
              type="number"
              className="w-full px-4 py-3 border-2 border-white rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-xl font-bold bg-white"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700">From Unit</label>
            <select
              className="w-full px-4 py-3 border-2 border-white rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold bg-white appearance-none cursor-pointer"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
              <option value="kelvin">Kelvin (K)</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button 
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 text-slate-500 hover:text-red-500 transition-colors font-bold text-sm"
          >
            <Trash2 className="w-4 h-4" />
            <span>Reset All</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Celsius', value: results.celsius, unit: '°C' },
          { label: 'Fahrenheit', value: results.fahrenheit, unit: '°F' },
          { label: 'Kelvin', value: results.kelvin, unit: 'K' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center group hover:border-blue-300 transition-colors">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">{item.label}</div>
            <div className="text-3xl font-black text-slate-900">{item.value}<span className="text-blue-600 ml-1">{item.unit}</span></div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-bold text-slate-700 uppercase tracking-wider">Unit</th>
              <th className="px-6 py-4 font-bold text-slate-700 uppercase tracking-wider">Result</th>
              <th className="px-6 py-4 font-bold text-slate-700 uppercase tracking-wider">Formula</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-6 py-4 font-medium text-slate-900">Celsius</td>
              <td className="px-6 py-4 font-bold text-blue-600">{results.celsius}°C</td>
              <td className="px-6 py-4 text-slate-500 italic">Base Reference</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-slate-900">Fahrenheit</td>
              <td className="px-6 py-4 font-bold text-blue-600">{results.fahrenheit}°F</td>
              <td className="px-6 py-4 text-slate-500">(°C × 9/5) + 32</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-slate-900">Kelvin</td>
              <td className="px-6 py-4 font-bold text-blue-600">{results.kelvin}K</td>
              <td className="px-6 py-4 text-slate-500">°C + 273.15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TemperatureConverter;
