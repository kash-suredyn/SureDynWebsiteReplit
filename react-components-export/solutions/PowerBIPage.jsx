import React from 'react';
import ServicePage from '../ServicePage';

const PowerBIPage = ({
  customData = {
    title: "Power BI Analytics Solutions",
    description: "Advanced business intelligence and analytics platform integrated with Business Central for real-time insights, interactive dashboards, and data-driven decision making.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Power BI", href: "/solutions/powerbi" }
    ],

    hero: {
      title: "Power BI Analytics Solutions",
      subtitle: "Advanced business intelligence and analytics platform integrated with Business Central for real-time insights, interactive dashboards, and data-driven decision making.",
      primaryButton: { text: "Enhance Analytics", href: "/contact" },
      secondaryButton: { text: "View Power BI Demo", href: "/demo" }
    },

    overview: {
      title: "Transform Data into Business Intelligence",
      content: "Microsoft Power BI transforms your Business Central data into powerful insights that drive strategic decision-making. Create interactive dashboards, comprehensive reports, and predictive analytics that help you understand your business performance and identify growth opportunities.",
      features: [
        "Real-time interactive dashboards and reports",
        "Seamless Business Central data integration",
        "Self-service analytics and data exploration",
        "Mobile business intelligence capabilities",
        "Advanced data modeling and visualization",
        "Automated report distribution and alerts"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Power BI Benefits",
      description: "Unlock the power of your data with Microsoft Power BI business intelligence solutions.",
      items: [
        {
          icon: "📊",
          title: "Interactive Dashboards",
          description: "Create stunning, interactive dashboards that provide real-time insights into your business performance."
        },
        {
          icon: "🔍",
          title: "Self-Service Analytics",
          description: "Empower users to explore data and create their own reports without IT dependency."
        },
        {
          icon: "📱",
          title: "Mobile BI",
          description: "Access business intelligence on any device with native mobile apps and responsive design."
        },
        {
          icon: "🔗",
          title: "Data Integration",
          description: "Connect multiple data sources including Business Central, Excel, cloud services, and databases."
        },
        {
          icon: "🤖",
          title: "AI-Powered Insights",
          description: "Leverage artificial intelligence for automated insights, forecasting, and anomaly detection."
        },
        {
          icon: "📈",
          title: "Advanced Analytics",
          description: "Perform complex analytics including predictive modeling and statistical analysis."
        }
      ]
    },

    process: {
      title: "Power BI Implementation Process",
      description: "Systematic approach to implementing comprehensive business intelligence solutions.",
      steps: [
        {
          number: 1,
          title: "BI Requirements Analysis",
          description: "Comprehensive analysis of your reporting needs, KPIs, and business intelligence requirements."
        },
        {
          number: 2,
          title: "Data Architecture Design",
          description: "Design optimal data architecture including data modeling, ETL processes, and integration strategies."
        },
        {
          number: 3,
          title: "Dashboard Development",
          description: "Create custom dashboards and reports tailored to your business requirements and user roles."
        },
        {
          number: 4,
          title: "Training & Adoption",
          description: "User training and change management to ensure successful adoption of business intelligence capabilities."
        }
      ]
    },

    cta: {
      title: "Ready to Unlock Your Data's Potential?",
      description: "Transform your Business Central data into actionable insights with Power BI. Make data-driven decisions that propel your business forward with our expert BI implementation services.",
      primaryButton: { text: "Start BI Project", href: "/contact" },
      secondaryButton: { text: "Schedule Power BI Demo", href: "/demo" }
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

export default PowerBIPage;