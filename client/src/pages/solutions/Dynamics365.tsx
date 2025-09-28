import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageSlider from "@/components/common/ImageSlider";
import CTASection from "@/components/common/CTASection";
import image1 from "@assets/generated_images/Business_Team_Meeting_7d57e84b.png";
import image2 from "@assets/generated_images/ERP_Dashboard_View_48286860.png";
import image3 from "@assets/generated_images/Business_Transformation_Success_65ae8d61.png";
import image4 from "@assets/generated_images/Healthcare_Technology_Solutions_955a36a3.png";
import image5 from "@assets/generated_images/Business_Team_Meeting_7d57e84b.png";

const Dynamics365 = () => {
  useEffect(() => {
    document.title = "Microsoft Dynamics 365 Business Central ERP Implementation | SureDyn Business Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert Microsoft Dynamics 365 Business Central ERP implementation services. Complete financial management, supply chain, manufacturing, and project management solutions for growing businesses.');
    }

    // Add structured data for Software Service
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Microsoft Dynamics 365 Business Central",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning",
      "operatingSystem": "Windows, Web Browser, iOS, Android",
      "offers": {
        "@type": "Offer",
        "category": "Implementation Service",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD"
        }
      },
      "provider": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "telephone": "+1-732-585-5563",
        "url": "https://suredyn.com"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Small to Medium Businesses"
      }
    };

    // Remove existing structured data
    const existingStructuredData = document.querySelector('#bc-structured-data');
    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'bc-structured-data';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // SEO meta tags
    const addMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('keywords', 'Microsoft Dynamics 365 Business Central, Business Central ERP, ERP implementation, financial management software, supply chain management, manufacturing ERP, project management software, inventory management, business intelligence');
    addMetaTag('robots', 'index, follow');
  }, []);

  const features = [
    {
      category: "Financial Management",
      icon: "fas fa-calculator",
      items: ["General Ledger", "Accounts Payable/Receivable", "Bank Management", "Fixed Assets", "Cost Accounting", "Multi-Currency Support"]
    },
    {
      category: "Supply Chain Management", 
      icon: "fas fa-truck",
      items: ["Purchase Management", "Sales Management", "Inventory Management", "Warehouse Management", "Item Tracking", "Drop Shipments"]
    },
    {
      category: "Project Management",
      icon: "fas fa-project-diagram", 
      items: ["Project Planning", "Resource Allocation", "Time & Expense", "Project Accounting", "Budget Control", "Progress Tracking"]
    },
    {
      category: "Manufacturing",
      icon: "fas fa-industry",
      items: ["Production Planning", "Bill of Materials", "Capacity Planning", "Shop Floor Control", "Quality Management", "Cost Analysis"]
    },
    {
      category: "Service Management",
      icon: "fas fa-tools",
      items: ["Service Orders", "Resource Planning", "Contract Management", "Service Items", "Loaner Management", "Service Analytics"]
    },
    {
      category: "Business Intelligence",
      icon: "fas fa-chart-bar",
      items: ["Real-time Dashboards", "Financial Reports", "KPI Monitoring", "Power BI Integration", "Custom Reports", "Mobile Access"]
    }
  ];

  const benefits = [
    {
      title: "Streamlined Operations",
      description: "Integrate all business processes in one unified platform",
      icon: "fas fa-cogs",
      metrics: "40% reduction in process time"
    },
    {
      title: "Real-time Insights", 
      description: "Make data-driven decisions with live business intelligence",
      icon: "fas fa-tachometer-alt",
      metrics: "360° business visibility"
    },
    {
      title: "Scalable Growth",
      description: "Grow your business without changing systems",
      icon: "fas fa-chart-line",
      metrics: "Support for unlimited users"
    },
    {
      title: "Cloud-based Security",
      description: "Enterprise-grade security with automatic updates",
      icon: "fas fa-shield-alt", 
      metrics: "99.9% uptime guarantee"
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: "fas fa-industry", description: "Production planning and quality control" },
    { name: "Wholesale Distribution", icon: "fas fa-truck", description: "Inventory and logistics management" },
    { name: "Professional Services", icon: "fas fa-briefcase", description: "Project accounting and resource planning" },
    { name: "Retail", icon: "fas fa-store", description: "Multi-channel sales and customer management" }
  ];

  const implementationSteps = [
    { step: 1, title: "Discovery", description: "Analyze current processes and requirements", duration: "1 week" },
    { step: 2, title: "Design", description: "Configure system to match business needs", duration: "2 weeks" },
    { step: 3, title: "Deploy", description: "Data migration and system setup", duration: "1 week" },
    { step: 4, title: "Train", description: "User training and change management", duration: "1 week" },
    { step: 5, title: "Support", description: "Go-live support and optimization", duration: "Ongoing" }
  ];

  const sliderImages = [
    {
      src: image1,
      alt: "Microsoft Dynamics 365 Business Central Role Center Dashboard",
      title: "Role Center Dashboard",
      description: "Personalized workspace with real-time insights, KPIs, and quick access to daily tasks for enhanced productivity."
    },
    {
      src: image2, 
      alt: "Microsoft Dynamics 365 Business Central on Desktop",
      title: "Complete Business Solution",
      description: "Unified platform connecting finance, operations, sales, and service teams for seamless collaboration."
    },
    {
      src: image3,
      alt: "Dynamics 365 Business Central Team Collaboration",
      title: "Connected Business Teams",
      description: "Streamline processes across departments with integrated workflows and shared business intelligence."
    },
    {
      src: image4,
      alt: "Business Central Integrated Technology Stack",
      title: "Fully Integrated Stack",
      description: "Leverage Microsoft's trusted cloud platform with built-in security, compliance, and scalability."
    },
    {
      src: image5,
      alt: "Business Central Onboarding Framework",
      title: "Rapid Implementation Framework",
      description: "Get up and running quickly with our proven onboarding framework and expert guidance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb for SEO */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-suredyn-orange transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                    <Link href="/solutions" className="text-gray-500 hover:text-suredyn-orange transition-colors">
                      Solutions
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                    <span className="text-gray-700">Microsoft Dynamics 365 Business Central</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Microsoft Dynamics 365{" "}
                  <span className="text-suredyn-orange">Business Central ERP</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Complete cloud ERP solution that connects financial management, supply chain operations, manufacturing, 
                  and customer service in one unified Business Central platform for small to medium enterprises.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center min-touch-target-lg flex items-center justify-center">
                    Get Free Demo
                    <i className="fas fa-play ml-2"></i>
                  </a>
                </Link>
                <Link href="/services">
                  <a className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md text-center min-touch-target-lg flex items-center justify-center">
                    Implementation Services
                  </a>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInRight" delay={200}>
              <ImageSlider 
                images={sliderImages}
                autoPlay={true}
                autoPlayInterval={5000}
                className="w-full max-w-2xl mx-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Business Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your business efficiently in one integrated platform
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.category} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mr-4">
                      <i className={`${feature.icon} text-suredyn-orange text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <i className="fas fa-check text-suredyn-orange mr-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dynamics 365 Business Central?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with measurable results
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
                  <div className="text-suredyn-orange font-bold text-sm">{benefit.metrics}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored configurations for your industry's unique requirements
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 100}>
                <Link href="/industries">
                  <a className="block bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-suredyn-orange-pale rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className={`${industry.icon} text-suredyn-orange text-2xl`}></i>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                      <p className="text-gray-600 text-sm">{industry.description}</p>
                    </div>
                  </a>
                </Link>
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
              Proven methodology for successful Dynamics 365 Business Central deployment
            </p>
          </AnimatedSection>

          <div className="relative">
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

      {/* ROI Calculator */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Business Operations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Discover how Dynamics 365 Business Central can help streamline your operations and improve your business processes with our expert implementation.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Implementation</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="fas fa-check text-suredyn-orange mr-3"></i>
                      <span className="text-gray-700">Improved financial visibility and reporting</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-suredyn-orange mr-3"></i>
                      <span className="text-gray-700">Streamlined business processes</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-suredyn-orange mr-3"></i>
                      <span className="text-gray-700">Enhanced operational efficiency</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check text-suredyn-orange mr-3"></i>
                      <span className="text-gray-700">Better decision-making capabilities</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInRight">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Your Custom Business Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Our experts will analyze your current processes and recommend the best approach for implementing Dynamics 365 Business Central in your organization.
                </p>
                
                <Link href="/contact">
                  <a className="w-full bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg flex items-center justify-center">
                    Request Business Assessment
                    <i className="fas fa-search ml-2"></i>
                  </a>
                </Link>
                
                <div className="mt-6 text-center text-sm text-gray-600">
                  Free consultation • No obligations • Custom analysis
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Unlock Your Business Potential?"
        subtitle="Experience the complete power of Microsoft Dynamics 365 Business Central with our expert implementation and ongoing support services"
        primaryButtonText="Start Your D365 Journey"
      />
    </div>
  );
};

export default Dynamics365;
