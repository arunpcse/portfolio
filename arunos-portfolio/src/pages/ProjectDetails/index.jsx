import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import PageIntro from "../../components/common/PageIntro/PageIntro";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id);
  if (!project) return (
    <div className="max-w-3xl mx-auto py-20 text-center space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project Not Found</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400">The project you are looking for does not exist.</p>
      <Link to="/projects" className="inline-block text-sm text-sky-500 hover:text-sky-600 font-semibold">← Back to Projects</Link>
    </div>
  );
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 space-y-8 animate-fade-in-up">
      <Link to="/projects" className="text-sm text-sky-500 hover:text-sky-600 font-semibold">← Back to Projects</Link>
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-6">
        <div>
          <span className="text-[10px] font-bold text-sky-600 bg-sky-50 dark:bg-sky-900/30 px-2.5 py-1 rounded-md uppercase tracking-wider">{project.category}</span>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">{project.title}</h1>
        </div>
        <PageIntro title="Project Details" />
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (<span key={i} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700 rounded-md">{tag}</span>))}
        </div>
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors">View on GitHub →</a>}
      </div>
    </div>
  );
};
export default ProjectDetails;
