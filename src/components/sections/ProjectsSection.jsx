import SectionHero from "../ui/SectionHero.jsx";
import Row from "../ui/Row.jsx";

export default function ProjectsSection({ projects }) {
  return (
    <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
      <SectionHero id="projects" top="RECENT" ghost="PROJECTS" />
      <div className="mt-10">
        {projects.map((p) => (
          <Row key={p.title} title={p.title} subtitle={p.subtitle} img={p.img} link={p.link} />
        ))}
      </div>
    </section>
  );
}