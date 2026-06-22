import { skillsData } from '../../data/skills';
const SkillsSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skillsData.map((cat, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">{cat.category}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((skill, j) => (
              <span key={j} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-md border border-slate-200/60 dark:border-slate-700">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default SkillsSection;
