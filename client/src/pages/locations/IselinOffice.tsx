import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOWrapper from "@/components/layout/SEOWrapper";
import { MapPin, Phone, Mail, Clock, Users, Truck, Building } from "lucide-react";

const IselinOffice = () => {
  const officeFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Technical Support Hub",
      description: "Specialized team for Business Central technical support, user training, and adoption services"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Central Jersey Focus",
      description: "Strategic location serving Middlesex, Union, Somerset, and Mercer Counties"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics & Distribution",
      description: "Expertise in ERP solutions for New Jersey's major distribution and logistics corridors"
    }
  ];

  const nearbyLandmarks = [
    "Raritan Center Business Park",
    "Woodbridge Center Mall",
    "Menlo Park Mall",
    "New Jersey Turnpike Exit 11",
    "Route 1 Business Corridor",
    "Rutgers University Campus"
  ];

  const serviceAreas = [
    "Middlesex County", "Union County", "Somerset County", "Mercer County",
    "New Brunswick", "Princeton", "Edison", "Woodbridge", "Perth Amboy"
  ];

  const localServices = [
    "Business Central Implementation Support",
    "ERP Training and User Adoption",
    "Technical Support Services",
    "Custom Report Development", 
    "Data Migration Services",
    "Business Central Optimization",
    "Integration Development"
  ];

  return (
    <SEOWrapper 
      customSEO={{
        title: "SureDyn Iselin NJ Office | Central Jersey Business Central Support & Training",
        description: "SureDyn's Iselin office at 493 Raritan Center Parkway provides Business Central support, user training, and technical services for Central New Jersey. Serving Middlesex, Union & Somerset Counties. Call +1-732-585-5563.",
        keywords: "SureDyn Iselin office, Business Central support Central Jersey, ERP training Middlesex County, Dynamics 365 consultant Edison NJ, technical support Woodbridge NJ"
      }}
      schemaType="local-business"
      enableBreadcrumbs={true}
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    SureDyn Iselin Office{" "}
                    <span className="text-suredyn-orange">Central Jersey Support Hub</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Our Iselin office in Raritan Center serves as the technical support and training hub for Central New Jersey, specializing in Business Central user adoption, custom development, and ongoing ERP support services.
                  </p>
                </div>

                {/* Office Contact Info */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-suredyn-orange">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Iselin Support Center</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-suredyn-orange" />
                      <div>
                        <p className="text-gray-900 font-medium">493 Raritan Center Parkway</p>
                        <p className="text-gray-600">Iselin, NJ 08830</p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Iselin Office Advantages</h3>
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
                Central Jersey Support Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Iselin office focuses on post-implementation support, user training, and ongoing optimization of Business Central systems for Central New Jersey businesses.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localServices.map((service, index) => (
                <AnimatedSection key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    Expert {service.toLowerCase()} delivered from our Central New Jersey location to businesses throughout Middlesex, Union, and Somerset Counties.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-block mt-4 text-suredyn-orange hover:text-orange-600 font-medium text-sm"
                    data-testid={`link-${service.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    Get Support →
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Central Jersey Coverage Area
                </h2>
                <p className="text-gray-600 mb-6">
                  Strategically located in Raritan Center, our Iselin office provides convenient access to businesses throughout Central New Jersey's major commercial and industrial corridors.
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
                  Business District Location
                </h2>
                <p className="text-gray-600 mb-6">
                  Located in the heart of one of New Jersey's largest business parks with excellent access to major transportation routes and business centers.
                </p>
                
                <div className="space-y-3">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-suredyn-orange" />
                      <span className="text-gray-700">{landmark}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Transportation Hub</h4>
                  <p className="text-gray-600 text-sm">
                    Direct access to NJ Turnpike, Route 1, Route 9, and Garden State Parkway. Close proximity to 
                    major distribution centers, ports, and Newark Airport for seamless business connectivity.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Industry Focus Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Central Jersey Industry Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Iselin team specializes in supporting businesses in Central New Jersey's key industries.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection className="text-center">
                <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-suredyn-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Logistics & Distribution</h3>
                <p className="text-gray-600">
                  Specialized ERP solutions for New Jersey's major distribution centers and logistics companies operating along the Route 1 corridor.
                </p>
              </AnimatedSection>

              <AnimatedSection className="text-center">
                <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-suredyn-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Services</h3>
                <p className="text-gray-600">
                  Business Central implementations for consulting firms, legal practices, and professional service organizations throughout Central Jersey.
                </p>
              </AnimatedSection>

              <AnimatedSection className="text-center">
                <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-suredyn-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Companies</h3>
                <p className="text-gray-600">
                  Supporting growing technology companies and startups in the Princeton-New Brunswick tech corridor with scalable ERP solutions.
                </p>
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

export default IselinOffice;