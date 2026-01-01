import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "px-6 py-3 font-medium rounded-lg transition-all duration-150 inline-flex items-center gap-2";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
    secondary: "bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50",
    ghost: "text-slate-600 hover:bg-slate-100"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
