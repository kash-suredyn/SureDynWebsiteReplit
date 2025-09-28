import React from 'react';
import Hero from './Hero';
import FeatureGrid from './FeatureGrid';
import ProcessSteps from './ProcessSteps';
import CTASection from './CTASection';

const ServicePage = ({
  // Page metadata
  title = "Service Title",
  description = "Professional service description that explains the value and benefits of this particular service offering.",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Service Name", href: "#" }
  ],
  
  // Hero section
  hero = {
    title: "Service Title", 
    subtitle: "Professional service description that explains the value and benefits of this particular service offering.",
    primaryButton: { text: "Get Started", href: "/contact" },
    secondaryButton: { text: "Learn More", href: "/about" }
  },

  // Overview section
  overview = {
    title: "Service Overview",
    content: "Detailed description of the service, its benefits, and how it helps businesses achieve their goals with Microsoft Dynamics 365 Business Central.",
    features: [
      "Key feature or benefit one",
      "Key feature or benefit two", 
      "Key feature or benefit three",
      "Key feature or benefit four"
    ],
    image: null // Optional image URL
  },

  // Benefits section
  benefits = {
    title: "Key Benefits",
    description: "Discover how this service can transform your business operations and drive growth.",
    items: [
      {
        icon: "📊",
        title: "Benefit Title",
        description: "Description of how this benefit impacts the business and provides value."
      },
      {
        icon: "⚡",
        title: "Benefit Title", 
        description: "Description of how this benefit impacts the business and provides value."
      },
      {
        icon: "🔧",
        title: "Benefit Title",
        description: "Description of how this benefit impacts the business and provides value."
      }
    ]
  },

  // Process section
  process = {
    title: "Our Process",
    description: "Our proven methodology ensures successful implementation and optimal results.",
    steps: [
      {
        number: 1,
        title: "Discovery", 
        description: "We analyze your current systems and business requirements."
      },
      {
        number: 2,
        title: "Planning",
        description: "We create a detailed implementation plan tailored to your needs."
      },
      {
        number: 3,
        title: "Execution",
        description: "We implement the solution with minimal disruption to your business."
      },
      {
        number: 4, 
        title: "Support",
        description: "We provide ongoing support and optimization services."
      }
    ]
  },

  // CTA section
  cta = {
    title: "Context-Specific CTA Heading",
    description: "Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central needs and discover how we can help your business succeed.",
    primaryButton: { text: "Get Started Today", href: "/contact" },
    secondaryButton: { text: "Learn More", href: "/about" }
  },

  className = ""
}) => {
  const Breadcrumb = ({ items }) => (
    <nav className="py-4 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span>/</span>}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.label}</span>
              ) : (
                <a 
                  href={item.href}
                  className="text-suredyn-orange hover:text-suredyn-orange-dark hover:underline transition-colors"
                >
                  {item.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );

  return (
    <main className={className}>
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbs} />

      {/* Page Hero */}
      <Hero 
        {...hero}
        backgroundGradient="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
        paddingY="16"
      />

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {overview.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {overview.content}
              </p>
              
              {overview.features && overview.features.length > 0 && (
                <ul className="space-y-3">
                  {overview.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-suredyn-orange rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            <div className="lg:order-first">
              {overview.image ? (
                <img 
                  src={overview.image} 
                  alt={overview.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              ) : (
                <div className="w-full h-80 bg-gradient-to-br from-suredyn-orange/10 to-suredyn-orange/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl text-suredyn-orange mb-4">📊</div>
                    <p className="text-lg text-gray-600">Service Illustration</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <FeatureGrid 
        {...benefits}
        features={benefits.items}
        cardStyle="elevated"
        backgroundColor="gray"
        columns="3"
      />

      {/* Process Section */}
      <ProcessSteps 
        {...process}
        backgroundColor="white"
        stepStyle="numbered"
        layout="horizontal"
      />

      {/* Additional Content Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our {title} Service?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            With years of experience in Microsoft Dynamics 365 Business Central, we understand the unique challenges businesses face during digital transformation. Our approach combines technical expertise with business acumen to deliver solutions that drive real results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-suredyn-orange mb-2">99%</div>
              <p className="text-sm text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-suredyn-orange mb-2">500+</div>
              <p className="text-sm text-gray-600">Successful Implementations</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-suredyn-orange mb-2">24/7</div>
              <p className="text-sm text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection {...cta} />
    </main>
  );
};

export default ServicePage;