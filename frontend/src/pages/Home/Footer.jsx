import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='px-6 md:px-10 py-10 relative border border-gray-800 mt-10 '>
      
      {/* Social Icons */}
      <div className='flex flex-wrap items-center gap-5 md:gap-7 mb-10'>
        <FaInstagram size={28} className='text-gray-400 hover:cursor-pointer hover:scale-110 transition-transform'/>
        <AiOutlineLinkedin size={28} className='text-gray-400 hover:cursor-pointer hover:scale-110 transition-transform'/>
        <BsTwitterX size={28} className='text-gray-400 hover:cursor-pointer hover:scale-110 transition-transform'/>
        <FaFacebook size={28} className='text-gray-400 hover:cursor-pointer hover:scale-110 transition-transform'/>
        <FaYoutube size={28} className='text-gray-400 hover:cursor-pointer hover:scale-110 transition-transform'/>
        <FaGithub size={28} className='text-gray-400 hover:cursor-pointer hover:scale-110 transition-transform'/>
      </div>

      {/* Main Footer Grid */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
        
        {/* CONTACT */}
        <div>
          <h2 className='text-lg font-bold'>CONTACT</h2>
          <div className='mt-5 flex flex-col gap-3 text-sm'>
            <p className='font-semibold text-gray-400 hover:text-gray-800 cursor-pointer'>+91 9876543210</p>
            <p className='font-semibold text-gray-400 hover:text-gray-800 cursor-pointer underline'>Contact Us</p>
            <p className='font-semibold text-gray-400 leading-[20px] hover:text-gray-800 cursor-pointer'>
              Hitech City Sector 1 <br /> Eagle Eye Technologies
            </p>
          </div>
        </div>

        {/* WHY US */}
        <div>
          <h2 className='text-lg font-bold'>WHY US</h2>
          <div className='mt-5 flex flex-col gap-3 text-sm'>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Solutions</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Partners</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Customers</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Products</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Success Stories</p>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className='text-lg font-bold'>COMPANY</h2>
          <div className='mt-5 flex flex-col gap-3 text-sm'>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>About Us</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Blogs</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Compliance & Privacy</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Management</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Events</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Careers</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Newsroom</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Investor Relations</p>
          </div>
        </div>

        {/* GET STARTED */}
        <div>
          <h2 className='text-lg font-bold'>GET STARTED</h2>
          <div className='mt-5 flex flex-col gap-3 text-sm'>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Login</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Pricing</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Support Plans</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Documentation</p>
            <p className='font-semibold text-gray-400 hover:underline cursor-pointer'>Talk to Us</p>
          </div>
        </div>
      </div>

      {/* Policies Row */}
      <div className='mt-10 flex flex-wrap gap-x-6 gap-y-3'>
        <p className='text-sm text-gray-400 hover:underline cursor-pointer'>Privacy Policy</p>
        <p className='text-sm text-gray-400 hover:underline cursor-pointer'>Cookie Policy</p>
        <p className='text-sm text-gray-400 hover:underline cursor-pointer'>Terms & Conditions</p>
        <p className='text-sm text-gray-400 hover:underline cursor-pointer'>Acceptable Use Policy</p>
        <p className='text-sm text-gray-400 hover:underline cursor-pointer'>Sitemap</p>
        <p className='text-sm text-gray-400 hover:underline cursor-pointer'>Report Abuse</p>
        <p className='text-sm text-gray-400 hover:underline cursor-pointer'>Manage Cookies</p>
      </div>

      {/* Bottom Note */}
      <p className='text-gray-600 text-xs md:text-sm mt-8'>
        &copy; 2024 Skill Exchange Platform. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
