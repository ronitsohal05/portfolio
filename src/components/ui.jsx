import React from "react";

export function Card({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-[var(--radius-card)] bg-[var(--surface)] ring-1 ring-[var(--border)] shadow-[var(--shadow-card)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function SubCard({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-[calc(var(--radius-card)-6px)] bg-[var(--surface-2)] ring-1 ring-[var(--border)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function Kicker({ children }) {
  return (
    <div className="text-xs font-semibold tracking-[0.25em] text-[var(--muted)]">
      {children}
    </div>
  );
}

export function H1({ children }) {
  return (
    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
      {children}
    </h1>
  );
}

export function SectionTitle({ kicker, title }) {
  return (
    <div className="mb-5">
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      {title ? (
        <h2 className="mt-2 whitespace-pre-line text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
