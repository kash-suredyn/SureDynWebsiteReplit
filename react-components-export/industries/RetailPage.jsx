import React from 'react';
import ServicePage from '../ServicePage';

const RetailPage = ({
  customData = {
    title: "Retail Management Solutions",
    description: "Complete Business Central retail solutions including POS integration, inventory management, customer loyalty programs, and omnichannel commerce capabilities.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Retail", href: "/industries/retail" }
    ],

    hero: {
      title: "Retail Management Solutions",
      subtitle: "Complete Business Central retail solutions including POS integration, inventory management, customer loyalty programs, and omnichannel commerce capabilities.",
      primaryButton: { text: "Enhance Retail Operations", href: "/contact" },
      secondaryButton: { text: "Schedule Retail Demo", href: "/demo" }
    },

    overview: {
      title: "Complete Retail Management Platform",
      content: "Power your retail operations with Business Central's comprehensive retail management capabilities. From point-of-sale to inventory management, customer loyalty, and financial reporting, manage every aspect of your retail business in one integrated platform.",
      features: [
        "Point-of-sale system integration and management",
        "Multi-channel inventory management and tracking",
        "Customer loyalty programs and CRM integration",
        "Merchandise planning and category management",
        "Financial management with retail-specific reporting",
        "E-commerce integration and omnichannel support"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Retail Benefits",
      description: "Transform your retail operations with Business Central's comprehensive retail management capabilities.",
      items: [
        {
          icon: "🛍️",
          title: "POS Integration",
          description: "Seamless point-of-sale integration with real-time inventory updates and comprehensive transaction reporting."
        },
        {
          icon: "📊",
          title: "Inventory Intelligence",
          description: "Advanced inventory management with demand forecasting, automatic replenishment, and seasonal planning."
        },
        {
          icon: "👥",
          title: "Customer Management",
          description: "Comprehensive CRM with loyalty programs, customer segmentation, and personalized marketing capabilities."
        },
        {
          icon: "🎯",
          title: "Merchandise Planning",
          description: "Strategic merchandise planning with category management, pricing optimization, and promotion tracking."
        },
        {
          icon: "🌐",
          title: "Omnichannel Commerce",
          description: "Unified commerce platform supporting in-store, online, and mobile sales channels with consistent experience."
        },
        {
          icon: "📈",
          title: "Retail Analytics",
          description: "Comprehensive retail analytics including sales performance, customer behavior, and profitability analysis."
        }
      ]
    },

    process: {
      title: "Retail Implementation Process",
      description: "Proven approach to implement comprehensive retail solutions with focus on customer experience and operational efficiency.",
      steps: [
        {
          number: 1,
          title: "Retail Assessment",
          description: "Comprehensive analysis of your retail operations, customer touchpoints, and technology requirements."
        },
        {
          number: 2,
          title: "System Design",
          description: "Design integrated retail solution including POS, inventory management, and customer experience systems."
        },
        {
          number: 3,
          title: "Integration & Testing",
          description: "Integrate all retail systems and conduct comprehensive testing across all sales channels and processes."
        },
        {
          number: 4,
          title: "Launch & Support",
          description: "Managed system launch with comprehensive staff training and ongoing support for retail operations."
        }
      ]
    },

    cta: {
      title: "Ready to Transform Your Retail Business?",
      description: "Modernize your retail operations with Business Central. Deliver exceptional customer experiences while optimizing inventory and maximizing profitability.",
      primaryButton: { text: "Start Retail Transformation", href: "/contact" },
      secondaryButton: { text: "Download Retail Solution Guide", href: "/resources/retail-guide" }
    }
  },
  
  className = ""
}) => {
  return (
    <ServicePage 
      {...customData}
      className={className}
    />
  );
};

export default RetailPage;