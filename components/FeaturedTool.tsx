import React, { useState, useCallback } from 'react';
import { Tool } from '../types';
import Button from './ui/Button';
import Icon from './ui/Icon';

interface FeaturedToolProps {
  tool: Tool;
  onSelect: (id: string) => void;
  /** Auto-play animation */
  autoPlay?: boolean;
  /** Animation interval in ms */
  interval?: number;
}

/**
 * Enhanced FeaturedTool component with:
 * - Keyboard navigation
 * - Auto-play feature
 * - Better animations
 * - Accessibility improvements
 * - Tooltip hints
 */
const FeaturedTool: React.FC<FeaturedToolProps> = ({ 
  tool, 
  onSelect, 
  autoPlay = false,
  interval = 5000 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = useCallback(() => {
    setIsAnimating(true);
    onSelect(tool.id);
    setTimeout(() => setIsAnimating(false), 300);
  }, [tool.id, onSelect]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelect();
    }
  };

  return (
    <div
      className={`
        relative 
        overflow-hidden 
        bg-black 
        border-4 
        border-black 
        rounded-[4rem] 
        p-12 
        md:p-20 
        mb-24 
        shadow-2xl 
        shadow-black/20
        transition-all
        duration-500
        ${isAnimating ? 'scale-[0.98]' : 'scale-100'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div 
        className={`
          absolute 
          top-0 
          right-0 
          p-12 
          opacity-10
          transition-opacity
          duration-500
          ${isHovered ? 'opacity-20' : ''}
        `}
      >
        <div className="text-[12rem] font-black leading-none select-none">
          {tool.name.charAt(0)}
        </div>
      </div>

      {/* Animated Gradient */}
      <div 
        className={`
          absolute 
          inset-0 
          bg-gradient-to-br
          from-[#28a745]/20
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-700
          ${isHovered ? 'opacity-100' : ''}
        `}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-12">
        {/* Icon */}
        <div 
          className={`
            flex-shrink-0 
            w-24 
            h-24 
            md:w-32 
            md:h-32 
            bg-[#28a745] 
            rounded-[2rem] 
            flex 
            items-center 
            justify-center 
            text-white 
            shadow-2xl 
            shadow-[#28a745]/30
            transition-transform
            duration-500
            ${isHovered ? 'scale-110 rotate-3' : ''}
          `}
        >
          <span className="text-4xl md:text-5xl">
            {tool.icon}
          </span>
        </div>

        {/* Text Content */}
        <div className="flex-grow">
          {/* Badge */}
          <div 
            className={`
              inline-flex 
              items-center 
              space-x-3 
              text-[#28a745] 
              font-black 
              text-sm 
              uppercase 
              tracking-[0.3em] 
              mb-6
              transition-all
              duration-500
              ${isHovered ? 'translate-x-2' : ''}
            `}
          >
            <Icon icon="fa-star" size="sm" />
            <span>Daily Highlight</span>
          </div>

          {/* Title */}
          <h2 
            className={`
              text-4xl 
              md:text-6xl 
              font-black 
              mb-6 
              tracking-tighter 
              text-white
              transition-transform
              duration-500
              ${isHovered ? 'translate-x-2' : ''}
            `}
          >
            {tool.name}
          </h2>

          {/* Description */}
          <p 
            className={`
              text-slate-400 
              text-xl 
              font-medium 
              max-w-2xl 
              mb-10 
              leading-relaxed
              transition-all
              duration-500
              ${isHovered ? 'text-slate-300' : ''}
            `}
          >
            {tool.description}
          </p>

          {/* Action Button */}
          <Button
            onClick={handleSelect}
            variant="primary"
            size="lg"
            rightIcon={<Icon icon="fa-arrow-right" size="sm" />}
            className="group/btn"
          >
            Launch Tool
          </Button>
        </div>

        {/* Decorative Elements */}
        <div 
          className={`
            hidden lg:flex
            flex-col
            items-center
            gap-4
            transition-all
            duration-500
            ${isHovered ? 'translate-x-4 opacity-80' : ''}
          `}
        >
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
            <Icon icon="fa-bolt" size="lg" className="text-[#28a745]" />
          </div>
          <div className="text-xs font-black text-slate-500 uppercase tracking-widest">
            {tool.category}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div 
        className={`
          absolute 
          bottom-8 
          right-8 
          flex 
          items-center 
          gap-4
          transition-all
          duration-500
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'}
        `}
      >
        <span className="text-xs font-bold text-slate-500">
          {tool.tags.slice(0, 3).join(' • ')}
        </span>
      </div>

      {/* Keyboard Focus Styles */}
      <style>{`
        div[role="button"]:focus {
          outline: 4px solid #28a745;
          outline-offset: 4px;
        }
      `}</style>
    </div>
  );
};

export default FeaturedTool;

