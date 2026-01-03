import React from 'react';
import Icon from './ui/Icon';

/**
 * Footer component with:
 * - Brand info
 * - Social links
 * - Categories
 * - Copyright
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fa-user', label: 'Portfolio', href: 'https://skjha.com.np' },
    { icon: 'fa-envelope', label: 'Contact', href: 'mailto:contact@skjha.com.np' },
    { icon: 'fa-github', label: 'Open Source', href: '#' }
  ];

  const categories = [
    'Converters',
    'Calculators',
    'Nepal Special'
  ];

  return (
    <footer 
      className="bg-black text-white py-24 border-t-8 border-[#28a745]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8">
              <div className="bg-[#28a745] p-3 rounded-xl mr-4 shadow-lg shadow-[#28a745]/20">
                <Icon icon="fa-globe" className="text-white text-xl" />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">
                S.K. Jha Tools
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
              A premium collection of high-performance utilities. 100% Client-side. 
              Built for the modern web with a focus on speed, precision, and privacy.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-[#28a745] transition-all"
                  aria-label={link.label}
                >
                  <Icon icon={link.icon} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-white font-black text-xl mb-8 uppercase tracking-[0.2em]">
              Connect
            </h3>
            <ul className="space-y-5 text-slate-400 font-bold text-lg">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:text-[#28a745] transition-all flex items-center"
                  >
                    <Icon icon={link.icon} className="w-8" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-white font-black text-xl mb-8 uppercase tracking-[0.2em]">
              Categories
            </h3>
            <ul className="space-y-5 text-slate-400 font-bold text-lg">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-[#28a745] transition-all">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center font-bold text-slate-500 text-sm">
          <p className="mb-4 md:mb-0">
            © {currentYear} S.K. Jha Tools. Engineered for Excellence.
          </p>
          <div className="flex items-center space-x-4 bg-slate-900 px-6 py-2 rounded-full border border-slate-800">
            <span>Handcrafted in Nepal</span>
            <span className="text-[#28a745] transform scale-125">
              <Icon icon="fa-heart" />
            </span>
            <span className="text-white opacity-80">🇳🇵</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

