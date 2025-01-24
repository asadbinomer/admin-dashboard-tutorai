import React, { useState } from 'react'
import { Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login'
import School from './pages/School'
import Teachers from './pages/Teachers'
import { SchoolIcon, TeacherIcon, StudentIcon, UserMultipleIcon } from 'hugeicons-react';
import Student from './pages/Student'
import AllUsers from './pages/AllUsers'

function App() {
  const [activePage, setActivePage] = useState('');

  const getSidebarItemClasses = (isActive) => {
    return isActive
      ? "w-full cursor-pointer px-4 py-3.5 flex items-center gap-2.5 text-[#0052CC] bg-[#FAFBFD] rounded-[14px]"
      : "w-full cursor-pointer px-4 py-3.5 flex items-center gap-2.5 text-[#888888] bg-[#fff] rounded-[14px]";
  };

  const handleNavLinkClick = (page) => {
    setActivePage(page);
  };

  const getIconColor = (isActive) => (isActive ? "#0052CC" : "#5D5D5D");

  return (
    <>
    <BrowserRouter>
    <div className="flex gap-6">
      <div className="sidebar min-w-[320px] h-full p-6 bg-[#FFFFFF] rounded-xl">
        <div className="flex flex-col gap-3">
          <NavLink  to="/" className={({ isActive }) => getSidebarItemClasses(isActive)} onClick={() => handleNavLinkClick('schools')}>
          {({ isActive }) => (
            <>
              <SchoolIcon size={24} color={getIconColor(isActive)} variant={"stroke"} />
              Schools
            </>
          )}
          </NavLink>
          <NavLink to="/teachers" className={({ isActive }) => getSidebarItemClasses(isActive)} onClick={() => handleNavLinkClick('teachers')}>
          {({ isActive }) => (
            <>
              <TeacherIcon size={24} color={getIconColor(isActive)} variant={"stroke"} />
              Teachers
            </>
          )}
          </NavLink>
          <NavLink to="/students" className={({ isActive }) => getSidebarItemClasses(isActive)} onClick={() => handleNavLinkClick('students')}>
          {({ isActive }) => (
            <>
              <StudentIcon size={24} color={getIconColor(isActive)} variant={"stroke"} />
              Students
            </>
          )}
          </NavLink>
          <NavLink to="/allusers" className={({ isActive }) => getSidebarItemClasses(isActive)} onClick={() => handleNavLinkClick('allusers')}>
          {({ isActive }) => (
            <>
              <UserMultipleIcon size={24} color={getIconColor(isActive)} variant={"stroke"} />
              All Users
            </>
          )}
          </NavLink>
        </div>
      </div>
      <Routes>
          <Route path="/" element={<School />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Student />} />
          <Route path="/allusers" element={<AllUsers />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App