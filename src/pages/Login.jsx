import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <motion.div
      className="w-full h-full p-9 max-h-[100vh] flex bg-[#FBFCFC]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="rounded-[38px] relative">
        <img
          src="/images/logo.png"
          className="absolute select-none top-6 left-6"
          draggable={false}
          alt=""
        />
        <img
          src="/images/hero.png"
          draggable={false}
          className="min-h-full object-cover select-none object-center rounded-[38px]"
          alt=""
        />
      </div>
      
      <div className="w-full flex items-center justify-center">
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="flex flex-col items-center gap-3">
            <motion.h1
              className="text-[32px] font-[500] text-[#5D5D5D]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome Back!
            </motion.h1>
            <motion.p
              className="text-[18px] text-[#B0B0B0]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Log In to get started using Tututor AI.
            </motion.p>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="w-[455px] px-[24px] py-[22px] bg-white rounded-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <input
                type="text"
                className="text-[#B0B0B0] w-full focus:outline-none"
                placeholder="Name"
              />
            </motion.div>
            <motion.div
              className="w-[455px] px-[24px] py-[22px] bg-white rounded-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <input
                type="text"
                className="text-[#B0B0B0] w-full focus:outline-none"
                placeholder="Email"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-end gap-[12px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                className="w-[455px] px-[24px] py-[22px] bg-white rounded-[24px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <input
                  type="text"
                  className="text-[#B0B0B0] w-full focus:outline-none"
                  placeholder="Password"
                />
              </motion.div>
              <motion.a
                className="text-[18px] underline underline-[#B0B0B0] cursor-pointer text-[#B0B0B0]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Forget Password?
              </motion.a>
            </motion.div>
            
            {/* Log In Button */}
            <motion.div
              className="w-fit px-[51px] py-[16px] text-[18px] font-medium text-white bg-[#0052CC] rounded-[20px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Log In
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Login;
