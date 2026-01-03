import React, { ReactNode, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onHomeClick: () => void;
}

/**
 * Main Layout component that wraps all pages
 * Manages dark mode state and provides structure
 */
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  searchQuery, 
  setSearchQuery, 
  onHomeClick 
}) => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle hydration and dark mode
  useEffect(() => {
    setIsMounted(true);
    
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
    }
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (isMounted) {
      if (isDark) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark, isMounted]);

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 glass-effect border-b-4 border-black shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center">
            <div className="flex items-center">
              <div className="bg-black p-2.5 rounded-xl mr-4">
                <i className="fa-solid fa-screwdriver-wrench text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-black">
                  S.K. Jha <span className="text-[#28a745]">Tools</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onHomeClick={onHomeClick}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      {/* Main Content */}
      <main 
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
        role="main"
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

