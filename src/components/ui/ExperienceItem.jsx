export default function ExperienceItem({ company, desc, dates }) {
  return (
    <a href="#" className="group block">
      <div className="flex items-start justify-between gap-6 py-8">
        <div className="max-w-[640px]">
          <div className="text-4xl font-semibold tracking-tight">{company}</div>
          <p className="mt-3 text-lg leading-relaxed text-[var(--muted)]">
            {desc}
          </p>
          <div className="mt-6 text-base text-[var(--muted)]">{dates}</div>
        </div>

        <div className="pt-2 text-[var(--accent)] text-2xl transition group-hover:translate-x-0.5">
          ↗
        </div>
      </div>

      <div className="h-px w-full bg-white/5" />
    </a>
  );
}