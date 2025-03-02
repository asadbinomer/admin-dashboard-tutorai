import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, BrowserRouter, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import School from './pages/School';
import Teachers from './pages/Teachers';
import Student from './pages/Student';
import AllUsers from './pages/AllUsers';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Dashboard from './pages/Dashboard';
import AllTools from './pages/AllTools';
import './App.css';

// Custom hook to handle scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainContent = document.querySelector('.scrollbar');
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return null;
};



// noh
function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-[#FBFCFC] p-6" style={{ height: "100vh", overflow: "hidden" }}>
        <Navbar />
        <div className="flex gap-6 h-full">
          <Sidebar />
          <div 
            className="w-full overflow-x-hidden overflow-y-scroll scrollbar" 
            style={{ height: `calc(100vh - 156px)` }}
          >
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/school" element={<School />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<Student />} />
              <Route path="/allusers" element={<AllUsers />} />
              <Route path="/alltools" element={<AllTools />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;