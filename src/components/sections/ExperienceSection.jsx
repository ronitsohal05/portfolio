import SectionHero from "../SectionHero.jsx";
import ExperienceItem from "../ui/ExperienceItem.jsx";

export default function ExperienceSection({ items }) {
  return (
    <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
      <SectionHero id="experience" top="12 YEARS OF" ghost="EXPERIENCE" />
      <div className="mt-10">
        {items.map((it) => (
          <ExperienceItem
            key={it.company}
            company={it.company}
            desc={it.desc}
            dates={it.dates}
          />
        ))}
      </div>
    </section>
  );
}