import { useState } from 'react';
import PageIntro from '../common/PageIntro';
import { validateContactForm } from '../../utils/validation';
const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); setErrors({ ...errors, [e.target.name]: '' }); };
  const handleSubmit = (e) => { e.preventDefault(); const { isValid, errors: fe } = validateContactForm(form); if (!isValid) { setErrors(fe); return; } setSubmitted(true); setForm({ name: '', email: '', message: '' }); };
  if (submitted) return (<div className="text-center py-12 space-y-3"><div className="text-3xl">✓</div><h3 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent</h3><p className="text-sm text-slate-500">Thank you for reaching out.</p><button onClick={() => setSubmitted(false)} className="text-sm text-sky-500 hover:text-sky-600 font-semibold">Send another</button></div>);
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Name</label><input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 dark:text-slate-200 rounded-lg p-2.5 text-sm outline-none focus:border-sky-500 transition-colors font-medium" />{errors.name && <p className="text-xs text-rose-500">{errors.name}</p>}</div>
        <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</label><input name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 dark:text-slate-200 rounded-lg p-2.5 text-sm outline-none focus:border-sky-500 transition-colors font-medium" />{errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}</div>
      </div>
      <PageIntro title="Contact" />
      <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Message</label><textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Type your message..." className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 dark:text-slate-200 rounded-lg p-2.5 text-sm outline-none focus:border-sky-500 transition-colors resize-none font-medium" />{errors.message && <p className="text-xs text-rose-500">{errors.message}</p>}</div>
      <button type="submit" className="w-full bg-slate-950 dark:bg-sky-600 hover:bg-sky-600 dark:hover:bg-sky-500 text-white font-bold py-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer">Send Message</button>
    </form>
  );
};
export default ContactForm;
