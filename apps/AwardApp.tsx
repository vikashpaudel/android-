
import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const awards = [
  { year: "2023", title: "Imrich Sarkany Non-European Memorial Scholarship", org: "EADV, Seville, Spain", icon: <Trophy size={20} /> },
  { year: "2023", title: "Rising Star Award", org: "World Congress of Dermatology, Singapore", icon: <Star size={20} /> },
  { year: "2020", title: "ESPID Fellowship Award", org: "ESPID, Amsterdam", icon: <Award size={20} /> },
  { year: "2019", title: "WSPID Fellowship", org: "Manila", icon: <Award size={20} /> },
  { year: "2019", title: "Rising Star Award", org: "WCD, Milan", icon: <Star size={20} /> },
  { year: "2015", title: "SARAD Scholarship Award", org: "Lanka Derma, Sri Lanka", icon: <Medal size={20} /> },
  { year: "2000", title: "Padma Bahadur Prativa Padak", org: "SLC Gold Medal, Nepal", icon: <Medal size={20} /> }
];

const AwardsApp: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-full p-4 space-y-6">
      <div className="text-center space-y-2 py-4">
        <Award size={48} className="text-amber-500 mx-auto" />
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Awards & Recognition</h2>
        <p className="text-gray-500 text-sm">International excellence in Dermatology</p>
      </div>

      <div className="space-y-4 pb-12">
        {awards.map((award, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
              {award.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-900 text-sm leading-tight">{award.title}</h3>
                <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{award.year}</span>
              </div>
              <p className="text-gray-500 text-xs mt-1">{award.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsApp;
