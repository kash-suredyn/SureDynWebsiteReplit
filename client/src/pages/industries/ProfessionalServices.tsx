import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function ProfessionalServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Services
              <span className="text-suredyn-orange block">ERP Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Project-focused Business Central solutions for consulting firms with time tracking, resource allocation, project profitability, and client management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Professional Services Solution
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Professional Services Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Professional Services Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize your professional services operations with integrated Business Central functionality designed for service-based businesses.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Project Accounting",
                description: "Comprehensive project-based accounting with budget tracking and profitability analysis.",
                icon: "fas fa-project-diagram",
                features: ["Project Budgets", "Cost Tracking", "Revenue Recognition", "Profitability Analysis"]
              },
              {
                title: "Time & Expense",
                description: "Integrated time tracking and expense management with mobile capabilities.",
                icon: "fas fa-clock",
                features: ["Time Tracking", "Expense Management", "Mobile Entry", "Approval Workflows"]
              },
              {
                title: "Resource Planning",
                description: "Resource allocation and capacity planning to optimize utilization and delivery.",
                icon: "fas fa-users-cog",
                features: ["Resource Allocation", "Capacity Planning", "Skill Matching", "Availability Tracking"]
              },
              {
                title: "Client Management",
                description: "Comprehensive client relationship management with engagement tracking.",
                icon: "fas fa-handshake",
                features: ["Client Profiles", "Engagement History", "Communication Tracking", "Relationship Management"]
              },
              {
                title: "Billing Automation",
                description: "Automated billing processes with flexible pricing models and invoice generation.",
                icon: "fas fa-file-invoice-dollar",
                features: ["Automated Invoicing", "Flexible Pricing", "Milestone Billing", "Retainer Management"]
              },
              {
                title: "Profitability Analysis",
                description: "Real-time project profitability analysis with detailed cost and revenue reporting.",
                icon: "fas fa-chart-pie",
                features: ["Real-time Analytics", "Margin Analysis", "Cost Allocation", "Performance Metrics"]
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border h-full">
                  <div className="text-center mb-6">
                    <div className="bg-suredyn-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${feature.icon} text-2xl text-suredyn-orange`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SureDyn for Your Professional Services Firm?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our professional services expertise and proven Business Central implementations help you maximize project profitability and client satisfaction.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Industry Expertise",
                    description: "Deep understanding of professional services business models and challenges.",
                    icon: "fas fa-graduation-cap"
                  },
                  {
                    title: "Project Focus",
                    description: "Project-centric solutions designed for service delivery excellence.",
                    icon: "fas fa-bullseye"
                  },
                  {
                    title: "Scalable Platform",
                    description: "Solutions that grow from small consultancies to large service organizations.",
                    icon: "fas fa-expand-arrows-alt"
                  },
                  {
                    title: "Real-time Insights",
                    description: "Data-driven insights to optimize resource utilization and profitability.",
                    icon: "fas fa-chart-line"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-suredyn-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${benefit.icon} text-suredyn-orange`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional services team collaborating on client projects" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-suredyn-orange-pale">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Elevate Your Professional Services
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central needs and discover how we can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Started Today
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-transparent hover:bg-suredyn-orange hover:text-white text-suredyn-orange px-8 py-3 rounded-lg font-semibold border-2 border-suredyn-orange transition-colors duration-200">
                  Learn More About SureDyn
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}