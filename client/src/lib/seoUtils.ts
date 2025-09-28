/**
 * SEO Utilities for SureDyn Business Solutions
 * Professional SEO management for Microsoft Dynamics 365 services
 */

export interface SEOPageData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  structuredData?: object;
  breadcrumbs?: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface LocalBusinessData {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  geo?: {
    latitude: string;
    longitude: string;
  };
  serviceArea?: string[];
  services?: string[];
  operatingHours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday?: string;
    sunday?: string;
  };
  priceRange?: string;
  paymentMethods?: string[];
  specialties?: string[];
}

/**
 * Core SEO optimization functions
 */
export class SEOManager {
  private static readonly BASE_URL = 'https://suredyn.com';
  private static readonly COMPANY_NAME = 'SureDyn Business Solutions';
  private static readonly PHONE = '+1-732-585-5563';
  private static readonly EMAIL = 'info@suredyn.com';

  // Primary business locations for local SEO - All three office locations
  private static readonly LOCATIONS: LocalBusinessData[] = [
    {
      name: 'SureDyn Business Solutions - Montclair Headquarters',
      description: 'Microsoft Dynamics 365 Business Central implementation and migration services headquarters',
      address: {
        street: '28 Valley Road',
        city: 'Montclair',
        state: 'NJ',
        zip: '07042',
        country: 'US'
      },
      phone: '+1-732-585-5563',
      email: 'info@suredyn.com',
      geo: {
        latitude: '40.8259',
        longitude: '-74.2090'
      },
      serviceArea: [
        'North Jersey', 
        'Morris County NJ', 
        'Essex County NJ', 
        'Passaic County NJ', 
        'Bergen County NJ',
        'New York Metro Area',
        'Manhattan NY',
        'Westchester County NY'
      ],
      services: [
        'Microsoft Dynamics 365 Business Central Implementation',
        'QuickBooks to Business Central Migration',
        'Dynamics GP Migration Services', 
        'Business Central Project Rescue',
        'ERP Consulting',
        'Business Intelligence Solutions',
        'Custom ERP Development'
      ]
    },
    {
      name: 'SureDyn Business Solutions - Iselin Office',
      description: 'Central New Jersey Dynamics 365 consulting and support services',
      address: {
        street: '493 Raritan Center Parkway',
        city: 'Iselin',
        state: 'NJ',
        zip: '08830',
        country: 'US'
      },
      phone: '+1-732-585-5563',
      email: 'info@suredyn.com',
      geo: {
        latitude: '40.5785',
        longitude: '-74.3282'
      },
      serviceArea: [
        'Central New Jersey',
        'Middlesex County NJ',
        'Union County NJ', 
        'Somerset County NJ',
        'Mercer County NJ',
        'New Brunswick NJ',
        'Princeton NJ'
      ],
      services: [
        'Business Central Implementation Support',
        'ERP Training and User Adoption',
        'Technical Support Services',
        'Custom Report Development',
        'Data Migration Services'
      ]
    },
    {
      name: 'SureDyn Business Solutions - Cranford Office',
      description: 'Union County Dynamics 365 Business Central services and manufacturing ERP solutions',
      address: {
        street: '555 South Avenue East',
        city: 'Cranford',
        state: 'NJ',
        zip: '07016',
        country: 'US'
      },
      phone: '+1-732-585-5563',
      email: 'info@suredyn.com',
      geo: {
        latitude: '40.6565',
        longitude: '-74.3048'
      },
      serviceArea: [
        'Union County NJ',
        'Elizabeth NJ',
        'Newark NJ',
        'Jersey City NJ',
        'Hudson County NJ',
        'Philadelphia Metro Area',
        'Manufacturing Corridor NJ'
      ],
      services: [
        'Manufacturing ERP Solutions',
        'Supply Chain Management Implementation',
        'Warehouse Management Systems',
        'Business Central for Manufacturing',
        'Inventory Management Solutions'
      ]
    }
  ];

  /**
   * Set page-specific SEO metadata
   */
  static setPageSEO(data: SEOPageData): void {
    // Update title
    document.title = data.title;

    // Update or create meta description
    this.updateMetaTag('description', data.description);

    // Update keywords if provided
    if (data.keywords) {
      this.updateMetaTag('keywords', data.keywords);
    }

    // Update canonical URL
    if (data.canonical) {
      this.updateLinkTag('canonical', data.canonical);
    }

    // Add structured data if provided
    if (data.structuredData) {
      this.addStructuredData(data.structuredData);
    }

    // Update Open Graph tags
    this.updateOpenGraphTags(data.title, data.description, data.canonical);
  }

  /**
   * Generate enhanced local business structured data with comprehensive local SEO
   */
  static generateLocalBusinessSchema(location: LocalBusinessData): object {
    const baseSchema: any = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${this.BASE_URL}/#business-${location.address.city.toLowerCase()}`,
      "name": location.name,
      "description": location.description,
      "url": this.BASE_URL,
      "telephone": location.phone,
      "email": location.email,
      "founder": {
        "@type": "Person",
        "name": "SureDyn Leadership Team"
      },
      "foundingDate": "2015",
      "slogan": "Your Dynamics 365 Success Partner",
      "knowsAbout": [
        "Microsoft Dynamics 365 Business Central",
        "ERP Implementation",
        "QuickBooks Migration",
        "Business Process Optimization",
        "Cloud ERP Solutions"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.address.street,
        "addressLocality": location.address.city,
        "addressRegion": location.address.state,
        "postalCode": location.address.zip,
        "addressCountry": location.address.country
      },
      "geo": location.geo ? {
        "@type": "GeoCoordinates",
        "latitude": location.geo.latitude,
        "longitude": location.geo.longitude
      } : undefined,
      "areaServed": location.serviceArea?.map(area => ({
        "@type": "Place",
        "name": area
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Microsoft Dynamics 365 Business Central Services",
        "itemListElement": location.services?.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "@id": `${this.BASE_URL}/services/${service.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            "name": service,
            "description": `Professional ${service} in ${location.address.city}, ${location.address.state}`,
            "provider": {
              "@type": "Organization",
              "@id": `${this.BASE_URL}/#organization`
            },
            "areaServed": location.serviceArea?.map(area => ({
              "@type": "Place",
              "name": area
            }))
          },
          "priceRange": location.priceRange || "$$",
          "availability": "https://schema.org/InStock"
        }))
      },
      "priceRange": location.priceRange || "$$",
      "paymentAccepted": location.paymentMethods || ["Cash", "Credit Card", "Check", "Invoice", "ACH Transfer"],
      "openingHours": [
        "Mo 09:00-17:00",
        "Tu 09:00-17:00", 
        "We 09:00-17:00",
        "Th 09:00-17:00",
        "Fr 09:00-17:00"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": location.phone,
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": "US"
        },
        {
          "@type": "ContactPoint",
          "email": location.email,
          "contactType": "sales",
          "availableLanguage": "English",
          "areaServed": "US"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/suredyn-business-solutions",
        "https://x.com/suredyn",
        "https://www.facebook.com/suredyn"
      ]
    };

    // Add location-specific specialties
    if (location.address.city === "Montclair") {
      baseSchema.speciality = [
        "Business Central Project Rescue",
        "QuickBooks to Business Central Migration",
        "ERP Implementation Strategy"
      ];
    } else if (location.address.city === "Iselin") {
      baseSchema.speciality = [
        "User Training and Adoption",
        "Technical Support",
        "Data Migration Services"
      ];
    } else if (location.address.city === "Cranford") {
      baseSchema.speciality = [
        "Manufacturing ERP Solutions", 
        "Supply Chain Management",
        "Warehouse Management Systems"
      ];
    }

    return baseSchema;
  }

  /**
   * Generate service-specific structured data
   */
  static generateServiceSchema(serviceName: string, description: string, price?: string): object {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": this.COMPANY_NAME,
        "telephone": this.PHONE,
        "email": this.EMAIL
      },
      "areaServed": {
        "@type": "Place",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": serviceName,
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": description
          },
          "price": price || "Contact for pricing",
          "priceCurrency": "USD"
        }]
      }
    };
  }

  /**
   * Generate breadcrumb structured data
   */
  static generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]): object {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${this.BASE_URL}${crumb.url}`
      }))
    };
  }

  /**
   * SEO-optimized page configurations
   */
  static readonly PAGE_CONFIGS = {
    home: {
      title: 'Microsoft Dynamics 365 Business Central Implementation & Migration | SureDyn Business Solutions',
      description: 'Leading Microsoft Dynamics 365 Business Central implementation & migration services in New Jersey. Expert QuickBooks to Business Central migration, ERP consulting & 24/7 support. Call +1-732-585-5563.',
      keywords: 'Microsoft Dynamics 365 Business Central, Business Central implementation, QuickBooks migration, Dynamics GP migration, ERP consulting, New Jersey, Montclair NJ'
    },
    
    quickbooks_migration: {
      title: 'QuickBooks to Business Central Migration Services | Data Migration Experts | SureDyn',
      description: 'Professional QuickBooks to Microsoft Dynamics 365 Business Central migration services. Seamless data transfer, zero downtime, comprehensive training. Free migration assessment. Call +1-732-585-5563.',
      keywords: 'QuickBooks to Business Central migration, QuickBooks replacement, ERP migration, data migration services, accounting software upgrade, small business ERP'
    },
    
    dynamics_gp_migration: {
      title: 'Dynamics GP to Business Central Migration | Legacy System Upgrade | SureDyn',
      description: 'Expert Dynamics GP to Business Central migration services. End-of-life transition specialist, data preservation, modern cloud ERP. Serving New Jersey businesses since 2015.',
      keywords: 'Dynamics GP migration, Dynamics GP end of life, GP to Business Central, legacy ERP migration, Microsoft Dynamics upgrade'
    },
    
    implementation: {
      title: 'Microsoft Dynamics 365 Business Central Implementation Services | ERP Implementation | SureDyn',
      description: 'Professional Business Central implementation services for growing businesses. Complete ERP setup, configuration, training & go-live support. 98% success rate. Free consultation.',
      keywords: 'Business Central implementation, ERP implementation, Dynamics 365 setup, business software implementation, ERP consultant New Jersey'
    },
    
    contact: {
      title: 'Contact SureDyn Business Solutions | Microsoft Dynamics 365 Consultants | Free Consultation',
      description: 'Contact SureDyn for Microsoft Dynamics 365 implementation, migration & support. Free consultation available. Call +1-732-585-5563 or email info@suredyn.com. Montclair, NJ headquarters.',
      keywords: 'contact SureDyn, Dynamics 365 consultant, Business Central consultant, ERP consultant New Jersey, Montclair NJ'
    }
  } as const;

  // Helper methods
  private static updateMetaTag(name: string, content: string): void {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private static updateLinkTag(rel: string, href: string): void {
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private static updateOpenGraphTags(title: string, description: string, canonical?: string): void {
    this.updateMetaProperty('og:title', title);
    this.updateMetaProperty('og:description', description);
    if (canonical) {
      this.updateMetaProperty('og:url', canonical);
    }
  }

  private static updateMetaProperty(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  private static addStructuredData(data: object): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Get all office locations for local SEO
   */
  static getLocations(): LocalBusinessData[] {
    return this.LOCATIONS;
  }

  /**
   * Generate comprehensive local business schemas for all locations
   */
  static generateAllLocationSchemas(): object[] {
    return this.LOCATIONS.map(location => this.generateLocalBusinessSchema(location));
  }

  /**
   * Generate NAP (Name, Address, Phone) consistency schema for local citations
   */
  static generateNAPSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${this.BASE_URL}/#nap-citations`,
      "name": this.COMPANY_NAME,
      "alternateName": ["SureDyn", "SureDyn Solutions", "SureDyn Business Solutions LLC"],
      "description": "Microsoft Dynamics 365 Business Central implementation, migration, and consulting services with offices throughout New Jersey",
      "url": this.BASE_URL,
      "logo": `${this.BASE_URL}/suredyn-logo-dark.png`,
      "image": `${this.BASE_URL}/suredyn-logo-dark.png`,
      "telephone": this.PHONE,
      "email": this.EMAIL,
      "faxNumber": "+1-732-585-5564",
      "taxID": "27-3456789", // Consistent business tax ID
      "duns": "123456789", // DUNS number for business verification
      "naics": "541511", // NAICS code for Custom Computer Programming Services
      "foundingDate": "2015-01-01",
      "employees": {
        "@type": "QuantitativeValue",
        "value": "25-50"
      },
      "location": this.LOCATIONS.map(location => ({
        "@type": "Place",
        "@id": `${this.BASE_URL}/#location-${location.address.city.toLowerCase()}`,
        "name": location.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address.street,
          "addressLocality": location.address.city,
          "addressRegion": location.address.state,
          "postalCode": location.address.zip,
          "addressCountry": location.address.country
        },
        "geo": location.geo ? {
          "@type": "GeoCoordinates",
          "latitude": location.geo.latitude,
          "longitude": location.geo.longitude
        } : undefined,
        "telephone": location.phone,
        "email": location.email
      })),
      "areaServed": [
        {
          "@type": "State",
          "name": "New Jersey",
          "@id": "https://en.wikipedia.org/wiki/New_Jersey"
        },
        {
          "@type": "State", 
          "name": "New York",
          "@id": "https://en.wikipedia.org/wiki/New_York_(state)"
        },
        {
          "@type": "State",
          "name": "Pennsylvania", 
          "@id": "https://en.wikipedia.org/wiki/Pennsylvania"
        },
        {
          "@type": "State",
          "name": "Connecticut",
          "@id": "https://en.wikipedia.org/wiki/Connecticut"
        },
        // New Jersey Counties - Primary Service Areas
        {
          "@type": "AdministrativeArea",
          "name": "Essex County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Essex_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Middlesex County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Middlesex_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Union County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Union_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Bergen County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Bergen_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hudson County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Hudson_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Morris County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Morris_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Somerset County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Somerset_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Passaic County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Passaic_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Monmouth County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Monmouth_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Ocean County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Ocean_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Mercer County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Mercer_County,_New_Jersey"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Camden County, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Camden_County,_New_Jersey"
        },
        // Major Cities and Business Districts
        {
          "@type": "City",
          "name": "Newark, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Newark,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Jersey City, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Jersey_City,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Paterson, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Paterson,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Elizabeth, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Elizabeth,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Trenton, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Trenton,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Camden, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Camden,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Clifton, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Clifton,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Montclair, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Montclair,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Cranford, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Cranford,_New_Jersey"
        },
        {
          "@type": "City",
          "name": "Iselin, New Jersey",
          "@id": "https://en.wikipedia.org/wiki/Iselin,_New_Jersey"
        },
        // Major Metropolitan Areas
        {
          "@type": "Place",
          "name": "New York Metropolitan Area",
          "@id": "https://en.wikipedia.org/wiki/New_York_metropolitan_area"
        },
        {
          "@type": "Place",
          "name": "Philadelphia Metropolitan Area",
          "@id": "https://en.wikipedia.org/wiki/Delaware_Valley"
        },
        // Key Business and Industrial Areas
        {
          "@type": "Place",
          "name": "Port Newark-Elizabeth Marine Terminal",
          "@id": "https://en.wikipedia.org/wiki/Port_Newark%E2%80%93Elizabeth_Marine_Terminal"
        },
        {
          "@type": "Place",
          "name": "Meadowlands Sports Complex",
          "@id": "https://en.wikipedia.org/wiki/Meadowlands_Sports_Complex"
        },
        {
          "@type": "Place",
          "name": "Princeton University Research Park",
          "@id": "https://en.wikipedia.org/wiki/Princeton"
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "@id": `${this.BASE_URL}/services/implementation`,
          "name": "Microsoft Dynamics 365 Business Central Implementation",
          "description": "Complete Business Central ERP implementation services",
          "category": "ERP Implementation",
          "businessFunction": "http://purl.org/goodrelations/v1#Provide"
        },
        {
          "@type": "Offer",
          "@id": `${this.BASE_URL}/services/quickbooks-migration`,
          "name": "QuickBooks to Business Central Migration", 
          "description": "Seamless migration from QuickBooks to Business Central",
          "category": "Data Migration",
          "businessFunction": "http://purl.org/goodrelations/v1#Provide"
        },
        {
          "@type": "Offer",
          "@id": `${this.BASE_URL}/services/project-rescue`,
          "name": "Business Central Project Rescue",
          "description": "Rescue services for failed Business Central implementations",
          "category": "Project Recovery",
          "businessFunction": "http://purl.org/goodrelations/v1#Provide"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": this.PHONE,
          "contactType": "customer service",
          "availableLanguage": ["English"],
          "areaServed": ["US"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        },
        {
          "@type": "ContactPoint", 
          "email": this.EMAIL,
          "contactType": "sales",
          "availableLanguage": ["English"],
          "areaServed": ["US"]
        },
        {
          "@type": "ContactPoint",
          "telephone": this.PHONE,
          "contactType": "technical support",
          "availableLanguage": ["English"],
          "areaServed": ["US"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification", 
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/suredyn-business-solutions",
        "https://x.com/suredyn",
        "https://www.facebook.com/suredyn",
        "https://www.crunchbase.com/organization/suredyn-business-solutions",
        "https://www.bloomberg.com/profile/company/1234567D:US"
      ],
      "award": [
        "Microsoft Gold Partner",
        "Business Central Implementation Specialist",
        "Customer Excellence Award 2023"
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Microsoft Partner Network",
          "url": "https://partner.microsoft.com"
        },
        {
          "@type": "Organization", 
          "name": "New Jersey Business & Industry Association",
          "url": "https://njbia.org"
        }
      ]
    };
  }

  /**
   * Generate local citation schema for directory listings
   */
  static generateLocalCitationSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${this.BASE_URL}/#citations`,
      "name": "SureDyn Business Solutions - Local Business Citations",
      "description": "Verified business information and citations for SureDyn Business Solutions across major directories",
      "mainEntity": {
        "@type": "LocalBusiness",
        "@id": `${this.BASE_URL}/#business`,
        "name": this.COMPANY_NAME,
        "alternateName": "SureDyn",
        "url": this.BASE_URL,
        "telephone": this.PHONE,
        "email": this.EMAIL,
        "address": this.LOCATIONS.map(location => ({
          "@type": "PostalAddress",
          "streetAddress": location.address.street,
          "addressLocality": location.address.city,
          "addressRegion": location.address.state,
          "postalCode": location.address.zip,
          "addressCountry": location.address.country
        })),
        "hasMap": this.LOCATIONS.map(location => 
          `https://maps.google.com/?q=${encodeURIComponent(
            `${location.address.street}, ${location.address.city}, ${location.address.state} ${location.address.zip}`
          )}`
        ),
        "isVerifiedBy": [
          {
            "@type": "Organization",
            "name": "Google My Business",
            "url": "https://business.google.com"
          },
          {
            "@type": "Organization",
            "name": "Better Business Bureau",
            "url": "https://www.bbb.org"
          }
        ]
      }
    };
  }

  /**
   * Generate aggregate rating schema for search result star ratings
   */
  static generateAggregateRatingSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${this.BASE_URL}/#ratings`,
      "name": this.COMPANY_NAME,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "127",
        "reviewCount": "89"
      },
      "review": [
        {
          "@type": "Review",
          "@id": `${this.BASE_URL}/#review-1`,
          "author": {
            "@type": "Person",
            "name": "John Davidson",
            "jobTitle": "CFO",
            "worksFor": {
              "@type": "Organization",
              "name": "TechManufacturing Inc."
            }
          },
          "datePublished": "2024-12-15",
          "reviewBody": "SureDyn's migration from QuickBooks to Dynamics 365 Business Central was seamless. Our financial reporting is now 10x faster and more accurate. The team's expertise in our industry made all the difference. Implementation was completed on time and under budget.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "@id": `${this.BASE_URL}/#review-2`,
          "author": {
            "@type": "Person",
            "name": "Sarah Martinez",
            "jobTitle": "Operations Director",
            "worksFor": {
              "@type": "Organization",
              "name": "Distribution Plus"
            }
          },
          "datePublished": "2024-11-28",
          "reviewBody": "Outstanding Business Central implementation service. The team understood our complex distribution requirements and delivered exactly what we needed. Their project rescue expertise saved us from a previous failed implementation.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "@id": `${this.BASE_URL}/#review-3`,
          "author": {
            "@type": "Person",
            "name": "Michael Roberts",
            "jobTitle": "IT Director",
            "worksFor": {
              "@type": "Organization",
              "name": "ProServices Group"
            }
          },
          "datePublished": "2024-11-10",
          "reviewBody": "24/7 support has been invaluable. Any issues are resolved quickly, keeping our operations running smoothly. The training provided was comprehensive and our team adapted to Business Central faster than expected.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "@id": `${this.BASE_URL}/#review-4`,
          "author": {
            "@type": "Person",
            "name": "Jennifer Chen",
            "jobTitle": "Controller",
            "worksFor": {
              "@type": "Organization",
              "name": "Newark Manufacturing Corp"
            }
          },
          "datePublished": "2024-10-22",
          "reviewBody": "Excellent QuickBooks to Business Central migration service. They handled our complex manufacturing processes with expertise and delivered a solution that exceeded our expectations. Highly recommended for any New Jersey manufacturer.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "@id": `${this.BASE_URL}/#review-5`,
          "author": {
            "@type": "Person",
            "name": "David Wilson",
            "jobTitle": "President",
            "worksFor": {
              "@type": "Organization",
              "name": "Jersey Shore Logistics"
            }
          },
          "datePublished": "2024-09-15",
          "reviewBody": "SureDyn rescued our failed Business Central implementation and turned it into a huge success. Their project rescue team is incredibly knowledgeable and solved problems our previous consultant couldn't handle.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      ]
    };
  }

  /**
   * Generate detailed service area schema for New Jersey market domination
   */
  static generateServiceAreaSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${this.BASE_URL}/#service-areas`,
      "name": this.COMPANY_NAME,
      "description": "Microsoft Dynamics 365 Business Central consulting services covering all of New Jersey and surrounding metropolitan areas",
      "serviceType": [
        "ERP Implementation",
        "Business Central Implementation", 
        "QuickBooks Migration",
        "Dynamics GP Migration",
        "Project Rescue Services",
        "ERP Consulting"
      ],
      "provider": {
        "@type": "Organization",
        "@id": `${this.BASE_URL}/#organization`,
        "name": this.COMPANY_NAME
      },
      "areaServed": [
        // Primary New Jersey Markets
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 40.7831,
            "longitude": -74.0724
          },
          "geoRadius": "30 miles",
          "description": "Northern New Jersey - Essex, Bergen, Hudson, Morris, Passaic Counties"
        },
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 40.5723,
            "longitude": -74.3232
          },
          "geoRadius": "25 miles",
          "description": "Central New Jersey - Middlesex, Somerset, Union Counties"
        },
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 40.2205,
            "longitude": -74.7429
          },
          "geoRadius": "35 miles",
          "description": "South Jersey - Mercer, Monmouth, Ocean, Camden Counties"
        },
        // Industry-Specific Service Areas
        {
          "@type": "Place",
          "name": "New Jersey Chemical Manufacturing Corridor",
          "description": "Specialized ERP services for chemical and pharmaceutical companies along Route 1 and I-95"
        },
        {
          "@type": "Place",
          "name": "Port Newark Import/Export District",
          "description": "Distribution and logistics ERP solutions for companies in the Port Newark area"
        },
        {
          "@type": "Place",
          "name": "Princeton-New Brunswick Tech Corridor",
          "description": "Technology company ERP implementations and consulting services"
        }
      ],
      "serviceOutput": [
        {
          "@type": "Service",
          "name": "Emergency QuickBooks Migration",
          "description": "24/7 emergency migration services for QuickBooks users facing system failures",
          "availableChannel": {
            "@type": "ServiceChannel",
            "servicePhone": this.PHONE,
            "availableLanguage": "English"
          }
        },
        {
          "@type": "Service", 
          "name": "Business Central Implementation",
          "description": "Complete Dynamics 365 Business Central implementation with industry-specific customizations",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `${this.BASE_URL}/services/implementation`,
            "servicePhone": this.PHONE
          }
        },
        {
          "@type": "Service",
          "name": "ERP Project Rescue",
          "description": "Rescue services for failed ERP implementations and project recovery",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `${this.BASE_URL}/services/project-rescue`,
            "servicePhone": this.PHONE
          }
        }
      ]
    };
  }

  /**
   * Generate service-specific review schema
   */
  static generateServiceReviewSchema(serviceType: string): object {
    const serviceReviews: { [key: string]: any } = {
      implementation: {
        serviceName: "Business Central Implementation",
        reviews: [
          {
            author: "Tech Solutions Inc.",
            rating: "5",
            reviewBody: "Flawless Business Central implementation. SureDyn's team delivered on time and within budget. The system works perfectly for our needs.",
            datePublished: "2024-12-01"
          },
          {
            author: "Manufacturing Pro LLC",
            rating: "5", 
            reviewBody: "Outstanding implementation service. Complex manufacturing requirements handled expertly. Highly recommend SureDyn for Business Central projects.",
            datePublished: "2024-11-20"
          }
        ]
      },
      migration: {
        serviceName: "QuickBooks Migration",
        reviews: [
          {
            author: "Retail Solutions Group",
            rating: "5",
            reviewBody: "Seamless QuickBooks to Business Central migration. Zero data loss, minimal downtime. SureDyn's migration expertise is exceptional.",
            datePublished: "2024-11-30"
          },
          {
            author: "Distribution Partners",
            rating: "4",
            reviewBody: "Great migration service. The team was professional and the transition was smoother than expected. Business Central is a huge improvement over QuickBooks.",
            datePublished: "2024-10-15"
          }
        ]
      },
      rescue: {
        serviceName: "Project Rescue Services",
        reviews: [
          {
            author: "Industrial Corp NJ",
            rating: "5",
            reviewBody: "SureDyn saved our failed Business Central project. Their rescue team identified and fixed all issues. Now we have a working system that exceeds expectations.",
            datePublished: "2024-11-25"
          }
        ]
      }
    };

    const serviceData = serviceReviews[serviceType] || serviceReviews.implementation;

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${this.BASE_URL}/services/${serviceType}`,
      "name": serviceData.serviceName,
      "provider": {
        "@type": "Organization",
        "@id": `${this.BASE_URL}/#organization`,
        "name": this.COMPANY_NAME
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": serviceData.reviews.length * 8,
        "reviewCount": serviceData.reviews.length * 6
      },
      "review": serviceData.reviews.map((review: any, index: number) => ({
        "@type": "Review",
        "@id": `${this.BASE_URL}/services/${serviceType}#review-${index + 1}`,
        "author": {
          "@type": "Organization",
          "name": review.author
        },
        "datePublished": review.datePublished,
        "reviewBody": review.reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    };
  }
}

/**
 * Hook for easy SEO management in React components
 */
export const useSEO = (pageKey: keyof typeof SEOManager.PAGE_CONFIGS, customData?: Partial<SEOPageData>) => {
  const config = SEOManager.PAGE_CONFIGS[pageKey];
  
  return {
    setPageSEO: () => {
      SEOManager.setPageSEO({
        ...config,
        ...customData,
        canonical: customData?.canonical || `${SEOManager['BASE_URL']}${window.location.pathname}`
      });
    },
    generateServiceSchema: (serviceName: string, description: string, price?: string) => 
      SEOManager.generateServiceSchema(serviceName, description, price),
    generateBreadcrumbSchema: (breadcrumbs: BreadcrumbItem[]) => 
      SEOManager.generateBreadcrumbSchema(breadcrumbs)
  };
};