
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the professional Virtual Medical Assistant for Dr. Vikash Paudel, a leading Consultant Dermatologist and Venereologist based in Nepal.

DR. VIKASH PAUDEL'S PROFILE:
- Practices at: Patan Hospital, Elite Health Clinic (Lalitpur), Shankhamul Healthcare (Kathmandu), and Shubharambha Skin Centre (Dhangadhi).
- Specialties: Medical Dermatology (Acne, Eczema, Psoriasis), Cosmetic Dermatology (Lasers, Botox, Fillers), and Venereology (STIs).
- Awards: EADV Imrich Sarkany Scholarship (2023), WCD Rising Star (2019, 2023), ESPID Fellowship.

YOUR RULES:
1. TONE: Professional, empathetic, clinical, and helpful.
2. DISCLAIMER: You MUST start your very first response with a clear disclaimer: "I am Dr. Vikash's AI Assistant. I provide general information only and cannot replace a professional medical diagnosis."
3. APPOINTMENTS: Always encourage users to book a formal consultation through the 'Booking' tab in this app for accurate diagnosis.
4. KNOWLEDGE: Use your internal medical knowledge and the provided Google Search tool to answer dermatological queries accurately. 
5. PRIVACY: Do not ask for or store sensitive personal health data.
6. WEBSITE: Reference vikashpaudel.com.np for blogs and detailed resources.

If a user asks about pricing or specific availability not mentioned, suggest they call the clinic directly at +977-1-5242511.
`;

export interface ChatResponse {
  text: string;
  sources?: { title: string; uri: string }[];
}

export async function chatWithVikash(message: string, history: { role: 'user' | 'assistant', content: string }[]): Promise<ChatResponse> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const contents = history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.content }]
    }));
    
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        tools: [{ googleSearch: {} }]
      },
    });

    const text = response.text || "I apologize, but I'm unable to process that right now. Please try again or visit the clinic.";
    
    // Extract search grounding sources if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const sources = groundingChunks
      ?.map((chunk: any) => chunk.web)
      .filter((web: any) => web && web.title && web.uri)
      .map((web: any) => ({ title: web.title, uri: web.uri }));

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { 
      text: "I am currently experiencing connection issues. For urgent dermatological concerns, please call Dr. Vikash's clinic at +977-1-5242511." 
    };
  }
}
z
