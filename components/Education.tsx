import { education, leadership } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-sky-400 font-mono text-sm mb-3 tracking-wider">05. Education & Leadership</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-12">Background</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-[#0f1629] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{edu.degree}</h3>
                {edu.track && <p className="text-sky-400 text-sm font-medium mt-0.5">{edu.track}</p>}
              </div>
              <span className="text-xs font-mono text-slate-500 border border-slate-700 rounded px-2 py-0.5 flex-shrink-0">
                {edu.graduated}
              </span>
            </div>
            <p className="text-slate-500 text-sm mb-3">{edu.school}</p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-mono text-emerald-400 border border-emerald-400/30 rounded px-2 py-1">
                GPA {edu.gpa}
              </span>
              <span className="text-xs font-mono text-slate-500 border border-slate-700 rounded px-2 py-1">
                {edu.honors}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 pt-10">
        <h3 className="text-xl font-semibold text-slate-200 mb-6">Leadership</h3>
        {leadership.map((l, i) => (
          <div key={i} className="bg-[#0f1629] border border-slate-800 rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <h4 className="text-lg font-semibold text-slate-100">{l.title}</h4>
                <p className="text-sky-400 font-medium text-sm">{l.org}</p>
              </div>
              <span className="text-xs font-mono text-slate-500 border border-slate-700 rounded px-2 py-0.5 flex-shrink-0">
                {l.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {l.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-sky-400 mt-1 flex-shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
