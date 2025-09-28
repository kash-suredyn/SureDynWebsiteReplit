import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

const FieldService = () => {
  useEffect(() => {
    document.title = "Dynamics 365 Field Service - SureDyn Business Solutions | Field Service Management & Scheduling";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Optimize field operations with Microsoft Dynamics 365 Field Service. Intelligent scheduling, mobile workforce management, IoT integration, and predictive maintenance for maximum efficiency.');
    }
  }, []);

  const capabilities = [
    {
      title: "Intelligent Scheduling",
      description: "AI-powered scheduling optimization that considers skills, location, availability, and customer preferences.",
      icon: "fas fa-calendar-alt"
    },
    {
      title: "Mobile Field App",
      description: "Comprehensive mobile application for technicians with offline capabilities and real-time updates.",
      icon: "fas fa-mobile-alt"
    },
    {
      title: "Inventory Management", 
      description: "Track parts, tools, and equipment across vehicles, warehouses, and technician inventory.",
      icon: "fas fa-boxes"
    },
    {
      title: "IoT Integration",
      description: "Connect IoT devices for remote monitoring, predictive maintenance, and automated service requests.",
      icon: "fas fa-wifi"
    },
    {
      title: "Work Order Management",
      description: "Complete work order lifecycle management from creation to completion and billing.",
      icon: "fas fa-clipboard-check"
    },
    {
      title: "Customer Portal",
      description: "Self-service portal for customers to request service, track appointments, and provide feedback.",
      icon: "fas fa-user-cog"
    }
  ];

  const benefits = [
    {
      metric: "25%",
      description: "Increase in first-time fix rate",
      icon: "fas fa-wrench"
    },
    {
      metric: "30%",
      description: "Reduction in travel time",
      icon: "fas fa-route"
    },
    {
      metric: "20%",
      description: "Improvement in technician productivity",
      icon: "fas fa-user-check"
    },
    {
      metric: "40%",
      description: "Faster service delivery",
      icon: "fas fa-clock"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Equipment maintenance, predictive analytics, and production line service support.",
      icon: "fas fa-industry",
      features: ["Equipment Maintenance", "Predictive Analytics", "Production Support", "Asset Management"]
    },
    {
      name: "Utilities & Energy",
      description: "Infrastructure maintenance, emergency response, and compliance management.",
      icon: "fas fa-bolt",
      features: ["Infrastructure Maintenance", "Emergency Response", "Compliance Tracking", "Safety Management"]
    },
    {
      name: "Healthcare",
      description: "Medical equipment service, compliance tracking, and patient safety protocols.",
      icon: "fas fa-heartbeat",
      features: ["Medical Equipment Service", "Compliance Management", "Patient Safety", "Asset Tracking"]
    },
    {
      name: "Telecommunications",
      description: "Network infrastructure, installation services, and customer premise equipment.",
      icon: "fas fa-broadcast-tower",
      features: ["Network Maintenance", "Installation Services", "Customer Equipment", "Service Optimization"]
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Service Request",
      description: "Customer requests service through portal, call center, or IoT alert",
      icon: "fas fa-phone"
    },
    {
      step: "2",
      title: "Intelligent Scheduling",
      description: "AI optimizes technician assignment based on skills, location, and availability",
      icon: "fas fa-brain"
    },
    {
      step: "3",
      title: "Mobile Dispatch",
      description: "Technician receives work order with customer details, service history, and directions",
      icon: "fas fa-mobile-alt"
    },
    {
      step: "4",
      title: "On-Site Service",
      description: "Complete service delivery with access to knowledge base, parts, and customer signature",
      icon: "fas fa-tools"
    },
    {
      step: "5",
      title: "Completion & Billing",
      description: "Automatic invoicing and customer feedback collection with service documentation",
      icon: "fas fa-file-invoice"
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
                Dynamics 365{" "}
                <span className="text-suredyn-orange">Field Service</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform field operations with intelligent scheduling, mobile workforce management, and IoT-enabled predictive maintenance. 
                Deliver exceptional service experiences while maximizing technician productivity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Field Service Demo
                  </button>
                </Link>
                <Link href="/case-studies">
                  <button className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md">
                    View Success Stories
                  </button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Field Service Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize field operations and deliver exceptional service experiences
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mb-6">
                    <i className={`${capability.icon} text-suredyn-orange text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Workflow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Streamlined Service Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From service request to completion, automate and optimize every step of the field service process
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-suredyn-orange hidden lg:block"></div>
            
            <div className="space-y-12">
              {workflowSteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 100}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mr-4">
                            <i className={`${step.icon} text-suredyn-orange`}></i>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10 mx-auto lg:mx-0 my-4 lg:my-0">
                      {step.step}
                    </div>
                    
                    <div className="w-full lg:w-5/12"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Benefits */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measurable Field Service Improvements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations using Dynamics 365 Field Service achieve significant operational improvements and cost savings
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">{benefit.metric}</div>
                  <div className="text-gray-600 font-medium">{benefit.description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Field Service Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored field service capabilities that address the unique challenges of your industry
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mr-4">
                      <i className={`${industry.icon} text-suredyn-orange text-xl`}></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className="fas fa-check text-suredyn-orange mr-3"></i>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* IoT & Predictive Maintenance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                IoT-Enabled Predictive Maintenance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform from reactive to predictive maintenance with IoT sensors and AI-powered analytics that prevent equipment failures before they occur.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Connected Assets",
                    description: "Monitor equipment health in real-time with IoT sensors and telemetry data."
                  },
                  {
                    title: "Predictive Analytics",
                    description: "AI algorithms predict failures and recommend optimal maintenance schedules."
                  },
                  {
                    title: "Automated Alerts",
                    description: "Automatic work order creation when maintenance thresholds are exceeded."
                  },
                  {
                    title: "Remote Diagnostics",
                    description: "Diagnose issues remotely and dispatch technicians with the right parts and skills."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-suredyn-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-microchip text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Maintenance Impact</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Equipment Uptime</span>
                      <span className="text-green-600 font-semibold">99.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '99.2%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Planned vs Unplanned Maintenance</span>
                      <span className="text-blue-600 font-semibold">85% Planned</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Maintenance Cost Reduction</span>
                      <span className="text-suredyn-orange font-semibold">-30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-suredyn-orange h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Mean Time to Repair</span>
                      <span className="text-purple-600 font-semibold">-45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Optimize Field Operations?"
        subtitle="Transform your field service delivery with intelligent scheduling, mobile workforce management, and predictive maintenance"
        primaryButtonText="Start Field Service Transformation"
      />
    </div>
  );
};

export default FieldService;