
import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldAlert, Heart, Activity } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    title: "General Dermatology",
    description: "Diagnosis and treatment of eczema, psoriasis, acne, and other common skin conditions.",
    category: "Skin Health",
    icon: <Activity size={24} />,
    color: "bg-blue-500"
  },
  {
    title: "Cosmetic Procedures",
    description: "Advanced anti-aging treatments including Botox, fillers, and skin rejuvenation.",
    category: "Aesthetics",
    icon: <Sparkles size={24} />,
    color: "bg-pink-500"
  },
  {
    title: "Laser Therapy",
    description: "Permanent hair reduction, scar treatment, and pigmentation removal using modern lasers.",
    category: "Technology",
    icon: <Zap size={24} />,
    color: "bg-cyan-500"
  },
  {
    title: "Venereology (STIs)",
    description: "Confidential consultation and treatment for various sexually transmitted infections.",
    category: "Medical",
    icon: <ShieldAlert size={24} />,
    color: "bg-red-500"
  }
];

const ServicesApp: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full p-4 space-y-4 pb-12">
      <div className="px-2 mt-4 mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Services</h2>
        <p className="text-gray-500 font-medium">Expert care for your skin and hair health.</p>
      </div>

      <div className="space-y-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="block bg-white p-5 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md active:scale-[0.98] group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg transition-transform group-hover:rotate-6`}>
                {service.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">{service.category}</span>
                <h3 className="text-xl font-bold text-gray-900 truncate">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-snug mt-1">{service.description}</p>
              </div>
              <div className="self-center text-gray-300 group-hover:text-cyan-500 transition-colors">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-8 bg-cyan-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">Research & Awards</h3>
          <p className="text-cyan-100 mb-6 text-sm">Active contributor to dermatology journals and international conferences.</p>
          <button className="inline-flex bg-white text-cyan-900 px-8 py-3 rounded-2xl font-bold items-center gap-2 hover:bg-gray-100 transition-all">
            View Research <Activity size={18} />
          </button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400 rounded-full blur-[80px] opacity-20"></div>
        <Heart size={120} className="absolute -bottom-10 -right-10 opacity-10 rotate-12" />
      </div>
    </div>
  );
};

export default ServicesApp;
