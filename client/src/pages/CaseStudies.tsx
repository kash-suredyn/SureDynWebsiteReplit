import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "TechFlow Manufacturing",
      industry: "Manufacturing",
      challenge: "Struggling with disconnected systems, manual processes, and lack of real-time visibility into production.",
      solution: "Implemented Dynamics 365 Business Central with manufacturing modules and Power BI integration.",
      results: [
        "50% reduction in order processing time",
        "30% improvement in inventory accuracy",
        "25% increase in production efficiency",
        "Real-time visibility into all operations"
      ],
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      employees: "250+"
    },
    {
      company: "Global Distribution Partners",
      industry: "Distribution & Wholesale",
      challenge: "Multiple legacy systems causing inefficiencies, poor inventory management, and customer service issues.",
      solution: "Full Business Central implementation with advanced warehouse management and customer portal.",
      results: [
        "75% faster order fulfillment",
        "40% reduction in inventory carrying costs",
        "95% customer satisfaction improvement",
        "Complete supply chain visibility"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      employees: "150+"
    },
    {
      company: "Premier Healthcare Solutions",
      industry: "Healthcare",
      challenge: "Complex regulatory requirements, fragmented patient billing, and compliance tracking issues.",
      solution: "HIPAA-compliant Business Central with custom healthcare modules and regulatory reporting.",
      results: [
        "100% regulatory compliance achieved",
        "60% faster patient billing process",
        "45% reduction in administrative costs",
        "Automated compliance reporting"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      employees: "300+"
    },
    {
      company: "Elite Professional Services",
      industry: "Professional Services",
      challenge: "Poor project profitability visibility, manual time tracking, and inefficient resource allocation.",
      solution: "Business Central with Project Operations integration and custom reporting dashboards.",
      results: [
        "85% improvement in project visibility",
        "35% increase in billable hours captured",
        "50% faster invoice processing",
        "Real-time project profitability tracking"
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      employees: "120+"
    },
    {
      company: "Metro Retail Group",
      industry: "Retail",
      challenge: "Disconnected POS systems, poor inventory visibility, and limited customer insights.",
      solution: "Business Central with omnichannel retail capabilities and customer analytics integration.",
      results: [
        "90% improvement in inventory accuracy",
        "55% increase in customer retention",
        "40% reduction in stockouts",
        "Unified customer experience across channels"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      employees: "180+"
    },
    {
      company: "Strategic Financial Partners",
      industry: "Financial Services",
      challenge: "Complex multi-entity consolidation, regulatory reporting challenges, and manual processes.",
      solution: "Dynamics 365 Finance with advanced financial reporting and automated compliance features.",
      results: [
        "70% faster financial close process",
        "100% automated regulatory reporting",
        "80% reduction in manual journal entries",
        "Real-time financial consolidation"
      ],
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      employees: "200+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Success
              <span className="text-suredyn-orange block">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Real businesses, real results. Discover how organizations across industries have transformed their operations with Microsoft Dynamics 365.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-suredyn-orange mb-2">Many</div>
                <div className="text-gray-600">Successful Implementations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-suredyn-orange mb-2">Expert</div>
                <div className="text-gray-600">Implementation Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-suredyn-orange mb-2">Trusted</div>
                <div className="text-gray-600">Business Partner</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="mb-4">
                      <span className="bg-suredyn-orange/10 text-suredyn-orange px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {study.company}
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-4 mb-6 text-sm">
                      <div>
                        <div className="text-gray-500">Company Size</div>
                        <div className="font-semibold">{study.employees}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <i className="fas fa-check-circle text-green-500 mr-3"></i>
                            <span className="text-gray-600 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                        Start Your Success Story
                      </button>
                    </Link>
                  </div>
                </div>
                
                {index < caseStudies.length - 1 && (
                  <hr className="border-gray-200 mt-16" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find case studies from your industry to see how others have achieved success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Manufacturing", count: "85+" },
              { name: "Distribution", count: "92+" },
              { name: "Healthcare", count: "45+" },
              { name: "Professional Services", count: "78+" },
              { name: "Retail", count: "56+" },
              { name: "Financial Services", count: "34+" }
            ].map((industry, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <div className="text-2xl font-bold text-suredyn-orange mb-2">{industry.count}</div>
                  <div className="text-sm font-medium text-gray-700">{industry.name}</div>
                  <div className="text-xs text-gray-500 mt-1">Projects</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-suredyn-orange-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of organizations that have transformed their operations with our expert implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Your Project
                </button>
              </Link>
              <Link href="/services/project-rescue">
                <button className="bg-transparent hover:bg-suredyn-orange hover:text-white text-suredyn-orange px-8 py-3 rounded-lg font-semibold border-2 border-suredyn-orange transition-colors duration-200">
                  Need Project Rescue?
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}