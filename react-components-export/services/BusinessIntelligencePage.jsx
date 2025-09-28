import React from 'react';
import ServicePage from '../ServicePage';

const BusinessIntelligencePage = ({
  customData = {
    title: "Business Intelligence & Analytics",
    description: "Advanced reporting and analytics solutions for Microsoft Dynamics 365 Business Central to drive data-driven decision making.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Business Intelligence", href: "/services/business-intelligence" }
    ],

    hero: {
      title: "Business Intelligence & Analytics",
      subtitle: "Advanced reporting and analytics solutions for Microsoft Dynamics 365 Business Central to drive data-driven decision making.",
      primaryButton: { text: "Enhance Analytics", href: "/contact" },
      secondaryButton: { text: "View BI Solutions", href: "/bi-solutions" }
    },

    overview: {
      title: "Transform Data into Business Intelligence",
      content: "Unlock the full potential of your Business Central data with advanced business intelligence and analytics solutions. Our BI experts create powerful dashboards, reports, and analytics tools that provide deep insights to drive strategic decision-making and operational excellence.",
      features: [
        "Custom Power BI dashboard development",
        "Advanced reporting and KPI tracking",
        "Real-time business performance monitoring",
        "Data warehouse and ETL solutions",
        "Predictive analytics and forecasting",
        "Self-service analytics training and support"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Business Intelligence Benefits",
      description: "Leverage advanced analytics to drive better business decisions and improved performance.",
      items: [
        {
          icon: "📊",
          title: "Executive Dashboards",
          description: "Real-time executive dashboards providing comprehensive views of business performance and key metrics."
        },
        {
          icon: "🔍",
          title: "Deep Data Insights",
          description: "Advanced analytics that reveal hidden patterns, trends, and opportunities in your business data."
        },
        {
          icon: "⚡",
          title: "Real-time Reporting",
          description: "Instant access to current business data with automated reporting and alert capabilities."
        },
        {
          icon: "📈",
          title: "Predictive Analytics",
          description: "Forecasting and predictive models to anticipate trends and support strategic planning."
        },
        {
          icon: "🎯",
          title: "KPI Monitoring",
          description: "Comprehensive KPI tracking and performance monitoring across all business dimensions."
        },
        {
          icon: "🚀",
          title: "Self-Service Analytics",
          description: "Empower users with self-service analytics tools and training to explore data independently."
        }
      ]
    },

    process: {
      title: "Our BI Implementation Process",
      description: "Systematic approach to deliver powerful business intelligence solutions aligned with your objectives.",
      steps: [
        {
          number: 1,
          title: "Requirements Discovery",
          description: "Comprehensive analysis of your reporting needs, KPIs, and business intelligence requirements."
        },
        {
          number: 2,
          title: "Data Architecture",
          description: "Design optimal data architecture including data warehousing, ETL processes, and integration strategies."
        },
        {
          number: 3,
          title: "Solution Development",
          description: "Build custom dashboards, reports, and analytics solutions using Power BI and Business Central integration."
        },
        {
          number: 4,
          title: "Training & Adoption",
          description: "User training and change management to ensure successful adoption of new business intelligence capabilities."
        }
      ]
    },

    cta: {
      title: "Ready to Transform Your Business Intelligence?",
      description: "Unlock the power of your Business Central data with advanced analytics and reporting solutions. Make data-driven decisions that drive business success.",
      primaryButton: { text: "Start BI Project", href: "/contact" },
      secondaryButton: { text: "Schedule BI Demo", href: "/demo" }
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

export default BusinessIntelligencePage;