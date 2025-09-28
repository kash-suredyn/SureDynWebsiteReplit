import React from 'react';

const ProcessSteps = ({
  title = "Our Process",
  description = "Our proven methodology ensures successful implementation and optimal results.",
  steps = [
    {
      number: 1,
      title: "Discovery",
      description: "We analyze your current systems and business requirements."
    },
    {
      number: 2, 
      title: "Planning",
      description: "We create a detailed implementation plan tailored to your needs."
    },
    {
      number: 3,
      title: "Execution", 
      description: "We implement the solution with minimal disruption to your business."
    },
    {
      number: 4,
      title: "Support",
      description: "We provide ongoing support and optimization services."
    }
  ],
  layout = "horizontal", // "horizontal", "vertical"
  stepStyle = "numbered", // "numbered", "icon", "minimal"
  backgroundColor = "white", // "white", "gray", "transparent"
  showConnectors = true,
  className = ""
}) => {
  const backgroundClasses = {
    "white": "bg-white",
    "gray": "bg-gray-50", 
    "transparent": "bg-transparent"
  };

  const StepNumber = ({ step, index, style }) => {
    if (style === "numbered") {
      return (
        <div className="w-16 h-16 bg-suredyn-orange text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
          {step.number || index + 1}
        </div>
      );
    } else if (style === "icon" && step.icon) {
      return (
        <div className="w-16 h-16 bg-suredyn-orange/10 text-suredyn-orange rounded-full flex items-center justify-center text-2xl">
          {step.icon}
        </div>
      );
    } else {
      return (
        <div className="w-4 h-4 bg-suredyn-orange rounded-full"></div>
      );
    }
  };

  if (layout === "vertical") {
    return (
      <section className={`py-16 ${backgroundClasses[backgroundColor]} ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {(title || description) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Vertical Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 relative">
                  <StepNumber step={step} index={index} style={stepStyle} />
                  {showConnectors && index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Horizontal layout (default)
  return (
    <section className={`py-16 ${backgroundClasses[backgroundColor]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {showConnectors && (
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 transform translate-y-1/2"></div>
          )}
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative z-10">
              <div className="mb-4 flex justify-center">
                <StepNumber step={step} index={index} style={stepStyle} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;