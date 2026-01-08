import React from "react";
import SectionHero from "./SectionHero.jsx";

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-5xl font-semibold tracking-tight">{value}</div>
      <div className="mt-3 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}

function FeatureCard({ tone = "orange", title, icon }) {
  const isOrange = tone === "orange";
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl p-6",
        isOrange ? "bg-[#E67645]" : "bg-[#D9FF6A] text-black",
      ].join(" ")}
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/10">
          {icon}
        </div>
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-black/30">
          <span className="text-xl">→</span>
        </div>
      </div>

      <div className="relative z-10 mt-10 text-2xl font-extrabold uppercase leading-snug tracking-tight">
        {title}
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 600 240" fill="none">
          <path
            d={
              isOrange
                ? "M20 210 C120 160, 170 70, 320 80 C430 90, 500 160, 580 60"
                : "M20 200 L160 40 L260 160 L380 30 L520 180 L580 60"
            }
            stroke={isOrange ? "#000" : "#006d5b"}
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Row({ img, title, subtitle }) {
  return (
    <a href="#" className="group block">
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

function ExperienceItem({ company, desc, dates }) {
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

function ToolTile({ icon, name, sub }) {
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

export default function RightSections() {
  const projectImgs = {
    NajmAI: "https://picsum.photos/seed/najmai/160/160",
    Damas: "https://picsum.photos/seed/damas/160/160",
    Faseelh: "https://picsum.photos/seed/faseelh/160/160",
  };

  return (
    // pt-0 because the RIGHT SCROLLER already has pt-28.
    <div className="space-y-24">
      {/* HOME */}
      <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
        <SectionHero
          id="home"
          top="SOFTWARE"
          ghost="ENGINEER"
          desc="Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <Stat value="+12" label="YEARS OF EXPERIENCE" />
          <Stat value="+46" label="PROJECTS COMPLETED" />
          <Stat value="+20" label="WORLDWIDE CLIENTS" />
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

      {/* PROJECTS */}
      <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
        <SectionHero id="projects" top="RECENT" ghost="PROJECTS" />
        <div className="mt-10">
          <Row
            title="NajmAI"
            subtitle="SaaS Framer Template"
            img={projectImgs.NajmAI}
          />
          <Row title="Damas" subtitle="Free Framer Template" img={projectImgs.Damas} />
          <Row
            title="Faseelh"
            subtitle="Free Framer Template"
            img={projectImgs.Faseelh}
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
        <SectionHero id="experience" top="12 YEARS OF" ghost="EXPERIENCE" />
        <div className="mt-10">
          <ExperienceItem
            company="PixelForge Studios"
            desc="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
            dates="Jan 2020 – Present"
          />
          <ExperienceItem
            company="BlueWave Innovators"
            desc="Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers."
            dates="Jun 2017 – Dec 2019"
          />
          <ExperienceItem
            company="TrendCraft Solutions"
            desc="Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal."
            dates="Mar 2015 – May 2017"
          />
        </div>
      </section>

      {/* TOOLS */}
      <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
        <SectionHero id="tools" top="PREMIUM" ghost="TOOLS" />
        <div className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2">
          <ToolTile
            icon="https://upload.wikimedia.org/wikipedia/commons/5/5a/Framer-logo.svg"
            name="Framer"
            sub="Website Builder"
          />
          <ToolTile
            icon="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            name="Figma"
            sub="Design Tool"
          />
          <ToolTile
            icon="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
            name="ChatGPT"
            sub="AI Assistant"
          />
          <ToolTile
            icon="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            name="Nextjs"
            sub="React framework"
          />
        </div>
      </section>
    </div>
  );
}
