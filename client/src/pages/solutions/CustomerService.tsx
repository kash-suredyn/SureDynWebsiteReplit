import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

const CustomerService = () => {
  useEffect(() => {
    document.title = "Dynamics 365 Customer Service - SureDyn Business Solutions | Omnichannel Customer Support";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Deliver exceptional customer service with Microsoft Dynamics 365 Customer Service. AI-powered support, omnichannel experiences, self-service portals, and intelligent case management.');
    }
  }, []);

  const capabilities = [
    {
      title: "Omnichannel Support",
      description: "Provide seamless customer experiences across phone, email, chat, social media, and self-service portals.",
      icon: "fas fa-comments"
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence for case routing, sentiment analysis, and knowledge suggestions.",
      icon: "fas fa-robot"
    },
    {
      title: "Knowledge Management",
      description: "Create and maintain comprehensive knowledge bases for agents and customer self-service.",
      icon: "fas fa-book"
    },
    {
      title: "Case Management",
      description: "Intelligent case routing, escalation, and resolution tracking with SLA monitoring.",
      icon: "fas fa-clipboard-list"
    },
    {
      title: "Field Service Integration",
      description: "Seamlessly connect customer service with field operations for complete service delivery.",
      icon: "fas fa-tools"
    },
    {
      title: "Customer Portal",
      description: "Empower customers with self-service portals for case tracking, knowledge access, and community forums.",
      icon: "fas fa-user-circle"
    }
  ];

  const metrics = [
    {
      value: "50%",
      label: "Faster Case Resolution",
      icon: "fas fa-clock"
    },
    {
      value: "35%",
      label: "Increase in CSAT Scores",
      icon: "fas fa-smile"
    },
    {
      value: "60%",
      label: "Reduction in Handle Time",
      icon: "fas fa-stopwatch"
    },
    {
      value: "40%",
      label: "Increase in First Call Resolution",
      icon: "fas fa-check-circle"
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Secure customer service with compliance features and fraud detection integration.",
      features: ["Regulatory Compliance", "Secure Communications", "Fraud Alert Integration", "Account Security"]
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant patient support with integrated health records and appointment scheduling.",
      features: ["HIPAA Compliance", "Patient Portal", "Appointment Scheduling", "Medical Records Integration"]
    },
    {
      name: "Retail & E-commerce",
      description: "Integrated order management, returns processing, and personalized customer experiences.",
      features: ["Order Tracking", "Returns Management", "Inventory Integration", "Personalized Support"]
    },
    {
      name: "Manufacturing",
      description: "Technical support with product documentation, warranty tracking, and field service coordination.",
      features: ["Technical Documentation", "Warranty Management", "Field Service Integration", "Product Support"]
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
                <span className="text-suredyn-orange">Customer Service</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Deliver exceptional customer experiences with AI-powered omnichannel support. 
                Resolve cases faster, increase satisfaction, and turn support interactions into growth opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Customer Service Demo
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
              Complete Customer Service Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to deliver world-class customer support experiences
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

      {/* Performance Metrics */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Customer Service Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations using Dynamics 365 Customer Service achieve significant improvements in support efficiency and customer satisfaction
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${metric.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">{metric.value}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
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
              Industry-Specific Customer Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored customer service solutions that meet the unique requirements of your industry
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{industry.name}</h3>
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

      {/* AI-Powered Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI-Powered Customer Service Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Leverage artificial intelligence to transform your customer service operations with intelligent automation and insights.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Virtual Agents & Chatbots",
                    description: "Automate routine inquiries with intelligent virtual agents that provide instant responses 24/7."
                  },
                  {
                    title: "Sentiment Analysis",
                    description: "Monitor customer emotions in real-time to identify escalation risks and improvement opportunities."
                  },
                  {
                    title: "Intelligent Case Routing",
                    description: "Automatically route cases to the best-qualified agents based on skills, workload, and case complexity."
                  },
                  {
                    title: "Knowledge Suggestions",
                    description: "AI-powered knowledge recommendations help agents resolve cases faster with relevant solutions."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-suredyn-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-brain text-white text-sm"></i>
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Service Level Improvements</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Handle Time</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <span className="text-green-600 font-semibold">-35%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">First Call Resolution</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                      <span className="text-blue-600 font-semibold">+40%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-suredyn-orange h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <span className="text-suredyn-orange font-semibold">+25%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Agent Productivity</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <span className="text-purple-600 font-semibold">+30%</span>
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
        title="Ready to Transform Customer Service?"
        subtitle="Deliver exceptional customer experiences with AI-powered support that scales with your business"
        primaryButtonText="Start Customer Service Journey"
      />
    </div>
  );
};

export default CustomerService;