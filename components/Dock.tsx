
import React from 'react';
import { User, MessageCircle, Code, Globe } from 'lucide-react';
import { AppID } from '../types';

interface DockProps {
  onAppClick: (id: AppID) => void;
}

const Dock: React.FC<DockProps> = ({ onAppClick }) => {
  return (
    <div className="absolute bottom-6 mx-auto ios-glass px-4 py-3 rounded-[32px] flex gap-4 items-center shadow-xl border border-white/20">
      <div 
        className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-90"
        onClick={() => onAppClick('about')}
      >
        <User size={30} className="text-white" />
      </div>
      <div 
        className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-90"
        onClick={() => onAppClick('chat')}
      >
        <MessageCircle size={30} className="text-white" />
      </div>
      <div 
        className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-90"
        // Fix: Changed 'projects' to 'research' to align with AppID type definition
        onClick={() => onAppClick('research')}
      >
        <Code size={30} className="text-white" />
      </div>
      <div 
        className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-90 border border-gray-200 shadow-sm"
        onClick={() => onAppClick('safari')}
      >
        <Globe size={30} className="text-blue-500" />
      </div>
    </div>
  );
};

export default Dock;
