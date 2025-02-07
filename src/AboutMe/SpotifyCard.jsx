export function SpotifyCard({ label, bgColor, url, imageUrl }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${bgColor} aspect-square`}>
      <div className="absolute inset-0">
        <img
          src={imageUrl || "/placeholder.svg"}
          width={400}
          height={400}
          className="object-cover w-full h-full opacity-50"
        />
      </div>
       <div className="relative h-full p-6 flex flex-col">
        <span className="bg-color-whitetext-sm font-medium text-white">{label}</span>

        <div className="mt-auto -mx-6">
          <iframe
            src={url}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className={`scale-100`}
          />
        </div>
      </div>
    </div>
  )
}

