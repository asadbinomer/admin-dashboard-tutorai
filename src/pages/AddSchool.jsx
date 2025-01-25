import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CharacterPhoneticIcon, Image01Icon, ImageAdd01Icon, ImageIcon, Tick01Icon } from "hugeicons-react";

function AddSchool({toggleAddSchool}) {
  const [imagePreview, setImagePreview] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 inset-0 min-w-[100%] h-full container bg-[#000] bg-opacity-70 flex items-center justify-center">
        <span onClick={toggleAddSchool} className="absolute inset-0"></span>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-[902px] main h-[470px] z-50 p-[36px] flex flex-col items-center text-center justify-between bg-white rounded-[32px]"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-3">
            <h4 className="text-[24px] font-medium text-[#454545]">
              Add Schools
            </h4>
            <p className="text-sm text-[#888888] max-w-[440px]">
              Add a new school! Fill in the details below, including the name
              and address. Click 'Save' when you're done.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex flex-col items-start gap-6">
            <motion.label 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[151px] h-[114px] flex items-center justify-center border-[1px] border-[#888888] border-dashed rounded-[12px] cursor-pointer"
            >
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleImageUpload}
              />
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full select-none h-full object-cover rounded-[12px]" 
                  draggable={false}
                />
              ) : (
                <ImageAdd01Icon size="38"  color="#5D5D5D" />
              )}
            </motion.label>

            <motion.div 
              variants={itemVariants}
              className="w-full px-6 py-5 bg-[#FCFCFC] rounded-[24px]"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent focus:outline-none placeholder:text-[#B0B0B0] text-[#B0B0B0]"
              />
            </motion.div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              rotate: 1.5,
              transition: { duration: 0.1 }
            }}
            className="cursor-pointer px-4 py-3 flex items-center gap-1.5 text-sm text-white bg-[#0052CC] rounded-[10px]"
          >
            <Tick01Icon size="22px" />
            Save
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

export default AddSchool;