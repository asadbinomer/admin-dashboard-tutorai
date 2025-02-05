import React from "react";
import { motion } from "framer-motion";
import { ArrowDown01Icon } from "hugeicons-react";

const Teachers = () => {
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
    <motion.div
      className="p-6 flex flex-col gap-6 bg-white rounded-[18px] w-full relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src="/images/student.png"
        draggable={false}
        className="absolute select-none -right-[50px] -top-[10px]"
        alt=""
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, x: 50, scale: 1 }}
        animate={{ opacity: 1, x: 0 }}
      />
      <motion.div className="flex flex-col gap-3" variants={itemVariants}>
        <h4 className="text-[24px] font-medium text-[#454545]">Teachers</h4>
        <p className="text-sm text-[#888888]">
          Comprehensive List of Teachers Enrolled in the website
        </p>
      </motion.div>
      <FilterSection />
      <TeacherList />
    </motion.div>
  );
};

const FilterSection = () => {
  return (
    <motion.div className="w-full p-5 flex gap-4 bg-[#FBFCFC] rounded-xl">
      <div className="flex flex-col gap-2 w-full md:w-1/3">
        <p className="text-sm font-normal text-[#888888]">School</p>
        <div className="relative">
          <select className="w-full px-3.5 py-3 text-sm font-normal text-[#888888] rounded-xl bg-white appearance-none focus:outline-none">
            <option value="">Cambridge International School</option>
            <option value="Lahore Grammar School">Lahore Grammar School</option>
            <option value="International School of Lahore">International School of Lahore</option>
            <option value="Beaconhouse School System">Beaconhouse School System</option>
          </select>
          <div className="absolute right-4 top-3 text-gray-400 pointer-events-none">
            <ArrowDown01Icon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/3">
        <p className="text-sm font-normal text-[#888888]">Class</p>
        <div className="relative">
          <select className="w-full px-3.5 py-3 text-sm font-normal text-[#888888] rounded-xl bg-white appearance-none focus:outline-none">
            <option value="A">A</option>
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
        <span className="text-sm text-[#888888]">Search Teacher</span>
        <div className="px-3.5 py-3 w-full flex items-center justify-between text-[#888888] bg-[#fff] rounded-xl min-h-[48px]">
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none placeholder:text-[#888888] text-[#888888]"
            placeholder="Alex"
          />
        </div>
      </div>
    </motion.div>
  );
};

const TeacherList = () => {
  return (
    <motion.div
      className="flex flex-col gap-6 overflow-x-auto rounded-[18px] bg-[#FBFCFC] p-5"
      initial="hidden"
      animate="visible"
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
    >
      <div className="flex w-full items-center justify-between gap-4 rounded-[16px] bg-white px-6 py-4">
        <span className="min-w-[185px] text-[#6D6D6D]">Full Name</span>
        <span className="min-w-[236px] text-[#6D6D6D]">Email</span>
        <span className="min-w-[140px] text-[#6D6D6D]">Phone No.</span>
        <span className="min-w-[246px] text-[#6D6D6D]">Courses</span>
        <span className="min-w-[140px] text-[#6D6D6D]">Classes</span>
        <span className="min-w-[140px] text-[#6D6D6D]">Qualification</span>
      </div>
      {[...Array(8)].map((_, idx) => (
        <motion.div
          className="flex w-full items-center justify-between gap-4 px-6 py-4"
          key={idx}
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <span className="min-w-[185px] text-[#6D6D6D]">John Wick</span>
          <span className="min-w-[236px] text-[#888888]">sparkle.penguin@whimsica...</span>
          <span className="min-w-[140px] text-[#888888]">612 345 678</span>
          <span className="min-w-[246px] text-[#888888]">Chemistry, Science, 2+</span>
          <span className="min-w-[140px] text-[#888888]">7A, 6B, 9A</span>
          <span className="min-w-[140px] text-[#888888]">Evaluation</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Teachers;
