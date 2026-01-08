import { motion } from "framer-motion";
import SectionHero from "../ui/SectionHero.jsx";
import Row from "../ui/Row.jsx";

export default function ProjectsSection({ projects }) {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
      <motion.div
        variants={itemUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <SectionHero id="projects" top="RECENT" ghost="PROJECTS" />
      </motion.div>

      <motion.div
        className="mt-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={itemUp}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <Row title={p.title} subtitle={p.subtitle} img={p.img} link={p.link} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
