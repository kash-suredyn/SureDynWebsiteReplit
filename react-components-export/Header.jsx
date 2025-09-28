import React, { useState } from 'react';
import { Link } from 'wouter';

const Header = ({ 
  logo = "SureDyn", 
  navItems = [
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
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  ctaButton = { text: "Get Started", href: "/contact" },
  className = ""
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className={`bg-white shadow-sm border-b sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-suredyn-orange hover:text-suredyn-orange-dark transition-colors">
              {logo}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="text-gray-900 hover:text-suredyn-orange px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                    >
                      {item.label}
                      <svg 
                        className="ml-1 h-4 w-4 transition-transform duration-200" 
                        style={{ transform: openDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-suredyn-orange transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-900 hover:text-suredyn-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href={ctaButton.href}
              className="bg-suredyn-orange text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-suredyn-orange-dark transition-colors shadow-sm"
            >
              {ctaButton.text}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-suredyn-orange p-2"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className="w-full text-left text-gray-900 hover:text-suredyn-orange px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                      >
                        {item.label}
                        <svg 
                          className="h-4 w-4 transition-transform duration-200" 
                          style={{ transform: openDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {openDropdown === index && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block text-gray-600 hover:text-suredyn-orange px-3 py-2 rounded-md text-sm transition-colors"
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-900 hover:text-suredyn-orange px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href={ctaButton.href}
                  className="block text-center bg-suredyn-orange text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-suredyn-orange-dark transition-colors mx-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {ctaButton.text}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;