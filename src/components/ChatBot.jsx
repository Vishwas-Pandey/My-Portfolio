// src/components/ChatBot.jsx

import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { myData } from '../constants/myData';
import ReactMarkdown from 'react-markdown';

// Get the API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Vishwas's AI assistant. Ask me about his skills, projects, or experience!", isUser: false },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  // --- Gemini API Call Logic ---
  const runChat = async (userInput) => {
    setIsLoading(true);
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // This is the crucial system prompt that guides the AI
    const systemPrompt = `
      You are 'VishwasAI', a personal AI assistant for Vishwas Pandey's portfolio website. Your ONLY purpose is to answer questions about Vishwas based on the provided JSON data.

      **RULES:**
      1.  **Source of Truth:** Use ONLY the structured JSON data provided below to answer questions. Do not use any external knowledge.
      2.  **Strict Relevance:** If the user asks about anything not related to Vishwas, you MUST politely decline. Respond with something like: "I am an AI assistant for Vishwas Pandey's portfolio. I can only answer questions about his skills, projects, and experience."
      3.  **No Fabrication:** If the data does not contain the answer to a specific question about Vishwas, state that you don't have that information.
      4.  **Tone & Style:** Be professional, concise, and helpful. When listing items like skills or projects, use bullet points for readability.

      Here is the data about Vishwas Pandey:
      ${JSON.stringify(myData)}
    `;

    try {
      const chat = model.startChat({
        history: [{ role: 'user', parts: [{ text: systemPrompt }] }],
        generationConfig: { maxOutputTokens: 500 },
      });

      const result = await chat.sendMessage(userInput);
      const response = await result.response;
      const text = response.text();

      const botMessage = { text, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      const errorMessage = {
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Call the new AI function instead of the static one
    runChat(input);

    setInput('');
  };

  // --- Helper functions and JSX (mostly unchanged) ---

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-96 h-[32rem] bg-gray-900/80 backdrop-blur-sm text-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300">
          <div className="flex justify-between items-center bg-blue-600 px-4 py-3 rounded-t-2xl">
            <h2 className="font-semibold text-lg">AI Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl">
              ✖
            </button>
          </div>

          <div ref={chatBoxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div // Use a div instead of p for better markdown compatibility
                  className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl prose prose-invert prose-p:my-0 prose-ul:my-0 prose-li:my-0 ${msg.isUser ? 'bg-blue-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 rounded-bl-none px-4 py-2 rounded-2xl">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-gray-700 flex items-center">
            <input
              type="text"
              placeholder="Ask about my skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-2.5 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 p-2.5 rounded-full text-white disabled:bg-gray-500"
              disabled={isLoading}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-5 rounded-full shadow-xl hover:bg-blue-700 transition-transform hover:scale-110 text-2xl animate-pulse">
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBot;
