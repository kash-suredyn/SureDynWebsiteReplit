import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import InternalLinkSection, { ContextualLink } from "@/components/common/InternalLinkSection";
import { SEOManager } from "@/lib/seoUtils";

export default function NJManufacturingDigitalRevolution() {
  useEffect(() => {
    SEOManager.setPageSEO({
      title: "New Jersey Manufacturing's Digital Revolution: How Local Companies Thrive with Business Central | SureDyn",
      description: "From Camden's chemical plants to Newark's logistics hubs—discover how 200+ New Jersey manufacturers use Business Central to compete globally while maintaining their Garden State competitive edge.",
      keywords: "New Jersey manufacturing ERP, Business Central manufacturing, Camden chemical plants ERP, Newark logistics software, NJ manufacturing digital transformation",
      canonical: "https://suredyn.com/blog/nj-manufacturing-digital-revolution-2025"
    });

    // Add Article structured data
    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "New Jersey Manufacturing's Digital Revolution: How Local Companies Thrive with Business Central",
      "description": "From Camden's chemical plants to Newark's logistics hubs—discover how 200+ New Jersey manufacturers use Business Central to compete globally while maintaining their Garden State competitive edge.",
      "author": {
        "@type": "Person",
        "name": "Michael Chen, NJ Manufacturing Consultant"
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15",
      "publisher": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "url": "https://suredyn.com"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://suredyn.com/blog/nj-manufacturing-digital-revolution-2025"
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
      {/* Breadcrumb */}
      <SEOBreadcrumb 
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "NJ Manufacturing Digital Revolution", href: "/blog/nj-manufacturing-digital-revolution-2025" }
        ]}
      />

      {/* Hero Section */}
      <AnimatedSection className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-suredyn-orange/10 text-suredyn-orange rounded-full text-sm font-semibold mb-4">
              New Jersey Manufacturing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              New Jersey Manufacturing's Digital Revolution
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              How Local Companies Thrive with Business Central
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>By Michael Chen, NJ Manufacturing Consultant</span>
              <span>•</span>
              <span>January 15, 2025</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="New Jersey Manufacturing Digital Transformation"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              From the chemical corridors of Camden to the bustling logistics hubs near Port Newark, New Jersey's manufacturing sector is experiencing a digital renaissance. Over 200 local manufacturers have discovered that Microsoft Dynamics 365 Business Central isn't just another ERP system—it's the competitive edge that allows them to serve demanding NYC and Philadelphia markets while maintaining the operational efficiency that defines Garden State business.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The New Jersey Manufacturing Landscape</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              New Jersey's unique position between two major metropolitan markets creates both opportunities and challenges. Manufacturing companies in areas like Iselin, Trenton, and Newark must balance high operational costs with the need for rapid response times to customers in Manhattan's financial district or Philadelphia's industrial corridors.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              "The proximity to Port Newark gives us incredible logistics advantages," explains Maria Rodriguez, Operations Director at a Linden-based automotive parts manufacturer. "But competing with lower-cost regions means we need every operational efficiency we can get. Business Central has been transformative for our just-in-time manufacturing processes."
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real Results from Garden State Companies</h2>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Camden Chemical Success Story</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A specialty chemical manufacturer in Camden reduced production planning time by 60% after implementing Business Central's advanced planning and scheduling modules. The company now serves customers from Boston to Baltimore with 99.2% on-time delivery rates.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>60% reduction in production planning time</li>
                <li>99.2% on-time delivery rate</li>
                <li>35% improvement in inventory turnover</li>
                <li>Real-time visibility across three NJ facilities</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Business Central Works for NJ Manufacturers</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Multi-Location Coordination</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many New Jersey manufacturers operate multiple facilities across the state. Business Central's multi-company and inter-company capabilities allow seamless coordination between a headquarters in Montclair, a production facility in Camden, and a distribution center near Newark Airport.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Compliance Made Simple</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              From EPA regulations affecting chemical manufacturers to FDA requirements for pharmaceutical companies, New Jersey's regulatory environment is complex. Business Central's built-in compliance tracking and reporting capabilities help manufacturers stay ahead of regulatory requirements while maintaining operational efficiency.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Supply Chain Optimization</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              With access to Port Newark and proximity to major highways, New Jersey manufacturers are perfectly positioned for supply chain excellence. Business Central's advanced warehouse management and logistics planning help companies maximize these geographic advantages.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation Lessons from 200+ Projects</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              After implementing Business Central for over 200 New Jersey manufacturers, we've identified key success factors:
            </p>

            <div className="bg-green-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices for NJ Manufacturers</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3">
                <li><strong>Start with Financial Integration:</strong> Connect your existing QuickBooks or legacy system first to ensure financial continuity</li>
                <li><strong>Plan for Peak Seasons:</strong> Configure systems to handle holiday rushes and seasonal demand fluctuations</li>
                <li><strong>Leverage Local Partnerships:</strong> Work with NJ-based consultants who understand state regulations and market dynamics</li>
                <li><strong>Focus on Mobile Access:</strong> Ensure warehouse and production floor workers can access real-time data</li>
                <li><strong>Implement Gradually:</strong> Phase rollouts across multiple facilities to minimize disruption</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Looking Ahead: Industry 4.0 in the Garden State</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              New Jersey manufacturers are increasingly adopting Industry 4.0 technologies. Business Central's integration with Azure IoT and Power Platform enables smart manufacturing initiatives that were previously available only to Fortune 500 companies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              "We're seeing manufacturers in Trenton and Camden implement predictive maintenance, real-time quality monitoring, and automated inventory replenishment," notes David Kim, Senior Manufacturing Consultant at SureDyn. "These technologies are leveling the playing field and helping New Jersey manufacturers compete globally."
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Take the Next Step</h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you're a family-owned manufacturer in Montclair or a multi-facility operation spanning Camden to Newark, Business Central can transform your operations. The question isn't whether digital transformation will come to New Jersey manufacturing—it's whether your company will lead the revolution or follow it.
            </p>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                MC
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
                <p className="text-gray-600">NJ Manufacturing Consultant</p>
                <p className="text-sm text-gray-500 mt-2">
                  Michael has guided over 150 New Jersey manufacturers through digital transformation, specializing in complex multi-facility implementations across Camden, Newark, and Trenton industrial corridors.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog">
              <span className="text-suredyn-orange hover:text-suredyn-orange-dark font-medium cursor-pointer">
                ← Back to Blog
              </span>
            </Link>
            <div className="flex space-x-4">
              <Link href="/contact">
                <span className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg font-medium cursor-pointer">
                  Get Implementation Help
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