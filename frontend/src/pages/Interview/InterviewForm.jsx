import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formai from "../../animations/formai.json"; 
import axios from 'axios';
// import formai1 from "../../animations/formai1.json"; 
const Home = () => {
  const [role, setRole] = useState('Frontend Developer');
  const [level, setLevel] = useState('Mid-level');
  const [techstack, setTechstack] = useState('React, JavaScript, HTML, CSS');
  const [type, setType] = useState('Technical');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartInterview =async() => {
    setIsLoading(true);

   
     const response = await axios.post('http://localhost:8000/api/interviews/generate-questions', {
        role,
        level,
        techstack,
        type,
        amount: 5
      });

    setTimeout(() => {
      navigate('/interview', { 
        state: { 
          role, 
          level, 
          techstack, 
          type,
          questions: response.data.questions
        } 
      });
      setIsLoading(false);
    }, 1500); // slightly longer delay for better UX
  };

  return (
    <div className="min-h-screen  flex  justify-center gap-7 px-4 py-8">
   <div className='w-[40%] hidden md:block h-full'>
       <Lottie
        animationData={formai} 
        loop={true} 
        style={{ width: 500, height: 600 }} 
      />
   </div>
      <div className=" w-full bg-[#1f1f1f] rounded-2xl shadow-xl overflow-hidden border border-gray-800">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-3">
              AI Interview Practice
            </h1>
            <p className="text-gray-400 text-lg">
              Practice your interview skills with our AI-powered platform. Get detailed feedback on your performance.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Job Role
              </label>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              >
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="UX Designer">UX Designer</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Experience Level
              </label>
              <select 
                value={level} 
                onChange={(e) => setLevel(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              >
                <option value="Entry-level">Entry-level (0-2 years)</option>
                <option value="Mid-level">Mid-level (2-5 years)</option>
                <option value="Senior">Senior (5+ years)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Tech Stack (comma separated)
              </label>
              <input
                type="text"
                value={techstack}
                onChange={(e) => setTechstack(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="React, JavaScript, Node.js"
              />
            </div>
            
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Question Focus
              </label>
              <select 
                value={type} 
                onChange={(e) => setType(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              >
                <option value="Technical">Mostly Technical</option>
                <option value="Behavioral">Mostly Behavioral</option>
                <option value="Balanced">Balanced</option>
              </select>
            </div>
            
            <button 
              onClick={handleStartInterview}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-4 px-4 rounded-lg hover:from-green-600 hover:to-green-700 cursor-pointer transition-all duration-300 font-medium disabled:opacity-50 flex items-center justify-center shadow-lg hover:shadow-green-900/20"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Preparing your interview...
                </>
              ) : (
                <>
                  Start Interview
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="bg-gray-900/50 px-8 py-4 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            Customize your practice session to match your target job requirements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;