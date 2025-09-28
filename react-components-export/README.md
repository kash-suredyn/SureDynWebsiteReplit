# SureDyn Website - React Components Export

## Overview
This folder contains all the React.js components from the SureDyn Business Solutions website, organized for easy reuse and integration into other projects.

## Component Structure

### Layout Components
- `Header.jsx` - Main navigation header with dropdowns
- `Footer.jsx` - Site footer with links and contact info
- `Layout.jsx` - Main layout wrapper component

### Page Components
- `HomePage.jsx` - Complete home page with testimonials and services overview
- `AboutPage.jsx` - About us page with team, mission, and company statistics
- `ContactPage.jsx` - Contact page with comprehensive form and FAQ section
- `ServicePage.jsx` - Reusable service page template with benefits and process

### Service Page Components
- `ImplementationPage.jsx` - Business Central implementation services
- `UpgradePage.jsx` - System upgrade and migration services
- `SupportPage.jsx` - Support and maintenance services
- `CustomDevelopmentPage.jsx` - Custom development solutions
- `TrainingPage.jsx` - Training and education services
- `BusinessIntelligencePage.jsx` - BI and analytics solutions

### Industry Page Components
- `ManufacturingPage.jsx` - Manufacturing ERP solutions
- `DistributionPage.jsx` - Distribution and wholesale solutions
- `RetailPage.jsx` - Retail management solutions
- `HealthcarePage.jsx` - Healthcare management solutions
- `ProfessionalServicesPage.jsx` - Professional services solutions
- `FinancialServicesPage.jsx` - Financial services solutions

### Solution Page Components
- `Dynamics365Page.jsx` - Microsoft Dynamics 365 Business Central
- `PowerBIPage.jsx` - Power BI analytics solutions
- `PowerPlatformPage.jsx` - Microsoft Power Platform solutions
- `AzurePage.jsx` - Microsoft Azure cloud solutions

### Common Components
- `Hero.jsx` - Hero section component
- `CTASection.jsx` - Call-to-action section
- `FeatureGrid.jsx` - Feature cards grid
- `ProcessSteps.jsx` - Process steps component
- `BenefitsGrid.jsx` - Benefits cards grid
- `AnimatedSection.jsx` - Scroll animation wrapper
- `ContactForm.jsx` - Contact form component

### UI Components
All shadcn/ui components are included in the `ui/` folder

## Installation & Usage

### Prerequisites
```bash
npm install react react-dom
npm install @radix-ui/react-*  # For UI components
npm install tailwindcss
npm install framer-motion  # For animations
```

### Basic Usage
```jsx
import { HomePage } from './components/HomePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
```

### Component Props
Each component is designed to accept props for customization:

```jsx
<Hero 
  title="Your Custom Title"
  subtitle="Your custom subtitle"
  primaryButton={{ text: "Get Started", href: "/contact" }}
  secondaryButton={{ text: "Learn More", href: "/about" }}
/>

<ServicePage
  title="Your Service"
  description="Service description"
  benefits={[...]}
  process={[...]}
  ctaHeading="Custom CTA Heading"
/>
```

## Styling
- Uses Tailwind CSS for styling
- Custom CSS variables for brand colors
- Responsive design with mobile-first approach
- Dark/light theme support ready

## Brand Colors
```css
:root {
  --suredyn-orange: #fa9446;
  --suredyn-orange-dark: #e8732c;
}
```

## Features
- Fully responsive design
- Accessibility compliant (WCAG 2.1)
- SEO optimized
- Scroll animations
- Form validation
- TypeScript support ready