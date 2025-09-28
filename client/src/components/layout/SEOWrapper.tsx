import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { SEOManager, SEOPageData } from '@/lib/seoUtils';
import PerformanceOptimizer from '@/components/performance/PerformanceOptimizer';
import AccessibilityEnhancer from '@/components/accessibility/AccessibilityEnhancer';

interface SEOWrapperProps {
  pageKey?: keyof typeof SEOManager.PAGE_CONFIGS;
  customSEO?: Partial<SEOPageData>;
  children: React.ReactNode;
  enableBreadcrumbs?: boolean;
  schemaType?: 'service' | 'local-business' | 'article' | 'faq';
  additionalSchemas?: object[];
}

export default function SEOWrapper({ 
  pageKey, 
  customSEO, 
  children, 
  enableBreadcrumbs = true,
  schemaType,
  additionalSchemas = []
}: SEOWrapperProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Get canonical URL
    const canonicalUrl = customSEO?.canonical || `https://suredyn.com${location}`;
    
    // Get SEO data based on pageKey or use custom
    let seoData: SEOPageData;
    
    if (pageKey && SEOManager.PAGE_CONFIGS[pageKey]) {
      seoData = {
        ...SEOManager.PAGE_CONFIGS[pageKey],
        canonical: canonicalUrl,
        ...customSEO
      };
    } else if (customSEO?.title && customSEO?.description) {
      seoData = {
        title: customSEO.title,
        description: customSEO.description,
        canonical: canonicalUrl,
        ...customSEO
      };
    } else {
      // Fallback default SEO
      seoData = {
        title: customSEO?.title || 'SureDyn Business Solutions | Microsoft Dynamics 365 Experts',
        description: customSEO?.description || 'Professional Microsoft Dynamics 365 Business Central implementation and migration services.',
        canonical: canonicalUrl,
        ...customSEO
      };
    }

    // Set basic page SEO
    SEOManager.setPageSEO(seoData);

    // Add canonical link
    updateCanonicalTag(canonicalUrl);

    // Generate and inject structured data based on schema type
    if (schemaType || additionalSchemas.length > 0) {
      injectStructuredData(schemaType, seoData, additionalSchemas);
    }

    // Add default local business schema for all pages
    injectLocalBusinessSchemas();

  }, [location, pageKey, customSEO, schemaType, additionalSchemas]);

  const updateCanonicalTag = (canonicalUrl: string) => {
    // Remove existing canonical tag
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical tag
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', canonicalUrl);
    document.head.appendChild(canonicalLink);
  };

  const injectStructuredData = (schemaType?: string, seoData?: SEOPageData, additionalSchemas: object[] = []) => {
    // Remove existing structured data (except organization schema)
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]:not([data-organization-schema])');
    existingSchemas.forEach(schema => {
      const parent = schema.parentElement;
      if (parent && parent !== document.head) {
        schema.remove();
      }
    });

    const schemas: object[] = [];

    // Add schema based on type
    if (schemaType && seoData) {
      switch (schemaType) {
        case 'service':
          schemas.push(SEOManager.generateServiceSchema(
            seoData.title.split('|')[0].trim(),
            seoData.description
          ));
          break;
        
        case 'local-business':
          schemas.push(...SEOManager.generateAllLocationSchemas());
          break;
        
        case 'article':
          schemas.push(generateArticleSchema(seoData));
          break;
        
        case 'faq':
          schemas.push(generateFAQSchema());
          break;
      }
    }

    // Add aggregate rating schema for enhanced search results
    schemas.push(SEOManager.generateAggregateRatingSchema());

    // Add service-specific review schema if applicable
    if (schemaType === 'service' && seoData) {
      const servicePath = window.location.pathname;
      if (servicePath.includes('implementation')) {
        schemas.push(SEOManager.generateServiceReviewSchema('implementation'));
      } else if (servicePath.includes('migration')) {
        schemas.push(SEOManager.generateServiceReviewSchema('migration'));
      } else if (servicePath.includes('rescue')) {
        schemas.push(SEOManager.generateServiceReviewSchema('rescue'));
      }
    }

    // Add any additional schemas
    schemas.push(...additionalSchemas);

    // Inject all schemas
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-index', index.toString());
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  };

  const injectLocalBusinessSchemas = () => {
    // Check if organization schema already exists
    const existingOrgSchema = document.querySelector('script[data-organization-schema]');
    if (existingOrgSchema) return;

    // Add NAP consistency schema for local citations
    const napSchema = SEOManager.generateNAPSchema();
    const napScript = document.createElement('script');
    napScript.type = 'application/ld+json';
    napScript.setAttribute('data-nap-schema', 'true');
    napScript.textContent = JSON.stringify(napSchema);
    document.head.appendChild(napScript);

    // Add local citation schema
    const citationSchema = SEOManager.generateLocalCitationSchema();
    const citationScript = document.createElement('script');
    citationScript.type = 'application/ld+json';
    citationScript.setAttribute('data-citation-schema', 'true');
    citationScript.textContent = JSON.stringify(citationSchema);
    document.head.appendChild(citationScript);

    // Add service area schema for comprehensive local coverage
    const serviceAreaSchema = SEOManager.generateServiceAreaSchema();
    const serviceAreaScript = document.createElement('script');
    serviceAreaScript.type = 'application/ld+json';
    serviceAreaScript.setAttribute('data-service-area-schema', 'true');
    serviceAreaScript.textContent = JSON.stringify(serviceAreaSchema);
    document.head.appendChild(serviceAreaScript);

    // Add comprehensive organization schema with all locations
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://suredyn.com/#organization",
      "name": "SureDyn Business Solutions",
      "alternateName": "SureDyn",
      "url": "https://suredyn.com",
      "logo": "https://suredyn.com/suredyn-logo-dark.png",
      "description": "Leading Microsoft Dynamics 365 Business Central implementation, migration, and consulting services specializing in QuickBooks to Business Central migration and ERP project rescue.",
      "foundingDate": "2015",
      "email": "info@suredyn.com",
      "telephone": "+1-732-585-5563",
      "faxNumber": "+1-732-585-5564",
      "address": SEOManager.getLocations().map(location => ({
        "@type": "PostalAddress",
        "streetAddress": location.address.street,
        "addressLocality": location.address.city,
        "addressRegion": location.address.state,
        "postalCode": location.address.zip,
        "addressCountry": location.address.country
      })),
      "areaServed": [
        {
          "@type": "Place",
          "name": "United States"
        },
        {
          "@type": "Place", 
          "name": "New Jersey"
        },
        {
          "@type": "Place",
          "name": "New York"
        },
        {
          "@type": "Place",
          "name": "Pennsylvania"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Microsoft Dynamics 365 Business Central Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://suredyn.com/services/implementation",
              "name": "Microsoft Dynamics 365 Business Central Implementation",
              "description": "Complete Business Central ERP implementation services for growing businesses",
              "provider": {
                "@type": "Organization",
                "@id": "https://suredyn.com/#organization"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://suredyn.com/services/quickbooks-migration",
              "name": "QuickBooks to Business Central Migration",
              "description": "Seamless migration from QuickBooks to Microsoft Dynamics 365 Business Central",
              "provider": {
                "@type": "Organization",
                "@id": "https://suredyn.com/#organization"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://suredyn.com/services/project-rescue",
              "name": "Business Central Project Rescue Services",
              "description": "Specialized rescue services for failed Business Central implementations",
              "provider": {
                "@type": "Organization",
                "@id": "https://suredyn.com/#organization"
              }
            }
          }
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/suredyn-business-solutions",
        "https://x.com/suredyn",
        "https://www.facebook.com/suredyn"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-organization-schema', 'true');
    script.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
  };

  const generateArticleSchema = (seoData: SEOPageData): object => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seoData.title,
      "description": seoData.description,
      "author": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "@id": "https://suredyn.com/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "@id": "https://suredyn.com/#organization",
        "logo": {
          "@type": "ImageObject",
          "url": "https://suredyn.com/suredyn-logo-dark.png"
        }
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": seoData.canonical
      }
    };
  };

  const generateFAQSchema = (): object => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a Business Central implementation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical Business Central implementation takes 3-6 months depending on company size and complexity. We provide detailed project timelines during our initial consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can you migrate data from QuickBooks to Business Central?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in QuickBooks to Business Central migrations. Our process includes complete data mapping, validation, and testing to ensure zero data loss during the migration."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Business Central project rescue services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we are Business Central project rescue specialists with a 95% success rate. We've rescued over 50 failed implementations across New Jersey and beyond."
          }
        }
      ]
    };
  };

  return (
    <>
      <PerformanceOptimizer 
        criticalResources={[
          '/suredyn-logo-dark.png',
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        ]}
        prefetchResources={[
          '/services/implementation',
          '/services/quickbooks-migration',
          '/contact'
        ]}
      />
      <AccessibilityEnhancer 
        skipLinks={true}
        announcements={[]}
      />
      {children}
    </>
  );
}

/**
 * Centralized SEO wrapper component for consistent meta tag and structured data management
 * 
 * Features:
 * - Automatic canonical tag management
 * - Server-side compatible meta tag injection
 * - Comprehensive structured data generation
 * - Schema type-specific optimizations
 * - Consistent local business schema across all pages
 * - Support for custom SEO overrides
 */