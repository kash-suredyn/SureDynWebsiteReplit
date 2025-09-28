import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

const PowerBI = () => {
  useEffect(() => {
    document.title = "Microsoft Power BI Implementation Services | Business Intelligence & Data Analytics | SureDyn";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional Microsoft Power BI implementation and consulting services. Transform your business data into actionable insights with custom dashboards, advanced analytics, and seamless Dynamics 365 integration.');
    }

    // SEO meta tags for Power BI
    const addMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('keywords', 'Microsoft Power BI, Power BI implementation, business intelligence, data analytics, dashboard development, data visualization, reporting solutions, self-service analytics, Power BI consulting, Dynamics 365 integration');
    addMetaTag('robots', 'index, follow');
  }, []);

  const features = [
    {
      title: "Interactive Dashboards",
      icon: "fas fa-tachometer-alt",
      description: "Create stunning, interactive dashboards that tell your data story",
      capabilities: ["Drag-and-drop design", "Real-time updates", "Custom visualizations", "Mobile optimization"]
    },
    {
      title: "Advanced Analytics",
      icon: "fas fa-brain",
      description: "Leverage AI and machine learning for predictive insights",
      capabilities: ["Quick Insights", "Q&A natural language", "Key influencers", "Forecasting"]
    },
    {
      title: "Data Connectivity",
      icon: "fas fa-plug",
      description: "Connect to hundreds of data sources with ease", 
      capabilities: ["150+ data connectors", "Real-time streaming", "Cloud and on-premises", "API integration"]
    },
    {
      title: "Collaboration & Sharing",
      icon: "fas fa-share-alt",
      description: "Share insights across your organization securely",
      capabilities: ["Role-based security", "Mobile apps", "Embedded analytics", "Subscription alerts"]
    }
  ];

  const dataSources = [
    { name: "Microsoft Excel", icon: "fas fa-file-excel", category: "Office" },
    { name: "SQL Server", icon: "fas fa-database", category: "Database" },
    { name: "Azure SQL", icon: "fas fa-cloud", category: "Cloud" },
    { name: "SharePoint", icon: "fas fa-share-alt", category: "Collaboration" },
    { name: "Dynamics 365", icon: "fas fa-cogs", category: "Business Apps" },
    { name: "Salesforce", icon: "fas fa-cloud", category: "CRM" },
    { name: "Google Analytics", icon: "fas fa-chart-line", category: "Web Analytics" },
    { name: "Oracle", icon: "fas fa-database", category: "Database" }
  ];

  const useCases = [
    {
      title: "Executive Dashboards",
      description: "High-level KPIs and metrics for leadership decision-making",
      industry: "All Industries",
      metrics: ["Key Performance Indicators", "Business Metrics", "Customer Analytics", "Market Analysis"],
      image: "photo-1551288049-bebda4e38f71"
    },
    {
      title: "Sales Performance",
      description: "Track sales metrics, pipeline, and team performance",
      industry: "Sales & Marketing", 
      metrics: ["Sales Revenue", "Pipeline Value", "Conversion Rates", "Sales Activities"],
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      title: "Financial Reporting",
      description: "Comprehensive financial analysis and reporting",
      industry: "Finance",
      metrics: ["P&L Statements", "Cash Flow", "Budget vs Actual", "Financial Ratios"],
      image: "photo-1554224155-6726b3ff858f"
    },
    {
      title: "Operations Analytics",
      description: "Monitor operational efficiency and performance",
      industry: "Manufacturing",
      metrics: ["Production Output", "Quality Metrics", "Equipment Efficiency", "Supply Chain"],
      image: "photo-1581091226033-b5875c7c6794"
    }
  ];

  const implementationProcess = [
    { step: 1, title: "Data Assessment", description: "Evaluate current data sources and quality", duration: "1 week" },
    { step: 2, title: "Architecture Design", description: "Design data model and security framework", duration: "1 week" },
    { step: 3, title: "Dashboard Development", description: "Build custom dashboards and reports", duration: "2-3 weeks" },
    { step: 4, title: "User Training", description: "Train users on Power BI capabilities", duration: "1 week" },
    { step: 5, title: "Deployment & Support", description: "Deploy to production with ongoing support", duration: "Ongoing" }
  ];

  const powerBITiers = [
    {
      name: "Power BI Free",
      price: "$0",
      period: "per user/month",
      features: ["Personal use only", "1 GB data storage", "Data refresh 8/day", "Basic sharing"],
      recommended: false
    },
    {
      name: "Power BI Pro", 
      price: "$10",
      period: "per user/month",
      features: ["Collaboration & sharing", "10 GB data storage", "Data refresh 8/day", "On-premises gateways"],
      recommended: true
    },
    {
      name: "Power BI Premium",
      price: "$20",
      period: "per user/month", 
      features: ["Advanced AI features", "100 GB data storage", "Data refresh 48/day", "Large dataset support"],
      recommended: false
    }
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
                  <span className="text-suredyn-orange">Power BI</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your data into actionable insights with the industry-leading 
                  business intelligence and data visualization platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center min-touch-target-lg flex items-center justify-center">
                    Get Free Dashboard Demo
                    <i className="fas fa-chart-bar ml-2"></i>
                  </a>
                </Link>
                <Link href="/services">
                  <a className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md text-center min-touch-target-lg flex items-center justify-center">
                    BI Implementation Services
                  </a>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInRight" delay={200}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Power BI dashboard with business analytics and visualizations" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                loading="eager"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Business Intelligence Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to turn data into insights and insights into action
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${feature.icon} text-suredyn-orange text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {feature.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-suredyn-orange mr-2"></i>
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect to Any Data Source</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Power BI connects to 150+ data sources, from cloud services to on-premises databases
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {dataSources.map((source, index) => (
              <AnimatedSection key={source.name} delay={index * 50}>
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <i className={`${source.icon} text-suredyn-orange text-3xl mb-3`}></i>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{source.name}</h4>
                  <p className="text-xs text-gray-500">{source.category}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Don't see your data source? We support 150+ connectors and can build custom solutions.
            </p>
            <Link href="/contact">
              <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center">
                Discuss Your Data Needs
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Power BI in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how different departments leverage Power BI for data-driven decision making
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={useCase.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={`https://images.unsplash.com/${useCase.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400`}
                    alt={useCase.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                      {useCase.industry}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-chart-line text-suredyn-orange mr-2"></i>
                          {metric}
                        </div>
                      ))}
                    </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Power BI Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to deliver actionable insights in 4-6 weeks
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-suredyn-orange hidden lg:block"></div>
            
            <div className="space-y-12">
              {implementationProcess.map((step, index) => (
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

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Power BI Licensing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right Power BI license for your organization's needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {powerBITiers.map((tier, index) => (
              <AnimatedSection key={tier.name} delay={index * 100}>
                <div className={`rounded-xl p-8 ${tier.recommended ? 'bg-suredyn-orange-pale border-2 border-suredyn-orange' : 'bg-gray-50'} hover:shadow-lg transition-shadow duration-300`}>
                  {tier.recommended && (
                    <div className="text-center mb-4">
                      <span className="bg-suredyn-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                        RECOMMENDED
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-suredyn-orange mb-1">{tier.price}</div>
                    <div className="text-gray-600">{tier.period}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <i className="fas fa-check text-suredyn-orange mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <a className={`w-full px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center block ${
                      tier.recommended 
                        ? 'bg-suredyn-orange hover:bg-suredyn-orange-dark text-white' 
                        : 'bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange'
                    }`}>
                      Get Started
                    </a>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Power BI Training & Support</h2>
              <p className="text-lg text-gray-600 mb-8">
                Maximize your Power BI investment with comprehensive training and ongoing support services.
              </p>
              
              <div className="space-y-4">
                {[
                  "Power BI Desktop Training",
                  "Dashboard Design Best Practices", 
                  "DAX Formula Training",
                  "Data Modeling Workshops",
                  "Admin & Security Training",
                  "Ongoing Support & Optimization"
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Power BI Success Package</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Implementation Services</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">User Training (8 hours)</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">3 Custom Dashboards</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">30-Day Support</span>
                    <span className="text-green-600 font-medium">✓ Included</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <a className="w-full bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg flex items-center justify-center">
                    Get Success Package
                    <i className="fas fa-rocket ml-2"></i>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Turn Your Data into Your Competitive Advantage</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Start making data-driven decisions today with Power BI implementation and training from SureDyn
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg inline-flex items-center justify-center">
                  Get Started with Power BI
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

export default PowerBI;
