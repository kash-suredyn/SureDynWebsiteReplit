import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  lazy?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: (error: any) => void;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  lazy = true,
  placeholder,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px', // Load images 50px before they come into view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = (error: any) => {
    setHasError(true);
    onError?.(error);
    console.error('Image failed to load:', src);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}>
          {placeholder && (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-400 text-sm">{placeholder}</span>
            </div>
          )}
        </div>
      )}

      {/* Main Image */}
      {(isInView || priority) && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
          <div className="text-center text-gray-500">
            <i className="fas fa-image text-2xl mb-2"></i>
            <p className="text-sm">Image failed to load</p>
          </div>
        </div>
      )}
    </div>
  );
}