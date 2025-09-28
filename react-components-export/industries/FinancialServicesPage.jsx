import React from 'react';
import ServicePage from '../ServicePage';

const FinancialServicesPage = ({
  customData = {
    title: "Financial Services Solutions",
    description: "Specialized Business Central solutions for financial services organizations including regulatory compliance, risk management, client reporting, and operational efficiency.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Financial Services", href: "/industries/financial-services" }
    ],

    hero: {
      title: "Financial Services Solutions",
      subtitle: "Specialized Business Central solutions for financial services organizations including regulatory compliance, risk management, client reporting, and operational efficiency.",
      primaryButton: { text: "Enhance Financial Operations", href: "/contact" },
      secondaryButton: { text: "Schedule FinServ Demo", href: "/demo" }
    },

    overview: {
      title: "Financial Services ERP Excellence",
      content: "Address the complex requirements of financial services organizations with Business Central solutions designed for regulatory compliance, risk management, and operational excellence. From client management to regulatory reporting, streamline operations while maintaining the highest standards of financial services delivery.",
      features: [
        "Regulatory compliance and audit trail management",
        "Client portfolio management and reporting",
        "Risk management and monitoring capabilities",
        "Advanced financial reporting and analytics",
        "Document management and retention policies",
        "Integration with financial data providers"
      ],
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Financial Services Benefits",
      description: "Optimize financial services operations with Business Central solutions designed for compliance and efficiency.",
      items: [
        {
          icon: "⚖️",
          title: "Regulatory Compliance",
          description: "Built-in compliance features with audit trails, reporting capabilities, and regulatory change management."
        },
        {
          icon: "📈",
          title: "Portfolio Management",
          description: "Comprehensive client portfolio management with performance tracking, risk assessment, and reporting capabilities."
        },
        {
          icon: "🛡️",
          title: "Risk Management",
          description: "Advanced risk monitoring and management tools with real-time alerts and comprehensive risk reporting."
        },
        {
          icon: "📊",
          title: "Client Reporting",
          description: "Automated client reporting with customizable templates and regulatory compliance integration."
        },
        {
          icon: "🔐",
          title: "Security & Controls",
          description: "Enterprise-grade security with role-based access controls and comprehensive audit capabilities."
        },
        {
          icon: "📋",
          title: "Document Management",
          description: "Integrated document management with retention policies and compliance tracking capabilities."
        }
      ]
    },

    process: {
      title: "Financial Services Implementation Process",
      description: "Specialized implementation approach ensuring financial services compliance and operational excellence.",
      steps: [
        {
          number: 1,
          title: "Compliance Assessment",
          description: "Comprehensive evaluation of regulatory requirements, compliance processes, and operational workflows."
        },
        {
          number: 2,
          title: "Solution Design",
          description: "Design financial services-specific Business Central configuration ensuring compliance and efficiency."
        },
        {
          number: 3,
          title: "Risk & Security Implementation",
          description: "Implement robust risk management and security controls meeting financial services industry standards."
        },
        {
          number: 4,
          title: "Validation & Launch",
          description: "Comprehensive testing, compliance validation, and managed system launch with ongoing regulatory support."
        }
      ]
    },

    cta: {
      title: "Ready to Modernize Your Financial Services Operations?",
      description: "Transform your financial services organization with compliant, efficient Business Central solutions. Focus on client service while we ensure operational excellence and regulatory compliance.",
      primaryButton: { text: "Start FinServ Project", href: "/contact" },
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

export default FinancialServicesPage;