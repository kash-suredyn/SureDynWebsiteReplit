import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOWrapper from "@/components/layout/SEOWrapper";
import { MapPin, Phone, Mail, Clock, Factory, Cog, Package } from "lucide-react";

const CranfordOffice = () => {
  const officeFeatures = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Manufacturing ERP Specialists",
      description: "Dedicated team for manufacturing, supply chain, and warehouse management implementations"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Industrial Solutions",
      description: "Expertise in complex manufacturing processes, inventory management, and production planning"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Supply Chain Excellence",
      description: "Advanced warehouse management and distribution solutions for Union County manufacturers"
    }
  ];

  const nearbyLandmarks = [
    "Union County Manufacturing Corridor",
    "Port Newark Access Routes",
    "Garden State Parkway Exit 136",
    "Cranford Industrial Park",
    "Union County Commerce Center",
    "Elizabeth Port Authority"
  ];

  const serviceAreas = [
    "Union County", "Elizabeth", "Newark", "Jersey City", "Hudson County",
    "Philadelphia Metro Area", "Manufacturing Corridor NJ"
  ];

  const localServices = [
    "Manufacturing ERP Solutions",
    "Supply Chain Management Implementation",
    "Warehouse Management Systems",
    "Business Central for Manufacturing",
    "Inventory Management Solutions",
    "Production Planning Systems",
    "Quality Control Integration"
  ];

  const industryFocus = [
    {
      title: "Chemical Manufacturing",
      description: "Specialized ERP solutions for New Jersey's chemical and pharmaceutical manufacturers with compliance and traceability features.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Food & Beverage",
      description: "Complete manufacturing solutions with lot tracking, expiration management, and FDA compliance capabilities.",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "Industrial Equipment",
      description: "Custom Business Central implementations for machinery manufacturers, including complex BOM management and project tracking.",
      icon: <Cog className="w-6 h-6" />
    }
  ];

  return (
    <SEOWrapper 
      customSEO={{
        title: "SureDyn Cranford NJ Office | Manufacturing ERP & Supply Chain Solutions",
        description: "SureDyn's Cranford office at 555 South Avenue East specializes in manufacturing ERP solutions, warehouse management, and supply chain implementations for Union County. Serving Elizabeth, Newark, Jersey City. Call +1-732-585-5563.",
        keywords: "SureDyn Cranford office, manufacturing ERP Union County, warehouse management Elizabeth NJ, supply chain solutions Newark NJ, Business Central manufacturing specialist"
      }}
      schemaType="local-business"
      enableBreadcrumbs={true}
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    SureDyn Cranford Office{" "}
                    <span className="text-suredyn-orange">Manufacturing ERP Specialists</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Our Cranford office specializes in manufacturing ERP solutions, supply chain management, and warehouse optimization for Union County's industrial corridor, serving manufacturers from Elizabeth to Jersey City and the Philadelphia Metro Area.
                  </p>
                </div>

                {/* Office Contact Info */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-suredyn-orange">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Manufacturing Solutions Center</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-suredyn-orange" />
                      <div>
                        <p className="text-gray-900 font-medium">555 South Avenue East</p>
                        <p className="text-gray-600">Cranford, NJ 07016</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-suredyn-orange" />
                      <a href="tel:+1-732-585-5563" className="text-suredyn-orange hover:text-orange-600 font-medium">
                        +1-732-585-5563
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-suredyn-orange" />
                      <a href="mailto:info@suredyn.com" className="text-suredyn-orange hover:text-orange-600 font-medium">
                        info@suredyn.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-suredyn-orange" />
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="lg:text-center">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h3>
                  <div className="space-y-4">
                    {officeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 text-left">
                        <div className="w-10 h-10 bg-suredyn-orange-pale rounded-lg flex items-center justify-center text-suredyn-orange">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Manufacturing ERP Specializations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Cranford office delivers specialized manufacturing ERP solutions designed for the complex needs of Union County's industrial manufacturers and distributors.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localServices.map((service, index) => (
                <AnimatedSection key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    Specialized {service.toLowerCase()} for Union County manufacturers, delivered from our Cranford manufacturing solutions center.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-block mt-4 text-suredyn-orange hover:text-orange-600 font-medium text-sm"
                    data-testid={`link-${service.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    Get Quote →
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Union County Manufacturing Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep expertise in the specific manufacturing challenges and compliance requirements of Union County's major industrial sectors.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industryFocus.map((industry, index) => (
                <AnimatedSection key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-suredyn-orange-pale rounded-lg flex items-center justify-center text-suredyn-orange mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Industrial Corridor Coverage
                </h2>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Union County's manufacturing district, our Cranford office provides specialized support to manufacturers throughout the industrial corridor from Elizabeth to Jersey City.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-suredyn-orange rounded-full"></div>
                      <span className="text-gray-700 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Strategic Industrial Location
                </h2>
                <p className="text-gray-600 mb-6">
                  Positioned for easy access to major manufacturing centers, ports, and transportation networks essential for New Jersey's industrial economy.
                </p>
                
                <div className="space-y-3">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-suredyn-orange" />
                      <span className="text-gray-700">{landmark}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Port & Logistics Access</h4>
                  <p className="text-gray-600 text-sm">
                    Direct routes to Port Newark, Newark Airport cargo facilities, and major interstate highways. 
                    Ideal for manufacturers requiring integrated supply chain and logistics management solutions.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </SEOWrapper>
  );
};

export default CranfordOffice;