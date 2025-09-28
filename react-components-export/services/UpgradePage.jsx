import React from 'react';
import ServicePage from '../ServicePage';

const UpgradePage = ({
  customData = {
    title: "Microsoft Dynamics Upgrade Services",
    description: "Seamlessly upgrade from legacy Microsoft Dynamics systems (GP, NAV, SL) to modern Business Central with minimal disruption and maximum value realization.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Upgrade", href: "/services/upgrade" }
    ],

    hero: {
      title: "Dynamics Upgrade & Migration Services",
      subtitle: "Seamlessly upgrade from legacy Microsoft Dynamics systems (GP, NAV, SL) to modern Business Central with minimal disruption and maximum value realization.",
      primaryButton: { text: "Start Your Upgrade", href: "/contact" },
      secondaryButton: { text: "Upgrade Assessment", href: "/assessment" }
    },

    overview: {
      title: "Modernize Your Dynamics System",
      content: "Transform your legacy Microsoft Dynamics system into a modern, cloud-based Business Central solution. Our upgrade services ensure smooth transition while preserving critical business data and enhancing system capabilities with modern features and improved user experience.",
      features: [
        "Complete system assessment and upgrade planning",
        "Secure data migration with full validation",
        "Custom code conversion and modernization",
        "Enhanced security and compliance features",
        "Cloud deployment with improved accessibility",
        "Training on new features and capabilities"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Upgrade Benefits",
      description: "Discover the advantages of modernizing your Dynamics system to Business Central.",
      items: [
        {
          icon: "☁️",
          title: "Cloud-First Architecture",
          description: "Move to modern cloud infrastructure with improved security, reliability, and automatic updates."
        },
        {
          icon: "📱",
          title: "Modern User Experience",
          description: "Provide users with intuitive, mobile-friendly interfaces that increase productivity and user adoption."
        },
        {
          icon: "🔧",
          title: "Enhanced Functionality",
          description: "Access new features and capabilities not available in legacy systems, including advanced reporting and AI insights."
        },
        {
          icon: "💰",
          title: "Reduced IT Costs",
          description: "Eliminate on-premises infrastructure costs and reduce IT maintenance overhead with cloud deployment."
        },
        {
          icon: "🔒",
          title: "Improved Security",
          description: "Benefit from Microsoft's enterprise-grade security and compliance features built into Business Central."
        },
        {
          icon: "🚀",
          title: "Future-Ready Platform",
          description: "Build on a platform that continues to evolve with regular updates and new features from Microsoft."
        }
      ]
    },

    process: {
      title: "Our Upgrade Process",
      description: "Structured approach to ensure successful migration with minimal business disruption.",
      steps: [
        {
          number: 1,
          title: "System Assessment",
          description: "Comprehensive evaluation of your current Dynamics system, customizations, and business requirements to plan the optimal upgrade path."
        },
        {
          number: 2,
          title: "Upgrade Planning",
          description: "Detailed project plan including timeline, resource requirements, and risk mitigation strategies tailored to your business needs."
        },
        {
          number: 3,
          title: "Data Migration",
          description: "Secure migration of all business data with integrity validation and testing to ensure complete accuracy in the new system."
        },
        {
          number: 4,
          title: "Go-Live & Support",
          description: "Coordinated go-live with comprehensive support, user training, and ongoing optimization to maximize system value."
        }
      ]
    },

    cta: {
      title: "Ready to Modernize Your Dynamics System?",
      description: "Upgrade to Microsoft Dynamics 365 Business Central and unlock modern capabilities while preserving your valuable business data and processes.",
      primaryButton: { text: "Start Upgrade Project", href: "/contact" },
      secondaryButton: { text: "Get Upgrade Assessment", href: "/assessment" }
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

export default UpgradePage;