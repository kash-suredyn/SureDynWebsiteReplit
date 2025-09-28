import { useEffect } from "react";
import ContactForm from "@/components/common/ContactForm";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import { OFFICE_LOCATIONS, STATS } from "@/lib/constants";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - SureDyn Business Solutions | Get Started with Microsoft Dynamics 365";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact SureDyn Business Solutions for Microsoft Dynamics 365 implementation, migration, and support. Free consultation available. Call +1-732-585-5563 or email info@suredyn.com');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get Started{" "}
                <span className="text-suredyn-orange">Today</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Contact us for a free consultation and discover how Microsoft Dynamics 365 can transform your business. 
                Our experts are ready to help you accelerate your digital transformation.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedSection animation="slideInRight">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-phone text-suredyn-orange text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-600">Call us for immediate assistance</p>
                        <a href="tel:+17325855563" className="text-suredyn-orange hover:text-suredyn-orange-dark font-medium">
                          +1-732-585-5563
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-envelope text-suredyn-orange text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600">Send us an email anytime</p>
                        <a href="mailto:info@suredyn.com" className="text-suredyn-orange hover:text-suredyn-orange-dark font-medium">
                          info@suredyn.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-clock text-suredyn-orange text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                          <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                          <p className="font-medium text-suredyn-orange">24/7 Emergency Support Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Office Locations */}
              <AnimatedSection animation="slideInRight" delay={200}>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Office Locations</h3>
                  <div className="space-y-6">
                    {OFFICE_LOCATIONS.map((office) => (
                      <div key={office.id} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{office.name}</h4>
                        <div className="text-gray-600">
                          {office.address.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                          ))}
                          <p className="text-suredyn-orange font-medium mt-2">
                            Phone: <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="hover:text-suredyn-orange-dark">{office.phone}</a>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Quick Stats */}
              <AnimatedSection animation="slideInRight" delay={400}>
                <div className="bg-suredyn-orange-pale rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose SureDyn?</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-suredyn-orange">{STATS.experience}</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-suredyn-orange">{STATS.support}</div>
                      <div className="text-sm text-gray-600">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-suredyn-orange">4-6</div>
                      <div className="text-sm text-gray-600">Week Implementation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-suredyn-orange">{STATS.projects}</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alternative Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-suredyn-orange-pale rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-suredyn-orange text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Call</h3>
                <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                <a 
                  href="tel:+15551234567"
                  className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-suredyn-orange-pale rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-suredyn-orange text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600 mb-4">Send us your detailed requirements</p>
                <a 
                  href="mailto:info@suredyn.com"
                  className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Send Email
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-suredyn-orange-pale rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar text-suredyn-orange text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Schedule Meeting</h3>
                <p className="text-gray-600 mb-4">Book a free consultation session</p>
                <a 
                  href="https://calendly.com/suredyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center"
                >
                  <i className="fas fa-calendar mr-2"></i>
                  Book Meeting
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and implementation process
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical implementation take?",
                answer: "Most implementations are completed in 4-6 weeks, depending on the complexity and scope of your requirements."
              },
              {
                question: "Do you provide training for our team?",
                answer: "Yes, we provide comprehensive training for all users to ensure successful adoption and maximize your investment."
              },
              {
                question: "What is included in your support services?",
                answer: "Our support includes 24/7 technical assistance, system monitoring, updates, and ongoing optimization services."
              },
              {
                question: "Can you migrate data from our current system?",
                answer: "Absolutely! We specialize in migrations from QuickBooks, Dynamics GP, Dynamics NAV, and other ERP systems."
              },
              {
                question: "Do you offer industry-specific solutions?",
                answer: "Yes, we have deep expertise in Manufacturing, Distribution, Professional Services, and Retail industries."
              },
              {
                question: "What is your implementation process?",
                answer: "Our process varies based on your specific requirements. Contact us for a free consultation and customized assessment."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Get Started?"
        subtitle="Contact us today for a free consultation and take the first step towards transforming your business with Microsoft Dynamics 365."
        showPhoneButton={false}
      />

      {/* Emergency Contact */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-red-600 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Emergency Support</h2>
              <p className="text-lg mb-6">
                System down? Critical issue? Our emergency support team is available 24/7 for existing clients.
              </p>
              <a 
                href="tel:+17325855563"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center"
              >
                <i className="fas fa-exclamation-triangle mr-2"></i>
                Emergency Support: +1-732-585-5563
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
