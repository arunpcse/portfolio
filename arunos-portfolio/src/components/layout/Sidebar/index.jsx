import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../../../data/navigation';

const Sidebar = ({ className = '' }) => {
  const location = useLocation();
  return (
    <aside className={`hidden lg:flex flex-col w-56 border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-1 ${className}`}>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Navigation</p>
      {navigationLinks.map((link) => (
        <Link key={link.path} to={link.path}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
          {link.name}
        </Link>
      ))}
    </aside>
  );
};
export default Sidebar;
