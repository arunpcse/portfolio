const Input = ({ label, type = 'text', placeholder, value, onChange, error, id, className = '' }) => (
  <div className={`space-y-1 ${className}`}>
    {label && <label htmlFor={id} className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{label}</label>}
    <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}
      className={`w-full border rounded-lg p-2.5 text-sm font-medium outline-none transition-colors bg-slate-50/50 dark:bg-slate-800 dark:text-slate-200 ${error ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 dark:border-slate-700 focus:border-sky-500'}`} />
    {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
  </div>
);
export default Input;
