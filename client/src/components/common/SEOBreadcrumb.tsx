import React, { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronRight } from 'lucide-react';
import { SEOManager, BreadcrumbItem } from '@/lib/seoUtils';

interface BreadcrumbConfig {
  [key: string]: {
    label: string;
    parent?: string;
  };
}

const BREADCRUMB_CONFIG: BreadcrumbConfig = {
  '/': { label: 'Home' },
  '/services': { label: 'Services' },
  '/services/quickbooks-migration': { label: 'QuickBooks Migration', parent: '/services' },
  '/services/dynamics-gp-migration': { label: 'Dynamics GP Migration', parent: '/services' },
  '/services/dynamics-nav-migration': { label: 'Dynamics NAV Migration', parent: '/services' },
  '/services/implementation': { label: 'Implementation Services', parent: '/services' },
  '/services/project-rescue': { label: 'Project Rescue', parent: '/services' },
  '/services/support': { label: 'Support Services', parent: '/services' },
  '/services/training': { label: 'Training', parent: '/services' },
  '/services/custom-development': { label: 'Custom Development', parent: '/services' },
  '/services/business-intelligence': { label: 'Business Intelligence', parent: '/services' },
  '/solutions': { label: 'Solutions' },
  '/solutions/dynamics365': { label: 'Dynamics 365', parent: '/solutions' },
  '/solutions/dynamics365-finance': { label: 'Dynamics 365 Finance', parent: '/solutions' },
  '/solutions/dynamics365-project-operations': { label: 'Project Operations', parent: '/solutions' },
  '/solutions/dynamics365-sales': { label: 'Dynamics 365 Sales', parent: '/solutions' },
  '/solutions/dynamics365-customer-service': { label: 'Customer Service', parent: '/solutions' },
  '/solutions/power-platform': { label: 'Power Platform', parent: '/solutions' },
  '/solutions/power-bi': { label: 'Power BI', parent: '/solutions' },
  '/solutions/azure': { label: 'Azure', parent: '/solutions' },
  '/industries': { label: 'Industries' },
  '/industries/manufacturing': { label: 'Manufacturing', parent: '/industries' },
  '/industries/distribution': { label: 'Distribution', parent: '/industries' },
  '/industries/retail': { label: 'Retail', parent: '/industries' },
  '/industries/healthcare': { label: 'Healthcare', parent: '/industries' },
  '/industries/professional-services': { label: 'Professional Services', parent: '/industries' },
  '/industries/financial-services': { label: 'Financial Services', parent: '/industries' },
  '/about': { label: 'About Us' },
  '/contact': { label: 'Contact Us' },
  '/blog': { label: 'Blog' },
  '/blog/quickbooks-migration-lessons': { label: 'QuickBooks Migration Lessons', parent: '/blog' },
  '/blog/nj-manufacturing-digital-revolution': { label: 'NJ Manufacturing Digital Revolution', parent: '/blog' },
  '/blog/chemical-industry-scaling': { label: 'Chemical Industry Scaling', parent: '/blog' },
  '/blog/montclair-nyc-serving': { label: 'Montclair NYC Business Services', parent: '/blog' },
  '/blog/nj-tax-complexity': { label: 'NJ Tax Compliance', parent: '/blog' },
  '/blog/pharma-compliance': { label: 'Pharmaceutical Compliance', parent: '/blog' },
  '/blog/port-newark-supply-chain': { label: 'Port Newark Supply Chain', parent: '/blog' },
  '/case-studies': { label: 'Case Studies' },
  '/rescue-projects': { label: 'Rescue Projects' },
  '/landing/quickbooks-emergency': { label: 'QuickBooks Emergency Help' },
  '/landing/quickbooks-migration-service': { label: 'QuickBooks Migration Service' },
  '/landing/erp-implementation-problem': { label: 'ERP Implementation Problems' },
  '/landing/business-central-implementation-nj': { label: 'Business Central Implementation NJ' },
  '/landing/montclair-nj-erp-services': { label: 'Montclair NJ ERP Services' },
  '/privacy-policy': { label: 'Privacy Policy' },
  '/terms-of-service': { label: 'Terms of Service' },
  '/cookie-policy': { label: 'Cookie Policy' }
};

interface SEOBreadcrumbProps {
  customBreadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export default function SEOBreadcrumb({ customBreadcrumbs, className = "" }: SEOBreadcrumbProps) {
  const [location] = useLocation();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customBreadcrumbs) {
      return customBreadcrumbs;
    }

    const breadcrumbs: BreadcrumbItem[] = [];
    const currentPath = location;
    
    // Always start with Home
    breadcrumbs.push({ name: 'Home', url: '/' });
    
    if (currentPath === '/') {
      return breadcrumbs;
    }

    // Build breadcrumb chain
    const buildChain = (path: string): void => {
      const config = BREADCRUMB_CONFIG[path];
      if (!config) return;

      if (config.parent && config.parent !== '/') {
        buildChain(config.parent);
        breadcrumbs.push({ 
          name: BREADCRUMB_CONFIG[config.parent].label, 
          url: config.parent 
        });
      }
      
      // Add current page (only if not already added)
      if (!breadcrumbs.find(b => b.url === path)) {
        breadcrumbs.push({ name: config.label, url: path });
      }
    };

    buildChain(currentPath);
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Add structured data for SEO
  useEffect(() => {
    if (breadcrumbs.length > 1) {
      const structuredData = SEOManager.generateBreadcrumbSchema(breadcrumbs);
      
      // Remove any existing breadcrumb schema
      const existingScript = document.querySelector('script[data-breadcrumb-schema]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new breadcrumb schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb-schema', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [location]);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`bg-gray-50 border-b border-gray-200 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                // Current page (not clickable)
                <span 
                  className="text-gray-900 font-medium"
                  aria-current="page"
                >
                  {crumb.name}
                </span>
              ) : (
                // Clickable breadcrumb links
                <Link href={crumb.url}>
                  <span className="text-gray-600 hover:text-suredyn-orange transition-colors duration-200 cursor-pointer">
                    {crumb.name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

/**
 * SEO-optimized breadcrumb component with automatic schema markup generation
 * 
 * Features:
 * - Automatic breadcrumb generation based on URL structure
 * - JSON-LD structured data for search engines
 * - Accessible navigation with proper ARIA labels
 * - Support for custom breadcrumb configurations
 * - Responsive design with hover states
 */