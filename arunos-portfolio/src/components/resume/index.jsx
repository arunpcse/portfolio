import { profileData } from '../../data/profile';
const ResumeSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Resume</h2>
    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm text-center space-y-4">
      <div className="text-4xl">📄</div>
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">{profileData.name}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{profileData.title}</p>
      <button className="mt-4 px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">Download Resume PDF</button>
    </div>
  </section>
);
export default ResumeSection;
