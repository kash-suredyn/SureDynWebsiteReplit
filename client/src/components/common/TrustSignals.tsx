import { Shield, Award, Users, CheckCircle, Clock, Star } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface TrustSignalsProps {
  variant?: 'hero' | 'sidebar' | 'footer';
  showStats?: boolean;
  showSecurity?: boolean;
  showTestimonials?: boolean;
}

const TrustSignals = ({ 
  variant = 'hero', 
  showStats = true, 
  showSecurity = true, 
  showTestimonials = true 
}: TrustSignalsProps) => {
  
  const handleTrustSignalClick = (signalType: string) => {
    analytics.trackCTAClick(signalType, `trust_signals_${variant}`, 'trust_signal');
  };

  if (variant === 'hero') {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted by 300+ Businesses</h3>
          <div className="flex justify-center space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-gray-600">4.9/5 based on 127 client reviews</p>
        </div>
        
        {showStats && (
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-green-50 rounded-lg p-3">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-green-700">95%</div>
              <div className="text-xs text-green-600">Success Rate</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-blue-700">50+</div>
              <div className="text-xs text-blue-600">Projects Rescued</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-3">
              <Clock className="w-6 h-6 text-orange-600 mx-auto mb-1" />
              <div className="text-lg font-bold text-orange-700">24/7</div>
              <div className="text-xs text-orange-600">Emergency Support</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-gray-50 rounded-lg p-4 space-y-4">
        {showSecurity && (
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => handleTrustSignalClick('security_badge')}
          >
            <Shield className="w-8 h-8 text-green-600" />
            <div>
              <div className="font-semibold text-sm text-gray-900">SOC 2 Compliant</div>
              <div className="text-xs text-gray-600">Enterprise Security Standards</div>
            </div>
          </div>
        )}
        
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => handleTrustSignalClick('microsoft_partner')}
        >
          <Award className="w-8 h-8 text-blue-600" />
          <div>
            <div className="font-semibold text-sm text-gray-900">Microsoft Gold Partner</div>
            <div className="text-xs text-gray-600">Certified Excellence Since 2010</div>
          </div>
        </div>
        
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => handleTrustSignalClick('local_business')}
        >
          <Users className="w-8 h-8 text-orange-600" />
          <div>
            <div className="font-semibold text-sm text-gray-900">New Jersey Based</div>
            <div className="text-xs text-gray-600">Local expertise, nationwide reach</div>
          </div>
        </div>
        
        <div className="bg-white rounded p-3 border-l-4 border-green-500">
          <div className="text-xs text-gray-500 mb-1">Response Time</div>
          <div className="font-bold text-green-700">Under 2 Hours</div>
          <div className="text-xs text-gray-600">Emergency project rescue</div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-200">
        <div className="text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-2" />
          <div className="font-semibold text-gray-900">Secure & Compliant</div>
          <div className="text-sm text-gray-600">SOC 2 Type II Certified</div>
        </div>
        
        <div className="text-center">
          <Award className="w-12 h-12 text-orange-600 mx-auto mb-2" />
          <div className="font-semibold text-gray-900">Microsoft Partner</div>
          <div className="text-sm text-gray-600">Gold Certified Since 2010</div>
        </div>
        
        <div className="text-center">
          <Users className="w-12 h-12 text-green-600 mx-auto mb-2" />
          <div className="font-semibold text-gray-900">300+ Clients</div>
          <div className="text-sm text-gray-600">Across Multiple Industries</div>
        </div>
        
        <div className="text-center">
          <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-2" />
          <div className="font-semibold text-gray-900">95% Success Rate</div>
          <div className="text-sm text-gray-600">Project Completion</div>
        </div>
      </div>
    );
  }

  return null;
};

export default TrustSignals;