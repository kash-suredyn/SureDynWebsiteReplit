import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Dynamics365CustomerService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Microsoft Dynamics 365
              <span className="text-suredyn-orange block">Customer Service</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform customer service operations with AI-powered insights, omnichannel support, and proactive case management for exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Enhance Customer Service
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
              Complete Customer Service Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deliver exceptional customer experiences with intelligent case management and omnichannel support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Case Management",
                description: "Intelligent case routing, prioritization, and tracking with automated workflows.",
                icon: "fas fa-ticket-alt",
                features: ["Smart Routing", "Priority Management", "SLA Tracking", "Auto-escalation"]
              },
              {
                title: "Knowledge Management",
                description: "Centralized knowledge base with AI-powered article suggestions and search.",
                icon: "fas fa-book-open",
                features: ["Knowledge Articles", "AI Suggestions", "Search Portal", "Content Analytics"]
              },
              {
                title: "Omnichannel Support",
                description: "Unified customer interactions across email, chat, phone, and social media.",
                icon: "fas fa-comments",
                features: ["Multi-channel", "Unified Interface", "Chat Integration", "Social Listening"]
              },
              {
                title: "Customer Portal",
                description: "Self-service portal for customers to find answers and manage cases independently.",
                icon: "fas fa-user-circle",
                features: ["Self-service", "Case Tracking", "Knowledge Access", "Community Forums"]
              },
              {
                title: "Service Analytics",
                description: "Real-time dashboards and insights to optimize service performance and satisfaction.",
                icon: "fas fa-chart-line",
                features: ["Performance Dashboards", "Customer Satisfaction", "Agent Analytics", "Trend Analysis"]
              },
              {
                title: "AI-Powered Insights",
                description: "Predictive analytics and sentiment analysis for proactive customer service.",
                icon: "fas fa-brain",
                features: ["Sentiment Analysis", "Predictive Insights", "Topic Analysis", "Smart Recommendations"]
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
              Ready to Transform Customer Service?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Deliver exceptional customer experiences with Dynamics 365 Customer Service and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Service Transformation
                </button>
              </Link>
              <button className="border-2 border-suredyn-orange text-suredyn-orange hover:bg-suredyn-orange hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Service Guide
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}