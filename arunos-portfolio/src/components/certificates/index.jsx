import { certificationsData } from '../../data/certifications';
const CertificatesSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certificationsData.map((cert) => (
        <div key={cert.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-500 block mb-1">{cert.issuer}</span>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">{cert.title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{cert.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default CertificatesSection;
