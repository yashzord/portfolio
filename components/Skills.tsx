import { skills } from "@/data/resume";

const categoryColors: Record<string, string> = {
  "Languages": "border-violet-500/40 text-violet-400",
  "AI/ML & GenAI": "border-sky-500/40 text-sky-400",
  "MLOps & Evaluation": "border-emerald-500/40 text-emerald-400",
  "Cloud & Infrastructure": "border-amber-500/40 text-amber-400",
  "Databases": "border-rose-500/40 text-rose-400",
  "Certifications": "border-slate-500/40 text-slate-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-sky-400 font-mono text-sm mb-3 tracking-wider">04. Skills</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-12">Technical Toolkit</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-[#0f1629] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors duration-300"
          >
            <h3 className={`text-sm font-semibold font-mono mb-4 ${categoryColors[category]?.split(" ")[1] ?? "text-slate-400"}`}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs font-mono border rounded px-2 py-1 text-slate-400 border-slate-700 bg-slate-800/40`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
