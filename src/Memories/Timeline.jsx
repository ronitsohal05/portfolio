import timelineElements from "./MemoriesData";
import schoolIcon from "/icons/school.svg";
import workIcon from "/icons/work.svg";
import { TimelineElement } from "./TimelineElement"

export function Timeline() {
  return (
    <div className="flex flex-col items-center relative">
      {/* Vertical Line */}
      <div className="w-1 bg-gray-600 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>

      {timelineElements.map((element, index) => {

      

        return (
          <TimelineElement key = {index} element = {element} />
        );
      })}
    </div>
  );
}
