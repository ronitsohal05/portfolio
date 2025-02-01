export function AboutCard({ title, content }) {
    return (
      <div className="space-y-2">
        <h2 className="text-sm text-gray-400">{title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{content}</p>
      </div>
    )
}