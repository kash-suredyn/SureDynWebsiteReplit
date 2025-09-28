import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              24/7 Support &
              <span className="text-suredyn-orange block">Maintenance Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive support and proactive maintenance for your Microsoft Dynamics 365 Business Central system to ensure optimal performance and minimal downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Support Now
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                View Support Plans
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Support Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From reactive support to proactive maintenance, we keep your Business Central system running smoothly.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Help Desk",
                description: "Round-the-clock technical support with guaranteed response times.",
                icon: "fas fa-headset",
                features: ["Phone Support", "Email Support", "Live Chat", "Remote Assistance"]
              },
              {
                title: "Proactive Monitoring",
                description: "Continuous system monitoring to identify and resolve issues before they impact your business.",
                icon: "fas fa-chart-line",
                features: ["System Health Checks", "Performance Monitoring", "Error Detection", "Capacity Planning"]
              },
              {
                title: "Regular Maintenance",
                description: "Scheduled maintenance to keep your system optimized and up-to-date.",
                icon: "fas fa-tools",
                features: ["System Updates", "Database Optimization", "Security Patches", "Performance Tuning"]
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

      {/* Support Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support level that best fits your business needs and budget.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "Starting at $299/month",
                description: "Basic support for small businesses",
                features: [
                  "Business Hours Support",
                  "Email & Phone Support",
                  "Monthly Health Checks",
                  "Basic Documentation"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "Starting at $599/month",
                description: "Comprehensive support for growing businesses",
                features: [
                  "24/7 Support Coverage",
                  "Priority Response Times",
                  "Proactive Monitoring",
                  "Monthly Optimization Reports",
                  "Dedicated Support Manager"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom Pricing",
                description: "Premium support for large organizations",
                features: [
                  "24/7 Premium Support",
                  "Immediate Response Times",
                  "Advanced Monitoring",
                  "Custom SLA Agreements",
                  "On-site Support Available"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative ${plan.popular ? 'border-2 border-suredyn-orange' : 'border'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-suredyn-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-suredyn-orange mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${plan.popular ? 'bg-suredyn-orange hover:bg-suredyn-orange-dark text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                      Choose Plan
                    </button>
                  </Link>
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
              Get Expert Business Central Support
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central support needs and discover how we can help your business succeed.
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