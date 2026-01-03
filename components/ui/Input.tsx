import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Reusable input component with icons and error states
 */
const Input = forwardRef<HTMLInputElement, InputProps>((
  { 
    label, 
    error, 
    leftIcon, 
    rightIcon,
    className = '',
    ...props 
  },
  ref
) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={`
            block w-full 
            bg-white 
            border-3 border-slate-100 
            rounded-2xl 
            py-4 
            text-lg font-bold
            placeholder-slate-300
            focus:outline-none
            focus:border-[#28a745]
            focus:ring-8 focus:ring-[#28a745]/10
            transition-all
            shadow-inner
            dark:bg-[#111]
            dark:text-white
            dark:border-slate-800
            dark:placeholder-slate-600
            ${leftIcon ? 'pl-14' : 'pl-6'}
            ${rightIcon ? 'pr-14' : 'pr-6'}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
            ${className}
          `}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-slate-400">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500 font-medium">
          <i className="fa-solid fa-circle-exclamation mr-2"></i>
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

