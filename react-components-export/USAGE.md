# SureDyn React Components - Usage Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install react react-dom wouter
```

### 2. Basic Usage
```jsx
import { Layout, HomePage, Header, Footer } from 'suredyn-react-components';

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
```

### 3. Complete Website Implementation
```jsx
import React from 'react';
import { Routes, Route } from 'wouter';
import {
  Layout,
  HomePage,
  AboutPage,
  ContactPage,
  ImplementationPage,
  ManufacturingPage,
  Dynamics365Page
} from 'suredyn-react-components';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/services/implementation" component={ImplementationPage} />
        <Route path="/industries/manufacturing" component={ManufacturingPage} />
        <Route path="/solutions/dynamics365" component={Dynamics365Page} />
      </Routes>
    </Layout>
  );
}
```

## Component Categories

### Layout Components
Core layout components for consistent site structure.

```jsx
import { Header, Footer, Layout } from 'suredyn-react-components';

const customHeaderProps = {
  logo: "YourCompany",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ],
  ctaButton: { text: "Get Quote", href: "/quote" }
};

<Layout headerProps={customHeaderProps}>
  {/* Your page content */}
</Layout>
```

### Page Components
Complete page components for different sections of the website.

```jsx
import { HomePage, AboutPage, ContactPage } from 'suredyn-react-components';

// Use with default content
<HomePage />

// Customize content
const customHeroData = {
  title: "Your Custom Title",
  subtitle: "Your custom subtitle",
  primaryButton: { text: "Get Started", href: "/contact" }
};

<HomePage hero={customHeroData} />
```

### Service Page Components
Specialized components for different service offerings.

```jsx
import { 
  ImplementationPage,
  UpgradePage,
  SupportPage,
  CustomDevelopmentPage,
  TrainingPage,
  BusinessIntelligencePage 
} from 'suredyn-react-components';

// Use with default service content
<ImplementationPage />

// Customize for your specific service
const customServiceData = {
  hero: {
    title: "Custom Implementation Service",
    subtitle: "Your specialized implementation approach"
  },
  cta: {
    title: "Ready to Get Started?",
    primaryButton: { text: "Contact Us", href: "/contact" }
  }
};

<ImplementationPage customData={customServiceData} />
```

### Industry Page Components
Industry-specific page components with tailored content.

```jsx
import { 
  ManufacturingPage,
  DistributionPage,
  RetailPage,
  HealthcarePage,
  ProfessionalServicesPage,
  FinancialServicesPage 
} from 'suredyn-react-components';

// Use with industry-specific defaults
<ManufacturingPage />

// Customize for your industry focus
const customIndustryData = {
  hero: {
    title: "Manufacturing Solutions for Your Business",
    primaryButton: { text: "Get Manufacturing Quote", href: "/contact" }
  }
};

<ManufacturingPage customData={customIndustryData} />
```

### Solution Page Components
Technical solution pages for Microsoft technologies.

```jsx
import { 
  Dynamics365Page,
  PowerBIPage,
  PowerPlatformPage,
  AzurePage 
} from 'suredyn-react-components';

// Default solution pages
<Dynamics365Page />
<PowerBIPage />
<PowerPlatformPage />
<AzurePage />
```

### Common Components
Reusable components for building custom pages.

```jsx
import { 
  Hero,
  CTASection,
  FeatureGrid,
  ProcessSteps,
  ContactForm 
} from 'suredyn-react-components';

// Hero Section
<Hero 
  title="Your Page Title"
  subtitle="Your page description"
  primaryButton={{ text: "Get Started", href: "/contact" }}
  secondaryButton={{ text: "Learn More", href: "/about" }}
/>

// Feature Grid
<FeatureGrid 
  title="Why Choose Us?"
  features={[
    {
      icon: "🚀",
      title: "Fast Implementation",
      description: "Quick deployment with proven methodologies."
    },
    // ... more features
  ]}
/>

// CTA Section
<CTASection 
  title="Ready to Get Started?"
  description="Contact us today to begin your project."
  primaryButton={{ text: "Contact Us", href: "/contact" }}
/>

// Process Steps
<ProcessSteps 
  title="Our Process"
  steps={[
    {
      number: 1,
      title: "Discovery",
      description: "We analyze your requirements."
    },
    // ... more steps
  ]}
/>

// Contact Form
<ContactForm 
  title="Get In Touch"
  formFields={[
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "message", label: "Message", type: "textarea", required: false }
  ]}
/>
```

## Customization Examples

### Brand Customization
```jsx
// Custom brand colors (add to your CSS)
:root {
  --suredyn-orange: #your-primary-color;
  --suredyn-orange-dark: #your-primary-color-dark;
}

// Custom header configuration
const customBrandProps = {
  logo: "YourBrand",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  ctaButton: { text: "Get Quote", href: "/quote" }
};
```

### Industry-Specific Configuration
```jsx
// Manufacturing-focused site
const manufacturingConfig = {
  hero: {
    title: "Manufacturing ERP Solutions",
    subtitle: "Optimize your production with Business Central"
  },
  features: [
    {
      icon: "🏭",
      title: "Production Planning",
      description: "Advanced scheduling and capacity planning"
    },
    // ... manufacturing-specific features
  ]
};

<ManufacturingPage customData={manufacturingConfig} />
```

### Multi-Language Support
```jsx
// Language configuration object
const translations = {
  en: {
    hero: {
      title: "Transform Your Business",
      subtitle: "Professional ERP solutions"
    }
  },
  es: {
    hero: {
      title: "Transforme Su Negocio",
      subtitle: "Soluciones ERP profesionales"
    }
  }
};

const currentLang = 'en';
<HomePage hero={translations[currentLang].hero} />
```

## Advanced Usage

### Custom Page Creation
```jsx
import { Layout, Hero, FeatureGrid, CTASection } from 'suredyn-react-components';

const CustomServicePage = () => {
  const heroData = {
    title: "Custom Service",
    subtitle: "Specialized solution for your needs"
  };

  const features = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick implementation"
    }
  ];

  const cta = {
    title: "Interested in Our Custom Service?",
    primaryButton: { text: "Learn More", href: "/contact" }
  };

  return (
    <Layout>
      <Hero {...heroData} />
      <FeatureGrid features={features} />
      <CTASection {...cta} />
    </Layout>
  );
};
```

### Form Handling
```jsx
import { ContactForm } from 'suredyn-react-components';

const handleFormSubmit = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) throw new Error('Failed to submit');
    
    // Handle success
    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Form submission error:', error);
    throw error; // Let the component handle the error display
  }
};

<ContactForm 
  onSubmit={handleFormSubmit}
  successMessage="Thank you! We'll be in touch soon."
/>
```

## Best Practices

1. **Component Composition**: Use layout components with page components for consistent structure
2. **Customization**: Pass custom data objects to override default content
3. **Responsive Design**: All components are mobile-responsive by default
4. **Accessibility**: Components include ARIA attributes and semantic HTML
5. **Performance**: Use React.lazy() for code splitting large page components
6. **SEO**: Add appropriate meta tags and structured data to your app shell

## Styling

The components use Tailwind CSS classes and CSS custom properties for theming. Include the provided `styles.css` file or customize the CSS variables:

```css
:root {
  --suredyn-orange: #fa9446;
  --suredyn-orange-dark: #e8732c;
}
```

## Support

For questions or issues with the components, refer to the README.md file or contact the development team.