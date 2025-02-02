import { Play, Plus, MoreHorizontal } from "lucide-react"


export function SpotifyCard({ label, bgColor, title, subtitle, spotifyText, imageUrl }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${bgColor} aspect-square`}>
      <div className="absolute inset-0">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-full opacity-50"
        />
      </div>
      <div className="relative h-full p-6 flex flex-col">
        <span className="text-sm font-medium mb-auto">{label}</span>
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-300">{subtitle}</p>
            {spotifyText && (
              <button className="mt-2 bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                Get {spotifyText}
              </button>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                <Play className="w-4 h-4 text-black" />
              </button>
              <Plus className="w-6 h-6" />
            </div>
            <MoreHorizontal className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

