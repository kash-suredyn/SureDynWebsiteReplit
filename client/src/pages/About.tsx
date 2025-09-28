import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import { STATS } from "@/lib/constants";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-suredyn-orange block">SureDyn Business Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Your trusted partner for Microsoft Dynamics 365 Business Central implementation, migration, and support services across New Jersey and Ohio.
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Headquartered in Montclair, NJ with offices in Iselin, NJ and Dublin, OH—serving 500+ businesses since 2018.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategically Located to Serve You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our three offices provide comprehensive coverage across the Northeast and Midwest, offering local expertise with national capabilities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Montclair, NJ</h3>
                <p className="text-suredyn-orange font-semibold mb-4">Corporate Headquarters</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-suredyn-orange mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Prime Business District</p>
                    <p className="text-gray-600 text-sm">Located in Montclair's vibrant downtown, minutes from NYC</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-users text-suredyn-orange mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">25+ Team Members</p>
                    <p className="text-gray-600 text-sm">Certified consultants, developers, and support specialists</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-clock text-suredyn-orange mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">24/7 Support Center</p>
                    <p className="text-gray-600 text-sm">Round-the-clock monitoring and emergency response</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Local Landmarks:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Montclair Art Museum (2 blocks)</li>
                    <li>• Wellmont Theater (downtown arts district)</li>
                    <li>• Montclair State University (5 minutes)</li>
                    <li>• NJ Transit to NYC (25 minutes)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-industry text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Iselin, NJ</h3>
                <p className="text-blue-600 font-semibold mb-4">Manufacturing Hub</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Industrial Corridor</p>
                    <p className="text-gray-600 text-sm">Heart of NJ's manufacturing and logistics sector</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-cogs text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Manufacturing Specialists</p>
                    <p className="text-gray-600 text-sm">Dedicated team for production and inventory management</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-truck text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Logistics Expertise</p>
                    <p className="text-gray-600 text-sm">Supply chain and warehouse management solutions</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Strategic Access:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Port Newark (15 minutes)</li>
                    <li>• I-95 & NJ Turnpike access</li>
                    <li>• Woodbridge Center (shopping)</li>
                    <li>• Edison Train Station (nearby)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dublin, OH</h3>
                <p className="text-green-600 font-semibold mb-4">Midwest Operations</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-green-600 mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Technology Corridor</p>
                    <p className="text-gray-600 text-sm">Columbus metro's premier business district</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-graduation-cap text-green-600 mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Training Center</p>
                    <p className="text-gray-600 text-sm">Comprehensive Business Central education programs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-handshake text-green-600 mt-1 mr-3"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Partner Network</p>
                    <p className="text-gray-600 text-sm">Midwest Microsoft partner ecosystem connections</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Advantages:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ohio State University (research)</li>
                    <li>• Cardinal Health (healthcare hub)</li>
                    <li>• Nationwide Insurance (corporate)</li>
                    <li>• Central Ohio logistics network</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                New Jersey's Premier Dynamics 365 Business Central Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SureDyn Business Solutions specializes in Microsoft Dynamics 365 Business Central implementations for New Jersey's diverse business landscape—from Camden's chemical industry to Newark's logistics hubs to Montclair's professional services sector.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified consultants brings deep expertise in Business Central implementation, helping companies migrate from QuickBooks, Dynamics GP, and Dynamics NAV to modern cloud-based ERP solutions that scale with Garden State businesses serving NYC and Philadelphia markets.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We understand the unique challenges facing New Jersey businesses—from Port Newark logistics coordination to pharmaceutical compliance requirements to multi-state tax complexity. Our solutions address these specific needs while providing scalable growth platforms.
              </p>
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Partner With Us
                </button>
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="SureDyn team collaborating on Business Central solutions for New Jersey businesses" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to helping businesses achieve operational excellence through innovative ERP solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description: "To empower businesses with modern ERP solutions that drive growth, efficiency, and competitive advantage through expert Microsoft Dynamics 365 Business Central implementations.",
                icon: "fas fa-bullseye",
                color: "text-blue-600"
              },
              {
                title: "Our Vision",
                description: "To be the leading Microsoft Dynamics 365 Business Central partner, recognized for delivering exceptional implementations and transformative business outcomes.",
                icon: "fas fa-eye",
                color: "text-green-600"
              },
              {
                title: "Our Values",
                description: "Excellence, integrity, innovation, and customer success drive everything we do. We believe in building long-term partnerships based on trust and proven results.",
                icon: "fas fa-heart",
                color: "text-suredyn-orange"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border h-full text-center">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${item.icon} text-2xl ${item.color}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                stat: STATS.experience,
                label: "Years of Experience",
                icon: "fas fa-calendar-alt"
              },
              {
                stat: STATS.projects,
                label: "Successful Projects",
                icon: "fas fa-project-diagram"
              },
              {
                stat: STATS.clients,
                label: "Satisfied Clients",
                icon: "fas fa-handshake"
              },
              {
                stat: "99%",
                label: "Client Satisfaction",
                icon: "fas fa-star"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center">
                <div className="bg-gradient-to-br from-suredyn-orange/10 to-blue-50 rounded-xl p-8">
                  <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">{item.stat}</div>
                  <div className="text-gray-600 font-medium">{item.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Microsoft Dynamics 365 Business Central services across all aspects of implementation and support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Implementation Services",
                description: "End-to-end Business Central implementations tailored to your business processes.",
                icon: "fas fa-rocket"
              },
              {
                title: "System Migrations",
                description: "Seamless migrations from QuickBooks, Dynamics GP, and NAV to Business Central.",
                icon: "fas fa-exchange-alt"
              },
              {
                title: "Custom Development",
                description: "Custom extensions and integrations to meet unique business requirements.",
                icon: "fas fa-code"
              },
              {
                title: "Training & Support",
                description: "Comprehensive user training and 24/7 ongoing support services.",
                icon: "fas fa-graduation-cap"
              },
              {
                title: "Business Intelligence",
                description: "Advanced reporting and analytics with Power BI integration.",
                icon: "fas fa-chart-bar"
              },
              {
                title: "Industry Solutions",
                description: "Specialized solutions for manufacturing, distribution, retail, and more.",
                icon: "fas fa-industry"
              }
            ].map((expertise, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border h-full">
                  <div className="bg-suredyn-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${expertise.icon} text-suredyn-orange`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{expertise.title}</h3>
                  <p className="text-gray-600">{expertise.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Partner with SureDyn?"
        subtitle="Let's discuss how we can help transform your business with Microsoft Dynamics 365 Business Central."
        primaryButtonText="Start Your Project"
        backgroundColor="orange-pale"
      />
    </div>
  );
}