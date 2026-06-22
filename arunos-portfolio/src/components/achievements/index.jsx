import { achievementsData } from '../../data/achievements';
const AchievementsSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Achievements</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievementsData.map((item) => (
        <div key={item.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm group">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1 rounded-md uppercase tracking-wider">{item.tag}</span>
            <span className="text-xs font-bold text-slate-400">{item.date}</span>
          </div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1 group-hover:text-amber-600 transition-colors">{item.title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default AchievementsSection;
