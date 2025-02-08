import GitHubIcon from "@mui/icons-material/GitHub";

export function ProjectCard({ title, description, imageUrl, githubUrl }) {
  return (
    <div className="bg-primary border border-gray-700 rounded-lg p-4 shadow-md overflow-hidden 
                    h-[425px] w-[325px] flex-shrink-0">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${title} project thumbnail`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-secondary text-xl font-[customFont] font-semibold mb-2">{title}</h2>
        <p className="text-secondary font-[customFont] mb-4">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-800 
                     text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          <GitHubIcon className="mr-2" style={{ fontSize: 20 }} />
          View on GitHub
        </a>
      </div>
    </div>
  );
}