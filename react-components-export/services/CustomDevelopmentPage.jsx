import React from 'react';
import ServicePage from '../ServicePage';

const CustomDevelopmentPage = ({
  customData = {
    title: "Custom Business Central Development",
    description: "Tailored development solutions for Microsoft Dynamics 365 Business Central to meet your unique business requirements and industry-specific needs.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Custom Development", href: "/services/custom-development" }
    ],

    hero: {
      title: "Custom Business Central Development",
      subtitle: "Tailored development solutions for Microsoft Dynamics 365 Business Central to meet your unique business requirements and industry-specific needs.",
      primaryButton: { text: "Start Custom Project", href: "/contact" },
      secondaryButton: { text: "View Development Portfolio", href: "/portfolio" }
    },

    overview: {
      title: "Tailored Solutions for Unique Requirements",
      content: "Extend Business Central capabilities with custom development solutions designed specifically for your business. Our certified developers create powerful customizations, integrations, and applications that seamlessly integrate with your existing Business Central environment.",
      features: [
        "Custom business application development",
        "Advanced workflow automation solutions",
        "Third-party system integrations and APIs",
        "Industry-specific functionality extensions",
        "Custom reporting and analytics solutions",
        "Mobile and web application development"
      ],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Custom Development Benefits",
      description: "Unlock the full potential of Business Central with tailored development solutions.",
      items: [
        {
          icon: "⚙️",
          title: "Perfect Fit Solutions",
          description: "Custom-built functionality that perfectly matches your unique business processes and requirements."
        },
        {
          icon: "🔗",
          title: "Seamless Integration",
          description: "Native integration with Business Central ensuring consistent user experience and data integrity."
        },
        {
          icon: "🚀",
          title: "Enhanced Productivity",
          description: "Automate complex processes and eliminate manual tasks to boost team productivity and efficiency."
        },
        {
          icon: "📊",
          title: "Advanced Analytics",
          description: "Custom reporting and dashboard solutions providing deeper insights into your business performance."
        },
        {
          icon: "🏭",
          title: "Industry Specialization",
          description: "Industry-specific solutions that address unique challenges and regulatory requirements."
        },
        {
          icon: "📱",
          title: "Modern User Experience",
          description: "Mobile-friendly and responsive custom applications that work across all devices and platforms."
        }
      ]
    },

    process: {
      title: "Our Development Process",
      description: "Agile development methodology ensuring high-quality solutions delivered on time.",
      steps: [
        {
          number: 1,
          title: "Requirements Analysis",
          description: "Comprehensive analysis of your business requirements and technical specifications to define the optimal solution architecture."
        },
        {
          number: 2,
          title: "Solution Design",
          description: "Detailed technical design and prototyping to validate the approach before development begins."
        },
        {
          number: 3,
          title: "Development & Testing",
          description: "Agile development with continuous testing and quality assurance to ensure reliable, high-performance solutions."
        },
        {
          number: 4,
          title: "Deployment & Support",
          description: "Managed deployment with comprehensive testing, user training, and ongoing support for continuous improvement."
        }
      ]
    },

    cta: {
      title: "Ready to Extend Your Business Central?",
      description: "Transform your unique business requirements into powerful Business Central solutions. Our development experts will create the perfect custom solution for your needs.",
      primaryButton: { text: "Discuss Custom Project", href: "/contact" },
      secondaryButton: { text: "Schedule Technical Consultation", href: "/consultation" }
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

export default CustomDevelopmentPage;