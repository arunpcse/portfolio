const Card = ({ children, hover = true, className = '' }) => (
  <div className={`bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm ${hover ? 'hover:shadow-md hover:-translate-y-1 hover:border-sky-200/60 transition-all duration-300' : ''} ${className}`}>
    {children}
  </div>
);
export default Card;
