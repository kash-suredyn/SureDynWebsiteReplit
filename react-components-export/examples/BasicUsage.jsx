import React from 'react';
import Layout from '../Layout';
import HomePage from '../HomePage';
import ServicePage from '../ServicePage';
import ContactForm from '../ContactForm';

// Example 1: Basic App with Home Page
export const BasicApp = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

// Example 2: Service Page with Custom Content
export const CustomServicePage = () => {
  const customServiceData = {
    title: "Microsoft Dynamics 365 Implementation",
    description: "Professional implementation services for Microsoft Dynamics 365 Business Central",
    
    hero: {
      title: "Microsoft Dynamics 365 Implementation",
      subtitle: "Transform your business operations with expert implementation of Microsoft Dynamics 365 Business Central. Our proven methodology ensures a smooth transition and optimal system performance.",
      primaryButton: { text: "Start Implementation", href: "/contact" },
      secondaryButton: { text: "View Case Studies", href: "/case-studies" }
    },
    
    benefits: {
      title: "Implementation Benefits",
      description: "Discover how our implementation service transforms your business operations.",
      items: [
        {
          icon: "🚀",
          title: "Rapid Deployment",
          description: "Get your system up and running quickly with our proven implementation methodology."
        },
        {
          icon: "🎯",
          title: "Tailored Configuration",
          description: "Custom configuration that matches your specific business processes and requirements."
        },
        {
          icon: "📊",
          title: "Data Integration",
          description: "Seamless integration with your existing systems and comprehensive data migration."
        },
        {
          icon: "🛡️",
          title: "Risk Mitigation",
          description: "Minimize implementation risks with our experienced project management approach."
        },
        {
          icon: "📈",
          title: "Performance Optimization",
          description: "Optimized system performance for maximum efficiency and user adoption."
        },
        {
          icon: "🎓",
          title: "User Training",
          description: "Comprehensive training programs to ensure your team can effectively use the system."
        }
      ]
    },
    
    process: {
      title: "Our Implementation Process",
      description: "A proven 4-phase approach that ensures successful deployment and adoption.",
      steps: [
        {
          number: 1,
          title: "Discovery & Analysis",
          description: "We thoroughly analyze your current processes, systems, and requirements to create a tailored implementation plan."
        },
        {
          number: 2,
          title: "System Configuration",
          description: "Configure Microsoft Dynamics 365 Business Central to match your business processes and integrate with existing systems."
        },
        {
          number: 3,
          title: "Testing & Training",
          description: "Comprehensive testing of all system functions followed by user training to ensure smooth adoption."
        },
        {
          number: 4,
          title: "Go-Live & Support",
          description: "Managed go-live process with ongoing support to ensure optimal system performance and user satisfaction."
        }
      ]
    },
    
    cta: {
      title: "Start Your Business Central Implementation Today",
      description: "Ready to transform your business operations? Contact our implementation experts to discuss your Microsoft Dynamics 365 Business Central project.",
      primaryButton: { text: "Get Started", href: "/contact" },
      secondaryButton: { text: "Schedule Consultation", href: "/consultation" }
    }
  };

  return (
    <Layout>
      <ServicePage {...customServiceData} />
    </Layout>
  );
};

// Example 3: Contact Page with Custom Form
export const ContactPage = () => {
  const customFormFields = [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "email", label: "Business Email", type: "email", required: true },
    { name: "company", label: "Company Name", type: "text", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "employees", label: "Number of Employees", type: "select", required: false, options: [
      { value: "", label: "Select company size..." },
      { value: "1-10", label: "1-10 employees" },
      { value: "11-50", label: "11-50 employees" },
      { value: "51-200", label: "51-200 employees" },
      { value: "201-500", label: "201-500 employees" },
      { value: "500+", label: "500+ employees" }
    ]},
    { 
      name: "service", 
      label: "Service Interest", 
      type: "select", 
      required: false,
      options: [
        { value: "", label: "Select a service..." },
        { value: "implementation", label: "New Implementation" },
        { value: "migration", label: "System Migration" },
        { value: "upgrade", label: "Version Upgrade" },
        { value: "support", label: "Support & Maintenance" },
        { value: "training", label: "Training Services" },
        { value: "consultation", label: "Consultation" }
      ]
    },
    { name: "timeline", label: "Project Timeline", type: "select", required: false, options: [
      { value: "", label: "Select timeline..." },
      { value: "immediate", label: "Immediate (within 1 month)" },
      { value: "short", label: "Short term (1-3 months)" },
      { value: "medium", label: "Medium term (3-6 months)" },
      { value: "long", label: "Long term (6+ months)" },
      { value: "planning", label: "Just planning/researching" }
    ]},
    { name: "message", label: "Project Details", type: "textarea", required: false }
  ];

  const handleFormSubmit = async (formData) => {
    // Custom form submission logic
    console.log('Form submitted:', formData);
    
    // Example: Send to your API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    
    return response.json();
  };

  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Get Started with Microsoft Dynamics 365"
            description="Ready to transform your business? Contact our experts to discuss your Microsoft Dynamics 365 Business Central needs and get a customized solution proposal."
            formFields={customFormFields}
            onSubmit={handleFormSubmit}
            successMessage="Thank you! We'll review your requirements and get back to you within 24 hours with a customized proposal."
          />
        </div>
      </div>
    </Layout>
  );
};

// Example 4: Custom Layout with Different Header/Footer
export const CustomBrandApp = () => {
  const customHeaderProps = {
    logo: "YourCompany",
    navItems: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    ctaButton: { text: "Get Quote", href: "/quote" }
  };

  const customFooterProps = {
    companyName: "Your Company Name",
    description: "Your company description here.",
    logo: "YourCompany"
  };

  return (
    <Layout 
      headerProps={customHeaderProps}
      footerProps={customFooterProps}
    >
      <HomePage />
    </Layout>
  );
};

export default {
  BasicApp,
  CustomServicePage,
  ContactPage,
  CustomBrandApp
};