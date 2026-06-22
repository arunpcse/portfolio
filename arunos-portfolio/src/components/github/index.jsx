import { useGitHub } from '../../hooks/useGitHub';
const GitHubSection = ({ username = 'arun-p' }) => {
  const { profile, repos, loading, error } = useGitHub(username);
  if (loading) return <div className="text-center py-8 text-sm text-slate-400 animate-pulse">Syncing GitHub data...</div>;
  if (error || !profile) return <div className="text-center py-8 text-sm text-slate-400">Could not load GitHub data.</div>;
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">GitHub Activity</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.slice(0, 4).map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
            <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">{repo.name}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{repo.description || 'No description'}</p>
            <div className="flex gap-3 mt-3 text-xs text-slate-400"><span>{repo.language || 'N/A'}</span><span>⭐ {repo.stargazers_count}</span></div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default GitHubSection;
