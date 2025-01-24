import React from 'react'

const Student = () => {
  return (
    <>
      <div className="w-full p-6 flex flex-col gap-6 relative">
      <img src="/images/student.png" className="absolute right-0 top-0" alt="" />
      <div className="flex flex-col gap-3">
        <h4 className="text-[24px] font-medium text-[#454545]">Student</h4>
        <p className="text-sm text-[#888888]">Comprehensive List of Teachers Enrolled in the website</p>
      </div>
      <div className="w-full p-5 flex gap-4 bg-[#FBFCFC] rounded-xl">
        <div className="w-full flex flex-col gap-2 w-[405px]">
          <span className="text-sm text-[#888888]">School</span>
          <div className="px-3.5 py-3 w-full flex items-center justify-between text-[#888888] bg-[#fff] rounded-xl min-h-[48px]">Cambridge International School <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M18.3333 9.00005C18.3333 9.00005 13.9144 15 12.3333 15C10.7521 15 6.33325 9 6.33325 9" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
        <div className="w-full flex flex-col gap-2 w-[405px]">
          <span className="text-sm text-[#888888]">Class</span>
          <div className="px-3.5 py-3 w-full flex items-center justify-between text-[#888888] bg-[#fff] rounded-xl min-h-[48px]">A <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M18.3333 9.00005C18.3333 9.00005 13.9144 15 12.3333 15C10.7521 15 6.33325 9 6.33325 9" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
        <div className="w-full flex flex-col gap-2 w-[405px]">
          <span className="text-sm text-[#888888]">Search Teacher</span>
          <div className="px-3.5 py-3 w-full flex items-center justify-between text-[#888888] bg-[#fff] rounded-xl min-h-[48px]">Alex <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><path d="M18.3333 9.00005C18.3333 9.00005 13.9144 15 12.3333 15C10.7521 15 6.33325 9 6.33325 9" stroke="#5D5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        </div>
      </div>      
      <div className="flex flex-col gap-2 bg-[#FBFCFC] p-5 rounded-xl">
        <div className="px-6 py-4 flex justify-between gap-4 bg-[#fff] rounded-[10px]">
        <p className="min-w-[185px] text-base text-nowrap text-[#6D6D6D]">
          Asignatura
        </p>
        <p className="min-w-[165px] text-base text-nowrap text-[#6D6D6D]">
        Father Name
        </p>
        <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">
          1er Trimestre
        </p>
        <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">
          2º Trimestre
        </p>
        <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">
          3er Trimestre
        </p>
        <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">
          Nota Final
        </p>
        <p className="min-w-[140px] text-base text-nowrap text-[#6D6D6D]">
          Calificación
        </p>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
        <div className="w-full flex items-center justify-between gap-4 px-6 py-4">
        <div className="w-[185px]">
          <span className="flex items-center gap-2 text-[#6D6D6D] text-nowrap">
            John
          </span>
        </div>
        <span className="min-w-[165px] text-sm text-[#888888]">
        Wick
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
        7 
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          8
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <span className="min-w-[140px] text-sm text-[#888888]">
          7.7
        </span>
        <div className="w-[140px]">
          <button
            className="px-3.5 py-1.5 text-xs rounded-full"
            style={{
              backgroundColor: "rgb(234, 242, 255)",
              color: "rgb(93, 93, 93)"
            }}
          >
            Notable
          </button>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Student