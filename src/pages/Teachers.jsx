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
    className="p-6 flex flex-col gap-6 bg-white rounded-[18px] w-full relative " 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src="/images/teacher.png"
        className="absolute right-[-100px] top-[-30px] z-0 select-none"
        alt=""
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        draggable={false}
      />

      <motion.div className="flex flex-col gap-3 z-10" variants={itemVariants}>
        <h4 className="text-[24px] font-medium text-[#454545]">Teachers</h4>
        <p className="text-sm text-[#888888]">
          Comprehensive List of Teachers Enrolled in the website
        </p>
      </motion.div>

      <motion.div
        className="w-full p-5 flex gap-4 bg-[#FBFCFC] rounded-xl"
        variants={itemVariants}
      >
        <div class="flex flex-col gap-2 w-full md:w-1/3"><p class="text-sm font-normal text-[#888888]">School</p><div class="relative"><select class="w-full px-3.5 py-3 text-sm font-normal text-[#888888] rounded-xl bg-white appearance-none focus:outline-none"><option value="">Cambridge International School</option><option value="Lahore Grammar School">Lahore Grammar School</option><option value="International School of Lahore">International School of Lahore</option><option value="Beaconhouse School System">Beaconhouse School System</option></select><div class="absolute right-4 top-3 text-gray-400 pointer-events-none"><ArrowDown01Icon/> </div></div></div>
        <div class="flex flex-col gap-2 w-full md:w-1/3"><p class="text-sm font-normal text-[#888888]">Class</p><div class="relative"><select class="w-full px-3.5 py-3 text-sm font-normal text-[#888888] rounded-xl bg-white appearance-none focus:outline-none"><option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option></select><div class="absolute right-4 top-3 text-gray-400 pointer-events-none"><ArrowDown01Icon/> </div></div></div>
        <div className="w-full flex flex-col gap-2 md:w-1/3">
          <span className="text-sm text-[#888888]">Search Teacher</span>
          <div className="px-3.5 py-3 w-full flex items-center justify-between text-[#888888] bg-[#fff] rounded-xl min-h-[48px]">
            <input type="text" className="w-full bg-transparent focus:outline-none placeholder:text-[#888888] text-[#888888]" placeholder="Alex" name="" id="" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-2 bg-[#FBFCFC] p-5 rounded-xl"
        variants={containerVariants}
      >
        <div className="px-6 py-4 flex justify-between gap-4 bg-[#fff] rounded-[10px]">
        <p className="text-base text-nowrap min-w-[185px] max-w-[185px] text-[#6D6D6D]">Full Name</p>
        <p className="text-base text-nowrap min-w-[236px] max-w-[236px] text-[#6D6D6D]">Email</p>
        <p className="text-base text-nowrap min-w-[140px] max-w-[140px] text-[#6D6D6D]">Phone No.</p>
        <p className="text-base text-nowrap min-w-[246px] max-w-[246px] text-[#6D6D6D]">Courses</p>
        <p className="text-base text-nowrap min-w-[140px] max-w-[140px] text-[#6D6D6D]">Classes</p>
        <p className="text-base text-nowrap min-w-[140px] max-w-[140px] text-[#6D6D6D]">Qualification</p>
        </div>

        {[...Array(8)].map((_, idx) => (
          <motion.div
            className="w-full flex items-center justify-between gap-4 px-6 py-4"
            key={idx}
            variants={itemVariants}
          >
            <div className="min-w-[185px] max-w-[185px]">
              <span className="flex items-center gap-2 text-[#6D6D6D]">
                John Wick
              </span>
            </div>
            <span className="min-w-[236px] max-w-[236px] text-[#888888]">
              sparkle.penguin@whimsica...
            </span>
            <span className="min-w-[140px] max-w-[140px] text-[#888888]">612 345 678</span>
            <div className="flex gap-[10px] min-w-[246px] max-w-[246px]  text-[#888888]">
              {["Chemistry", "Science", "2+"].map((course, index) => (
                <motion.button
                  key={index}
                  className="px-3.5 py-1.5 text-xs rounded-full"
                  style={{
                    backgroundColor: "rgb(234, 242, 255)",
                    color: "rgb(93, 93, 93)",
                  }}
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  {course}
                </motion.button>
              ))}
            </div>
            <span className="min-w-[140px] max-w-[140px] text-[#888888]">7A, 6B, 9A</span>
            <motion.div
              className="min-w-[140px] max-w-[140px]"
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
                Evaluation
              </button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Teachers;