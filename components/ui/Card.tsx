import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false
}) => {
  const hoverStyles = hover ? "hover:border-slate-300 hover:shadow-lg" : "";

  return (
    <div className={`bg-white rounded-xl border border-slate-200 p-8 transition-all duration-200 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
