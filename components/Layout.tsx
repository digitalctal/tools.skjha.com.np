
import React, { ReactNode, useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onHomeClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, searchQuery, setSearchQuery, onHomeClick }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b-4 border-black shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={onHomeClick}
            >
              <div className="bg-black p-2.5 rounded-xl mr-4 group-hover:bg-[#28a745] transition-all transform group-hover:scale-110 shadow-md">
                <i className="fa-solid fa-screwdriver-wrench text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-black leading-none transition-colors">
                  S.K. Jha <span className="text-[#28a745]">Tools</span>
                </h1>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-black tracking-[0.2em]">tools.skjha.com.np</p>
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-lg mx-12">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
                </div>
                <input
                  type="text"
                  className="block w-full pl-14 pr-4 py-4 border-3 border-slate-100 rounded-2xl leading-5 bg-white placeholder-slate-400 focus:outline-none search-focus-ring font-bold transition-all shadow-inner"
                  placeholder="Search 200+ utilities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <nav className="flex items-center space-x-4 md:space-x-8">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="w-12 h-12 flex items-center justify-center text-black hover:text-[#28a745] transition-all rounded-full hover:bg-slate-50"
                title="Toggle Dark Mode"
              >
                <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-2xl`}></i>
              </button>
              <button 
                onClick={onHomeClick}
                className="hidden sm:flex items-center font-black text-lg text-black hover:text-[#28a745] transition-all group"
              >
                <i className="fa-solid fa-house mr-2 transform group-hover:scale-120 transition-transform"></i> 
                <span>Home</span>
              </button>
              <button className="md:hidden w-12 h-12 flex items-center justify-center text-black">
                <i className="fa-solid fa-bars text-2xl"></i>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-24 border-t-8 border-[#28a745]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="bg-[#28a745] p-3 rounded-xl mr-4 shadow-lg shadow-[#28a745]/20">
                    <i className="fa-solid fa-globe text-white text-xl"></i>
                </div>
                <span className="text-3xl font-black text-white tracking-tighter">S.K. Jha Tools</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                A premium collection of high-performance utilities. 100% Client-side. Built for the modern web with a focus on speed, precision, and privacy.
              </p>
            </div>
            <div>
              <h3 className="text-white font-black text-xl mb-8 uppercase tracking-[0.2em]">Connect</h3>
              <ul className="space-y-5 text-slate-400 font-bold text-lg">
                <li><a href="https://skjha.com.np" target="_blank" className="hover:text-[#28a745] transition-all flex items-center"><i className="fa-solid fa-user w-8"></i> Portfolio</a></li>
                <li><a href="#" className="hover:text-[#28a745] transition-all flex items-center"><i className="fa-solid fa-envelope w-8"></i> Contact</a></li>
                <li><a href="#" className="hover:text-[#28a745] transition-all flex items-center"><i className="fa-brands fa-github w-8"></i> Open Source</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black text-xl mb-8 uppercase tracking-[0.2em]">Categories</h3>
              <ul className="space-y-5 text-slate-400 font-bold text-lg">
                <li><a href="#" className="hover:text-[#28a745] transition-all">Converters</a></li>
                <li><a href="#" className="hover:text-[#28a745] transition-all">Calculators</a></li>
                <li><a href="#" className="hover:text-[#28a745] transition-all">Nepal Special</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-24 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center font-bold text-slate-500 text-sm">
            <p className="mb-4 md:mb-0">© {new Date().getFullYear()} S.K. Jha Tools. Engineered for Excellence.</p>
            <div className="flex items-center space-x-4 bg-slate-900 px-6 py-2 rounded-full border border-slate-800">
              <span>Handcrafted in Nepal</span>
              <span className="text-[#28a745] transform scale-125"><i className="fa-solid fa-heart"></i></span>
              <span className="text-white opacity-80">🇳🇵</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
