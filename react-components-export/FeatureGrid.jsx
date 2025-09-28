import React from 'react';

const FeatureGrid = ({
  title = "Why Choose Us?",
  description = "Discover the benefits of working with our expert team.",
  features = [
    {
      icon: "⚡",
      title: "Fast Implementation",
      description: "Quick and efficient setup to get your business running smoothly."
    },
    {
      icon: "🔧",
      title: "Expert Support", 
      description: "Comprehensive support from certified Microsoft Dynamics 365 professionals."
    },
    {
      icon: "📊",
      title: "Data Migration",
      description: "Seamless migration from your existing systems with zero data loss."
    }
  ],
  columns = "auto", // "auto", "1", "2", "3", "4"
  cardStyle = "default", // "default", "minimal", "elevated"
  showIcons = true,
  backgroundColor = "white", // "white", "gray", "transparent"
  className = ""
}) => {
  const gridColClasses = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "auto": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  };

  const backgroundClasses = {
    "white": "bg-white",
    "gray": "bg-gray-50",
    "transparent": "bg-transparent"
  };

  const cardStyleClasses = {
    "default": "bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200",
    "minimal": "bg-transparent p-6",
    "elevated": "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
  };

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

        {/* Features Grid */}
        <div className={`grid ${gridColClasses[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div key={index} className={cardStyleClasses[cardStyle]}>
              {showIcons && feature.icon && (
                <div className="mb-4">
                  {typeof feature.icon === 'string' ? (
                    <div className="w-12 h-12 bg-suredyn-orange/10 rounded-lg flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-suredyn-orange/10 rounded-lg flex items-center justify-center text-suredyn-orange">
                      {feature.icon}
                    </div>
                  )}
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;