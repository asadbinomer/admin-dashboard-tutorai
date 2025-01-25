import React, { useState } from 'react'
import { Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { SchoolIcon, TeacherIcon, StudentIcon, UserMultipleIcon } from 'hugeicons-react';

const Sidebar = () => {

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
      <div className="sidebar min-w-[320px] sticky top-0 z-1 p-6 bg-[#fff] rounded-xl" style={{ height: `calc(100vh - 156px)` }}>
        <div className="flex flex-col items-center gap-3">
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
          <div className="min-w-[170px] max-w-[170px] h-[1px] bg-[#F6F6F6]"></div>
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
    </>
  )
}

export default Sidebar