import { createContext, useState, useContext } from 'react';
import { profileData } from '../data/profile';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile] = useState(profileData || {
    name: "Arun",
    role: "Computer Science & Engineering Student",
    institution: "Kongu Engineering College",
    cgpa: "8.77"
  });
  
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeSessionTab, setActiveSessionTab] = useState('Overview');

  const toggleCommandPalette = () => setCommandPaletteOpen(prev => !prev);

  return (
    <UserContext.Provider 
      value={{ 
        userProfile, 
        commandPaletteOpen, 
        setCommandPaletteOpen, 
        toggleCommandPalette,
        activeSessionTab,
        setActiveSessionTab
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);