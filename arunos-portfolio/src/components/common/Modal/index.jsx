import { useState, useRef, useEffect } from 'react';
import { useAI } from '../../../context/AIContext';

const AIAssistant = () => {
  const { messages, isOpen, isTyping, toggleChat, askAssistant } = useAI();
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scroller engine to track active dialog inputs
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    askAssistant(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start pointer-events-auto">
      
      {/* Floating Chat Trigger Button */}
      <button
        onClick={toggleChat}
        className={`p-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border ${
          isOpen 
            ? 'bg-slate-900 text-white border-slate-950' 
            : 'bg-white text-slate-700 border-slate-200 hover:border-sky-200 hover:text-sky-500'
        }`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Slide-Up Chat Window Console Container */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden h-[450px] animate-fade-in-up">
          
          {/* Header Profile Panel */}
          <div className="bg-slate-900 p-4 text-white flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></div>
            <div>
              <h4 className="text-sm font-bold tracking-wide">Arun's Digital Twin</h4>
              <p className="text-[10px] text-slate-400 font-medium">Core AI Agent Architecture</p>
            </div>
          </div>

          {/* Dialog Stream Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] px-3.5 py-2 rounded-xl text-sm leading-relaxed shadow-xs ${
                  msg.role === 'user' 
                    ? 'bg-sky-500 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Thinking UI Placeholder */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 text-slate-400 text-xs px-4 py-2 rounded-xl rounded-bl-none italic shadow-xs flex items-center gap-1">
                  <span>Compiling output</span>
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Message Prompt Action Input Tray */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my specs, stack, builds..."
              className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all duration-200"
            />
            <button
              type="submit"
              className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors shadow-sm flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>

        </div>
      )}

    </div>
  );
};

// Explicit default export to resolve the build system error
export default AIAssistant;