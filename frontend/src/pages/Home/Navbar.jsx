import React, { useState, useRef, useEffect } from 'react';
import { PiSwapBold, PiUser, PiSignOut, PiGear, PiQuestion } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscapePress = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapePress);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    setIsDropdownOpen(false);
  };

  return (
    <div className='bg-black/20 px-6 md:px-10 py-4 backdrop-blur flex items-center justify-between absolute sticky top-0 left-0 w-full z-50'>
      <Link to={'/'}>
        <div className='flex items-center gap-2'>
        <PiSwapBold size={30} className='text-green-600' />
        <h2 className='font-bold text-xl md:text-[25px]'>SKILLSWAP</h2>
      </div>
      </Link>

      <div className='flex items-center justify-between gap-10 md:gap-20'>
        <ul className='hidden md:flex items-center gap-6 md:gap-8'>
          <Link to={'/'}>
            <li className='cursor-pointer text-gray-300 hover:text-white transition-colors duration-200'>Home</li>
          </Link>
          <Link to={'/jobs'}>
            <li className='cursor-pointer text-gray-300 hover:text-white transition-colors duration-200'>Jobs</li>
          </Link>
          <Link to={'/connect'}>
            <li className='cursor-pointer text-gray-300 hover:text-white transition-colors duration-200'>Connect</li>
          </Link>
           <Link to={'/community'}>
            <li className='cursor-pointer text-gray-300 hover:text-white transition-colors duration-200'>Community</li>
          </Link>
        </ul>
        
        <div className="flex items-center gap-2 relative" ref={dropdownRef}>
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={toggleDropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <div className="relative">
              <img
                src="/hero3.jpg"
                className="w-9 h-9 md:w-[40px] md:h-[40px] rounded-full object-cover border-2 border-transparent group-hover:border-green-400 transition-all duration-300"
                alt="Profile"
              />
              {/* green dot */}
              <span className="absolute top-0 right-0 block w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <p className="text-xs md:text-[13px] font-semibold hidden sm:block">Undertaker</p>
            <svg 
              className={`w-4 h-4 text-gray-300 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Dropdown Menu */}
          <div 
            className={`absolute top-full right-0 mt-2 w-56 bg-[#181818] backdrop-blur-lg border border-gray-700 bg-opacity-95 rounded-lg shadow-xl py-2 z-50 transition-all duration-300 ease-out ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* User info section */}
            <div className="px-4 py-3 border-b border-gray-700">
              <p className="text-sm font-medium text-white">Undertaker</p>
              <p className="text-xs text-gray-400 truncate">undertaker@skillswap.com</p>
            </div>
            
            {/* Menu items */}
            <Link 
              to="/dashboard" 
              className="flex items-center px-4 py-3 text-sm text-gray-300  transition-colors duration-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              <PiUser className="mr-3" size={18} />
              Profile
            </Link>
            
            <Link 
              to="/settings" 
              className="flex items-center px-4 py-3 text-sm text-gray-300  transition-colors duration-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              <PiGear className="mr-3" size={18} />
              Settings
            </Link>
            
            <Link 
              to="/help" 
              className="flex items-center px-4 py-3 text-sm text-gray-300  transition-colors duration-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              <PiQuestion className="mr-3" size={18} />
              Help & Support
            </Link>
            
            <div className="px-4 py-3 border-t border-gray-700 cursor-pointer">
             <Link to={"/login"}>
               <button
                onClick={handleLogout}
                className="flex items-center w-full cursor-pointer text-left text-sm text-red-400 hover:text-red-300 transition-colors duration-200"
              >
                <PiSignOut className="mr-3" size={18} />
                Logout
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;