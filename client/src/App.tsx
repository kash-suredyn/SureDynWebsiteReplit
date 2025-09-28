import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { analytics } from "@/lib/analytics";
import { initErrorTracking, SentryErrorBoundary } from "@/lib/errorTracking";
import { abTesting } from "@/lib/abTesting";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
import RescueProjects from "@/pages/RescueProjects";
import Dynamics365 from "@/pages/solutions/Dynamics365";
import Dynamics365Finance from "@/pages/solutions/Dynamics365Finance";
import Dynamics365ProjectOperations from "@/pages/solutions/Dynamics365ProjectOperations";
import Dynamics365Sales from "@/pages/solutions/Dynamics365Sales";
import Dynamics365CustomerService from "@/pages/solutions/Dynamics365CustomerService";
import PowerPlatform from "@/pages/solutions/PowerPlatform";
import PowerBI from "@/pages/solutions/PowerBI";
import Azure from "@/pages/solutions/Azure";
import Implementation from "@/pages/services/Implementation";
import Upgrade from "@/pages/services/Upgrade";
import Support from "@/pages/services/Support";
import CustomDevelopment from "@/pages/services/CustomDevelopment";
import Training from "@/pages/services/Training";
import BusinessIntelligence from "@/pages/services/BusinessIntelligence";
import ProjectRescue from "@/pages/services/ProjectRescue";
import QuickBooksMigration from "@/pages/services/QuickBooksMigration";
import DynamicsGPMigration from "@/pages/services/DynamicsGPMigration";
import DynamicsNAVMigration from "@/pages/services/DynamicsNAVMigration";
import CustomerInsights from "@/pages/solutions/CustomerInsights";
import CustomerService from "@/pages/solutions/CustomerService";
import FieldService from "@/pages/solutions/FieldService";
import SupplyChainManagement from "@/pages/solutions/SupplyChainManagement";
import Manufacturing from "@/pages/industries/Manufacturing";
import Distribution from "@/pages/industries/Distribution";
import Retail from "@/pages/industries/Retail";
import Healthcare from "@/pages/industries/Healthcare";
import ProfessionalServices from "@/pages/industries/ProfessionalServices";
import FinancialServices from "@/pages/industries/FinancialServices";
import About from "@/pages/About";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import NotFound from "@/pages/not-found";

// Blog Posts
import NJManufacturingDigitalRevolution from "@/pages/blog/NJManufacturingDigitalRevolution";
import QuickBooksMigrationLessons from "@/pages/blog/QuickBooksMigrationLessons";
import PortNewarkSupplyChain from "@/pages/blog/PortNewarkSupplyChain";
import PharmaCompliance from "@/pages/blog/PharmaCompliance";
import MontclairNYCServing from "@/pages/blog/MontclairNYCServing";
import ChemicalIndustryScaling from "@/pages/blog/ChemicalIndustryScaling";
import NJTaxComplexity from "@/pages/blog/NJTaxComplexity";

// High-Intent Landing Pages
import QuickBooksEmergency from "@/pages/landing/QuickBooksEmergency";
import QuickBooksMigrationService from "@/pages/landing/QuickBooksMigrationService";
import BusinessCentralImplementationNJ from "@/pages/landing/BusinessCentralImplementationNJ";
import ERPImplementationProblem from "@/pages/landing/ERPImplementationProblem";
import MontclairNJERPServices from "@/pages/landing/MonclairNJERPServices";

// Location Pages
import MontclairOffice from "@/pages/locations/MontclairOffice";
import IselinOffice from "@/pages/locations/IselinOffice";
import CranfordOffice from "@/pages/locations/CranfordOffice";

function Router() {
  const [location] = useLocation();

  // Track page views
  useEffect(() => {
    analytics.trackPageView(location);
  }, [location]);

  return (
    <>
      <Header />
      <main role="main">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/implementation" component={Implementation} />
          <Route path="/services/upgrade" component={Upgrade} />
          <Route path="/services/support" component={Support} />
          <Route path="/services/custom-development" component={CustomDevelopment} />
          <Route path="/services/training" component={Training} />
          <Route path="/services/business-intelligence" component={BusinessIntelligence} />
          <Route path="/services/project-rescue" component={ProjectRescue} />
          <Route path="/services/quickbooks-migration" component={QuickBooksMigration} />
          <Route path="/services/dynamics-gp-migration" component={DynamicsGPMigration} />
          <Route path="/services/dynamics-nav-migration" component={DynamicsNAVMigration} />
          <Route path="/industries" component={Industries} />
          <Route path="/industries/manufacturing" component={Manufacturing} />
          <Route path="/industries/distribution" component={Distribution} />
          <Route path="/industries/retail" component={Retail} />
          <Route path="/industries/healthcare" component={Healthcare} />
          <Route path="/industries/professional-services" component={ProfessionalServices} />
          <Route path="/industries/financial-services" component={FinancialServices} />
          <Route path="/solutions/dynamics365" component={Dynamics365} />
          <Route path="/solutions/dynamics365/finance" component={Dynamics365Finance} />
          <Route path="/solutions/dynamics365/project-operations" component={Dynamics365ProjectOperations} />
          <Route path="/solutions/dynamics365/sales" component={Dynamics365Sales} />
          <Route path="/solutions/dynamics365/customer-service" component={Dynamics365CustomerService} />
          <Route path="/solutions/dynamics365/customer-insights" component={CustomerInsights} />
          <Route path="/solutions/dynamics365/field-service" component={FieldService} />
          <Route path="/solutions/dynamics365/supply-chain" component={SupplyChainManagement} />
          <Route path="/solutions/customer-service" component={CustomerService} />
          <Route path="/solutions/power-platform" component={PowerPlatform} />
          <Route path="/solutions/power-bi" component={PowerBI} />
          <Route path="/solutions/azure" component={Azure} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/nj-manufacturing-digital-revolution-2025" component={NJManufacturingDigitalRevolution} />
          <Route path="/blog/nj-quickbooks-migration-lessons-2025" component={QuickBooksMigrationLessons} />
          <Route path="/blog/port-newark-supply-chain-bc-2025" component={PortNewarkSupplyChain} />
          <Route path="/blog/pharma-compliance-nj-business-central-2025" component={PharmaCompliance} />
          <Route path="/blog/montclair-to-manhattan-nyc-markets-2025" component={MontclairNYCServing} />
          <Route path="/blog/chemical-industry-scaling-camden-global-2025" component={ChemicalIndustryScaling} />
          <Route path="/blog/nj-tax-complexity-automated-compliance-2025" component={NJTaxComplexity} />
          
          {/* High-Intent Landing Pages */}
          <Route path="/quickbooks-emergency-help-nj" component={QuickBooksEmergency} />
          <Route path="/quickbooks-migration-service-nj" component={QuickBooksMigrationService} />
          <Route path="/business-central-implementation-nj" component={BusinessCentralImplementationNJ} />
          <Route path="/erp-implementation-problems-rescue-nj" component={ERPImplementationProblem} />
          <Route path="/erp-services-montclair-nj" component={MontclairNJERPServices} />
          
          {/* Location Pages */}
          <Route path="/locations/montclair-office" component={MontclairOffice} />
          <Route path="/locations/iselin-office" component={IselinOffice} />
          <Route path="/locations/cranford-office" component={CranfordOffice} />
          
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/rescue-projects" component={RescueProjects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfService} />
          <Route path="/cookies" component={CookiePolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  useEffect(() => {
    // Initialize analytics, error tracking, and A/B testing
    analytics.init();
    initErrorTracking();
    abTesting.init();
    
    // Track page load time for performance monitoring
    (window as any).pageLoadTime = Date.now();
    
    // Track scroll depth for engagement metrics
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (scrollDepth === 100) {
          analytics.trackScrollDepth(100);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SentryErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
              <Toaster />
              <Router />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SentryErrorBoundary>
  );
}

export default App;
