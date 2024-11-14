import React from 'react';
import { FaHome } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../App.css';
function DashboardMenuBar() {
  return (
    <div className="w-[20vw] h-[96vh] menu_bg_color text-white flex flex-col items-center py-6">
      {/* Logo Section */}
      <div className="mb-6">
        <img src={logo} alt="Logo" className="w-auto h-16 " />
      </div>

      {/* Divider Line */}
      <div className="w-60 border-b border-gray-600 mb-6"></div>

      {/* Menu Button */}
      <div className="w-full flex items-center space-x-2 px-4 py-3 hover:bg-gray-700 cursor-pointer">
        <FaHome className="text-xl" />
        <span className="text-lg">Dashboard</span>
      </div>
    </div>
  );
}

export default DashboardMenuBar;
