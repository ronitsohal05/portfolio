import React from "react";
import { motion } from "framer-motion";
import TopNav from "./components/TopNav.jsx";
import ProfileStickyCard from "./components/ProfileStickyCard.jsx";
import RightSections from "./components/sections/RightSections.jsx";

function useFitScale({ topOffset = 160, minScale = 0.78 } = {}) {
  const wrapRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);

  React.useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const compute = () => {
      // measure the *content* height at scale 1
      const rect = el.getBoundingClientRect();
      const currentScale = scale || 1;

      // undo current scaling to estimate natural height
      const naturalHeight = rect.height / currentScale;

      const available = window.innerHeight - topOffset;
      const next = Math.min(1, available / naturalHeight);

      setScale(Math.max(minScale, next));
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(el);

    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { wrapRef, scale };
}

export default function App() {
  const { wrapRef, scale } = useFitScale({ topOffset: 160, minScale: 0.78 });

  return (
    <div className="fixed inset-0 bg-[var(--bg)] text-[var(--text)]">
      <TopNav />

      <div className="h-full">
        <div className="mx-auto h-full max-w-[1180px] px-6 pt-28">
          <div className="grid h-full grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-16 py-10">
            {/* LEFT RAIL */}
            <aside className="hidden lg:flex justify-center items-start">
              <motion.div
                className="w-[360px] origin-top"
                style={{ scale }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* measure this wrapper */}
                <div ref={wrapRef}>
                  <ProfileStickyCard />
                </div>
              </motion.div>
            </aside>

            {/* RIGHT SCROLLER */}
            <main className="h-full min-h-0">
              <div
                id="right-scroll"
                className="h-full min-h-0 overflow-y-auto pr-3 [scrollbar-gutter:stable] snap-y snap-mandatory scroll-smooth"
              >
                <div className="max-w-[760px]">
                  <RightSections />
                </div>
                <div className="h-16" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
