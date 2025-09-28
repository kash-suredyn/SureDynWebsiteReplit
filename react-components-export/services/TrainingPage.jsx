import React from 'react';
import ServicePage from '../ServicePage';

const TrainingPage = ({
  customData = {
    title: "Business Central Training Services",
    description: "Comprehensive training programs for Microsoft Dynamics 365 Business Central to maximize user adoption and system productivity.",
    
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Training", href: "/services/training" }
    ],

    hero: {
      title: "Business Central Training Services",
      subtitle: "Comprehensive training programs for Microsoft Dynamics 365 Business Central to maximize user adoption and system productivity.",
      primaryButton: { text: "Schedule Training", href: "/contact" },
      secondaryButton: { text: "View Training Catalog", href: "/training-catalog" }
    },

    overview: {
      title: "Maximize System Adoption and Productivity",
      content: "Empower your team with comprehensive Business Central training programs designed to maximize system adoption and productivity. Our certified trainers deliver customized education solutions that fit your organization's specific needs and learning preferences.",
      features: [
        "Role-based training programs for all user levels",
        "On-site, remote, and hybrid training delivery options",
        "Customized training materials and documentation",
        "Hands-on workshops with real-world scenarios",
        "Ongoing support and refresher training sessions",
        "Certification preparation and guidance"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },

    benefits: {
      title: "Training Benefits",
      description: "Invest in your team's success with comprehensive Business Central training programs.",
      items: [
        {
          icon: "🎓",
          title: "Role-Based Learning",
          description: "Targeted training programs designed specifically for different roles and responsibilities within your organization."
        },
        {
          icon: "📈",
          title: "Increased Productivity",
          description: "Well-trained users are more productive, make fewer errors, and leverage system capabilities more effectively."
        },
        {
          icon: "🏆",
          title: "Expert Instructors",
          description: "Learn from Microsoft-certified trainers with real-world Business Central implementation experience."
        },
        {
          icon: "🎯",
          title: "Customized Curriculum",
          description: "Training programs tailored to your specific business processes, configurations, and industry requirements."
        },
        {
          icon: "💻",
          title: "Flexible Delivery",
          description: "Choose from on-site, remote, or hybrid training options that fit your team's schedule and preferences."
        },
        {
          icon: "📚",
          title: "Ongoing Support",
          description: "Access to training materials, refresher sessions, and ongoing support to reinforce learning outcomes."
        }
      ]
    },

    process: {
      title: "Our Training Methodology",
      description: "Structured approach to deliver effective learning outcomes and maximize system adoption.",
      steps: [
        {
          number: 1,
          title: "Training Assessment",
          description: "Evaluate current user knowledge levels and identify specific training requirements for different roles and departments."
        },
        {
          number: 2,
          title: "Curriculum Design",
          description: "Develop customized training programs that align with your business processes and system configuration."
        },
        {
          number: 3,
          title: "Training Delivery",
          description: "Deliver engaging, hands-on training sessions with practical exercises and real-world scenarios."
        },
        {
          number: 4,
          title: "Ongoing Support",
          description: "Provide post-training support, refresher sessions, and additional resources to reinforce learning outcomes."
        }
      ]
    },

    cta: {
      title: "Invest in Your Team's Success",
      description: "Maximize your Business Central investment with comprehensive training programs. Empower your team with the knowledge and skills to excel in their roles.",
      primaryButton: { text: "Plan Training Program", href: "/contact" },
      secondaryButton: { text: "Download Training Overview", href: "/resources/training-overview" }
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

export default TrainingPage;