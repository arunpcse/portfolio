import { useState } from "react";
import { skillsData } from '../../data/skills';
import { motion } from "framer-motion";
import PageIntro from "../../components/common/PageIntro/PageIntro";
import useAutoPageScroll from "../../hooks/useAutoPageScroll";
import LiquidBackground from "../../components/background/LiquidBackground";

// Custom inline SVG icons representing categories
const getCategoryIcon = (category) => {
  switch (category) {
    case "Software & Core Programming":
      return (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "Full Stack & Frameworks":
      return (
        <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "Databases & Storage":
      return (
        <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      );
    case "Hardware & IoT Nodes":
      return (
        <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
};

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useAutoPageScroll("/projects");

  // Filter skills based on search term (checks both category name and skill items)
  const filteredSkills = skillsData
    .map((categoryObj) => {
      const matchCategory = categoryObj.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchingItems = categoryObj.items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...categoryObj,
        items: matchCategory ? categoryObj.items : matchingItems,
        hasMatch: matchCategory || matchingItems.length > 0,
      };
    })
    .filter((cat) => cat.hasMatch);

  return (
    <div className="relative w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center bg-transparent overflow-hidden">
      {/* Animated Liquid Canvas Background */}
      <LiquidBackground />

      <div className="relative w-full max-w-5xl z-10 space-y-12">
        <PageIntro title="Technical Skills" />

        {/* Page Title Header */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent inline-block pb-2">
            Technical Toolbelt
          </h2>
          <p className="text-base text-slate-400 max-w-xl">
            My core engineering capabilities across software development, web frameworks, hardware prototyping, and relational systems.
          </p>
        </div>

        {/* Dynamic Search Box */}
        <div className="relative w-full max-w-md mx-auto md:mx-0">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search skills, databases, systems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 focus:border-cyan-500 rounded-xl pl-11 pr-10 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:ring-4 focus:ring-cyan-500/10 shadow-lg"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs font-bold transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Grid: Staggered Category Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredSkills.map((categoryObj, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800/50 hover:border-cyan-500/40 rounded-2xl p-6 shadow-2xl backdrop-blur-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top indicator glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                <div className="flex items-center gap-4 mb-5 pb-3 border-b border-slate-800/50">
                  <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(categoryObj.category)}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {categoryObj.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {categoryObj.items.map((skillName, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3.5 py-2 bg-slate-900/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 cursor-default"
                    >
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {filteredSkills.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="text-slate-500 text-lg font-medium">No engineering skills found matching "{searchQuery}"</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;