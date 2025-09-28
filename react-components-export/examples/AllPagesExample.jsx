import React from 'react';
import { Routes, Route } from 'wouter';
import Layout from '../Layout';

// Import all page components
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';

// Service pages
import ImplementationPage from '../services/ImplementationPage';
import UpgradePage from '../services/UpgradePage';
import SupportPage from '../services/SupportPage';
import CustomDevelopmentPage from '../services/CustomDevelopmentPage';
import TrainingPage from '../services/TrainingPage';
import BusinessIntelligencePage from '../services/BusinessIntelligencePage';

// Industry pages
import ManufacturingPage from '../industries/ManufacturingPage';
import DistributionPage from '../industries/DistributionPage';
import RetailPage from '../industries/RetailPage';
import HealthcarePage from '../industries/HealthcarePage';
import ProfessionalServicesPage from '../industries/ProfessionalServicesPage';
import FinancialServicesPage from '../industries/FinancialServicesPage';

// Solution pages
import Dynamics365Page from '../solutions/Dynamics365Page';
import PowerBIPage from '../solutions/PowerBIPage';
import PowerPlatformPage from '../solutions/PowerPlatformPage';
import AzurePage from '../solutions/AzurePage';

// Example: Complete multi-page React application
const CompleteWebsiteApp = () => {
  const customHeaderProps = {
    logo: "SureDyn",
    navItems: [
      { label: "Home", href: "/" },
      {
        label: "Services",
        href: "/services",
        dropdown: [
          { label: "Implementation", href: "/services/implementation" },
          { label: "Upgrade", href: "/services/upgrade" },
          { label: "Support & Maintenance", href: "/services/support" },
          { label: "Custom Development", href: "/services/custom-development" },
          { label: "Training", href: "/services/training" },
          { label: "Business Intelligence", href: "/services/business-intelligence" }
        ]
      },
      {
        label: "Industries",
        href: "/industries",
        dropdown: [
          { label: "Manufacturing", href: "/industries/manufacturing" },
          { label: "Distribution", href: "/industries/distribution" },
          { label: "Retail", href: "/industries/retail" },
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "Professional Services", href: "/industries/professional-services" },
          { label: "Financial Services", href: "/industries/financial-services" }
        ]
      },
      {
        label: "Solutions",
        href: "/solutions",
        dropdown: [
          { label: "Dynamics 365", href: "/solutions/dynamics365" },
          { label: "Power BI", href: "/solutions/powerbi" },
          { label: "Power Platform", href: "/solutions/power-platform" },
          { label: "Azure", href: "/solutions/azure" }
        ]
      },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    ctaButton: { text: "Get Started", href: "/contact" }
  };

  return (
    <Layout headerProps={customHeaderProps}>
      <Routes>
        {/* Main Pages */}
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />

        {/* Service Pages */}
        <Route path="/services/implementation" component={ImplementationPage} />
        <Route path="/services/upgrade" component={UpgradePage} />
        <Route path="/services/support" component={SupportPage} />
        <Route path="/services/custom-development" component={CustomDevelopmentPage} />
        <Route path="/services/training" component={TrainingPage} />
        <Route path="/services/business-intelligence" component={BusinessIntelligencePage} />

        {/* Industry Pages */}
        <Route path="/industries/manufacturing" component={ManufacturingPage} />
        <Route path="/industries/distribution" component={DistributionPage} />
        <Route path="/industries/retail" component={RetailPage} />
        <Route path="/industries/healthcare" component={HealthcarePage} />
        <Route path="/industries/professional-services" component={ProfessionalServicesPage} />
        <Route path="/industries/financial-services" component={FinancialServicesPage} />

        {/* Solution Pages */}
        <Route path="/solutions/dynamics365" component={Dynamics365Page} />
        <Route path="/solutions/powerbi" component={PowerBIPage} />
        <Route path="/solutions/power-platform" component={PowerPlatformPage} />
        <Route path="/solutions/azure" component={AzurePage} />
      </Routes>
    </Layout>
  );
};

// Example: Industry-specific customization
const ManufacturingFocusedApp = () => {
  const manufacturingHeaderProps = {
    logo: "ManufacturingSolutions",
    navItems: [
      { label: "Home", href: "/" },
      { label: "Manufacturing Solutions", href: "/manufacturing" },
      { label: "Implementation", href: "/services/implementation" },
      { label: "Support", href: "/services/support" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    ctaButton: { text: "Get Manufacturing Solution", href: "/contact" }
  };

  const customManufacturingData = {
    hero: {
      title: "Manufacturing ERP Excellence",
      subtitle: "Transform your manufacturing operations with specialized Business Central solutions designed for production efficiency and quality control.",
      primaryButton: { text: "Start Manufacturing Project", href: "/contact" },
      secondaryButton: { text: "View Manufacturing Demo", href: "/demo" }
    },
    cta: {
      title: "Ready to Optimize Your Manufacturing?",
      description: "Contact our manufacturing ERP experts to discuss your specific production requirements and get a customized Business Central solution.",
      primaryButton: { text: "Get Manufacturing Quote", href: "/contact" }
    }
  };

  return (
    <Layout headerProps={manufacturingHeaderProps}>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/manufacturing" 
          component={() => <ManufacturingPage customData={customManufacturingData} />} 
        />
        <Route path="/services/implementation" component={ImplementationPage} />
        <Route path="/services/support" component={SupportPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
    </Layout>
  );
};

// Example: Service-focused landing page
const ServiceLandingApp = ({ serviceName = "implementation" }) => {
  const serviceComponents = {
    implementation: ImplementationPage,
    upgrade: UpgradePage,
    support: SupportPage,
    'custom-development': CustomDevelopmentPage,
    training: TrainingPage,
    'business-intelligence': BusinessIntelligencePage
  };

  const ServiceComponent = serviceComponents[serviceName] || ImplementationPage;

  return (
    <Layout>
      <ServiceComponent />
    </Layout>
  );
};

// Example: Multi-brand configuration
const MultiBrandApp = ({ brandConfig }) => {
  const {
    companyName = "SureDyn",
    primaryColor = "#fa9446",
    logo = "SureDyn",
    contactEmail = "info@suredyn.com",
    phone = "+1 (555) 123-4567"
  } = brandConfig;

  const customHeaderProps = {
    logo,
    ctaButton: { text: "Get Started", href: "/contact" }
  };

  const customFooterProps = {
    companyName,
    logo,
    contact: {
      email: contactEmail,
      phone: phone
    }
  };

  const customStyles = `
    :root {
      --suredyn-orange: ${primaryColor};
      --suredyn-orange-dark: ${adjustColor(primaryColor, -20)};
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <Layout 
        headerProps={customHeaderProps}
        footerProps={customFooterProps}
      >
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/services/implementation" component={ImplementationPage} />
        </Routes>
      </Layout>
    </>
  );
};

// Utility function for color adjustment
const adjustColor = (color, amount) => {
  // Simple color adjustment logic
  return color; // In real implementation, would adjust brightness
};

export {
  CompleteWebsiteApp,
  ManufacturingFocusedApp,
  ServiceLandingApp,
  MultiBrandApp
};

export default CompleteWebsiteApp;