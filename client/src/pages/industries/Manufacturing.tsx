import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Manufacturing() {
  useEffect(() => {
    document.title = "Manufacturing ERP Solutions | Microsoft Dynamics 365 Business Central for Manufacturing | SureDyn";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Specialized Microsoft Dynamics 365 Business Central ERP solutions for manufacturing companies. Production planning, shop floor control, inventory management, and quality control systems.');
    }

    // SEO meta tags for Manufacturing
    const addMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('keywords', 'manufacturing ERP, production planning software, shop floor control, manufacturing software, inventory management, quality control, bill of materials, capacity planning, cost management, manufacturing Business Central');
    addMetaTag('robots', 'index, follow');
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Manufacturing
              <span className="text-suredyn-orange block">ERP Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete Business Central solutions for manufacturing operations including production planning, inventory management, quality control, and shop floor optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Manufacturing Solution
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Manufacturing Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Manufacturing Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your manufacturing operations with integrated Business Central functionality designed for modern manufacturers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Production Planning",
                description: "Advanced production scheduling and capacity planning for optimal resource utilization.",
                icon: "fas fa-calendar-alt",
                features: ["Master Production Schedule", "Capacity Requirements Planning", "Material Requirements Planning", "Production Orders"]
              },
              {
                title: "Shop Floor Control",
                description: "Real-time shop floor management with work center tracking and progress monitoring.",
                icon: "fas fa-industry",
                features: ["Work Center Management", "Route Management", "Real-time Tracking", "Labor Reporting"]
              },
              {
                title: "Bill of Materials",
                description: "Comprehensive BOM management with multi-level structures and version control.",
                icon: "fas fa-list-alt",
                features: ["Multi-level BOMs", "Component Tracking", "Version Control", "Cost Rollup"]
              },
              {
                title: "Quality Management",
                description: "Integrated quality control processes ensuring product consistency and compliance.",
                icon: "fas fa-check-circle",
                features: ["Quality Control Plans", "Inspection Processes", "Test Protocols", "Compliance Tracking"]
              },
              {
                title: "Inventory Control",
                description: "Advanced inventory management with lot tracking and serialization capabilities.",
                icon: "fas fa-boxes",
                features: ["Lot Tracking", "Serial Numbers", "Bin Management", "Cycle Counting"]
              },
              {
                title: "Cost Management",
                description: "Accurate costing with standard, actual, and landed cost calculations.",
                icon: "fas fa-calculator",
                features: ["Standard Costing", "Actual Costing", "Variance Analysis", "Cost Allocation"]
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border h-full">
                  <div className="text-center mb-6">
                    <div className="bg-suredyn-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${feature.icon} text-2xl text-suredyn-orange`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Solving Manufacturing Challenges
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Business Central addresses the unique challenges facing modern manufacturers with integrated solutions that improve efficiency and reduce costs.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    challenge: "Complex Supply Chains",
                    solution: "Integrated supply chain management with vendor collaboration and real-time visibility.",
                    icon: "fas fa-link"
                  },
                  {
                    challenge: "Quality Control",
                    solution: "Built-in quality management processes with inspection workflows and compliance tracking.",
                    icon: "fas fa-shield-alt"
                  },
                  {
                    challenge: "Regulatory Compliance",
                    solution: "Automated compliance reporting and audit trails for industry regulations.",
                    icon: "fas fa-clipboard-check"
                  },
                  {
                    challenge: "Cost Management",
                    solution: "Accurate cost tracking with real-time visibility into production costs and variances.",
                    icon: "fas fa-dollar-sign"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-suredyn-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${item.icon} text-suredyn-orange`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.challenge}</h3>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern manufacturing facility with digital integration" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-suredyn-orange-pale">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modernize Your Manufacturing Operations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central needs and discover how we can help your business succeed.
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