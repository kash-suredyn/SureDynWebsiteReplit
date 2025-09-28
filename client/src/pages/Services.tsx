import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import { SERVICES } from "@/lib/constants";

const Services = () => {
  useEffect(() => {
    document.title = "Services - SureDyn Business Solutions | Microsoft Dynamics 365 Implementation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive Microsoft Dynamics 365 services including implementation, migration, upgrades, and 24/7 support. Expert QuickBooks, GP, and NAV migration services.');
    }
  }, []);

  const migrationServices = [
    {
      name: "QuickBooks to D365",
      description: "Comprehensive data migration with enhanced functionality and scalability.",
      icon: "fas fa-file-invoice-dollar",
      benefits: ["Enhanced Reporting", "Multi-Company Support", "Advanced Workflows", "Scalable Architecture"]
    },
    {
      name: "Dynamics GP to D365", 
      description: "Modernize your ERP with cloud capabilities and improved user experience.",
      icon: "fas fa-database",
      benefits: ["Cloud Migration", "Modern Interface", "Mobile Access", "Real-time Analytics"]
    },
    {
      name: "Dynamics NAV to D365",
      description: "Seamless upgrade to the latest platform with preserved customizations.",
      icon: "fas fa-exchange-alt", 
      benefits: ["Preserved Customizations", "Enhanced Performance", "New Features", "Continuous Updates"]
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your current processes and design a tailored implementation plan.",
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "System Configuration",
      description: "Custom setup and configuration based on your business requirements.",
      duration: "2-3 weeks"
    },
    {
      step: 3,
      title: "Data Migration",
      description: "Secure transfer of your existing data with validation and testing.",
      duration: "1 week"
    },
    {
      step: 4,
      title: "User Training", 
      description: "Comprehensive training for your team to maximize system adoption.",
      duration: "1 week"
    },
    {
      step: 5,
      title: "Go-Live & Support",
      description: "Smooth transition to production with ongoing support and monitoring.",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Expert Microsoft Dynamics 365{" "}
                <span className="text-suredyn-orange">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end implementation, migration, and support services with 80+ years of combined experience. 
                From planning to go-live and beyond, we ensure your success.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Microsoft Dynamics 365 services designed to accelerate your digital transformation
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-suredyn-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${service.icon} text-white text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-suredyn-orange mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful deployment in 4-6 weeks
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-suredyn-orange hidden lg:block"></div>
            
            <div className="space-y-12">
              {implementationSteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 100}>
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-8 shadow-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Migration Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smooth transition from your current system to Microsoft Dynamics 365 Business Central
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {migrationServices.map((migration, index) => (
              <AnimatedSection key={migration.name} delay={index * 100}>
                <div className="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-20 h-20 bg-suredyn-orange-pale rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${migration.icon} text-suredyn-orange text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{migration.name}</h3>
                  <p className="text-gray-600 mb-6">{migration.description}</p>
                  
                  <div className="space-y-2">
                    {migration.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-600">
                        <i className="fas fa-check text-suredyn-orange mr-2"></i>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="bg-suredyn-orange-pale rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Migration Services?</h3>
              <p className="text-lg text-gray-600 mb-8">
                We ensure zero data loss, minimal downtime, and complete business continuity during your migration
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-suredyn-orange mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Data Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-suredyn-orange mb-2">4-6</div>
                  <div className="text-sm text-gray-600">Weeks Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-suredyn-orange mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Migration Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-suredyn-orange mb-2">100%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Support & Maintenance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">24/7 Support & Maintenance</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment doesn't end at go-live. We provide continuous support to ensure your system runs optimally.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: "fas fa-headset", title: "Round-the-Clock Support", desc: "24/7 technical support with guaranteed response times" },
                  { icon: "fas fa-shield-alt", title: "Proactive Monitoring", desc: "Continuous system monitoring and preventive maintenance" },
                  { icon: "fas fa-rocket", title: "Performance Optimization", desc: "Regular system tune-ups for optimal performance" },
                  { icon: "fas fa-graduation-cap", title: "Ongoing Training", desc: "Continuous user education and best practices" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-suredyn-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${feature.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Support Plans</h3>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Support</h4>
                    <p className="text-gray-600 text-sm mb-2">Business hours support with email and phone</p>
                    <div className="text-suredyn-orange font-bold">Starting at $500/month</div>
                  </div>
                  
                  <div className="border-2 border-suredyn-orange rounded-lg p-4 bg-suredyn-orange-pale">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">Premium Support</h4>
                      <span className="bg-suredyn-orange text-white px-2 py-1 rounded text-xs font-medium">MOST POPULAR</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">24/7 support with priority response and proactive monitoring</p>
                    <div className="text-suredyn-orange font-bold">Starting at $1,200/month</div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Enterprise Support</h4>
                    <p className="text-gray-600 text-sm mb-2">Dedicated support team with custom SLA and optimization services</p>
                    <div className="text-suredyn-orange font-bold">Custom pricing</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Get Started?"
        subtitle="Let's discuss your specific requirements and create a customized service plan for your business"
      />
    </div>
  );
};

export default Services;
