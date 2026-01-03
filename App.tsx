
import React, { useState, useMemo, useEffect } from 'react';
import Layout from './components/Layout';
import ToolCard from './components/ToolCard';
import AdPlaceholder from './components/AdPlaceholder';
import FeaturedTool from './components/FeaturedTool';
import { TOOLS } from './constants';
import { Category, Tool } from './types';

// Tool Components
import WordCounter from './components/tools/WordCounter';
import JSONFormatter from './components/tools/JSONFormatter';
import BMIForm from './components/tools/BMIForm';
import CaseConverter from './components/tools/CaseConverter';
import PasswordGenerator from './components/tools/PasswordGenerator';
import TemperatureConverter from './components/tools/TemperatureConverter';
import NepaliPatro from './components/tools/NepaliPatro';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/tool/', '');
      if (hash && hash !== '#/') {
        setSelectedToolId(hash);
      } else {
        setSelectedToolId(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToolClick = (id: string) => {
    window.location.hash = `#/tool/${id}`;
    setSelectedToolId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    window.location.hash = '';
    setSelectedToolId(null);
    setSearchQuery('');
    setActiveCategory('All');
  };

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const selectedTool = TOOLS.find(t => t.id === selectedToolId);
  const featuredTool = TOOLS.find(t => t.id === 'nepali-patro') || TOOLS[0]; 

  const renderTool = () => {
    if (!selectedToolId) return null;
    switch (selectedToolId) {
      case 'word-counter': return <WordCounter />;
      case 'json-formatter': return <JSONFormatter />;
      case 'bmi-calculator': return <BMIForm />;
      case 'case-converter': return <CaseConverter />;
      case 'password-generator': return <PasswordGenerator />;
      case 'temp-converter': return <TemperatureConverter />;
      case 'nepali-patro': return <NepaliPatro />;
      default:
        return (
          <div className="bg-white p-12 rounded-[2.5rem] border-4 border-black text-center space-y-8">
            <div className="inline-flex p-6 bg-yellow-100 text-yellow-700 rounded-full">
               <i className="fa-solid fa-triangle-exclamation text-4xl"></i>
            </div>
            <h2 className="text-3xl font-black">Feature Coming Soon</h2>
            <p className="text-slate-500 max-w-sm mx-auto font-bold text-lg">
              Our engineering team is currently building the {selectedTool?.name || 'requested tool'}.
            </p>
            <button 
              onClick={handleHomeClick}
              className="btn-brand"
            >
              Back to Directory
            </button>
          </div>
        );
    }
  };

  return (
    <Layout 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery} 
      onHomeClick={handleHomeClick}
    >
      {selectedToolId && selectedTool ? (
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <button onClick={handleHomeClick} className="flex items-center text-lg font-black text-black hover:text-[#28a745] transition-all group">
               <i className="fa-solid fa-arrow-left mr-3 group-hover:-translate-x-2 transition-transform"></i> 
               <span>Back to Directory</span>
            </button>
            <div className="px-6 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-[0.2em]">
              {selectedTool.category}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-24 h-24 bg-black text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-[#28a745]/10 flex-shrink-0">
                {selectedTool.icon}
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">{selectedTool.name}</h2>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-3xl">{selectedTool.description}</p>
              </div>
            </div>
          </div>

          <AdPlaceholder type="banner" label="Header Ad" />

          <div className="card-minimal mb-16">
            {renderTool()}
          </div>

          <AdPlaceholder type="banner" label="Footer Ad" />
          
          <div className="mt-24">
            <div className="flex items-center space-x-4 mb-10">
               <i className="fa-solid fa-bolt text-[#28a745] text-2xl"></i>
               <h3 className="text-3xl font-black tracking-tight uppercase">Suggested Tools</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {TOOLS.filter(t => t.id !== selectedToolId).slice(0, 3).map(tool => (
                <ToolCard key={tool.id} tool={tool} onClick={handleToolClick} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="text-center py-20 md:py-32 animate-in fade-in duration-1000">
            <div className="inline-flex items-center space-x-3 bg-black text-white px-6 py-2.5 rounded-full text-sm font-black mb-10 uppercase tracking-widest">
              <span className="text-[#28a745]"><i className="fa-solid fa-flag"></i></span> 
              <span>Nepal's Premium Tool Collection</span>
            </div>
            <h1 className="display-large font-black text-black mb-10 tracking-tighter">
              Precision Tools <br className="hidden md:block" />
              For The <span className="text-[#28a745]">Modern Creator.</span>
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
              Free, high-performance web utilities optimized for speed and total privacy. 
              Built for developers, designers, and students in Nepal and beyond.
            </p>
            
            <div className="max-w-3xl mx-auto relative group mb-24">
              <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-slate-300 text-xl group-focus-within:text-[#28a745] transition-colors"></i>
              </div>
              <input
                type="text"
                className="w-full pl-20 pr-10 py-7 bg-white border-4 border-slate-100 rounded-[2rem] text-2xl font-bold shadow-2xl shadow-slate-200/40 outline-none focus:border-[#28a745] transition-all search-focus-ring"
                placeholder="Search 200+ free utilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </section>

          {!searchQuery && <FeaturedTool tool={featuredTool} onSelect={handleToolClick} />}

          <AdPlaceholder type="banner" label="Home Banner" />

          {/* Categories Grid */}
          <div className="flex overflow-x-auto pb-10 mb-16 space-x-4 no-scrollbar">
            {(['All', ...Object.values(Category)] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`flex-shrink-0 px-10 py-4 rounded-2xl text-lg font-black tracking-tight transition-all border-2 ${
                  activeCategory === cat 
                  ? 'bg-black text-white border-black shadow-2xl shadow-black/20' 
                  : 'bg-white border-slate-100 text-slate-500 hover:border-[#28a745] hover:text-[#28a745]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-32">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} onClick={handleToolClick} />
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-slate-50 rounded-[4rem] border-4 border-dashed border-slate-200 mb-32">
               <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
                 <i className="fa-solid fa-search-minus text-5xl text-slate-200"></i>
               </div>
               <h3 className="text-4xl font-black mb-4">No tools found</h3>
               <p className="text-slate-400 text-xl font-bold">Try different keywords or browse categories.</p>
               <button onClick={() => setSearchQuery('')} className="mt-12 text-[#28a745] text-2xl font-black hover:underline underline-offset-8 decoration-4">Clear All Filters</button>
            </div>
          )}

          <div className="bg-black rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden mb-32">
             <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Can't find it?<br/><span className="text-[#28a745]">We'll build it.</span></h2>
                  <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                    Our library grows every single day. If you need a custom calculator or converter, our team will develop it for you at no cost.
                  </p>
                  <a href="mailto:contact@skjha.com.np" className="inline-block bg-[#28a745] text-white px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-[#1e7e34] transition-all shadow-2xl shadow-[#28a745]/30">
                    <i className="fa-solid fa-paper-plane mr-3"></i> Request Tool
                  </a>
               </div>
               <div className="grid grid-cols-2 gap-6 animate-float opacity-40 md:opacity-100">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10">
                       <div className="w-16 h-16 bg-[#28a745]/20 rounded-2xl mb-6"></div>
                       <div className="w-full h-4 bg-white/10 rounded-full mb-3"></div>
                       <div className="w-2/3 h-4 bg-white/10 rounded-full"></div>
                    </div>
                  ))}
               </div>
             </div>
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(40,167,69,0.1),_transparent)]"></div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default App;
