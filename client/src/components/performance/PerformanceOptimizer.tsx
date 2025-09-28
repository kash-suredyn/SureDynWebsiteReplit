import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  criticalResources?: string[];
  prefetchResources?: string[];
}

export default function PerformanceOptimizer({
  criticalResources = [],
  prefetchResources = []
}: PerformanceOptimizerProps) {
  
  useEffect(() => {
    // Preload critical resources
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.match(/\.(woff2?|ttf|otf)$/)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
        link.as = 'image';
      }
      
      document.head.appendChild(link);
    });

    // Prefetch non-critical resources
    prefetchResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Optimize Core Web Vitals
    optimizeCoreWebVitals();

    // Cleanup on unmount
    return () => {
      // Remove added links if needed
      const addedLinks = document.querySelectorAll('link[rel="preload"], link[rel="prefetch"]');
      addedLinks.forEach(link => {
        if (criticalResources.includes(link.getAttribute('href') || '') ||
            prefetchResources.includes(link.getAttribute('href') || '')) {
          link.remove();
        }
      });
    };
  }, [criticalResources, prefetchResources]);

  return null; // This is a utility component with no visual output
}

function optimizeCoreWebVitals() {
  // Reduce Cumulative Layout Shift (CLS)
  const optimizeCLS = () => {
    // Add size attributes to images without dimensions
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.naturalWidth && imgElement.naturalHeight) {
        imgElement.setAttribute('width', imgElement.naturalWidth.toString());
        imgElement.setAttribute('height', imgElement.naturalHeight.toString());
      }
    });
  };

  // Optimize First Input Delay (FID)
  const optimizeFID = () => {
    // Use requestIdleCallback for non-critical tasks
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Defer non-critical analytics and tracking
        initializeNonCriticalScripts();
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        initializeNonCriticalScripts();
      }, 100);
    }
  };

  // Optimize Largest Contentful Paint (LCP)
  const optimizeLCP = () => {
    // Preload LCP elements
    const heroImages = document.querySelectorAll('[data-lcp-image]');
    heroImages.forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.src) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imgElement.src;
        document.head.appendChild(link);
      }
    });
  };

  // Run optimizations
  optimizeCLS();
  optimizeFID();
  optimizeLCP();

  // Monitor performance
  if ('web-vitals' in window) {
    // Web Vitals monitoring would go here
    console.log('Core Web Vitals optimization applied');
  }
}

function initializeNonCriticalScripts() {
  // Initialize analytics, social widgets, etc.
  console.log('Non-critical scripts initialized');
}