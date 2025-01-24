import React from 'react'

const Login = () => {
  return (
    <>
    <div className="w-full h-full p-9 max-h-[100vh] flex bg-[#FBFCFC]">
      <div className="rounded-[38px] relative">
         <img src="/images/logo.png" className='absolute top-6 left-6' alt="" />
         <img src="/images/hero.png" className='min-h-full object-cover object-center rounded-[38px]' alt="" />
      </div>
      <div className="w-full flex items-center justify-center">
         <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-3">
               <h1 className='text-[32px] font-[500] text-[#5D5D5D]'>Welcome Back!</h1>
               <p className='text-[18px] text-[#B0B0B0]'>Log In to get started using Tututor AI.</p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-[455px] px-[24px] py-[22px] bg-white rounded-[24px]">
                  <input type="text" className="text-[#B0B0B0] w-full focus:outline-none" placeholder="Name" />
              </div>
              <div className="w-[455px] px-[24px] py-[22px] bg-white rounded-[24px]">
                  <input type="text" className="text-[#B0B0B0] w-full focus:outline-none" placeholder="Email" />
              </div>
              <div className="flex flex-col items-end gap-[12px]">
                <div className="w-[455px] px-[24px] py-[22px] bg-white rounded-[24px]">
                  <input type="text" className="text-[#B0B0B0] w-full focus:outline-none" placeholder="Password" />
                </div>
                <a className="text-[18px] underline underline-[#B0B0B0] cursor-pointer text-[#B0B0B0]">Forget Password?</a>
              </div>
              <div className="w-fit px-[51px] py-[16px] text-[18px] font-medium text-white bg-[#0052CC] rounded-[20px]">Log In</div>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default Login