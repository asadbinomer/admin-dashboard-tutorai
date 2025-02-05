import React, { useState } from "react";
import { ArrowDown01Icon, StarIcon } from "hugeicons-react";
import { motion } from "framer-motion";
import Rating from "./Rating";

const AllTools = () => {
  const [showRating, setShowRating] = useState(false);

  const tools = [
    {
      name: "Generador de exámenes tipo test",
      category: "Generador de Contenido",
      rating: "5 (280)",
      type: "Student",
      useCount: 256,
    },
    {
      name: "Generador de exámenes tipo test",
      category: "Generador de Contenido",
      rating: "5 (280)",
      type: "Teacher",
      useCount: 987,
    },
    {
      name: "Generador de exámenes tipo test",
      category: "Generador de Contenido",
      rating: "5 (280)",
      type: "Student",
      useCount: 432,
    },
    {
      name: "Generador de exámenes tipo test",
      category: "Generador de Contenido",
      rating: "5 (280)",
      type: "Teacher",
      useCount: 123,
    },
    {
      name: "Generador de exámenes tipo test",
      category: "Generador de Contenido",
      rating: "5 (280)",
      type: "Student",
      useCount: 789,
    },
    {
      name: "Generador de exámenes tipo test",
      category: "Generador de Contenido",
      rating: "5 (280)",
      type: "Student",
      useCount: 789,
    },
    {
      name: "Generador de exámenes tipo test",
      category: "Generador de Contenido",
      rating: "5 (280)",
      type: "Student",
      useCount: 789,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 25,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <motion.div
      className="p-6 flex flex-col gap-6 bg-white rounded-[18px] w-full relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src="/images/student.png"
        className="absolute right-[-50px] top-[-10px] select-none"
        alt="Student"
        draggable={false}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div className="flex flex-col gap-3" variants={itemVariants}>
        <h4 className="text-[24px] font-medium text-[#454545]">All Tools</h4>
        <p className="text-sm text-[#888888]">
          Comprehensive List of all tools in the website
        </p>
      </motion.div>


      <ToolFilter />

      <ToolList setShowRating={setShowRating} tools={tools} />
    </motion.div>
    {showRating && <Rating setShowRating={setShowRating}/>}
    </>
  );
};

const ToolFilter = () => {
  const filterVariants = {
    hidden: { },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        damping: 25,
        stiffness: 60,
      },
    },
  };

  return (
    <motion.div
      className="w-full p-5 flex gap-4 bg-[#FBFCFC] rounded-xl"
      variants={filterVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-2 w-full md:w-1/3">
        <p className="text-sm font-normal text-[#888888]">Type</p>
        <div className="relative">
          <select className="w-full px-3.5 py-3 text-sm font-normal text-[#888888] rounded-xl bg-white appearance-none focus:outline-none">
            <option value="">All</option>
            <option value="Lahore Grammar School">Lahore Grammar School</option>
            <option value="International School of Lahore">
              International School of Lahore
            </option>
            <option value="Beaconhouse School System">
              Beaconhouse School System
            </option>
          </select>
          <div className="absolute right-4 top-3 text-gray-400 pointer-events-none">
            <ArrowDown01Icon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/3">
        <p className="text-sm font-normal text-[#888888]">Sort</p>
        <div className="relative">
          <select className="w-full px-3.5 py-3 text-sm font-normal text-[#888888] rounded-xl bg-white appearance-none focus:outline-none">
            <option value="A">Rating</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
          <div className="absolute right-4 top-3 text-gray-400 pointer-events-none">
            <ArrowDown01Icon />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 md:w-1/3">
        <span className="text-sm text-[#888888]">Search Tool Name</span>
        <div className="px-3.5 py-3 w-full flex items-center justify-between text-[#888888] bg-[#fff] rounded-xl min-h-[48px]">
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none placeholder:text-[#888888] text-[#888888]"
            placeholder="Generador"
          />
        </div>
      </div>
    </motion.div>
  );
};

const ToolRow = ({ tool, isChecked, onToggle, setShowRating }) => {
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        damping: 20,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="flex w-full items-center justify-between gap-4 px-6 py-4"
      variants={rowVariants}
      initial="hidden"
      animate="visible"
    >
      <span className="min-w-[270px] text-nowrap text-[#5D5D5D]">
        {tool.name}
      </span>
      <span className="min-w-[224px] text-nowrap text-[#B6B6B6]">
        {tool.category}
      </span>
      <div
        className="flex min-w-[93px] items-center gap-3 cursor-pointer"
        onClick={() => {
          setShowRating(true);
        }}
      >
        <StarIcon color="#5D5D5D" />
        <span className="text-nowrap text-[#B6B6B6]">{tool.rating}</span>
      </div>
      <span className="min-w-[109px] text-nowrap text-[#B6B6B6]">
        {tool.type}
      </span>
      <span className="min-w-[147px] text-nowrap text-[#B6B6B6]">
        {tool.useCount}
      </span>
      <label className="min-w-[147px] relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={onToggle}
        />
        <div className="w-[52px] h-[26px] bg-gray-300 rounded-full peer-checked:bg-blue-500 peer-focus:ring-2 peer-checked:ring-[#92B0FF] ring-[#C1C1C1] transition duration-300" />
        <div className="absolute left-[3px] top-[3px] w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-[26px]" />
      </label>
    </motion.div>
  );
};

const ToolList = ({ tools, setShowRating }) => {
  const [checkedIndexes, setCheckedIndexes] = useState([0]);

  const handleToggle = (index) => {
    setCheckedIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <motion.div
      className="flex flex-col gap-6 overflow-x-auto rounded-[18px] bg-[#FBFCFC] p-5"
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      initial="hidden"
      animate="visible"
    >
      <div className="flex w-full items-center justify-between gap-4 rounded-[16px] bg-white px-6 py-4">
        <span className="min-w-[270px] text-nowrap text-[#6D6D6D]">
          Tool Name
        </span>
        <span className="min-w-[224px] text-nowrap text-[#6D6D6D]">
          Category
        </span>
        <span className="min-w-[93px] text-nowrap text-[#6D6D6D]">Rating</span>
        <span className="min-w-[109px] text-nowrap text-[#6D6D6D]">Type</span>
        <span className="min-w-[147px] text-nowrap text-[#6D6D6D]">
          Use Count
        </span>
        <span className="min-w-[147px] text-nowrap text-[#6D6D6D]">Enable</span>
      </div>
      {tools.map((tool, index) => (
        <ToolRow
          key={index}
          tool={tool}
          isChecked={checkedIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
          setShowRating={setShowRating}
        />
      ))}
    </motion.div>
  );
};

export default AllTools;
