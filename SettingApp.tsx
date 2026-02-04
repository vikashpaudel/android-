
import React from 'react';
import { 
  Wifi, 
  Bluetooth, 
  Smartphone, 
  Moon, 
  Bell, 
  Lock, 
  Info,
  ChevronRight,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';

const SettingsApp: React.FC = () => {
  const SettingRow = ({ icon, label, value, color, last = false }: { icon: any, label: string, value?: string, color: string, last?: boolean }) => (
    <div className="flex items-center gap-3 bg-white px-4 h-12 active:bg-gray-100 cursor-pointer transition-colors">
      <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center text-white shadow-sm`}>
        {icon}
      </div>
      <div className={`flex-1 flex items-center justify-between h-full ${!last ? 'border-b border-gray-100' : ''}`}>
        <span className="text-gray-900 font-medium text-[15px]">{label}</span>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-sm font-normal">{value}</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f2f2f7] min-h-full pb-16">
      <div className="p-4 pt-8 pb-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Settings</h1>
      </div>

      <div className="space-y-8">
        {/* User Card */}
        <div className="mx-4 bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl border-4 border-cyan-50 shadow-inner">
            VP
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold tracking-tight">Dr. Vikash Paudel</h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-tighter">Medical Profile • iCloud Health</p>
          </div>
          <ChevronRight size={20} className="text-gray-300" />
        </div>

        {/* Clinic Connections Section */}
        <div className="mx-4 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <SettingRow icon={<Smartphone size={18} />} label="Clinic Mode" color="bg-orange-400" />
          <SettingRow icon={<Wifi size={18} />} label="Clinic Wi-Fi" value="Paudel_Dermatology" color="bg-blue-500" />
          <SettingRow icon={<Bluetooth size={18} />} label="Medical Devices" value="Connected" color="bg-blue-600" />
          <SettingRow icon={<ShieldCheck size={18} />} label="Patient Privacy" color="bg-green-500" last />
        </div>

        {/* App Info Section */}
        <div className="mx-4 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <SettingRow icon={<HeartPulse size={18} />} label="Health Integration" color="bg-red-500" />
          <SettingRow icon={<Info size={18} />} label="About Dr. Paudel OS" value="v1.2.0-clinical" color="bg-cyan-600" />
          <SettingRow icon={<Bell size={18} />} label="Clinic Notifications" color="bg-indigo-500" last />
        </div>
      </div>

      <div className="mt-12 text-center px-8">
        <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">Expert Dermatological Care</p>
        <p className="text-[10px] text-gray-300 mt-1">Kathmandu, Nepal</p>
      </div>
    </div>
  );
};

export default SettingsApp;
