import React from 'react';
import Hero from './Hero';
import FeatureGrid from './FeatureGrid';
import CTASection from './CTASection';

const HomePage = ({
  hero = {
    title: "Transform Your Business with Microsoft Dynamics 365",
    subtitle: "Expert implementation, migration, and support services for Microsoft Dynamics 365 Business Central. Seamlessly migrate from QuickBooks, GP, or NAV to a modern ERP solution.",
    primaryButton: { text: "Start Your Project", href: "/contact" },
    secondaryButton: { text: "Our Services", href: "/services" }
  },
  features = {
    title: "Why Choose SureDyn?",
    description: "We specialize in Microsoft Dynamics 365 Business Central with expertise in implementation, migration, and ongoing support.",
    items: [
      {
        icon: "🚀",
        title: "Expert Implementation",
        description: "Professional Microsoft Dynamics 365 Business Central implementation tailored to your business processes and requirements."
      },
      {
        icon: "🔄",
        title: "Seamless Migration", 
        description: "Smooth data migration from QuickBooks, Great Plains, or NAV to Business Central with minimal downtime."
      },
      {
        icon: "🛠️",
        title: "Ongoing Support",
        description: "Comprehensive support and maintenance services to keep your system running optimally."
      },
      {
        icon: "📊",
        title: "Business Intelligence",
        description: "Advanced reporting and analytics to help you make data-driven business decisions."
      },
      {
        icon: "🎓",
        title: "Training & Education",
        description: "Comprehensive training programs to ensure your team can effectively use the new system."
      },
      {
        icon: "⚡",
        title: "Fast Implementation",
        description: "Rapid deployment with proven methodologies to get your business up and running quickly."
      }
    ]
  },
  cta = {
    title: "Ready to Transform Your Business?",
    description: "Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central needs and discover how we can help your business succeed.",
    primaryButton: { text: "Get Started Today", href: "/contact" }
  },
  testimonials = {
    title: "What Our Clients Say",
    items: [
      {
        quote: "SureDyn's expertise in Microsoft Dynamics 365 Business Central transformed our operations. The migration from QuickBooks was seamless and the ongoing support is exceptional.",
        author: "Sarah Johnson",
        company: "Manufacturing Solutions Inc.",
        role: "CFO"
      },
      {
        quote: "The implementation was completed on time and within budget. Our team was thoroughly trained and we've seen immediate improvements in efficiency.",
        author: "Michael Chen", 
        company: "Distribution Partners LLC",
        role: "Operations Director"
      },
      {
        quote: "Outstanding service from start to finish. The custom development work perfectly matched our unique business requirements.",
        author: "Emily Rodriguez",
        company: "Healthcare Services Corp",
        role: "IT Director"
      }
    ]
  },
  className = ""
}) => {
  return (
    <main className={className}>
      {/* Hero Section */}
      <Hero {...hero} />

      {/* Features Section */}
      <FeatureGrid 
        {...features}
        features={features.items}
        cardStyle="elevated"
        backgroundColor="gray"
      />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-suredyn-orange/10 rounded-full flex items-center justify-center text-suredyn-orange font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-suredyn-orange">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Microsoft Dynamics 365 Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every stage of your Dynamics 365 journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Implementation",
                description: "Full-scale implementation of Microsoft Dynamics 365 Business Central",
                href: "/services/implementation",
                icon: "🚀"
              },
              {
                title: "Migration & Upgrade", 
                description: "Seamless migration from legacy systems and version upgrades",
                href: "/services/upgrade",
                icon: "🔄"
              },
              {
                title: "Support & Maintenance",
                description: "Ongoing support and system maintenance services",
                href: "/services/support", 
                icon: "🛠️"
              },
              {
                title: "Custom Development",
                description: "Tailored solutions and customizations for your business",
                href: "/services/custom-development",
                icon: "⚙️"
              },
              {
                title: "Training Programs",
                description: "Comprehensive training for your team and end users",
                href: "/services/training",
                icon: "🎓"
              },
              {
                title: "Business Intelligence",
                description: "Advanced reporting and analytics solutions",
                href: "/services/business-intelligence",
                icon: "📊"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 group">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-suredyn-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href={service.href}
                  className="inline-flex items-center text-suredyn-orange hover:text-suredyn-orange-dark font-medium transition-colors"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
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

export default HomePage;