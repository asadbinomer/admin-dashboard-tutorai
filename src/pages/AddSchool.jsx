import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

function AddSchool({toggleAddSchool}) {
  return (
    <>
      <div className="absolute top-0 left-0 inset-0 min-w-[100%] h-full container bg-[#000] bg-opacity-70 flex items-center justify-center container">
        <span onClick={toggleAddSchool} className="absolute inset-0"></span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-[902px] main h-[470px] z-50 p-[36px] flex flex-col items-center text-center justify-between bg-white rounded-[32px]"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <h4 className="text-[24px] font-medium text-[##454545]">
              Add Schools
            </h4>
            <p className="text-sm text-[#888888] max-w-[440px]">
              Add a new school! Fill in the details below, including the name
              and address. Click 'Save' when you're done.
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-6">
            <div className="w-[151px] h-[114px] flex items-center justify-center border-[1px] border-[#888888] border-dashed rounded-[12px] cursor-pointer">
              <svg
                width="38"
                height="39"
                viewBox="0 0 38 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.875 14.75C13.1867 14.75 14.25 13.6867 14.25 12.375C14.25 11.0633 13.1867 10 11.875 10C10.5633 10 9.5 11.0633 9.5 12.375C9.5 13.6867 10.5633 14.75 11.875 14.75Z"
                  stroke="#5D5D5D"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 4.45837C11.9093 4.45837 8.36398 4.45837 6.16117 6.66117C3.95837 8.86398 3.95837 12.4093 3.95837 19.5C3.95837 26.5907 3.95837 30.1361 6.16117 32.339C8.36398 34.5417 11.9093 34.5417 19 34.5417C26.0907 34.5417 29.6361 34.5417 31.839 32.339C34.0417 30.1361 34.0417 26.5907 34.0417 19.5"
                  stroke="#5D5D5D"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
                <path
                  d="M7.91663 33.75C14.8397 25.4771 22.6006 14.5665 34.0377 21.9422"
                  stroke="#5D5D5D"
                  stroke-width="1.2"
                />
                <path
                  d="M29 3.5V13.5"
                  stroke="#5D5D5D"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24 8.5H34"
                  stroke="#5D5D5D"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-full px-6 py-5 bg-[#FCFCFC] rounded-[24px]">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent focus:outline-none placeholder:text-[#B0B0B0] text-[#B0B0B0]"
              />
            </div>
          </div>
          <div
            className="cursor-pointer px-4 py-3 flex items-center gap-1.5 text-sm text-white bg-[#0052CC] rounded-[10px]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: "2.5deg" }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0076 14.5878C19.7514 16.1977 18.4823 17.4602 16.8642 17.7152C16.5703 17.7615 16.219 17.7615 15.5163 17.7615C14.8138 17.7615 14.4624 17.7615 14.1685 17.7152C12.5503 17.4602 11.2814 16.1977 11.0251 14.5878C10.9785 14.2954 10.9785 13.9459 10.9785 13.2468V10.2372M10.9785 10.2372V8.73227C10.9785 8.03326 10.9785 7.68374 11.0251 7.39131C11.2814 5.78149 12.5503 4.51894 14.1685 4.26398C14.4624 4.21765 14.8138 4.21765 15.5163 4.21765C16.219 4.21765 16.5703 4.21765 16.8642 4.26398C18.4823 4.51894 19.7514 5.78149 20.0076 7.39131C20.1892 8.53164 20.2799 9.10182 19.9237 9.60117C19.8749 9.66946 19.8036 9.75215 19.7431 9.81054C19.3011 10.2372 18.5937 10.2372 17.1788 10.2372H10.9785Z"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.11998 6.43275C2.50864 5.74399 3.57819 4.51439 4.94165 4.27358C6.3051 4.03277 8.65296 3.91245 9.81544 5.34156C10.978 6.77066 10.978 8.28903 10.978 10.2635M10.978 10.2635C10.978 11.4012 10.9458 11.7655 10.8415 12.5156C10.718 13.4041 10.6492 15.028 9.57427 16.1963C9.16238 16.6439 8.66047 17.0122 8.12114 17.2935C7.45137 17.643 6.48594 17.9543 5.46855 17.8555C3.55634 17.6697 2.11997 16.572 1.86346 14.6283C1.69615 13.3606 2.29637 12.0526 2.93616 11.4012C3.57596 10.7497 4.36878 10.1914 5.73451 10.2635C7.00186 10.3305 9.7587 10.279 10.978 10.2635Z"
                stroke="white"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Words Used
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default AddSchool;
