import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../../../data/navigation';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-100 dark:border-slate-800 p-6 flex flex-col animate-fade-in">
        <button onClick={onClose} className="self-end p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </button>
        <nav className="flex flex-col space-y-1 mt-6">
          {navigationLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={onClose}
              className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${location.pathname === link.path ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default MobileMenu;
