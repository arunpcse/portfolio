import { blogsData } from '../../data/blogs';

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in-up">
      
      {/* Header Segment */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Technical Publications</h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          Writing about software patterns, hardware logic design, and full-stack architecture deep dives.
        </p>
      </div>

      {/* Row Article Stack Layout */}
      <div className="space-y-6">
        {blogsData.map((post) => (
          <article 
            key={post.id} 
            className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-slate-400">{post.date}</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-400">{post.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-sky-500 transition-colors duration-200">
                {post.title}
              </h3>
              
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {post.summary}
              </p>
            </div>

            {/* Inline Action Indicator */}
            <div className="text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-200 self-end sm:self-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};

export default Blog;