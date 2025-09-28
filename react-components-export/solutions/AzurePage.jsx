import React from 'react';
import ServicePage from '../ServicePage';

const AzurePage = ({
  customData = {
    title: "Microsoft Azure Cloud Solutions",
    description: "Comprehensive cloud infrastructure and services for hosting Business Central and related applications with enterprise-grade security, scalability, and performance.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Azure", href: "/solutions/azure" }
    ],

    hero: {
      title: "Microsoft Azure Cloud Solutions",
      subtitle: "Comprehensive cloud infrastructure and services for hosting Business Central and related applications with enterprise-grade security, scalability, and performance.",
      primaryButton: { text: "Explore Azure Solutions", href: "/contact" },
      secondaryButton: { text: "Schedule Azure Consultation", href: "/consultation" }
    },

    overview: {
      title: "Enterprise Cloud Infrastructure for Business Central",
      content: "Microsoft Azure provides the robust, secure, and scalable cloud infrastructure foundation for your Business Central deployment. From basic hosting to advanced hybrid scenarios, Azure delivers enterprise-grade capabilities with global reach and industry-leading security.",
      features: [
        "Secure Business Central cloud hosting",
        "Hybrid cloud integration capabilities",
        "Advanced security and compliance features",
        "Global scalability and performance optimization",
        "Disaster recovery and business continuity",
        "Integration with Microsoft 365 and other cloud services"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Azure Benefits",
      description: "Leverage Microsoft Azure's enterprise-grade cloud infrastructure for optimal Business Central performance.",
      items: [
        {
          icon: "☁️",
          title: "Cloud Excellence",
          description: "Enterprise-grade cloud infrastructure with 99.9% uptime SLA and global availability."
        },
        {
          icon: "🔒",
          title: "Enterprise Security",
          description: "Advanced security features including threat protection, identity management, and compliance certifications."
        },
        {
          icon: "📈",
          title: "Scalability",
          description: "Automatic scaling capabilities to handle business growth and seasonal demand variations."
        },
        {
          icon: "🌐",
          title: "Global Reach",
          description: "Worldwide data centers ensuring optimal performance for global business operations."
        },
        {
          icon: "🔄",
          title: "Hybrid Integration",
          description: "Seamless integration between on-premises systems and cloud services for flexible deployment."
        },
        {
          icon: "💰",
          title: "Cost Optimization",
          description: "Pay-as-you-use pricing model with cost optimization tools and recommendations."
        }
      ]
    },

    process: {
      title: "Azure Implementation Process",
      description: "Comprehensive approach to Azure cloud migration and optimization for Business Central environments.",
      steps: [
        {
          number: 1,
          title: "Cloud Assessment",
          description: "Comprehensive evaluation of current infrastructure and cloud readiness assessment."
        },
        {
          number: 2,
          title: "Architecture Design",
          description: "Design optimal Azure architecture for Business Central deployment and integration requirements."
        },
        {
          number: 3,
          title: "Migration & Deployment",
          description: "Secure migration and deployment of Business Central and related services to Azure cloud."
        },
        {
          number: 4,
          title: "Optimization & Management",
          description: "Ongoing optimization, monitoring, and management of Azure resources for optimal performance."
        }
      ]
    },

    cta: {
      title: "Ready to Move to Azure Cloud?",
      description: "Transform your Business Central deployment with Microsoft Azure cloud infrastructure. Ensure security, scalability, and performance with our expert Azure implementation services.",
      primaryButton: { text: "Start Azure Migration", href: "/contact" },
      secondaryButton: { text: "Get Cloud Assessment", href: "/cloud-assessment" }
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

export default AzurePage;