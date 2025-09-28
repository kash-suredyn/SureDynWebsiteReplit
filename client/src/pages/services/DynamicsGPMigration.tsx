import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import { useSEO } from "@/lib/seoUtils";

export default function DynamicsGPMigration() {
  const { setPageSEO, generateServiceSchema } = useSEO('dynamics_gp_migration');

  useEffect(() => {
    // Set comprehensive SEO data
    setPageSEO();
    
    // Add service-specific structured data
    const serviceSchema = generateServiceSchema(
      'Dynamics GP to Business Central Migration',
      'Professional migration services from Microsoft Dynamics GP to Business Central with preserved data integrity and enhanced cloud capabilities.',
      'Contact for pricing'
    );
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-service-schema', 'true');
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-service-schema="true"]');
      if (existingScript) existingScript.remove();
    };
  }, []);
  return (
    <div className="min-h-screen">
      <SEOBreadcrumb />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Dynamics GP to
              <span className="text-suredyn-orange block">Business Central Migration</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Modernize your legacy Dynamics GP system with a seamless migration to cloud-based Business Central, preserving your data and enhancing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start GP Migration
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Free Migration Assessment
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Migrate */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Migrate from Dynamics GP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While Dynamics GP has served you well, Business Central offers modern cloud capabilities and continued Microsoft support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dynamics GP Challenges</h3>
              <div className="space-y-4">
                {[
                  "Limited mainstream support ending",
                  "On-premises infrastructure costs",
                  "Manual update and maintenance",
                  "Limited mobile capabilities", 
                  "Restricted cloud integration",
                  "Aging user interface",
                  "Limited modern analytics",
                  "Complex customization management"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-exclamation-triangle text-yellow-500 mr-3"></i>
                    <span className="text-gray-600">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Central Benefits</h3>
              <div className="space-y-4">
                {[
                  "Full Microsoft support and updates",
                  "Cloud-first architecture reduces IT costs",
                  "Automatic updates and maintenance",
                  "Native mobile applications",
                  "Seamless Microsoft 365 integration",
                  "Modern, intuitive user interface",
                  "Built-in Power BI analytics",
                  "Simplified extension management"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our GP to Business Central Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology for successful Dynamics GP migration with minimal business disruption.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "System Analysis",
                description: "Comprehensive audit of GP customizations, integrations, and business processes.",
                timeline: "2 Weeks"
              },
              {
                step: "2", 
                title: "Migration Design",
                description: "Detailed migration strategy including data mapping and functionality alignment.",
                timeline: "2 Weeks"
              },
              {
                step: "3",
                title: "Environment Setup", 
                description: "Business Central environment configuration and customization development.",
                timeline: "3-4 Weeks"
              },
              {
                step: "4",
                title: "Data Migration",
                description: "Secure transfer of all GP data with validation and integrity verification.",
                timeline: "2-3 Weeks"
              },
              {
                step: "5",
                title: "Testing & Go-Live",
                description: "User training, comprehensive testing, and managed system cutover.",
                timeline: "3 Weeks"
              }
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 100} className="text-center">
                <div className="bg-suredyn-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                <div className="bg-suredyn-orange/10 text-suredyn-orange px-3 py-1 rounded-full text-xs font-semibold">
                  {step.timeline}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Data Migration Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete GP Data Migration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We migrate all your Dynamics GP data and configurations with 100% accuracy.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Master Data",
                items: ["Chart of Accounts", "Customer Master", "Vendor Master", "Item Master", "Employee Data"]
              },
              {
                category: "Transactional Data",
                items: ["Historical Transactions", "Open Documents", "Work in Process", "Sales History", "Purchase History"]
              },
              {
                category: "Financial Data",
                items: ["General Ledger", "Budget Data", "Multicurrency", "Fixed Assets", "Bank Reconciliation"]
              },
              {
                category: "System Configuration",
                items: ["User Preferences", "Security Roles", "Workflow Configurations", "Report Customizations", "Form Modifications"]
              },
              {
                category: "Integration Points",
                items: ["Third-party Connections", "Data Flows", "Custom Reports", "Automated Processes", "API Integrations"]
              },
              {
                category: "Historical Reporting",
                items: ["Aged Trial Balance", "Financial Statements", "Tax Reporting", "Audit Trails", "Compliance Reports"]
              }
            ].map((category, index) => (
              <AnimatedSection key={index} delay={index * 100} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
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
              Ready to Modernize Your GP System?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Migrate to Business Central and gain modern cloud capabilities while preserving your GP investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start GP Migration Project
                </button>
              </Link>
              <button className="border-2 border-suredyn-orange text-suredyn-orange hover:bg-suredyn-orange hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Migration Guide
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}