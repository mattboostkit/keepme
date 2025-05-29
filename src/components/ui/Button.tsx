import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-brand-mauve text-white hover:bg-brand-rose focus:ring-2 focus:ring-brand-rose focus:ring-offset-2',
    secondary: 'bg-brand-pink-light text-brand-plum hover:bg-brand-peach focus:ring-2 focus:ring-brand-peach focus:ring-offset-2',
    outline: 'border-2 border-brand-rose text-brand-rose hover:bg-brand-rose hover:text-white focus:ring-2 focus:ring-brand-rose focus:ring-offset-2',
    ghost: 'text-brand-mauve hover:bg-brand-peach hover:text-brand-plum focus:ring-2 focus:ring-brand-peach focus:ring-offset-2'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full'
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};