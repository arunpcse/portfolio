import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-md mx-auto py-24 px-4 text-center space-y-6 animate-fade-in-up">
      <div className="space-y-2">
        <span className="text-5xl font-black text-sky-500 tracking-tight block">404</span>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Route Unresolved</h3>
        <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto">
          The routing index string or address path you requested does not exist on this portfolio tree.
        </p>
      </div>

      <div>
        <Link 
          to="/" 
          className="inline-block px-5 py-2.5 bg-slate-950 hover:bg-sky-600 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;