import React from 'react';
import { Link } from 'wouter';

interface OptimizedCTAProps {
  variant?: 'primary' | 'secondary' | 'urgent' | 'subtle';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  urgency?: 'low' | 'medium' | 'high';
  trustSignal?: string;
  benefitText?: string;
  icon?: string;
  disabled?: boolean;
  className?: string;
  dataTestId?: string;
  ariaLabel?: string;
}

export default function OptimizedCTA({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  urgency = 'medium',
  trustSignal,
  benefitText,
  icon,
  disabled = false,
  className = '',
  dataTestId,
  ariaLabel
}: OptimizedCTAProps) {

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg min-touch-target-lg';
  
  const variantClasses = {
    primary: 'bg-suredyn-orange hover:bg-suredyn-orange-dark text-white focus:ring-suredyn-orange shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange focus:ring-suredyn-orange hover:shadow-md',
    urgent: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse-subtle',
    subtle: 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-500'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const urgencyClasses = {
    low: '',
    medium: 'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
    high: 'animate-pulse shadow-[0_0_15px_rgba(255,107,53,0.5)] border border-suredyn-orange-light'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${urgencyClasses[urgency]} ${className}`;

  const content = (
    <span className="flex items-center space-x-2">
      {icon && <i className={`${icon} ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`}></i>}
      <span>{children}</span>
      {urgency === 'high' && <span className="ml-1 animate-bounce">⚡</span>}
    </span>
  );

  const ctaElement = href ? (
    <Link href={href}>
      <button
        className={combinedClasses}
        disabled={disabled}
        data-testid={dataTestId}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </button>
    </Link>
  ) : (
    <button
      className={combinedClasses}
      disabled={disabled}
      data-testid={dataTestId}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {content}
    </button>
  );

  return (
    <div className="inline-block">
      {ctaElement}
      
      {/* Trust Signal */}
      {trustSignal && (
        <div className="text-xs text-gray-500 mt-1 text-center">
          <i className="fas fa-shield-alt mr-1"></i>
          {trustSignal}
        </div>
      )}
      
      {/* Benefit Text */}
      {benefitText && (
        <div className="text-sm text-gray-600 mt-2 text-center max-w-xs">
          {benefitText}
        </div>
      )}
    </div>
  );
}