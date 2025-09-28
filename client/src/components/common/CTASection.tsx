import { Link } from "wouter";
import AnimatedSection from "./AnimatedSection";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showPhoneButton?: boolean;
  backgroundColor?: "orange" | "orange-pale";
}

const CTASection = ({
  title = "Ready to Transform Your Business?",
  subtitle = "Join hundreds of satisfied clients who have successfully modernized their operations with Microsoft Dynamics 365",
  primaryButtonText = "Get Free Consultation",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Call Now: +1-732-585-5563",
  secondaryButtonHref = "tel:+17325855563",
  showPhoneButton = true,
  backgroundColor = "orange-pale"
}: CTASectionProps) => {
  const bgClass = backgroundColor === "orange" ? "bg-suredyn-orange" : "bg-suredyn-orange-pale";
  const textClass = backgroundColor === "orange" ? "text-white" : "text-gray-900";
  const subtitleClass = backgroundColor === "orange" ? "text-orange-100" : "text-gray-600";

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className={`text-4xl font-bold ${textClass} mb-4`}>{title}</h2>
          <p className={`text-xl ${subtitleClass} mb-8 max-w-3xl mx-auto`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href={primaryButtonHref}>
              <a className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-touch-target-lg inline-flex items-center justify-center">
                {primaryButtonText}
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Link>
            {showPhoneButton && (
              <a 
                href={secondaryButtonHref}
                className="bg-white hover:bg-gray-50 text-suredyn-orange border-2 border-suredyn-orange px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:shadow-md min-touch-target-lg inline-flex items-center justify-center"
              >
                <i className="fas fa-phone mr-2"></i>
                {secondaryButtonText}
              </a>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;