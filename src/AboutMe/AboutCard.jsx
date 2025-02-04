export function AboutCard({ title, content }) {
    return (
      <div className="space-y-2">
        <h2 className="text-sm text-gray-400 font-[customFont]">{title}</h2>
        <p className="text-gray-300 leading-relaxed text-lg font-[customFont]">{content}</p>
      </div>
    )
}