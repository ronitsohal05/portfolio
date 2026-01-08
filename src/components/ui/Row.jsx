export default function Row({ img, title, subtitle, link }) {
  return (
    <a href={link} className="group block">
      <div className="flex items-center justify-between gap-6 py-6">
        <div className="flex items-center gap-6">
          {img ? (
            <img
              src={img}
              alt={title}
              className="h-[88px] w-[88px] rounded-2xl object-cover"
            />
          ) : (
            <div className="h-[88px] w-[88px] rounded-2xl bg-white/10" />
          )}

          <div>
            <div className="text-4xl font-semibold tracking-tight">{title}</div>
            <div className="mt-1 text-lg text-[var(--muted)]">{subtitle}</div>
          </div>
        </div>

        <div className="text-[var(--accent)] text-2xl transition group-hover:translate-x-0.5">
          ↗
        </div>
      </div>

      <div className="h-px w-full bg-white/5" />
    </a>
  );
}