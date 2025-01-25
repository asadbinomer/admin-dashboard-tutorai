import React from "react";
import { motion } from "framer-motion";
import { ArrowDown01Icon } from "hugeicons-react";

const Student = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonHover = {
    scale: 1.1,
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.95,
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
        className="absolute right-[-50px] top-[-10px] select-none"
        alt="Student"
        draggable={false}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.div className="flex flex-col gap-3" variants={itemVariants}>
        <h4 className="text-[24px] font-medium text-[#454545]">Student</h4>
        <p className="text-sm text-[#888888]">
          Comprehensive List of Students Enrolled in the Website
        </p>
      </motion.div>

      <motion.div
        className="w-full p-5 flex gap-4 bg-[#FBFCFC] rounded-xl"
        variants={itemVariants}
      >
        {["School", "Class", "Search Teacher"].map((label, index) => (
          <div key={index} className="w-full flex flex-col gap-2 w-[405px]">
            <span className="text-sm text-[#888888]">{label}</span>
            <div className="px-3.5 py-3 w-full flex items-center justify-between text-[#888888] bg-[#fff] rounded-xl min-h-[48px]">
              Cambridge International School
              <ArrowDown01Icon/>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-col gap-2 bg-[#FBFCFC] p-5 rounded-xl"
        variants={containerVariants}
      >
        <div className="px-6 py-4 flex justify-between gap-4 bg-[#fff] rounded-[10px]">
        <p className="text-base text-nowrap min-w-[185px] max-w-[185px] text-[#6D6D6D]">Asignatura</p>
        <p className="text-base text-nowrap min-w-[165px] max-w-[165px] text-[#6D6D6D]">Father Name</p>
        <p className="text-base text-nowrap min-w-[140px] max-w-[140px] text-[#6D6D6D]">1º Trimestre</p>
        <p className="text-base text-nowrap min-w-[140px] max-w-[140px] text-[#6D6D6D]">2º Trimestre</p>
        <p className="text-base text-nowrap min-w-[140px] max-w-[140px] text-[#6D6D6D]">3er Trimestre</p>
        <p className="text-base text-nowrap min-w-[140px] max-w-[140px] text-[#6D6D6D]">Nota Final</p>
        <p className="text-base text-nowrap min-w-[140px] max-w-[140px] text-[#6D6D6D]">Calificación</p>
        </div>

        {[...Array(8)].map((_, idx) => (
          <motion.div
            className="w-full flex items-center justify-between gap-4 px-6 py-4"
            key={idx}
            variants={itemVariants}
          >
            <span className="min-w-[185px] max-w-[185px] flex items-center gap-2 text-[#6D6D6D]">John</span>
            <span className="min-w-[165px] text-[#888888]">Wick</span>
            <span className="min-w-[140px] text-[#888888]">7</span>
            <span className="min-w-[140px] text-[#888888]">8</span>
            <span className="min-w-[140px] text-[#888888]">7.7</span>
            <span className="min-w-[140px] text-[#888888]">7.7</span>
            <motion.div
              className="w-[140px]"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <button
                className="px-3.5 py-1.5 text-xs rounded-full"
                style={{
                  backgroundColor: "rgb(234, 242, 255)",
                  color: "rgb(93, 93, 93)",
                }}
              >
                Notable
              </button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Student;
