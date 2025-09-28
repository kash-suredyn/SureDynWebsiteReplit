import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import ImageSlider from "@/components/common/ImageSlider";
import SEOWrapper from "@/components/layout/SEOWrapper";
import { STATS, SOLUTIONS, SERVICES } from "@/lib/constants";
import homeSlide1 from "@assets/generated_images/Business_Team_Meeting_7d57e84b.png";
import homeSlide2 from "@assets/generated_images/ERP_Dashboard_View_48286860.png";
import homeSlide3 from "@assets/generated_images/Business_Transformation_Success_65ae8d61.png";
import manufacturingImage from "@assets/stock_images/modern_manufacturing_276793b8.jpg";
import warehouseImage from "@assets/stock_images/warehouse_distributi_231060be.jpg";
import retailImage from "@assets/stock_images/modern_retail_store__f8084574.jpg";
import professionalServicesImage from "@assets/stock_images/professional_service_4f1fe4b3.jpg";

const Home = () => {
  useEffect(() => {
    // Enhanced SEO meta tags
    document.title = "Microsoft Dynamics 365 Business Central Implementation & Migration Services | SureDyn Business Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading Microsoft Dynamics 365 Business Central implementation, migration, and support services. Expert consultants for QuickBooks to Business Central migration, ERP solutions, and comprehensive business optimization.');
    }

    // Add structured data for Local Business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "SureDyn Business Solutions",
      "description": "Microsoft Dynamics 365 Business Central implementation, migration, and consulting services",
      "url": "https://suredyn.com",
      "telephone": "+1-732-585-5563",
      "email": "info@suredyn.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "28 Valley Road",
        "addressLocality": "Montclair",
        "addressRegion": "NJ",
        "postalCode": "07042",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.8259",
        "longitude": "-74.2090"
      },
      "serviceArea": {
        "@type": "Place",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Microsoft Dynamics 365 Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Microsoft Dynamics 365 Business Central Implementation",
              "description": "Complete ERP implementation services for Business Central"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "QuickBooks to Business Central Migration",
              "description": "Seamless data migration from QuickBooks to Dynamics 365 Business Central"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dynamics GP to Business Central Migration",
              "description": "Expert migration services from Dynamics GP to Business Central"
            }
          }
        ]
      }
    };

    // Remove existing structured data
    const existingStructuredData = document.querySelector('#structured-data');
    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add additional meta tags for SEO
    const addMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('keywords', 'Microsoft Dynamics 365 Business Central New Jersey, ERP implementation NJ, QuickBooks migration Montclair NJ, Dynamics GP migration Essex County, business central consulting Newark, ERP consulting New Jersey, financial management software Iselin, supply chain management Cranford, business intelligence Port Newark, power bi integration New Jersey');
    addMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    addMetaTag('author', 'SureDyn Business Solutions');
    addMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    const addOGTag = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    addOGTag('og:title', 'Microsoft Dynamics 365 Business Central Implementation & Migration Services | SureDyn');
    addOGTag('og:description', 'Leading Microsoft Dynamics 365 Business Central implementation and migration services. Expert consultants for QuickBooks to Business Central migration and ERP solutions.');
    addOGTag('og:type', 'website');
    addOGTag('og:url', 'https://suredyn.com');
    addOGTag('og:site_name', 'SureDyn Business Solutions');
    addOGTag('og:locale', 'en_US');
  }, []);
  const sliderImages = [
    {
      src: homeSlide1,
      alt: "SureDyn Business Solutions team collaborating on Microsoft Dynamics 365 implementation",
      title: "New Jersey's Trusted Microsoft Dynamics 365 Business Central Partner",
      description: "Serving businesses across New Jersey from Montclair to Camden, SureDyn delivers expert Dynamics 365 implementation with deep understanding of local industry needs from Port Newark logistics to Princeton tech corridors."
    },
    {
      src: homeSlide2, 
      alt: "Business professionals working on digital transformation with Microsoft Dynamics 365",
      title: "Transform Your New Jersey Business for the Digital Age",
      description: "From Newark manufacturing to Jersey City distribution, we help New Jersey businesses implement Dynamics 365 Business Central to compete in the NYC and Philadelphia markets with modern, integrated solutions."
    },
    {
      src: homeSlide3,
      alt: "Team working together on ERP solutions and business optimization",
      title: "Streamline Operations Across New Jersey",
      description: "Whether you're managing chemical operations in Camden, distribution from Port Newark, or manufacturing in Essex County, we deliver tailored ERP solutions that streamline operations and boost productivity for New Jersey businesses."
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "SureDyn's migration from QuickBooks to Dynamics 365 Business Central was seamless. Our financial reporting is now 10x faster and more accurate. Perfect for our Newark operations.",
      author: "John Davidson",
      title: "CFO, TechManufacturing Inc. (Newark, NJ)",
      initials: "JD"
    },
    {
      id: 2,
      quote: "The team's expertise in our distribution industry and knowledge of Port Newark operations made all the difference. Implementation was completed on time and under budget.",
      author: "Sarah Martinez", 
      title: "Operations Director, Distribution Plus (Elizabeth, NJ)",
      initials: "SM"
    },
    {
      id: 3,
      quote: "24/7 support has been invaluable for our multi-site New Jersey operations. Any issues are resolved quickly, keeping our business running smoothly across all locations.",
      author: "Michael Roberts",
      title: "IT Director, ProServices Group (Montclair, NJ)", 
      initials: "MR"
    }
  ];

  return (
    <SEOWrapper pageKey="home" schemaType="local-business">
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Microsoft Dynamics 365 Business Central{" "}
                  <span className="text-suredyn-orange">Implementation & Migration Experts</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Leading Microsoft Dynamics 365 Business Central implementation, QuickBooks migration, and Business Central project rescue services throughout New Jersey. Expert ERP consultants with 80+ years of combined experience serving manufacturers, distributors, and service companies from Newark's industrial corridor to Princeton's tech hub.
                </p>
              </div>
              
              {/* Key Benefits */}
              <div className="space-y-4">
                {[
                  "QuickBooks to Business Central Migration",
                  "Dynamics GP to Business Central Migration", 
                  "Business Central Project Rescue Specialists",
                  "Complete ERP Implementation Services"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-suredyn-orange rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <span className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center min-touch-target-lg flex items-center justify-center cursor-pointer">
                    Start Your Digital Transformation
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md text-center min-touch-target-lg flex items-center justify-center cursor-pointer">
                    Explore Our Services
                  </span>
                </Link>
              </div>
              
              {/* Social Proof */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-suredyn-orange">{STATS.experience}</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-suredyn-orange">{STATS.projects}</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-suredyn-orange">{STATS.clients}</div>
                    <div className="text-sm text-gray-600">Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Hero Slider */}
            <AnimatedSection animation="slideInRight" delay={200} className="relative">
              <ImageSlider 
                images={sliderImages}
                autoPlay={true}
                autoPlayInterval={7000}
                className="w-full"
              />
            </AnimatedSection>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-suredyn-orange-pale rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-suredyn-orange-pale rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Microsoft Solutions We Specialize In</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Microsoft ecosystem implementation and support tailored to New Jersey businesses, from chemical companies in Camden to logistics operations at Port Newark
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SOLUTIONS.map((solution, index) => (
              <AnimatedSection key={solution.id} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mb-4">
                      <i className={`${solution.icon} text-suredyn-orange text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.shortName}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{solution.description}</p>
                    <Link href={solution.href}>
                      <a className="text-suredyn-orange hover:text-suredyn-orange-dark font-medium text-sm flex items-center">
                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized Microsoft Dynamics 365 Business Central implementations tailored to your industry's unique requirements and challenges
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Manufacturing",
                description: "Streamline production planning, inventory management, and supply chain operations for New Jersey manufacturers, with specialized modules for chemical, pharmaceutical, and industrial production tracking.",
                image: manufacturingImage,
                href: "/industries/manufacturing",
                alt: "Modern manufacturing facility with automated production lines"
              },
              {
                title: "Warehouse & Distribution",
                description: "Optimize warehouse operations and distribution networks throughout New Jersey and the greater NYC area, with advanced inventory control perfect for Port Newark logistics operations.",
                image: warehouseImage,
                href: "/industries/distribution",
                alt: "Efficient warehouse distribution center with logistics operations"
              },
              {
                title: "Retail",
                description: "Enhance customer experience and operational efficiency with integrated POS systems, inventory management, and omnichannel retail solutions.",
                image: retailImage,
                href: "/industries/retail",
                alt: "Modern retail store with point-of-sale systems and customer service"
              },
              {
                title: "Professional Services",
                description: "Manage projects, resources, and client relationships with comprehensive project accounting, time tracking, and professional service automation.",
                image: professionalServicesImage,
                href: "/industries/professional-services",
                alt: "Professional services office with business consulting and collaboration"
              }
            ].map((industry, index) => (
              <AnimatedSection key={industry.href} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-suredyn-orange transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                    <Link href={industry.href}>
                      <a className="text-suredyn-orange hover:text-suredyn-orange-dark font-medium text-sm flex items-center group-hover:gap-2 transition-all">
                        Learn More <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Central Project Rescue Specialist Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-shield-alt mr-2"></i>
              Project Rescue Specialists
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dynamics 365 Business Central <span className="text-red-600">Project Rescue</span> Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Failed Business Central implementation? Budget overruns? Timeline delays? Our specialized rescue team has saved over 50 troubled Dynamics 365 projects across New Jersey and beyond.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">When Your Business Central Project Goes Wrong</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-3"></i>
                    <div>
                      <div className="font-semibold text-gray-900">Implementation Behind Schedule</div>
                      <div className="text-gray-600 text-sm">Original vendor missed deadlines, project scope expanded</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-money-bill-wave text-red-500 mt-1 mr-3"></i>
                    <div>
                      <div className="font-semibold text-gray-900">Budget Overruns</div>
                      <div className="text-gray-600 text-sm">Costs spiraled beyond control, hidden fees emerged</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-cog text-red-500 mt-1 mr-3"></i>
                    <div>
                      <div className="font-semibold text-gray-900">Core Functions Not Working</div>
                      <div className="text-gray-600 text-sm">Critical business processes broken or missing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-users-slash text-red-500 mt-1 mr-3"></i>
                    <div>
                      <div className="font-semibold text-gray-900">User Adoption Failure</div>
                      <div className="text-gray-600 text-sm">Team refusing to use the new system</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Rescue Success Rate</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-gray-600">Projects Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">Rescued Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                    <div className="text-gray-600">Average Budget Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">12 weeks</div>
                    <div className="text-gray-600">Average Recovery Time</div>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/erp-implementation-problems-rescue-nj">
                    <span className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors cursor-pointer inline-block">
                      Get Emergency Assessment
                    </span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Rescue Process */}
          <AnimatedSection>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Proven Rescue Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h4 className="font-bold text-gray-900 mb-2">Emergency Assessment</h4>
                  <p className="text-gray-600 text-sm">Rapid evaluation of project status and critical issues</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h4 className="font-bold text-gray-900 mb-2">Damage Control</h4>
                  <p className="text-gray-600 text-sm">Immediate actions to prevent further problems</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h4 className="font-bold text-gray-900 mb-2">Recovery Plan</h4>
                  <p className="text-gray-600 text-sm">Detailed roadmap to complete implementation successfully</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                  <h4 className="font-bold text-gray-900 mb-2">Success Delivery</h4>
                  <p className="text-gray-600 text-sm">Complete implementation with full user adoption</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end Microsoft Dynamics 365 services from implementation to ongoing support
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection className="space-y-8">
              <div className="space-y-6">
                {SERVICES.map((service, index) => (
                  <div key={service.id} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-suredyn-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${service.icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideInRight" className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Business team collaborating on system implementation" 
                className="rounded-2xl shadow-xl w-full h-auto" 
                loading="lazy"
              />
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="text-center">
            <Link href="/services">
              <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg inline-flex items-center">
                View All Services
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from businesses that transformed their operations with our Microsoft Dynamics 365 solutions
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex text-suredyn-orange">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-suredyn-orange-pale rounded-full flex items-center justify-center mr-4">
                      <span className="text-suredyn-orange font-semibold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
    </SEOWrapper>
  );
};

export default Home;
