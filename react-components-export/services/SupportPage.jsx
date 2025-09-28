import React from 'react';
import ServicePage from '../ServicePage';

const SupportPage = ({
  customData = {
    title: "Business Central Support & Maintenance",
    description: "Comprehensive support and maintenance services for Microsoft Dynamics 365 Business Central to ensure optimal system performance and user productivity.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Support", href: "/services/support" }
    ],

    hero: {
      title: "Support & Maintenance Services",
      subtitle: "Comprehensive support and maintenance services for Microsoft Dynamics 365 Business Central to ensure optimal system performance and user productivity.",
      primaryButton: { text: "Get Support Today", href: "/contact" },
      secondaryButton: { text: "View Support Plans", href: "/support-plans" }
    },

    overview: {
      title: "Ongoing Business Central Excellence",
      content: "Keep your Business Central system running at peak performance with our comprehensive support and maintenance services. Our certified experts provide proactive monitoring, rapid issue resolution, and continuous optimization to maximize your ERP investment.",
      features: [
        "24/7 technical support and monitoring",
        "Proactive system health checks and optimization",
        "Regular system updates and security patches",
        "User training and ongoing education programs",
        "Performance tuning and database optimization",
        "Custom report development and enhancements"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Support Benefits",
      description: "Maximize your Business Central investment with professional support services.",
      items: [
        {
          icon: "🛡️",
          title: "Proactive Monitoring",
          description: "Continuous system monitoring to identify and resolve issues before they impact your business operations."
        },
        {
          icon: "⚡",
          title: "Rapid Response",
          description: "Fast issue resolution with guaranteed response times and escalation procedures for critical business functions."
        },
        {
          icon: "📈",
          title: "Performance Optimization",
          description: "Regular performance tuning and optimization to ensure your system operates at maximum efficiency."
        },
        {
          icon: "🔄",
          title: "Regular Updates",
          description: "Managed system updates and feature releases to keep your Business Central current and secure."
        },
        {
          icon: "🎓",
          title: "Ongoing Training",
          description: "Continuous user training and education to maximize system adoption and productivity."
        },
        {
          icon: "🔧",
          title: "Custom Enhancements",
          description: "Tailored modifications and enhancements to adapt your system to evolving business needs."
        }
      ]
    },

    process: {
      title: "Our Support Methodology",
      description: "Structured approach to maintain system excellence and business continuity.",
      steps: [
        {
          number: 1,
          title: "Monitoring & Prevention",
          description: "Continuous system monitoring with proactive issue identification and prevention measures to maintain optimal performance."
        },
        {
          number: 2,
          title: "Issue Resolution",
          description: "Rapid response to support requests with systematic troubleshooting and resolution procedures."
        },
        {
          number: 3,
          title: "Optimization & Tuning",
          description: "Regular system optimization, performance tuning, and capacity planning to support business growth."
        },
        {
          number: 4,
          title: "Enhancement & Growth",
          description: "Continuous system enhancement and capability expansion to support evolving business requirements."
        }
      ]
    },

    cta: {
      title: "Ensure Your Business Central Success",
      description: "Partner with us for comprehensive Business Central support and maintenance. Keep your system running smoothly while focusing on growing your business.",
      primaryButton: { text: "Get Support Quote", href: "/contact" },
      secondaryButton: { text: "Compare Support Plans", href: "/support-plans" }
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

export default SupportPage;