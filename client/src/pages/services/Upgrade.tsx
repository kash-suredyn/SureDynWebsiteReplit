import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Upgrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Business Central
              <span className="text-suredyn-orange block">Upgrade Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay current with the latest Microsoft Dynamics 365 Business Central features and security updates. Our managed upgrade services ensure smooth transitions with minimal downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Plan Your Upgrade
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Check Upgrade Readiness
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upgrade Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Upgrade Business Central?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular upgrades ensure you have access to the latest features, security patches, and performance improvements.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Security",
                description: "Latest security patches and compliance updates to protect your business data.",
                icon: "fas fa-shield-alt",
                color: "text-green-600"
              },
              {
                title: "New Features",
                description: "Access to cutting-edge functionality and improved user experience.",
                icon: "fas fa-rocket",
                color: "text-blue-600"
              },
              {
                title: "Performance Optimization",
                description: "Improved system performance and faster processing speeds.",
                icon: "fas fa-tachometer-alt",
                color: "text-purple-600"
              },
              {
                title: "Microsoft Support",
                description: "Continued support from Microsoft with regular updates and maintenance.",
                icon: "fas fa-headset",
                color: "text-suredyn-orange"
              },
              {
                title: "Compliance Ready",
                description: "Stay compliant with changing regulations and industry standards.",
                icon: "fas fa-check-circle",
                color: "text-red-600"
              },
              {
                title: "Cloud Benefits",
                description: "Enhanced cloud capabilities and integration options.",
                icon: "fas fa-cloud",
                color: "text-cyan-600"
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border">
                  <div className="text-center">
                    <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${benefit.icon} text-2xl ${benefit.color}`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Upgrade Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure your Business Central upgrade is smooth and successful.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Comprehensive evaluation of your current system and customizations.",
                icon: "fas fa-clipboard-check"
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed upgrade plan with timeline and risk mitigation strategies.",
                icon: "fas fa-calendar-alt"
              },
              {
                step: "03",
                title: "Testing",
                description: "Thorough testing in a sandbox environment before production upgrade.",
                icon: "fas fa-vial"
              },
              {
                step: "04",
                title: "Deployment",
                description: "Coordinated upgrade execution with minimal business disruption.",
                icon: "fas fa-rocket"
              }
            ].map((process, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center">
                <div className="bg-white rounded-xl p-6 h-full shadow-lg">
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

      {/* CTA Section */}
      <section className="py-16 bg-suredyn-orange-pale">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Upgrade Your Business Central Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central upgrade needs and discover how we can help your business succeed.
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