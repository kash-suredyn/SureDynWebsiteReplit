import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Healthcare() {
  useEffect(() => {
    document.title = "Healthcare ERP Solutions | Microsoft Dynamics 365 Business Central for Healthcare | SureDyn";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Specialized Microsoft Dynamics 365 Business Central ERP solutions for healthcare organizations. HIPAA-compliant patient billing, asset management, regulatory compliance, and financial reporting.');
    }

    // SEO meta tags for Healthcare
    const addMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('keywords', 'healthcare ERP, healthcare software, HIPAA compliant ERP, patient billing, medical asset management, healthcare compliance, regulatory reporting, healthcare supply chain, healthcare financial management');
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
              Healthcare
              <span className="text-suredyn-orange block">ERP Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Specialized Business Central solutions for healthcare organizations with compliance management, patient billing, and regulatory reporting capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Healthcare Solution
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Healthcare Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Healthcare Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your healthcare operations with integrated Business Central functionality designed for healthcare providers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Patient Billing",
                description: "Comprehensive patient billing and insurance claim management with automated processing.",
                icon: "fas fa-file-medical-alt",
                features: ["Insurance Processing", "Claims Management", "Payment Plans", "Automated Billing"]
              },
              {
                title: "Regulatory Compliance",
                description: "Built-in compliance management for HIPAA, FDA, and other healthcare regulations.",
                icon: "fas fa-shield-alt",
                features: ["HIPAA Compliance", "Audit Trails", "Data Security", "Regulatory Reporting"]
              },
              {
                title: "Asset Management",
                description: "Medical equipment and asset tracking with maintenance scheduling and compliance.",
                icon: "fas fa-stethoscope",
                features: ["Equipment Tracking", "Maintenance Schedules", "Calibration Management", "Warranty Tracking"]
              },
              {
                title: "Supply Chain",
                description: "Healthcare-specific supply chain management with lot tracking and expiration monitoring.",
                icon: "fas fa-truck-medical",
                features: ["Lot Tracking", "Expiration Monitoring", "Vendor Management", "Cost Control"]
              },
              {
                title: "Financial Reporting",
                description: "Healthcare financial reporting with cost center analysis and budget management.",
                icon: "fas fa-chart-line",
                features: ["Cost Center Analysis", "Budget Management", "Revenue Reporting", "Financial Analytics"]
              },
              {
                title: "Quality Management",
                description: "Quality assurance processes with incident tracking and improvement initiatives.",
                icon: "fas fa-award",
                features: ["Incident Tracking", "Quality Metrics", "Process Improvement", "Accreditation Support"]
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SureDyn for Your Healthcare Organization?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our healthcare expertise and proven Business Central implementations help you maintain compliance while improving operational efficiency.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Healthcare Expertise",
                    description: "Deep understanding of healthcare regulations and compliance requirements.",
                    icon: "fas fa-user-md"
                  },
                  {
                    title: "Compliance Focus",
                    description: "Built-in compliance management for healthcare-specific regulations.",
                    icon: "fas fa-clipboard-check"
                  },
                  {
                    title: "Data Security",
                    description: "Enterprise-grade security measures to protect sensitive patient data.",
                    icon: "fas fa-lock"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Comprehensive support to ensure continued compliance and optimization.",
                    icon: "fas fa-headset"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-suredyn-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${benefit.icon} text-suredyn-orange`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern healthcare facility with digital technology integration" 
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
              Advance Your Healthcare Operations
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