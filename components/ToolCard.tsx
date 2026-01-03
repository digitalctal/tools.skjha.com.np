import React from 'react';
import { Tool } from '../../types';
import Icon from '../ui/Icon';

interface ToolCardProps {
  tool: Tool;
  onClick: (id: string) => void;
  /** Show loading skeleton */
  isLoading?: boolean;
  /** Show popularity badge */
  showBadge?: boolean;
  /** Badge type */
  badgeType?: 'new' | 'popular' | 'updated';
}

/**
 * Enhanced ToolCard component with:
 * - Hover animations
 * - Accessibility improvements
 * - Loading state support
 * - Status badges
 * - Keyboard navigation
 */
const ToolCard: React.FC<ToolCardProps> = ({ 
  tool, 
  onClick, 
  isLoading = false,
  showBadge = false,
  badgeType = 'new'
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleClick = () => onClick(tool.id);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(tool.id);
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/?tool=${tool.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="card-minimal h-full animate-pulse">
        <div className="flex items-start justify-between mb-8">
          <div className="w-16 h-16 bg-slate-200 rounded-2xl"></div>
          <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
        </div>
        <div className="h-8 bg-slate-200 rounded mb-3 w-3/4"></div>
        <div className="h-6 bg-slate-200 rounded mb-8 w-full"></div>
        <div className="h-4 bg-slate-200 rounded mt-auto w-1/2"></div>
      </div>
    );
  }

  const badgeLabels = {
    new: 'New',
    popular: 'Popular',
    updated: 'Updated'
  };

  const badgeColors = {
    new: 'bg-[#28a745]',
    popular: 'bg-[#ffc107] text-black',
    updated: 'bg-[#17a2b8]'
  };

  return (
    <div
      className="card-minimal group cursor-pointer h-full flex flex-col relative overflow-hidden"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${tool.name}`}
    >
      {/* Status Badge */}
      {showBadge && (
        <div className={`absolute top-4 right-4 px-3 py-1 ${badgeColors[badgeType]} text-white text-xs font-black uppercase tracking-widest rounded-full z-10`}>
          {badgeLabels[badgeType]}
        </div>
      )}

      {/* Hover Effect Background */}
      <div 
        className={`
          absolute inset-0 bg-[#28a745]/5 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Icon Section */}
      <div className="flex items-start justify-between mb-8 relative z-10">
        <div className={`
          w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-black
          transition-all duration-400 group-hover:bg-[#28a745] group-hover:text-white
          group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#28a745]/30
        `}>
          {tool.icon}
        </div>
        <div className={`
          text-slate-200 transition-all duration-400
          ${isHovered ? 'text-[#28a745] translate-x-2' : ''}
        `}>
          <Icon icon="fa-chevron-right" className="text-2xl" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className={`
          text-2xl font-black mb-3 transition-colors duration-300
          ${isHovered ? 'text-[#28a745]' : 'text-black'}
        `}>
          {tool.name}
        </h3>
        
        <p className="text-slate-500 font-bold text-lg leading-snug mb-8 flex-grow">
          {tool.description}
        </p>
        
        {/* Footer */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">
            <i className="fa-solid fa-tag mr-2"></i> 
            {tool.category}
          </span>
          
          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className={`
              p-2 rounded-xl transition-all duration-300
              ${copied 
                ? 'bg-[#28a745] text-white' 
                : 'bg-slate-100 text-slate-400 opacity-0 group-hover:opacity-100 hover:bg-[#28a745] hover:text-white'
              }
            `}
            title="Copy tool link"
            aria-label="Copy tool link"
          >
            <Icon icon={copied ? 'fa-check' : 'fa-link'} size="sm" />
          </button>
        </div>
      </div>

      {/* Loading/Skeleton State */}
      <style>{`
        .card-minimal:focus {
          outline: 4px solid #28a745;
          outline-offset: 4px;
        }
      `}</style>
    </div>
  );
};

export default ToolCard;

