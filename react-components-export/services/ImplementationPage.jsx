import React from 'react';
import ServicePage from '../ServicePage';

const ImplementationPage = ({
  customData = {
    title: "Microsoft Dynamics 365 Business Central Implementation",
    description: "Expert Microsoft Dynamics 365 Business Central implementation tailored to your business processes and industry requirements. Transform your operations with a solution designed for growth.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Implementation", href: "/services/implementation" }
    ],

    hero: {
      title: "Business Central Implementation Services",
      subtitle: "Expert Microsoft Dynamics 365 Business Central implementation tailored to your business processes and industry requirements. Transform your operations with a solution designed for growth.",
      primaryButton: { text: "Start Your Implementation", href: "/contact" },
      secondaryButton: { text: "Schedule Consultation", href: "/consultation" }
    },

    overview: {
      title: "Complete Business Central Implementation",
      content: "Our comprehensive implementation service transforms your business operations with Microsoft Dynamics 365 Business Central. We follow proven methodologies to ensure successful deployment with minimal business disruption while maximizing system adoption and ROI.",
      features: [
        "Complete business process analysis and mapping",
        "Custom system configuration for your industry",
        "Seamless data migration from existing systems",
        "Comprehensive user training and change management",
        "Go-live support and post-implementation optimization",
        "Integration with existing business applications"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Implementation Benefits",
      description: "Discover how our implementation methodology delivers measurable business value.",
      items: [
        {
          icon: "🚀",
          title: "Rapid Deployment",
          description: "Get your system operational quickly with our proven implementation methodology and project management expertise."
        },
        {
          icon: "🎯",
          title: "Business Process Optimization",
          description: "Optimize your workflows and eliminate inefficiencies through best-practice business process configuration."
        },
        {
          icon: "📊",
          title: "Real-time Visibility",
          description: "Gain complete visibility into your operations with integrated reporting and business intelligence capabilities."
        },
        {
          icon: "🔄",
          title: "Seamless Integration",
          description: "Connect with existing systems including CRM, e-commerce, and third-party applications for unified operations."
        },
        {
          icon: "💡",
          title: "Scalable Foundation",
          description: "Build a technology foundation that grows with your business and adapts to changing requirements."
        },
        {
          icon: "🛡️",
          title: "Risk Mitigation",
          description: "Minimize implementation risks with experienced project management and proven change management processes."
        }
      ]
    },

    process: {
      title: "Our Implementation Process",
      description: "A proven 4-phase methodology ensuring successful Business Central deployment with minimal business disruption.",
      steps: [
        {
          number: 1,
          title: "Discovery & Planning",
          description: "Comprehensive business process analysis, current state assessment, and implementation roadmap development with clear timelines and deliverables."
        },
        {
          number: 2,
          title: "System Configuration",
          description: "Custom Business Central setup tailored to your specific business requirements, including chart of accounts, workflows, and security configuration."
        },
        {
          number: 3,
          title: "Data Migration & Testing",
          description: "Secure and accurate migration of your existing data with full integrity validation, followed by comprehensive system and user acceptance testing."
        },
        {
          number: 4,
          title: "Go-Live & Support",
          description: "Managed go-live process with comprehensive support during launch, user training, and ongoing optimization to ensure maximum system adoption."
        }
      ]
    },

    cta: {
      title: "Ready to Implement Business Central?",
      description: "Start your Microsoft Dynamics 365 Business Central implementation today. Our experts will guide you through every step of the process to ensure successful deployment and user adoption.",
      primaryButton: { text: "Begin Implementation", href: "/contact" },
      secondaryButton: { text: "Download Implementation Guide", href: "/resources/implementation-guide" }
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

export default ImplementationPage;