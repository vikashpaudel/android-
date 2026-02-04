
import React from 'react';
import { AppID } from '../types';

interface AppIconProps {
  id: AppID;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  onClick: () => void;
}

const AppIcon: React.FC<AppIconProps> = ({ name, icon, bgColor, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center gap-2.5 cursor-pointer transition-all active:scale-90 group"
      onClick={onClick}
    >
      <div className="relative">
        {/* Shadow layer for depth */}
        <div className="absolute inset-0 bg-black/20 blur-md translate-y-2 rounded-[24px] scale-90 group-hover:scale-100 group-hover:translate-y-3 transition-all duration-300" />
        
        {/* Icon Background */}
        <div className={`relative w-[72px] h-[72px] rounded-[24px] ${bgColor} flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] overflow-hidden`}>
          
          {/* Subtle Inner Glow/Bevel Effect */}
          <div className="absolute inset-0 border-t border-white/40 rounded-[24px]" />
          <div className="absolute inset-0 border-b border-black/5 rounded-[24px]" />
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full" />
          
          <div className="relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-[2deg] drop-shadow-sm">
            {icon}
          </div>
        </div>
      </div>
      
      <span className="text-white text-[11px] font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] text-center tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
        {name}
      </span>
    </div>
  );
};

export default AppIcon;
