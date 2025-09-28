import posthog from 'posthog-js';

export class Analytics {
  private static instance: Analytics;
  private initialized = false;

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  init() {
    if (this.initialized) return;

    // Initialize PostHog
    if (import.meta.env.VITE_POSTHOG_KEY) {
      posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
        api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://app.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll manually track pageviews
        capture_pageleave: true,
        loaded: (posthog) => {
          if (import.meta.env.DEV) posthog.debug();
        }
      });
    }

    // Initialize Microsoft Clarity
    if (import.meta.env.VITE_CLARITY_ID) {
      this.initClarity(import.meta.env.VITE_CLARITY_ID);
    }

    this.initialized = true;
  }

  private initClarity(clarityId: string) {
    // Microsoft Clarity script injection
    (function(c: any, l: any, a: any, r: any, i: any, t: any, y: any) {
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", clarityId, {}, {});
  }

  // Page tracking
  trackPageView(path: string, title?: string) {
    if (import.meta.env.VITE_POSTHOG_KEY) {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
        $pathname: path,
        $title: title || document.title
      });
    }
  }

  // Conversion events
  trackContactFormSubmit(formType: string, contactInfo: any) {
    this.track('contact_form_submit', {
      form_type: formType,
      has_phone: !!contactInfo.phone,
      has_email: !!contactInfo.email,
      service_interest: contactInfo.service || 'general'
    });
  }

  trackPhoneClick(location: string) {
    this.track('phone_click', {
      location: location, // 'header', 'emergency_cta', 'footer', etc.
      phone_number: '(973) 947-1600'
    });
  }

  trackQuoteRequest(service: string, urgency?: string) {
    this.track('quote_request', {
      service_type: service,
      urgency_level: urgency || 'normal',
      page_source: window.location.pathname
    });
  }

  trackEmergencyHelp(service: string) {
    this.track('emergency_help_request', {
      service_type: service,
      time_of_day: new Date().getHours(),
      page_source: window.location.pathname
    });
  }

  trackDownload(resource: string, resourceType: string) {
    this.track('resource_download', {
      resource_name: resource,
      resource_type: resourceType,
      page_source: window.location.pathname
    });
  }

  trackServiceInterest(service: string, action: string) {
    this.track('service_interest', {
      service_name: service,
      action_type: action, // 'page_view', 'cta_click', 'learn_more'
      user_intent: this.inferUserIntent()
    });
  }

  // A/B Testing support
  trackExperiment(experimentName: string, variant: string, converted: boolean = false) {
    this.track('experiment_exposure', {
      experiment_name: experimentName,
      variant: variant,
      converted: converted
    });
  }

  // User behavior insights
  trackScrollDepth(percentage: number) {
    if (percentage === 100) {
      this.track('page_complete_read', {
        page_path: window.location.pathname,
        time_on_page: Date.now() - (window as any).pageLoadTime
      });
    }
  }

  trackCTAClick(ctaText: string, ctaLocation: string, ctaType: string) {
    this.track('cta_click', {
      cta_text: ctaText,
      cta_location: ctaLocation,
      cta_type: ctaType, // 'primary', 'secondary', 'emergency'
      page_context: window.location.pathname
    });
  }

  // Conversion tracking
  trackConversion(conversionType: string, properties: any = {}) {
    this.track('conversion', {
      conversion_type: conversionType,
      conversion_value: properties.value || 1,
      ...properties
    });
  }

  // Error tracking
  trackError(errorType: string, properties: any = {}) {
    this.track('error_event', {
      error_type: errorType,
      ...properties
    });
  }

  // User identification
  identifyUser(userId: string, traits?: any) {
    if (import.meta.env.VITE_POSTHOG_KEY) {
      posthog.identify(userId, traits);
    }
  }

  // Generic event tracking
  private track(eventName: string, properties: any = {}) {
    const enrichedProperties = {
      ...properties,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight
    };

    if (import.meta.env.VITE_POSTHOG_KEY) {
      posthog.capture(eventName, enrichedProperties);
    }

    // Development logging
    if (import.meta.env.DEV) {
      console.log('Analytics Event:', eventName, enrichedProperties);
    }
  }

  private inferUserIntent(): string {
    const path = window.location.pathname.toLowerCase();
    const referrer = document.referrer.toLowerCase();
    
    // Emergency intent indicators
    if (path.includes('emergency') || path.includes('rescue') || path.includes('crisis')) {
      return 'emergency';
    }
    
    // Service intent indicators
    if (path.includes('implementation') || path.includes('migration') || path.includes('services')) {
      return 'service_research';
    }
    
    // Problem intent indicators
    if (path.includes('failed') || path.includes('issues') || referrer.includes('problem')) {
      return 'problem_solving';
    }
    
    // Local intent indicators
    if (path.includes('montclair') || path.includes('new-jersey') || path.includes('nj')) {
      return 'local_service';
    }
    
    return 'general_research';
  }
}

export const analytics = Analytics.getInstance();