import { personal } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm font-mono">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="text-slate-700 text-xs font-mono">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
