import PageIntro from "../../components/common/PageIntro/PageIntro";
import useAutoPageScroll from "../../hooks/useAutoPageScroll";
import LiquidBackground from "../../components/background/LiquidBackground";
import "./about.css";

import about from "../../assets/images/about/about.png";
import skills from "../../assets/images/about/skills.png";
import goal from "../../assets/images/about/goal.png";

const About = () => {
  useAutoPageScroll("/skills");

  const flipCards = [
    {
      id: 1,
      title: "👨‍💻 Who Am I?",
      image: about,
      front: (
        <div className="space-y-3 text-left">
          <p className="text-3xl font-black tracking-tight text-white font-heading">Arun P</p>
          <p className="text-xl text-cyan-300 font-semibold font-tech">3rd Year Computer Science Student</p>
          <p className="text-sm text-slate-300 font-medium">Kongu Engineering College</p>
        </div>
      ),
      back: (
        <div className="space-y-4 text-left w-full">
          <p className="text-base leading-relaxed text-slate-200">
            A software engineering student focused on backend software architectures, database ecosystems, and smart hardware implementations.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-slate-700/30 pt-4">
            <div>
              <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider font-tech">Academic CGPA</span>
              <span className="text-2xl font-black text-cyan-400 font-tech">8.77 / 10.0</span>
            </div>
            <div>
              <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider font-tech">Core Focus</span>
              <span className="text-base font-bold text-white">Full-Stack & IoT</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "💻 What I Do?",
      image: skills,
      front: (
        <div className="space-y-3 text-left">
          <p className="text-3xl font-black tracking-tight text-white font-heading">Technical Stack</p>
          <p className="text-lg text-slate-300 font-medium leading-relaxed">
            Developing web backends, responsive UI architectures, and microchip firmware loops.
          </p>
        </div>
      ),
      back: (
        <div className="space-y-3 text-left w-full">
          <p className="text-sm font-black text-purple-300 uppercase tracking-widest font-tech mb-2">Core Competencies</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-200 font-semibold">
            <div>• React & TailwindCSS</div>
            <div>• Node.js & Express</div>
            <div>• Flutter Framework</div>
            <div>• OpenCV Computer Vision</div>
            <div>• Java, C++, Python</div>
            <div>• MySQL & SQLite Systems</div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "🚀 My Milestones",
      image: goal,
      front: (
        <div className="space-y-3 text-left">
          <p className="text-3xl font-black tracking-tight text-white font-heading">Engineering Metrics</p>
          <p className="text-lg text-slate-300 font-medium">
            Academic achievements, project completions, and system codebase statistics.
          </p>
        </div>
      ),
      back: (
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800/40 text-center">
            <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Completed Projects</span>
            <span className="text-xl font-black text-pink-400 font-tech">5+ Deployments</span>
          </div>
          <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800/40 text-center">
            <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Certifications</span>
            <span className="text-xl font-black text-cyan-400 font-tech">10+ Credentials</span>
          </div>
          <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800/40 text-center">
            <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">GitHub Commits</span>
            <span className="text-xl font-black text-amber-400 font-tech">500+ Commits</span>
          </div>
          <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800/40 text-center flex flex-col justify-center">
            <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Industry Prep</span>
            <span className="text-xs font-black text-slate-200 mt-1 uppercase tracking-wide">Implant Training</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="about-section">
      <LiquidBackground />

      <div className="about-content">
        <PageIntro title="About Me" />

        <div className="about-card-grid">
          {flipCards.map((card) => (
            <div key={card.id} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="flip-card-img"
                  />

                  <div className="card-content">
                    <h2 className="font-heading mb-4 text-3xl font-extrabold">{card.title}</h2>
                    {card.front}
                  </div>
                </div>

                <div className="flip-card-back">
                  <div className="card-content w-full">
                    <h2 className="font-heading mb-4 text-3xl font-extrabold">{card.title}</h2>
                    {card.back}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;