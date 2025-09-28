import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import suredynLogoDark from "@assets/preview_1755831346950.png";
import { analytics } from "@/lib/analytics";

const Header = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);
 const [isSticky, setIsSticky] = useState(false);
 const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
 const [location] = useLocation();

 useEffect(() => {
  const handleScroll = () => {
   const scrollY = window.scrollY;
   const documentHeight = document.documentElement.scrollHeight;
   const windowHeight = window.innerHeight;
   
   setIsScrolled(scrollY > 10);
   // Make header sticky when scrolled down significantly or near bottom
   const shouldBeSticky = scrollY > 200 || scrollY + windowHeight >= documentHeight - 100;
   setIsSticky(shouldBeSticky);
   
   // Add/remove body class for sticky header spacing
   if (shouldBeSticky) {
    document.body.classList.add('header-sticky');
   } else {
    document.body.classList.remove('header-sticky');
   }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
   window.removeEventListener("scroll", handleScroll);
   // Cleanup body class on unmount
   document.body.classList.remove('header-sticky');
  };
 }, []);

 useEffect(() => {
  setIsMobileMenuOpen(false);
  setOpenMobileSubmenu(null);
 }, [location]);

 const isActivePath = (path: string) => {
  if (path === "/" && location === "/") return true;
  if (path !== "/" && location.startsWith(path)) return true;
  return false;
 };

 const dynamics365Solutions = [
  { name: "Dynamics 365 Business Central", href: "/solutions/dynamics365" },
  { name: "Dynamics 365 Finance", href: "/solutions/dynamics365/finance" },
  { name: "Dynamics 365 Project Operations", href: "/solutions/dynamics365/project-operations" },
  { name: "Dynamics 365 Sales", href: "/solutions/dynamics365/sales" },
  { name: "Dynamics 365 Customer Service", href: "/solutions/dynamics365/customer-service" },
  { name: "Dynamics 365 Customer Insights", href: "/solutions/dynamics365/customer-insights" },
  { name: "Dynamics 365 Field Service", href: "/solutions/dynamics365/field-service" },
  { name: "Dynamics 365 Supply Chain Management", href: "/solutions/dynamics365/supply-chain" },
 ];

 const solutions = [
  { 
   name: "Microsoft Dynamics 365", 
   href: "/solutions/dynamics365", 
   hasSubmenu: true,
   submenu: dynamics365Solutions 
  },
  { name: "Microsoft Power Platform", href: "/solutions/power-platform" },
  { name: "Microsoft Power BI", href: "/solutions/power-bi" },
  { name: "Microsoft Azure", href: "/solutions/azure" },
 ];

 const services = [
  { name: "Project Rescue Services", href: "/services/project-rescue", isKey: false },
  { name: "Implementation Services", href: "/services/implementation", isKey: false },
  { name: "Upgrade Services", href: "/services/upgrade", isKey: false },
  { name: "Support & Maintenance", href: "/services/support", isKey: false },
  { name: "Custom Development", href: "/services/custom-development", isKey: false },
  { name: "Training Services", href: "/services/training", isKey: false },
  { name: "Business Intelligence", href: "/services/business-intelligence", isKey: false },
  { name: "QuickBooks Migration", href: "/services/quickbooks-migration", isKey: false },
  { name: "Dynamics GP Migration", href: "/services/dynamics-gp-migration", isKey: false },
  { name: "Dynamics NAV Migration", href: "/services/dynamics-nav-migration", isKey: false },
 ];

 const industries = [
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Distribution", href: "/industries/distribution" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Professional Services", href: "/industries/professional-services" },
  { name: "Financial Services", href: "/industries/financial-services" },
 ];

 return (
  <header 
   className={cn(
    "bg-white transition-all duration-300 z-50",
    isSticky ? "fixed top-0 left-0 right-0 shadow-xl" : "shadow-lg",
    isScrolled && "backdrop-blur-sm"
   )}
   role="banner"
  >
   {/* Contact Info Bar */}
   <div className="bg-orange-800 text-white py-2 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
      <div className="flex items-center space-x-6">
       <div className="flex items-center">
        <i className="fas fa-phone-alt mr-2 text-suredyn-orange"></i>
        <a 
         href="tel:+17325855563" 
         className="hover:text-suredyn-orange transition-colors"
         onClick={() => analytics.trackPhoneClick('header')}
        >
         +1-732-585-5563
        </a>
       </div>
       <div className="flex items-center">
        <i className="fas fa-envelope mr-2 text-suredyn-orange"></i>
        <a 
         href="mailto:info@suredyn.com" 
         className="hover:text-suredyn-orange transition-colors"
         onClick={() => analytics.trackCTAClick('info@suredyn.com', 'header', 'email')}
        >
         info@suredyn.com
        </a>
       </div>
      </div>
      <div className="flex items-center space-x-4 text-xs">
       <span className="hidden sm:inline">New Jersey • Ohio • Nationwide Support</span>
       <div className="flex space-x-3">
        <a href="#" className="hover:text-suredyn-orange transition-colors" aria-label="LinkedIn">
         <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="hover:text-suredyn-orange transition-colors" aria-label="X (formerly Twitter)">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
         </svg>
        </a>
       </div>
      </div>
     </div>
    </div>
   </div>
   {/* Main Navigation */}
   <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200" role="navigation" aria-label="Main navigation">
    <div className="flex justify-between items-center h-16">
     {/* Logo */}
     <div className="flex-shrink-0 flex items-center">
      <Link href="/">
       <img 
        src={suredynLogoDark}
        alt="SureDyn Business Solutions" 
        className="h-12 w-auto cursor-pointer"
        aria-label="SureDyn Business Solutions Home"
       />
      </Link>
     </div>
     
     {/* Desktop Navigation */}
     <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4 xl:space-x-6">
       <Link href="/">
        <span className={cn(
         "px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer",
         isActivePath("/") 
          ? "text-suredyn-orange border-b-2 border-suredyn-orange" 
          : "text-gray-700 hover:text-suredyn-orange"
        )}>
         Home
        </span>
       </Link>
       
       {/* Solutions Dropdown */}
       <div className="relative group">
        <button 
         className={cn(
          "px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200",
          isActivePath("/solutions") 
           ? "text-suredyn-orange" 
           : "text-gray-700 hover:text-suredyn-orange"
         )}
         aria-expanded="false" 
         aria-haspopup="true"
        >
         Solutions
         <i className="fas fa-chevron-down ml-1 text-xs"></i>
        </button>
        <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
         <div className="py-2">
          {solutions.map((solution) => (
           <div key={solution.href} className="relative group/sub">
            {solution.hasSubmenu ? (
             <>
              <Link href={solution.href}>
               <span className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover  hover:text-suredyn-orange-dark transition-colors duration-200 cursor-pointer">
                {solution.name}
                <i className="fas fa-chevron-right text-xs"></i>
               </span>
              </Link>
              <div className="absolute left-full top-0 mt-0 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-200 z-50">
               <div className="py-2">
                {solution.submenu?.map((subItem) => (
                 <Link key={subItem.href} href={subItem.href}>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover  hover:text-suredyn-orange-dark transition-colors duration-200 cursor-pointer">
                   {subItem.name}
                  </span>
                 </Link>
                ))}
               </div>
              </div>
             </>
            ) : (
             <Link href={solution.href}>
              <span className="block px-4 py-2 text-sm text-gray-700 hover  hover:text-suredyn-orange-dark transition-colors duration-200 cursor-pointer">
               {solution.name}
              </span>
             </Link>
            )}
           </div>
          ))}
         </div>
        </div>
       </div>
       
       {/* Services Dropdown */}
       <div className="relative group">
        <button 
         className={cn(
          "px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200",
          isActivePath("/services") 
           ? "text-suredyn-orange" 
           : "text-gray-700 hover:text-suredyn-orange"
         )}
         aria-expanded="false" 
         aria-haspopup="true"
        >
         Services
         <i className="fas fa-chevron-down ml-1 text-xs"></i>
        </button>
        <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
         <div className="py-2">
          {services.map((service) => (
           <Link key={service.href} href={service.href}>
            <span className={cn(
             "block px-4 py-2 text-sm transition-colors duration-200 cursor-pointer",
             service.isKey 
              ? "text-suredyn-orange font-semibold bg-suredyn-orange/10 hover:bg-suredyn-orange/20" 
              : "text-gray-700 hover  hover:text-suredyn-orange-dark"
            )}>
             {service.name}
            </span>
           </Link>
          ))}
         </div>
        </div>
       </div>
       
       {/* Industries Dropdown */}
       <div className="relative group">
        <button 
         className={cn(
          "px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200",
          isActivePath("/industries") 
           ? "text-suredyn-orange" 
           : "text-gray-700 hover:text-suredyn-orange"
         )}
         aria-expanded="false" 
         aria-haspopup="true"
        >
         Industries
         <i className="fas fa-chevron-down ml-1 text-xs"></i>
        </button>
        <div className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
         <div className="py-2">
          {industries.map((industry) => (
           <Link key={industry.href} href={industry.href}>
            <span className="block px-4 py-2 text-sm text-gray-700 hover  hover:text-suredyn-orange-dark transition-colors duration-200 cursor-pointer">
             {industry.name}
            </span>
           </Link>
          ))}
         </div>
        </div>
       </div>
       
       {/* Resources Dropdown */}
       <div className="relative group">
        <button 
         className={cn(
          "px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200",
          (isActivePath("/blog") || isActivePath("/case-studies") || isActivePath("/rescue-projects")) 
           ? "text-suredyn-orange" 
           : "text-gray-700 hover:text-suredyn-orange"
         )}
         aria-expanded="false" 
         aria-haspopup="true"
        >
         Resources
         <i className="fas fa-chevron-down ml-1 text-xs"></i>
        </button>
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 z-50">
         <div className="py-2">
          <Link href="/blog">
           <span className="block px-4 py-2 text-sm text-gray-700 hover  hover:text-suredyn-orange-dark transition-colors duration-200 cursor-pointer">
            Blog
           </span>
          </Link>
          <Link href="/case-studies">
           <span className="block px-4 py-2 text-sm text-gray-700 hover  hover:text-suredyn-orange-dark transition-colors duration-200 cursor-pointer">
            Case Studies
           </span>
          </Link>
          <Link href="/rescue-projects">
           <span className="block px-4 py-2 text-sm text-gray-700 hover  hover:text-suredyn-orange-dark transition-colors duration-200 cursor-pointer">
            Rescue Projects
           </span>
          </Link>
         </div>
        </div>
       </div>
       
       <Link href="/about">
        <span className={cn(
         "px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer",
         isActivePath("/about") 
          ? "text-suredyn-orange border-b-2 border-suredyn-orange" 
          : "text-gray-700 hover:text-suredyn-orange"
        )}>
         About
        </span>
       </Link>
       
       <Link href="/contact">
        <span className={cn(
         "px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer",
         isActivePath("/contact") 
          ? "text-suredyn-orange border-b-2 border-suredyn-orange" 
          : "text-gray-700 hover:text-suredyn-orange"
        )}>
         Contact
        </span>
       </Link>
      </div>
     </div>
     
     {/* CTA Button */}
     <div className="hidden md:block">
      <Link href="/contact">
       <span className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg min-touch-target flex items-center cursor-pointer">
        Get Started Today
       </span>
      </Link>
     </div>
     
     {/* Mobile Menu Button */}
     <div className="md:hidden">
      <button 
       type="button" 
       className="text-gray-700 hover:text-suredyn-orange focus:outline-none focus:ring-2 focus:ring-suredyn-orange p-2 min-touch-target" 
       aria-expanded={isMobileMenuOpen}
       onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
       <span className="sr-only">Open main menu</span>
       <i className={cn("fas text-xl transition-transform duration-200", 
        isMobileMenuOpen ? "fa-times" : "fa-bars")}></i>
      </button>
     </div>
    </div>
    
    {/* Mobile Navigation */}
    <div className={cn("md:hidden transition-all duration-300 overflow-hidden", 
     isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}>
     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 max-h-screen overflow-y-auto">
      
      {/* Home */}
      <Link href="/">
       <span className="text-gray-700 hover:text-suredyn-orange block px-3 py-2 text-base font-medium cursor-pointer">
        Home
       </span>
      </Link>
      
      {/* Solutions - Collapsible */}
      <div>
       <button 
        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'solutions' ? null : 'solutions')}
        className="w-full text-left text-gray-700 hover:text-suredyn-orange flex items-center justify-between px-3 py-2 text-base font-medium"
       >
        Solutions
        <i className={cn("fas fa-chevron-down transition-transform duration-200", 
         openMobileSubmenu === 'solutions' ? "rotate-180" : "")}></i>
       </button>
       
       <div className={cn("transition-all duration-300 overflow-hidden", 
        openMobileSubmenu === 'solutions' ? "max-h-96" : "max-h-0")}>
        <div className="pl-6 space-y-1">
         {solutions.map((solution) => (
          <div key={solution.href}>
           {solution.hasSubmenu ? (
            <div>
             <button 
              onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'dynamics365' ? null : 'dynamics365')}
              className="w-full text-left text-gray-600 hover:text-suredyn-orange flex items-center justify-between py-2 text-sm"
             >
              {solution.name}
              <i className={cn("fas fa-chevron-down transition-transform duration-200 text-xs", 
               openMobileSubmenu === 'dynamics365' ? "rotate-180" : "")}></i>
             </button>
             
             <div className={cn("transition-all duration-300 overflow-hidden", 
              openMobileSubmenu === 'dynamics365' ? "max-h-96" : "max-h-0")}>
              <div className="pl-4 space-y-1">
               {solution.submenu?.map((subItem) => (
                <Link key={subItem.href} href={subItem.href}>
                 <span className="text-gray-500 hover:text-suredyn-orange block py-1 text-xs cursor-pointer">
                  {subItem.name}
                 </span>
                </Link>
               ))}
              </div>
             </div>
            </div>
           ) : (
            <Link href={solution.href}>
             <span className="text-gray-600 hover:text-suredyn-orange block py-2 text-sm cursor-pointer">
              {solution.name}
             </span>
            </Link>
           )}
          </div>
         ))}
        </div>
       </div>
      </div>
      
      {/* Services - Collapsible */}
      <div>
       <button 
        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'services' ? null : 'services')}
        className="w-full text-left text-gray-700 hover:text-suredyn-orange flex items-center justify-between px-3 py-2 text-base font-medium"
       >
        Services
        <i className={cn("fas fa-chevron-down transition-transform duration-200", 
         openMobileSubmenu === 'services' ? "rotate-180" : "")}></i>
       </button>
       
       <div className={cn("transition-all duration-300 overflow-hidden", 
        openMobileSubmenu === 'services' ? "max-h-96" : "max-h-0")}>
        <div className="pl-6 space-y-1">
         {services.map((service) => (
          <Link key={service.href} href={service.href}>
           <span className={cn(
            "block py-2 text-sm cursor-pointer",
            service.isKey 
             ? "text-suredyn-orange font-semibold" 
             : "text-gray-600 hover:text-suredyn-orange"
           )}>
            {service.name}
           </span>
          </Link>
         ))}
        </div>
       </div>
      </div>
      
      {/* Industries - Collapsible */}
      <div>
       <button 
        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'industries' ? null : 'industries')}
        className="w-full text-left text-gray-700 hover:text-suredyn-orange flex items-center justify-between px-3 py-2 text-base font-medium"
       >
        Industries
        <i className={cn("fas fa-chevron-down transition-transform duration-200", 
         openMobileSubmenu === 'industries' ? "rotate-180" : "")}></i>
       </button>
       
       <div className={cn("transition-all duration-300 overflow-hidden", 
        openMobileSubmenu === 'industries' ? "max-h-96" : "max-h-0")}>
        <div className="pl-6 space-y-1">
         {industries.map((industry) => (
          <Link key={industry.href} href={industry.href}>
           <span className="text-gray-600 hover:text-suredyn-orange block py-2 text-sm cursor-pointer">
            {industry.name}
           </span>
          </Link>
         ))}
        </div>
       </div>
      </div>
      
      {/* Resources - Collapsible */}
      <div>
       <button 
        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'resources' ? null : 'resources')}
        className="w-full text-left text-gray-700 hover:text-suredyn-orange flex items-center justify-between px-3 py-2 text-base font-medium"
       >
        Resources
        <i className={cn("fas fa-chevron-down transition-transform duration-200", 
         openMobileSubmenu === 'resources' ? "rotate-180" : "")}></i>
       </button>
       
       <div className={cn("transition-all duration-300 overflow-hidden", 
        openMobileSubmenu === 'resources' ? "max-h-96" : "max-h-0")}>
        <div className="pl-6 space-y-1">
         <Link href="/blog">
          <span className="text-gray-600 hover:text-suredyn-orange block py-2 text-sm cursor-pointer">
           Blog
          </span>
         </Link>
         <Link href="/case-studies">
          <span className="text-gray-600 hover:text-suredyn-orange block py-2 text-sm cursor-pointer">
           Case Studies
          </span>
         </Link>
         <Link href="/rescue-projects">
          <span className="text-gray-600 hover:text-suredyn-orange block py-2 text-sm cursor-pointer">
           Rescue Projects
          </span>
         </Link>
        </div>
       </div>
      </div>
      
      {/* About */}
      <Link href="/about">
       <span className="text-gray-700 hover:text-suredyn-orange block px-3 py-2 text-base font-medium cursor-pointer">
        About
       </span>
      </Link>
      
      {/* Contact */}
      <Link href="/contact">
       <span className="text-gray-700 hover:text-suredyn-orange block px-3 py-2 text-base font-medium cursor-pointer">
        Contact
       </span>
      </Link>
      
      {/* CTA Button */}
      <div className="px-3 py-2">
       <Link href="/contact">
        <span className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white block text-center px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer">
         Get Started Today
        </span>
       </Link>
      </div>
     </div>
    </div>
   </nav>
  </header>
 );
};

export default Header;
