import { educationData } from '../../data/education';
const EducationSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
    {educationData.map((edu) => (
      <div key={edu.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm border-l-4 border-l-sky-500">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
        <p className="text-slate-600 dark:text-slate-400 font-medium">{edu.institution}</p>
        <p className="text-sm font-semibold text-sky-600 mt-1">{edu.performance}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{edu.details}</p>
      </div>
    ))}
  </section>
);
export default EducationSection;
