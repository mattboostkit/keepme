import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = 'md',
  shadow = 'md'
}) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const shadows = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  return (
    <div
      className={cn(
        'bg-white rounded-2xl',
        paddings[padding],
        shadows[shadow],
        hover && 'transition-shadow duration-300 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};