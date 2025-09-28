import React from 'react';
import ServicePage from '../ServicePage';

const ManufacturingPage = ({
  customData = {
    title: "Manufacturing ERP Solutions",
    description: "Complete Business Central solutions for manufacturing operations including production planning, inventory management, quality control, and shop floor optimization.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/industries" },
      { label: "Manufacturing", href: "/industries/manufacturing" }
    ],

    hero: {
      title: "Manufacturing ERP Solutions",
      subtitle: "Complete Business Central solutions for manufacturing operations including production planning, inventory management, quality control, and shop floor optimization.",
      primaryButton: { text: "Get Manufacturing Solution", href: "/contact" },
      secondaryButton: { text: "Schedule Demo", href: "/demo" }
    },

    overview: {
      title: "Complete Manufacturing Management",
      content: "Streamline your manufacturing operations with integrated Business Central functionality designed for modern manufacturers. From production planning to quality control, our solutions provide end-to-end visibility and control over your manufacturing processes.",
      features: [
        "Master Production Schedule and capacity planning",
        "Work center management and routing optimization",
        "Multi-level Bill of Materials with cost rollup",
        "Real-time shop floor tracking and reporting",
        "Quality control processes and compliance tracking",
        "Inventory management with lot and serial tracking"
      ],
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Manufacturing Benefits",
      description: "Transform your manufacturing operations with Business Central's comprehensive manufacturing capabilities.",
      items: [
        {
          icon: "🏭",
          title: "Production Planning",
          description: "Advanced production scheduling and capacity planning for optimal resource utilization and on-time delivery."
        },
        {
          icon: "⚙️",
          title: "Shop Floor Control",
          description: "Real-time shop floor management with work center tracking and progress monitoring for complete visibility."
        },
        {
          icon: "📋",
          title: "Bill of Materials",
          description: "Comprehensive BOM management with multi-level structures, version control, and automated cost calculations."
        },
        {
          icon: "✅",
          title: "Quality Management",
          description: "Integrated quality control processes ensuring product consistency and regulatory compliance."
        },
        {
          icon: "📦",
          title: "Inventory Control",
          description: "Advanced inventory management with lot tracking, serialization, and automated replenishment."
        },
        {
          icon: "📊",
          title: "Manufacturing Analytics",
          description: "Real-time reporting and analytics for production performance, efficiency, and cost analysis."
        }
      ]
    },

    process: {
      title: "Manufacturing Implementation Process",
      description: "Proven methodology for implementing Business Central manufacturing solutions with minimal disruption.",
      steps: [
        {
          number: 1,
          title: "Process Analysis",
          description: "Comprehensive analysis of your manufacturing processes, workflows, and current system capabilities."
        },
        {
          number: 2,
          title: "System Design",
          description: "Configure Business Central manufacturing modules to match your production processes and quality requirements."
        },
        {
          number: 3,
          title: "Data Migration",
          description: "Migrate existing data including BOMs, routings, work centers, and inventory with full validation."
        },
        {
          number: 4,
          title: "Training & Go-Live",
          description: "Comprehensive user training and managed go-live with ongoing support for manufacturing operations."
        }
      ]
    },

    cta: {
      title: "Ready to Transform Your Manufacturing Operations?",
      description: "Optimize your manufacturing processes with Business Central. Get better visibility, control, and efficiency across your entire production operation.",
      primaryButton: { text: "Start Manufacturing Project", href: "/contact" },
      secondaryButton: { text: "Download Manufacturing Guide", href: "/resources/manufacturing-guide" }
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

export default ManufacturingPage;