const TimelineItem = ({ title, subtitle, date, description, isLast = false }) => (
  <div className="relative pl-8 pb-8">
    {!isLast && <div className="absolute left-[7px] top-3 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />}
    <div className="absolute left-0 top-1.5 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-sky-500 rounded-full" />
    <div className="space-y-1">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h3>
        {date && <span className="text-[10px] font-bold text-slate-400">{date}</span>}
      </div>
      {subtitle && <p className="text-xs font-semibold text-sky-600">{subtitle}</p>}
      {description && <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>}
    </div>
  </div>
);
const Timeline = ({ items = [] }) => (
  <div className="space-y-0">
    {items.map((item, i) => <TimelineItem key={i} {...item} isLast={i === items.length - 1} />)}
  </div>
);
export default Timeline;
