import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import { SEOManager } from "@/lib/seoUtils";

export default function MontclairNYCServing() {
  useEffect(() => {
    SEOManager.setPageSEO({
      title: "Montclair to Manhattan: Serving NYC Markets with Real-Time ERP | SureDyn",
      description: "Case study: How a Montclair distribution company uses Business Central to serve demanding NYC customers with 2-hour delivery windows.",
      keywords: "Montclair to Manhattan delivery, NYC ERP delivery, Business Central logistics, real-time delivery tracking, NYC customer service",
      canonical: "https://suredyn.com/blog/montclair-to-manhattan-nyc-markets-2025"
    });

    const articleData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Montclair to Manhattan: Serving NYC Markets with Real-Time ERP",
      "description": "Case study: How a Montclair distribution company uses Business Central to serve demanding NYC customers with 2-hour delivery windows.",
      "author": {
        "@type": "Person",
        "name": "Emily Rodriguez, Operations Consultant"
      },
      "datePublished": "2025-01-05",
      "dateModified": "2025-01-05",
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
          { name: "Montclair to Manhattan", href: "/blog/montclair-to-manhattan-nyc-markets-2025" }
        ]}
      />

      <AnimatedSection className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Montclair to Manhattan
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Serving NYC Markets with Real-Time ERP
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>By Emily Rodriguez, Operations Consultant</span>
              <span>•</span>
              <span>January 5, 2025</span>
              <span>•</span>
              <span>9 min read</span>
            </div>
          </div>

          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="NYC Delivery Operations"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At 6:47 AM on a Tuesday morning, Maria Santos received an urgent text from one of Manhattan's busiest restaurants: "Need 50 cases of organic produce by 9 AM for lunch prep. Can you make it happen?" Twenty minutes later, the order was confirmed, picked, and en route from Montclair to Midtown—all managed through Microsoft Dynamics 365 Business Central. This is the story of how Garden State Distributors transformed from a struggling regional supplier into Manhattan's go-to source for same-day delivery.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Manhattan Challenge</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              New York City customers don't just want fast service—they demand it. Restaurants need ingredients before morning prep. Office buildings require supplies before business hours. Construction sites need materials to avoid costly delays. And unlike suburban customers who might accept a 4-hour delivery window, Manhattan operates on a different timeline entirely.
            </p>

            <div className="bg-red-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Reality of NYC Delivery</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Average delivery window: 2 hours maximum</li>
                <li>Rush hour delays can add 90 minutes to routes</li>
                <li>Parking restrictions change hourly in many districts</li>
                <li>Failed deliveries cost $200+ in driver time and fuel</li>
                <li>Competition is fierce—customers switch vendors for single late delivery</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Before Business Central: Constant Crisis</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Garden State Distributors was fighting fires daily. Orders came in via phone calls, emails, and texts. Inventory visibility was limited to what warehouse workers could physically see. Route planning happened on whiteboards. Customer service reps spent more time apologizing than selling.
            </p>

            <div className="bg-gray-100 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Old Process (Pain Points)</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3">
                <li><strong>Manual Order Entry:</strong> Orders transcribed from voicemails, prone to errors</li>
                <li><strong>Inventory Guesswork:</strong> No real-time stock levels, frequent overselling</li>
                <li><strong>Route Chaos:</strong> Drivers planned their own routes, often inefficiently</li>
                <li><strong>Communication Gaps:</strong> Customers had no visibility into order status</li>
                <li><strong>Financial Headaches:</strong> Invoicing and collections were weeks behind</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Business Central Transformation</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Real-Time Inventory Visibility</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The first game-changer was real-time inventory. Sales reps could see exact stock levels while talking to customers. No more promising products that weren't available. No more disappointed customers.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intelligent Route Optimization</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Business Central's route planning considers traffic patterns, delivery time preferences, and truck capacity. A route that used to take 8 hours now completes in 5.5 hours with better customer service.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Customer Portal Integration</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Manhattan customers can now place orders online, track deliveries in real-time, and receive automated updates. The panicked phone calls stopped because customers had visibility.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Results That Matter</h2>

            <div className="bg-green-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Measurable Improvements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-suredyn-orange">98.4%</p>
                  <p className="text-gray-700">On-time delivery rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-suredyn-orange">2.1 hrs</p>
                  <p className="text-gray-700">Average order-to-delivery time</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-suredyn-orange">67%</p>
                  <p className="text-gray-700">Reduction in customer service calls</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-suredyn-orange">$180K</p>
                  <p className="text-gray-700">Annual fuel savings</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">A Day in the Life: The New Process</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6:00 AM - Order Processing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Overnight orders automatically flow into Business Central. The system has already checked inventory, reserved products, and suggested optimal pick sequences for warehouse staff.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7:30 AM - Route Optimization</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Business Central analyzes current traffic conditions, customer time preferences, and truck capacity to create optimal delivery routes. Drivers receive routes on mobile devices with real-time updates.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8:45 AM - Emergency Order</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When that urgent restaurant order came in, the system immediately checked nearby inventory, found space on a truck already heading to Midtown, and rerouted the driver via GPS. The customer received a delivery confirmation within minutes of ordering.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2:00 PM - Customer Satisfaction</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Customers receive automatic delivery confirmations with photos and electronic proof of delivery. Invoices are generated immediately and emailed. Payment processing happens seamlessly through integrated systems.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Technology Behind the Magic</h2>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Integration Points</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li><strong>GPS Fleet Tracking:</strong> Real-time vehicle location and route optimization</li>
                <li><strong>Mobile Warehouse:</strong> Barcode scanning and real-time inventory updates</li>
                <li><strong>Customer Portal:</strong> Online ordering, tracking, and account management</li>
                <li><strong>Payment Processing:</strong> Automated invoicing and credit card processing</li>
                <li><strong>Traffic APIs:</strong> Dynamic route adjustment based on current conditions</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Scaling Success</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              What started as survival—competing for demanding Manhattan customers—has become a significant competitive advantage. Garden State Distributors now serves customers throughout the tri-state area using the same operational excellence that works in New York City.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              "If you can make it work in Manhattan, you can make it work anywhere," laughs Maria Santos, now the company's Operations Director. "Business Central gave us the tools to not just survive NYC's demands but to turn those demands into our biggest strength."
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Lessons for Other Companies</h2>

            <div className="bg-yellow-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Best Practices</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3">
                <li><strong>Start with Inventory:</strong> Real-time stock visibility is the foundation</li>
                <li><strong>Invest in Mobile:</strong> Warehouse and delivery staff need real-time access</li>
                <li><strong>Integrate Early:</strong> Connect GPS tracking and payment systems from day one</li>
                <li><strong>Train Thoroughly:</strong> Staff adoption determines system success</li>
                <li><strong>Monitor Metrics:</strong> Track delivery times, accuracy, and customer satisfaction</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Bottom Line</h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Serving demanding markets like Manhattan requires more than good intentions—it requires operational excellence enabled by technology. Business Central provided the foundation for Garden State Distributors to transform from a regional player into a trusted partner for New York City's most demanding customers. The lesson for other companies is clear: if your ERP system can handle NYC's requirements, it can handle anything.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                ER
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Emily Rodriguez</h3>
                <p className="text-gray-600">Operations Consultant</p>
                <p className="text-sm text-gray-500 mt-2">
                  Emily specializes in distribution and logistics optimization, helping companies streamline operations to serve demanding metropolitan markets.
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
                  Optimize Your Operations
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