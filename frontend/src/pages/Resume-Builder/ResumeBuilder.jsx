import { useState } from 'react';
import { Progress } from "../../components/ui/progress";
import { GoArrowLeft, GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';

const ResumeBuilder = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customInputs, setCustomInputs] = useState({});

  const additionalOptions = [
    { id: 'linkedin', label: 'LinkedIn' },
    { id: 'website', label: 'Website' },
    { id: 'driving-license', label: 'Driving License' },
    { id: 'twitter', label: 'Twitter' },
    { id: 'github', label: 'GitHub' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'behance', label: 'Behance' },
    { id: 'dribbble', label: 'Dribbble' }
  ];

  const handleOptionClick = (optionId) => {
    setSelectedOptions(prev => {
      if (prev.includes(optionId)) {
        // Remove option and its custom input
        const newCustomInputs = { ...customInputs };
        delete newCustomInputs[optionId];
        setCustomInputs(newCustomInputs);
        return prev.filter(item => item !== optionId);
      } else {
        // Add option with empty input value
        setCustomInputs(prev => ({
          ...prev,
          [optionId]: ''
        }));
        return [...prev, optionId];
      }
    });
  };

  const handleInputChange = (optionId, value) => {
    setCustomInputs(prev => ({
      ...prev,
      [optionId]: value
    }));
  };

  const getStepStatus = (stepNumber) => {
    if (stepNumber === 1) return 'current';
    if (stepNumber < 1) return 'completed';
    return 'upcoming';
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Side - Hidden on mobile, visible on desktop */}
        <div className="hidden scrollbar-hide lg:block lg:w-[20%] bg-gradient-to-b from-green-900/30 to-blue-900/30 p-6 space-y-6 overflow-y-auto">
          {/* Progress Section */}
          <div className="bg-black/30 p-4 rounded-lg border border-green-500/30">
            <p className="font-semibold text-lg mb-2">Resume Completion</p>
            <Progress value={33} className="h-2" />
            <p className="text-green-400 text-sm mt-1">33% Complete</p>
          </div>

          {/* Navigation Steps */}
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((step) => {
              const status = getStepStatus(step);
              return (
                <div 
                  key={step}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    status === 'current' 
                      ? 'bg-green-600/20 border-l-4 border-green-500' 
                      : status === 'completed'
                      ? 'bg-blue-600/20 border-l-4 border-blue-500'
                      : 'bg-gray-800/30 border-l-4 border-gray-600'
                  }`}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${status === 'current' ? 'bg-green-500 text-white' :
                      status === 'completed' ? 'bg-blue-500 text-white' :
                      'bg-gray-600 text-gray-300'}
                  `}>
                    {status === 'completed' ? '✓' : step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">
                      {step === 1 && 'Heading'}
                      {step === 2 && 'Work History'}
                      {step === 3 && 'Education'}
                      {step === 4 && 'Skills'}
                      {step === 5 && 'Summary'}
                      {step === 6 && 'Finalize'}
                    </h3>
                    <p className={`text-xs ${
                      status === 'current' ? 'text-green-300' :
                      status === 'completed' ? 'text-blue-300' :
                      'text-gray-400'
                    }`}>
                      {status === 'current' && 'In Progress'}
                      {status === 'completed' && 'Completed'}
                      {status === 'upcoming' && 'Upcoming'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="bg-black/20 p-4 rounded-lg border border-gray-700">
            <h4 className="font-semibold mb-3">Quick Stats</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Fields Completed:</span>
                <span className="text-green-400">5/15</span>
              </div>
              <div className="flex justify-between">
                <span>Additional Info:</span>
                <span className="text-blue-400">{selectedOptions.length} added</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Main content */}
        <div className="flex-1 scrollbar-hide overflow-y-auto p-4 lg:p-6 w-full">
          <div className="max-w-4xl mx-auto w-full">
            {/* Back Button */}
           <Link to={"/resume-options"}>
            <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 underline cursor-pointer mb-6">
              <GoArrowLeft size={20} />
              <p className="text-base">Go Back</p>
            </div>
           </Link>

            {/* Main Content */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                What's the best way for employers to contact you?
              </h1>
              <p className="text-base lg:text-lg mt-2 text-gray-300">
                We suggest including an email and phone number.
              </p>
            </div>

            <div className="w-full">
              <p className="text-sm text-gray-400 mb-6">* indicates a required field</p>

              {/* Form Grid - Single column on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full">
                <div className="w-full">
                  <label className="font-semibold text-base mb-2 block">First Name</label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="border border-gray-700 bg-gray-900/50 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="w-full">
                  <label className="font-semibold text-base mb-2 block">Last Name</label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="border border-gray-700 bg-gray-900/50 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="w-full">
                  <label className="font-semibold text-base mb-2 block">City</label>
                  <input
                    type="text"
                    placeholder="Your City e.g: Hyderabad"
                    className="border border-gray-700 bg-gray-900/50 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full">
                    <label className="font-semibold text-base mb-2 block">Country</label>
                    <input
                      type="text"
                      placeholder="Country"
                      className="border border-gray-700 bg-gray-900/50 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="w-full">
                    <label className="font-semibold text-base mb-2 block">Pin Code</label>
                    <input
                      type="text"
                      placeholder="Your Pin Code"
                      className="border border-gray-700 bg-gray-900/50 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="font-semibold text-base mb-2 block">Phone</label>
                  <input
                    type="text"
                    placeholder="Your Phone number"
                    className="border border-gray-700 bg-gray-900/50 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="w-full">
                  <label className="font-semibold text-base mb-2 block">Email*</label>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="border border-gray-700 bg-gray-900/50 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="my-8 lg:my-12 w-full">
                <p className="font-semibold text-lg lg:text-xl mb-4">
                  Add additional information to your resume{' '}
                  <span className="font-normal text-base text-gray-400">(optional)</span>
                </p>

                {/* Options Grid - Better mobile layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6 w-full">
                  {additionalOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => handleOptionClick(option.id)}
                      className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedOptions.includes(option.id)
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-gray-700 bg-gray-900/30 hover:border-gray-500'
                      }`}
                    >
                      <span className="text-sm font-medium">{option.label}</span>
                      <GoPlus 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          selectedOptions.includes(option.id) ? 'rotate-45 text-green-500' : 'text-gray-400'
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Dynamic Input Fields */}
                <div className="space-y-4 w-full">
                  {selectedOptions.map((optionId) => {
                    const option = additionalOptions.find(opt => opt.id === optionId);
                    return (
                      <div key={optionId} className="animate-fadeIn w-full">
                        <label className="font-semibold text-base mb-2 block">
                          {option.label} URL
                        </label>
                        <input
                          type="text"
                          placeholder={`Enter your ${option.label} ${optionId === 'driving-license' ? 'number' : 'URL'}`}
                          value={customInputs[optionId] || ''}
                          onChange={(e) => handleInputChange(optionId, e.target.value)}
                          className="border border-gray-700 bg-gray-900/50 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 w-full">
                <button className="flex-1 sm:flex-none px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-base font-medium">
                  Back
                </button>
                <button className="flex-1 sm:flex-none px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-base font-medium">
                  Save & Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Hidden on mobile, visible on desktop */}
        <div className="hidden scrollbar-hide lg:block lg:w-[25%] border-l border-gray-800 bg-gray-900/20 p-6 overflow-y-auto">
          <div className="sticky top-4">
            <div className="bg-white rounded-lg shadow-lg p-2">
              <img 
                src="/resume4.jpg" 
                alt="Resume Preview" 
                className="w-full h-auto rounded"
              />
            </div>
            <p className="mt-4 text-center text-blue-400 hover:text-blue-300 underline text-base font-semibold cursor-pointer">
              Change Template
            </p>
            
            {/* Preview Notes */}
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">Preview Notes</h4>
              <p className="text-sm text-yellow-300/80">
                Your resume will update in real-time as you make changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;