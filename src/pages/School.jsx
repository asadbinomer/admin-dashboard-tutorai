import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AddSchool from './AddSchool.jsx'
import SchoolDetailModel from './SchoolDetailModel.jsx'
import { AddSquareIcon, ArrowRight01Icon } from 'hugeicons-react'

const School = () => {
  const [showAddSchool, setShowAddSchool] = useState(false);
  const [showSchoolDetailModel, setShowSchoolDetailModel] = useState(false);

  const toggleAddSchool = () => {
    setShowAddSchool(!showAddSchool);
  };

  const toggleSchoolDetailModel = () => {
    setShowSchoolDetailModel(!showSchoolDetailModel);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    },
    out: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    in: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: { 
      scale: 1.02,
      transition: { 
        type: "spring",
        stiffness: 300
      }
    }
  };

  const schoolCards = [
    { name: "Cambridge International (CIB)", teachers: 31, logo: "/images/cambridge.png" },
    { name: "Cambridge International (CIB)", teachers: 31, logo: "/images/cambridge.png" },
    { name: "Cambridge International (CIB)", teachers: 31, logo: "/images/cambridge.png" },
    { name: "Cambridge International (CIB)", teachers: 31, logo: "/images/cambridge.png" },
    { name: "Cambridge International (CIB)", teachers: 31, logo: "/images/cambridge.png" },
    { name: "Cambridge International (CIB)", teachers: 31, logo: "/images/cambridge.png" }
  ];

  return (
    <>
    <div className="bg-white rounded-[18px] w-full h-full scrollbar">
    <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="w-full p-6 flex flex-col gap-6 relative"
      >
      <motion.img
        src="/images/school.png"
        className="absolute -right-[80px] z-0 -top-[10px] select-none"
        alt=""
        draggable={false}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, x: 50, scale: 1 }}
        animate={{ opacity: 1, x: 0 }}
      />
        <div className="flex items-center justify-between w-full z-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] font-medium text-[#454545]">Schools</h2>
            <p className="text-[14px] text-[#888888]">Comprehensive List of Schools Enrolled in the website</p>
          </div>
          <motion.div 
            className="w-fit px-4 py-3 flex cursor-pointer gap-1.5 bg-[#0052CC] text-[#E7E7E7] rounded-[10px]"  
            onClick={toggleAddSchool} 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9, rotate: "1.5deg" }} 
            transition={{ ease: "easeInOut", duration: 0.1 }}
          >
            <AddSquareIcon/>
            Add School
          </motion.div>
        </div>
        <motion.div 
          className="grid grid-cols-2 gap-6 justify-between"
          variants={pageVariants}
        >
          {schoolCards.map((school, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="w-full p-5 flex flex-col gap-5 bg-[#FBFCFC] rounded-xl cursor-pointer"
              
            >
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img className="w-[46px] select-none" draggable={false} src={school.logo} alt="" />
                  <h4 className="text-[18px] font-medium text-[#5D5D5D]">{school.name}</h4>
                </div>
                <motion.div  onClick={toggleSchoolDetailModel}
                  className="w-fit px-4 py-3 flex items-center gap-1.5 text-sm text-[#6D6D6D] bg-white rounded-[10px] cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View More 
                  <ArrowRight01Icon/>
                </motion.div>
              </div>
              <div className="flex items-center gap-5">
                {[1, 2, 3, 4].map((_, cardIndex) => (
                  <motion.div 
                    key={cardIndex}
                    variants={cardVariants}
                    className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl"
                  >
                    <h3 className="text-[24px] text-[#5D5D5D]">{school.teachers}</h3>
                    <p className="text-sm text-[#888888]">Teachers</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showAddSchool && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full absolute z-50 top-0 left-0"
          >
            <AddSchool toggleAddSchool={toggleAddSchool} />
          </motion.div>
        )}
        {showSchoolDetailModel && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full absolute z-50 top-0 left-0"
          >
            <SchoolDetailModel toggleSchoolDetailModel={toggleSchoolDetailModel} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  )
}

export default School