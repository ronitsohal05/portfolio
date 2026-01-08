import SectionHero from "../SectionHero.jsx";
import Stat from "../ui/Stat.jsx";
import FeatureCard from "../ui/FeatureCard.jsx";

export default function HomeSection({ stats }) {
  return (
    <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
      <SectionHero
        id="home"
        top="SOFTWARE"
        ghost="ENGINEER"
        desc="Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
      />

      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <FeatureCard
          tone="orange"
          title={
            <>
              DYNAMIC ANIMATION,
              <br />
              MOTION DESIGN
            </>
          }
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l8 4-8 4-8-4 8-4Z"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M4 11l8 4 8-4" stroke="white" strokeWidth="2" />
              <path d="M4 15l8 4 8-4" stroke="white" strokeWidth="2" />
            </svg>
          }
        />

        <FeatureCard
          tone="lime"
          title={
            <>
              FRAMER, FIGMA,
              <br />
              WORDPRESS, REACTJS
            </>
          }
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect
                x="5"
                y="6"
                width="14"
                height="12"
                rx="2"
                stroke="black"
                strokeWidth="2"
              />
              <path d="M5 10h14" stroke="black" strokeWidth="2" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
