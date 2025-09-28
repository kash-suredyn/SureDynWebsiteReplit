import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOWrapper from "@/components/layout/SEOWrapper";
import { MapPin, Phone, Mail, Clock, Users, Award } from "lucide-react";

const MontclairOffice = () => {
  const officeFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Consulting Team",
      description: "15+ certified Microsoft Dynamics 365 consultants specializing in Business Central implementations"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Project Rescue Specialists",
      description: "Headquarters for our renowned Business Central project rescue services with 95% success rate"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Strategic NYC Access",
      description: "Convenient location serving North Jersey, NYC Metro Area, and Westchester County clients"
    }
  ];

  const nearbyLandmarks = [
    "Montclair State University",
    "Montclair Art Museum", 
    "Watchung Plaza",
    "Valley Road Business District",
    "NYC Metro Access via NJ Transit"
  ];

  const serviceAreas = [
    "Morris County", "Essex County", "Passaic County", "Bergen County",
    "Manhattan", "Westchester County", "Fairfield County CT"
  ];

  const localServices = [
    "Microsoft Dynamics 365 Business Central Implementation",
    "QuickBooks to Business Central Migration", 
    "Business Central Project Rescue Services",
    "Dynamics GP Migration to Business Central",
    "ERP Consulting and Strategy",
    "Custom Business Central Development",
    "Business Intelligence Solutions"
  ];

  return (
    <SEOWrapper 
      customSEO={{
        title: "SureDyn Montclair NJ Office | Microsoft Dynamics 365 Business Central Headquarters",
        description: "Visit SureDyn's Montclair NJ headquarters at 28 Valley Road for Microsoft Dynamics 365 Business Central implementation, project rescue services, and QuickBooks migration. Serving North Jersey, NYC Metro Area. Call +1-732-585-5563.",
        keywords: "SureDyn Montclair office, Business Central consultant Montclair NJ, ERP implementation Essex County, QuickBooks migration North Jersey, Dynamics 365 consultant NYC area"
      }}
      schemaType="local-business"
      enableBreadcrumbs={true}
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    SureDyn Montclair Office{" "}
                    <span className="text-suredyn-orange">Microsoft Dynamics 365 Headquarters</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Our Montclair headquarters at 28 Valley Road serves as the center of excellence for Microsoft Dynamics 365 Business Central implementation, project rescue services, and QuickBooks migration throughout North Jersey and the NYC Metro Area.
                  </p>
                </div>

                {/* Office Contact Info */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-suredyn-orange">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Montclair Headquarters</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-suredyn-orange" />
                      <div>
                        <p className="text-gray-900 font-medium">28 Valley Road</p>
                        <p className="text-gray-600">Montclair, NJ 07042</p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Montclair Location?</h3>
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
                Montclair Office Specializations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Montclair headquarters specializes in complex Business Central implementations and project rescue services for businesses throughout Essex County and beyond.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localServices.map((service, index) => (
                <AnimatedSection key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    Professional {service.toLowerCase()} services delivered from our Montclair headquarters to businesses across North Jersey and the NYC Metro Area.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-block mt-4 text-suredyn-orange hover:text-orange-600 font-medium text-sm"
                    data-testid={`link-${service.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    Learn More →
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
                  Areas We Serve from Montclair
                </h2>
                <p className="text-gray-600 mb-6">
                  Our Montclair office strategically serves clients throughout North Jersey, New York Metro Area, and Connecticut. We're perfectly positioned to provide on-site support and maintain close client relationships.
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
                  Nearby Landmarks & Access
                </h2>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Montclair's business district with excellent transportation access to New York City and major New Jersey business centers.
                </p>
                
                <div className="space-y-3">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-suredyn-orange" />
                      <span className="text-gray-700">{landmark}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Transportation Access</h4>
                  <p className="text-gray-600 text-sm">
                    Easy access via NJ Transit bus lines, proximity to major highways (Route 3, Route 46, Garden State Parkway), 
                    and convenient access to Newark Airport and NYC Penn Station.
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

export default MontclairOffice;