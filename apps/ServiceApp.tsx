
import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldAlert, Activity, Baby, Info } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    title: "Medical Dermatology",
    description: "Diagnosis and treatment of acne, eczema, melasma, vitiligo, psoriasis, and skin infections.",
    category: "Clinical",
    icon: <Activity size={24} />,
    color: "bg-blue-500"
  },
  {
    title: "Cosmetic Procedures",
    description: "Botox, fillers, and skin rejuvenation using modern medical techniques.",
    category: "Aesthetics",
    icon: <Sparkles size={24} />,
    color: "bg-pink-500"
  },
  {
    title: "STI Treatment",
    description: "Confidential screening and treatment for Syphilis, Gonorrhoea, Genital warts, etc.",
    category: "Medical",
    icon: <ShieldAlert size={24} />,
    color: "bg-red-500"
  },
  {
    title: "Laser Therapy",
    description: "Scar treatment, pigmentation removal, and laser rejuvenation.",
    category: "Tech",
    icon: <Zap size={24} />,
    color: "bg-cyan-500"
  },
  {
    title: "Pediatric Dermatology",
    description: "Skin care for infants and children including eczema and birthmarks.",
    category: "Pediatric",
    icon: <Baby size={24} />,
    color: "bg-purple-500"
  },
  {
    title: "Allergy Treatment",
    description: "Diagnosis of urticaria, hives, and contact dermatitis.",
    category: "Specialized",
    icon: <Info size={24} />,
    color: "bg-orange-500"
  }
];

const ServicesApp: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full p-4 space-y-4 pb-12">
      <div className="px-2 mt-4 mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight text-center">Our Services</h2>
        <p className="text-gray-500 font-medium text-center">Comprehensive care in Kathmandu & Dhangadhi</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all active:scale-[0.98] group"
          >
            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg`}>
              {service.icon}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">{service.category}</span>
              <h3 className="text-lg font-bold text-gray-900 truncate">{service.title}</h3>
              <p className="text-gray-600 text-xs leading-snug mt-1">{service.description}</p>
            </div>
            <div className="self-center text-gray-300">
              <ArrowRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesApp;
