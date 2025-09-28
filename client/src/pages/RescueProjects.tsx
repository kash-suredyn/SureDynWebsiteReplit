import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

export default function RescueProjects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-suredyn-orange/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              🚨 EMERGENCY PROJECT RESCUE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Rescue Your
              <span className="text-suredyn-orange block">Failing ERP Project</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Don't let a troubled implementation destroy your business. Our emergency rescue team has saved over 200 failing ERP projects with rapid intervention and proven recovery methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-colors duration-200 text-lg">
                  🚨 Get Emergency Help Now
                </button>
              </Link>
              <Link href="/services/project-rescue">
                <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                  Learn About Our Process
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Crisis Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Is Your Project in Crisis?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Don't wait until it's too late. These warning signs indicate your project needs immediate intervention.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Project Overruns",
                description: "Project scope has exceeded original plans with no end in sight.",
                severity: "critical",
                icon: "fas fa-exclamation-triangle"
              },
              {
                title: "Timeline Delays",
                description: "Major milestones missed by months, go-live date pushed back multiple times.",
                severity: "critical", 
                icon: "fas fa-clock"
              },
              {
                title: "Vendor Issues",
                description: "Poor communication, missed deliverables, or threats to abandon the project.",
                severity: "critical",
                icon: "fas fa-phone-slash"
              },
              {
                title: "System Failures",
                description: "Frequent crashes, data corruption, or performance issues that prevent testing.",
                severity: "high",
                icon: "fas fa-bug"
              },
              {
                title: "User Revolt",
                description: "Key users refuse to participate, expressing no confidence in the system.",
                severity: "high",
                icon: "fas fa-users-slash"
              },
              {
                title: "Data Problems",
                description: "Migration failures, data integrity issues, or lost information.",
                severity: "high",
                icon: "fas fa-database"
              },
              {
                title: "Scope Creep",
                description: "Uncontrolled expansion of requirements without proper change management.",
                severity: "medium",
                icon: "fas fa-expand-arrows-alt"
              },
              {
                title: "Integration Failures",
                description: "Third-party systems won't connect or data flows are broken.",
                severity: "medium",
                icon: "fas fa-unlink"
              },
              {
                title: "Training Gaps",
                description: "Users unprepared for go-live, lack of documentation or support materials.",
                severity: "medium",
                icon: "fas fa-graduation-cap"
              }
            ].map((indicator, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`rounded-xl p-6 border-l-4 ${
                  indicator.severity === 'critical' 
                    ? 'bg-red-50 border-red-500' 
                    : indicator.severity === 'high'
                    ? 'bg-orange-50 border-orange-500'
                    : 'bg-yellow-50 border-yellow-500'
                }`}>
                  <div className={`text-3xl mb-4 ${
                    indicator.severity === 'critical' 
                      ? 'text-red-600' 
                      : indicator.severity === 'high'
                      ? 'text-orange-600'
                      : 'text-yellow-600'
                  }`}>
                    <i className={indicator.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{indicator.title}</h3>
                  <p className="text-gray-600 mb-4">{indicator.description}</p>
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                    indicator.severity === 'critical' 
                      ? 'bg-red-100 text-red-800' 
                      : indicator.severity === 'high'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {indicator.severity.toUpperCase()} RISK
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Rescue Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real companies we've saved from ERP disasters with rapid intervention and expert recovery.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechFlow Industries",
                industry: "Manufacturing",
                crisis: "Behind schedule, vendor abandonment, failing implementation",
                intervention: "Emergency 48-hour assessment, new team deployment, project restructure",
                outcome: "Successful completion, full user adoption, improved processes",
                status: "Fully Recovered"
              },
              {
                company: "Metro Distribution",
                industry: "Wholesale",
                crisis: "Failed go-live, system crashes, data corruption, user revolt",
                intervention: "Immediate system stabilization, data recovery, user re-engagement",
                outcome: "Stable go-live, 95% user satisfaction, improved processes",
                status: "Successfully Deployed"
              },
              {
                company: "Global Services Corp",
                industry: "Professional Services", 
                crisis: "Poor vendor performance, missed milestones, project delays",
                intervention: "Vendor replacement, rapid re-implementation, change management",
                outcome: "Successful implementation, exceeded expectations, strong results",
                status: "Project Completed"
              }
            ].map((story, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                    <div className="text-sm text-suredyn-orange font-semibold">{story.industry}</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🚨 The Crisis</h4>
                      <p className="text-gray-600 text-sm">{story.crisis}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">⚡ Our Intervention</h4>
                      <p className="text-gray-600 text-sm">{story.intervention}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">✅ The Outcome</h4>
                      <p className="text-gray-600 text-sm">{story.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-semibold">
                      {story.status}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24/7 Emergency Response
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When your project is in crisis, every hour counts. Our emergency response team is available around the clock.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                time: "2 Hours",
                title: "Initial Response",
                description: "Emergency team mobilized, initial assessment call scheduled"
              },
              {
                time: "24 Hours", 
                title: "Rapid Assessment",
                description: "Comprehensive project evaluation and crisis analysis completed"
              },
              {
                time: "48 Hours",
                title: "Recovery Plan",
                description: "Detailed rescue strategy with timeline and resource requirements"
              },
              {
                time: "1 Week",
                title: "Stabilization",
                description: "Critical issues resolved, project stabilized and back on track"
              }
            ].map((phase, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center">
                <div className="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-lg font-bold">{phase.time}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Project Can Be Saved
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't abandon your investment. Over 200 companies have trusted us to rescue their failing ERP projects. Let us save yours too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-bold transition-colors duration-200 text-lg">
                  🚨 Call Emergency Hotline
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Free Crisis Assessment
              </button>
            </div>
            <div className="mt-6 flex items-center justify-center text-white/80">
              <i className="fas fa-phone mr-2"></i>
              <span className="text-lg font-semibold">24/7 Emergency Line: 1-800-RESCUE-ERP</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}