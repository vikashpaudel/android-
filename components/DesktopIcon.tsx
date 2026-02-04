
import React from 'react';
import { AppID } from '../types';

interface DesktopIconProps {
  id: AppID;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor?: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ name, icon, bgColor, iconColor, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center gap-1 cursor-pointer transition-transform active:scale-90"
      onClick={onClick}
    >
      <div className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center shadow-md overflow-hidden ${iconColor || ''}`}>
        {icon}
      </div>
      <span className="text-white text-[11px] font-medium shadow-sm">{name}</span>
    </div>
  );
};

export default DesktopIcon;
