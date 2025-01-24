import React from 'react'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const SchoolDetailModel = () => {

    const [isVisible, setIsVisible] = useState(true);
    const mainRef = useRef(null);
  
    const handleClickOutside = (event) => {
      if (mainRef.current && !mainRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <>
    {isVisible && (
    <div className="w-full h-[100%] py-[105.5px] bg-[#3D3D3D] flex items-center justify-center">
      <motion.div ref={mainRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-[902px] h-[700px] p-[36px] flex flex-col gap-[32px] bg-white rounded-[32px]">
        <div className="w-full flex flex-col gap-5 rounded-xl">
          <div className="flex items-center gap-3">
            <img className="w-[46px]" src="/images/cambridge.png" alt="" />
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
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div className="cursor-pointer px-4 py-3 flex items-center gap-1.5 text-sm text-white bg-[#0052CC] rounded-[10px]"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0076 14.5878C19.7514 16.1977 18.4823 17.4602 16.8642 17.7152C16.5703 17.7615 16.219 17.7615 15.5163 17.7615C14.8138 17.7615 14.4624 17.7615 14.1685 17.7152C12.5503 17.4602 11.2814 16.1977 11.0251 14.5878C10.9785 14.2954 10.9785 13.9459 10.9785 13.2468V10.2372M10.9785 10.2372V8.73227C10.9785 8.03326 10.9785 7.68374 11.0251 7.39131C11.2814 5.78149 12.5503 4.51894 14.1685 4.26398C14.4624 4.21765 14.8138 4.21765 15.5163 4.21765C16.219 4.21765 16.5703 4.21765 16.8642 4.26398C18.4823 4.51894 19.7514 5.78149 20.0076 7.39131C20.1892 8.53164 20.2799 9.10182 19.9237 9.60117C19.8749 9.66946 19.8036 9.75215 19.7431 9.81054C19.3011 10.2372 18.5937 10.2372 17.1788 10.2372H10.9785Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.11998 6.43275C2.50864 5.74399 3.57819 4.51439 4.94165 4.27358C6.3051 4.03277 8.65296 3.91245 9.81544 5.34156C10.978 6.77066 10.978 8.28903 10.978 10.2635M10.978 10.2635C10.978 11.4012 10.9458 11.7655 10.8415 12.5156C10.718 13.4041 10.6492 15.028 9.57427 16.1963C9.16238 16.6439 8.66047 17.0122 8.12114 17.2935C7.45137 17.643 6.48594 17.9543 5.46855 17.8555C3.55634 17.6697 2.11997 16.572 1.86346 14.6283C1.69615 13.3606 2.29637 12.0526 2.93616 11.4012C3.57596 10.7497 4.36878 10.1914 5.73451 10.2635C7.00186 10.3305 9.7587 10.279 10.978 10.2635Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Words Used</div>
            <div className="cursor-pointer px-4 py-3 flex items-center gap-1.5 text-sm text-[#888888] bg-[#FAFBFD] rounded-[10px]"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9166 10.0833L16.5 5.5" stroke="#6D6D6D" stroke-width="1.2"/><path d="M17.4167 6.41671L15.5834 4.58337L17.875 3.20837L18.7917 4.12504L17.4167 6.41671Z" stroke="#6D6D6D" stroke-width="1.2" stroke-linejoin="round"/><path d="M3.6897 8.22696C2.76298 7.30025 2.5217 5.94766 2.96586 4.79919L4.26935 6.10269H6.10269V4.26935L4.79919 2.96586C5.94766 2.5217 7.30025 2.76298 8.22696 3.6897C9.15402 4.61676 9.39519 5.97001 8.95031 7.11877L14.8813 13.0497C16.03 12.6048 17.3832 12.846 18.3103 13.773C19.237 14.6998 19.4783 16.0523 19.0341 17.2008L17.7306 15.8973H15.8973V17.7306L17.2008 19.0341C16.0523 19.4783 14.6998 19.237 13.773 18.3103C12.8466 17.3839 12.6052 16.032 13.0487 14.8838L7.11619 8.95131C5.96798 9.39482 4.61607 9.15334 3.6897 8.22696Z" stroke="#6D6D6D" stroke-width="1.2" stroke-linejoin="round"/><path d="M11.1861 13.2917L6.04909 18.4288C5.56526 18.9126 4.78082 18.9126 4.29699 18.4288L3.57124 17.7031C3.08742 17.2192 3.08742 16.4348 3.57124 15.9509L8.70832 10.8138" stroke="#6D6D6D" stroke-width="1.2" stroke-linejoin="round"/></svg> Tools Used</div>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-[#FBFCFC] p-5 rounded-xl">
          <div className="px-6 py-4 flex justify-between gap-4 bg-[#fff] rounded-[10px]">
            <p className="min-w-[135px] text-base text-nowrap text-[#6D6D6D]">
            Name
            </p>
            <p className="min-w-[165px] text-base text-nowrap text-[#6D6D6D]">
            Tool Name
            </p>
            <p className="min-w-[109px] text-base text-nowrap text-[#6D6D6D]">
            No of words used
            </p>
          </div>
          <div className="px-6 py-4 flex justify-between gap-4 rounded-[10px]">
            <p className="min-w-[135px] text-base text-nowrap text-[#6D6D6D]">
            John Wick
            </p>
            <p className="min-w-[165px] text-base text-nowrap text-[#6D6D6D]">
            Generador de exámenes ti...
            </p>
            <p className="min-w-[109px] text-base text-nowrap text-[#6D6D6D]">
            1011
            </p>
          </div>
          <div className="px-6 py-4 flex justify-between gap-4 rounded-[10px]">
            <p className="min-w-[135px] text-base text-nowrap text-[#6D6D6D]">
            John Wick
            </p>
            <p className="min-w-[165px] text-base text-nowrap text-[#6D6D6D]">
            Generador de exámenes ti...
            </p>
            <p className="min-w-[109px] text-base text-nowrap text-[#6D6D6D]">
            1011
            </p>
          </div>
          <div className="px-6 py-4 flex justify-between gap-4 rounded-[10px]">
            <p className="min-w-[135px] text-base text-nowrap text-[#6D6D6D]">
            John Wick
            </p>
            <p className="min-w-[165px] text-base text-nowrap text-[#6D6D6D]">
            Generador de exámenes ti...
            </p>
            <p className="min-w-[109px] text-base text-nowrap text-[#6D6D6D]">
            1011
            </p>
          </div>
          <div className="px-6 py-4 flex justify-between gap-4 rounded-[10px]">
            <p className="min-w-[135px] text-base text-nowrap text-[#6D6D6D]">
            John Wick
            </p>
            <p className="min-w-[165px] text-base text-nowrap text-[#6D6D6D]">
            Generador de exámenes ti...
            </p>
            <p className="min-w-[109px] text-base text-nowrap text-[#6D6D6D]">
            1011
            </p>
          </div>
      </div>
      </motion.div>
    </div>
    )}
    </>
  )
}

export default SchoolDetailModel