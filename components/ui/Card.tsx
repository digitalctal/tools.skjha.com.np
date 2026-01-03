import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

/**
 * Reusable card component with consistent styling
 * Features:
 * - Minimal design with black borders
 * - Rounded corners (2.2rem)
 * - Hover effects with green accent
 * - Smooth transitions
 */
const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick 
}) => {
  const Component = onClick ? 'div' : 'div';
  
  return (
    <div
      className={`
        bg-white 
        border-3 border-slate-100 
        rounded-[2.2rem] 
        p-8 
        transition-all duration-400
        shadow-sm
        ${hover ? 'card-minimal cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  );
};

export default Card;

