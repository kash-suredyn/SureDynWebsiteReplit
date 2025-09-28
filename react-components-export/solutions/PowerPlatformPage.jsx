import React from 'react';
import ServicePage from '../ServicePage';

const PowerPlatformPage = ({
  customData = {
    title: "Microsoft Power Platform Solutions",
    description: "Low-code/no-code platform including Power Apps, Power Automate, and Power Virtual Agents to extend Business Central capabilities and automate business processes.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Power Platform", href: "/solutions/power-platform" }
    ],

    hero: {
      title: "Microsoft Power Platform Solutions",
      subtitle: "Low-code/no-code platform including Power Apps, Power Automate, and Power Virtual Agents to extend Business Central capabilities and automate business processes.",
      primaryButton: { text: "Explore Power Platform", href: "/contact" },
      secondaryButton: { text: "View Platform Demo", href: "/demo" }
    },

    overview: {
      title: "Extend Business Central with Low-Code Solutions",
      content: "Microsoft Power Platform provides powerful low-code/no-code tools to extend your Business Central capabilities. Build custom applications, automate workflows, create intelligent chatbots, and analyze data without extensive technical expertise.",
      features: [
        "Custom app development with Power Apps",
        "Workflow automation with Power Automate",
        "AI-powered chatbots with Power Virtual Agents",
        "Advanced analytics with Power BI integration",
        "Seamless Business Central integration",
        "Rapid development and deployment"
      ],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Power Platform Benefits",
      description: "Accelerate innovation and productivity with Microsoft Power Platform low-code solutions.",
      items: [
        {
          icon: "🚀",
          title: "Rapid Development",
          description: "Build and deploy business applications quickly using low-code/no-code development tools."
        },
        {
          icon: "🔄",
          title: "Process Automation",
          description: "Automate repetitive tasks and business processes with intuitive workflow automation tools."
        },
        {
          icon: "📱",
          title: "Custom Applications",
          description: "Create tailored business applications that extend Business Central functionality."
        },
        {
          icon: "🤖",
          title: "AI Integration",
          description: "Incorporate artificial intelligence and machine learning into your business processes."
        },
        {
          icon: "🔗",
          title: "Seamless Integration",
          description: "Native integration with Business Central and other Microsoft 365 applications."
        },
        {
          icon: "👥",
          title: "Citizen Development",
          description: "Empower business users to create solutions without extensive technical knowledge."
        }
      ]
    },

    process: {
      title: "Power Platform Implementation Process",
      description: "Structured approach to implementing low-code solutions that extend Business Central capabilities.",
      steps: [
        {
          number: 1,
          title: "Use Case Discovery",
          description: "Identify business processes and requirements that can benefit from Power Platform solutions."
        },
        {
          number: 2,
          title: "Solution Design",
          description: "Design optimal Power Platform solutions including apps, workflows, and integration architecture."
        },
        {
          number: 3,
          title: "Development & Testing",
          description: "Build and test custom applications and automated workflows with comprehensive quality assurance."
        },
        {
          number: 4,
          title: "Deployment & Training",
          description: "Deploy solutions and train users on new capabilities with ongoing support and optimization."
        }
      ]
    },

    cta: {
      title: "Ready to Accelerate Innovation with Power Platform?",
      description: "Extend your Business Central capabilities with Microsoft Power Platform. Build custom solutions, automate processes, and drive innovation with our expert implementation services.",
      primaryButton: { text: "Start Platform Project", href: "/contact" },
      secondaryButton: { text: "Get Platform Assessment", href: "/assessment" }
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

export default PowerPlatformPage;