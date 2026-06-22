import { achievementsData } from '../../data/achievements';

const Achievements = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in-up">
      
      {/* Header Segment */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Milestones & Honors</h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          A showcase of academic accomplishments, project recognitions, and technical highlights.
        </p>
      </div>

      {/* Grid Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {item.tag}
                </span>
                <span className="text-xs font-bold text-slate-400">{item.date}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-amber-600 transition-colors duration-200">
                {item.title}
              </h3>
              
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {/* Decorative Medal Element */}
            <div className="absolute right-3 bottom-3 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 text-slate-900 transition-all duration-300 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Achievements;