import timelineElements from "./MemoriesData";
import { TimelineElement1, TimelineElement2 } from "./TimelineElements"

export function Timeline() {
  return (
    <div className="flex flex-col items-center relative">
      {/* Vertical Line */}
      <div className="w-1 bg-secondary absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>

      {timelineElements.map((element, index) => {
        
        {
          if(index%2===0){
            return (
              <TimelineElement1 key = {index} element = {element} />
            );
          }else{
            return (
              <TimelineElement2 key = {index} element = {element} />
            );
          }
        }
      })}
    </div>
  );
}
