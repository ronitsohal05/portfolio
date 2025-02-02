import { Apple } from "lucide-react"


export function ExperienceCard({ icon, title, year }){
  return (
    <div className="flex items-center space-x-4 bg-zinc-900 p-4 rounded-lg">
      <div className="bg-black p-2 rounded-lg">{icon}</div>
      <div className="flex-1">
        <h3 className="text-secondary text-lg font-medium">{title}</h3>
      </div>
      <span className="text-gray-400">{year}</span>
    </div>
  )
}