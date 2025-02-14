import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export const MemoryVideo = ({ src }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
  
    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    return (
      <div 
        className="relative w-full h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        {isHovered && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-200">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
        )}
        {isHovered && isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-200">
              <Pause className="w-12 h-12 text-white" />
            </div>
          </div>
        )}
      </div>
    );
  };