import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "./ProjectsData";

export function Projects() {
    const [index, setIndex] = useState(0);
    const itemsPerPage = 3;
    
    const nextSlide = () => {
        if (index + itemsPerPage < projects.length) {
            setIndex(index + itemsPerPage);
        } else {
            setIndex(0); // Loop back to start
        }
    };

    const prevSlide = () => {
        if (index - itemsPerPage >= 0) {
            setIndex(index - itemsPerPage);
        } else {
            setIndex(Math.max(0, projects.length - itemsPerPage)); // Go to last full set
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-20 pt-10"> 
            {/* Carousel Container */}
            <div className="relative flex items-center w-[1050px]">
                
                {/* Left Button - Positioned Outside */}
                <button
                    onClick={prevSlide}
                    className="absolute left-[-60px] z-10 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 cursor-pointer"
                >
                    <ChevronLeft size={30} />
                </button>

                {/* Carousel Wrapper */}
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * (100 / itemsPerPage)}%)` }}
                    >
                        {projects.map((project, i) => (
                            <div key={i} className="w-[325px] flex-shrink-0 mx-3">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Button - Positioned Outside */}
                <button
                    onClick={nextSlide}
                    className="absolute right-[-60px] z-10 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 cursor-pointer"
                >
                    <ChevronRight size={30} />
                </button>
            </div>
        </div>
    );
}
