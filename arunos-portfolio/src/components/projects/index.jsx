import { projectsData } from '../../data/projects';
const ProjectsSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData.map((p) => (
        <div key={p.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 transition-colors">{p.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{p.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((tag, i) => (<span key={i} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700 rounded-md">{tag}</span>))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default ProjectsSection;
