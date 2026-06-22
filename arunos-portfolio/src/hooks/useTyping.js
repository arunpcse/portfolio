import { useState, useEffect } from 'react';

export const useTyping = (texts = [], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;
    const currentFullText = texts[textIndex];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => setDisplayText(currentFullText.slice(0, displayText.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(currentFullText.slice(0, displayText.length - 1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return { displayText, isTyping: !isDeleting && displayText.length < (texts[textIndex]?.length || 0) };
};
