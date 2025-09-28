import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import { useSEO } from "@/lib/seoUtils";

export default function QuickBooksMigration() {
  const { setPageSEO, generateServiceSchema } = useSEO('quickbooks_migration');

  useEffect(() => {
    // Set comprehensive SEO data
    setPageSEO();
    
    // Add service-specific structured data
    const serviceSchema = generateServiceSchema(
      'QuickBooks to Business Central Migration',
      'Professional migration service from QuickBooks to Microsoft Dynamics 365 Business Central with complete data preservation and training.',
      'Contact for pricing'
    );
    
    // Add FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does QuickBooks to Business Central migration take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical QuickBooks to Business Central migration takes 2-4 weeks depending on data complexity and customizations."
          }
        },
        {
          "@type": "Question", 
          "name": "Will I lose any data during migration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, our proven migration methodology ensures 100% data integrity with comprehensive validation and testing."
          }
        },
        {
          "@type": "Question",
          "name": "What QuickBooks versions can be migrated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We migrate from all QuickBooks versions including Desktop, Online, Pro, Premier, and Enterprise editions."
          }
        }
      ]
    };

    // Remove existing schemas
    const existingService = document.querySelector('script[data-service-schema="true"]');
    if (existingService) existingService.remove();
    
    const existingFaq = document.querySelector('script[data-faq-schema="true"]');
    if (existingFaq) existingFaq.remove();

    // Add service schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-service-schema', 'true');
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);

    // Add FAQ schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-faq-schema', 'true');
    faqScript.textContent = JSON.stringify(faqData);
    document.head.appendChild(faqScript);

    return () => {
      const serviceEl = document.querySelector('script[data-service-schema="true"]');
      if (serviceEl) serviceEl.remove();
      const faqEl = document.querySelector('script[data-faq-schema="true"]');
      if (faqEl) faqEl.remove();
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
              QuickBooks to
              <span className="text-suredyn-orange block">Dynamics 365 Migration</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate from QuickBooks to Microsoft Dynamics 365 Business Central with complete data integrity and minimal business disruption. Serving New Jersey businesses with local expertise in manufacturing, distribution, and professional services across Essex, Middlesex, and Union counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Migration
                </button>
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200">
                Free Migration Assessment
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* New Jersey Business Context */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving New Jersey's Growing Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From Montclair's vibrant business district to Newark's manufacturing hub, we've helped 500+ New Jersey companies overcome QuickBooks limitations and scale their operations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-suredyn-orange text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing Companies</h3>
              <p className="text-gray-600 mb-4">New Jersey manufacturers from Trenton to Camden struggle with QuickBooks' lack of production planning and inventory tracking.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Bill of Materials management</li>
                <li>• Production scheduling</li>
                <li>• Multi-location inventory</li>
                <li>• Quality control tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-suredyn-orange text-3xl mb-4">🚛</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Distribution Centers</h3>
              <p className="text-gray-600 mb-4">Logistics companies serving NYC and Philadelphia markets need advanced warehouse management beyond QuickBooks capabilities.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Warehouse management</li>
                <li>• Pick/pack optimization</li>
                <li>• EDI integrations</li>
                <li>• Real-time tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-suredyn-orange text-3xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Services</h3>
              <p className="text-gray-600 mb-4">Growing firms in Princeton and Jersey City require project management and resource planning tools QuickBooks cannot provide.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Project profitability</li>
                <li>• Time & expense tracking</li>
                <li>• Resource allocation</li>
                <li>• Client billing automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Migration Problems Specific to 2024 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common QuickBooks Migration Challenges (2024)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on our experience with 150+ New Jersey migrations in 2024, these are the most frequent problems businesses encounter—and how we solve them.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <i className="fas fa-exclamation-triangle mr-3"></i>
                Data Mapping Disasters
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-semibold">Problem:</p>
                  <p>QuickBooks and Business Central have fundamentally different data structures. Account numbers, tax configurations, and transaction histories often fail to transfer correctly.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-semibold text-green-700">SureDyn Solution:</p>
                  <p>Our certified data migration specialists perform comprehensive account mapping, ensuring all general ledger accounts have proper numbering before migration begins.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <i className="fas fa-database mr-3"></i>
                Balance Sheet Corruption
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-semibold">Problem:</p>
                  <p>Historical balance sheets become completely wrong after migration. Opening balances don't match, and entries aren't posting properly in Business Central.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-semibold text-green-700">SureDyn Solution:</p>
                  <p>We perform multi-step validation testing and correct beginning balances before go-live, ensuring financial accuracy from day one.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <i className="fas fa-file-alt mr-3"></i>
                Partial Payment Problems
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-semibold">Problem:</p>
                  <p>Migration tools only transfer full invoice amounts, not partial payments. A $500 invoice with $300 paid shows as fully unpaid in Business Central.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-semibold text-green-700">SureDyn Solution:</p>
                  <p>We identify all partially paid transactions before migration and apply outstanding amounts manually, maintaining accurate AR/AP balances.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <i className="fas fa-paperclip mr-3"></i>
                Lost Document Attachments
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-semibold">Problem:</p>
                  <p>QuickBooks stores attachments in local folders. After migration, these critical documents (contracts, receipts) disappear because Business Central can't access local directories.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-semibold text-green-700">SureDyn Solution:</p>
                  <p>We extract and reorganize all document attachments, uploading them to Business Central's cloud storage with proper transaction linking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Migrate */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Migrate from QuickBooks?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When your business outgrows QuickBooks limitations, Business Central provides the scalability and functionality you need.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">QuickBooks Limitations</h3>
              <div className="space-y-4">
                {[
                  "Limited user capacity (25-40 users max)",
                  "No real-time multi-user access",
                  "Basic inventory management",
                  "Limited reporting capabilities",
                  "No manufacturing modules",
                  "Lack of workflow automation",
                  "Poor integration capabilities",
                  "No built-in CRM functionality"
                ].map((limitation, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-times-circle text-red-500 mr-3"></i>
                    <span className="text-gray-600">{limitation}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Central Advantages</h3>
              <div className="space-y-4">
                {[
                  "Unlimited users with role-based access",
                  "Real-time collaboration and access",
                  "Advanced inventory and warehouse management",
                  "Comprehensive business intelligence",
                  "Full manufacturing capabilities",
                  "Powerful workflow automation",
                  "Extensive integration ecosystem",
                  "Built-in CRM and sales management"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className="text-gray-600">{advantage}</span>
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
              Our QuickBooks Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodology for seamless QuickBooks to Business Central migration with zero data loss.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Data Assessment",
                description: "Comprehensive analysis of your QuickBooks data, customizations, and business processes.",
                timeline: "1 Week"
              },
              {
                step: "2",
                title: "Migration Planning",
                description: "Detailed migration strategy including data mapping, timeline, and testing procedures.",
                timeline: "1 Week"
              },
              {
                step: "3",
                title: "Data Migration",
                description: "Secure transfer of all QuickBooks data with validation and integrity checks.",
                timeline: "2-3 Weeks"
              },
              {
                step: "4",
                title: "Testing & Go-Live",
                description: "Comprehensive testing, user training, and managed system go-live support.",
                timeline: "2 Weeks"
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

      {/* Data Migration Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Data Migration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We migrate all your QuickBooks data with 100% accuracy and integrity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Financial Data",
                items: ["Chart of Accounts", "General Ledger", "Trial Balance", "Journal Entries", "Bank Reconciliations"]
              },
              {
                category: "Customer Data",
                items: ["Customer Information", "Sales History", "Outstanding Invoices", "Payment Terms", "Credit Limits"]
              },
              {
                category: "Vendor Data",
                items: ["Vendor Information", "Purchase History", "Outstanding Bills", "Payment Terms", "1099 Information"]
              },
              {
                category: "Inventory Data",
                items: ["Item Master", "Inventory Levels", "Cost Information", "Pricing", "Inventory Adjustments"]
              },
              {
                category: "Transaction History",
                items: ["Sales Transactions", "Purchase Transactions", "Payment History", "Deposit Records", "Transfer Records"]
              },
              {
                category: "Payroll Data",
                items: ["Employee Information", "Payroll History", "Tax Information", "Benefits Data", "Time Tracking"]
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
              Ready to Outgrow QuickBooks?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Migrate to Business Central and unlock enterprise-level capabilities for your growing business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Start Migration Project
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