import { personal } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sky-400 font-mono text-sm mb-3 tracking-wider">01. About</p>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">A bit about me</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a Computer Science graduate (MS + BS, Binghamton University) specializing in AI/ML engineering and
              production system design. My work lives at the intersection of large language models, agentic systems, and
              real-world infrastructure.
            </p>
            <p>
              Currently building a production agentic AI platform with 49+ live business tools and a GRC compliance
              data pipeline serving regulatory frameworks like CMMC, FedRAMP, and HIPAA — both at production scale
              with full MLOps observability.
            </p>
            <p>
              Outside of engineering, I&apos;m a competitive chess player, an avid music listener, and based in{" "}
              <span className="text-slate-300">{personal.location}</span>, targeting roles in the Princeton/Mercer County
              area and remote/hybrid opportunities.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[personal.email, personal.phone, personal.location].map((item) => (
              <span
                key={item}
                className="text-xs font-mono text-slate-500 border border-slate-700 rounded px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-xl overflow-hidden border-2 border-slate-700 relative z-10">
              <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <span className="text-6xl font-bold text-slate-500">YB</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-64 h-64 rounded-xl border border-sky-400/30 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
