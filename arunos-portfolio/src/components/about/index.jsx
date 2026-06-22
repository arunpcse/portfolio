import { profileData } from '../../data/profile';
const AboutSection = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About Me</h2>
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{profileData.aboutSummary}</p>
    </div>
  </section>
);
export default AboutSection;
