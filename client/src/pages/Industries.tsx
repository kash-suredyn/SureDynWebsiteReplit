import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import { INDUSTRIES } from "@/lib/constants";

const Industries = () => {
  useEffect(() => {
    document.title = "Industries We Serve - SureDyn Business Solutions | Microsoft Dynamics 365 for Manufacturing, Distribution, Retail, Professional Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Specialized Microsoft Dynamics 365 solutions for Manufacturing, Wholesale Distribution, Professional Services, and Retail industries. Industry-specific expertise and implementations.');
    }
  }, []);

  const industryStats = [
    { industry: "Manufacturing", implementations: "150+", avgROI: "285%" },
    { industry: "Distribution", implementations: "120+", avgROI: "320%" },
    { industry: "Professional Services", implementations: "100+", avgROI: "240%" },
    { industry: "Retail", implementations: "80+", avgROI: "210%" }
  ];

  const caseStudies = [
    {
      industry: "Manufacturing",
      company: "TechManufacturing Inc.",
      challenge: "Complex production scheduling and inventory management across multiple locations",
      solution: "Implemented Dynamics 365 Business Central with advanced manufacturing modules",
      results: ["40% reduction in production lead times", "30% improvement in inventory turnover", "Real-time production visibility"]
    },
    {
      industry: "Distribution", 
      company: "National Distribution Co.",
      challenge: "Manual warehouse processes and lack of real-time inventory visibility",
      solution: "Deployed warehouse management system with barcode scanning and automated workflows",
      results: ["60% faster order fulfillment", "95% inventory accuracy", "50% reduction in picking errors"]
    },
    {
      industry: "Professional Services",
      company: "Consulting Partners LLC",
      challenge: "Project profitability tracking and resource allocation inefficiencies", 
      solution: "Configured project accounting and resource management modules",
      results: ["25% improvement in project margins", "Real-time project tracking", "Automated time and expense reporting"]
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
                Industry-Focused{" "}
                <span className="text-suredyn-orange">Microsoft Dynamics 365</span>{" "}
                Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Deep industry expertise and specialized implementations for Manufacturing, Distribution, 
                Professional Services, and Retail enterprises. Tailored solutions that understand your unique challenges.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across key industry verticals for small and medium enterprises
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIES.map((industry, index) => (
              <AnimatedSection key={industry.id} delay={index * 100}>
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-suredyn-orange-pale to-suredyn-orange-light">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <i className={`${industry.icon} text-suredyn-orange text-4xl`}></i>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                      <div className="space-y-2">
                        {industry.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <i className="fas fa-check text-suredyn-orange mr-2"></i>
                            {feature}
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

      {/* Industry Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Industry Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results across all industry verticals with measurable ROI and operational improvements
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <AnimatedSection key={stat.industry} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{stat.industry}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-3xl font-bold text-suredyn-orange">{stat.implementations}</div>
                      <div className="text-sm text-gray-600">Implementations</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{stat.avgROI}</div>
                      <div className="text-sm text-gray-600">Average ROI</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {INDUSTRIES.map((industry, index) => (
        <section key={industry.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className={index % 2 === 0 ? "" : "lg:order-2"}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center">
                      <i className={`${industry.icon} text-suredyn-orange text-2xl`}></i>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">{industry.name}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600">{industry.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <i className="fas fa-check text-suredyn-orange mr-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Common Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <i className="fas fa-exclamation-triangle text-amber-500 mr-2"></i>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection 
                animation={index % 2 === 0 ? "slideInRight" : "slideInLeft"} 
                className={index % 2 === 0 ? "" : "lg:order-1"}
              >
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      industry.id === 'manufacturing' ? '1581091226033-b5875c7c6794' :
                      industry.id === 'distribution' ? '1586528527027-2c3fddc9a6e5' :
                      industry.id === 'professional-services' ? '1600880292203-757bb62b4baf' :
                      '1556742049-d8090beb3eb5'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`}
                    alt={`${industry.name} industry solution`}
                    className="rounded-2xl shadow-xl w-full h-auto"
                    loading="lazy"
                  />
                  
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-2 hidden lg:block">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-suredyn-orange">
                        {industryStats.find(s => s.industry === industry.name)?.avgROI}
                      </div>
                      <div className="text-sm text-gray-600">Average ROI</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations that delivered measurable results for our clients
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.company} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">{study.company}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">Solution</h4>
                      <p className="text-gray-600 mb-6">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
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

      {/* Industry-Specific Benefits */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Industry Expertise Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep understanding of industry-specific challenges ensures faster implementation and better outcomes
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-clock", title: "Faster Implementation", desc: "Pre-configured industry templates reduce setup time by 50%" },
              { icon: "fas fa-chart-line", title: "Higher ROI", desc: "Industry-specific optimizations deliver 40% better ROI" },
              { icon: "fas fa-users", title: "Expert Team", desc: "Consultants with 10+ years in your specific industry" },
              { icon: "fas fa-shield-alt", title: "Proven Process", desc: "Battle-tested methodologies refined across hundreds of projects" }
            ].map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-suredyn-orange-pale rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-suredyn-orange text-2xl`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Industry Operations?"
        subtitle="Let's discuss how our industry-specific Microsoft Dynamics 365 solutions can address your unique challenges"
        primaryButtonText="Schedule Industry Consultation"
        backgroundColor="orange-pale"
        showPhoneButton={false}
      />
    </div>
  );
};

export default Industries;
