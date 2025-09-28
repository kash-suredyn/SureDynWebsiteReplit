import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight";
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = "fadeInUp", 
  delay = 0 
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const animationClasses = {
    fadeInUp: "translate-y-8 opacity-0",
    fadeIn: "opacity-0",
    slideInLeft: "-translate-x-8 opacity-0",
    slideInRight: "translate-x-8 opacity-0",
  };

  const activeClasses = {
    fadeInUp: "translate-y-0 opacity-100",
    fadeIn: "opacity-100",
    slideInLeft: "translate-x-0 opacity-100",
    slideInRight: "translate-x-0 opacity-100",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isIntersecting ? activeClasses[animation] : animationClasses[animation],
        className
      )}
      style={{
        transitionDelay: isIntersecting ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
