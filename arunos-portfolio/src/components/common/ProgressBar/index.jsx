const ProgressBar = ({ value = 0, label = '', showPercent = true, className = '' }) => {
  const v = Math.min(Math.max(value, 0), 100);
  return (
    <div className={`space-y-1.5 ${className}`}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className="text-slate-600 dark:text-slate-400">{label}</span>
          {showPercent && <span className="text-slate-400">{v}%</span>}
        </div>
      )}
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transition-all duration-700 ease-out" style={{ width: `${v}%` }} />
      </div>
    </div>
  );
};
export default ProgressBar;
