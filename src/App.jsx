import React, { useState } from 'react'
import { Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login'
import School from './pages/School'
import Teachers from './pages/Teachers'
import Student from './pages/Student'
import AllUsers from './pages/AllUsers'
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';

function App() {

  return (
    <BrowserRouter>
      <div className="w-full bg-[#FBFCFC] p-6" style={{ height: "100vh", overflow: "hidden" }}>
        <Navbar/>
        <div className="flex gap-6 h-full">
          <Sidebar/>
          <div className="w-full overflow-x-hidden overflow-y-scroll scrollbar"  style={{ height: `calc(100vh - 156px)` }} >
          <Routes>
            <Route path="/" element={<School />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Student />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App