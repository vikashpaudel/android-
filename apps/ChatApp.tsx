
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Mic, Info, ExternalLink, AlertTriangle } from 'lucide-react';
import { chatWithVikash, ChatResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<(Message & { sources?: { title: string; uri: string }[] })[]>([
    { 
      role: 'assistant', 
      content: "Namaste! I'm Dr. Vikash's Virtual Assistant. How can I help you with your skin or hair health today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Map internal messages to the history format required by the service
    const history = messages.map(m => ({ role: m.role, content: m.content }));
    const result: ChatResponse = await chatWithVikash(input, history);
    
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: result.text,
      sources: result.sources
    }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-[#fdfcff] relative">
      {/* Persistent Disclaimer Banner */}
      <div className="bg-amber-50 border-b border-amber-100 p-3 flex items-start gap-3 animate-in fade-in slide-in-from-top duration-500">
        <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
        <p className="text-[11px] text-amber-800 leading-tight font-medium">
          <strong>Medical Disclaimer:</strong> This AI assistant provides general info only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>

      {/* Chat Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-[#006495]' : 'bg-white border border-gray-100'}`}>
                {msg.role === 'user' ? <User size={18} className="text-white" /> : <Bot size={18} className="text-[#006495]" />}
              </div>
              <div className="space-y-2">
                <div className={`p-4 rounded-[24px] text-sm leading-relaxed shadow-sm transition-all ${
                  msg.role === 'user' 
                    ? 'bg-[#006495] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  {msg.content}
                </div>
                
                {/* Search Sources Display */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2 pl-2 space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                      <Info size={10} /> Verified Sources
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {msg.sources.slice(0, 3).map((source, idx) => (
                        <a 
                          key={idx} 
                          href={source.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-[10px] flex items-center gap-1 transition-colors border border-gray-200"
                        >
                          <span className="max-w-[120px] truncate">{source.title}</span>
                          <ExternalLink size={8} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                <Bot size={18} className="text-[#006495]" />
              </div>
              <div className="p-4 rounded-[24px] bg-white border border-gray-100 rounded-tl-none flex items-center gap-3 shadow-sm">
                <Loader2 size={16} className="animate-spin text-[#006495]" />
                <span className="text-xs text-gray-500 font-medium tracking-tight">Dr. Vikash's AI is consulting sources...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggestion Chips */}
      {messages.length < 3 && !isLoading && (
        <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
          {["Acne treatment", "Hair fall solutions", "Botox details", "Clinic hours"].map((chip) => (
            <button 
              key={chip}
              onClick={() => { setInput(chip); }}
              className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap active:bg-gray-100 transition-colors shadow-sm"
            >
              {chip}
            </button>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 bg-[#f0f4f9] rounded-[32px] px-5 py-2 border border-gray-200 focus-within:border-[#006495] focus-within:bg-white transition-all shadow-inner">
          <input 
            type="text" 
            placeholder="Ask Dr. Vikash's AI Assistant..."
            className="flex-1 bg-transparent border-none outline-none py-2 text-sm text-gray-900 placeholder:text-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Mic size={20} className="text-[#006495] cursor-pointer hover:scale-110 active:scale-95 transition-transform" />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all ${
              input.trim() && !isLoading 
                ? 'bg-[#006495] text-white active:scale-90 rotate-0' 
                : 'bg-gray-200 text-gray-400 rotate-12'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-2 font-medium">
          Always consult a doctor for diagnosis.
        </p>
      </div>
    </div>
  );
};

export default ChatApp;
