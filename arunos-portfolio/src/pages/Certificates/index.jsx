import { certificationsData } from '../../data/certifications';

const Certificates = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in-up">
      
      {/* Header Segment */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Verified Credentials</h1>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          Professional training courses, specializations, and industry validations.
        </p>
      </div>

      {/* Grid Layout Setup */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert) => (
          <div 
            key={cert.id} 
            className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Decorative Ribbon Icon Frame */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {cert.date}
                </span>
              </div>

              {/* Text Matrix */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug group-hover:text-sky-600 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {cert.issuer}
                </p>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-normal pt-2 border-t border-slate-50">
                {cert.description}
              </p>
            </div>

            {/* Bottom Accent Node */}
            <div className="pt-4 mt-4 flex items-center text-[11px] font-bold text-slate-400 group-hover:text-sky-500 transition-colors duration-200 gap-1">
              <span>Training Module Fully Verified</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Certificates;