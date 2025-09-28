import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import InternalLinkSection, { ContextualLink } from "@/components/common/InternalLinkSection";
import { SEOManager } from "@/lib/seoUtils";

export default function QuickBooksEmergency() {
  useEffect(() => {
    SEOManager.setPageSEO({
      title: "QuickBooks Emergency Help NJ | Same-Day QuickBooks Repair & Recovery | Call +1-732-585-5563",
      description: "URGENT QuickBooks problems? Our NJ experts provide same-day QuickBooks emergency repair, data recovery, and fixes. Available 24/7 for critical business issues. Call now!",
      keywords: "QuickBooks emergency repair NJ, same day QuickBooks fix, QuickBooks data recovery, urgent QuickBooks help, QuickBooks crashed, QuickBooks won't open, emergency accounting help",
      canonical: "https://suredyn.com/quickbooks-emergency-help-nj"
    });

    // Emergency service structured data
    const emergencyData = {
      "@context": "https://schema.org",
      "@type": "EmergencyService",
      "name": "QuickBooks Emergency Repair Service",
      "description": "24/7 emergency QuickBooks repair and data recovery services for New Jersey businesses",
      "provider": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "telephone": "+1-732-585-5563",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Business Way",
          "addressLocality": "Montclair",
          "addressRegion": "NJ",
          "postalCode": "07042"
        }
      },
      "areaServed": ["New Jersey", "NYC Metro Area"],
      "availableLanguage": "English",
      "hoursAvailable": "24/7"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-emergency-schema', 'true');
    script.textContent = JSON.stringify(emergencyData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-emergency-schema="true"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <SEOBreadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "Emergency QuickBooks Help", href: "/quickbooks-emergency-help-nj" }
        ]}
      />

      {/* Emergency Alert Header */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="animate-pulse">
              <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
            </div>
            <span className="font-semibold">EMERGENCY QUICKBOOKS HELP AVAILABLE NOW</span>
            <div className="animate-pulse">
              <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <AnimatedSection className="pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-red-600">EMERGENCY</span><br />
              QuickBooks Help
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
              Same-Day QuickBooks Repair & Data Recovery in New Jersey
            </p>
            
            {/* Emergency CTA */}
            <div className="bg-red-600 text-white p-8 rounded-lg shadow-2xl mb-12">
              <h2 className="text-3xl font-bold mb-4">Call NOW for Immediate Help</h2>
              <div className="text-4xl font-bold mb-4">
                <a href="tel:+17325855563" className="hover:text-yellow-300 transition-colors">
                  +1-732-585-5563
                </a>
              </div>
              <p className="text-lg mb-6">Available 24/7 for Critical QuickBooks Emergencies</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+17325855563" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  Call for Emergency Help
                </a>
                <Link href="/contact">
                  <span className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                    Get Emergency Quote
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Emergency Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-exclamation-triangle text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">QuickBooks Won't Open</h3>
              <p className="text-gray-700 mb-4">File corruption, network issues, or software conflicts preventing access to your financial data. For permanent solutions, consider our <ContextualLink text="QuickBooks migration service" href="/quickbooks-migration-service-nj" /> to Business Central.</p>
              <p className="text-sm font-semibold text-red-600">URGENT: Can cause payroll delays</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-database text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Corruption</h3>
              <p className="text-gray-700 mb-4">Lost transactions, missing customers, or corrupted company files threatening business operations.</p>
              <p className="text-sm font-semibold text-red-600">CRITICAL: Risk of permanent data loss</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-clock text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payroll Deadline Crisis</h3>
              <p className="text-gray-700 mb-4">QuickBooks payroll errors with employees waiting for paychecks and compliance deadlines looming.</p>
              <p className="text-sm font-semibold text-red-600">TIME-SENSITIVE: Legal compliance required</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-shield-alt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security Breach</h3>
              <p className="text-gray-700 mb-4">Unauthorized access, suspicious activity, or compromised financial data requiring immediate action.</p>
              <p className="text-sm font-semibold text-red-600">SECURITY RISK: Customer data at risk</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-server text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Server Failure</h3>
              <p className="text-gray-700 mb-4">Multi-user QuickBooks environment down, preventing team access to critical business functions.</p>
              <p className="text-sm font-semibold text-red-600">BUSINESS CRITICAL: Operations halted</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="text-red-600 mb-4">
                <i className="fas fa-calendar-times text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Deadline Emergency</h3>
              <p className="text-gray-700 mb-4">QuickBooks issues preventing tax filing with IRS or state deadlines approaching rapidly.</p>
              <p className="text-sm font-semibold text-red-600">DEADLINE CRITICAL: Penalties pending</p>
            </div>
          </div>

          {/* Emergency Response Process */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Emergency Response Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Immediate Response</h3>
                <p className="text-gray-700 text-sm">Call answered within 2 rings, emergency assessment begins immediately</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-gray-900 mb-2">Remote Diagnosis</h3>
                <p className="text-gray-700 text-sm">Secure remote access to identify and assess the critical issue</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Emergency Repair</h3>
                <p className="text-gray-700 text-sm">Immediate action to restore critical business functions</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-gray-900 mb-2">Verification</h3>
                <p className="text-gray-700 text-sm">Complete testing to ensure all systems operational and secure</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"QuickBooks crashed Friday at 4 PM with payroll due Monday. SureDyn had us running by 6 PM the same day. Saved our entire payroll cycle!"</p>
                <p className="font-semibold text-gray-900">- Maria Santos, Newark Manufacturing</p>
                <p className="text-sm text-gray-600">Emergency Response Time: 2 hours</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"Data corruption threatened to shut down our operations. SureDyn recovered everything and had us back online before we lost any business."</p>
                <p className="font-semibold text-gray-900">- Robert Chen, Montclair Services</p>
                <p className="text-sm text-gray-600">Emergency Response Time: 1.5 hours</p>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <InternalLinkSection 
            pageType="emergency" 
            pageContext="quickbooks emergency help"
            title="Permanent Solutions After Emergency Repair"
            className="mb-16"
          />

          {/* Emergency Contact Section */}
          <div className="bg-red-600 text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Don't Wait - Every Minute Counts</h2>
            <p className="text-xl mb-8">Our <ContextualLink text="Montclair ERP services" href="/erp-services-montclair-nj" className="text-white hover:text-yellow-300" /> team is standing by</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+17325855563" className="text-4xl font-bold hover:text-yellow-300 transition-colors">
                <i className="fas fa-phone mr-4"></i>+1-732-585-5563
              </a>
              <div className="text-lg">
                <p>Available 24/7</p>
                <p>Same-Day Service</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </div>
  );
}