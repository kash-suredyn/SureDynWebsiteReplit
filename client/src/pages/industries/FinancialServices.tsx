import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function FinancialServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Financial Services
              <span className="text-suredyn-orange block">ERP Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Robust Business Central solutions for financial institutions with advanced reporting, compliance management, and risk assessment capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Financial Services Solution
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Financial Services Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Financial Services Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your financial services operations with integrated Business Central functionality designed for financial institutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regulatory Reporting",
                description: "Automated regulatory reporting and compliance management for financial services regulations.",
                icon: "fas fa-file-contract",
                features: ["Automated Reports", "Compliance Tracking", "Audit Trails", "Regulatory Updates"]
              },
              {
                title: "Risk Management",
                description: "Comprehensive risk assessment and management tools with real-time monitoring.",
                icon: "fas fa-shield-alt",
                features: ["Risk Assessment", "Monitoring Systems", "Alert Management", "Mitigation Strategies"]
              },
              {
                title: "Client Portfolio Management",
                description: "Advanced portfolio management with performance tracking and client reporting.",
                icon: "fas fa-chart-pie",
                features: ["Portfolio Tracking", "Performance Analysis", "Client Reporting", "Asset Allocation"]
              },
              {
                title: "Compliance Tracking",
                description: "Real-time compliance monitoring with automated alerts and reporting.",
                icon: "fas fa-clipboard-check",
                features: ["Real-time Monitoring", "Automated Alerts", "Compliance Reports", "Policy Management"]
              },
              {
                title: "Financial Analytics",
                description: "Advanced financial analytics and business intelligence for strategic decision making.",
                icon: "fas fa-chart-line",
                features: ["Financial Analytics", "Business Intelligence", "Predictive Modeling", "Performance Metrics"]
              },
              {
                title: "Audit Trails",
                description: "Comprehensive audit trails and documentation for regulatory compliance and transparency.",
                icon: "fas fa-search",
                features: ["Complete Audit Trails", "Document Management", "Change Tracking", "Compliance Documentation"]
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
                Why Choose SureDyn for Your Financial Services Organization?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our financial services expertise and proven Business Central implementations help you maintain compliance while driving operational excellence.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Regulatory Expertise",
                    description: "Deep understanding of financial services regulations and compliance requirements.",
                    icon: "fas fa-balance-scale"
                  },
                  {
                    title: "Security Focus",
                    description: "Enterprise-grade security measures to protect sensitive financial data.",
                    icon: "fas fa-lock"
                  },
                  {
                    title: "Scalable Platform",
                    description: "Solutions that grow from boutique firms to large financial institutions.",
                    icon: "fas fa-expand-arrows-alt"
                  },
                  {
                    title: "Ongoing Compliance",
                    description: "Continuous support to ensure ongoing regulatory compliance and optimization.",
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Financial services professionals working with digital analytics" 
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
              Strengthen Your Financial Services
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