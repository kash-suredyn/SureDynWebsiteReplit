import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import SEOWrapper from "@/components/layout/SEOWrapper";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import CTASection from "@/components/common/CTASection";
import { MIGRATION_SERVICES } from "@/lib/constants";

export default function Implementation() {
  // Custom SEO data for this page
  const customSEO = {
    title: "Microsoft Dynamics 365 Business Central Implementation Services | Expert ERP Implementation | SureDyn",
    description: "Professional Business Central implementation services for growing businesses. Complete ERP setup, configuration, training & go-live support. 98% success rate. Free consultation. New Jersey based.",
    keywords: "Business Central implementation, ERP implementation, Dynamics 365 setup, business software implementation, ERP consultant New Jersey, Microsoft Business Central consultant"
  };

  // FAQ data for this service
  const implementationFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a Business Central implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical Business Central implementation takes 3-6 months depending on company size, complexity, and customization requirements. We provide detailed project timelines during our initial consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your implementation service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our implementation includes discovery & planning, system configuration, data migration, customizations, user training, go-live support, and post-implementation optimization."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide training for our team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, comprehensive user training is included in all our implementations. We provide both end-user training and administrator training to ensure your team is fully prepared."
        }
      }
    ]
  };

  return (
    <SEOWrapper 
      customSEO={customSEO}
      schemaType="service"
      additionalSchemas={[implementationFAQSchema]}
    >
      <SEOBreadcrumb />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Business Central
              <span className="text-suredyn-orange block">Implementation Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert Microsoft Dynamics 365 Business Central implementation tailored to your business processes and industry requirements. Transform your operations with a solution designed for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Your Implementation
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology ensuring successful Business Central deployment with minimal business disruption.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Comprehensive business process analysis and implementation roadmap development.",
                icon: "fas fa-search"
              },
              {
                step: "02", 
                title: "System Configuration",
                description: "Custom Business Central setup tailored to your specific business requirements.",
                icon: "fas fa-cogs"
              },
              {
                step: "03",
                title: "Data Migration",
                description: "Secure and accurate migration of your existing data with full integrity validation.",
                icon: "fas fa-database"
              },
              {
                step: "04",
                title: "Go-Live Support",
                description: "Comprehensive support during launch with ongoing optimization and user training.",
                icon: "fas fa-rocket"
              }
            ].map((process, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center">
                <div className="bg-gradient-to-br from-suredyn-orange/10 to-blue-50 rounded-xl p-6 h-full">
                  <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${process.icon} text-xl`}></i>
                  </div>
                  <div className="text-sm font-bold text-suredyn-orange mb-2">STEP {process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Legacy System Migration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless migration from your current ERP system to Microsoft Dynamics 365 Business Central.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MIGRATION_SERVICES.map((migration, index) => (
              <AnimatedSection key={migration.id} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-suredyn-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${migration.icon} text-2xl text-suredyn-orange`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{migration.name}</h3>
                    <p className="text-gray-600">{migration.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {migration.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-suredyn-orange-pale">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Your Business Central Implementation Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central implementation needs and discover how we can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Started Today
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-transparent hover:bg-suredyn-orange hover:text-white text-suredyn-orange px-8 py-3 rounded-lg font-semibold border-2 border-suredyn-orange transition-colors duration-200">
                  Learn More About SureDyn
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
    </SEOWrapper>
  );
}