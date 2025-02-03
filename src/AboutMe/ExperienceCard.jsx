export function ExperienceCard({ type, title, year }) {
  const logoMap = {
    jhu: "/public/icons/jhumed_logo.jpeg",
    hophacks: "/public/icons/hophacks_logo.jpeg",
    umiami: "/public/icons/umiami_logo.jpeg",
  };

  return (
    <div className="flex items-center space-x-4 bg-zinc-900 p-4 rounded-lg">
      <div className="bg-black rounded-lg flex items-center justify-center w-12 h-12 overflow-hidden">
        <img
          src={logoMap[type] || "/placeholder.svg"}
          alt={`${title} logo`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-secondary">{title}</h3>
      </div>
      <span className="text-gray-400">{year}</span>
    </div>
  );
}
