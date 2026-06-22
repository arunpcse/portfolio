import { profileData } from '../../data/profile';
import { skillsData } from '../../data/skills';
import { educationData } from '../../data/education';
import { projectsData } from '../../data/projects';
import { certificationsData } from '../../data/certifications';

const Resume = () => (
  <div className="max-w-3xl mx-auto py-16 px-4 space-y-10 animate-fade-in-up">
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{profileData.name}</h1>
      <p className="text-lg font-semibold text-slate-600 dark:text-slate-300">{profileData.title}</p>
      <p className="text-sm text-slate-400">{profileData.location} • {profileData.email}</p>
    </div>
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-1">Summary</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{profileData.aboutSummary}</p>
    </section>
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-1">Education</h2>
      {educationData.map((edu) => (<div key={edu.id} className="space-y-1"><h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">{edu.degree}</h3><p className="text-xs text-slate-500 dark:text-slate-400">{edu.institution} — {edu.performance}</p></div>))}
    </section>
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-1">Skills</h2>
      {skillsData.map((cat, i) => (<div key={i}><span className="text-xs font-bold text-slate-700 dark:text-slate-300">{cat.category}: </span><span className="text-xs text-slate-500 dark:text-slate-400">{cat.items.join(', ')}</span></div>))}
    </section>
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-1">Projects</h2>
      {projectsData.map((p) => (<div key={p.id} className="space-y-1"><h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">{p.title}</h3><p className="text-xs text-slate-500 dark:text-slate-400">{p.description}</p></div>))}
    </section>
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-1">Certifications</h2>
      <ul className="space-y-1">{certificationsData.map((c) => (<li key={c.id} className="text-sm text-slate-600 dark:text-slate-400">• {c.title} — {c.issuer}</li>))}</ul>
    </section>
    <div className="text-center pt-4"><button className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm rounded-lg transition-colors shadow-sm">Download Resume PDF</button></div>
  </div>
);
export default Resume;
