import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Retail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Retail
              <span className="text-suredyn-orange block">ERP Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Omnichannel Business Central retail solutions with POS integration, inventory management, customer analytics, and e-commerce capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Retail Solution
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Retail Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Retail Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your retail operations with integrated Business Central functionality designed for modern retailers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "POS Integration",
                description: "Seamless point-of-sale integration with real-time inventory and customer data synchronization.",
                icon: "fas fa-cash-register",
                features: ["Real-time Sync", "Multiple Payment Types", "Offline Capability", "Receipt Customization"]
              },
              {
                title: "Inventory Control",
                description: "Advanced inventory management with multi-location tracking and automated reordering.",
                icon: "fas fa-boxes",
                features: ["Multi-location Tracking", "Automated Reordering", "Size/Color Variants", "Seasonal Planning"]
              },
              {
                title: "Customer Management",
                description: "Comprehensive customer relationship management with loyalty programs and analytics.",
                icon: "fas fa-users",
                features: ["Customer Profiles", "Purchase History", "Loyalty Programs", "Targeted Marketing"]
              },
              {
                title: "E-commerce Integration",
                description: "Unified omnichannel experience with seamless online and offline integration.",
                icon: "fas fa-shopping-cart",
                features: ["Online Store Integration", "Order Management", "Click & Collect", "Returns Processing"]
              },
              {
                title: "Analytics & Reporting",
                description: "Real-time retail analytics and reporting for data-driven decision making.",
                icon: "fas fa-chart-bar",
                features: ["Sales Analytics", "Inventory Reports", "Customer Insights", "Performance Dashboards"]
              },
              {
                title: "Mobile Solutions",
                description: "Mobile-enabled solutions for store associates and management teams.",
                icon: "fas fa-mobile-alt",
                features: ["Mobile POS", "Inventory Lookup", "Price Checking", "Customer Service"]
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
                Why Choose SureDyn for Your Retail Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our retail expertise and proven Business Central implementations help you create exceptional customer experiences while driving profitability.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Retail Expertise",
                    description: "Deep understanding of retail operations and customer journey optimization.",
                    icon: "fas fa-store"
                  },
                  {
                    title: "Omnichannel Experience",
                    description: "Seamless integration across all sales channels for unified customer experience.",
                    icon: "fas fa-sync-alt"
                  },
                  {
                    title: "Scalable Platform",
                    description: "Solutions that grow from single store to multi-location retail chains.",
                    icon: "fas fa-expand-arrows-alt"
                  },
                  {
                    title: "Real-time Insights",
                    description: "Data-driven insights to optimize inventory, pricing, and customer engagement.",
                    icon: "fas fa-chart-line"
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern retail store with integrated technology solutions" 
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
              Enhance Your Retail Experience
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