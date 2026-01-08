export default function Stat({ value, label }) {
  return (
    <div>
      <div className="text-5xl font-semibold tracking-tight">{value}</div>
      <div className="mt-3 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}