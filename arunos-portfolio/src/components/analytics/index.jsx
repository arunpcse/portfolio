import { profileData } from '../../data/profile';
const AnalyticsSection = () => (
  <section>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {profileData.statistics.map((stat, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm text-center group hover:border-sky-200 dark:hover:border-sky-800 transition-colors">
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">{stat.value}</p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);
export default AnalyticsSection;
