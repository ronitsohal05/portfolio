import SectionHero from "../SectionHero.jsx";
import ToolTile from "../ui/ToolTile.jsx";

export default function ToolsSection({ tools }) {
  return (
    <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
      <SectionHero id="tools" top="PREMIUM" ghost="TOOLS" />
      <div className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2">
        {tools.map((t) => (
          <ToolTile key={t.name} icon={t.icon} name={t.name} sub={t.sub} />
        ))}
      </div>
    </section>
  );
}