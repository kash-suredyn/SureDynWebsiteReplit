import React, { useEffect, useState } from 'react';
import OptimizedCTA from './OptimizedCTA';

interface ConversionOptimizerProps {
  variant?: 'default' | 'urgent' | 'social-proof' | 'scarcity';
  showTrustSignals?: boolean;
  emergencyMode?: boolean;
}

export default function ConversionOptimizer({
  variant = 'default',
  showTrustSignals = true,
  emergencyMode = false
}: ConversionOptimizerProps) {
  const [showUrgencyBanner, setShowUrgencyBanner] = useState(false);
  const [visitDuration, setVisitDuration] = useState(0);

  useEffect(() => {
    // Track visit duration for behavior-based optimization
    const startTime = Date.now();
    const timer = setInterval(() => {
      setVisitDuration(Date.now() - startTime);
    }, 1000);

    // Show urgency banner after 30 seconds if user hasn't converted
    const urgencyTimer = setTimeout(() => {
      if (!hasConverted()) {
        setShowUrgencyBanner(true);
      }
    }, 30000);

    return () => {
      clearInterval(timer);
      clearTimeout(urgencyTimer);
    };
  }, []);

  const hasConverted = () => {
    // Check if user has already filled out a form or clicked major CTAs
    return localStorage.getItem('suredyn_conversion_events') !== null;
  };

  const trackConversion = (event: string) => {
    const events = JSON.parse(localStorage.getItem('suredyn_conversion_events') || '[]');
    events.push({
      event,
      timestamp: Date.now(),
      page: window.location.pathname
    });
    localStorage.setItem('suredyn_conversion_events', JSON.stringify(events));
    
    // Hide urgency banner after conversion
    setShowUrgencyBanner(false);
  };

  return (
    <>
      {/* Urgency Banner */}
      {showUrgencyBanner && !emergencyMode && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-2 px-4 text-center z-50 animate-slide-down">
          <div className="flex items-center justify-center space-x-2">
            <span className="animate-pulse">⚠️</span>
            <span className="font-semibold">
              Still evaluating ERP solutions? Get a free consultation before your competitors do!
            </span>
            <OptimizedCTA
              variant="urgent"
              size="sm"
              href="/contact"
              onClick={() => trackConversion('urgency_banner_click')}
              className="ml-4"
            >
              Free Consultation
            </OptimizedCTA>
            <button
              onClick={() => setShowUrgencyBanner(false)}
              className="ml-2 text-white hover:text-gray-200"
              aria-label="Close banner"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Emergency Mode Banner */}
      {emergencyMode && (
        <div className="fixed top-0 left-0 right-0 bg-red-700 text-white py-3 px-4 text-center z-50 animate-pulse">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xl animate-bounce">🚨</span>
            <span className="font-bold text-lg">
              URGENT: QuickBooks System Failure? We're available 24/7 for emergency migrations!
            </span>
            <OptimizedCTA
              variant="urgent"
              size="lg"
              href="/quickbooks-emergency-help-nj"
              onClick={() => trackConversion('emergency_banner_click')}
              className="ml-4"
              trustSignal="15-min response time"
            >
              Call Now: (732) 333-1111
            </OptimizedCTA>
          </div>
        </div>
      )}

      {/* Trust Signals */}
      {showTrustSignals && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <i className="fas fa-certificate text-suredyn-orange"></i>
              <span className="text-sm font-semibold text-gray-700">Microsoft Gold Partner</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <i className="fas fa-users text-suredyn-orange"></i>
              <span className="text-sm font-semibold text-gray-700">500+ Successful Migrations</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <i className="fas fa-clock text-suredyn-orange"></i>
              <span className="text-sm font-semibold text-gray-700">24/7 Support Available</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <i className="fas fa-shield-alt text-suredyn-orange"></i>
              <span className="text-sm font-semibold text-gray-700">Zero Data Loss Guarantee</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating CTA for Long Pages */}
      {visitDuration > 60000 && (
        <div className="fixed bottom-6 right-6 z-40 animate-slide-up">
          <OptimizedCTA
            variant="primary"
            size="lg"
            href="/contact"
            onClick={() => trackConversion('floating_cta_click')}
            urgency="high"
            trustSignal="Free consultation"
            benefitText="Get started in 48 hours"
            className="shadow-2xl"
          >
            Start Your Migration
          </OptimizedCTA>
        </div>
      )}

      {/* Exit Intent Popup */}
      <ExitIntentPopup onConversion={() => trackConversion('exit_intent')} />
    </>
  );
}

function ExitIntentPopup({ onConversion }: { onConversion: () => void }) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !showPopup) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, showPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl animate-scale-up">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Wait! Don't Leave Empty-Handed
          </h3>
          <p className="text-gray-600 mb-6">
            Get our free "QuickBooks to Business Central Migration Checklist" 
            - a $500 value that ensures your migration goes smoothly.
          </p>
          
          <div className="space-y-4">
            <OptimizedCTA
              variant="primary"
              size="lg"
              href="/contact"
              onClick={() => {
                onConversion();
                setShowPopup(false);
              }}
              className="w-full"
              benefitText="Instant download + free consultation"
            >
              Get Free Migration Checklist
            </OptimizedCTA>
            
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              No thanks, I'll figure it out myself
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}