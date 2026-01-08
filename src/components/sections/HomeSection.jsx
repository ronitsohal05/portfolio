import SectionHero from "../ui/SectionHero.jsx";
import Stat from "../ui/Stat.jsx";
import FeatureCard from "../ui/FeatureCard.jsx";

export default function HomeSection({ stats }) {
  const defaultStats = [
    { value: "10+", label: "PROJECTS BUILT" },
    { value: "95%+", label: "PIPELINE SPEEDUP" },
    { value: "3+", label: "PRODUCTION SYSTEMS" },
  ];

  const s = stats?.length ? stats : defaultStats;

  return (
    <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
      <SectionHero
        id="home"
        top="SOFTWARE"
        ghost="ENGINEER"
        desc="I design and build real systems — from scalable backends and real-time pipelines to applied machine learning and multimodal AI. Focused on learning by shipping and measuring impact."
      />

      {/* Stats */}
      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {s.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      {/* Feature Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {/* Experience */}
        <FeatureCard
          tone="orange"
          title={
            <>
              EXPERIENCE
              <br />
              RESEARCH · TEACHING · LEADERSHIP
            </>
          }
          href="#experience"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          }
        />

        {/* Projects */}
        <FeatureCard
          tone="lime"
          title={
            <>
              PROJECTS
              <br />
              SYSTEMS · AI · INFRASTRUCTURE
            </>
          }
          href="#projects"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="7" cy="12" r="1.5" fill="black" />
              <circle cx="12" cy="12" r="1.5" fill="black" />
              <circle cx="17" cy="12" r="1.5" fill="black" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
