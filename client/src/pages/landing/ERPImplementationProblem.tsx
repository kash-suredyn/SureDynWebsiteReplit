import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import InternalLinkSection, { ContextualLink } from "@/components/common/InternalLinkSection";
import { SEOManager } from "@/lib/seoUtils";

export default function ERPImplementationProblem() {
  useEffect(() => {
    SEOManager.setPageSEO({
      title: "ERP Implementation Problems? Expert ERP Rescue & Fix Services NJ | +1-732-585-5563",
      description: "Failed ERP implementation? Budget overruns? Timeline delays? Our NJ experts rescue troubled ERP projects and get your business back on track. Emergency consultation available.",
      keywords: "ERP implementation problems, failed ERP project rescue, ERP implementation gone wrong, ERP project recovery, troubled ERP implementation help",
      canonical: "https://suredyn.com/erp-implementation-problems-rescue-nj"
    });

    const problemServiceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ERP Implementation Problem Resolution",
      "description": "Expert rescue services for failed or troubled ERP implementations",
      "provider": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "telephone": "+1-732-585-5563"
      },
      "serviceType": "ERP Rescue Service",
      "areaServed": "New Jersey"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-problem-service-schema', 'true');
    script.textContent = JSON.stringify(problemServiceData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-problem-service-schema="true"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
      <SEOBreadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "ERP Implementation Problems", href: "/erp-implementation-problems-rescue-nj" }
        ]}
      />

      {/* Warning Alert */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="font-semibold">ERP PROJECT IN TROUBLE? WE CAN HELP - CALL NOW</span>
            <i className="fas fa-exclamation-triangle"></i>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <AnimatedSection className="pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-red-600">ERP Implementation</span><br />
              Problems?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
              Expert ERP Rescue Services for Troubled Projects in New Jersey
            </p>
            
            {/* Problem Indicators */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-red-600 mb-6">Is Your ERP Project Showing These Warning Signs?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <i className="fas fa-times-circle text-red-500 mr-3"></i>
                  <span>Budget overruns by 50% or more</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-times-circle text-red-500 mr-3"></i>
                  <span>Timeline delays of 6+ months</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-times-circle text-red-500 mr-3"></i>
                  <span>Core functionality not working</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-times-circle text-red-500 mr-3"></i>
                  <span>Data migration issues</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-times-circle text-red-500 mr-3"></i>
                  <span>User adoption resistance</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-times-circle text-red-500 mr-3"></i>
                  <span>Vendor relationship breakdown</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17325855563" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Emergency ERP Consultation
              </a>
              <Link href="/contact">
                <span className="bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                  Get Rescue Assessment
                </span>
              </Link>
            </div>
          </div>

          {/* Common ERP Problems */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-money-bill-wave text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overruns</h3>
              <p className="text-gray-700 mb-4">Projects spiraling out of control with no end in sight. Scope creep and change orders disrupting your operations. Our proven <ContextualLink text="Business Central implementation" href="/business-central-implementation-nj" /> methodology prevents these issues.</p>
              <p className="text-sm font-semibold text-red-600">PROJECT RISK: Scope creep and delays</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-calendar-times text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline Delays</h3>
              <p className="text-gray-700 mb-4">Go-live dates pushed back repeatedly while business operations suffer and stakeholder confidence erodes.</p>
              <p className="text-sm font-semibold text-red-600">BUSINESS IMPACT: Operational disruption</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-database text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Migration Failure</h3>
              <p className="text-gray-700 mb-4">Critical business data lost, corrupted, or incorrectly mapped, threatening operational continuity and compliance.</p>
              <p className="text-sm font-semibold text-red-600">CRITICAL RISK: Permanent data loss</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-users-slash text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">User Rejection</h3>
              <p className="text-gray-700 mb-4">Employees refusing to use the new system, forcing continued reliance on old processes and manual workarounds.</p>
              <p className="text-sm font-semibold text-red-600">ADOPTION CRISIS: 70% user resistance</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-cog text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Dysfunction</h3>
              <p className="text-gray-700 mb-4">Core business processes broken, poor performance, and critical features not working as designed.</p>
              <p className="text-sm font-semibold text-red-600">OPERATIONAL CRISIS: Business disruption</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-handshake-slash text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vendor Breakdown</h3>
              <p className="text-gray-700 mb-4">Communication failures, unmet commitments, and deteriorating relationship with implementation partner.</p>
              <p className="text-sm font-semibold text-red-600">VENDOR RISK: Legal implications</p>
            </div>
          </div>

          {/* Our ERP Rescue Process */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our ERP Rescue Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Emergency Assessment</h3>
                <p className="text-gray-700 text-sm">Rapid evaluation of project status, problems, and recovery options</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-gray-900 mb-2">Damage Control</h3>
                <p className="text-gray-700 text-sm">Immediate actions to prevent further problems and stabilize the situation</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Recovery Plan</h3>
                <p className="text-gray-700 text-sm">Detailed roadmap to fix issues and complete implementation successfully</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-gray-900 mb-2">Remediation</h3>
                <p className="text-gray-700 text-sm">Execute fixes for technical, process, and adoption issues</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-bold text-gray-900 mb-2">Success Delivery</h3>
                <p className="text-gray-700 text-sm">Complete implementation with full user adoption and business benefits</p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ERP Rescue Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Camden Manufacturing Crisis</h3>
                <p className="text-gray-700 mb-4">"Our ERP project was behind schedule with a vendor who walked away. SureDyn rescued the project, salvaged our data, and got us live successfully. Saved our company."</p>
                <p className="text-sm text-gray-600">Project Status: Successfully Rescued and Deployed</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Newark Distribution Disaster</h3>
                <p className="text-gray-700 mb-4">"Failed implementation destroyed our inventory management. SureDyn rebuilt everything from scratch, recovered our lost data, and implemented proper processes. Now we have full visibility across all locations."</p>
                <p className="text-sm text-gray-600">Project Status: Fully Restored Operations</p>
              </div>
            </div>
          </div>

          {/* Why Projects Fail */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why ERP Projects Fail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Root Causes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                    <span>Inadequate planning and requirements analysis</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                    <span>Poor vendor selection and unrealistic promises</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                    <span>Insufficient change management and training</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-red-500 mt-1 mr-3"></i>
                    <span>Scope creep without proper controls</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">How We Fix Them</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Proven methodology with clear milestones</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Experienced team with 200+ implementations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Comprehensive training and adoption programs</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                    <span>Fixed-price contracts with clear deliverables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <InternalLinkSection 
            pageType="problem" 
            pageContext="erp implementation problems rescue"
            title="Prevention & Solution Services"
            className="mb-16"
          />

          {/* Emergency Contact Section */}
          <div className="bg-red-600 text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Don't Let Your ERP Project Fail</h2>
            <p className="text-xl mb-8">Get expert help before it's too late. Our <ContextualLink text="Montclair team" href="/erp-services-montclair-nj" className="text-white hover:text-yellow-300" /> provides immediate assistance.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+17325855563" className="text-3xl font-bold hover:text-yellow-300 transition-colors">
                <i className="fas fa-phone mr-4"></i>+1-732-585-5563
              </a>
              <div className="text-lg">
                <p>Emergency Consultation</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </div>
  );
}