import React from 'react';
import { Link } from 'wouter';

const CTASection = ({
  title = "Ready to Transform Your Business?",
  description = "Contact SureDyn today to discuss your Microsoft Dynamics 365 Business Central needs and discover how we can help your business succeed.",
  primaryButton = { text: "Get Started Today", href: "/contact" },
  secondaryButton = null, // Optional second button
  backgroundColor = "#fa9446", // SureDyn orange
  textColor = "white",
  maxWidth = "4xl", // Container max width
  paddingY = "16", // Vertical padding
  className = ""
}) => {
  const maxWidthClasses = {
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl", 
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl"
  };

  const textColorClasses = {
    "white": "text-white",
    "black": "text-black",
    "gray": "text-gray-900"
  };

  return (
    <section 
      className={`py-${paddingY} ${className}`}
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${maxWidthClasses[maxWidth]} mx-auto text-center`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textColorClasses[textColor]}`}>
            {title}
          </h2>
          
          {description && (
            <p className={`text-xl mb-8 ${textColor === 'white' ? 'text-white/90' : 'text-gray-600'} leading-relaxed`}>
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-suredyn-orange hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {primaryButton.text}
              </Link>
            )}
            
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border-2 transition-all duration-200 ${
                  textColor === 'white' 
                    ? 'border-white text-white hover:bg-white hover:text-suredyn-orange'
                    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;