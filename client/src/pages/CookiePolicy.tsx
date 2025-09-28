import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy - SureDyn Business Solutions | Website Cookies & Tracking";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SureDyn Business Solutions Cookie Policy. Learn about how we use cookies and tracking technologies on our website to enhance your browsing experience.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-6">
                SureDyn Business Solutions uses cookies to enhance your experience on our website and to help us understand how our site is being used. We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>To enable certain functions of the website</li>
                <li>To provide analytics and track website performance</li>
                <li>To remember your preferences and settings</li>
                <li>To personalize content and improve user experience</li>
                <li>To understand visitor behavior and optimize our services</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation and access to secure areas of the website.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Load balancing</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Google Analytics</li>
                  <li>Page views and traffic sources</li>
                  <li>User behavior patterns</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>Language preferences</li>
                  <li>Form data retention</li>
                  <li>User interface customizations</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                  <li>LinkedIn advertising</li>
                  <li>Google Ads conversion tracking</li>
                  <li>Retargeting campaigns</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-6">
                We may use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Google Fonts:</strong> To load web fonts for improved typography</li>
                <li><strong>LinkedIn:</strong> For professional networking integration and advertising</li>
                <li><strong>Microsoft:</strong> For Dynamics 365 integration and support features</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-6">
                You have several options for managing cookies:
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Block all cookies</li>
                  <li>Allow only first-party cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Opt-Out Links</h3>
                <p className="text-gray-700 mb-4">
                  You can opt out of specific tracking services:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-suredyn-orange hover:text-suredyn-orange-dark" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                  <li>Google Ads: <a href="https://www.google.com/settings/ads" className="text-suredyn-orange hover:text-suredyn-orange-dark" target="_blank" rel="noopener noreferrer">Ad Settings</a></li>
                  <li>LinkedIn: <a href="https://www.linkedin.com/psettings/advertising" className="text-suredyn-orange hover:text-suredyn-orange-dark" target="_blank" rel="noopener noreferrer">LinkedIn Ad Preferences</a></li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Retention</h2>
              <p className="text-gray-700 mb-6">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain until expiration or manual deletion</li>
                <li><strong>Analytics Cookies:</strong> Typically expire after 2 years</li>
                <li><strong>Marketing Cookies:</strong> Usually expire after 30-90 days</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-6">
                If you disable cookies, you may experience:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Reduced website functionality</li>
                <li>Loss of personalized settings</li>
                <li>Inability to use certain features</li>
                <li>Need to re-enter information on each visit</li>
                <li>Less relevant content and advertisements</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will update the "Last updated" date at the top of this policy.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about our use of cookies, please contact us:
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
        title="Ready to Experience Our Services?"
        subtitle="We're committed to transparency in how we use cookies to enhance your experience. Let's discuss your Microsoft Dynamics 365 needs."
        primaryButtonText="Get Free Consultation"
        showPhoneButton={false}
      />
    </div>
  );
};

export default CookiePolicy;