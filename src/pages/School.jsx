import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AddSchool from './AddSchool.jsx'

const School = () => {

  const [showAddSchool, setShowAddSchool] = useState(false);

  const toggleAddSchool = () => {
    setShowAddSchool(!showAddSchool);
  };

  return (
    <>
      <div className="w-full p-6 flex flex-col gap-6 relative overflow-hidden">
        <img src="/images/school.png" className="absolute right-0 z-[-1] top-0 select-none" draggable={false} alt="" />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] font-medium text-[#454545]">Schools</h2>
            <p className="text-[14px] text-[#888888]">Comprehensive List of Schools Enrolled in the website</p>
          </div>
          <div className="w-fit px-4 py-3 flex cursor-pointer gap-1.5 bg-[#0052CC] text-[#E7E7E7] rounded-[10px]"  onClick={toggleAddSchool} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, rotate: "2.5deg" }} transition={{ ease: "easeInOut", duration: 0.1 }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 8V16M16 12H8" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="white" stroke-width="1.2"/></svg> Add School</div>
        </div>
        <div className="grid grid-cols-2 gap-6 justify-between">
          <div className="w-full p-5 flex flex-col gap-5 bg-[#FBFCFC] rounded-xl">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-[46px]" src="/images/cambridge.png" alt="" />
                <h4 className="text-[18px] font-medium text-[#5D5D5D]">Cambridge International (CIB)</h4>
              </div>
              <div className="w-fit px-4 py-3 flex items-center gap-1.5 text-sm text-[#6D6D6D] bg-white rounded-[10px] cursor-pointer">View More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9.00005 6.5C9.00005 6.5 15 10.9189 15 12.5C15 14.0812 9 18.5 9 18.5" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 flex flex-col gap-5 bg-[#FBFCFC] rounded-xl">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-[46px]" src="/images/cambridge.png" alt="" />
                <h4 className="text-[18px] font-medium text-[#5D5D5D]">Cambridge International (CIB)</h4>
              </div>
              <div className="w-fit px-4 py-3 flex items-center gap-1.5 text-sm text-[#6D6D6D] bg-white rounded-[10px] cursor-pointer">View More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9.00005 6.5C9.00005 6.5 15 10.9189 15 12.5C15 14.0812 9 18.5 9 18.5" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 flex flex-col gap-5 bg-[#FBFCFC] rounded-xl">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-[46px]" src="/images/cambridge.png" alt="" />
                <h4 className="text-[18px] font-medium text-[#5D5D5D]">Cambridge International (CIB)</h4>
              </div>
              <div className="w-fit px-4 py-3 flex items-center gap-1.5 text-sm text-[#6D6D6D] bg-white rounded-[10px] cursor-pointer">View More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9.00005 6.5C9.00005 6.5 15 10.9189 15 12.5C15 14.0812 9 18.5 9 18.5" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 flex flex-col gap-5 bg-[#FBFCFC] rounded-xl">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-[46px]" src="/images/cambridge.png" alt="" />
                <h4 className="text-[18px] font-medium text-[#5D5D5D]">Cambridge International (CIB)</h4>
              </div>
              <div className="w-fit px-4 py-3 flex items-center gap-1.5 text-sm text-[#6D6D6D] bg-white rounded-[10px] cursor-pointer">View More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9.00005 6.5C9.00005 6.5 15 10.9189 15 12.5C15 14.0812 9 18.5 9 18.5" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 flex flex-col gap-5 bg-[#FBFCFC] rounded-xl">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-[46px]" src="/images/cambridge.png" alt="" />
                <h4 className="text-[18px] font-medium text-[#5D5D5D]">Cambridge International (CIB)</h4>
              </div>
              <div className="w-fit px-4 py-3 flex items-center gap-1.5 text-sm text-[#6D6D6D] bg-white rounded-[10px] cursor-pointer">View More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9.00005 6.5C9.00005 6.5 15 10.9189 15 12.5C15 14.0812 9 18.5 9 18.5" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5 flex flex-col gap-5 bg-[#FBFCFC] rounded-xl">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-[46px]" src="/images/cambridge.png" alt="" />
                <h4 className="text-[18px] font-medium text-[#5D5D5D]">Cambridge International (CIB)</h4>
              </div>
              <div className="w-fit px-4 py-3 flex items-center gap-1.5 text-sm text-[#6D6D6D] bg-white rounded-[10px] cursor-pointer">View More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9.00005 6.5C9.00005 6.5 15 10.9189 15 12.5C15 14.0812 9 18.5 9 18.5" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
              <div className="w-[133px] p-5 flex flex-col items-center text-center gap-1 bg-[#fff] rounded-xl">
                <h3 className="text-[24px] text-[#5D5D5D]">31</h3>
                <p className="text-sm text-[#888888]">Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddSchool ? (
        <div className="w-full h-full absolute top-0 left-0">
          <AddSchool toggleAddSchool={toggleAddSchool} />
        </div>
        ) : (
          <>
          </>
        )}
    </>
  )
}

export default School