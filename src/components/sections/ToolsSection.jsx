import { motion } from "framer-motion";
import SectionHero from "../ui/SectionHero.jsx";
import ToolTile from "../ui/ToolTile.jsx";

export default function ToolsSection({ tools }) {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
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
        <SectionHero id="tools" top="TECH" ghost="STACK" />
      </motion.div>

      {/* Tools grid */}
      <motion.div
        className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {tools.map((t) => (
          <motion.div
            key={t.name}
            variants={itemUp}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <ToolTile icon={t.icon} name={t.name} sub={t.sub} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
