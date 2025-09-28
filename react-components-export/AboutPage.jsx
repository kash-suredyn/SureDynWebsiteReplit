import React from 'react';
import Hero from './Hero';
import FeatureGrid from './FeatureGrid';
import CTASection from './CTASection';

const AboutPage = ({
  hero = {
    title: "About SureDyn Business Solutions",
    subtitle: "Your trusted partner for Microsoft Dynamics 365 Business Central implementation, migration, and support services. We help businesses transform their operations with proven ERP solutions.",
    primaryButton: { text: "Work With Us", href: "/contact" },
    secondaryButton: { text: "Our Services", href: "/services" }
  },
  
  overview = {
    title: "Transforming Businesses with Microsoft Dynamics 365 Business Central",
    content: [
      "SureDyn Business Solutions specializes in Microsoft Dynamics 365 Business Central implementations, helping businesses migrate from legacy systems like QuickBooks, Dynamics GP, and Dynamics NAV to modern, cloud-based ERP solutions.",
      "Our team of certified consultants brings deep expertise in Business Central implementation, customization, and support across various industries including manufacturing, distribution, retail, healthcare, professional services, and financial services.",
      "We believe in delivering solutions that not only meet your current needs but also scale with your business growth, ensuring long-term success and ROI."
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },

  mission = {
    title: "Our Mission & Values",
    description: "We're committed to helping businesses achieve operational excellence through innovative ERP solutions.",
    items: [
      {
        icon: "🎯",
        title: "Our Mission",
        description: "To empower businesses with modern ERP solutions that drive growth, efficiency, and competitive advantage through Microsoft Dynamics 365 Business Central."
      },
      {
        icon: "💡",
        title: "Innovation",
        description: "We stay at the forefront of technology, continuously exploring new ways to leverage Business Central capabilities for maximum business impact."
      },
      {
        icon: "🤝",
        title: "Partnership",
        description: "We build lasting relationships with our clients, becoming their trusted technology partner throughout their digital transformation journey."
      },
      {
        icon: "⚡",
        title: "Excellence",
        description: "We deliver exceptional service quality, ensuring every implementation exceeds expectations and delivers measurable results."
      },
      {
        icon: "🔒",
        title: "Reliability",
        description: "Our clients depend on us for critical business systems. We provide reliable, secure, and scalable solutions that businesses can trust."
      },
      {
        icon: "📈",
        title: "Growth Focus",
        description: "Every solution we implement is designed to support business growth and adapt to changing needs over time."
      }
    ]
  },

  stats = {
    title: "Our Track Record",
    subtitle: "Numbers that demonstrate our expertise and commitment to client success",
    items: [
      { value: "500+", label: "Successful Implementations", description: "Business Central projects completed" },
      { value: "99%", label: "Client Satisfaction", description: "Based on post-implementation surveys" },
      { value: "15+", label: "Years Experience", description: "Combined team expertise in ERP" },
      { value: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
      { value: "50+", label: "Industry Certifications", description: "Microsoft and partner certifications" },
      { value: "98%", label: "On-Time Delivery", description: "Projects completed on schedule" }
    ]
  },

  team = {
    title: "Our Expert Team",
    description: "Meet the certified professionals who make your Business Central implementation successful.",
    members: [
      {
        name: "Sarah Johnson",
        role: "Senior Business Central Consultant",
        expertise: "Implementation & Migration Specialist",
        certifications: ["Microsoft Certified: Dynamics 365 Business Central Functional Consultant", "Project Management Professional (PMP)"],
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Michael Chen",
        role: "Technical Architect",
        expertise: "Custom Development & Integration",
        certifications: ["Microsoft Certified: Dynamics 365 Business Central Developer", "Azure Solutions Architect"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Emily Rodriguez",
        role: "Industry Solutions Manager",
        expertise: "Manufacturing & Distribution",
        certifications: ["Microsoft Certified: Dynamics 365 Business Central Functional Consultant", "Lean Six Sigma Black Belt"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "David Thompson",
        role: "Support Services Manager",
        expertise: "System Optimization & Training",
        certifications: ["Microsoft Certified: Dynamics 365 Business Central Functional Consultant", "ITIL v4 Foundation"],
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      }
    ]
  },

  certifications = {
    title: "Certifications & Partnerships",
    description: "Our commitment to excellence is validated by industry-leading certifications and partnerships.",
    items: [
      {
        name: "Microsoft Gold Partner",
        description: "Recognized for exceptional expertise in Microsoft technologies",
        icon: "🥇"
      },
      {
        name: "Business Central Specialist",
        description: "Certified specialization in Business Central implementations",
        icon: "🏆"
      },
      {
        name: "Cloud Solutions Provider",
        description: "Authorized Microsoft Cloud Solutions Provider",
        icon: "☁️"
      },
      {
        name: "ISO 27001 Certified",
        description: "Information security management certification",
        icon: "🔐"
      }
    ]
  },

  cta = {
    title: "Ready to Transform Your Business Operations?",
    description: "Partner with SureDyn Business Solutions for your Microsoft Dynamics 365 Business Central journey. Let our experienced team help you achieve operational excellence.",
    primaryButton: { text: "Start Your Project", href: "/contact" },
    secondaryButton: { text: "Schedule Consultation", href: "/consultation" }
  },

  className = ""
}) => {
  return (
    <main className={className}>
      {/* Hero Section */}
      <Hero 
        {...hero}
        backgroundGradient="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
      />

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {overview.title}
              </h2>
              {overview.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="lg:order-first">
              <img 
                src={overview.image}
                alt="SureDyn team collaborating on Business Central solutions"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <FeatureGrid 
        {...mission}
        features={mission.items}
        cardStyle="elevated"
        backgroundColor="gray"
        columns="3"
      />

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {stats.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {stats.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-suredyn-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.members.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-suredyn-orange font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {member.expertise}
                </p>
                <div className="text-xs text-gray-500">
                  {member.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="mb-1">{cert}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {certifications.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {certifications.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.items.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection {...cta} />
    </main>
  );
};

export default AboutPage;