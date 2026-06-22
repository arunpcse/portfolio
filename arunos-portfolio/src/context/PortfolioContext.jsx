import { createContext, useState, useContext, useEffect } from 'react';

// FIXED PATHS: Stepping out of context/ and directly into data/ within src/
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';
import { achievementsData } from '../data/achievements';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('All');
  const [stats, setStats] = useState({
    projectCount: 0,
    certificateCount: 0,
    skillsCount: 0,
  });

  useEffect(() => {
    setStats({
      projectCount: projectsData?.length || 0,
      certificateCount: certificationsData?.length || 0,
      skillsCount: skillsData?.length || 0,
    });
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        skills: skillsData,
        projects: projectsData,
        education: educationData,
        certifications: certificationsData,
        achievements: achievementsData,
        selectedProject,
        setSelectedProject,
        projectFilter,
        setProjectFilter,
        stats,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);