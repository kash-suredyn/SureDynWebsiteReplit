import React from 'react';
import ServicePage from '../ServicePage';

const Dynamics365Page = ({
  customData = {
    title: "Microsoft Dynamics 365 Business Central",
    description: "Complete cloud-based ERP solution for small to mid-market businesses with integrated financial management, supply chain, manufacturing, and CRM capabilities.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Dynamics 365", href: "/solutions/dynamics365" }
    ],

    hero: {
      title: "Microsoft Dynamics 365 Business Central",
      subtitle: "Complete cloud-based ERP solution for small to mid-market businesses with integrated financial management, supply chain, manufacturing, and CRM capabilities.",
      primaryButton: { text: "Explore Business Central", href: "/contact" },
      secondaryButton: { text: "Schedule Demo", href: "/demo" }
    },

    overview: {
      title: "All-in-One Business Management Solution",
      content: "Microsoft Dynamics 365 Business Central is a comprehensive cloud-based ERP solution that connects your business processes, data, and people. From financial management to supply chain optimization, Business Central provides the tools you need to run your business efficiently and make informed decisions.",
      features: [
        "Complete financial management and accounting",
        "Supply chain and inventory management",
        "Manufacturing and production planning",
        "Sales and customer relationship management",
        "Project management and resource planning",
        "Business intelligence and reporting"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Business Central Benefits",
      description: "Discover how Dynamics 365 Business Central transforms business operations and drives growth.",
      items: [
        {
          icon: "☁️",
          title: "Cloud-First Architecture",
          description: "Modern cloud-based solution with automatic updates, scalability, and global accessibility."
        },
        {
          icon: "🔗",
          title: "Integrated Platform",
          description: "All business functions in one integrated platform eliminating data silos and improving efficiency."
        },
        {
          icon: "📊",
          title: "Real-time Insights",
          description: "Built-in business intelligence with real-time dashboards and comprehensive reporting capabilities."
        },
        {
          icon: "📱",
          title: "Mobile Ready",
          description: "Full mobile capabilities allowing business management from anywhere, anytime on any device."
        },
        {
          icon: "🔧",
          title: "Easy Customization",
          description: "Flexible platform that adapts to your business processes with extensive customization options."
        },
        {
          icon: "🚀",
          title: "Rapid Implementation",
          description: "Quick deployment with pre-configured business processes and industry-specific templates."
        }
      ]
    },

    process: {
      title: "Business Central Implementation Journey",
      description: "Comprehensive approach to successful Business Central deployment and adoption.",
      steps: [
        {
          number: 1,
          title: "Discovery & Planning",
          description: "Comprehensive business analysis and implementation planning tailored to your specific requirements and goals."
        },
        {
          number: 2,
          title: "Configuration & Customization",
          description: "System setup and customization to match your business processes and industry-specific needs."
        },
        {
          number: 3,
          title: "Data Migration & Integration",
          description: "Secure migration of existing data and integration with other business systems and applications."
        },
        {
          number: 4,
          title: "Training & Go-Live",
          description: "Comprehensive user training and managed go-live with ongoing support for maximum adoption."
        }
      ]
    },

    cta: {
      title: "Ready to Transform Your Business with Dynamics 365?",
      description: "Experience the power of Microsoft Dynamics 365 Business Central. Streamline operations, improve decision-making, and drive business growth with our expert implementation services.",
      primaryButton: { text: "Start Your Journey", href: "/contact" },
      secondaryButton: { text: "Download Solution Overview", href: "/resources/business-central-overview" }
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

export default Dynamics365Page;