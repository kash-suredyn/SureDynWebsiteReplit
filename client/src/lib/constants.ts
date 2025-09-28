export const COMPANY_INFO = {
  name: "SureDyn Business Solutions",
  website: "https://www.suredyn.com",
  email: "info@suredyn.com",
  phone: "+1-732-585-5563",
  description: "Microsoft Dynamics 365 Business Central implementation, upgrade, and support services",
} as const;

export const MIGRATION_SERVICES = [
  {
    id: "quickbooks-migration",
    name: "QuickBooks to Business Central Migration",
    description: "Seamless migration from QuickBooks to Microsoft Dynamics 365 Business Central with enhanced functionality.",
    icon: "fas fa-file-invoice-dollar",
    features: ["Data Migration", "Enhanced Reporting", "Multi-Company Support", "Advanced Workflows"]
  },
  {
    id: "dynamics-gp-migration",
    name: "Dynamics GP to Business Central Migration",
    description: "Modernize your ERP by migrating from Dynamics GP to Business Central with cloud capabilities.",
    icon: "fas fa-database",
    features: ["Cloud Migration", "Modern Interface", "Mobile Access", "Real-time Analytics"]
  },
  {
    id: "dynamics-nav-migration",
    name: "Dynamics NAV to Business Central Migration",
    description: "Upgrade from Dynamics NAV to Business Central while preserving customizations and data integrity.",
    icon: "fas fa-exchange-alt",
    features: ["Preserved Customizations", "Enhanced Performance", "New Features", "Continuous Updates"]
  }
] as const;

export const OTHER_D365_SERVICES = [
  {
    name: "Microsoft Dynamics 365 Finance",
    description: "Advanced financial management capabilities for enterprise organizations.",
    icon: "fas fa-coins"
  },
  {
    name: "Microsoft Dynamics 365 Supply Chain",
    description: "End-to-end supply chain management and logistics optimization.",
    icon: "fas fa-truck-loading"
  },
  {
    name: "Microsoft Dynamics 365 Customer Service",
    description: "Comprehensive customer service and support management platform.",
    icon: "fas fa-headset"
  },
  {
    name: "Microsoft Dynamics 365 Sales",
    description: "Complete sales automation and customer relationship management.",
    icon: "fas fa-chart-line"
  },
  {
    name: "Microsoft Dynamics 365 Field Service",
    description: "Field service management with scheduling, dispatch, and mobile capabilities.",
    icon: "fas fa-tools"
  }
] as const;

export const SERVICES = [
  {
    id: "implementation",
    name: "Implementation Services",
    description: "Expert Microsoft Dynamics 365 Business Central implementation tailored to your business processes and industry requirements.",
    icon: "fas fa-rocket",
    features: ["Business Central Setup", "Custom Configuration", "Data Migration", "Go-Live Support"],
    href: "/services/implementation"
  },
  {
    id: "upgrade",
    name: "Upgrade Services",
    description: "Seamless upgrades to the latest Microsoft Dynamics 365 Business Central versions with enhanced features and security.", 
    icon: "fas fa-arrow-up",
    features: ["Version Upgrades", "Feature Enhancements", "Security Updates", "Performance Optimization"],
    href: "/services/upgrade"
  },
  {
    id: "support",
    name: "Support & Maintenance",
    description: "24/7 technical support and proactive maintenance to ensure optimal Business Central performance.",
    icon: "fas fa-headset", 
    features: ["24/7 Support", "Proactive Monitoring", "Issue Resolution", "System Optimization"],
    href: "/services/support"
  },
  {
    id: "custom-development",
    name: "Custom Development",
    description: "Custom extensions and integrations for Microsoft Dynamics 365 Business Central to meet unique business needs.",
    icon: "fas fa-code",
    features: ["Custom Extensions", "Third-party Integrations", "API Development", "Workflow Automation"],
    href: "/services/custom-development"
  },
  {
    id: "training",
    name: "Training Services",
    description: "Comprehensive user training and change management to maximize Business Central adoption and ROI.",
    icon: "fas fa-graduation-cap",
    features: ["User Training", "Admin Training", "Change Management", "Best Practices"],
    href: "/services/training"
  },
  {
    id: "business-intelligence",
    name: "Business Intelligence",
    description: "Advanced reporting and analytics solutions with Power BI integration for data-driven decision making.",
    icon: "fas fa-chart-bar",
    features: ["Power BI Integration", "Custom Reports", "Real-time Dashboards", "Advanced Analytics"],
    href: "/services/business-intelligence"
  }
] as const;

export const SOLUTIONS = [
  {
    id: "dynamics365",
    name: "Microsoft Dynamics 365 Business Central",
    shortName: "Dynamics 365 Business Central",
    description: "Complete ERP solution for small to medium businesses with financial management, supply chain, and operations.",
    icon: "fas fa-cogs",
    href: "/solutions/dynamics365",
    features: ["Financial Management", "Supply Chain", "Project Management", "Manufacturing"],
    benefits: ["Streamlined Operations", "Real-time Insights", "Scalable Growth", "Cloud-based"]
  },
  {
    id: "powerplatform", 
    name: "Microsoft Power Platform",
    shortName: "Power Platform",
    description: "Low-code platform for building custom apps, automating workflows, and analyzing data across your organization.",
    icon: "fas fa-bolt",
    href: "/solutions/power-platform",
    features: ["Power Apps", "Power Automate", "Power BI", "Power Virtual Agents"],
    benefits: ["Rapid Development", "Process Automation", "Citizen Development", "Integration"]
  },
  {
    id: "powerbi",
    name: "Microsoft Power BI", 
    shortName: "Power BI",
    description: "Business intelligence and data visualization tools to transform your data into actionable insights.",
    icon: "fas fa-chart-bar",
    href: "/solutions/power-bi",
    features: ["Data Visualization", "Interactive Dashboards", "Real-time Analytics", "Mobile Access"],
    benefits: ["Data-driven Decisions", "Self-service BI", "Real-time Insights", "Cost Effective"]
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    shortName: "Azure",
    description: "Cloud computing platform for hosting, scaling, and securing your business applications and data.",
    icon: "fas fa-cloud", 
    href: "/solutions/azure",
    features: ["Cloud Infrastructure", "Data Storage", "Security Services", "DevOps Tools"],
    benefits: ["Scalability", "Security", "Cost Optimization", "Global Reach"]
  }
] as const;

export const INDUSTRIES = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Complete Business Central solutions for manufacturing operations including production planning, inventory management, and quality control.",
    icon: "fas fa-industry",
    features: ["Production Scheduling", "Bill of Materials", "Capacity Planning", "Quality Management", "Shop Floor Control", "Cost Analysis"],
    challenges: ["Complex Supply Chains", "Quality Control", "Regulatory Compliance", "Cost Management"],
    href: "/industries/manufacturing"
  },
  {
    id: "distribution",
    name: "Distribution", 
    description: "Streamlined Business Central solutions for distributors with advanced warehouse management and logistics optimization.",
    icon: "fas fa-truck",
    features: ["Warehouse Management", "Multi-Location Inventory", "Order Processing", "Logistics Optimization", "Drop Shipments", "Vendor Management"],
    challenges: ["Inventory Management", "Order Fulfillment", "Customer Demands", "Cost Control"],
    href: "/industries/distribution"
  },
  {
    id: "retail",
    name: "Retail",
    description: "Omnichannel Business Central retail solutions with POS integration, inventory management, and customer analytics.",
    icon: "fas fa-store",
    features: ["POS Integration", "Customer Management", "Multi-Channel Sales", "Inventory Control", "E-commerce Integration", "Loyalty Programs"],
    challenges: ["Customer Experience", "Inventory Turnover", "Omnichannel Integration", "Competition"],
    href: "/industries/retail"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Specialized Business Central solutions for healthcare organizations with compliance, patient management, and financial tracking.",
    icon: "fas fa-heartbeat",
    features: ["Patient Billing", "Insurance Management", "Regulatory Compliance", "Asset Management", "Supply Chain", "Financial Reporting"],
    challenges: ["Regulatory Compliance", "Patient Data Security", "Insurance Processing", "Cost Control"],
    href: "/industries/healthcare"
  },
  {
    id: "professional-services",
    name: "Professional Services",
    description: "Project-focused Business Central solutions for consulting firms with time tracking, resource allocation, and project profitability.",
    icon: "fas fa-briefcase", 
    features: ["Project Accounting", "Time & Expense", "Resource Planning", "Client Management", "Billing Automation", "Profitability Analysis"],
    challenges: ["Project Profitability", "Resource Utilization", "Client Billing", "Service Delivery"],
    href: "/industries/professional-services"
  },
  {
    id: "financial-services",
    name: "Financial Services",
    description: "Robust Business Central solutions for financial institutions with advanced reporting, compliance, and risk management capabilities.",
    icon: "fas fa-university",
    features: ["Regulatory Reporting", "Risk Management", "Client Portfolio Management", "Compliance Tracking", "Financial Analytics", "Audit Trails"],
    challenges: ["Regulatory Compliance", "Risk Management", "Data Security", "Client Reporting"],
    href: "/industries/financial-services"
  }
] as const;

export const STATS = {
  experience: "80+",
  projects: "Many", 
  clients: "200+",
  support: "24/7"
} as const;

export const OFFICE_LOCATIONS = [
  {
    id: "headquarters",
    name: "USA Headquarters",
    address: "SureDyn Business Solutions LLC\n28 Valley Road\nMontclair, New Jersey - 07042",
    phone: "+1-732-585-5563"
  },
  {
    id: "iselin",
    name: "Iselin Office", 
    address: "SureDyn Business Solutions LLC\n33 Wood Avenue South\nIselin, NJ - 08830",
    phone: "+1-732-585-5563"
  },
  {
    id: "dublin",
    name: "Dublin Office",
    address: "SureDyn Business Solutions LLC\n6397 Emerald Parkway\nDublin, OH - 43081", 
    phone: "+1-732-585-5563"
  }
] as const;
