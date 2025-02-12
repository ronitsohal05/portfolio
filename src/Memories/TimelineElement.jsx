import timelineElements from "./MemoriesData";
import schoolIcon from "/icons/school.svg";
import workIcon from "/icons/work.svg";

export function TimelineElement({ element }) {
  return (
    <div key={element.id} className="w-full flex relative my-6">
      
      {/* Left Section: Image */}
      <div className="w-1/2 flex justify-end pr-25 relative z-15">
        <div className="w-50 h-100">
          <img
            src={element.image}
            alt="Timeline visual"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
        
      </div>

      {/* Timeline Icon */}
      <div className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <img
          src={element.icon === "school" ? schoolIcon : workIcon}
          alt="icon"
          className={`bg-secondary w-10 p-1 rounded-lg`}
        />
      </div>

      {/* Right Section: Small Text Box */}
      <div className="w-1/2 flex justify-start items-center pl-25 relative z-15">
        <div className="w-40 h-40 bg-gray-900 flex items-center justify-center text-white text-sm p-2 rounded-lg shadow-lg">
          <p>{element.smallText}</p>
        </div>
      </div>
    </div>
  );
}
