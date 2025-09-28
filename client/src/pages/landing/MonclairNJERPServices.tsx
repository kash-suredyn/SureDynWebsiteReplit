import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import InternalLinkSection, { ContextualLink } from "@/components/common/InternalLinkSection";
import { SEOManager } from "@/lib/seoUtils";

export default function MontclairNJERPServices() {
  useEffect(() => {
    SEOManager.setPageSEO({
      title: "ERP Services Montclair NJ | Business Central Implementation | Microsoft Dynamics 365 | +1-732-585-5563",
      description: "Professional ERP services in Montclair, NJ. Microsoft Dynamics 365 Business Central implementation, QuickBooks migration, and ongoing support. Local NJ office serving Essex County.",
      keywords: "ERP services Montclair NJ, Business Central Montclair, Microsoft Dynamics 365 Montclair, ERP consultant Montclair NJ, Essex County ERP services",
      canonical: "https://suredyn.com/erp-services-montclair-nj"
    });

    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SureDyn Business Solutions - Montclair Office",
      "description": "Microsoft Dynamics 365 Business Central ERP services in Montclair, New Jersey",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business Way",
        "addressLocality": "Montclair",
        "addressRegion": "NJ",
        "postalCode": "07042"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.8176",
        "longitude": "-74.2093"
      },
      "telephone": "+1-732-585-5563",
      "email": "info@suredyn.com",
      "url": "https://suredyn.com",
      "serviceArea": ["Montclair", "Essex County", "Newark", "Bloomfield", "Glen Ridge", "Upper Montclair"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ERP Services Montclair",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Central Implementation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "QuickBooks Migration"
            }
          }
        ]
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-local-business-schema', 'true');
    script.textContent = JSON.stringify(localBusinessData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-local-business-schema="true"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOBreadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "ERP Services Montclair NJ", href: "/erp-services-montclair-nj" }
        ]}
      />

      {/* Hero Section */}
      <AnimatedSection className="pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              ERP Services in<br />
              <span className="text-suredyn-orange">Montclair, NJ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Microsoft Dynamics 365 Business Central Implementation & Support
            </p>
            
            {/* Local Credibility */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">Local</div>
                  <p className="text-gray-700">Montclair Headquarters</p>
                  <p className="text-sm text-gray-600">123 Business Way</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">50+</div>
                  <p className="text-gray-700">Essex County Clients</p>
                  <p className="text-sm text-gray-600">Including Newark, Bloomfield</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">24/7</div>
                  <p className="text-gray-700">Local Support</p>
                  <p className="text-sm text-gray-600">Same-day onsite available</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17325855563" className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Call Montclair Office
              </a>
              <Link href="/contact">
                <span className="bg-white border-2 border-suredyn-orange text-suredyn-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-suredyn-orange hover:text-white transition-colors cursor-pointer">
                  Schedule Local Visit
                </span>
              </Link>
            </div>
          </div>

          {/* Local Service Areas */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Serving Essex County Businesses</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Montclair</h3>
                <p className="text-gray-600 text-sm">Downtown & Upper Montclair</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Newark</h3>
                <p className="text-gray-600 text-sm">Downtown & Industrial Areas</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Bloomfield</h3>
                <p className="text-gray-600 text-sm">Manufacturing District</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Glen Ridge</h3>
                <p className="text-gray-600 text-sm">Professional Services</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">West Orange</h3>
                <p className="text-gray-600 text-sm">Healthcare & Retail</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Orange</h3>
                <p className="text-gray-600 text-sm">Small Business Focus</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">East Orange</h3>
                <p className="text-gray-600 text-sm">Community Services</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Verona</h3>
                <p className="text-gray-600 text-sm">Professional Practices</p>
              </div>
            </div>
          </div>

          {/* Local ERP Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-cogs text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Central Implementation</h3>
              <p className="text-gray-700 mb-4">Complete <ContextualLink text="Microsoft Dynamics 365 Business Central implementation" href="/business-central-implementation-nj" /> for Montclair area businesses.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Financial management setup</li>
                <li>• Inventory & warehouse management</li>
                <li>• Customer & vendor management</li>
                <li>• Local tax configuration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-exchange-alt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">QuickBooks Migration</h3>
              <p className="text-gray-700 mb-4">Seamless <ContextualLink text="QuickBooks migration service" href="/quickbooks-migration-service-nj" /> to Business Central for growing Essex County companies.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete data migration</li>
                <li>• Historical data preservation</li>
                <li>• User training & support</li>
                <li>• Weekend migration option</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-headset text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Support Services</h3>
              <p className="text-gray-700 mb-4">Ongoing support and maintenance with same-day response for Montclair clients.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Phone & remote support</li>
                <li>• Onsite visits available</li>
                <li>• System optimization</li>
                <li>• User training sessions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-chart-line text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Intelligence</h3>
              <p className="text-gray-700 mb-4">Real-time reporting and analytics for data-driven decision making in Essex County markets.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom dashboards</li>
                <li>• Financial reporting</li>
                <li>• Operational analytics</li>
                <li>• Mobile access</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-shield-alt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>
              <p className="text-gray-700 mb-4">NJ tax compliance and security features to protect your Montclair business data.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• NJ sales tax automation</li>
                <li>• Data backup & recovery</li>
                <li>• User access controls</li>
                <li>• Audit trail maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-graduation-cap text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training & Adoption</h3>
              <p className="text-gray-700 mb-4">Comprehensive training programs to ensure successful ERP adoption in your organization.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• End-user training</li>
                <li>• Administrator certification</li>
                <li>• Best practices workshops</li>
                <li>• Ongoing education</li>
              </ul>
            </div>
          </div>

          {/* Local Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Montclair Area Success Stories</h2>
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
                  <span className="ml-3 text-sm text-gray-600">Montclair Client</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Downtown Montclair Restaurant Group</h3>
                <p className="text-gray-700 mb-4">"SureDyn's local team understood our multi-location restaurant operations. Business Central now manages inventory across our 4 Montclair locations with real-time visibility. Food costs down 15%, and we can focus on customers instead of paperwork. When we had urgent issues, their <ContextualLink text="emergency QuickBooks help" href="/quickbooks-emergency-help-nj" /> was invaluable."</p>
                <p className="text-sm text-gray-600">Industry: Restaurant | Locations: 4 | ROI: 8 months</p>
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
                  <span className="ml-3 text-sm text-gray-600">Newark Client</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Newark Manufacturing Company</h3>
                <p className="text-gray-700 mb-4">"As a local Montclair company, SureDyn understood our proximity to NYC markets and the need for fast turnaround. Their Business Central implementation gave us real-time production tracking and automated reordering. On-time delivery improved to 99%."</p>
                <p className="text-sm text-gray-600">Industry: Manufacturing | Employees: 85 | Implementation: 12 weeks</p>
              </div>
            </div>
          </div>

          {/* Local Industries Served */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essex County Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-utensils text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Restaurants & Food Service</h4>
                <p className="text-sm text-gray-600">Multi-location inventory and cost management</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-shopping-cart text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Retail & E-commerce</h4>
                <p className="text-sm text-gray-600">Point-of-sale integration and online sales management</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-briefcase text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Professional Services</h4>
                <p className="text-sm text-gray-600">Project management and billing automation</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-industry text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Light Manufacturing</h4>
                <p className="text-sm text-gray-600">Production planning and quality control</p>
              </div>
            </div>
          </div>

          {/* Why Choose Local */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose a Local Montclair ERP Partner?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Advantages</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-map-marker-alt text-suredyn-orange mt-1 mr-3"></i>
                    <span>Understanding of Essex County business environment and challenges</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-clock text-suredyn-orange mt-1 mr-3"></i>
                    <span>Same-day onsite support available when needed</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-handshake text-suredyn-orange mt-1 mr-3"></i>
                    <span>Personal relationships and accountability to local community</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-gavel text-suredyn-orange mt-1 mr-3"></i>
                    <span>Deep knowledge of NJ tax regulations and compliance requirements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Market Understanding</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-city text-suredyn-orange mt-1 mr-3"></i>
                    <span>Experience serving NYC metro area customers with high expectations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-truck text-suredyn-orange mt-1 mr-3"></i>
                    <span>Understanding of proximity advantages to Newark Port and transportation hubs</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-users text-suredyn-orange mt-1 mr-3"></i>
                    <span>Network of local business relationships and referrals</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-graduation-cap text-suredyn-orange mt-1 mr-3"></i>
                    <span>Access to skilled local talent and resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <InternalLinkSection 
            pageType="local" 
            pageContext="montclair erp services"
            title="Additional Services Available in Montclair"
            className="mb-16"
          />

          {/* Local Contact CTA */}
          <div className="bg-suredyn-orange text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work with Your Local ERP Experts?</h2>
            <p className="text-xl mb-8">Serving Montclair and Essex County since 2008. Need immediate help? Try our <ContextualLink text="emergency services" href="/quickbooks-emergency-help-nj" className="text-white hover:text-yellow-300" />.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+17325855563" className="text-3xl font-bold hover:text-yellow-300 transition-colors">
                <i className="fas fa-phone mr-4"></i>+1-732-585-5563
              </a>
              <div className="text-lg">
                <p>Montclair Office</p>
                <p>123 Business Way, Montclair, NJ</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </div>
  );
}