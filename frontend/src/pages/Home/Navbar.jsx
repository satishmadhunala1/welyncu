import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiSwapBold, PiSignOut, PiUser, PiGear, PiQuestion } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLink } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black/20 px-6 md:px-10 py-4 backdrop-blur flex items-center justify-between sticky top-0 left-0 w-full z-50 border-b border-gray-800">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <FaLink size={30} className="text-green-600 md:hidden" />
          <FaLink size={30} className="text-green-600 hidden md:block" />
          <h2 className="font-bold text-xl md:text-[25px] 2xl:text-[30px] uppercase">WeLyncu</h2>
        </div>
      </Link>

    


     {/* Desktop Profile */}
<div className="hidden md:flex items-center gap-10 cursor-pointer">
  <ul className="hidden md:flex items-center gap-8">
      <Link to="/feed">
      <li className="cursor-pointer text-gray-300 hover:text-white transition">Feed</li>
    </Link>
      <Link to="/ai">
      <li className="cursor-pointer text-gray-300 hover:text-white transition">AI Skill</li>
    </Link>
    <Link to="/jobs">
      <li className="cursor-pointer text-gray-300 hover:text-white transition">Jobs</li>
    </Link>
    <Link to="/connect">
      <li className="cursor-pointer text-gray-300 hover:text-white transition">Connect</li>
    </Link>
    <Link to="/resume">
      <li className="cursor-pointer text-gray-300 hover:text-white transition">Build Resume</li>
    </Link>
  </ul>

  {/* Profile with dropdown */}
  <div className="flex items-center gap-2 relative group">
    <div className="relative">
      <img
        src="/undertaker.jpg"
        className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
        alt="Profile"
      />
      <span className="absolute top-0 right-0 block w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
    </div>
    <div>
      <p className="text-white text-sm font-semibold">Undertaker</p>
      <p className="text-gray-400 text-xs">undertaker@skillswap.com</p>
    </div>

    {/* Dropdown menu */}
    <div className="absolute top-full right-0 mt-2 w-56 bg-[#181818] border border-gray-700 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
      <Link
        to="/dashboard"
        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white"
      >
        <PiUser className="mr-2" size={18} /> Profile
      </Link>
      <Link
        to="/settings"
        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white"
      >
        <PiGear className="mr-2" size={18} /> Settings
      </Link>
      <Link
        to="/help"
        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white"
      >
        <PiQuestion className="mr-2" size={18} /> Help & Support
      </Link>
      <button
        onClick={handleLogout}
        className="flex items-center w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300"
      >
        <PiSignOut className="mr-2" size={18} /> Logout
      </button>
    </div>
  </div>
</div>



      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-300 hover:text-white"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#181818] shadow-xl z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <FiX size={26} />
          </button>
        </div>

        {/* Profile */}
        <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="px-6 py-5 bg-[#181818] border-b border-gray-700 flex items-center gap-3">
            <div className="relative">
              <img
                src="/undertaker.jpg"
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                alt="Profile"
              />
              <span className="absolute top-0 right-0 block w-3 h-3 bg-green-500 rounded-full border-2 border-[#181818]" />
            </div>
            <div>
              <p className="text-white font-semibold">Undertaker</p>
              <p className="text-gray-400 text-sm truncate">undertaker@skillswap.com</p>
            </div>
          </div>
        </Link>

        {/* Menu Links */}
        <div className="flex bg-[#181818] flex-col px-6 py-4 space-y-4">
          <Link to="/ai" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">AI Teach</Link>
          <Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Jobs</Link>
          <Link to="/connect" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Connect</Link>
          <Link to="/community" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Community</Link>
          <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Settings</Link>
          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Profile</Link>
          <Link to="/help" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Help & Support</Link>
          <div className=" w-full border-t border-gray-700 p py-4">
            <Link to="/login">
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left text-sm text-red-400 hover:text-red-300"
              >
                <PiSignOut className="mr-3" size={18} /> Logout
              </button>
            </Link>
          </div>
        </div>

        {/* Logout */}
        {/* <div className="absolute bottom-0 w-full border-t border-gray-700 px-6 py-4">
          <Link to="/login">
            <button
              onClick={handleLogout}
              className="flex items-center w-full text-left text-sm text-red-400 hover:text-red-300"
            >
              <PiSignOut className="mr-3" size={18} /> Logout
            </button>
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
