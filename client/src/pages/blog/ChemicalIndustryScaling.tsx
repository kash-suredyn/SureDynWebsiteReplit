import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import { SEOManager } from "@/lib/seoUtils";

export default function ChemicalIndustryScaling() {
  useEffect(() => {
    SEOManager.setPageSEO({
      title: "Chemical Industry Scaling: Camden to Global with Business Central | SureDyn",
      description: "How a Camden chemical manufacturer grew from local supplier to international player using Business Central's multi-currency and compliance features.",
      keywords: "Camden chemical manufacturing, chemical industry ERP, global chemical business, multi-currency ERP, chemical compliance software",
      canonical: "https://suredyn.com/blog/chemical-industry-scaling-camden-global-2025"
    });

    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Chemical Industry Scaling: Camden to Global with Business Central",
      "description": "How a Camden chemical manufacturer grew from local supplier to international player using Business Central's multi-currency and compliance features.",
      "author": {
        "@type": "Person",
        "name": "James Wilson, Chemical Industry Expert"
      },
      "datePublished": "2025-01-03",
      "dateModified": "2025-01-03",
      "publisher": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "url": "https://suredyn.com"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-article-schema', 'true');
    script.textContent = JSON.stringify(articleData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-article-schema="true"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOBreadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "Chemical Industry Scaling", href: "/blog/chemical-industry-scaling-camden-global-2025" }
        ]}
      />

      <AnimatedSection className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Chemical Industry
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Chemical Industry Scaling
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Camden to Global with Business Central
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>By James Wilson, Chemical Industry Expert</span>
              <span>•</span>
              <span>January 3, 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>

          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Chemical Manufacturing Facility"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Five years ago, Camden Chemical Solutions was a regional specialty chemical manufacturer serving pharmaceutical companies within a 200-mile radius of their Camden facility. Today, they export to 23 countries, manage operations across four continents, and have grown revenue by 800%. The transformation didn't happen overnight, but it was enabled by a strategic decision to implement Microsoft Dynamics 365 Business Central—and more importantly, to use it as a platform for global growth rather than just operational efficiency.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Local Foundation</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Camden Chemical Solutions started in 1998 as a custom synthesis operation, serving pharmaceutical companies that needed specialized intermediates and active pharmaceutical ingredients. Their location in Camden's industrial corridor provided access to Port Newark for raw material imports and proximity to major pharmaceutical companies in New Jersey and Pennsylvania.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              For fifteen years, this regional focus served them well. They built strong relationships with local customers, developed expertise in complex synthetic chemistry, and earned a reputation for quality and reliability. But by 2020, they faced a ceiling: domestic pharmaceutical manufacturing was consolidating, and their customer base was shrinking.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Global Opportunity</h2>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Research Findings</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Global pharmaceutical intermediates market growing at 8.2% annually</li>
                <li>Emerging markets showing 15%+ growth in API demand</li>
                <li>Supply chain diversification creating opportunities for new suppliers</li>
                <li>Regulatory compliance giving established manufacturers advantages</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              The opportunity was clear, but the challenges were daunting. International sales required multi-currency capabilities, complex compliance tracking, international shipping coordination, and financial reporting across multiple jurisdictions. Their existing QuickBooks-based system couldn't handle any of these requirements.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Business Central Was the Right Choice</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Multi-Currency Excellence</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Business Central's multi-currency capabilities weren't an afterthought—they were built from the ground up for global operations. The system handles exchange rate fluctuations, hedging transactions, and multi-currency reporting with sophisticated controls that prevent the accounting errors that can devastate profit margins.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Compliance Automation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Chemical manufacturing involves complex regulatory requirements that vary by country. Business Central's configurable compliance tracking handles everything from EPA reporting in the US to REACH compliance in Europe to export control documentation for international shipments.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Supply Chain Coordination</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              International operations require coordinating raw materials from multiple countries, production scheduling across time zones, and distribution to customers worldwide. Business Central's planning and scheduling tools make this coordination manageable rather than chaotic.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Expansion Journey</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Phase 1: First International Sale (Month 6)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Their first international order came from a pharmaceutical company in Germany—€180,000 for a specialized intermediate compound. The order required letters of credit, export documentation, customs declarations, and careful coordination with freight forwarders. Business Central handled all aspects seamlessly.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Phase 2: European Market Entry (Year 1)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Success with the German customer led to referrals throughout Europe. Business Central's REACH compliance tracking and multi-language capabilities enabled them to serve customers in France, Italy, and Switzerland while maintaining full regulatory compliance.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Phase 3: Asian Market Expansion (Year 2)</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Expansion into Asian markets required different approaches—longer payment terms, different packaging requirements, and complex shipping arrangements. Business Central's flexible contract management and shipping integration made these markets accessible.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Operational Transformation</h2>

            <div className="bg-green-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-suredyn-orange">23</p>
                  <p className="text-gray-700">Countries served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-suredyn-orange">800%</p>
                  <p className="text-gray-700">Revenue growth</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-suredyn-orange">12</p>
                  <p className="text-gray-700">Currencies handled</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-suredyn-orange">99.8%</p>
                  <p className="text-gray-700">On-time delivery rate</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Technical Implementation Details</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Currency Management</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The system automatically updates exchange rates multiple times daily and applies appropriate rates to transactions based on customer terms. Forward contract management helps hedge against currency fluctuations on large orders with extended delivery schedules.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Document Automation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              International shipments require extensive documentation. Business Central automatically generates commercial invoices, packing lists, certificates of origin, and safety data sheets in appropriate languages and formats for each destination country.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Compliance Tracking</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Every product has detailed compliance profiles for different markets. The system prevents shipments to countries where products aren't approved and automatically generates required regulatory reports for various jurisdictions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Challenges and Solutions</h2>

            <div className="bg-yellow-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Global Expansion Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li><strong>Payment Terms:</strong> Asian customers often require 90-120 day terms vs. 30 days domestic</li>
                <li><strong>Quality Standards:</strong> Different countries have varying testing and certification requirements</li>
                <li><strong>Shipping Logistics:</strong> International freight requires coordination with multiple carriers and customs agents</li>
                <li><strong>Time Zone Management:</strong> Customer service and technical support across 12+ time zones</li>
                <li><strong>Cultural Adaptation:</strong> Business practices vary significantly between markets</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Financial Impact</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The financial transformation has been dramatic. International sales now represent 75% of total revenue, with gross margins 20-30% higher than domestic sales due to the specialized nature of their products and limited global competition.
            </p>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Five-Year Financial Summary</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>2020: $8.2M revenue, 100% domestic</li>
                <li>2021: $12.4M revenue, 15% international</li>
                <li>2022: $21.8M revenue, 35% international</li>
                <li>2023: $42.1M revenue, 60% international</li>
                <li>2024: $73.6M revenue, 75% international</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Lessons for Other Manufacturers</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Camden Chemical's success offers several key lessons for other manufacturers considering global expansion:
            </p>

            <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-8">
              <li><strong>Technology Enables Strategy:</strong> Global expansion isn't possible without systems that can handle international complexity</li>
              <li><strong>Start with Compliance:</strong> Understanding regulatory requirements in target markets is essential before making first sales</li>
              <li><strong>Build Relationships Gradually:</strong> International business is relationship-based; invest time in building trust</li>
              <li><strong>Plan for Currency Risk:</strong> Exchange rate fluctuations can eliminate profit margins if not properly managed</li>
              <li><strong>Invest in Quality:</strong> International customers have high expectations and limited tolerance for quality issues</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Future of Global Chemical Manufacturing</h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Camden Chemical Solutions continues to expand, with plans for manufacturing facilities in Europe and Asia to serve local markets more effectively. Business Central provides the platform to coordinate these global operations while maintaining the quality and compliance standards that enabled their initial success. For New Jersey manufacturers with global ambitions, their story demonstrates that geographic expansion isn't limited by company size—it's enabled by the right technology foundation.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                JW
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">James Wilson</h3>
                <p className="text-gray-600">Chemical Industry Expert</p>
                <p className="text-sm text-gray-500 mt-2">
                  James has 20+ years in chemical manufacturing and has helped dozens of companies expand internationally through strategic ERP implementations.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog">
              <span className="text-suredyn-orange hover:text-suredyn-orange-dark font-medium cursor-pointer">
                ← Back to Blog
              </span>
            </Link>
            <div className="flex space-x-4">
              <Link href="/contact">
                <span className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg font-medium cursor-pointer">
                  Plan Your Global Expansion
                </span>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </div>
  );
}