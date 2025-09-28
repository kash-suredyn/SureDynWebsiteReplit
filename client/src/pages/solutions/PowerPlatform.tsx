import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

const PowerPlatform = () => {
  useEffect(() => {
    document.title = "Microsoft Power Platform - SureDyn Business Solutions | Low-Code Development Platform";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Microsoft Power Platform low-code solutions including Power Apps, Power Automate, Power BI, and Power Virtual Agents. Build custom applications and automate workflows.');
    }
  }, []);

  const powerPlatformComponents = [
    {
      name: "Power Apps",
      icon: "fas fa-mobile-alt",
      description: "Build custom business applications without traditional coding",
      features: ["Canvas Apps", "Model-driven Apps", "Portal Apps", "Mobile-first Design"],
      useCases: ["Custom Forms", "Data Collection", "Approval Workflows", "Field Service Apps"]
    },
    {
      name: "Power Automate",
      icon: "fas fa-cogs",
      description: "Automate workflows and business processes across applications",
      features: ["Cloud Flows", "Desktop Flows", "Business Process Flows", "AI Builder"],
      useCases: ["Document Approval", "Data Synchronization", "Email Automation", "Robotic Process Automation"]
    },
    {
      name: "Power BI",
      icon: "fas fa-chart-line", 
      description: "Transform data into actionable insights with interactive visualizations",
      features: ["Interactive Dashboards", "Real-time Analytics", "Mobile Reports", "Embedded Analytics"],
      useCases: ["Executive Dashboards", "Sales Analytics", "Financial Reporting", "Operational Metrics"]
    },
    {
      name: "Power Virtual Agents",
      icon: "fas fa-robot",
      description: "Create intelligent chatbots without coding",
      features: ["No-code Bot Building", "AI-powered Conversations", "Microsoft Teams Integration", "Multi-channel Support"],
      useCases: ["Customer Support", "Employee Self-service", "FAQ Automation", "Lead Qualification"]
    }
  ];

  const benefits = [
    {
      title: "Rapid Development",
      description: "Build applications 10x faster than traditional development",
      icon: "fas fa-rocket",
      metric: "90% faster time-to-market"
    },
    {
      title: "Citizen Development",
      description: "Empower business users to create their own solutions",
      icon: "fas fa-users",
      metric: "70% of apps built by business users"
    },
    {
      title: "Seamless Integration",
      description: "Connect to 400+ data sources and services",
      icon: "fas fa-plug", 
      metric: "400+ pre-built connectors"
    },
    {
      title: "Enterprise Security",
      description: "Built-in security and compliance features",
      icon: "fas fa-shield-alt",
      metric: "99.9% availability SLA"
    }
  ];

  const useCaseExamples = [
    {
      industry: "Manufacturing",
      title: "Quality Control App",
      description: "Mobile app for quality inspectors to capture defects, photos, and corrective actions in real-time.",
      technologies: ["Power Apps", "Power Automate", "SharePoint"],
      results: ["50% reduction in inspection time", "95% data accuracy", "Real-time quality alerts"]
    },
    {
      industry: "Healthcare",
      title: "Patient Intake Automation", 
      description: "Automated patient registration process with appointment scheduling and document collection.",
      technologies: ["Power Apps", "Power Automate", "Power BI"],
      results: ["60% faster patient check-in", "Reduced paperwork", "Improved patient satisfaction"]
    },
    {
      industry: "Retail",
      title: "Inventory Management Portal",
      description: "Self-service portal for store managers to track inventory, place orders, and view analytics.",
      technologies: ["Power Apps", "Power BI", "Common Data Service"],
      results: ["40% reduction in stockouts", "Improved order accuracy", "Real-time inventory visibility"]
    }
  ];

  const developmentApproach = [
    { phase: 1, title: "Discovery Workshop", description: "Identify automation opportunities and define requirements", duration: "1-2 days" },
    { phase: 2, title: "Proof of Concept", description: "Build initial prototype to validate approach", duration: "1 week" },
    { phase: 3, title: "Development", description: "Build, test, and refine the solution", duration: "2-4 weeks" },
    { phase: 4, title: "Deployment", description: "Deploy to production with user training", duration: "1 week" },
    { phase: 5, title: "Support", description: "Ongoing support and enhancement", duration: "Ongoing" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Microsoft{" "}
                  <span className="text-suredyn-orange">Power Platform</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empower everyone to build applications, automate processes, and analyze data 
                  with the world's most comprehensive low-code platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center min-touch-target-lg flex items-center justify-center">
                    Start Building Today
                    <i className="fas fa-hammer ml-2"></i>
                  </a>
                </Link>
                <Link href="/services">
                  <a className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md text-center min-touch-target-lg flex items-center justify-center">
                    Development Services
                  </a>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInRight" delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Power Platform low-code development interface" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                loading="eager"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Power Platform Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Four Powerful Tools, One Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how each Power Platform component can transform your business processes
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {powerPlatformComponents.map((component, index) => (
              <AnimatedSection key={component.name} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${component.icon} text-suredyn-orange text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{component.name}</h3>
                      <p className="text-gray-600 mb-4">{component.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {component.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <i className="fas fa-check text-suredyn-orange mr-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Use Cases</h4>
                      <ul className="space-y-1">
                        {component.useCases.map((useCase, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <i className="fas fa-lightbulb text-amber-500 mr-2"></i>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Power Platform?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accelerate digital transformation with proven low-code capabilities
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-suredyn-orange-pale rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-suredyn-orange text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="text-suredyn-orange font-bold text-sm">{benefit.metric}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations are using Power Platform to solve business challenges
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {useCaseExamples.map((example, index) => (
              <AnimatedSection key={example.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                        {example.industry}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-4">{example.title}</h3>
                      <p className="text-gray-600">{example.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">Technologies Used</h4>
                      <div className="space-y-2">
                        {example.technologies.map((tech, idx) => (
                          <span key={idx} className="inline-block bg-white text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">Results Achieved</h4>
                      <ul className="space-y-2">
                        {example.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agile methodology designed for rapid delivery and iterative improvement
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-suredyn-orange hidden lg:block"></div>
            
            <div className="space-y-12">
              {developmentApproach.map((phase, index) => (
                <AnimatedSection key={phase.phase} delay={index * 100}>
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10">
                      {phase.phase}
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-8 shadow-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900">{phase.title}</h3>
                        <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Center of Excellence */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Power Platform Center of Excellence</h2>
              <p className="text-lg text-gray-600 mb-8">
                Establish governance, best practices, and ongoing support for your Power Platform adoption.
              </p>
              
              <div className="space-y-4">
                {[
                  "Governance Framework", 
                  "Security & Compliance",
                  "User Training & Adoption",
                  "Solution Architecture",
                  "Performance Monitoring",
                  "Continuous Improvement"
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check text-suredyn-orange mr-3"></i>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInRight">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Start Your Power Platform Journey</h3>
                <p className="text-gray-600 mb-6">
                  Get started with a comprehensive assessment and roadmap for your organization's low-code transformation.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Platform Assessment</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Governance Workshop</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Training Plan</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">90-Day Roadmap</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="w-full bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg flex items-center justify-center">
                    Get Your Assessment
                    <i className="fas fa-clipboard-check ml-2"></i>
                  </a>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Accelerate Your Digital Transformation?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how Power Platform can revolutionize your business processes and empower your teams
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg inline-flex items-center justify-center">
                  Start Your Project
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </Link>
              <a 
                href="tel:+17325855563"
                className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 min-touch-target-lg inline-flex items-center justify-center"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Now: +1-732-585-5563
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PowerPlatform;
