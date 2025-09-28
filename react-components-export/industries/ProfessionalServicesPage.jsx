import React from 'react';
import ServicePage from '../ServicePage';

const ProfessionalServicesPage = ({
  customData = {
    title: "Professional Services Solutions",
    description: "Tailored Business Central solutions for professional services firms including project management, time tracking, client billing, and resource optimization.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Professional Services", href: "/industries/professional-services" }
    ],

    hero: {
      title: "Professional Services Solutions",
      subtitle: "Tailored Business Central solutions for professional services firms including project management, time tracking, client billing, and resource optimization.",
      primaryButton: { text: "Optimize Service Operations", href: "/contact" },
      secondaryButton: { text: "Schedule Services Demo", href: "/demo" }
    },

    overview: {
      title: "Complete Professional Services Management",
      content: "Streamline your professional services operations with Business Central's comprehensive project-based business capabilities. From project planning to client billing, manage every aspect of your service delivery with real-time visibility and automated processes.",
      features: [
        "Project management with resource allocation",
        "Time and expense tracking with mobile capabilities",
        "Client billing and contract management",
        "Resource planning and utilization tracking",
        "Financial management with project profitability",
        "CRM integration for client relationship management"
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Professional Services Benefits",
      description: "Optimize your professional services operations with Business Central's project-based business capabilities.",
      items: [
        {
          icon: "📋",
          title: "Project Management",
          description: "Comprehensive project management with planning, resource allocation, milestone tracking, and deliverable management."
        },
        {
          icon: "⏱️",
          title: "Time & Expense Tracking",
          description: "Mobile-enabled time and expense tracking with automatic project allocation and billing integration."
        },
        {
          icon: "💼",
          title: "Client Management",
          description: "Complete client lifecycle management with CRM integration, contract tracking, and relationship management."
        },
        {
          icon: "👥",
          title: "Resource Optimization",
          description: "Resource planning and utilization tracking to maximize billable hours and team productivity."
        },
        {
          icon: "📊",
          title: "Project Profitability",
          description: "Real-time project profitability analysis with cost tracking, budget management, and margin optimization."
        },
        {
          icon: "🎯",
          title: "Performance Analytics",
          description: "Comprehensive analytics for project performance, team utilization, and client satisfaction metrics."
        }
      ]
    },

    process: {
      title: "Professional Services Implementation Process",
      description: "Proven methodology for implementing project-based Business Central solutions for service organizations.",
      steps: [
        {
          number: 1,
          title: "Service Analysis",
          description: "Comprehensive analysis of your service delivery processes, client management, and project workflows."
        },
        {
          number: 2,
          title: "Solution Configuration",
          description: "Configure Business Central for project-based operations including time tracking, billing, and resource management."
        },
        {
          number: 3,
          title: "Integration & Testing",
          description: "Integrate with existing systems and conduct thorough testing of project workflows and client processes."
        },
        {
          number: 4,
          title: "Training & Launch",
          description: "Comprehensive team training and managed system launch with ongoing support for service operations."
        }
      ]
    },

    cta: {
      title: "Ready to Transform Your Service Delivery?",
      description: "Optimize your professional services operations with Business Central. Improve project visibility, maximize billable hours, and enhance client satisfaction.",
      primaryButton: { text: "Start Services Project", href: "/contact" },
      secondaryButton: { text: "Get Services Assessment", href: "/assessment" }
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

export default ProfessionalServicesPage;