import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function ProjectRescue() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-suredyn-orange/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              🚨 BUSINESS CENTRAL PROJECT RESCUE SPECIALISTS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Business Central Project Rescue
              <span className="text-red-600 block">Specialists</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Is your Business Central implementation failing? We specialize in rescuing troubled Microsoft Dynamics 365 Business Central projects and getting them back on track for success. Over 50 rescued projects with 95% success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Immediate Help
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Emergency Assessment
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Is Your Business Central Project in Trouble?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Recognize these warning signs in your Dynamics 365 Business Central implementation? Don't wait - early intervention can save your project and budget.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Timeline Delays",
                description: "Missing milestones and extended deadlines with no clear resolution path.",
                icon: "fas fa-clock",
                color: "text-red-600"
              },
              {
                title: "Budget Overruns",
                description: "Costs escalating beyond approved budget with additional expenses mounting.",
                icon: "fas fa-dollar-sign",
                color: "text-red-600"
              },
              {
                title: "Technical Issues",
                description: "System performance problems, integration failures, or data migration issues.",
                icon: "fas fa-exclamation-triangle",
                color: "text-yellow-600"
              },
              {
                title: "User Resistance",
                description: "Team members refusing to adopt the new system or expressing frustration.",
                icon: "fas fa-users-slash",
                color: "text-red-600"
              },
              {
                title: "Vendor Problems",
                description: "Poor communication, lack of responsiveness, or inadequate support from current vendor.",
                icon: "fas fa-phone-slash",
                color: "text-red-600"
              },
              {
                title: "Scope Creep",
                description: "Uncontrolled expansion of project requirements without proper change management.",
                icon: "fas fa-expand-arrows-alt",
                color: "text-yellow-600"
              }
            ].map((warning, index) => (
              <AnimatedSection key={index} delay={index * 100} className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-500">
                <div className={`${warning.color} text-3xl mb-4`}>
                  <i className={warning.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{warning.title}</h3>
                <p className="text-gray-600">{warning.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Rescue Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Project Rescue Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rapid assessment and recovery methodology to get your project back on track within 30 days.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Emergency Assessment",
                description: "Rapid 48-hour assessment of current project status, issues, and recovery options.",
                timeline: "48 Hours"
              },
              {
                step: "2",
                title: "Recovery Planning",
                description: "Detailed recovery plan with timeline, resource requirements, and risk mitigation.",
                timeline: "1 Week"
              },
              {
                step: "3",
                title: "Rapid Stabilization",
                description: "Immediate actions to stabilize the project and prevent further deterioration.",
                timeline: "2 Weeks"
              },
              {
                step: "4",
                title: "Project Recovery",
                description: "Execute recovery plan with experienced team and proven methodologies.",
                timeline: "4-12 Weeks"
              }
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="bg-suredyn-orange/10 text-suredyn-orange px-3 py-1 rounded-full text-sm font-semibold">
                  {step.timeline}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rescue Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from troubled projects we've successfully rescued.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: "Manufacturing",
                problem: "18 months behind schedule, 300% over budget",
                solution: "Completed in 3 months, saved $2M",
                savings: "$2M Saved"
              },
              {
                industry: "Distribution",
                problem: "Failed go-live, system crashes, user revolt",
                solution: "Stable system in 6 weeks, 95% user adoption",
                savings: "95% Adoption"
              },
              {
                industry: "Professional Services",
                problem: "Vendor abandonment, incomplete system",
                solution: "Full implementation completed in 4 months",
                savings: "4 Month Recovery"
              }
            ].map((story, index) => (
              <AnimatedSection key={index} delay={index * 100} className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-green-600 text-sm font-semibold mb-2">{story.industry}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">The Problem</h3>
                <p className="text-gray-600 mb-4">{story.problem}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                <p className="text-gray-600 mb-4">{story.solution}</p>
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold">
                  {story.savings}
                </div>
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
              Don't Let Your Project Fail
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Every day your project remains troubled costs you more money and damages team morale. Get help now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-bold transition-colors duration-200 text-lg">
                  🚨 Get Emergency Help Now
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Free 30-Min Consultation
              </button>
            </div>
            <p className="text-white/80 text-sm mt-4">24/7 Emergency Response Available</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}