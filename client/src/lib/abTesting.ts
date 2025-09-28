import { GrowthBook } from '@growthbook/growthbook';
import { analytics } from './analytics';

class ABTestingManager {
  private static instance: ABTestingManager;
  private growthbook: GrowthBook | null = null;
  private initialized = false;

  static getInstance(): ABTestingManager {
    if (!ABTestingManager.instance) {
      ABTestingManager.instance = new ABTestingManager();
    }
    return ABTestingManager.instance;
  }

  async init() {
    if (this.initialized) return;

    this.growthbook = new GrowthBook({
      apiHost: import.meta.env.VITE_GROWTHBOOK_API_HOST || 'https://api.growthbook.io',
      clientKey: import.meta.env.VITE_GROWTHBOOK_CLIENT_KEY || '',
      enableDevMode: import.meta.env.DEV,
      trackingCallback: (experiment, result) => {
        // Track experiment exposure with analytics
        analytics.trackExperiment(experiment.key, result.variationId.toString(), false);
      },
    });

    if (import.meta.env.VITE_GROWTHBOOK_CLIENT_KEY) {
      await this.growthbook.loadFeatures();
    }

    this.initialized = true;
  }

  // Test different headlines and hero content
  getHeadlineVariant(defaultHeadline: string): string {
    if (!this.growthbook) return defaultHeadline;

    return this.growthbook.getFeatureValue('hero-headline', defaultHeadline);
  }

  // Test different CTA button text and styles
  getCTAVariant(defaultCTA: string, ctaType: 'primary' | 'secondary' | 'emergency' = 'primary'): string {
    if (!this.growthbook) return defaultCTA;

    const featureKey = `cta-text-${ctaType}`;
    return this.growthbook.getFeatureValue(featureKey, defaultCTA);
  }

  // Test different value propositions
  getValuePropVariant(defaultValue: string): string {
    if (!this.growthbook) return defaultValue;

    return this.growthbook.getFeatureValue('value-proposition', defaultValue);
  }

  // Test different contact form layouts
  getContactFormVariant(): 'standard' | 'simplified' | 'detailed' {
    if (!this.growthbook) return 'standard';

    const variant = this.growthbook.getFeatureValue('contact-form-layout', 'standard');
    return ['standard', 'simplified', 'detailed'].includes(variant) ? variant as 'standard' | 'simplified' | 'detailed' : 'standard';
  }

  // Test different pricing presentation styles
  getPricingVariant(): 'table' | 'cards' | 'comparison' {
    if (!this.growthbook) return 'table';

    const variant = this.growthbook.getFeatureValue('pricing-layout', 'table');
    return ['table', 'cards', 'comparison'].includes(variant) ? variant as 'table' | 'cards' | 'comparison' : 'table';
  }

  // Test different emergency CTA messaging
  getEmergencyCTAVariant(): {
    text: string;
    urgency: string;
    color: 'red' | 'orange' | 'yellow';
  } {
    if (!this.growthbook) {
      return {
        text: 'Get Emergency Help',
        urgency: 'Call Now',
        color: 'red'
      };
    }

    return this.growthbook.getFeatureValue('emergency-cta', {
      text: 'Get Emergency Help',
      urgency: 'Call Now', 
      color: 'red'
    });
  }

  // Test different testimonial displays
  getTestimonialVariant(): 'carousel' | 'grid' | 'featured' {
    if (!this.growthbook) return 'carousel';

    const variant = this.growthbook.getFeatureValue('testimonial-layout', 'carousel');
    return ['carousel', 'grid', 'featured'].includes(variant) ? variant as 'carousel' | 'grid' | 'featured' : 'carousel';
  }

  // Test different navigation styles
  getNavigationVariant(): 'standard' | 'mega-menu' | 'minimal' {
    if (!this.growthbook) return 'standard';

    const variant = this.growthbook.getFeatureValue('navigation-style', 'standard');
    return ['standard', 'mega-menu', 'minimal'].includes(variant) ? variant as 'standard' | 'mega-menu' | 'minimal' : 'standard';
  }

  // Track conversions for experiments
  trackConversion(experimentKey: string, conversionGoal: string) {
    if (!this.growthbook) return;

    // Track the conversion
    analytics.trackConversion(`experiment_${experimentKey}`, {
      goal: conversionGoal,
      experiment: experimentKey,
      variation: this.growthbook.getFeatureValue(experimentKey, 'control')
    });
  }

  // Set user attributes for targeting
  setUserAttributes(attributes: {
    id?: string;
    company?: string;
    industry?: string;
    urgency?: 'low' | 'medium' | 'high' | 'emergency';
    source?: string;
    location?: string;
  }) {
    if (!this.growthbook) return;

    this.growthbook.setAttributes({
      id: attributes.id || 'anonymous',
      company: attributes.company,
      industry: attributes.industry,
      urgency: attributes.urgency || 'medium',
      source: attributes.source || 'direct',
      location: attributes.location || 'unknown',
      url: window.location.pathname,
      timestamp: new Date().toISOString()
    });
  }

  // Get all active experiments for debugging
  getActiveExperiments() {
    if (!this.growthbook || import.meta.env.PROD) return [];

    const features = this.growthbook.getFeatures();
    return Object.keys(features).map(key => ({
      key,
      value: this.growthbook!.getFeatureValue(key, null),
      enabled: this.growthbook!.isOn(key)
    }));
  }
}

export const abTesting = ABTestingManager.getInstance();

// React hook for A/B testing
export function useABTest<T>(featureKey: string, defaultValue: T): T {
  const manager = ABTestingManager.getInstance();
  
  if (!manager['growthbook']) {
    return defaultValue;
  }
  
  const result = manager['growthbook'].getFeatureValue(featureKey, defaultValue);
  return (result !== undefined ? result : defaultValue) as T;
}

// Predefined test configurations for common scenarios
export const AB_TEST_CONFIGS = {
  // Hero section tests
  HERO_HEADLINES: [
    "Transform Your Business with Microsoft Dynamics 365",
    "Stop Failed ERP Projects - Expert Business Central Rescue",
    "New Jersey's #1 Dynamics 365 Implementation Specialists",
    "From QuickBooks Crisis to Business Central Success"
  ],
  
  // CTA button tests
  PRIMARY_CTAS: [
    "Get Free Consultation",
    "Schedule Discovery Call",
    "Start Your Project",
    "Speak with Expert"
  ],
  
  EMERGENCY_CTAS: [
    "Get Emergency Help Now",
    "Call for Immediate Rescue",
    "24/7 Crisis Support",
    "Save My Project"
  ],
  
  // Value proposition tests
  VALUE_PROPS: [
    "95% project rescue success rate with 50+ saved implementations",
    "New Jersey's most trusted Business Central specialists since 2010",
    "From crisis to success - we rescue failed ERP projects",
    "Zero downtime migrations with guaranteed project completion"
  ]
};