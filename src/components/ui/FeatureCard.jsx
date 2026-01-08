export default function FeatureCard({ tone = "orange", title, icon, href }) {
  const isOrange = tone === "orange";
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper href={href} className="block">
      <div
        className={[
          "group relative overflow-hidden rounded-2xl p-6",
          isOrange ? "bg-[#E67645]" : "bg-[#D9FF6A] text-black",
        ].join(" ")}
      >
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/10">
            {icon}
          </div>

          {/* Arrow (keeps your design, adds hover polish) */}
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-black/30 transition-transform group-hover:translate-x-1">
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
    </Wrapper>
  );
}
