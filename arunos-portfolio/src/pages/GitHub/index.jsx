import { useGitHub } from '../../hooks/useGitHub';
import { motion } from "framer-motion";
import useAutoPageScroll from "../../hooks/useAutoPageScroll";
const GitHub = () => {
  useAutoPageScroll("/contact");
  // Pass your specific GitHub handle string here as the tracking target
  const { profile, repos, loading, error } = useGitHub('arun-p');

  // 1. API Fetching / Polling State
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-24 px-4 text-center text-sm font-semibold text-slate-400 animate-pulse tracking-wide">
        Connecting to GitHub REST API matrix...
      </div>
    );
  }

  // 2. Exception / Rate Limit Catch State
  if (error || !profile) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center space-y-4">
        <div className="inline-flex p-3 bg-amber-50 text-amber-600 rounded-xl border border-amber-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-base font-bold text-slate-800">API Connection Offline</h3>
        <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
          Could not sync live repository streams. Verify your internet configuration or profile identifier parameters.
        </p>
      </div>
    );
  }

  // 3. Complete Data Render State
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 space-y-12 animate-fade-in-up">
      
      {/* Header Info Banner */}
      <div>
        <h2 className="text-3xl font-bold text-slate-950 inline-block border-b-2 border-sky-500 pb-2">
          Code Repository Monitor
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Real-time integration displaying structural commits and live software branches.
        </p>
      </div>

      {/* Dynamic Profile Profile Header Card */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-xs flex flex-col sm:flex-row items-center gap-6">
        <img 
          src={profile.avatar_url} 
          alt="GitHub Profile Avatar" 
          className="w-16 h-16 rounded-full border border-slate-100 bg-slate-50"
        />
        <div className="text-center sm:text-left space-y-1">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">{profile.name || profile.login}</h3>
          <p className="text-xs font-semibold text-sky-600">@{profile.login}</p>
          {profile.bio && <p className="text-slate-600 text-xs max-w-2xl pt-1 leading-relaxed">{profile.bio}</p>}
        </div>
      </div>
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ minHeight: "100vh" }}
    >
    </motion.div>
      {/* Grid Canvas: Public Repository Loop */}
      <div className="space-y-6">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
          Recent Code Depositories ({repos.length})
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <a 
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-xs hover:shadow-md hover:border-sky-200/60 transform hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors text-base tracking-tight">
                  {repo.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {repo.description || 'No description provided for this software repository architectural framework.'}
                </p>
              </div>
              
              {/* Repo Metadata Row */}
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 pt-4 mt-4 border-t border-slate-50">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span className="text-slate-600 font-medium">{repo.language || 'JavaScript'}</span>
                </span>
                <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
                <span className="flex items-center gap-1"> Fork: {repo.forks_count}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default GitHub;