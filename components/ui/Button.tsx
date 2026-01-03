import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-black transition-all rounded-2xl focus:outline-none search-focus-ring disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-black text-white border-3 border-black hover:bg-[#28a745] hover:border-[#28a745] hover:text-white',
    secondary: 'bg-slate-100 text-black border-3 border-slate-100 hover:border-[#28a745] hover:text-[#28a745]',
    outline: 'bg-transparent text-black border-3 border-black hover:bg-black hover:text-white',
    ghost: 'bg-transparent text-black border-transparent hover:text-[#28a745]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-lg rounded-2xl',
    lg: 'px-12 py-5 text-xl rounded-[2rem]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <i className="fa-solid fa-circle-notch fa-spin mr-2"></i>
      ) : leftIcon ? (
        <span className="mr-2">{leftIcon}</span>
      ) : null}
      {children}
      {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
      {!isLoading && rightIcon && <i className="fa-solid fa-arrow-right ml-2 group-hover/btn:translate-x-3 transition-transform"></i>}
    </button>
  );
};

export default Button;

