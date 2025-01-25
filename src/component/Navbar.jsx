import { Notification02Icon } from 'hugeicons-react'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div
  className="flex items-center justify-between max-sm:p-[8px] sticky top-0 z-1 max-sm:gap-[12px] gap-[24px] rounded-[18px] bg-white p-[12px] mb-6"
  style={{ opacity: 1, transform: "none" }}
>
  <img src="/images/navlogo.svg" className='slect-none' draggable={false} alt="" />
  <div
    className="flex items-center w-full gap-[10px] max-w-[500px] rounded-[12px] border-[1px] p-[14px]
    max-sm:p-[10px] max-sm:gap-[8px] 
    max-md:p-[12px] max-md:gap-[10px]
    max-lg:p-[14px] max-lg:gap-[12px]
    bg-[#FBFBFB] border-[#E7E7E7] "
  >
    <span className="text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="currentColor"
        className=""
      >
        <path d="M17.5 17.5L22 22" stroke="currentColor" />
        <path
          d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
          stroke="currentColor"
        />
      </svg>
    </span>
    <input
      name=""
      id="search"
      type="text"
      placeholder="Buscar..."
      className="w-full bg-transparent text-[#444] outline-none placeholder:text-[#999999] 
    max-sm:text-[12px]
    max-md:text-[14px]
    max-lg:text-[16px]
    "
      aria-label="Buscar..."
      defaultValue=""
    />
  </div>
  <div className="flex items-center gap-[24px]">
    <Notification02Icon color='#5D5D5D' className='cursor-pointer' />
    <div className="flex max-sm:h-[40px] max-sm:w-[40px] h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] bg-[#454545]">
      <span className="text-[20px] font-[500] text-[#FFF]">A</span>
    </div>
  </div>
</div>

    </>
  )
}

export default Navbar