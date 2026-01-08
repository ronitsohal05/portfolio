import { motion } from "framer-motion";
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

  const section = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="home"
      variants={section}
      initial="hidden"
      animate="show"
      className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden"
    >
      {/* Hero */}
      <motion.div variants={itemUp}>
        <SectionHero
          id="home"
          top="SOFTWARE"
          ghost="ENGINEER"
          desc="I design and build real systems — from scalable backends and real-time pipelines to applied machine learning and multimodal AI. Focused on learning by shipping and measuring impact."
        />
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mt-12 grid gap-10 sm:grid-cols-3"
      >
        {s.map((stat) => (
          <motion.div key={stat.label} variants={itemUp}>
            <Stat value={stat.value} label={stat.label} />
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mt-14 grid gap-6 sm:grid-cols-2"
      >
        <motion.div
          variants={itemUp}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
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
        </motion.div>

        <motion.div
          variants={itemUp}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
