import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { CharacterPhoneticIcon, ToolsIcon } from 'hugeicons-react';

function SchoolDetailModel ({toggleSchoolDetailModel}) {

  const [activeTab, setActiveTab] = useState('wordsUsed');

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const tabButtonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15 
      }
    },
    tap: { 
      scale: 0.95,
      rotate: 0.5,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15 
      }
    }
  };

  const renderTableContent = (type) => {
    return (
      <motion.div 
        variants={staggerContainerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          variants={staggerItemVariants}
          className="px-6 py-4 flex justify-between gap-4 bg-[#fff] rounded-[10px]"
        >
          <p className="min-w-[185px] max-w-[185px] text-base text-nowrap text-[#6D6D6D]">Name</p>
          <p className={`${type === 'wordsUsed' ? 'min-w-[225px] max-w-[225px]' : 'min-w-[140px]'} text-base text-nowrap text-[#6D6D6D]`}>
            {type === 'wordsUsed' ? 'Tool Name' : 'No of words used'}
          </p>
          <p className={`${type === 'wordsUsed' ? 'min-w-[140px]' : 'min-w-[225px] max-w-[225px]'} text-base text-nowrap text-[#6D6D6D]`}>
            {type === 'wordsUsed' ? 'No of words used' : 'Tool Name'}
          </p>
        </motion.div>
        {[...Array(4)].map((_, index) => (
          <motion.div 
            key={index} 
            variants={staggerItemVariants}
            className="px-6 py-4 flex justify-between gap-4 rounded-[10px]"
          >
            <p className="min-w-[185px] max-w-[185px] text-base text-nowrap text-[#6D6D6D]">John Wick</p>
            <p className={`${type === 'wordsUsed' ? 'min-w-[225px] max-w-[225px]' : 'min-w-[140px]'} text-base text-nowrap text-[#6D6D6D]`}>
              {type === 'wordsUsed' ? 'Generador de exámenes ti...' : '1011'}
            </p>
            <p className={`${type === 'wordsUsed' ? 'min-w-[140px]' : 'min-w-[225px] max-w-[225px]'} text-base text-nowrap text-[#6D6D6D]`}>
              {type === 'wordsUsed' ? '1011' : 'Generador de exámenes ti...'}
            </p>
          </motion.div>
        ))}
      </motion.div>
    );
  };
  
  return (
    <>
    <div className="absolute top-0 left-0 inset-0 min-w-[100%] h-full bg-[#000] z-[100] bg-opacity-70 flex items-center justify-center">
    <span onClick={toggleSchoolDetailModel} className="absolute inset-0 z-1"></span>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-[902px] z-50 h-[700px] p-[36px] flex flex-col gap-[32px] bg-white rounded-[32px]">
        <div className="w-full flex flex-col gap-5 rounded-xl">
          <div className="flex items-center gap-3">
            <img className="w-[46px] select-none" draggable={false} src="/images/cambridge.png" alt="" />
            <h4 className="text-[18px] font-medium text-[#5D5D5D]">Cambridge International (CIB)</h4>
          </div>
          <div className="flex items-center gap-5">
          <div className="w-full bg-[#FBFCFC] p-5 flex flex-col items-center text-center gap-1 rounded-xl">
            <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
            <p className="text-sm text-[#888888]">Teachers</p>
          </div>
          <div className="w-full bg-[#FBFCFC] p-5 flex flex-col items-center text-center gap-1 rounded-xl">
            <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
            <p className="text-sm text-[#888888]">Teachers</p>
          </div>
          <div className="w-full bg-[#FBFCFC] p-5 flex flex-col items-center text-center gap-1 rounded-xl">
            <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
            <p className="text-sm text-[#888888]">Teachers</p>
          </div>
          <div className="w-full bg-[#FBFCFC] p-5 flex flex-col items-center text-center gap-1 rounded-xl">
            <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
            <p className="text-sm text-[#888888]">Teachers</p>
          </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] toggle">
          <div className="flex gap-4 toggle-button">
            <motion.div 
              variants={tabButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('wordsUsed')} 
              className={`cursor-pointer px-4 py-3 flex items-center gap-1.5 text-sm rounded-[10px] ${activeTab === 'wordsUsed' ? 'text-white bg-[#0052CC]' : 'text-[#888888] bg-[#FAFBFD]'}`}
            >
              <CharacterPhoneticIcon size="22px" className={`${activeTab === 'wordsUsed' ? 'text-white' : 'text-[#888888]'}`} /> 
              Words Used
            </motion.div>
            <motion.div 
              variants={tabButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('toolsUsed')} 
              className={`cursor-pointer px-4 py-3 flex items-center gap-1.5 text-sm rounded-[10px] ${activeTab === 'toolsUsed' ? 'text-white bg-[#0052CC]' : 'text-[#888888] bg-[#FAFBFD]'}`}
            >
              <ToolsIcon size="22px" className={`${activeTab === 'toolsUsed' ? 'text-white' : 'text-[#888888]'}`} /> 
              Tools Used
            </motion.div>
          </div>
          <motion.div 
            key={activeTab}
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-2 bg-[#FBFCFC] p-5 rounded-xl"
          >
            <AnimatePresence mode="wait">
              {activeTab === 'wordsUsed' ? renderTableContent('wordsUsed') : renderTableContent('toolsUsed')}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default SchoolDetailModel