import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - SureDyn Business Solutions | Service Agreement & Legal Terms";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SureDyn Business Solutions Terms of Service. Legal terms and conditions for Microsoft Dynamics 365 implementation, migration, and support services.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <AnimatedSection>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using the services provided by SureDyn Business Solutions LLC ("Company," "we," "our," or "us"), you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-6">
                SureDyn Business Solutions provides Microsoft Dynamics 365 consulting services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Microsoft Dynamics 365 Business Central implementation</li>
                <li>System upgrades and migrations from legacy systems</li>
                <li>Custom development and integrations</li>
                <li>Training and change management services</li>
                <li>Ongoing support and maintenance</li>
                <li>Business intelligence and reporting solutions</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Agreements</h2>
              <p className="text-gray-700 mb-6">
                Specific services will be detailed in separate Service Agreements or Statements of Work (SOW) that incorporate these Terms by reference. Each Service Agreement will specify:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Scope of services and deliverables</li>
                <li>Project timeline and milestones</li>
                <li>Pricing and payment terms</li>
                <li>Client responsibilities and requirements</li>
                <li>Acceptance criteria and procedures</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Client Responsibilities</h2>
              <p className="text-gray-700 mb-6">
                To ensure successful project delivery, Client agrees to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and complete information about business requirements</li>
                <li>Designate qualified personnel to participate in the project</li>
                <li>Provide timely feedback and approvals</li>
                <li>Ensure access to necessary systems and data</li>
                <li>Maintain appropriate Microsoft Dynamics 365 licenses</li>
                <li>Participate in testing and training activities</li>
                <li>Comply with Microsoft licensing terms and conditions</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-6">
                Unless otherwise specified in the Service Agreement:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Invoices are due within 30 days of invoice date</li>
                <li>Late payments may incur interest charges of 1.5% per month</li>
                <li>Services may be suspended for overdue accounts</li>
                <li>Travel and expense costs will be billed at cost</li>
                <li>Changes to scope may result in additional charges</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                Intellectual property ownership is governed as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Client retains ownership of their data and business processes</li>
                <li>SureDyn retains ownership of proprietary methodologies and tools</li>
                <li>Custom developments may be subject to specific ownership terms</li>
                <li>Microsoft retains ownership of Dynamics 365 software and services</li>
                <li>Both parties respect third-party intellectual property rights</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Confidentiality</h2>
              <p className="text-gray-700 mb-6">
                Both parties acknowledge that they may have access to confidential information. We agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Maintain confidentiality of all proprietary information</li>
                <li>Use confidential information solely for project purposes</li>
                <li>Implement appropriate security measures</li>
                <li>Return or destroy confidential information upon request</li>
                <li>Limit access to authorized personnel only</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-gray-700 mb-6">
                We warrant that our services will be performed in a professional and workmanlike manner. However:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Services are provided "as is" without other warranties</li>
                <li>We disclaim all implied warranties of merchantability and fitness</li>
                <li>Results depend on Client cooperation and data quality</li>
                <li>Third-party software is subject to vendor warranties</li>
                <li>We are not responsible for Microsoft Dynamics 365 functionality</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Our total liability shall not exceed the fees paid for the specific service</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>We are not liable for data loss or system downtime</li>
                <li>Client must mitigate damages and provide timely notice of claims</li>
                <li>Some jurisdictions may not allow liability limitations</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={900}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-6">
                Either party may terminate services under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Material breach with 30 days written notice to cure</li>
                <li>Insolvency or bankruptcy of either party</li>
                <li>Mutual agreement of both parties</li>
                <li>Completion of all services under the agreement</li>
                <li>Non-payment of fees after notice and opportunity to cure</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={1000}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms are governed by the laws of the State of New Jersey, United States, without regard to conflict of law principles. Any disputes will be resolved through binding arbitration in New Jersey.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1100}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>SureDyn Business Solutions LLC</strong></p>
                <p className="text-gray-700 mb-2">28 Valley Road, Montclair, New Jersey - 07042</p>
                <p className="text-gray-700 mb-2">Email: info@suredyn.com</p>
                <p className="text-gray-700">Phone: +1-732-585-5563</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Begin Your Project?"
        subtitle="Review our terms and start your Microsoft Dynamics 365 transformation journey with confidence in our professional service standards."
        primaryButtonText="Start Your Implementation"
        showPhoneButton={false}
      />
    </div>
  );
};

export default TermsOfService;