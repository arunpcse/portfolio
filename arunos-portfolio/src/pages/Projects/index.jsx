import { useState } from "react";
import { projectsData } from '../../data/projects';
import { motion, AnimatePresence } from "framer-motion";
import useAutoPageScroll from "../../hooks/useAutoPageScroll";
import PageIntro from "../../components/common/PageIntro/PageIntro";
import LiquidBackground from "../../components/background/LiquidBackground";

// Vector SVG project illustrations
const ProjectIllustration = ({ id }) => {
  if (id === 1) {
    // Alcohol Detection System SVG Illustration
    return (
      <svg className="w-full h-40 bg-slate-950/60 rounded-xl border border-slate-800/80 mb-6 p-4" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 40 L 400 40 M 0 80 L 400 80 M 0 120 L 400 120 M 100 0 L 100 160 M 200 0 L 200 160 M 300 0 L 300 160" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4 4" />
        
        {/* Motorcycle speedometer arch */}
        <path d="M 120 120 A 80 80 0 0 1 280 120" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <path d="M 120 120 A 80 80 0 0 1 200 40" stroke="url(#cyanGrad)" strokeWidth="6" strokeLinecap="round" />
        
        {/* Speedometer Center Pin */}
        <circle cx="200" cy="120" r="14" fill="#0f172a" stroke="#00f5ff" strokeWidth="2.5" />
        {/* Need indicator */}
        <line x1="200" y1="120" x2="160" y2="70" stroke="#00f5ff" strokeWidth="3" strokeLinecap="round" />
        
        {/* Sensor Ring */}
        <circle cx="70" cy="80" r="30" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
        {/* Pulse rings */}
        <circle cx="70" cy="80" r="22" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Sensor icon */}
        <path d="M64 74h12v12H64z" fill="#a78bfa" opacity="0.8" />
        <text x="70" y="118" fill="#a78bfa" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">MQ-3 GAS</text>

        {/* Ignition Cutoff Relay Switch */}
        <rect x="300" y="50" width="46" height="50" rx="8" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
        <text x="323" y="68" fill="#ec4899" fontSize="8" fontWeight="black" textAnchor="middle">RELAY</text>
        {/* Relay line connection */}
        <path d="M 200 120 L 300 75" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="4 2" />
        
        {/* Status indicator */}
        <circle cx="323" cy="84" r="5" fill="#22c55e" />
        <text x="323" y="118" fill="#ec4899" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">SECURE IGN</text>

        <defs>
          <linearGradient id="cyanGrad" x1="120" y1="80" x2="200" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00f5ff" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    // Smart Tourist Safety / ESP32 + GPS SVG Illustration
    return (
      <svg className="w-full h-40 bg-slate-950/60 rounded-xl border border-slate-800/80 mb-6 p-4" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid */}
        <path d="M 0 40 L 400 40 M 0 80 L 400 80 M 0 120 L 400 120 M 100 0 L 100 160 M 200 0 L 200 160 M 300 0 L 300 160" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Telemetry Tracking map grid circles */}
        <circle cx="200" cy="80" r="60" stroke="#1e293b" strokeWidth="1" />
        <circle cx="200" cy="80" r="40" stroke="#334155" strokeWidth="1" />
        
        {/* Pulse tracking wave */}
        <circle cx="200" cy="80" r="28" stroke="#00f5ff" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="r" values="10;50" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Geofence Ring */}
        <path d="M 180 50 L 230 65 L 240 100 L 175 110 Z" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 2" />

        {/* GPS Satellite icon */}
        <path d="M 80 40 L 95 25 M 65 55 L 80 40" stroke="#00f5ff" strokeWidth="2.5" />
        <rect x="75" y="20" width="22" height="12" rx="2" fill="#0f172a" stroke="#00f5ff" strokeWidth="1.5" />
        <circle cx="70" cy="50" r="4" fill="#00f5ff" />
        <text x="80" y="118" fill="#00f5ff" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">NEO-7M GPS</text>
        
        {/* Telemetry line from Satellite to Center */}
        <path d="M 78 45 L 200 80" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* ESP32 microcontroller representation */}
        <rect x="300" y="45" width="50" height="70" rx="4" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1.5" />
        {/* Pins */}
        <path d="M 296 55 h 4 M 296 65 h 4 M 296 75 h 4 M 296 85 h 4 M 296 95 h 4 M 296 105 h 4 M 350 55 h 4 M 350 65 h 4 M 350 75 h 4 M 350 85 h 4 M 350 95 h 4 M 350 105 h 4" stroke="#94a3b8" strokeWidth="2" />
        {/* Chip Core */}
        <rect x="310" y="60" width="30" height="40" rx="2" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1" />
        <text x="325" y="82" fill="#a78bfa" fontSize="8" fontWeight="bold" textAnchor="middle">ESP32</text>
        <text x="325" y="128" fill="#e2e8f0" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">CORE NODE</text>

        {/* Target Node */}
        <circle cx="200" cy="80" r="5" fill="#ef4444" />
        <line x1="200" y1="80" x2="215" y2="60" stroke="#ef4444" strokeWidth="1.5" />
        <circle cx="215" cy="60" r="3" fill="#ef4444" />
      </svg>
    );
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  useAutoPageScroll("/github");

  // Retrieve unique categories
  const categories = ["All", "IoT & Vehicle Security", "Geospatial Systems"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="relative w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center bg-transparent overflow-hidden">
      {/* Animated background */}
      <LiquidBackground />

      <div className="relative w-full max-w-5xl z-10 space-y-12">
        <PageIntro title="My Projects" />

        {/* Title Header */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-500 bg-clip-text text-transparent inline-block pb-2">
            Engineering Projects
          </h2>
          <p className="text-base text-slate-400 max-w-xl">
            A showcase of hardware integrations, microcontrollers, and geospatial systems connecting physical components with cloud platforms.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-2xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
              }`}
            >
              {cat === "All" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800/50 hover:border-purple-500/40 rounded-3xl p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between hover:shadow-purple-500/5 relative overflow-hidden transition-all duration-300"
              >
                {/* Accent glow bar */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  {/* Dynamic vector artwork */}
                  <ProjectIllustration id={project.id} />

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-purple-950/40 text-purple-300 border border-purple-800/30 rounded-lg">
                      {project.category}
                    </span>
                    {/* Pulsing online status indicator */}
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  {/* Hardware & Logic Specs block */}
                  <div className="bg-slate-950/50 rounded-2xl border border-slate-800/40 p-4 mb-6">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">System Specifications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.id === 1 ? (
                        <>
                          <div>
                            <span className="block text-[9px] text-slate-500 font-bold uppercase">Controller Core</span>
                            <span className="text-xs text-slate-200 font-semibold">Arduino / ATMega</span>
                          </div>
                          <div>
                            <span className="block text-[9px] text-slate-500 font-bold uppercase">Sensor Node</span>
                            <span className="text-xs text-slate-200 font-semibold">MQ-3 Alcohol Sensor</span>
                          </div>
                          <div>
                            <span className="block text-[9px] text-slate-500 font-bold uppercase">Actuation</span>
                            <span className="text-xs text-slate-200 font-semibold">Relay Switch Ignition</span>
                          </div>
                          <div>
                            <span className="block text-[9px] text-slate-500 font-bold uppercase">Logic System</span>
                            <span className="text-xs text-slate-200 font-semibold">Automatic Locking Loop</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <span className="block text-[9px] text-slate-500 font-bold uppercase">Processor Node</span>
                            <span className="text-xs text-slate-200 font-semibold">ESP32 processing unit</span>
                          </div>
                          <div>
                            <span className="block text-[9px] text-slate-500 font-bold uppercase">GPS Telemetry</span>
                            <span className="text-xs text-slate-200 font-semibold">NEO-7M Module</span>
                          </div>
                          <div>
                            <span className="block text-[9px] text-slate-500 font-bold uppercase">Cloud APIs</span>
                            <span className="text-xs text-slate-200 font-semibold">Blynk Cloud API Integration</span>
                          </div>
                          <div>
                            <span className="block text-[9px] text-slate-500 font-bold uppercase">Safety Perimeter</span>
                            <span className="text-xs text-slate-200 font-semibold">Geofencing rings</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tech Pills & Actions */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800/80 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/40 flex justify-between items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl hover:-translate-y-0.5 hover:bg-slate-800/60 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub Repo
                    </a>

                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      ID: 0{project.id}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;