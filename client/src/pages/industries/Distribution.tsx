import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Distribution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Distribution
              <span className="text-suredyn-orange block">ERP Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamlined Business Central solutions for distributors with advanced warehouse management, multi-location inventory control, and logistics optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Distribution Solution
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Distribution Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Distribution Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize your distribution operations with integrated Business Central functionality designed for modern distributors.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Warehouse Management",
                description: "Advanced warehouse operations with bin management, pick/pack optimization, and shipping integration.",
                icon: "fas fa-warehouse",
                features: ["Bin Management", "Pick/Pack Optimization", "Shipping Integration", "Cycle Counting"]
              },
              {
                title: "Multi-Location Inventory",
                description: "Real-time inventory tracking across multiple warehouses and distribution centers.",
                icon: "fas fa-map-marked-alt",
                features: ["Multi-Location Tracking", "Transfer Orders", "Stock Balancing", "Reorder Management"]
              },
              {
                title: "Order Processing",
                description: "Streamlined order management from receipt to fulfillment with automated workflows.",
                icon: "fas fa-clipboard-list",
                features: ["Order Automation", "Allocation Rules", "Backorder Management", "EDI Integration"]
              },
              {
                title: "Logistics Optimization",
                description: "Optimize shipping and delivery with route planning and carrier integration.",
                icon: "fas fa-route",
                features: ["Route Optimization", "Carrier Integration", "Freight Management", "Delivery Tracking"]
              },
              {
                title: "Drop Shipments",
                description: "Efficient drop shipment processing with vendor and customer coordination.",
                icon: "fas fa-shipping-fast",
                features: ["Vendor Coordination", "Direct Shipping", "Order Tracking", "Commission Management"]
              },
              {
                title: "Vendor Management",
                description: "Comprehensive vendor relationship management with performance tracking.",
                icon: "fas fa-handshake",
                features: ["Vendor Scorecards", "Purchase Agreements", "Rebate Management", "Quality Tracking"]
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
                Why Choose SureDyn for Your Distribution Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our deep understanding of distribution challenges and proven Business Central expertise ensures successful implementations that drive growth.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Industry Expertise",
                    description: "Specialized knowledge of distribution processes and best practices.",
                    icon: "fas fa-graduation-cap"
                  },
                  {
                    title: "Proven Track Record",
                    description: "Successful implementations across various distribution segments.",
                    icon: "fas fa-trophy"
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Solutions that grow with your business and adapt to changing needs.",
                    icon: "fas fa-expand-arrows-alt"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Comprehensive support to ensure continued success and optimization.",
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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern distribution warehouse with technology integration" 
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
              Optimize Your Distribution Network
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