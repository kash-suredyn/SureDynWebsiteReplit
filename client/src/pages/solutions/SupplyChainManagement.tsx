import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

const SupplyChainManagement = () => {
  useEffect(() => {
    document.title = "Dynamics 365 Supply Chain Management - SureDyn Business Solutions | Complete SCM & Manufacturing";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Optimize your supply chain with Microsoft Dynamics 365 Supply Chain Management. Advanced manufacturing, warehouse management, inventory optimization, and IoT-enabled operations for maximum efficiency.');
    }
  }, []);

  const coreCapabilities = [
    {
      title: "Manufacturing Operations",
      description: "Complete production planning, scheduling, and execution with lean manufacturing principles and quality control.",
      icon: "fas fa-industry"
    },
    {
      title: "Warehouse Management",
      description: "Advanced warehouse operations with mobile devices, directed putaway, picking optimization, and automated workflows.",
      icon: "fas fa-warehouse"
    },
    {
      title: "Inventory Optimization",
      description: "AI-powered demand forecasting, safety stock optimization, and automated replenishment for reduced carrying costs.",
      icon: "fas fa-boxes"
    },
    {
      title: "Procurement & Sourcing",
      description: "Strategic sourcing, vendor management, purchase requisitions, and automated approval workflows.",
      icon: "fas fa-handshake"
    },
    {
      title: "Transportation Management",
      description: "Route optimization, carrier management, freight planning, and real-time shipment tracking.",
      icon: "fas fa-truck"
    },
    {
      title: "IoT Intelligence",
      description: "Connected assets, predictive maintenance, real-time monitoring, and automated quality control systems.",
      icon: "fas fa-microchip"
    }
  ];

  const businessBenefits = [
    {
      metric: "25%",
      description: "Reduction in inventory costs",
      icon: "fas fa-chart-line",
      color: "text-green-600"
    },
    {
      metric: "30%",
      description: "Improvement in on-time delivery",
      icon: "fas fa-clock",
      color: "text-blue-600"
    },
    {
      metric: "20%",
      description: "Increase in manufacturing efficiency",
      icon: "fas fa-cogs",
      color: "text-suredyn-orange"
    },
    {
      metric: "40%",
      description: "Faster order fulfillment",
      icon: "fas fa-shipping-fast",
      color: "text-purple-600"
    }
  ];

  const manufacturingFeatures = [
    {
      title: "Production Planning & Scheduling",
      description: "Advanced planning optimization with finite capacity scheduling and constraint-based planning",
      features: ["Master Production Schedule", "Capacity Planning", "Material Requirements Planning", "Production Orders"]
    },
    {
      title: "Shop Floor Control",
      description: "Real-time production tracking with mobile devices and automated data collection",
      features: ["Job Tracking", "Labor Reporting", "Quality Control", "Machine Integration"]
    },
    {
      title: "Quality Management",
      description: "Comprehensive quality assurance with statistical process control and non-conformance tracking",
      features: ["Quality Orders", "Sampling Plans", "Certificate of Analysis", "Corrective Actions"]
    },
    {
      title: "Lean Manufacturing",
      description: "Kanban systems, continuous improvement tools, and waste reduction methodologies",
      features: ["Kanban Boards", "Value Stream Mapping", "Root Cause Analysis", "Performance Dashboards"]
    }
  ];

  const supplyChainProcess = [
    {
      step: "1",
      title: "Demand Planning",
      description: "AI-powered forecasting analyzes historical data, market trends, and external factors",
      icon: "fas fa-chart-bar"
    },
    {
      step: "2",
      title: "Supply Planning",
      description: "Optimize inventory levels and procurement schedules based on demand forecasts",
      icon: "fas fa-balance-scale"
    },
    {
      step: "3",
      title: "Production Execution",
      description: "Execute production plans with real-time monitoring and quality control",
      icon: "fas fa-play-circle"
    },
    {
      step: "4",
      title: "Fulfillment & Delivery",
      description: "Optimize warehouse operations and transportation for on-time delivery",
      icon: "fas fa-shipping-fast"
    },
    {
      step: "5",
      title: "Performance Analytics",
      description: "Monitor KPIs and identify optimization opportunities across the supply chain",
      icon: "fas fa-analytics"
    }
  ];

  const industryApplications = [
    {
      industry: "Discrete Manufacturing",
      description: "Make-to-order and engineer-to-order manufacturing with complex BOMs and routing operations.",
      icon: "fas fa-cog",
      useCases: ["Automotive Parts", "Electronics Assembly", "Machinery Manufacturing", "Aerospace Components"]
    },
    {
      industry: "Process Manufacturing",
      description: "Batch processing, formula management, and co-product handling for chemical and food industries.",
      icon: "fas fa-flask",
      useCases: ["Chemical Processing", "Food & Beverage", "Pharmaceuticals", "Cosmetics"]
    },
    {
      industry: "Distribution & Retail",
      description: "Multi-channel fulfillment, cross-docking, and omnichannel inventory management.",
      icon: "fas fa-store",
      useCases: ["3PL Operations", "Retail Distribution", "E-commerce Fulfillment", "Wholesale Distribution"]
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
                <span className="text-suredyn-orange">Supply Chain Management</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your supply chain operations with intelligent manufacturing, advanced warehouse management, 
                and AI-powered optimization. Deliver exceptional customer experiences while maximizing operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get SCM Demo
                  </button>
                </Link>
                <Link href="/case-studies">
                  <button className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md">
                    View Manufacturing Success Stories
                  </button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Supply Chain Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end supply chain management from procurement to delivery with integrated manufacturing and warehouse operations
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
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

      {/* Business Impact */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measurable Supply Chain Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations using Dynamics 365 Supply Chain Management achieve significant operational improvements and cost savings
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessBenefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-white text-xl`}></i>
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${benefit.color}`}>{benefit.metric}</div>
                  <div className="text-gray-600 font-medium">{benefit.description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Excellence Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing capabilities that drive operational efficiency and product quality
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manufacturingFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className="fas fa-check text-suredyn-orange mr-3"></i>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integrated Supply Chain Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless flow from demand planning to customer delivery with real-time visibility and optimization
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Process flow visualization */}
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-4">
              {supplyChainProcess.map((process, index) => (
                <AnimatedSection key={process.step} delay={index * 100} className="flex-1">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-suredyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${process.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="w-12 h-12 bg-suredyn-orange-dark rounded-full flex items-center justify-center mx-auto mb-4 -mt-6 relative z-10">
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < supplyChainProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 transform translate-x-full">
                      <i className="fas fa-arrow-right text-suredyn-orange text-2xl"></i>
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored supply chain solutions that address the unique challenges of different manufacturing and distribution environments
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {industryApplications.map((application, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    <div className="flex items-center mb-4 lg:mb-0 lg:mr-8">
                      <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mr-4">
                        <i className={`${application.icon} text-suredyn-orange text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{application.industry}</h3>
                        <p className="text-gray-600">{application.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 lg:ml-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {application.useCases.map((useCase, idx) => (
                          <div key={idx} className="bg-white rounded-lg p-3 border border-gray-100 text-center">
                            <span className="text-gray-700 text-sm font-medium">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI & IoT-Powered Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Leverage cutting-edge technologies to transform your supply chain into an intelligent, self-optimizing network.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Demand Sensing & Forecasting",
                    description: "AI algorithms analyze market signals, weather patterns, and social trends for accurate demand prediction."
                  },
                  {
                    title: "Predictive Maintenance",
                    description: "IoT sensors monitor equipment health and predict failures before they impact production."
                  },
                  {
                    title: "Autonomous Supply Networks",
                    description: "Self-healing supply chains that automatically adapt to disruptions and optimize performance."
                  },
                  {
                    title: "Digital Twin Technology",
                    description: "Virtual replicas of operations enable simulation, optimization, and scenario planning."
                  }
                ].map((tech, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-suredyn-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-robot text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h4>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operational Dashboards</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Overall Equipment Effectiveness</span>
                      <span className="text-green-600 font-semibold">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Inventory Turnover Rate</span>
                      <span className="text-blue-600 font-semibold">12.4x</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">On-Time Delivery Performance</span>
                      <span className="text-suredyn-orange font-semibold">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-suredyn-orange h-3 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Supply Chain Responsiveness</span>
                      <span className="text-purple-600 font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-suredyn-orange-pale rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Cost Savings YTD</div>
                      <div className="text-2xl font-bold text-suredyn-orange">$2.4M</div>
                    </div>
                    <i className="fas fa-chart-line text-suredyn-orange text-3xl"></i>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful deployment with minimal disruption to your operations
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Assessment & Design",
                duration: "4-6 weeks",
                description: "Current state analysis, future state design, and implementation roadmap",
                deliverables: ["Process Assessment", "Solution Architecture", "Project Plan", "Risk Analysis"]
              },
              {
                phase: "Configuration & Testing",
                duration: "8-12 weeks", 
                description: "System configuration, data migration, integration setup, and comprehensive testing",
                deliverables: ["System Configuration", "Data Migration", "Integration Testing", "User Training"]
              },
              {
                phase: "Deployment & Optimization",
                duration: "2-4 weeks",
                description: "Go-live support, performance optimization, and continuous improvement",
                deliverables: ["Go-Live Support", "Performance Tuning", "User Adoption", "Optimization Plan"]
              }
            ].map((phase, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 border border-gray-200 h-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{phase.description}</p>
                  <div className="space-y-2">
                    {phase.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className="fas fa-check text-suredyn-orange mr-3"></i>
                        <span className="text-gray-600 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Supply Chain?"
        subtitle="Optimize operations with AI-powered manufacturing, intelligent warehouse management, and end-to-end supply chain visibility"
        primaryButtonText="Start SCM Transformation"
      />
    </div>
  );
};

export default SupplyChainManagement;