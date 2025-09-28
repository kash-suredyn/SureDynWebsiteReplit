import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

const Azure = () => {
  useEffect(() => {
    document.title = "Microsoft Azure - SureDyn Business Solutions | Cloud Computing Platform";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Microsoft Azure cloud computing platform for hosting, scaling, and securing business applications. Infrastructure, platform, and software services.');
    }
  }, []);

  const azureServices = [
    {
      category: "Compute Services",
      icon: "fas fa-server",
      description: "Scalable computing power for your applications",
      services: ["Virtual Machines", "App Service", "Azure Functions", "Container Instances", "Kubernetes Service", "Batch Computing"]
    },
    {
      category: "Storage Solutions",
      icon: "fas fa-hdd",
      description: "Secure, scalable storage for all your data needs",
      services: ["Blob Storage", "File Storage", "Queue Storage", "Table Storage", "Archive Storage", "Data Lake Storage"]
    },
    {
      category: "Networking",
      icon: "fas fa-network-wired",
      description: "Secure connectivity and network management",
      services: ["Virtual Network", "Load Balancer", "VPN Gateway", "Content Delivery Network", "Traffic Manager", "ExpressRoute"]
    },
    {
      category: "Database Services",
      icon: "fas fa-database",
      description: "Managed database services for any workload",
      services: ["SQL Database", "Cosmos DB", "PostgreSQL", "MySQL", "Redis Cache", "Database Migration"]
    },
    {
      category: "AI & Machine Learning",
      icon: "fas fa-brain",
      description: "Intelligent services and machine learning capabilities",
      services: ["Cognitive Services", "Machine Learning", "Bot Service", "Speech Services", "Computer Vision", "Language Understanding"]
    },
    {
      category: "Security & Identity",
      icon: "fas fa-shield-alt",
      description: "Enterprise-grade security and identity management",
      services: ["Active Directory", "Key Vault", "Security Center", "Sentinel", "Multi-factor Authentication", "Identity Protection"]
    }
  ];

  const cloudBenefits = [
    {
      title: "Scalability",
      description: "Scale resources up or down based on demand",
      icon: "fas fa-expand-arrows-alt",
      metric: "99.95% availability SLA"
    },
    {
      title: "Security",
      description: "Enterprise-grade security with continuous monitoring",
      icon: "fas fa-lock",
      metric: "$1B+ invested in security"
    },
    {
      title: "Cost Optimization",
      description: "Pay only for what you use with flexible pricing",
      icon: "fas fa-dollar-sign",
      metric: "Up to 40% cost savings"
    },
    {
      title: "Global Reach",
      description: "60+ regions worldwide for low-latency access",
      icon: "fas fa-globe",
      metric: "60+ global regions"
    }
  ];

  const migrationScenarios = [
    {
      scenario: "Lift and Shift",
      description: "Move existing applications to Azure with minimal changes",
      timeframe: "2-4 weeks",
      complexity: "Low",
      benefits: ["Quick migration", "Immediate cloud benefits", "Reduced infrastructure costs"]
    },
    {
      scenario: "Re-platforming",
      description: "Optimize applications for cloud platforms",
      timeframe: "1-3 months", 
      complexity: "Medium",
      benefits: ["Better performance", "Improved scalability", "Enhanced security"]
    },
    {
      scenario: "Re-architecting",
      description: "Rebuild applications using cloud-native services",
      timeframe: "3-6 months",
      complexity: "High", 
      benefits: ["Maximum cloud benefits", "Microservices architecture", "DevOps integration"]
    }
  ];

  const securityFeatures = [
    { name: "Azure Security Center", description: "Unified security management", icon: "fas fa-shield-alt" },
    { name: "Azure Sentinel", description: "Cloud-native SIEM solution", icon: "fas fa-eye" },
    { name: "Azure Key Vault", description: "Safeguard encryption keys and secrets", icon: "fas fa-key" },
    { name: "Azure Active Directory", description: "Identity and access management", icon: "fas fa-users" },
    { name: "Network Security Groups", description: "Network-level security rules", icon: "fas fa-network-wired" },
    { name: "DDoS Protection", description: "Protection against DDoS attacks", icon: "fas fa-shield-virus" }
  ];

  const implementationPhases = [
    { phase: 1, title: "Assessment & Planning", description: "Evaluate current infrastructure and create migration strategy", duration: "1-2 weeks" },
    { phase: 2, title: "Architecture Design", description: "Design Azure architecture and security framework", duration: "1-2 weeks" },
    { phase: 3, title: "Pilot Migration", description: "Migrate non-critical workloads first", duration: "2-4 weeks" },
    { phase: 4, title: "Production Migration", description: "Migrate critical applications and data", duration: "4-8 weeks" },
    { phase: 5, title: "Optimization", description: "Optimize performance and costs", duration: "Ongoing" }
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
                  <span className="text-suredyn-orange">Azure</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Accelerate your digital transformation with the world's most trusted cloud platform. 
                  Scale, secure, and innovate with 200+ Azure services.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center min-touch-target-lg flex items-center justify-center">
                    Start Your Migration
                    <i className="fas fa-cloud-upload-alt ml-2"></i>
                  </a>
                </Link>
                <Link href="/services">
                  <a className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md text-center min-touch-target-lg flex items-center justify-center">
                    Migration Services
                  </a>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInRight" delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Microsoft Azure cloud infrastructure and services" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                loading="eager"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Azure Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Azure Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From infrastructure to AI, Azure provides everything you need to build, deploy, and manage applications
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {azureServices.map((service, index) => (
              <AnimatedSection key={service.category} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-suredyn-orange text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.category}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-suredyn-orange mr-2"></i>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Azure?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with the trusted cloud platform used by 95% of Fortune 500 companies
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudBenefits.map((benefit, index) => (
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

      {/* Migration Scenarios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Azure Migration Strategies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right migration approach based on your timeline, complexity, and business goals
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {migrationScenarios.map((scenario, index) => (
              <AnimatedSection key={scenario.scenario} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{scenario.scenario}</h3>
                  <p className="text-gray-600 mb-6">{scenario.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Timeframe:</span>
                      <span className="font-medium text-suredyn-orange">{scenario.timeframe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Complexity:</span>
                      <span className={`font-medium ${
                        scenario.complexity === 'Low' ? 'text-green-600' :
                        scenario.complexity === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>{scenario.complexity}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {scenario.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-suredyn-orange mr-2"></i>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your data and applications with Azure's comprehensive security services
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <AnimatedSection key={feature.name} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${feature.icon} text-suredyn-orange text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Azure Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology for successful Azure migration and implementation
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-suredyn-orange hidden lg:block"></div>
            
            <div className="space-y-12">
              {implementationPhases.map((phase, index) => (
                <AnimatedSection key={phase.phase} delay={index * 100}>
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10">
                      {phase.phase}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-8 shadow-lg">
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

      {/* Cost Optimization */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Azure Cost Optimization</h2>
              <p className="text-lg text-gray-600 mb-8">
                Maximize your Azure investment with our cost optimization strategies and monitoring services.
              </p>
              
              <div className="space-y-4">
                {[
                  "Azure Cost Management & Billing",
                  "Resource Right-sizing", 
                  "Reserved Instance Planning",
                  "Auto-scaling Configuration",
                  "Spot Instance Optimization",
                  "Continuous Cost Monitoring"
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Azure Assessment Package</h3>
                <p className="text-gray-600 mb-6">
                  Get a comprehensive assessment of your current infrastructure and a detailed Azure migration plan.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Infrastructure Assessment</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Migration Strategy</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Cost Analysis</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Security Review</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="w-full bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg flex items-center justify-center">
                    Get Free Assessment
                    <i className="fas fa-clipboard-list ml-2"></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Start your Azure journey today with expert guidance from SureDyn's certified Azure professionals
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg inline-flex items-center justify-center">
                  Start Your Azure Migration
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

export default Azure;
