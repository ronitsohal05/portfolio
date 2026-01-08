export default function ToolTile({ icon, name, sub }) {
  return (
    <div className="flex items-center gap-5">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white">
        <img src={icon} alt={name} className="h-9 w-9 object-contain" />
      </div>
      <div>
        <div className="text-3xl font-semibold tracking-tight">{name}</div>
        <div className="mt-1 text-lg text-[var(--muted)]">{sub}</div>
      </div>
    </div>
  );
}