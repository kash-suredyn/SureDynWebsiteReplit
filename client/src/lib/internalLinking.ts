// Internal Linking System for SEO and User Experience
export interface InternalLink {
  text: string;
  href: string;
  context: string; // Where this link should appear
  priority: 'high' | 'medium' | 'low';
}

export const internalLinkingStrategy = {
  // Service to Service Links
  serviceConnections: {
    quickbooks: [
      { text: "Business Central implementation", href: "/business-central-implementation-nj", context: "migration", priority: "high" as const },
      { text: "ERP implementation services", href: "/services/implementation", context: "upgrade", priority: "high" as const },
      { text: "emergency QuickBooks help", href: "/quickbooks-emergency-help-nj", context: "problems", priority: "high" as const }
    ],
    businessCentral: [
      { text: "QuickBooks migration service", href: "/quickbooks-migration-service-nj", context: "implementation", priority: "high" as const },
      { text: "Dynamics GP migration", href: "/services/dynamics-gp-migration", context: "alternatives", priority: "medium" as const },
      { text: "custom development services", href: "/services/custom-development", context: "customization", priority: "medium" as const }
    ],
    erp: [
      { text: "ERP implementation problems", href: "/erp-implementation-problems-rescue-nj", context: "challenges", priority: "high" as const },
      { text: "project rescue services", href: "/services/project-rescue", context: "failure", priority: "high" as const },
      { text: "Business Central implementation", href: "/business-central-implementation-nj", context: "solution", priority: "high" as const }
    ]
  },

  // Location to Location Links
  locationConnections: {
    montclair: [
      { text: "Newark ERP services", href: "/erp-services-newark-nj", context: "nearby", priority: "medium" as const },
      { text: "Essex County businesses", href: "/industries", context: "regional", priority: "medium" as const },
      { text: "Iselin office services", href: "/contact", context: "offices", priority: "low" as const }
    ],
    newJersey: [
      { text: "Montclair ERP services", href: "/erp-services-montclair-nj", context: "local", priority: "high" as const },
      { text: "Camden chemical industry", href: "/industries/manufacturing", context: "industry", priority: "medium" as const },
      { text: "Port Newark logistics", href: "/industries/distribution", context: "logistics", priority: "medium" as const }
    ]
  },

  // Problem to Solution Links
  problemSolutionLinks: {
    emergency: [
      { text: "QuickBooks migration service", href: "/quickbooks-migration-service-nj", context: "permanent-solution", priority: "high" as const },
      { text: "Business Central implementation", href: "/business-central-implementation-nj", context: "upgrade", priority: "high" as const },
      { text: "ongoing support services", href: "/services/support", context: "prevention", priority: "medium" as const }
    ],
    problems: [
      { text: "emergency QuickBooks help", href: "/quickbooks-emergency-help-nj", context: "immediate", priority: "high" as const },
      { text: "project rescue services", href: "/services/project-rescue", context: "rescue", priority: "high" as const },
      { text: "implementation methodology", href: "/services/implementation", context: "prevention", priority: "medium" as const }
    ],
    migration: [
      { text: "implementation problems rescue", href: "/erp-implementation-problems-rescue-nj", context: "if-issues", priority: "medium" as const },
      { text: "emergency support", href: "/quickbooks-emergency-help-nj", context: "urgent-help", priority: "medium" as const },
      { text: "training services", href: "/services/training", context: "adoption", priority: "medium" as const }
    ]
  },

  // Industry Specific Links
  industryLinks: {
    manufacturing: [
      { text: "Port Newark supply chain solutions", href: "/blog/port-newark-supply-chain-bc-2025", context: "logistics", priority: "medium" as const },
      { text: "NJ manufacturing digital revolution", href: "/blog/nj-manufacturing-digital-revolution-2025", context: "trends", priority: "medium" as const },
      { text: "chemical industry scaling", href: "/blog/chemical-industry-scaling-camden-global-2025", context: "growth", priority: "medium" as const }
    ],
    compliance: [
      { text: "NJ tax complexity solutions", href: "/blog/nj-tax-complexity-automated-compliance-2025", context: "regulations", priority: "high" as const },
      { text: "pharmaceutical compliance", href: "/blog/pharma-compliance-nj-business-central-2025", context: "industry", priority: "medium" as const }
    ]
  }
};

// Auto-generate contextual links based on page content
export function generateContextualLinks(pageType: string, pageContext: string): InternalLink[] {
  const links: InternalLink[] = [];

  switch (pageType) {
    case 'emergency':
      links.push(...internalLinkingStrategy.problemSolutionLinks.emergency);
      if (pageContext.includes('quickbooks')) {
        links.push(...internalLinkingStrategy.serviceConnections.quickbooks);
      }
      break;

    case 'service':
      if (pageContext.includes('quickbooks')) {
        links.push(...internalLinkingStrategy.serviceConnections.quickbooks);
      }
      if (pageContext.includes('business-central')) {
        links.push(...internalLinkingStrategy.serviceConnections.businessCentral);
      }
      break;

    case 'problem':
      links.push(...internalLinkingStrategy.problemSolutionLinks.problems);
      links.push(...internalLinkingStrategy.serviceConnections.erp);
      break;

    case 'local':
      if (pageContext.includes('montclair')) {
        links.push(...internalLinkingStrategy.locationConnections.montclair);
      }
      links.push(...internalLinkingStrategy.locationConnections.newJersey);
      break;

    case 'blog':
      if (pageContext.includes('manufacturing')) {
        links.push(...internalLinkingStrategy.industryLinks.manufacturing);
      }
      if (pageContext.includes('compliance')) {
        links.push(...internalLinkingStrategy.industryLinks.compliance);
      }
      break;
  }

  // Sort by priority and return top 5 most relevant
  return links
    .sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
    .slice(0, 5);
}

// Common link patterns for insertion
export const linkPatterns = {
  // Text patterns that should become links
  autoLinkPatterns: [
    { pattern: /QuickBooks migration/gi, href: "/quickbooks-migration-service-nj", priority: "high" as const },
    { pattern: /Business Central implementation/gi, href: "/business-central-implementation-nj", priority: "high" as const },
    { pattern: /ERP implementation problems/gi, href: "/erp-implementation-problems-rescue-nj", priority: "high" as const },
    { pattern: /emergency QuickBooks help/gi, href: "/quickbooks-emergency-help-nj", priority: "high" as const },
    { pattern: /Montclair ERP services/gi, href: "/erp-services-montclair-nj", priority: "medium" as const }
  ],

  // Call-to-action link suggestions
  ctaLinks: {
    emergency: { text: "Get Emergency Help Now", href: "/quickbooks-emergency-help-nj" },
    service: { text: "Request Service Quote", href: "/contact" },
    local: { text: "Contact Local Office", href: "/contact" },
    problem: { text: "Get Free Assessment", href: "/contact" }
  }
};

// SEO-optimized anchor text variations
export const anchorTextVariations = {
  quickbooks: [
    "QuickBooks migration service",
    "QuickBooks to Business Central migration", 
    "professional QuickBooks migration",
    "QuickBooks upgrade service"
  ],
  businessCentral: [
    "Business Central implementation",
    "Microsoft Dynamics 365 Business Central",
    "Business Central setup service",
    "Business Central consultant"
  ],
  emergency: [
    "emergency QuickBooks help",
    "urgent QuickBooks repair",
    "same-day QuickBooks fix",
    "QuickBooks emergency service"
  ],
  montclair: [
    "Montclair ERP services",
    "ERP consultant in Montclair",
    "local Montclair ERP support",
    "Montclair Business Central services"
  ]
};