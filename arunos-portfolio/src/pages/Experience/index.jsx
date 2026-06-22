const Experience = () => (
  <div className="max-w-4xl mx-auto py-16 px-4 space-y-12 animate-fade-in-up">
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Professional Experience</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Industry exposure, training, and practical development milestones.</p>
    </div>
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
          <div>
            <span className="text-[10px] font-bold text-sky-600 bg-sky-50 dark:bg-sky-900/30 px-2 py-0.5 rounded uppercase tracking-wide">Industrial Training</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">Full Stack Development — Implant Training</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Kongu Engineering College / Industry Partner</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-md">Completed</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Gained hands-on professional experience in end-to-end web application architecture, RESTful API design, front-end component frameworks, and database schema modeling using MySQL.</p>
      </div>
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
          <div>
            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded uppercase tracking-wide">Design Training</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">UI/UX Design — Professional Certification</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Industry Training Program</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-md">Completed</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Comprehensive training in user research, wireframing, interactive prototyping, and building accessible user interfaces following modern design system principles.</p>
      </div>
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 border border-sky-100 dark:border-sky-800 p-6 rounded-2xl text-center space-y-3">
        <div className="text-3xl">🚀</div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Actively Seeking Full-Time Roles</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">With a strong academic foundation (8.77 CGPA) and practical project experience, I am looking for software development opportunities.</p>
      </div>
    </div>
  </div>
);
export default Experience;
