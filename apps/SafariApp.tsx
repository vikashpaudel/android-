
import React from 'react';
import { Search, RotateCcw, Share, Bookmark, Copy, ChevronLeft, ChevronRight } from 'lucide-react';

const SafariApp: React.FC = () => {
  const url = "https://vikashpaudel.com.np";

  return (
    <div className="flex flex-col h-full bg-[#f4f4f4]">
      {/* URL Bar */}
      <div className="p-3 bg-gray-100 border-b border-gray-200">
        <div className="bg-white/80 backdrop-blur rounded-xl h-10 flex items-center px-4 gap-2 text-gray-500 text-sm shadow-sm border border-gray-200">
          <Search size={14} />
          <span className="flex-1 truncate">{url}</span>
          <RotateCcw size={14} />
        </div>
      </div>

      {/* Web View */}
      <div className="flex-1 relative bg-white">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gray-50">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">vikashpaudel.com.np</h3>
          <p className="text-gray-500 mb-6">Experience the full web portfolio for more details and blog posts.</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-600"
          >
            Open in Real Browser
          </a>
        </div>
      </div>

      {/* Tool Bar */}
      <div className="h-14 bg-gray-100 border-t border-gray-200 flex items-center justify-around text-blue-500 pb-2">
        <div className="flex flex-col items-center opacity-50"><ChevronLeft size={24} /><span className="text-[10px]">Back</span></div>
        <div className="flex flex-col items-center opacity-50"><ChevronRight size={24} /><span className="text-[10px]">Forward</span></div>
        <div className="flex flex-col items-center"><Share size={20} /><span className="text-[10px]">Share</span></div>
        <div className="flex flex-col items-center"><Bookmark size={20} /><span className="text-[10px]">Bookmarks</span></div>
        <div className="flex flex-col items-center"><Copy size={20} /><span className="text-[10px]">Tabs</span></div>
      </div>
    </div>
  );
};

export default SafariApp;
