import { Link } from "wouter";
import suredynLogoWhite from "@assets/2-alternate_1755831381408.png";

const Footer = () => {
  const solutions = [
    { name: "Dynamics 365 Business Central", href: "/solutions/dynamics365" },
    { name: "Microsoft Power Platform", href: "/solutions/power-platform" },
    { name: "Microsoft Power BI", href: "/solutions/power-bi" },
    { name: "Microsoft Azure", href: "/solutions/azure" },
  ];

  const services = [
    { name: "Implementation", href: "/services" },
    { name: "Migration Services", href: "/services" },
    { name: "System Upgrades", href: "/services" },
    { name: "24/7 Support", href: "/services" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={suredynLogoWhite} 
              alt="SureDyn Business Solutions" 
              className="h-16 w-auto"
            />
            <p className="text-gray-300 text-sm">
              Expert Microsoft Dynamics 365 implementation, migration, and support services with 80+ years of combined experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/suredyn" 
                className="text-gray-400 hover:text-suredyn-orange transition-colors duration-200 min-touch-target" 
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://x.com/suredyn" 
                className="text-gray-400 hover:text-suredyn-orange transition-colors duration-200 min-touch-target" 
                aria-label="X (formerly Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/suredyn" 
                className="text-gray-400 hover:text-suredyn-orange transition-colors duration-200 min-touch-target" 
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link href={solution.href}>
                    <a className="text-gray-300 hover:text-suredyn-orange text-sm transition-colors duration-200">
                      {solution.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href}>
                    <a className="text-gray-300 hover:text-suredyn-orange text-sm transition-colors duration-200">
                      {service.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 flex items-center">
                <i className="fas fa-phone mr-2 text-suredyn-orange"></i>
                <a href="tel:+17325855563" className="hover:text-suredyn-orange transition-colors duration-200">
                  +1-732-585-5563
                </a>
              </li>
              <li className="text-gray-300 flex items-center">
                <i className="fas fa-envelope mr-2 text-suredyn-orange"></i>
                <a href="mailto:info@suredyn.com" className="hover:text-suredyn-orange transition-colors duration-200">
                  info@suredyn.com
                </a>
              </li>
              <li className="text-gray-300 flex items-start">
                <i className="fas fa-map-marker-alt mr-2 text-suredyn-orange mt-1"></i>
                <div>
                  <div>SureDyn Business Solutions LLC</div>
                  <div>28 Valley Road</div>
                  <div>Montclair, New Jersey - 07042</div>
                </div>
              </li>
              <li className="text-gray-300 flex items-center">
                <i className="fas fa-clock mr-2 text-suredyn-orange"></i>
                24/7 Emergency Support
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SureDyn Business Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy">
                <span className="text-gray-400 hover:text-suredyn-orange text-sm transition-colors duration-200 cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span className="text-gray-400 hover:text-suredyn-orange text-sm transition-colors duration-200 cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="/cookies">
                <span className="text-gray-400 hover:text-suredyn-orange text-sm transition-colors duration-200 cursor-pointer">
                  Cookie Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
