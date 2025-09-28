import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import OptimizedCTA from '../conversion/OptimizedCTA';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional(),
  company: z.string().min(2, 'Company name is required'),
  currentSystem: z.enum(['quickbooks', 'dynamics-gp', 'dynamics-nav', 'sage', 'netsuite', 'other'], {
    required_error: 'Please select your current system'
  }),
  urgency: z.enum(['immediate', 'within-month', 'within-quarter', 'exploring'], {
    required_error: 'Please select your timeline'
  }),
  employeeCount: z.enum(['1-10', '11-50', '51-200', '200+'], {
    required_error: 'Please select company size'
  }),
  challenges: z.string().min(10, 'Please describe your main challenges (at least 10 characters)'),
  budget: z.enum(['under-50k', '50k-100k', '100k-250k', '250k+', 'not-sure']).optional(),
  preferredContact: z.enum(['phone', 'email', 'either']).default('either'),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface OptimizedContactFormProps {
  variant?: 'default' | 'emergency' | 'lead-magnet';
  showTrustSignals?: boolean;
  prefilledData?: Partial<ContactFormData>;
  onSubmit?: (data: ContactFormData) => void;
}

export default function OptimizedContactForm({
  variant = 'default',
  showTrustSignals = true,
  prefilledData = {},
  onSubmit
}: OptimizedContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      preferredContact: 'either',
      ...prefilledData
    },
    mode: 'onChange'
  });

  const currentSystem = watch('currentSystem');
  const urgency = watch('urgency');

  const submitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track conversion
      const conversionData = {
        ...data,
        timestamp: Date.now(),
        variant,
        page: window.location.pathname
      };
      
      localStorage.setItem('suredyn_conversion_data', JSON.stringify(conversionData));
      
      if (onSubmit) {
        onSubmit(data);
      }
      
      setShowSuccessMessage(true);
      
      // Redirect based on urgency
      if (data.urgency === 'immediate') {
        setTimeout(() => {
          window.location.href = '/quickbooks-emergency-help-nj';
        }, 2000);
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccessMessage) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <i className="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          We've received your information and will contact you within 2 hours during business hours.
        </p>
        {urgency === 'immediate' && (
          <div className="bg-red-100 border border-red-300 rounded p-4 mt-4">
            <p className="text-red-800 font-semibold">
              Since you marked this as immediate, you're being redirected to our emergency services page...
            </p>
          </div>
        )}
      </div>
    );
  }

  const isMultiStep = variant !== 'emergency';
  const totalSteps = isMultiStep ? 3 : 1;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Progress Indicator */}
      {isMultiStep && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-suredyn-orange h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Trust Signals */}
      {showTrustSignals && (
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <i className="fas fa-lock text-blue-600"></i>
              <span className="text-blue-800">Secure & Confidential</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-clock text-blue-600"></i>
              <span className="text-blue-800">2-Hour Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-gift text-blue-600"></i>
              <span className="text-blue-800">Free Consultation</span>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
        {/* Step 1: Basic Information */}
        {(currentStep === 1 || !isMultiStep) && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {variant === 'emergency' ? 'Emergency Migration Request' : 'Let\'s Get Started'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                  placeholder="John Smith"
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                  placeholder="john@company.com"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number {variant === 'emergency' ? '*' : '(Optional)'}
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                  placeholder="(732) 555-0123"
                  data-testid="input-phone"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  id="company"
                  type="text"
                  {...register('company')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                  placeholder="ABC Manufacturing"
                  data-testid="input-company"
                />
                {errors.company && (
                  <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Current System & Timeline */}
        {(currentStep === 2 || !isMultiStep) && (
          <div className="space-y-4">
            {isMultiStep && (
              <h3 className="text-xl font-semibold text-gray-900 mb-4">System Information</h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="currentSystem" className="block text-sm font-medium text-gray-700 mb-1">
                  Current System *
                </label>
                <select
                  id="currentSystem"
                  {...register('currentSystem')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                  data-testid="select-current-system"
                >
                  <option value="">Select your current system</option>
                  <option value="quickbooks">QuickBooks (Desktop/Online)</option>
                  <option value="dynamics-gp">Microsoft Dynamics GP</option>
                  <option value="dynamics-nav">Microsoft Dynamics NAV</option>
                  <option value="sage">Sage (50/100/300)</option>
                  <option value="netsuite">NetSuite</option>
                  <option value="other">Other/Spreadsheets</option>
                </select>
                {errors.currentSystem && (
                  <p className="text-red-600 text-sm mt-1">{errors.currentSystem.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                  Timeline *
                </label>
                <select
                  id="urgency"
                  {...register('urgency')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                  data-testid="select-urgency"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (System failure/crisis)</option>
                  <option value="within-month">Within 1 month</option>
                  <option value="within-quarter">Within 3 months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
                {errors.urgency && (
                  <p className="text-red-600 text-sm mt-1">{errors.urgency.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-1">
                Company Size *
              </label>
              <select
                id="employeeCount"
                {...register('employeeCount')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                data-testid="select-employee-count"
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="200+">200+ employees</option>
              </select>
              {errors.employeeCount && (
                <p className="text-red-600 text-sm mt-1">{errors.employeeCount.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Details & Preferences */}
        {(currentStep === 3 || !isMultiStep) && (
          <div className="space-y-4">
            {isMultiStep && (
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
            )}
            
            <div>
              <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-1">
                Main Challenges/Goals *
              </label>
              <textarea
                id="challenges"
                {...register('challenges')}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                placeholder="Describe your main challenges with your current system or goals for the new system..."
                data-testid="textarea-challenges"
              />
              {errors.challenges && (
                <p className="text-red-600 text-sm mt-1">{errors.challenges.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Budget (Optional)
                </label>
                <select
                  id="budget"
                  {...register('budget')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                  data-testid="select-budget"
                >
                  <option value="">Select budget range</option>
                  <option value="under-50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k+">$250,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  {...register('preferredContact')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-suredyn-orange focus:border-transparent"
                  data-testid="select-contact-method"
                >
                  <option value="either">Phone or Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input
                id="consent"
                type="checkbox"
                {...register('consent')}
                className="mt-1 h-4 w-4 text-suredyn-orange focus:ring-suredyn-orange border-gray-300 rounded"
                data-testid="checkbox-consent"
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I agree to be contacted by SureDyn Business Solutions regarding my inquiry. 
                I understand that this consultation is free and there is no obligation to purchase.
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-600 text-sm mt-1">{errors.consent.message}</p>
            )}
          </div>
        )}

        {/* Form Actions */}
        <div className="flex items-center justify-between pt-6">
          {isMultiStep && currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
              data-testid="button-previous"
            >
              ← Previous
            </button>
          )}
          
          <div className="ml-auto">
            {isMultiStep && currentStep < totalSteps ? (
              <OptimizedCTA
                variant="primary"
                size="lg"
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!isValid}
                dataTestId="button-next"
              >
                Continue →
              </OptimizedCTA>
            ) : (
              <OptimizedCTA
                variant={variant === 'emergency' ? 'urgent' : 'primary'}
                size="lg"
                onClick={handleSubmit(submitForm)}
                disabled={isSubmitting || !isValid}
                urgency={variant === 'emergency' ? 'high' : 'medium'}
                trustSignal={variant === 'emergency' ? '15-min response' : 'Free consultation'}
                benefitText={variant === 'emergency' ? 'Emergency support available' : 'No obligation quote'}
                dataTestId="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Submitting...
                  </>
                ) : variant === 'emergency' ? (
                  'Get Emergency Help Now'
                ) : (
                  'Get Free Consultation'
                )}
              </OptimizedCTA>
            )}
          </div>
        </div>
      </form>

      {/* Urgency Indicators */}
      {urgency === 'immediate' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone text-red-600"></i>
            <span className="text-red-800 font-semibold">
              For immediate assistance, call us now: (732) 333-1111
            </span>
          </div>
        </div>
      )}
    </div>
  );
}