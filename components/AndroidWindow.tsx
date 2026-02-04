
import React from 'react';
import { ChevronLeft, MoreVertical, Share2, Info } from 'lucide-react';

interface AndroidWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const AndroidWindow: React.FC<AndroidWindowProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#fdfcff] flex flex-col animate-in slide-in-from-bottom duration-500 ease-out">
      {/* Material 3 App Bar */}
      <div className="h-20 flex items-center px-4 gap-4 bg-[#fdfcff] sticky top-0 z-50 border-b border-gray-50">
        <button 
          onClick={onClose}
          className="p-3 hover:bg-black/5 active:bg-black/10 rounded-full transition-colors text-gray-800"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold text-gray-900 truncate tracking-tight">{title}</h1>
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-0.5">Clinic Official</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-black/5 rounded-full text-gray-600"><Share2 size={20} /></button>
          <button className="p-2 hover:bg-black/5 rounded-full text-gray-600"><MoreVertical size={20} /></button>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto bg-white">
        {children}
      </div>

      {/* Android System Gestures Area */}
      <div className="h-10 flex justify-center items-end pb-3 bg-white">
        <div 
          onClick={onClose}
          className="w-20 h-1.5 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-colors"
        />
      </div>
    </div>
  );
};

export default AndroidWindow;
