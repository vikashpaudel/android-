
import React from 'react';
import { BookOpen, FileText, Globe, Users } from 'lucide-react';

const ResearchApp: React.FC = () => {
  return (
    <div className="bg-white min-h-full p-6 space-y-8 pb-20">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Research</h2>
        <p className="text-gray-500">Academic achievements and global papers</p>
      </div>

      <div className="bg-indigo-50 p-6 rounded-[2rem] border border-indigo-100">
        <div className="flex items-center gap-3 text-indigo-700 font-bold mb-4">
          <Globe size={20} />
          <h3>Global Presence</h3>
        </div>
        <p className="text-sm text-indigo-600 leading-relaxed">
          Dr. Vikash's research has been presented across multiple continents: Asia (India, Sri Lanka, Singapore, Philippines), Europe (Italy, Spain, Netherlands), and Middle East (UAE).
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold border-b border-gray-100 pb-2">Recent Papers</h3>
        <div className="space-y-4">
          {[
            { title: "Epidemiological study of acne in urban Kathmandu", type: "Clinical Study" },
            { title: "Management of STIs in low-resource settings", type: "Research Paper" },
            { title: "Advanced Laser Rejuvenation: A Review", type: "Conference Paper" }
          ].map((paper, i) => (
            <div key={i} className="flex gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">{paper.title}</h4>
                <p className="text-xs text-indigo-500 font-medium">{paper.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchApp;
