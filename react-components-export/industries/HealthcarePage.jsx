import React from 'react';
import ServicePage from '../ServicePage';

const HealthcarePage = ({
  customData = {
    title: "Healthcare Management Solutions",
    description: "Specialized Business Central solutions for healthcare organizations including compliance management, patient billing, regulatory reporting, and operational efficiency.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Healthcare", href: "/industries/healthcare" }
    ],

    hero: {
      title: "Healthcare Management Solutions",
      subtitle: "Specialized Business Central solutions for healthcare organizations including compliance management, patient billing, regulatory reporting, and operational efficiency.",
      primaryButton: { text: "Improve Healthcare Operations", href: "/contact" },
      secondaryButton: { text: "Schedule Healthcare Demo", href: "/demo" }
    },

    overview: {
      title: "Healthcare-Specific ERP Solutions",
      content: "Address the unique challenges of healthcare organizations with Business Central solutions designed for compliance, efficiency, and patient care excellence. From financial management to regulatory reporting, streamline operations while maintaining the highest standards of healthcare delivery.",
      features: [
        "HIPAA-compliant financial and operational management",
        "Patient billing and insurance claim processing",
        "Medical inventory and supply chain management",
        "Regulatory reporting and compliance tracking",
        "Grant and fund accounting capabilities",
        "Healthcare-specific reporting and analytics"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Healthcare Benefits",
      description: "Optimize healthcare operations with Business Central solutions designed for healthcare compliance and efficiency.",
      items: [
        {
          icon: "🏥",
          title: "Compliance Management",
          description: "Built-in HIPAA compliance features with audit trails, access controls, and regulatory reporting capabilities."
        },
        {
          icon: "💊",
          title: "Medical Inventory",
          description: "Specialized inventory management for medical supplies with lot tracking, expiration date management, and automated reordering."
        },
        {
          icon: "💰",
          title: "Patient Billing",
          description: "Comprehensive patient billing system with insurance processing, payment plans, and financial assistance management."
        },
        {
          icon: "📋",
          title: "Regulatory Reporting",
          description: "Automated regulatory reporting for healthcare compliance including quality measures and financial reporting."
        },
        {
          icon: "💼",
          title: "Grant Management",
          description: "Specialized accounting for grants, donations, and funding with detailed tracking and reporting capabilities."
        },
        {
          icon: "📊",
          title: "Healthcare Analytics",
          description: "Comprehensive analytics for operational efficiency, financial performance, and quality outcome measurement."
        }
      ]
    },

    process: {
      title: "Healthcare Implementation Process",
      description: "Specialized implementation approach ensuring healthcare compliance and operational excellence.",
      steps: [
        {
          number: 1,
          title: "Compliance Assessment",
          description: "Comprehensive evaluation of healthcare compliance requirements, workflows, and operational processes."
        },
        {
          number: 2,
          title: "Solution Design",
          description: "Design healthcare-specific Business Central configuration ensuring compliance and operational efficiency."
        },
        {
          number: 3,
          title: "Security Implementation",
          description: "Implement robust security measures and compliance controls meeting healthcare industry standards."
        },
        {
          number: 4,
          title: "Training & Validation",
          description: "Comprehensive staff training and system validation to ensure compliance and operational readiness."
        }
      ]
    },

    cta: {
      title: "Ready to Modernize Your Healthcare Operations?",
      description: "Transform your healthcare organization with compliant, efficient Business Central solutions. Focus on patient care while we handle your operational excellence.",
      primaryButton: { text: "Start Healthcare Project", href: "/contact" },
      secondaryButton: { text: "Get Compliance Assessment", href: "/compliance-assessment" }
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

export default HealthcarePage;