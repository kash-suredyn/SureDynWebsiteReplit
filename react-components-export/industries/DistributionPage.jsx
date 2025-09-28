import React from 'react';
import ServicePage from '../ServicePage';

const DistributionPage = ({
  customData = {
    title: "Distribution & Wholesale Solutions",
    description: "Comprehensive Business Central solutions for distribution and wholesale operations including inventory management, order processing, and supply chain optimization.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Distribution", href: "/industries/distribution" }
    ],

    hero: {
      title: "Distribution & Wholesale Solutions",
      subtitle: "Comprehensive Business Central solutions for distribution and wholesale operations including inventory management, order processing, and supply chain optimization.",
      primaryButton: { text: "Optimize Distribution", href: "/contact" },
      secondaryButton: { text: "View Solution Demo", href: "/demo" }
    },

    overview: {
      title: "Streamline Distribution Operations",
      content: "Enhance your distribution and wholesale operations with Business Central's powerful supply chain management capabilities. From procurement to delivery, manage your entire distribution network with real-time visibility and automated processes.",
      features: [
        "Advanced inventory management with multi-location support",
        "Automated purchasing and vendor management",
        "Order processing with drop-ship capabilities",
        "Warehouse management with directed put-away and pick",
        "Customer relationship management and pricing",
        "Integrated financial management and reporting"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Distribution Benefits",
      description: "Optimize your distribution operations with Business Central's comprehensive supply chain capabilities.",
      items: [
        {
          icon: "📦",
          title: "Inventory Optimization",
          description: "Multi-location inventory management with automated replenishment and demand forecasting for optimal stock levels."
        },
        {
          icon: "🚚",
          title: "Order Fulfillment",
          description: "Streamlined order processing with drop-ship, back-order handling, and automated fulfillment workflows."
        },
        {
          icon: "🏪",
          title: "Warehouse Management",
          description: "Advanced warehouse operations with directed put-away, pick optimization, and barcode scanning support."
        },
        {
          icon: "🤝",
          title: "Vendor Management",
          description: "Complete vendor lifecycle management with automated purchasing, contract pricing, and performance tracking."
        },
        {
          icon: "💰",
          title: "Pricing & Margins",
          description: "Flexible pricing structures with customer-specific pricing, volume discounts, and margin analysis."
        },
        {
          icon: "📈",
          title: "Supply Chain Analytics",
          description: "Real-time visibility into supply chain performance with comprehensive reporting and KPI tracking."
        }
      ]
    },

    process: {
      title: "Distribution Implementation Process",
      description: "Structured approach to implement comprehensive distribution solutions with minimal business disruption.",
      steps: [
        {
          number: 1,
          title: "Supply Chain Analysis",
          description: "Comprehensive evaluation of your current distribution processes, inventory flows, and operational requirements."
        },
        {
          number: 2,
          title: "System Configuration",
          description: "Configure Business Central for your specific distribution needs including locations, pricing, and workflows."
        },
        {
          number: 3,
          title: "Integration & Testing",
          description: "Integrate with existing systems and conduct thorough testing of all distribution processes and workflows."
        },
        {
          number: 4,
          title: "Training & Launch",
          description: "Comprehensive user training and managed system launch with ongoing support for distribution operations."
        }
      ]
    },

    cta: {
      title: "Ready to Optimize Your Distribution Network?",
      description: "Transform your distribution operations with Business Central. Improve efficiency, reduce costs, and enhance customer satisfaction across your supply chain.",
      primaryButton: { text: "Start Distribution Project", href: "/contact" },
      secondaryButton: { text: "Get Distribution Assessment", href: "/assessment" }
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

export default DistributionPage;