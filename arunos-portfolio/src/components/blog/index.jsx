import { blogsData } from '../../data/blogs';
const BlogSection = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Latest Posts</h2>
    <div className="space-y-4">
      {blogsData.map((post) => (
        <article key={post.id} className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="flex items-center gap-3 text-xs font-semibold mb-2">
            <span className="text-sky-600 bg-sky-50 dark:bg-sky-900/30 px-2 py-0.5 rounded">{post.category}</span>
            <span className="text-slate-400">{post.date}</span>
            <span className="text-slate-400">{post.readTime}</span>
          </div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-sky-500 transition-colors">{post.title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{post.summary}</p>
        </article>
      ))}
    </div>
  </section>
);
export default BlogSection;
