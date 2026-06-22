const profiles = [
  { name: 'LeetCode', url: 'https://leetcode.com', description: 'Algorithmic problem solving' },
  { name: 'HackerRank', url: 'https://hackerrank.com', description: 'Coding challenges & certifications' },
  { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org', description: 'Data structures & algorithms' },
];
const CodingProfiles = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Coding Profiles</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {profiles.map((p) => (
        <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group text-center">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 transition-colors">{p.name}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{p.description}</p>
        </a>
      ))}
    </div>
  </section>
);
export default CodingProfiles;
