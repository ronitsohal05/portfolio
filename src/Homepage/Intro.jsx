import React, { useState, useEffect } from "react";

export const Intro = ({ name, characteristics }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current characteristic
  const [text, setText] = useState(""); // Tracks the displayed text
  const [isDeleting, setIsDeleting] = useState(false); // Tracks whether we are typing or deleting
  const typingSpeed = 100; // Speed of typing in milliseconds
  const pauseAfterTyping = 1500; // Pause duration after typing a word before deleting

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = characteristics[currentIndex];

      if (!isDeleting) {
        // Typing forward
        setText((prev) => currentWord.substring(0, prev.length + 1));
        if (text === currentWord) {
          setIsDeleting(true);
          setTimeout(() => {}, pauseAfterTyping); // Pause before deleting
        }
      } else {
        // Deleting backward
        setText((prev) => currentWord.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % characteristics.length); // Move to the next word
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, currentIndex, characteristics]);

  return (
    <div className="bg-primary text-secondary font-[customFont] d:text-2lg lg:text-3xl">
      <h1 className="">My name is {name}.</h1>
      <h2 className="">
        I'm a <span className="">{text}</span>
        <span className="border-r-2 border-white animate-blink font-[customFont]">|</span>
      </h2>
    </div>
  );
};

export default Intro;