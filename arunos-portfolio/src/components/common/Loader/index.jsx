const Loader = ({ size = 'md', text = '' }) => {
  const sizes = { sm: 'w-5 h-5 border-2', md: 'w-8 h-8 border-[3px]', lg: 'w-12 h-12 border-4' };
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12">
      <div className={`${sizes[size]} border-slate-200 dark:border-slate-700 border-t-sky-500 rounded-full animate-spin`} />
      {text && <p className="text-xs font-semibold text-slate-400 tracking-wide animate-pulse">{text}</p>}
    </div>
  );
};
export default Loader;
