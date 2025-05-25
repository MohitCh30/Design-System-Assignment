import React from 'react';
import clsx from 'clsx';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'caption' | 'helper';

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

const baseStyles: Record<Variant, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-base',
  label: 'text-sm font-medium',
  caption: 'text-xs text-gray-500',
  helper: 'text-xs text-gray-400',
};

export const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const Tag = variant === 'p' || variant === 'label' ? variant : 'div';
  return <Tag className={clsx(baseStyles[variant], className)}>{children}</Tag>;
};

export {}; 
