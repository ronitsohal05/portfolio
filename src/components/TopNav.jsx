import React, { useMemo, useState, useEffect } from "react";

function scrollRightPaneTo(id) {
  const scroller = document.getElementById("right-scroll");
  const target = document.getElementById(id);
  if (!scroller || !target) return;

  const top =
    target.getBoundingClientRect().top -
    scroller.getBoundingClientRect().top +
    scroller.scrollTop;

  scroller.scrollTo({ top: top - 24, behavior: "smooth" });
}

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const scroller = document.getElementById("right-scroll");
    if (!scroller) return;

    const onScroll = () => {
      const y = scroller.scrollTop + 152; // matches scroll-mt-[9.5rem] (9.5 * 16px)
      let current = active;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActive(current);
    };

    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join("|")]);

  return active;
}

/** Simple inline icons (no deps) */
const Icons = {
  home: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  folder: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  briefcase: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 13h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tool: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 7a6 6 0 0 1-8.6 5.4L7 17.8a2 2 0 1 1-2.8-2.8l5.4-5.4A6 6 0 0 1 17 3l-3 3 4 4 3-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pencil: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 20h9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function TopNav() {
  const items = useMemo(
    () => [
      { id: "home", label: "Home", icon: Icons.home },
      { id: "projects", label: "Projects", icon: Icons.folder },
      { id: "experience", label: "Experience", icon: Icons.briefcase },
      { id: "tools", label: "Tools", icon: Icons.tool },
    ],
    []
  );

  const active = useActiveSection(["home", "projects", "experience", "tools"]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center">
      <div
        className="
          pointer-events-auto
          flex items-center gap-6
          rounded-[18px]
          px-6 py-2.5
          bg-[rgba(18,18,18,0.55)]
          backdrop-blur-xl
          ring-1 ring-white/10
          shadow-[0_18px_55px_rgba(0,0,0,0.55)]
        "
      >
        {items.map((it, idx) => {
          const Icon = it.icon;
          const isActive = it.id === active && idx < 4;
          return (
            <button
              key={`${it.label}-${idx}`}
              onClick={() => (it.action ? it.action() : scrollRightPaneTo(it.id))}
              className={[
                "relative grid place-items-center",
                "h-9 w-9 rounded-[12px]",
                "transition",
                isActive ? "text-white" : "text-white/80 hover:text-white",
              ].join(" ")}
              aria-label={it.label}
              title={it.label}
            >
              <Icon className="h-[22px] w-[22px]" />
              {isActive ? (
                <span className="pointer-events-none absolute -bottom-2 h-[3px] w-7 rounded-full bg-white/60" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );

}
