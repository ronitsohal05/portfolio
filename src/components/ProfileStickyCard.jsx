import React from "react";

function Icon({ children }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] text-[var(--accent)]">
      {children}
    </span>
  );
}

export default function ProfileStickyCard() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--card)] text-[var(--cardText)] shadow-[var(--shadow-card)]">
      {/* Decorative dashed path (top-left) */}
      <svg
        className="pointer-events-none absolute -left-10 -top-10 opacity-80"
        width="240"
        height="180"
        viewBox="0 0 240 180"
        fill="none"
      >
        <path
          d="M10 160 C 60 20, 180 20, 230 80"
          stroke="var(--accent)"
          strokeWidth="6"
          strokeDasharray="10 10"
          strokeLinecap="round"
        />
      </svg>

      <div className="p-6">
        {/* Image */}
        <div className="rounded-[var(--radius-inner)] bg-[color:var(--cardText)/0.08] p-4">
          <div className="aspect-[4/5] overflow-hidden rounded-[18px] bg-[color:var(--accent)]">
            {/* Placeholder image */}
            <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-white/90">
              Placeholder
            </div>
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-6 text-center text-4xl font-extrabold tracking-tight">
          Aaabad Ahmed
        </h3>

        {/* Center flame + dashed path */}
        <div className="relative mt-5 flex items-center justify-center">
          <svg
            className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2"
            height="80"
            viewBox="0 0 420 80"
            fill="none"
          >
            <path
              d="M10 70 C 100 20, 160 20, 210 40 C 260 60, 320 60, 410 20"
              stroke="var(--accent)"
              strokeWidth="6"
              strokeDasharray="10 10"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>

          <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] shadow-sm">
            {/* flame-ish icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2c1.2 3.2-1 4.6-1 7 0 1.7 1.3 2.6 2.6 3.8C15 14 16 15.4 16 17.2 16 20 13.8 22 11 22 8.2 22 6 20 6 17.2c0-2.8 2.2-4.4 3.7-5.8C11.2 10.1 12 9 12 7c0-2 0-3.7 0-5z"
                fill="white"
                opacity="0.95"
              />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 px-4 text-center text-lg leading-snug text-[var(--cardMuted)]">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        {/* Social icons */}
        <div className="mt-8 flex items-center justify-center gap-4 pb-2">
          <a href="#" className="transition hover:scale-[1.03]">
            <Icon>
              {/* globe */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M2 12h20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 2c3 3 3 17 0 20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </Icon>
          </a>

          <a href="#" className="transition hover:scale-[1.03]">
            <Icon>
              {/* twitter-ish */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 7.5c.01.2.01.4 0 .6 0 6.2-4.7 10.7-10.7 10.7-2.1 0-4-.6-5.6-1.6 1 .1 2 0 2.9-.3 1-.3 1.9-.9 2.6-1.6-1.9 0-3.4-1.3-4-3 .6.1 1.2.1 1.7-.1-2-.4-3.4-2.2-3.4-4.2.6.3 1.3.5 2 .5-1.2-.8-1.9-2.3-1.2-3.8 2.2 2.7 5.5 4.4 9.2 4.6-.6-2.4 1.2-4.7 3.7-4.7 1.1 0 2.2.5 2.9 1.3.9-.2 1.7-.5 2.4-.9-.3.9-.9 1.7-1.7 2.2.8-.1 1.5-.3 2.2-.6-.5.8-1.2 1.5-2 2Z"
                  fill="currentColor"
                  opacity="0.9"
                />
              </svg>
            </Icon>
          </a>

          <a href="#" className="transition hover:scale-[1.03]">
            <Icon>
              {/* instagram-ish */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M17.5 6.5h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </Icon>
          </a>

          <a href="#" className="transition hover:scale-[1.03]">
            <Icon>
              {/* youtube-ish */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 12s0-3.4-.4-5a2.6 2.6 0 0 0-1.8-1.8C17.2 4.8 12 4.8 12 4.8s-5.2 0-6.8.4A2.6 2.6 0 0 0 3.4 7C3 8.6 3 12 3 12s0 3.4.4 5a2.6 2.6 0 0 0 1.8 1.8c1.6.4 6.8.4 6.8.4s5.2 0 6.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-5 .4-5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M10 15V9l5 3-5 3Z"
                  fill="currentColor"
                />
              </svg>
            </Icon>
          </a>
        </div>
      </div>
    </div>
  );
}
