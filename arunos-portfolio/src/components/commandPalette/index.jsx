import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const filtered = navigationLinks.filter((l) => l.name.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => { if (!isOpen) setQuery(''); }, [isOpen]);
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const handleSelect = (path) => { navigate(path); onClose(); };
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 w-full max-w-md mx-4 overflow-hidden">
        <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a command or search..." className="w-full px-5 py-4 text-sm font-medium bg-transparent border-b border-slate-100 dark:border-slate-800 outline-none text-slate-900 dark:text-white placeholder:text-slate-400" />
        <div className="max-h-64 overflow-y-auto p-2">
          {filtered.length === 0 ? (<p className="text-xs text-slate-400 text-center py-6">No results found</p>) : (
            filtered.map((link) => (<button key={link.path} onClick={() => handleSelect(link.path)} className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-600 rounded-xl transition-colors">{link.name}</button>))
          )}
        </div>
      </div>
    </div>
  );
};
export default CommandPalette;
