import { motion } from "framer-motion";
import SectionHero from "../ui/SectionHero.jsx";
import ExperienceItem from "../ui/ExperienceItem.jsx";

export default function ExperienceSection({ items }) {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="snap-start pb-10 min-h-[calc(100vh-7rem)] flex flex-col justify-start overflow-hidden">
      {/* Hero */}
      <motion.div
        variants={itemUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <SectionHero id="experience" top="WORK" ghost="EXPERIENCE" />
      </motion.div>

      {/* Items */}
      <motion.div
        className="mt-10"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {items.map((it) => (
          <motion.div
            key={it.company}
            variants={itemUp}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <ExperienceItem
              company={it.company}
              desc={it.desc}
              dates={it.dates}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
