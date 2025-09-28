import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = ({
  hero = {
    title: "Get Started Today",
    subtitle: "Ready to transform your business with Microsoft Dynamics 365 Business Central? Contact our experts to discuss your needs and get a customized solution proposal.",
    showButtons: false
  },

  contactInfo = {
    title: "Contact Information",
    description: "Multiple ways to reach our team of Business Central experts.",
    methods: [
      {
        type: "phone",
        label: "Phone",
        value: "+1 (555) 123-4567",
        description: "Call us for immediate assistance",
        icon: "📞",
        href: "tel:+15551234567"
      },
      {
        type: "email",
        label: "Email",
        value: "info@suredyn.com",
        description: "Send us a detailed message",
        icon: "✉️",
        href: "mailto:info@suredyn.com"
      },
      {
        type: "address",
        label: "Office",
        value: "123 Business Avenue, Suite 100\nCity, ST 12345",
        description: "Visit our office location",
        icon: "📍",
        href: "https://maps.google.com"
      }
    ]
  },

  form = {
    title: "Send Us a Message",
    description: "Fill out the form below and we'll get back to you within 24 hours with a customized proposal.",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Business Email", type: "email", required: true },
      { name: "company", label: "Company Name", type: "text", required: true },
      { name: "jobTitle", label: "Job Title", type: "text", required: false },
      { name: "phone", label: "Phone Number", type: "tel", required: false },
      { 
        name: "employees", 
        label: "Company Size", 
        type: "select", 
        required: false,
        options: [
          { value: "", label: "Select company size..." },
          { value: "1-10", label: "1-10 employees" },
          { value: "11-50", label: "11-50 employees" },
          { value: "51-200", label: "51-200 employees" },
          { value: "201-500", label: "201-500 employees" },
          { value: "500+", label: "500+ employees" }
        ]
      },
      { 
        name: "currentSystem", 
        label: "Current System", 
        type: "select", 
        required: false,
        options: [
          { value: "", label: "Select current system..." },
          { value: "quickbooks", label: "QuickBooks" },
          { value: "dynamics-gp", label: "Microsoft Dynamics GP" },
          { value: "dynamics-nav", label: "Microsoft Dynamics NAV" },
          { value: "sage", label: "Sage" },
          { value: "excel", label: "Excel/Spreadsheets" },
          { value: "other", label: "Other ERP System" },
          { value: "none", label: "No current system" }
        ]
      },
      { 
        name: "service", 
        label: "Primary Interest", 
        type: "select", 
        required: false,
        options: [
          { value: "", label: "Select primary interest..." },
          { value: "implementation", label: "New Implementation" },
          { value: "migration", label: "System Migration" },
          { value: "upgrade", label: "Version Upgrade" },
          { value: "support", label: "Support & Maintenance" },
          { value: "training", label: "Training Services" },
          { value: "consultation", label: "Consultation" },
          { value: "custom-development", label: "Custom Development" }
        ]
      },
      { 
        name: "timeline", 
        label: "Project Timeline", 
        type: "select", 
        required: false,
        options: [
          { value: "", label: "Select timeline..." },
          { value: "immediate", label: "Immediate (within 1 month)" },
          { value: "short", label: "Short term (1-3 months)" },
          { value: "medium", label: "Medium term (3-6 months)" },
          { value: "long", label: "Long term (6+ months)" },
          { value: "planning", label: "Just planning/researching" }
        ]
      },
      { 
        name: "budget", 
        label: "Budget Range", 
        type: "select", 
        required: false,
        options: [
          { value: "", label: "Select budget range..." },
          { value: "under-25k", label: "Under $25,000" },
          { value: "25k-50k", label: "$25,000 - $50,000" },
          { value: "50k-100k", label: "$50,000 - $100,000" },
          { value: "100k-250k", label: "$100,000 - $250,000" },
          { value: "over-250k", label: "Over $250,000" },
          { value: "not-sure", label: "Not sure yet" }
        ]
      },
      { name: "message", label: "Project Details & Requirements", type: "textarea", required: false }
    ],
    submitButtonText: "Send Message",
    successMessage: "Thank you for your interest! We'll review your requirements and get back to you within 24 hours with a customized proposal and next steps."
  },

  faq = {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How long does a typical Business Central implementation take?",
        answer: "Implementation timelines vary based on company size and complexity, but most projects take 3-6 months from start to go-live. We'll provide a detailed timeline during our initial consultation."
      },
      {
        question: "Can you migrate data from our current system?",
        answer: "Yes, we specialize in data migration from various systems including QuickBooks, Dynamics GP, NAV, Sage, and other ERP platforms. We ensure complete data integrity throughout the migration process."
      },
      {
        question: "Do you provide ongoing support after implementation?",
        answer: "Absolutely. We offer comprehensive support packages including 24/7 technical support, system optimization, user training, and regular health checks to ensure optimal performance."
      },
      {
        question: "What industries do you specialize in?",
        answer: "We serve various industries including manufacturing, distribution, retail, healthcare, professional services, and financial services. Our team has deep industry-specific expertise."
      },
      {
        question: "Is Business Central suitable for small businesses?",
        answer: "Yes, Business Central is designed to scale with your business. It's cost-effective for small businesses and can grow with you as your business expands."
      },
      {
        question: "How much does a Business Central implementation cost?",
        answer: "Costs vary based on your specific requirements, number of users, and customizations needed. We provide detailed, transparent pricing during our consultation process."
      }
    ]
  },

  offices = {
    title: "Our Locations",
    description: "Serving clients nationwide with local expertise and support.",
    locations: [
      {
        name: "Headquarters",
        address: "123 Business Avenue, Suite 100\nCity, ST 12345",
        phone: "+1 (555) 123-4567",
        email: "info@suredyn.com",
        hours: "Monday - Friday: 8:00 AM - 6:00 PM\nWeekends: By appointment"
      },
      {
        name: "Regional Office",
        address: "456 Commerce Street, Floor 5\nAnother City, ST 67890",
        phone: "+1 (555) 987-6543",
        email: "regional@suredyn.com", 
        hours: "Monday - Friday: 9:00 AM - 5:00 PM\nWeekends: Closed"
      }
    ]
  },

  className = ""
}) => {
  return (
    <main className={className}>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {hero.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {contactInfo.title}
            </h2>
            <p className="text-xl text-gray-600">
              {contactInfo.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.methods.map((method, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.label}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <a 
                  href={method.href}
                  className="text-suredyn-orange hover:text-suredyn-orange-dark font-medium transition-colors"
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            {...form}
            formFields={form.fields}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {faq.title}
            </h2>
          </div>

          <div className="space-y-8">
            {faq.items.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {offices.title}
            </h2>
            <p className="text-xl text-gray-600">
              {offices.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.locations.map((office, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {office.name}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <span className="text-suredyn-orange mr-3 mt-1">📍</span>
                    <div className="whitespace-pre-line">{office.address}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-suredyn-orange mr-3">📞</span>
                    <a href={`tel:${office.phone}`} className="hover:text-suredyn-orange transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-suredyn-orange mr-3">✉️</span>
                    <a href={`mailto:${office.email}`} className="hover:text-suredyn-orange transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-suredyn-orange mr-3 mt-1">🕒</span>
                    <div className="whitespace-pre-line text-sm">{office.hours}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-16 bg-suredyn-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Response Promise
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We understand that time is valuable. That's why we commit to responding to all inquiries within 24 hours with a detailed proposal and next steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24hrs</div>
              <p className="text-white/90">Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-white/90">Follow-through Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-white/90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;