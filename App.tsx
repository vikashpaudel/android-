
import React, { useState, useEffect } from 'react';
import { 
  User, 
  Stethoscope, 
  MessageCircle, 
  Globe, 
  Settings, 
  Calendar, 
  Award, 
  BookOpen,
  Battery, 
  Wifi, 
  SignalHigh,
  Mic,
  Camera,
  HeartPulse,
  Info
} from 'lucide-react';
import AppIcon from './components/AppIcon';
import AndroidWindow from './components/AndroidWindow';
import BottomNav from './components/BottomNav';
import AboutApp from './apps/AboutApp';
import ServicesApp from './apps/ServicesApp';
import ResearchApp from './apps/ResearchApp';
import AwardsApp from './apps/AwardsApp';
import ChatApp from './apps/ChatApp';
import SafariApp from './apps/SafariApp';
import SettingsApp from './apps/SettingsApp';
import AppointmentApp from './apps/AppointmentApp';
import { AppID } from './types';

const App: React.FC = () => {
  const [activeApp, setActiveApp] = useState<AppID | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  const closeApp = () => setActiveApp(null);

  const apps = [
    { id: 'about', name: 'Profile', icon: <User size={28} />, color: 'bg-gradient-to-br from-[#C2E7FF] to-[#A0D4FF] text-[#001D35]' },
    { id: 'services', name: 'Care', icon: <Stethoscope size={28} />, color: 'bg-gradient-to-br from-[#D3E3FD] to-[#B8D4FC] text-[#001D35]' },
    { id: 'research', name: 'Archive', icon: <BookOpen size={28} />, color: 'bg-gradient-to-br from-[#FEEFC3] to-[#FDE293] text-[#202124]' },
    { id: 'awards', name: 'Honors', icon: <Award size={28} />, color: 'bg-gradient-to-br from-[#E6FFFA] to-[#B2F5EA] text-[#004433]' },
    { id: 'chat', name: 'AI Consult', icon: <MessageCircle size={28} />, color: 'bg-gradient-to-br from-[#E8F0FE] to-[#D2E3FC] text-[#1967D2]' },
    { id: 'safari', name: 'Blog', icon: <Globe size={28} />, color: 'bg-white text-[#4285F4]' },
    { id: 'appointment', name: 'Booking', icon: <Calendar size={28} />, color: 'bg-gradient-to-br from-[#FCE8E6] to-[#FAD2CF] text-[#C5221F]' },
    { id: 'settings', name: 'System', icon: <Settings size={28} />, color: 'bg-gradient-to-br from-[#F1F3F4] to-[#E8EAED] text-[#3C4043]' }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-android-wallpaper flex flex-col items-center select-none">
      {/* Dynamic Status Bar */}
      <div className="w-full h-10 flex justify-between items-center px-6 z-50 text-white font-medium text-sm">
        <div className="flex items-center gap-2">
          <span>{formatTime(currentTime)}</span>
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
        </div>
        <div className="flex items-center gap-3">
          <SignalHigh size={16} strokeWidth={2.5} />
          <Wifi size={16} strokeWidth={2.5} />
          <div className="flex items-center gap-0.5">
            <Battery size={18} strokeWidth={2.5} className="rotate-90" />
          </div>
        </div>
      </div>

      {/* Main Pixel Home Screen */}
      <div className="flex-1 w-full max-w-md flex flex-col items-center px-6 pt-10 space-y-12 overflow-y-auto pb-32 scrollbar-hide">
        {/* At-a-Glance Widget */}
        <div className="w-full text-white space-y-1 self-start ml-2 mb-4 animate-in fade-in slide-in-from-left duration-700">
          <div className="flex items-center gap-2 text-xl font-medium tracking-tight">
            <HeartPulse size={20} className="text-red-400" />
            <span>{currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}</span>
          </div>
          <p className="text-sm opacity-80 flex items-center gap-2">
            <Info size={14} />
            Clinic is open • Next Slot: 4:30 PM
          </p>
        </div>

        {/* Google Search Widget */}
        <div className="w-full material-blur h-14 rounded-full flex items-center px-5 gap-3 shadow-xl border border-white/30 transition-all hover:scale-[1.02] active:scale-[0.98] group">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5 mr-1" />
          <div className="flex-1 text-gray-600 text-sm font-medium">Search health concerns...</div>
          <Mic size={20} className="text-blue-500 cursor-pointer hover:text-blue-700" />
          <Camera size={20} className="text-red-500 cursor-pointer hover:text-red-700" />
        </div>

        {/* Adaptive App Grid */}
        <div className="w-full grid grid-cols-4 gap-x-4 gap-y-10 px-1">
          {apps.map((app) => (
            <AppIcon 
              key={app.id}
              id={app.id as AppID} 
              name={app.name} 
              icon={app.icon} 
              bgColor={app.color} 
              onClick={() => setActiveApp(app.id as AppID)} 
            />
          ))}
        </div>

        {/* Dynamic Clinic Card */}
        <div 
          onClick={() => setActiveApp('appointment')}
          className="w-full bg-[#1A73E8] p-6 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-all"
        >
          <div className="relative z-10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Available Now</span>
              <HeartPulse size={20} className="animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Need a specialist?</h3>
            <p className="text-xs opacity-80 leading-relaxed">Skip the queue. Book an instant skin or hair consultation with Dr. Vikash today.</p>
            <div className="pt-2 flex items-center gap-2 font-bold text-sm">
              Schedule Now <Calendar size={16} />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl -ml-12 -mb-12"></div>
        </div>
      </div>

      {/* Android Bottom Navigation */}
      <BottomNav onAppClick={setActiveApp} activeApp={activeApp} />

      {/* Dynamic Activity Windows */}
      {activeApp && (
        <AndroidWindow title={activeApp === 'chat' ? 'DermAI Medical Assistant' : activeApp.charAt(0).toUpperCase() + activeApp.slice(1)} onClose={closeApp}>
          {activeApp === 'about' && <AboutApp />}
          {activeApp === 'services' && <ServicesApp />}
          {activeApp === 'research' && <ResearchApp />}
          {activeApp === 'awards' && <AwardsApp />}
          {activeApp === 'chat' && <ChatApp />}
          {activeApp === 'safari' && <SafariApp />}
          {activeApp === 'appointment' && <AppointmentApp />}
          {activeApp === 'settings' && <SettingsApp />}
        </AndroidWindow>
      )}
    </div>
  );
};

export default App;
