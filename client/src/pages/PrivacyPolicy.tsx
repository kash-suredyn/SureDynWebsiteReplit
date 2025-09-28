import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - SureDyn Business Solutions | Data Protection & Privacy";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SureDyn Business Solutions Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with GDPR and other privacy regulations.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                SureDyn Business Solutions LLC ("we," "our," or "us") collects information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Name, email address, phone number, and company information</li>
                <li>Professional information and business requirements</li>
                <li>Communications and correspondence with our team</li>
                <li>Technical information about your Microsoft Dynamics 365 environment</li>
                <li>Usage data and analytics from our website and services</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-6">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Provide, maintain, and improve our Microsoft Dynamics 365 services</li>
                <li>Communicate with you about our services, updates, and support</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>With Microsoft Corporation for Dynamics 365 licensing and support purposes</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transaction, such as a merger or acquisition</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication measures</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Compliance with industry security standards</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-6">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Portability of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Restriction of processing in certain circumstances</li>
              </ul>
              <p className="text-gray-700 mb-6">
                To exercise these rights, please contact us at info@suredyn.com or +1-732-585-5563.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar technologies to enhance your experience on our website. For detailed information about our use of cookies, please see our Cookie Policy.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We consider factors such as the nature of the information, the purposes for processing, and applicable legal requirements when determining retention periods.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers are conducted in accordance with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={900}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
        title="Questions About Our Privacy Practices?"
        subtitle="Contact us if you have any questions about how we handle your data or if you'd like to exercise your privacy rights."
        primaryButtonText="Contact Our Team"
        showPhoneButton={false}
      />
    </div>
  );
};

export default PrivacyPolicy;