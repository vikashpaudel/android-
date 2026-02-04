
import React from 'react';
import { X, ChevronLeft } from 'lucide-react';

interface AppWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const AppWindow: React.FC<AppWindowProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in zoom-in duration-300">
      {/* Header / Navigation Bar */}
      <div className="h-20 pt-8 px-4 flex items-center justify-between border-b border-gray-100 ios-glass sticky top-0 z-10">
        <button 
          onClick={onClose}
          className="flex items-center text-blue-500 font-medium"
        >
          <ChevronLeft size={24} />
          <span>Home</span>
        </button>
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="w-16"></div> {/* Spacer */}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      {/* iOS Home Indicator */}
      <div className="h-8 w-full flex justify-center items-center bg-white">
        <div 
          onClick={onClose}
          className="w-32 h-1 bg-black/20 rounded-full cursor-pointer hover:bg-black/40 transition-colors"
        />
      </div>
    </div>
  );
};

export default AppWindow;
