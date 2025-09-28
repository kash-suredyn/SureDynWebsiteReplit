import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Dynamics365ProjectOperations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Microsoft Dynamics 365
              <span className="text-suredyn-orange block">Project Operations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete project-based business solution connecting sales, resourcing, project management, and finance for improved profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Project Solution
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Project Lifecycle Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage projects from opportunity to delivery with integrated sales, project management, and financial operations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Project Sales",
                description: "Win more deals with integrated CRM capabilities and project-based quoting.",
                icon: "fas fa-handshake",
                features: ["Opportunity Management", "Project Quotes", "Contract Management", "Resource Planning"]
              },
              {
                title: "Resource Management",
                description: "Optimize resource utilization with skills-based scheduling and capacity planning.",
                icon: "fas fa-users",
                features: ["Resource Scheduling", "Skills Matching", "Capacity Planning", "Utilization Tracking"]
              },
              {
                title: "Project Management",
                description: "Execute projects successfully with work breakdown structures and timeline management.",
                icon: "fas fa-tasks",
                features: ["Work Breakdown Structure", "Task Management", "Timeline Tracking", "Milestone Management"]
              },
              {
                title: "Time & Expense",
                description: "Capture billable time and expenses with mobile apps and approval workflows.",
                icon: "fas fa-clock",
                features: ["Time Tracking", "Expense Management", "Mobile Apps", "Approval Workflows"]
              },
              {
                title: "Project Accounting",
                description: "Real-time project profitability with cost tracking and revenue recognition.",
                icon: "fas fa-chart-pie",
                features: ["Cost Tracking", "Revenue Recognition", "Budget Management", "Profitability Analysis"]
              },
              {
                title: "Project Analytics",
                description: "Gain insights into project performance with comprehensive reporting and dashboards.",
                icon: "fas fa-chart-bar",
                features: ["Performance Dashboards", "Project Reports", "Resource Analytics", "Financial Reports"]
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100} className="bg-gray-50 rounded-xl p-6">
                <div className="text-suredyn-orange text-3xl mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-suredyn-orange mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
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
              Ready to Optimize Your Project Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transform your project-based business with Dynamics 365 Project Operations for improved profitability and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Project Implementation
                </button>
              </Link>
              <button className="border-2 border-suredyn-orange text-suredyn-orange hover:bg-suredyn-orange hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Project Guide
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}