import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown01Icon } from 'hugeicons-react';

const AllUsers = () => {
  return (
    <div className="w-full p-6 flex flex-col gap-6 bg-white rounded-[18px] relative overflow-x-hidden">
      {/* Image Animation: Zoom effect */}
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

      <div className="flex flex-col gap-3">
        <h4 className="text-[24px] font-medium text-[#454545]">All Users</h4>
        <p className="text-sm text-[#888888]">
          Comprehensive List of Teachers Enrolled in the website
        </p>
      </div>

      {/* Filter Section */}
      <motion.div
        className="w-full p-5 flex gap-4 bg-[#FBFCFC] rounded-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div class="flex flex-col gap-2 w-full md:w-1/3"><p class="text-sm font-normal text-[#888888]">Type</p><div class="relative"><select class="w-full px-3.5 py-3 text-sm font-normal text-[#888888] rounded-xl bg-white appearance-none focus:outline-none"><option value="All">All</option><option value="Teachers">Teachers</option><option value="Students">Students</option></select><div class="absolute right-4 top-3 text-gray-400 pointer-events-none"><ArrowDown01Icon/> </div></div></div>
        <div class="flex flex-col gap-2 w-full md:w-1/3"><p class="text-sm font-normal text-[#888888]">Sort</p><div class="relative"><select class="w-full px-3.5 py-3 text-sm font-normal text-[#888888] rounded-xl bg-white appearance-none focus:outline-none"><option value="Recent">Recent</option><option value="B">A - Z</option><option value="C">Z - A</option><option value="D">Old - New</option><option value="E">New - Old</option></select><div class="absolute right-4 top-3 text-gray-400 pointer-events-none"><ArrowDown01Icon/> </div></div></div>
        <div className="w-full flex flex-col gap-2 md:w-1/3">
          <span className="text-sm text-[#888888]">Search Username</span>
          <div className="px-3.5 py-3 w-full flex items-center justify-between text-[#888888] bg-[#fff] rounded-xl min-h-[48px]">
            <input type="text" className="w-full bg-transparent focus:outline-none placeholder:text-[#888888] text-[#888888]" placeholder="Alex" name="" id="" />
          </div>
      </div>
      </motion.div>

      {/* User List */}
      <motion.div
        className="flex flex-col gap-2 bg-[#FBFCFC] p-5 rounded-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="px-6 py-4 flex justify-between gap-4 bg-[#fff] rounded-[10px]">
          <p className="min-w-[135px] text-base text-nowrap text-[#6D6D6D]">User Name</p>
          <p className="min-w-[165px] text-base text-nowrap text-[#6D6D6D]">Email</p>
          <p className="min-w-[109px] text-base text-nowrap text-[#6D6D6D]">Type</p>
          <p className="min-w-[204px] text-base text-nowrap text-[#6D6D6D]">Most Used Tool</p>
          <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">Type of school</p>
          <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">City</p>
          <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">Main Goal</p>
          <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">Words Used</p>
        </div>

        {['John', 'John', 'John', 'John', 'John', 'John', 'John', 'John',].map((user, index) => (
          <motion.div
            key={index}
            className="px-6 py-4 flex justify-between gap-4 rounded-[10px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <p className="min-w-[135px] text-base text-nowrap text-[#6D6D6D]">{user}</p>
            <p className="min-w-[165px] text-base text-nowrap text-[#6D6D6D]">sophia.bright@outl...</p>
            <p className="min-w-[109px] text-base text-nowrap text-[#6D6D6D]">Student</p>
            <p className="min-w-[204px] text-base text-nowrap text-[#6D6D6D]">Generador de exámenes</p>
            <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">9724/45000</p>
            <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">Madrid</p>
            <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">9724/45000</p>
            <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">9724/45000</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllUsers;
