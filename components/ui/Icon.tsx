import React from 'react';

interface IconProps {
  icon: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Wrapper for Font Awesome icons with consistent sizing
 */
const Icon: React.FC<IconProps> = ({ icon, className = '', size = 'md' }) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl'
  };

  return (
    <i className={`fa-solid ${icon} ${sizes[size]} ${className}`}></i>
  );
};

export default Icon;

