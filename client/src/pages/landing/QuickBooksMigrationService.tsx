import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import InternalLinkSection, { ContextualLink } from "@/components/common/InternalLinkSection";
import { SEOManager } from "@/lib/seoUtils";

export default function QuickBooksMigrationService() {
  useEffect(() => {
    SEOManager.setPageSEO({
      title: "QuickBooks to Business Central Migration Service NJ | Expert QuickBooks Migration | +1-732-585-5563",
      description: "Professional QuickBooks to Microsoft Business Central migration services in NJ. Zero data loss, minimal downtime. 150+ successful migrations. Free consultation call now!",
      keywords: "QuickBooks migration service NJ, QuickBooks to Business Central migration, QuickBooks upgrade service, ERP migration experts, QuickBooks data migration",
      canonical: "https://suredyn.com/quickbooks-migration-service-nj"
    });

    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "QuickBooks to Business Central Migration Service",
      "description": "Professional QuickBooks migration to Microsoft Dynamics 365 Business Central",
      "provider": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "telephone": "+1-732-585-5563"
      },
      "areaServed": "New Jersey",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "QuickBooks Migration Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "QuickBooks Pro Migration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "QuickBooks Enterprise Migration"
            }
          }
        ]
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-service-schema', 'true');
    script.textContent = JSON.stringify(serviceData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-service-schema="true"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <SEOBreadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "QuickBooks Migration Service", href: "/quickbooks-migration-service-nj" }
        ]}
      />

      {/* Hero Section */}
      <AnimatedSection className="pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              QuickBooks Migration<br />
              <span className="text-suredyn-orange">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Professional QuickBooks to Business Central Migration in New Jersey
            </p>
            
            {/* Value Proposition */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">150+</div>
                  <p className="text-gray-700">Successful Migrations</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">0%</div>
                  <p className="text-gray-700">Data Loss Rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">48hrs</div>
                  <p className="text-gray-700">Average Migration Time</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17325855563" className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Call for Free Consultation
              </a>
              <Link href="/contact">
                <span className="bg-white border-2 border-suredyn-orange text-suredyn-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-suredyn-orange hover:text-white transition-colors cursor-pointer">
                  Get Migration Quote
                </span>
              </Link>
            </div>
          </div>

          {/* Migration Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-rocket text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outgrow QuickBooks Limits</h3>
              <p className="text-gray-700">No more user restrictions, file size limits, or feature constraints. Our <ContextualLink text="Business Central implementation" href="/business-central-implementation-nj" /> scales with your growth.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-shield-alt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-700">Enterprise-grade security, automatic backups, and cloud protection that QuickBooks can't match.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-chart-line text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Analytics</h3>
              <p className="text-gray-700">Live dashboards, automated reporting, and business intelligence that transforms decision-making.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-mobile-alt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Access</h3>
              <p className="text-gray-700">Work from anywhere with full mobile functionality. Approve orders, check inventory, and manage finances on the go.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-cogs text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Automation</h3>
              <p className="text-gray-700">Automate invoicing, inventory management, and financial processes that require manual work in QuickBooks.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-users text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unlimited Users</h3>
              <p className="text-gray-700">Add team members without user restrictions. Scale your operations efficiently.</p>
            </div>
          </div>

          {/* Migration Process */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Proven Migration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-700 text-sm">Complete analysis of your QuickBooks data and business processes</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-700 text-sm">Custom migration plan with zero-downtime strategy</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Data Transfer</h3>
                <p className="text-gray-700 text-sm">Secure migration of all financial data, customers, vendors, and history</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-gray-900 mb-2">Testing</h3>
                <p className="text-gray-700 text-sm">Thorough validation to ensure 100% data accuracy and functionality</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-bold text-gray-900 mb-2">Go-Live</h3>
                <p className="text-gray-700 text-sm">Seamless transition with training and ongoing support</p>
              </div>
            </div>
          </div>

          {/* What We Migrate */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Data Migration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Customers & Vendors</h4>
                <p className="text-sm text-gray-600">Complete contact information, payment terms, and transaction history</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-boxes text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Products & Inventory</h4>
                <p className="text-sm text-gray-600">Items, pricing, quantities, and warehouse locations</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-file-invoice-dollar text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Financial Data</h4>
                <p className="text-sm text-gray-600">Chart of accounts, transactions, and multi-year financial history</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-cog text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Custom Settings</h4>
                <p className="text-sm text-gray-600">Preferences, templates, and business rules</p>
              </div>
            </div>
          </div>

          {/* Rescue Specialist Notice */}
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-16">
            <div className="flex items-start">
              <i className="fas fa-info-circle text-red-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Migration Problems? We're Rescue Specialists Too</h3>
                <p className="text-gray-700 mb-3">
                  If your QuickBooks migration has gone wrong or stalled, our Business Central project rescue team can help. We've saved 50+ failed migrations and implementations.
                </p>
                <Link href="/erp-implementation-problems-rescue-nj">
                  <span className="text-red-600 hover:text-red-700 font-semibold cursor-pointer">
                    Get Migration Rescue Help →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">NJ Migration Success Stories</h2>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Newark Manufacturing Company</h3>
                <p className="text-gray-700 mb-4">"Our QuickBooks Enterprise was hitting every limit. SureDyn migrated 8 years of data in one weekend. Now we have real-time inventory across three warehouses and automated purchase orders. ROI was achieved in 4 months. Their <ContextualLink text="Montclair ERP services" href="/erp-services-montclair-nj" /> team provided excellent local support."</p>
                <p className="text-sm text-gray-600">Migration completed: 36 hours | Zero downtime</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Montclair Distribution</h3>
                <p className="text-gray-700 mb-4">"QuickBooks couldn't handle our multi-location operations. Business Central migration gave us real-time visibility across all locations. Monthly close went from 2 weeks to 3 days."</p>
                <p className="text-sm text-gray-600">Migration completed: 48 hours | All locations synchronized</p>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <InternalLinkSection 
            pageType="service" 
            pageContext="quickbooks migration business-central"
            title="Additional Services You May Need"
            className="mb-16"
          />

          {/* Call to Action */}
          <div className="bg-suredyn-orange text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Outgrow QuickBooks?</h2>
            <p className="text-xl mb-8">Get your free migration assessment and quote today. Need immediate help? Try our <ContextualLink text="emergency QuickBooks help" href="/quickbooks-emergency-help-nj" className="text-white hover:text-yellow-300" /> service.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+17325855563" className="text-3xl font-bold hover:text-yellow-300 transition-colors">
                <i className="fas fa-phone mr-4"></i>+1-732-585-5563
              </a>
              <div className="text-lg">
                <p>Free Consultation</p>
                <p>No Obligation Quote</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </div>
  );
}