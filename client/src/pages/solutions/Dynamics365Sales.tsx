import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Dynamics365Sales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Microsoft Dynamics 365
              <span className="text-suredyn-orange block">Sales</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empower your sales team with AI-driven insights, automated processes, and complete customer relationship management to close more deals faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Boost Sales Performance
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
              Complete Sales Management Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your sales operations with intelligent tools that help your team sell smarter and faster.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Management",
                description: "Capture, qualify, and nurture leads with automated scoring and intelligent routing.",
                icon: "fas fa-user-plus",
                features: ["Lead Scoring", "Auto-routing", "Lead Nurturing", "Conversion Tracking"]
              },
              {
                title: "Opportunity Management",
                description: "Track deals through your sales process with AI-powered forecasting and insights.",
                icon: "fas fa-chart-line",
                features: ["Pipeline Management", "Sales Forecasting", "Deal Insights", "Win/Loss Analysis"]
              },
              {
                title: "Contact & Account Management",
                description: "360-degree customer view with relationship mapping and engagement history.",
                icon: "fas fa-address-book",
                features: ["Customer 360", "Relationship Mapping", "Engagement Tracking", "Account Hierarchies"]
              },
              {
                title: "Sales Analytics",
                description: "Real-time dashboards and reports to track performance and identify trends.",
                icon: "fas fa-chart-bar",
                features: ["Sales Dashboards", "Performance Reports", "Trend Analysis", "KPI Tracking"]
              },
              {
                title: "Mobile Sales",
                description: "Full CRM capabilities on mobile devices for sales teams on the go.",
                icon: "fas fa-mobile-alt",
                features: ["Mobile Apps", "Offline Access", "Location Services", "Mobile Approvals"]
              },
              {
                title: "Sales Automation",
                description: "Automate repetitive tasks and workflows to focus on selling activities.",
                icon: "fas fa-robot",
                features: ["Workflow Automation", "Email Templates", "Task Automation", "Follow-up Reminders"]
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
              Ready to Accelerate Your Sales?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Empower your sales team with Dynamics 365 Sales and drive revenue growth with intelligent customer relationship management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Sales Transformation
                </button>
              </Link>
              <button className="border-2 border-suredyn-orange text-suredyn-orange hover:bg-suredyn-orange hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Sales Guide
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}