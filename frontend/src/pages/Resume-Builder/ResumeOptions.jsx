import { useState } from 'react';
import { LuCloudUpload } from "react-icons/lu";
import { RiNewspaperLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ResumeOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen lg:px-10 px-2 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold lg:text-[60px] text-[50px] text-center leading-[55px] ">
          Are you uploading an existing resume?
        </h1>
        <p className="text-center lg:text-[25px] text-[20px] mt-4">
          Just review, edit, and update it with new information
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-10">
        {/* Upload Option */}
        <div 
          className={`relative border-2 p-5 rounded-xl cursor-pointer flex flex-col items-center text-center transition-all duration-300 ${
            selectedOption === 'upload' 
              ? 'border-green-500  shadow-lg scale-100' 
              : 'border-gray-700 hover:border-green-500 hover:shadow-md'
          }`}
          onClick={() => handleOptionSelect('upload')}
        >
          <LuCloudUpload size={80} className="text-red-400"/>
          <h1 className="font-semibold text-[26px] mt-4">Yes, upload from my resume</h1>
          <p className="text-center text-[17px] text-gray-300 mt-2">
            We'll give you expert guidance to fill out your info and enhance your resume, from start to finish
          </p>
          <p className="px-7 py-2 rounded-lg absolute top-0 right-0 bg-green-600 text-white font-medium">
            Saves Time
          </p>
          
          {/* Selection Indicator */}
          {selectedOption === 'upload' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
          )}
        </div>

        {/* Start from Scratch Option */}
        <div 
          className={`relative border-2 p-5 rounded-xl cursor-pointer flex flex-col items-center text-center transition-all duration-300 ${
            selectedOption === 'scratch' 
              ? 'border-green-500  shadow-lg scale-100' 
              : 'border-gray-700 hover:border-green-500 hover:shadow-md'
          }`}
          onClick={() => handleOptionSelect('scratch')}
        >
          <RiNewspaperLine size={80} className="text-red-400"/>
          <h1 className="font-semibold text-[26px] mt-4">No, start from scratch</h1>
          <p className="text-center text-[17px] text-gray-300 mt-2">
            We'll guide you through the whole process so your skills can shine
          </p>
          
          {/* Selection Indicator */}
          {selectedOption === 'scratch' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-5 mt-10">
       <Link to={"/choose-template"}>
        <button className="px-8 py-3 bg-gray-600 cursor-pointer text-white rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium min-w-[120px]">
          Back
        </button>
       </Link>
     <Link to={"/resume-builder"}>
        <button 
          className={`px-8 py-3 cursor-pointer rounded-lg transition-colors text-lg font-medium min-w-[120px] ${
            selectedOption 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-400 text-gray-200 cursor-not-allowed'
          }`}
          disabled={!selectedOption}
        >
          Next
        </button>
     </Link>
      </div>
    </div>
  );
};

export default ResumeOptions;