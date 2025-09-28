import { useEffect } from "react";
import { Link } from "wouter";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";

const CustomerInsights = () => {
  useEffect(() => {
    document.title = "Dynamics 365 Customer Insights - SureDyn Business Solutions | Customer Data Platform & Analytics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform customer data into actionable insights with Microsoft Dynamics 365 Customer Insights. Unified customer profiles, predictive analytics, and real-time personalization for better customer experiences.');
    }
  }, []);

  const features = [
    {
      title: "Unified Customer Profiles",
      description: "Create comprehensive 360-degree customer views by unifying data from multiple touchpoints and systems.",
      icon: "fas fa-user-circle"
    },
    {
      title: "Real-time Segmentation",
      description: "Build dynamic customer segments based on behaviors, preferences, and predictive insights.",
      icon: "fas fa-layer-group"
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to predict customer behavior, churn risk, and lifetime value for proactive engagement.",
      icon: "fas fa-brain"
    },
    {
      title: "Omnichannel Activation",
      description: "Activate insights across all customer touchpoints for consistent, personalized experiences.",
      icon: "fas fa-share-alt"
    },
    {
      title: "Privacy & Compliance",
      description: "Built-in privacy controls and compliance features to protect customer data and meet regulations.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Real-time Personalization",
      description: "Deliver personalized experiences in real-time across web, mobile, and in-store channels.",
      icon: "fas fa-magic"
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Increase in customer engagement",
      icon: "fas fa-chart-line"
    },
    {
      metric: "25%",
      description: "Reduction in customer churn",
      icon: "fas fa-user-check"
    },
    {
      metric: "60%",
      description: "Faster time to insights",
      icon: "fas fa-clock"
    },
    {
      metric: "35%",
      description: "Improvement in marketing ROI",
      icon: "fas fa-dollar-sign"
    }
  ];

  const useCases = [
    {
      title: "Customer Journey Optimization",
      description: "Map and optimize customer journeys across all touchpoints to reduce friction and improve conversion rates.",
      industry: "Retail & E-commerce"
    },
    {
      title: "Predictive Customer Service",
      description: "Anticipate customer needs and proactively address issues before they impact satisfaction.",
      industry: "Financial Services"
    },
    {
      title: "Personalized Marketing Campaigns",
      description: "Create highly targeted campaigns based on customer behavior, preferences, and predicted actions.",
      industry: "Healthcare"
    },
    {
      title: "Churn Prevention Programs",
      description: "Identify at-risk customers and implement retention strategies to reduce churn and increase loyalty.",
      industry: "Telecommunications"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Dynamics 365{" "}
                <span className="text-suredyn-orange">Customer Insights</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform fragmented customer data into unified profiles and actionable insights. 
                Deliver personalized experiences at scale with AI-powered customer intelligence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Customer Insights Demo
                  </button>
                </Link>
                <Link href="/case-studies">
                  <button className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md">
                    View Success Stories
                  </button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Customer Intelligence Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unify, understand, and activate customer data across your entire organization
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-suredyn-orange-pale rounded-lg flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-suredyn-orange text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 bg-suredyn-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations using Dynamics 365 Customer Insights see significant improvements in customer engagement and business outcomes
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-4xl font-bold text-suredyn-orange mb-2">{benefit.metric}</div>
                  <div className="text-gray-600 font-medium">{benefit.description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how different industries leverage Customer Insights to drive customer-centric transformation
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                    <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                      {useCase.industry}
                    </span>
                  </div>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Insights Implementation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful deployment and rapid time-to-value
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Data Strategy & Discovery",
                description: "Assess current data landscape and define customer insights strategy",
                duration: "1-2 weeks"
              },
              {
                step: "2", 
                title: "Data Integration & Unification",
                description: "Connect data sources and create unified customer profiles",
                duration: "2-4 weeks"
              },
              {
                step: "3",
                title: "Insights & Analytics Setup",
                description: "Configure analytics, segments, and predictive models",
                duration: "2-3 weeks"
              },
              {
                step: "4",
                title: "Activation & Optimization",
                description: "Deploy insights across channels and optimize performance",
                duration: "1-2 weeks"
              }
            ].map((phase, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-suredyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{phase.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 mb-3">{phase.description}</p>
                  <span className="bg-suredyn-orange-pale text-suredyn-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                    {phase.duration}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Customer Intelligence?"
        subtitle="Discover how Dynamics 365 Customer Insights can help you deliver exceptional customer experiences and drive business growth"
        primaryButtonText="Start Customer Insights Journey"
      />
    </div>
  );
};

export default CustomerInsights;