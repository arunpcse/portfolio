import { Link } from 'react-router-dom';
import { profileData } from '../../data/profile';
const Hero = () => (
  <section className="max-w-4xl mx-auto py-20 px-4 text-center space-y-10">
    <div className="space-y-4">
      <span className="text-xs font-bold tracking-widest uppercase bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-3.5 py-1.5 rounded-full border border-sky-100 dark:border-sky-800">Available for Opportunities</span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight pt-2">Hi, I am <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">{profileData.name}</span></h1>
      <p className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300">{profileData.title}</p>
      <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">{profileData.subtitle}</p>
    </div>
    <div className="flex justify-center gap-4">
      <Link to="/projects" className="px-6 py-2.5 bg-sky-500 text-white font-semibold text-sm rounded-lg shadow-sm hover:bg-sky-600 hover:-translate-y-0.5 transition-all duration-200">View My Work</Link>
      <Link to="/contact" className="px-6 py-2.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all duration-200">Contact Me</Link>
    </div>
  </section>
);
export default Hero;
