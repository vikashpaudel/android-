
import React from 'react';
import { Home, Stethoscope, MessageCircle, Calendar } from 'lucide-react';
import { AppID } from '../types';

interface BottomNavProps {
  onAppClick: (id: AppID | null) => void;
  activeApp: AppID | null;
}

const BottomNav: React.FC<BottomNavProps> = ({ onAppClick, activeApp }) => {
  const NavItem = ({ icon, label, id }: { icon: any, label: string, id: AppID | null }) => {
    const isActive = activeApp === id || (id === null && activeApp === null);
    return (
      <div 
        className="flex flex-col items-center gap-1.5 cursor-pointer flex-1 py-3 group"
        onClick={() => onAppClick(id)}
      >
        <div className={`h-8 flex items-center justify-center rounded-full transition-all duration-500 overflow-hidden ${isActive ? 'bg-[#C2E7FF] text-[#001D35] px-6 w-auto shadow-sm' : 'text-white/80 group-hover:bg-white/10 w-12'}`}>
          {icon}
        </div>
        <span className={`text-[11px] font-bold tracking-tight transition-opacity duration-300 ${isActive ? 'text-white opacity-100' : 'text-white/60 opacity-80'}`}>{label}</span>
      </div>
    );
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-black/20 backdrop-blur-3xl flex items-center px-4 border-t border-white/5 pb-2">
      <NavItem icon={<Home size={22} />} label="Home" id={null} />
      <NavItem icon={<Stethoscope size={22} />} label="Services" id="services" />
      <NavItem icon={<MessageCircle size={22} />} label="Consult" id="chat" />
      <NavItem icon={<Calendar size={22} />} label="Book" id="appointment" />
    </div>
  );
};

export default BottomNav;
