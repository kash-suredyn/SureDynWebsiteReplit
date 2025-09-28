import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function BusinessIntelligence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Business Intelligence &
              <span className="text-suredyn-orange block">Analytics Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your Business Central data into actionable insights with Power BI integration and advanced analytics for data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Analytics Project
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                View Sample Dashboards
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BI Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Analytics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic reporting to advanced analytics, we help you unlock the full potential of your Business Central data.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Power BI Integration",
                description: "Seamless integration between Business Central and Power BI for real-time analytics.",
                icon: "fas fa-chart-line",
                features: ["Real-time Data Connection", "Pre-built Templates", "Custom Dashboards", "Mobile Access"]
              },
              {
                title: "Custom Reports",
                description: "Tailored reporting solutions designed for your specific business requirements.",
                icon: "fas fa-file-alt",
                features: ["RDLC Reports", "Word Layouts", "Excel Integration", "Automated Distribution"]
              },
              {
                title: "Executive Dashboards",
                description: "High-level dashboards providing key performance indicators and business metrics.",
                icon: "fas fa-tachometer-alt",
                features: ["KPI Monitoring", "Trend Analysis", "Executive Summaries", "Drill-down Capabilities"]
              },
              {
                title: "Financial Analytics",
                description: "Advanced financial reporting and analysis tools for better financial management.",
                icon: "fas fa-calculator",
                features: ["Financial Statements", "Budget vs Actual", "Cash Flow Analysis", "Profitability Reports"]
              },
              {
                title: "Sales Analytics",
                description: "Comprehensive sales performance analysis and forecasting capabilities.",
                icon: "fas fa-chart-bar",
                features: ["Sales Performance", "Customer Analysis", "Product Insights", "Territory Reports"]
              },
              {
                title: "Operational Analytics",
                description: "Operational efficiency metrics and process optimization insights.",
                icon: "fas fa-cogs",
                features: ["Process Metrics", "Efficiency Reports", "Resource Utilization", "Quality Analytics"]
              }
            ].map((solution, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border h-full">
                  <div className="text-center mb-6">
                    <div className="bg-suredyn-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${solution.icon} text-2xl text-suredyn-orange`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Analytics Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to implementing business intelligence solutions that deliver meaningful insights.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Data Assessment",
                description: "Analyze your data sources and identify key metrics and KPIs.",
                icon: "fas fa-search-plus"
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Design custom dashboards and reports based on your requirements.",
                icon: "fas fa-drafting-compass"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Build and deploy analytics solutions with data connections.",
                icon: "fas fa-hammer"
              },
              {
                step: "04",
                title: "Training & Support",
                description: "User training and ongoing support for your analytics platform.",
                icon: "fas fa-graduation-cap"
              }
            ].map((process, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center">
                <div className="bg-white rounded-xl p-6 h-full shadow-lg">
                  <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${process.icon} text-xl`}></i>
                  </div>
                  <div className="text-sm font-bold text-suredyn-orange mb-2">STEP {process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-suredyn-orange-pale">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unlock Your Data's Potential
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central business intelligence needs and discover how we can help your business succeed.
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