import React from 'react';
import Icon from './ui/Icon';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onHomeClick: () => void;
  isDark: boolean;
  setIsDark: (v: boolean) => void;
}

/**
 * Header component with:
 * - Logo with hover animation
 * - Search bar (desktop)
 * - Dark mode toggle
 * - Navigation
 */
const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  onHomeClick,
  isDark,
  setIsDark 
}) => {
  return (
    <header 
      className="sticky top-0 z-50 glass-effect border-b-4 border-black shadow-lg"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={onHomeClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onHomeClick()}
          >
            <div className="bg-black p-2.5 rounded-xl mr-4 group-hover:bg-[#28a745] transition-all transform group-hover:scale-110 shadow-md">
              <Icon icon="fa-screwdriver-wrench" className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-black leading-none transition-colors">
                S.K. Jha <span className="text-[#28a745]">Tools</span>
              </h1>
              <p className="text-[10px] md:text-xs text-slate-500 uppercase font-black tracking-[0.2em]">
                tools.skjha.com.np
              </p>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-12">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Icon icon="fa-magnifying-glass" className="text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-14 pr-4 py-4 border-3 border-slate-100 rounded-2xl leading-5 bg-white placeholder-slate-400 focus:outline-none search-focus-ring font-bold transition-all shadow-inner dark:bg-[#111] dark:text-white dark:border-slate-800"
                placeholder="Search 200+ utilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search tools"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 md:space-x-8" role="navigation" aria-label="Main navigation">
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="w-12 h-12 flex items-center justify-center text-black hover:text-[#28a745] transition-all rounded-full hover:bg-slate-50"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <Icon icon={isDark ? 'fa-sun' : 'fa-moon'} className="text-2xl" />
            </button>

            {/* Home Button */}
            <button 
              onClick={onHomeClick}
              className="hidden sm:flex items-center font-black text-lg text-black hover:text-[#28a745] transition-all group"
            >
              <Icon icon="fa-house" className="mr-2 transform group-hover:scale-120 transition-transform" />
              <span>Home</span>
            </button>

            {/* Mobile Menu */}
            <button 
              className="md:hidden w-12 h-12 flex items-center justify-center text-black"
              aria-label="Open menu"
            >
              <Icon icon="fa-bars" className="text-2xl" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

