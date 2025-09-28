import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

const DynamicsNAVMigration = () => {
  useEffect(() => {
    document.title = "Dynamics NAV to Business Central Migration - SureDyn Business Solutions | Seamless ERP Upgrade";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Migrate from Microsoft Dynamics NAV to Business Central with zero data loss and minimal downtime. Expert NAV migration services with proven methodology and 100% success rate.');
    }
  }, []);

  const migrationBenefits = [
    {
      title: "Cloud-First Architecture",
      description: "Move to modern cloud infrastructure with automatic updates, scalability, and reduced IT overhead.",
      icon: "fas fa-cloud"
    },
    {
      title: "Enhanced User Experience",
      description: "Modern, intuitive interface with role-based dashboards and mobile accessibility.",
      icon: "fas fa-user-friends"
    },
    {
      title: "Advanced Analytics",
      description: "Built-in Power BI integration for real-time reporting and business intelligence.",
      icon: "fas fa-chart-bar"
    },
    {
      title: "API Integration",
      description: "REST APIs and web services for seamless integration with third-party applications.",
      icon: "fas fa-plug"
    },
    {
      title: "Compliance & Security",
      description: "Enhanced security features and automatic compliance updates for regulatory requirements.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Cost Optimization",
      description: "Optimize operational efficiency with subscription-based licensing and cloud hosting.",
      icon: "fas fa-dollar-sign"
    }
  ];

  const migrationProcess = [
    {
      phase: "1",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of current NAV system, customizations, and migration requirements",
      deliverables: ["Current State Analysis", "Migration Strategy", "Project Plan", "Risk Assessment"]
    },
    {
      phase: "2",
      title: "Environment Setup",
      description: "Configure Business Central environment and prepare migration tools and infrastructure",
      deliverables: ["BC Environment Setup", "Data Migration Tools", "Testing Environment", "Security Configuration"]
    },
    {
      phase: "3",
      title: "Data Migration",
      description: "Execute data migration with validation, testing, and quality assurance procedures",
      deliverables: ["Data Migration", "Quality Validation", "Performance Testing", "User Acceptance Testing"]
    },
    {
      phase: "4",
      title: "Go-Live & Support",
      description: "Production cutover, user training, and post-migration support for smooth transition",
      deliverables: ["Production Cutover", "User Training", "Documentation", "Ongoing Support"]
    }
  ];

  const challengesSolutions = [
    {
      challenge: "Custom Code & Modifications",
      solution: "Convert NAV customizations to Business Central extensions using modern development frameworks",
      impact: "Maintain functionality while improving maintainability"
    },
    {
      challenge: "Data Quality & Integrity",
      solution: "Comprehensive data cleansing and validation processes with automated quality checks",
      impact: "Ensure 100% data accuracy and completeness"
    },
    {
      challenge: "User Training & Adoption",
      solution: "Role-based training programs and change management support for smooth user transition",
      impact: "Minimize learning curve and maximize user adoption"
    },
    {
      challenge: "Integration Complexity",
      solution: "Modern API-based integrations replacing legacy connection methods",
      impact: "Improved reliability and easier maintenance"
    }
  ];

  const successMetrics = [
    {
      metric: "100%",
      label: "Migration Success Rate",
      icon: "fas fa-check-circle"
    },
    {
      metric: "Zero",
      label: "Data Loss Incidents",
      icon: "fas fa-database"
    },
    {
      metric: "95%",
      label: "User Satisfaction",
      icon: "fas fa-smile"
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
                Dynamics NAV to{" "}
                <span className="text-suredyn-orange">Business Central</span>
                <br />Migration
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Seamlessly upgrade from Microsoft Dynamics NAV to Business Central with zero data loss, 
                minimal downtime, and enhanced functionality. Transform your legacy ERP into a modern, cloud-first solution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Migration Assessment
                  </button>
                </Link>
                <Link href="/case-studies">
                  <button className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md">
                    View Migration Success Stories
                  </button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Migration Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Upgrade from NAV to Business Central?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Business Central offers significant advantages over NAV with modern architecture, cloud capabilities, and enhanced functionality
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationBenefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mb-6">
                    <i className={`${benefit.icon} text-suredyn-orange text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Migration Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful migration with minimal business disruption and maximum value realization
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {migrationProcess.map((phase, index) => (
              <AnimatedSection key={phase.phase} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="flex items-start space-x-6 flex-1">
                      <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {phase.phase}
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-2xl font-semibold text-gray-900">{phase.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{phase.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {phase.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center">
                              <i className="fas fa-check text-suredyn-orange mr-2"></i>
                              <span className="text-gray-600 text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Migration Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common NAV migration challenges and our proven solutions for successful project delivery
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {challengesSolutions.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <i className="fas fa-exclamation-triangle text-amber-500 mr-3"></i>
                        Challenge
                      </h3>
                      <p className="text-gray-600">{item.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <i className="fas fa-lightbulb text-suredyn-orange mr-3"></i>
                        Our Solution
                      </h3>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <i className="fas fa-chart-line text-green-500 mr-3"></i>
                        Business Impact
                      </h3>
                      <p className="text-gray-600">{item.impact}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Migration Success Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology delivers consistent results across all NAV to Business Central migrations
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${metric.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">{metric.metric}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              NAV vs Business Central Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the key differences and advantages of upgrading to Business Central
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-suredyn-orange text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold">Dynamics NAV</th>
                      <th className="px-6 py-4 text-center font-semibold">Business Central</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        feature: "Deployment Options",
                        nav: "On-premise only",
                        bc: "Cloud, hybrid, on-premise"
                      },
                      {
                        feature: "User Interface",
                        nav: "Classic Windows client",
                        bc: "Modern web interface"
                      },
                      {
                        feature: "Mobile Access",
                        nav: "Limited mobile support",
                        bc: "Full mobile app functionality"
                      },
                      {
                        feature: "Integration",
                        nav: "Web services",
                        bc: "REST APIs, OData, Power Platform"
                      },
                      {
                        feature: "Analytics",
                        nav: "Basic reporting",
                        bc: "Built-in Power BI integration"
                      },
                      {
                        feature: "Updates",
                        nav: "Manual updates required",
                        bc: "Automatic cloud updates"
                      },
                      {
                        feature: "Customizations",
                        nav: "Code modifications",
                        bc: "Modern extensions"
                      },
                      {
                        feature: "Support",
                        nav: "Mainstream support ended",
                        bc: "Full Microsoft support"
                      }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center text-gray-600">{row.nav}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-green-600 font-medium">{row.bc}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Migration Checklist */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pre-Migration Checklist
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Essential steps to prepare for a successful NAV to Business Central migration
              </p>
              
              <div className="space-y-4">
                {[
                  "Document current NAV customizations and modifications",
                  "Inventory third-party integrations and add-ons",
                  "Assess data quality and clean up legacy records",
                  "Review user roles and security configurations",
                  "Plan for user training and change management",
                  "Schedule migration during low-activity periods",
                  "Prepare backup and rollback procedures",
                  "Define success criteria and testing procedures"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-suredyn-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Migration Timeline</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Planning & Assessment</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">1-2 weeks</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Environment Setup</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">1 week</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Data Migration & Testing</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">2-3 weeks</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Go-Live & Support</span>
                    <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">1 week</span>
                  </div>
                  
                  <div className="border-t pt-4 mt-6">
                    <div className="flex items-center justify-between font-semibold">
                      <span className="text-gray-900">Total Project Duration</span>
                      <span className="text-suredyn-orange">4-6 weeks</span>
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
        title="Ready to Migrate from NAV to Business Central?"
        subtitle="Transform your legacy ERP into a modern, cloud-first solution with our proven migration methodology and expert guidance"
        primaryButtonText="Start Your NAV Migration"
      />
    </div>
  );
};

export default DynamicsNAVMigration;