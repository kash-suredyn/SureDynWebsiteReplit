import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

interface DarkModeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'button' | 'switch';
}

export default function DarkModeToggle({ 
  className = "", 
  size = 'md',
  variant = 'icon'
}: DarkModeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  };

  if (variant === 'switch') {
    return (
      <button
        onClick={toggleTheme}
        className={`relative inline-flex items-center justify-center rounded-full p-2 transition-all duration-300 ease-in-out 
          bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
          focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:ring-offset-2 dark:focus:ring-offset-gray-800
          ${sizeClasses[size]} ${className}`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Sun Icon */}
          <Sun 
            size={iconSize[size]} 
            className={`absolute transition-all duration-500 ease-in-out text-yellow-500 ${
              theme === 'light' 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 rotate-180 scale-0'
            }`}
          />
          
          {/* Moon Icon */}
          <Moon 
            size={iconSize[size]} 
            className={`absolute transition-all duration-500 ease-in-out text-blue-400 ${
              theme === 'dark' 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-180 scale-0'
            }`}
          />
        </div>
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <button
        onClick={toggleTheme}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out
          bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100
          hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:ring-offset-2 dark:focus:ring-offset-gray-800
          ${className}`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <>
            <Moon size={iconSize[size]} className="text-blue-400" />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <Sun size={iconSize[size]} className="text-yellow-500" />
            <span>Light Mode</span>
          </>
        )}
      </button>
    );
  }

  // Default icon variant
  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out
        bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 
        text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100
        focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:ring-offset-2 dark:focus:ring-offset-gray-800
        ${sizeClasses[size]} ${className}`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sun Icon */}
        <Sun 
          size={iconSize[size]} 
          className={`absolute transition-all duration-500 ease-in-out text-yellow-500 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-0'
          }`}
        />
        
        {/* Moon Icon */}
        <Moon 
          size={iconSize[size]} 
          className={`absolute transition-all duration-500 ease-in-out text-blue-400 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`}
        />
      </div>
    </button>
  );
}