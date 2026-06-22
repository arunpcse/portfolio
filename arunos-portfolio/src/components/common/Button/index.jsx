const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled = false, type = 'button', className = '' }) => {
  const variants = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600 shadow-sm',
    secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
    ghost: 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
  };
  const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-5 py-2.5 text-sm', lg: 'px-7 py-3 text-base' };
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};
export default Button;
