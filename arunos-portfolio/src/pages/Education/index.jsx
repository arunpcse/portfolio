import { educationData } from '../../data/education';

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in-up">
      
      {/* Header Segment */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Academic Blueprint</h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          Formal engineering studies, credentials, and real-world industrial training.
        </p>
      </div>

      {/* Structural Timeline Array */}
      <div className="relative border-l-2 border-slate-100 pl-6 ml-2 space-y-10">
        {educationData.map((item) => (
          <div key={item.id} className="relative group">
            
            {/* Timeline Intersection Node Pin */}
            <span className="absolute -left-[31px] top-1.5 bg-white border-2 border-sky-500 rounded-full w-4 h-4 group-hover:bg-sky-500 transition-colors duration-200"></span>
            
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-3">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded uppercase tracking-wide">
                    Engineering Studies
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight pt-1.5">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">{item.institution}</p>
                </div>
                <div className="text-right sm:text-right text-left">
                  <span className="text-xs font-semibold text-slate-400 block">{item.duration}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded mt-1 inline-block">
                    {item.performance}
                  </span>
                </div>
              </div>
              
              <p className="text-xs text-slate-500 leading-relaxed font-normal pt-2 border-t border-slate-50">
                {item.details}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Education;