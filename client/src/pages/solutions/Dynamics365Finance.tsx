import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Dynamics365Finance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Microsoft Dynamics 365
              <span className="text-suredyn-orange block">Finance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive financial management solution with advanced analytics, global compliance, and AI-powered insights for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Finance Solution
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
              Complete Financial Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your financial operations with Dynamics 365 Finance's comprehensive capabilities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Reporting",
                description: "Real-time financial reporting with customizable dashboards and automated consolidation.",
                icon: "fas fa-chart-line",
                features: ["Real-time Reporting", "Financial Consolidation", "Budget Management", "KPI Dashboards"]
              },
              {
                title: "Accounts Payable",
                description: "Streamline vendor management and payment processes with automated workflows.",
                icon: "fas fa-file-invoice-dollar",
                features: ["Invoice Processing", "Vendor Management", "Payment Automation", "Expense Management"]
              },
              {
                title: "Accounts Receivable",
                description: "Optimize cash flow with intelligent collections and customer credit management.",
                icon: "fas fa-receipt",
                features: ["Collections Management", "Credit Management", "Invoice Processing", "Customer Portal"]
              },
              {
                title: "General Ledger",
                description: "Comprehensive ledger management with multi-currency and multi-entity support.",
                icon: "fas fa-book",
                features: ["Multi-Currency Support", "Automated Posting", "Allocation Rules", "Period-End Processing"]
              },
              {
                title: "Cash Management",
                description: "Advanced cash flow forecasting and bank reconciliation capabilities.",
                icon: "fas fa-university",
                features: ["Cash Flow Forecasting", "Bank Reconciliation", "Investment Management", "Currency Management"]
              },
              {
                title: "Tax Management",
                description: "Global tax compliance with automated calculations and regulatory reporting.",
                icon: "fas fa-calculator",
                features: ["Tax Calculations", "Compliance Reporting", "Global Tax Support", "Audit Trails"]
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
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Implement Dynamics 365 Finance and gain real-time financial insights with global compliance capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Finance Implementation
                </button>
              </Link>
              <button className="border-2 border-suredyn-orange text-suredyn-orange hover:bg-suredyn-orange hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Solution Guide
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}