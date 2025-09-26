// src/components/ChatBot.jsx

import { useState, useRef, useEffect } from 'react';
import { myData } from '../constants/myData'; // Your personal data
import ReactMarkdown from 'react-markdown';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Vishwas's assistant. Ask me about my skills, projects, or experience!", isUser: false },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  // --- This is the complete, improved rule-based logic ---
  const getStaticResponse = (userInput) => {
    const query = userInput.toLowerCase();

    // Specific Project Checks (Now includes tech stack in the response)
    if (query.includes('color dash') || query.includes('reaction game')) {
      const project = myData.projects.find((p) => p.id === 'color-dash');
      return `${project.description}\n\n**Tech used:** ${project.tech.join(', ')}`;
    }
    if (query.includes('hate speech')) {
      const project = myData.projects.find((p) => p.id === 'hate-speech-detection');
      return `${project.description}\n\n**Tech used:** ${project.tech.join(', ')}`;
    }
    if (query.includes('binary tree') || query.includes('visualizer')) {
      const project = myData.projects.find((p) => p.id === 'binary-tree-visualizer');
      return `${project.description}\n\n**Tech used:** ${project.tech.join(', ')}`;
    }

    // General Keyword Checks
    if (query.includes('skill') || query.includes('tech') || query.includes('know')) {
      const skillsText = `Vishwas is skilled in:\n- **Languages:** ${myData.tech_stack.languages.join(', ')}\n- **Frameworks:** ${myData.tech_stack.frameworks_libraries.join(', ')}\n- **ML:** ${myData.tech_stack.ml.join(', ')}`;
      return skillsText;
    }
    if (query.includes('project')) {
      const projectNames = myData.projects.map((p) => p.name).join(', ');
      return `He has built several projects, including: ${projectNames}. You can ask about a specific one!`;
    }
    if (query.includes('experience') || query.includes('intern')) {
      return `Vishwas had an internship at ${myData.experience[0].company} where he worked as a ${myData.experience[0].title}.`;
    }
    if (query.includes('education') || query.includes('college') || query.includes('cgpa')) {
      return `He is pursuing a ${myData.education.degree} from ${myData.education.college} with a CGPA of ${myData.education.cgpa}.`;
    }
    if (query.includes('contact') || query.includes('email') || query.includes('linkedin')) {
      return `You can reach Vishwas via email at ${myData.email} or connect on GitHub at ${myData.github}.`;
    }
    if (query.includes('hello') || query.includes('hi')) {
      return 'Hello there! How can I help you learn more about Vishwas?';
    }

    // Fallback message
    return "I can answer questions about Vishwas's skills, projects, and experience. Please try asking one of those!";
  };

  const handleSend = () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    // Get the response from our local function
    setTimeout(() => {
      const botResponseText = getStaticResponse(input);
      const botMessage = { text: botResponseText, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 600); // Simulate "thinking"

    setInput('');
  };

  // --- Helper functions and JSX ---
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
            <h2 className="font-semibold text-lg">Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl">
              ✖
            </button>
          </div>
          <div ref={chatBoxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl prose prose-invert prose-p:my-0 prose-ul:my-0 prose-li:my-1 ${msg.isUser ? 'bg-blue-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}>
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
