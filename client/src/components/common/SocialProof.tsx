import { Star, Building2, MapPin, Calendar } from 'lucide-react';
import { analytics } from '@/lib/analytics';

interface TestimonialData {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  industry: string;
}

interface SocialProofProps {
  variant?: 'carousel' | 'grid' | 'featured';
  maxTestimonials?: number;
  showIndustries?: boolean;
}

const testimonials: TestimonialData[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'CFO',
    company: 'MedTech Solutions',
    location: 'Montclair, NJ',
    rating: 5,
    text: 'SureDyn rescued our failed Business Central implementation in just 3 weeks. Their emergency response team worked around the clock to get us back on track.',
    service: 'Project Rescue',
    date: '2024-12-15',
    industry: 'Healthcare'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'Operations Director',
    company: 'Newark Chemical Corp',
    location: 'Newark, NJ',
    rating: 5,
    text: 'The QuickBooks to Business Central migration was seamless. Zero downtime and all our manufacturing processes stayed operational throughout.',
    service: 'QuickBooks Migration',
    date: '2024-11-28',
    industry: 'Manufacturing'
  },
  {
    id: '3',
    name: 'Jennifer Walsh',
    title: 'IT Manager',
    company: 'Garden State Logistics',
    location: 'Iselin, NJ',
    rating: 5,
    text: 'Their 24/7 support during our crisis situation was exceptional. They understood the urgency and delivered results faster than we thought possible.',
    service: 'Emergency Support',
    date: '2024-12-01',
    industry: 'Distribution'
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'CEO',
    company: 'FinServ Partners',
    location: 'Princeton, NJ',
    rating: 5,
    text: 'Professional, knowledgeable, and responsive. Our Dynamics GP to Business Central upgrade exceeded all expectations.',
    service: 'Dynamics GP Migration',
    date: '2024-10-20',
    industry: 'Financial Services'
  }
];

const SocialProof = ({ 
  variant = 'carousel', 
  maxTestimonials = 3,
  showIndustries = true 
}: SocialProofProps) => {
  
  const handleTestimonialClick = (testimonial: TestimonialData) => {
    analytics.trackCTAClick(`testimonial_${testimonial.service}`, `social_proof_${variant}`, 'social_proof');
  };

  const displayTestimonials = testimonials.slice(0, maxTestimonials);

  if (variant === 'featured') {
    const featured = testimonials[0];
    return (
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex justify-center space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </div>
          </div>
          
          <div 
            className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleTestimonialClick(featured)}
          >
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "{featured.text}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {featured.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{featured.name}</div>
                  <div className="text-sm text-gray-600">{featured.title}, {featured.company}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {featured.location}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  {featured.service}
                </div>
                <div className="text-xs text-gray-500 mt-1 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(featured.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
          
          {showIndustries && (
            <div className="mt-6 text-center">
              <div className="text-sm text-gray-600 mb-2">Trusted across industries:</div>
              <div className="flex flex-wrap justify-center gap-2">
                {['Healthcare', 'Manufacturing', 'Distribution', 'Financial Services', 'Professional Services'].map((industry) => (
                  <span key={industry} className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTestimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleTestimonialClick(testimonial)}
          >
            <div className="flex items-center space-x-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-4 text-sm">
              "{testimonial.text}"
            </blockquote>
            <div className="border-t pt-3">
              <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
              <div className="text-xs text-gray-600">{testimonial.title}</div>
              <div className="text-xs text-gray-500">{testimonial.company}</div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-500 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {testimonial.location}
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {testimonial.service}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default carousel view
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Success Stories</h3>
        <div className="flex justify-center space-x-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-gray-600">Based on 127+ verified reviews</p>
      </div>
      
      <div className="space-y-4">
        {displayTestimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="border-l-4 border-orange-500 pl-4 hover:bg-gray-50 p-3 rounded cursor-pointer"
            onClick={() => handleTestimonialClick(testimonial)}
          >
            <blockquote className="text-gray-700 italic mb-2 text-sm">
              "{testimonial.text}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-600">{testimonial.title}, {testimonial.company}</div>
              </div>
              <div className="text-right">
                <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                  {testimonial.service}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          onClick={() => analytics.trackCTAClick('view_all_testimonials', 'social_proof_carousel', 'secondary')}
        >
          View All Client Stories →
        </button>
      </div>
    </div>
  );
};

export default SocialProof;