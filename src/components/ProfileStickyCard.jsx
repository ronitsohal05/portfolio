import { Github, Linkedin, Instagram, Mail } from "lucide-react";

function SocialIconButton({ href, label, children, external = true }) {
  const common =
    "group inline-flex h-11 w-11 items-center justify-center rounded-[14px] " +
    "bg-[color:var(--cardText)/0.06] ring-1 ring-[color:var(--cardText)/0.10] " +
    "transition hover:-translate-y-[1px] hover:bg-[color:var(--cardText)/0.09] " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]";

  if (href?.startsWith("mailto:")) external = false;

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={common}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="text-[var(--accent)] transition-transform group-hover:scale-[1.06]">
        {children}
      </span>
    </a>
  );
}

export default function ProfileStickyCard({
  name = "Ronit Sohal",
  subtitle = "Computer Science & Applied Math student at Johns Hopkins University",
  imageSrc = "/pictures/cropped_card_picture.jpg",
  links = {
    github: "https://github.com/ronitsohal05",
    linkedin: "https://www.linkedin.com/in/ronit-sohal-b13857258/",
    instagram: "https://www.instagram.com/ronimacaroni05/",
    email: "mailto:sohalronit1023@gmail.com",
  },
}) {
  return (
    <div
      style={{
        "--accent": "#60A5FA",
        "--accent2": "#34D399",
      }}
      className={[
        "relative overflow-hidden rounded-[var(--radius-card)]",
        "bg-[var(--card)] text-[var(--cardText)] shadow-[var(--shadow-card)]",
        "ring-1 ring-[color:var(--cardText)/0.08]",
        "transition-transform hover:-translate-y-[2px]",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-44 w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.10] blur-3xl" />
        <div className="absolute -bottom-28 left-1/2 h-44 w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent2)] opacity-[0.08] blur-3xl" />
      </div>

      <svg
        className="pointer-events-none absolute -left-12 -top-12 opacity-50"
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
        <div className="rounded-[var(--radius-inner)] bg-[color:var(--cardText)/0.05] p-4 ring-1 ring-[color:var(--cardText)/0.08]">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[color:var(--cardText)/0.06]">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={`${name} portrait`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-[color:var(--cardText)/0.70]">
                Add imageSrc
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        <h3 className="mt-6 text-center text-4xl font-extrabold tracking-tight">
          {name}
        </h3>

        <div className="relative mt-5 flex items-center justify-center">
          <svg
            className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2 opacity-70"
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
            />
          </svg>

          <div className="relative z-10">
            <img
              src="/pictures/bluejay.png"
              alt="Blue Jay"
              className="
                h-30 w-30
                object-contain
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]
                transition-transform
                hover:scale-[1.05]
              "
            />
          </div>

        </div>

        <p className="mt-6 px-5 text-center text-[17px] leading-snug text-[var(--cardMuted)]">
          {subtitle}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 pb-1">
          <SocialIconButton href={links.github} label="GitHub">
            <Github size={22} />
          </SocialIconButton>

          <SocialIconButton href={links.linkedin} label="LinkedIn">
            <Linkedin size={22} />
          </SocialIconButton>

          <SocialIconButton href={links.instagram} label="Instagram">
            <Instagram size={22} />
          </SocialIconButton>

          <SocialIconButton href={links.email} label="Email" external={false}>
            <Mail size={22} />
          </SocialIconButton>
        </div>
      </div>
    </div>
  );
}
