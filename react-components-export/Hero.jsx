import React from 'react';
import { Link } from 'wouter';

const Hero = ({
  title = "Transform Your Business with Microsoft Dynamics 365",
  subtitle = "Expert implementation, migration, and support services for Microsoft Dynamics 365 Business Central. Seamlessly migrate from QuickBooks, GP, or NAV to a modern ERP solution.",
  primaryButton = { text: "Start Your Project", href: "/contact" },
  secondaryButton = { text: "Our Services", href: "/services" },
  backgroundImage = null,
  backgroundGradient = "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  textAlign = "center", // "center" or "left"
  maxWidth = "4xl", // "3xl", "4xl", "5xl", "6xl", "7xl"
  paddingY = "20", // Tailwind spacing classes
  className = ""
}) => {
  const maxWidthClasses = {
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl", 
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl"
  };

  const textAlignClasses = {
    "center": "text-center",
    "left": "text-left"
  };

  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: backgroundGradient };

  return (
    <section 
      className={`py-${paddingY} ${className}`}
      style={backgroundStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${maxWidthClasses[maxWidth]} mx-auto ${textAlignClasses[textAlign]}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          
          <div className={`flex flex-col sm:flex-row gap-4 ${textAlign === 'center' ? 'justify-center' : 'justify-start'}`}>
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-suredyn-orange hover:bg-suredyn-orange-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {primaryButton.text}
              </Link>
            )}
            
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-suredyn-orange bg-transparent border-2 border-suredyn-orange hover:bg-suredyn-orange hover:text-white transition-all duration-200"
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

export default Hero;