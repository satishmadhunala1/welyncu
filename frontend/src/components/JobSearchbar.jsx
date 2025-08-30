import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";

const JobSearchbar = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [searchData, setSearchData] = useState({
    keyword: '',
    location: '',
    category: '',
    salary: ''
  });

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchData);
    // Here you would typically implement the search functionality
  };

  return (
    <div className="relative">
      <div className="bg-transparent px-8 py-6 flex items-center justify-between rounded-2xl  border border-gray-800">
        {/* Search Keyword */}
        <div className='flex items-center gap-3 flex-1'>
          <div className={`p-3 rounded-full transition-all duration-300 ${focusedField === 'keyword' ? 'bg-blue-100 text-blue-600 scale-110' : 'bg-gray-100 text-gray-600'}`}>
            <CiSearch size={20} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">What</label>
            <input 
              type="text" 
              placeholder="Job title, keywords, or company" 
              className='bg-transparent focus:outline-none text-gray-100 w-full placeholder-gray-400'
              onFocus={() => setFocusedField('keyword')}
              onBlur={() => setFocusedField(null)}
              value={searchData.keyword}
              onChange={(e) => handleInputChange('keyword', e.target.value)}
            />
          </div>
        </div>
        
        <div className='h-10 w-[1px] bg-gray-200 mx-2'/>
        
        {/* Location */}
        <div className='flex items-center gap-3 flex-1'>
          <div className={`p-3 rounded-full transition-all duration-300 ${focusedField === 'location' ? 'bg-blue-100 text-blue-600 scale-110' : 'bg-gray-100 text-gray-600'}`}>
            <FaLocationDot size={18} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Where</label>
            <input 
              type="text" 
              placeholder="City, state, or remote" 
              className='bg-transparent focus:outline-none text-gray-100 w-full placeholder-gray-400'
              onFocus={() => setFocusedField('location')}
              onBlur={() => setFocusedField(null)}
              value={searchData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>
        </div>
        
        <div className='h-10 w-[1px] bg-gray-200 mx-2'/>
        
        {/* Job Type */}
        <div className='flex items-center gap-3 flex-1'>
          <div className={`p-3 rounded-full transition-all duration-300 ${focusedField === 'category' ? 'bg-blue-100 text-blue-600 scale-110' : 'bg-gray-100 text-gray-600'}`}>
            <FaSuitcase size={18} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Job Type</label>
            <select 
              className='bg-transparent focus:outline-none text-gray-400 w-full cursor-pointer'
              onFocus={() => setFocusedField('category')}
              onBlur={() => setFocusedField(null)}
              value={searchData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
            >
              <option value="">Any type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>
        
        <div className='h-10 w-[1px] bg-gray-200 mx-2'/>
        
        {/* Salary */}
        <div className='flex items-center gap-3 flex-1'>
          <div className={`p-3 rounded-full transition-all duration-300 ${focusedField === 'salary' ? 'bg-blue-100 text-blue-600 scale-110' : 'bg-gray-100 text-gray-600'}`}>
            <SiCashapp size={18} />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">Salary</label>
            <select 
              className='bg-transparent focus:outline-none text-gray-400 w-full cursor-pointer'
              onFocus={() => setFocusedField('salary')}
              onBlur={() => setFocusedField(null)}
              value={searchData.salary}
              onChange={(e) => handleInputChange('salary', e.target.value)}
            >
              <option value="">Any salary</option>
              <option value="0-30000">$0 - $30,000</option>
              <option value="30000-50000">$30,000 - $50,000</option>
              <option value="50000-75000">$50,000 - $75,000</option>
              <option value="75000-100000">$75,000 - $100,000</option>
              <option value="100000+">$100,000+</option>
            </select>
          </div>
        </div>
        
        {/* Search Button */}
        {/* <button 
          onClick={handleSearch}
          className="ml-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <CiSearch size={20} />
          Search
        </button> */}
      </div>
      
    
    </div>
  )
}

export default JobSearchbar