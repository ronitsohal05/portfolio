import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Trophy, History, UsersRound } from 'lucide-react';

const categoryIcons = {
  friends: <UsersRound className="w-10 h-10 text-secondary" />,
  vacation: <Plane className="w-10 h-10 text-secondary" />,
  memory: <History className="w-10 h-10 text-secondary" />,
  accomplishment: <Trophy className="w-10 h-10 text-secondary" />,
};

export function TimelineElement1({ element }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex relative my-6"
    >
      {/* Left Section: Video */}
      <div className="w-1/2 flex justify-end pr-25 relative z-15">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-70 h-140"
        >
          <video
            src={element.highlight}
            controls
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      
      {/*Lines that connect elements to Timeline*/}
      <div className="absolute right-1/2 w-[100px] h-1 top-1/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "210px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-secondary h-1 transform -translate-x-1/2"
        ></motion.div>
      </div>
      <div className="absolute right-1/2 w-[100px] h-1 top-7/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "210px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-secondary h-1 transform -translate-x-1/2"
        ></motion.div>
      </div>
      <div className="absolute left-1/2 w-[100px] h-1 top-1/2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "210px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-secondary h-1 transform -translate-x-1/2"
        ></motion.div>
      </div>

      {/* Timeline Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-800 p-3 rounded-lg shadow-lg"
      >
        {categoryIcons[element.category] || <History className="w-10 h-10 text-secondary" />}
      </motion.div>

      {/* Right Section: Date Box */}
      <div className="w-1/2 flex justify-start items-center pl-25 relative z-15">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-40 h-40 bg-gray-900 flex items-center justify-center text-white text-sm p-2 rounded-lg shadow-lg"
        >
          <h1 className="text-secondary font-[customFont] text-lg">{element.date}</h1>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function TimelineElement2({ element }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex relative my-6"
    >
      {/* Left Section: Date Box */}
      <div className="w-1/2 flex justify-end items-center pr-25 relative z-15">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-40 h-40 bg-gray-900 flex items-center justify-center text-white text-sm p-2 rounded-lg shadow-lg"
        >
          <h1 className="text-secondary font-[customFont] text-lg">{element.date}</h1>
        </motion.div>
      </div>

      {/*Lines that connect elements to Timeline*/}
      <div className="absolute left-1/2 w-[100px] h-1 top-1/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "210px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-secondary h-1 transform -translate-x-1/2"
        ></motion.div>
      </div>
      <div className="absolute left-1/2 w-[100px] h-1 top-7/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "210px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-secondary h-1 transform -translate-x-1/2"
        ></motion.div>
      </div>
      <div className="absolute right-1/2 w-[100px] h-1 top-1/2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "210px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-secondary h-1 transform -translate-x-1/2"
        ></motion.div>
      </div>

      {/* Timeline Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-800 p-3 rounded-lg shadow-lg"
      >
        {categoryIcons[element.category] || <History className="w-10 h-10 text-secondary" />}
      </motion.div>

      {/* Right Section: Video */}
      <div className="w-1/2 flex justify-start pl-25 relative z-15">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-70 h-140"
        >
          <video
            src={element.highlight}
            controls
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
