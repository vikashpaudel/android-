
export type AppID = 'about' | 'services' | 'research' | 'awards' | 'chat' | 'safari' | 'settings' | 'appointment';

export interface AppConfig {
  id: AppID;
  name: string;
  icon: string;
  color: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
