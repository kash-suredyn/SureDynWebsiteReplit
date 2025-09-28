import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function CustomDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Custom Development
              <span className="text-suredyn-orange block">for Business Central</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Extend Microsoft Dynamics 365 Business Central with custom solutions tailored to your unique business requirements and workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Custom Project
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                View Development Examples
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple customizations to complex integrations, we deliver solutions that enhance your Business Central experience.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Extensions",
                description: "AL-based extensions that add new functionality while maintaining upgradeability.",
                icon: "fas fa-puzzle-piece",
                features: ["AL Development", "App Source Ready", "Upgrade Safe", "Microsoft Certified"]
              },
              {
                title: "API Integrations",
                description: "Connect Business Central with third-party systems and external applications.",
                icon: "fas fa-plug",
                features: ["REST APIs", "Web Services", "Real-time Sync", "Error Handling"]
              },
              {
                title: "Custom Reports",
                description: "Advanced reporting solutions with Power BI integration and custom layouts.",
                icon: "fas fa-chart-bar",
                features: ["RDLC Reports", "Word Layouts", "Power BI Integration", "Automated Distribution"]
              },
              {
                title: "Workflow Automation",
                description: "Streamline business processes with custom workflows and approval systems.",
                icon: "fas fa-cogs",
                features: ["Approval Workflows", "Document Routing", "Automated Notifications", "Process Optimization"]
              },
              {
                title: "Mobile Solutions",
                description: "Mobile-first solutions for field workers and remote access scenarios.",
                icon: "fas fa-mobile-alt",
                features: ["Mobile Apps", "Offline Capability", "Barcode Scanning", "GPS Integration"]
              },
              {
                title: "Data Migration Tools",
                description: "Custom tools for complex data migration and transformation scenarios.",
                icon: "fas fa-exchange-alt",
                features: ["Data Mapping", "Validation Rules", "Error Handling", "Batch Processing"]
              }
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border h-full">
                  <div className="text-center mb-6">
                    <div className="bg-suredyn-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${service.icon} text-2xl text-suredyn-orange`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
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

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure your custom development project is delivered on time and within budget.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "Detailed analysis of business requirements and technical specifications.",
                icon: "fas fa-clipboard-list"
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Architecture design and development approach planning.",
                icon: "fas fa-drafting-compass"
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with regular progress updates and reviews.",
                icon: "fas fa-code"
              },
              {
                step: "04",
                title: "Testing",
                description: "Comprehensive testing including unit, integration, and user acceptance testing.",
                icon: "fas fa-vial"
              },
              {
                step: "05",
                title: "Deployment",
                description: "Careful deployment with rollback plans and post-deployment support.",
                icon: "fas fa-rocket"
              }
            ].map((process, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center">
                <div className="bg-white rounded-xl p-6 h-full shadow-lg">
                  <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${process.icon} text-xl`}></i>
                  </div>
                  <div className="text-sm font-bold text-suredyn-orange mb-2">STEP {process.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
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
              Start Your Custom Development Project
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central custom development needs and discover how we can help your business succeed.
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
  );
}