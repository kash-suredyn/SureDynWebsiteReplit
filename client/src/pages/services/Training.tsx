import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Training() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Business Central
              <span className="text-suredyn-orange block">Training Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive user training and change management to maximize Microsoft Dynamics 365 Business Central adoption and ROI across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Schedule Training
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                View Training Catalog
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured training programs designed for different user roles and skill levels.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "End User Training",
                description: "Essential Business Central skills for daily operations and tasks.",
                icon: "fas fa-user",
                duration: "2-3 Days",
                audience: "All Users",
                topics: ["Navigation & Interface", "Basic Transactions", "Reporting", "Daily Operations"]
              },
              {
                title: "Power User Training",
                description: "Advanced features and configuration for key users and department leads.",
                icon: "fas fa-user-cog",
                duration: "3-5 Days",
                audience: "Power Users",
                topics: ["Advanced Features", "Setup & Configuration", "Customization", "Troubleshooting"]
              },
              {
                title: "Administrator Training",
                description: "Complete system administration and management training.",
                icon: "fas fa-user-shield",
                duration: "5-7 Days",
                audience: "IT Administrators",
                topics: ["System Administration", "User Management", "Security Setup", "Performance Optimization"]
              }
            ].map((program, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border h-full">
                  <div className="text-center mb-6">
                    <div className="bg-suredyn-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${program.icon} text-2xl text-suredyn-orange`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span><strong>Duration:</strong> {program.duration}</span>
                      <span><strong>For:</strong> {program.audience}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Training Topics:</h4>
                    <ul className="space-y-1">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Training Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the training method that works best for your team and schedule.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                method: "On-Site Training",
                description: "Instructor-led training at your location with hands-on practice.",
                icon: "fas fa-building",
                benefits: ["Personalized Approach", "Team Building", "Custom Scenarios", "No Travel Required"]
              },
              {
                method: "Virtual Training",
                description: "Live online sessions with interactive demos and Q&A.",
                icon: "fas fa-video",
                benefits: ["Cost Effective", "Flexible Scheduling", "Record Sessions", "Remote Participants"]
              },
              {
                method: "Self-Paced Online",
                description: "Comprehensive online courses available 24/7.",
                icon: "fas fa-laptop",
                benefits: ["Learn at Your Pace", "Available Anytime", "Progress Tracking", "Unlimited Access"]
              },
              {
                method: "Hybrid Approach",
                description: "Combination of in-person and online training methods.",
                icon: "fas fa-sync-alt",
                benefits: ["Best of Both Worlds", "Flexible Options", "Comprehensive Coverage", "Ongoing Support"]
              }
            ].map((method, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border h-full">
                  <div className="text-center mb-4">
                    <div className="bg-suredyn-orange/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className={`${method.icon} text-xl text-suredyn-orange`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.method}</h3>
                    <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  </div>
                  <ul className="space-y-1">
                    {method.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
              Schedule Your Training Program
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central training needs and discover how we can help your business succeed.
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