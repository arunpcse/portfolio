import { createContext, useState, useContext } from 'react';
import { handleAIQuery } from '../services/aiService';

const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I am Arun's AI proxy. Ask me about his technical toolbelt, embedded IoT setups, or software experience!" }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const askAssistant = async (userText) => {
    if (!userText.trim()) return;

    // Append user question
    const updatedMessages = [...messages, { role: 'user', text: userText }];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      // FIX: Changed 'aiService.sendMessage' to 'handleAIQuery' to match your service file
      const systemReply = await handleAIQuery(userText);
      setMessages([...updatedMessages, { role: 'assistant', text: systemReply }]);
    } catch (err) {
      setMessages([...updatedMessages, { role: 'assistant', text: "System pipeline timeout. Please re-type your request." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <AIContext.Provider value={{ messages, isOpen, isTyping, toggleChat, askAssistant }}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => useContext(AIContext);