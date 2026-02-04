
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, CheckCircle2, Phone, ArrowRight, User, Hash, MessageSquare } from 'lucide-react';

interface AppointmentData {
  fullName: string;
  phone: string;
  age: string;
  location: string;
  reason: string;
}

const AppointmentApp: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AppointmentData>({
    fullName: '',
    phone: '',
    age: '',
    location: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      age: '',
      location: '',
      reason: '',
    });
  };
  
  if (submitted) {
    return (
      <div className="flex flex-col h-full bg-white animate-in zoom-in duration-500 overflow-y-auto">
        <div className="p-8 text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <CheckCircle2 size={56} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Requested</h2>
          <p className="text-gray-500 mb-8 max-w-xs mx-auto text-sm">
            We've received your request for a consultation with Dr. Vikash.
          </p>
          
          <div className="w-full bg-gray-50 rounded-[32px] p-6 text-left space-y-4 mb-8 border border-gray-100">
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">Request Summary</h3>
            
            <div className="flex items-start gap-4">
              <User size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Patient</p>
                <p className="text-sm font-bold text-gray-800">{formData.fullName} ({formData.age} yrs)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Clinic Location</p>
                <p className="text-sm font-bold text-gray-800">{formData.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Contact Number</p>
                <p className="text-sm font-bold text-gray-800">{formData.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageSquare size={18} className="text-gray-400 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Primary Concern</p>
                <p className="text-sm font-bold text-gray-800 italic">{formData.reason || 'General Consultation'}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 w-full">
            <button 
              onClick={resetForm}
              className="w-full bg-blue-600 text-white h-14 rounded-full font-bold shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Book Another Appointment
            </button>
            <p className="text-xs text-gray-400">
              A clinic representative will call you to confirm the exact time within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-full p-6 pb-20 space-y-8 max-w-lg mx-auto">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Schedule Visit</h2>
        <p className="text-gray-500">Select your preferred clinic and time</p>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <div className="bg-blue-50 p-4 rounded-3xl min-w-[200px] border border-blue-100">
          <MapPin size={18} className="text-blue-600 mb-2" />
          <p className="font-bold text-sm">Shankhamul</p>
          <p className="text-[10px] text-gray-600">Daily 4PM - 7PM</p>
        </div>
        <div className="bg-green-50 p-4 rounded-3xl min-w-[200px] border border-green-100">
          <MapPin size={18} className="text-green-600 mb-2" />
          <p className="font-bold text-sm">Elite Clinic</p>
          <p className="text-[10px] text-gray-600">Lalitpur • Mon-Fri</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-3xl min-w-[200px] border border-purple-100">
          <MapPin size={18} className="text-purple-600 mb-2" />
          <p className="font-bold text-sm">Dhangadhi</p>
          <p className="text-[10px] text-gray-600">Saturdays Only</p>
        </div>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required 
            placeholder="Full Name" 
            className="w-full h-14 px-5 pt-2 bg-gray-100/50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-900" 
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required 
            placeholder="Phone Number" 
            className="w-full h-14 px-5 bg-gray-100/50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-900" 
          />
          <input 
            type="number" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            required 
            placeholder="Age" 
            className="w-full h-14 px-5 bg-gray-100/50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-900" 
          />
        </div>

        <select 
          name="location"
          value={formData.location}
          onChange={handleChange}
          required 
          className="w-full h-14 px-5 bg-gray-100/50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 appearance-none cursor-pointer"
        >
          <option value="">Select Clinic</option>
          <option value="Shankhamul Healthcare">Shankhamul Healthcare, Kathmandu</option>
          <option value="Elite Health Clinic">Elite Health Clinic, Lalitpur</option>
          <option value="Shubharambha Skin Centre">Shubharambha Skin, Dhangadhi</option>
          <option value="Tele-dermatology">Tele-dermatology (Video Call)</option>
        </select>

        <textarea 
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="What is your concern? (e.g. Acne, Hair loss)" 
          className="w-full p-5 bg-gray-100/50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none text-gray-900 min-h-[120px]" 
        />

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 text-white h-16 rounded-[28px] font-bold shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
        >
          {loading ? <Clock className="animate-spin" /> : <Calendar size={22} />}
          {loading ? 'Submitting Request...' : 'Request Appointment'}
        </button>
      </form>

      <div className="bg-blue-600 text-white p-6 rounded-[32px] flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><Phone size={24} /></div>
          <div>
            <p className="font-bold">Call Reception</p>
            <p className="text-xs opacity-80">+977-1-5242511</p>
          </div>
        </div>
        <ArrowRight size={24} className="opacity-60" />
      </div>
    </div>
  );
};

export default AppointmentApp;
