import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import InternalLinkSection, { ContextualLink } from "@/components/common/InternalLinkSection";
import { SEOManager } from "@/lib/seoUtils";

export default function BusinessCentralImplementationNJ() {
  useEffect(() => {
    SEOManager.setPageSEO({
      title: "Business Central Implementation NJ | Microsoft Dynamics 365 Business Central Implementation | +1-732-585-5563",
      description: "Expert Microsoft Dynamics 365 Business Central implementation services in New Jersey. Certified consultants, proven methodology, 200+ successful implementations. Call for free consultation!",
      keywords: "Business Central implementation NJ, Microsoft Dynamics 365 Business Central implementation, Business Central consultant NJ, ERP implementation New Jersey, Business Central partner",
      canonical: "https://suredyn.com/business-central-implementation-nj"
    });

    const implementationData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Microsoft Dynamics 365 Business Central Implementation",
      "description": "Professional Business Central implementation services for New Jersey businesses",
      "provider": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "telephone": "+1-732-585-5563",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Montclair",
          "addressRegion": "NJ"
        }
      },
      "areaServed": ["New Jersey", "Montclair", "Newark", "Iselin", "Camden", "Trenton"],
      "serviceType": "ERP Implementation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business Central Implementation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Standard Implementation"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Rapid Implementation"
            }
          }
        ]
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-implementation-schema', 'true');
    script.textContent = JSON.stringify(implementationData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-implementation-schema="true"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <SEOBreadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "Business Central Implementation NJ", href: "/business-central-implementation-nj" }
        ]}
      />

      {/* Hero Section */}
      <AnimatedSection className="pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Business Central<br />
              <span className="text-suredyn-orange">Implementation</span> in NJ
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Microsoft Certified Business Central Implementation Experts
            </p>
            
            {/* Credibility Indicators */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">200+</div>
                  <p className="text-gray-700">Implementations</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">95%</div>
                  <p className="text-gray-700">On-Time Delivery</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">12 weeks</div>
                  <p className="text-gray-700">Average Go-Live</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">24/7</div>
                  <p className="text-gray-700">Support Included</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17325855563" className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                Call for Free Assessment
              </a>
              <Link href="/contact">
                <span className="bg-white border-2 border-suredyn-orange text-suredyn-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-suredyn-orange hover:text-white transition-colors cursor-pointer">
                  Get Implementation Quote
                </span>
              </Link>
            </div>
          </div>

          {/* Implementation Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-chart-line text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Financial Visibility</h3>
              <p className="text-gray-700">Live dashboards showing cash flow, profitability, and KPIs. Perfect for businesses upgrading from QuickBooks with our <ContextualLink text="QuickBooks migration service" href="/quickbooks-migration-service-nj" />.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-cogs text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-700">Automate invoicing, purchase orders, inventory management, and financial reporting. Reduce manual errors and save hours daily.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-mobile-alt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Business Management</h3>
              <p className="text-gray-700">Approve orders, check inventory, and manage operations from anywhere. Full functionality on phone or tablet.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-shield-alt text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-700">Bank-level security, automatic backups, and compliance features that protect your business and customer data.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-users text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unlimited User Growth</h3>
              <p className="text-gray-700">Add team members without user restrictions. Scale your operations efficiently.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-suredyn-orange mb-4">
                <i className="fas fa-globe text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Location Management</h3>
              <p className="text-gray-700">Coordinate operations across multiple New Jersey locations with centralized reporting and inventory management.</p>
            </div>
          </div>

          {/* Implementation Methodology */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Proven Implementation Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Discovery</h3>
                <p className="text-gray-700 text-xs">Business process analysis and requirements gathering</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Design</h3>
                <p className="text-gray-700 text-xs">System configuration and customization planning</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Development</h3>
                <p className="text-gray-700 text-xs">System setup, data migration, and integration</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Testing</h3>
                <p className="text-gray-700 text-xs">User acceptance testing and quality assurance</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Training</h3>
                <p className="text-gray-700 text-xs">Comprehensive user training and documentation</p>
              </div>
              <div className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">6</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Go-Live</h3>
                <p className="text-gray-700 text-xs">Deployment with ongoing support and optimization</p>
              </div>
            </div>
          </div>

          {/* Industry Experience */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">New Jersey Industry Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-industry text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Manufacturing</h4>
                <p className="text-sm text-gray-600">Camden, Newark, and Trenton manufacturing operations</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-truck text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Distribution</h4>
                <p className="text-sm text-gray-600">Port Newark logistics and warehouse management</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-pills text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Pharmaceutical</h4>
                <p className="text-sm text-gray-600">FDA compliance and quality management systems</p>
              </div>
              <div className="text-center">
                <div className="text-suredyn-orange mb-3">
                  <i className="fas fa-briefcase text-2xl"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Professional Services</h4>
                <p className="text-sm text-gray-600">Project management and time tracking solutions</p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">NJ Implementation Success Stories</h2>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Newark Manufacturing Solutions</h3>
                <p className="text-gray-700 mb-4">"SureDyn implemented Business Central across our three NJ facilities in 10 weeks. Real-time inventory visibility reduced our carrying costs by 30% and improved on-time delivery to 99.2%. The ROI was realized in 6 months. When we had issues, their <ContextualLink text="emergency support" href="/quickbooks-emergency-help-nj" /> was invaluable."</p>
                <p className="text-sm text-gray-600">Implementation: 10 weeks | ROI: 6 months | Industry: Manufacturing</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Montclair Distribution Center</h3>
                <p className="text-gray-700 mb-4">"Our multi-location operations needed real-time coordination. Business Central gave us visibility across all New Jersey warehouses. Monthly financial close went from 2 weeks to 3 days, and our operational efficiency improved dramatically."</p>
                <p className="text-sm text-gray-600">Implementation: 12 weeks | ROI: 8 months | Industry: Distribution</p>
              </div>
            </div>
          </div>

          {/* Project Rescue Specialist Callout */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg shadow-lg mb-16 border-l-4 border-red-600">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-shield-alt text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Business Central Project Rescue Specialists</h3>
                <p className="text-gray-600">50+ rescued implementations • 95% success rate</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Implementation not going as planned? Our specialized rescue team has saved over 50 troubled Business Central projects. We step in when vendors abandon projects, budgets spiral out of control, or core functions aren't working. Don't let a failed implementation sink your business.
            </p>
            <Link href="/erp-implementation-problems-rescue-nj">
              <span className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                Get Emergency Project Assessment
              </span>
            </Link>
          </div>

          {/* Why Choose SureDyn */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose SureDyn for Your Implementation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local New Jersey Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-suredyn-orange mt-1 mr-3"></i>
                    <span>Three NJ offices: Montclair, Iselin, and Dublin OH for regional support</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-suredyn-orange mt-1 mr-3"></i>
                    <span>Deep understanding of NJ tax complexity and compliance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-suredyn-orange mt-1 mr-3"></i>
                    <span>Experience with Port Newark logistics and multi-location operations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Microsoft Certified Team</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-suredyn-orange mt-1 mr-3"></i>
                    <span>Microsoft Gold Partner with certified Business Central consultants</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-suredyn-orange mt-1 mr-3"></i>
                    <span>Proven methodology with 95% on-time delivery rate</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-suredyn-orange mt-1 mr-3"></i>
                    <span>Comprehensive post-implementation support and training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <InternalLinkSection 
            pageType="service" 
            pageContext="business-central implementation"
            title="Related Implementation Services"
            className="mb-16"
          />

          {/* Call to Action */}
          <div className="bg-suredyn-orange text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">Get your free Business Central implementation assessment today. Serving businesses from our <ContextualLink text="Montclair office" href="/erp-services-montclair-nj" className="text-white hover:text-yellow-300" />.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:+17325855563" className="text-3xl font-bold hover:text-yellow-300 transition-colors">
                <i className="fas fa-phone mr-4"></i>+1-732-585-5563
              </a>
              <div className="text-lg">
                <p>Free Business Assessment</p>
                <p>No Obligation Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </div>
  );
}