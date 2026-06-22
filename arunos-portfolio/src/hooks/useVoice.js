import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useVoice = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Internal configuration tracker for the Speech Instance
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Cross-browser speech recognition support hook
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setError('Web Speech API is not supported in this browser.');
      return;
    }

    const rec = new SpeechRecognition();
    rec.continuous = false; // Stop listening automatically after a phrase is spoken
    rec.interimResults = false; // Only care about the finalized sentence
    rec.lang = 'en-US';

    rec.onstart = () => setIsListening(true);
    rec.onend = () => setIsListening(false);
    rec.onerror = (e) => setError(e.error);

    rec.onresult = (event) => {
      const speechToText = event.results[0][0].transcript.toLowerCase();
      setTranscript(speechToText);
      handleVoiceCommand(speechToText);
    };

    setRecognition(rec);

    // Cleanup hook instance on component unmount
    return () => {
      if (rec) rec.abort();
    };
  }, []);

  // Voice command logic router mapping engine
  const handleVoiceCommand = useCallback((command) => {
    console.log('Voice Command Received:', command);

    if (command.includes('home') || command.includes('main')) {
      navigate('/');
    } else if (command.includes('project')) {
      navigate('/projects');
    } else if (command.includes('skill') || command.includes('tool')) {
      navigate('/skills');
    } else if (command.includes('contact') || command.includes('hire') || command.includes('email')) {
      navigate('/contact');
    } else if (command.includes('git')) {
      navigate('/github');
    }
  }, [navigate]);

  const startListening = () => {
    if (recognition && !isListening) {
      setError(null);
      try {
        recognition.start();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
    }
  };

  return { isListening, transcript, error, startListening, stopListening };
};