
import React from 'react';
// Fix: Added MessageCircle to the imported lucide-react icons
import { ExternalLink, Linkedin, Award, Stethoscope, HeartPulse, GraduationCap, Target, Eye, Rocket, MessageCircle } from 'lucide-react';

const AboutApp: React.FC = () => {
  const testimonials = [
    { name: "R. Shrestha", text: "Dr. Paudel's expertise in treating my chronic acne has been life-changing. After years of struggling, I finally have clear skin and renewed confidence.", role: "Acne Patient" },
    { name: "S. Thapa", text: "I was worried about my hair loss, but Dr. Paudel's personalized treatment plan has shown remarkable improvement in just three months.", role: "Hair Treatment" }
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-8 animate-in slide-in-from-bottom duration-500">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-400 p-1 shadow-lg">
             <img 
              src="https://picsum.photos/seed/drpaudel/400/400" 
              alt="Dr. Vikash Paudel" 
              className="w-full h-full rounded-full object-cover border-4 border-white"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Dr. Vikash Paudel</h2>
          <p className="text-cyan-600 font-semibold text-lg">Leading Dermatologist in Nepal</p>
          <p className="text-gray-500 text-sm">Consultant at Patan Hospital & Elite Health Clinic</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl space-y-4 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Target size={20} className="text-cyan-500" />
          Our Mission
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          To provide affordable, honest, and high-quality skin and hair treatments. We work to build your confidence through expert care using the latest technology in a safe, caring, and professional environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-cyan-50 p-6 rounded-3xl border border-cyan-100">
          <h3 className="font-bold flex items-center gap-2 text-cyan-800 mb-2">
            <Eye size={18} /> Vision
          </h3>
          <p className="text-xs text-cyan-700 leading-relaxed">
            To be the most trusted dermatology clinic in Kathmandu, setting the benchmark as the top skin care specialist in Nepal.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
          <h3 className="font-bold flex items-center gap-2 text-blue-800 mb-2">
            <Rocket size={18} /> Goals
          </h3>
          <ul className="text-[10px] text-blue-700 space-y-1 list-disc list-inside">
            <li>Expanding advanced cosmetic services</li>
            <li>Introducing safer technologies</li>
            <li>Patient education & awareness</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <GraduationCap size={20} className="text-cyan-500" />
          Qualifications
        </h3>
        <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100">
          <p className="font-bold text-gray-900">MD Dermatology & Venereology</p>
          <p className="text-cyan-600 text-sm">Board Certified Specialist</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          {/* Fix: MessageCircle component now available via import */}
          <MessageCircle size={20} className="text-cyan-500" />
          Testimonials
        </h3>
        <div className="space-y-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 italic text-sm text-gray-600">
              "{t.text}"
              <p className="not-italic font-bold text-cyan-700 text-xs mt-2">— {t.name}, {t.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 pb-12 flex flex-col items-center gap-4">
        <a href="https://linkedin.com" target="_blank" className="bg-blue-700 p-4 rounded-3xl flex items-center justify-center gap-3 text-white shadow-md w-full max-w-sm">
          <Linkedin size={20} />
          <span className="font-semibold text-sm">Follow on LinkedIn</span>
        </a>
        <a 
          href="https://vikashpaudel.com.np" 
          target="_blank" 
          className="text-cyan-600 font-bold hover:underline"
        >
          {/* Fix: Removed the invalid 'inline' prop from ExternalLink icon */}
          www.vikashpaudel.com.np <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default AboutApp;
