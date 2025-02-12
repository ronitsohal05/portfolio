import timelineElements from "./MemoriesData";
import schoolIcon from "/icons/school.svg";
import workIcon from "/icons/work.svg";

export function Timeline({ defaultColor }) {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-1 bg-gray-600 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
      {timelineElements.map((element, index) => {
        const color = defaultColor ? defaultColor : element.color ? `bg-${element.color}-500` : "bg-gray-500";
        const isLeft = index % 2 === 0;

        return (
          <div key={element.id} className="w-full flex justify-center relative my-6">
            <div className={`flex items-center w-full max-w-2xl ${isLeft ? 'justify-start pr-16' : 'justify-end pl-16'}`}>
              
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
