import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-sky-400 font-mono text-sm mb-3 tracking-wider">02. Experience</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-12">Where I&apos;ve Worked</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-1" />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <div key={i} className="pl-10 relative">
              <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400 ring-4 ring-[#0a0f1e]" />
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{job.title}</h3>
                  <p className="text-sky-400 font-medium">
                    {job.company}
                    {job.department ? ` · ${job.department}` : ""}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono text-slate-500 border border-slate-700 rounded px-2 py-0.5">
                    {job.period}
                  </span>
                  <p className="text-sm text-slate-600 mt-1">{job.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
