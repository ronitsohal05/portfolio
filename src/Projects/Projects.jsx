import { ProjectCard } from "./Projectcard"


export function Projects() {
    return (
        <div className="justify-center">
            <ProjectCard 
                title= "Personal Website"
                description= "My personal website made using React, Tailwind, and Three.js"
                imageUrl= "../../public/pictures/portfolio-project.jpg"
                githubUrl= "https://github.com/ronitsohal05/portfolio"
            />  
        </div>
    );
}