import React from "react";

export default function SectionHero({ id, top, ghost, desc }) {
  return (
    <header id={id} className="scroll-mt-[9.5rem]">
      {/* Reserve vertical space so content never overlaps */}
      <div className="relative pb-8 sm:pb-10">
        {/* TOP word */}
        <div className="relative z-10">
          <h2 className="text-[56px] font-extrabold uppercase leading-[0.92] tracking-tight sm:text-[84px]">
            {top}
          </h2>
        </div>

        {/* GHOST word */}
        <div
          className="
            pointer-events-none select-none
            absolute left-0
            top-[52px] sm:top-[78px]
            z-0
            text-[64px] font-extrabold uppercase leading-[0.9]
            text-[color:var(--ghost)]
            sm:text-[96px]
          "
          aria-hidden="true"
        >
          {ghost}
        </div>

        {/* Spacer that guarantees room for ghost line */}
        <div className="h-10 sm:h-14" />
      </div>

      {desc ? (
        <p className="mt-2 max-w-xl text-base leading-relaxed text-[var(--muted)]">
          {desc}
        </p>
      ) : null}
    </header>
  );
}
