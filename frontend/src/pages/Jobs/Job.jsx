import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaLocationDot, FaBriefcase, FaArrowRight } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

const Job = () => {
  // Sample suggested jobs data
  const suggestedJobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      urgent: true
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      location: "USA/Canada",
      type: "Full-time",
      salary: "$100k - $140k",
      urgent: false
    },
    {
      id: 3,
      title: "Data Scientist",
      location: "Europe",
      type: "Contract",
      salary: "$80k - $110k",
      urgent: true
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Latin America",
      type: "Full-time",
      salary: "$85k - $115k",
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen ">
      <div className=" px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to={"/jobs"}>
          <div className="flex items-center gap-2 cursor-pointer group mb-8">
            <div className="p-1 rounded-lg group-hover:bg-gray-800 transition-colors">
              <RiArrowLeftSLine size={20} className="text-gray-400 group-hover:text-white" />
            </div>
            <p className="text-gray-400 font-medium group-hover:text-white transition-colors">
              Back to jobs
            </p>
          </div>
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Job Header Card */}
            <div className=" backdrop-blur-sm rounded-2xl border border-gray-800 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                      <span className="text-green-400 text-sm font-medium">AI & Data</span>
                    </div>
                    <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      <span className="text-blue-400 text-sm font-medium">Full-time</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                    Senior AI Engineer
                  </h1>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaLocationDot className="text-gray-400" />
                    <span className="text-lg">Argentina / Colombia / Uruguay</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-sm" />
                      <span>5+ years experience</span>
                    </div>
                    <span>•</span>
                    <span>Remote</span>
                  </div>
                </div>

                <button className="bg-green-600 text-gray-900 font-bold px-8 py-4 rounded-xl cursor-pointer hover:from-green-400 hover:to-emerald-400 transition-all duration-200 shadow-lg shadow-green-500/20 w-full lg:w-auto text-center">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Description */}
            <div className="mt-8 bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Job Description</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Driven by our enthusiasm for meeting new talents and fostering connections within the community, 
                we are exploring diverse roles including AI Engineer. This role serves as part of our pipeline 
                for future recruitments and involves working with cutting-edge AI technologies.
              </p>

              {/* Responsibilities */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Key Responsibilities
                </h3>
                <div className="grid gap-4">
                  {[
                    "Design and implement LLM-based solutions (RAG systems, multi-agent tools, copilots)",
                    "Fine-tune, evaluate, and deploy open-source and proprietary foundation models",
                    "Build end-to-end AI-powered features in collaboration with product teams",
                    "Create scalable APIs and services for AI functionality",
                    "Own the lifecycle of AI features from experimentation to production",
                    "Evaluate AI frameworks and libraries (LangChain, Transformers, OpenAI SDKs)",
                    "Identify AI-driven product opportunities with clients and internal teams"
                  ].map((responsibility, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="mt-8 bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">Apply for this Position</h2>
                  <p className="text-gray-400 mt-2">
                    <span className="text-red-400">*</span> Required fields
                  </p>
                </div>
                <button className="border border-gray-600 px-6 py-3 rounded-xl cursor-pointer font-semibold text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all w-full lg:w-auto text-center">
                  Autofill with Resume
                </button>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-200 font-medium">First Name <span className="text-red-400">*</span></label>
                  <input 
                    type="text" 
                    className="bg-gray-700/50 border border-gray-600 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all" 
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-200 font-medium">Last Name <span className="text-red-400">*</span></label>
                  <input 
                    type="text" 
                    className="bg-gray-700/50 border border-gray-600 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all" 
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="flex flex-col gap-2 lg:col-span-2">
                  <label className="text-gray-200 font-medium">Email <span className="text-red-400">*</span></label>
                  <input 
                    type="email" 
                    className="bg-gray-700/50 border border-gray-600 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all" 
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-200 font-medium">Country Code</label>
                  <select className="bg-gray-700/50 border border-gray-600 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white transition-all">
                    <option value="">Select code</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+54">+54 (Argentina)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-200 font-medium">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="bg-gray-700/50 border border-gray-600 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all" 
                    placeholder="Your phone number"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="text-gray-200 font-medium">CV/Resume <span className="text-red-400">*</span></label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                    <div className="p-4 border-2 border-dashed border-gray-600 rounded-xl text-center cursor-pointer hover:border-green-500 hover:bg-green-500/10 transition-all group">
                      <span className="text-gray-300 group-hover:text-green-400 font-medium">Attach File</span>
                    </div>
                    <div className="p-4 border-2 border-dashed border-gray-600 rounded-xl text-center cursor-pointer hover:border-blue-500 hover:bg-blue-500/10 transition-all group">
                      <span className="text-gray-300 group-hover:text-blue-400 font-medium">Dropbox</span>
                    </div>
                    <div className="p-4 border-2 border-dashed border-gray-600 rounded-xl text-center cursor-pointer hover:border-red-500 hover:bg-red-500/10 transition-all group">
                      <span className="text-gray-300 group-hover:text-red-400 font-medium">Google Drive</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:col-span-2">
                  <label className="text-gray-200 font-medium">LinkedIn Profile</label>
                  <input 
                    type="url" 
                    className="bg-gray-700/50 border border-gray-600 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all" 
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="flex flex-col gap-2 lg:col-span-2">
                  <label className="text-gray-200 font-medium">Portfolio Website</label>
                  <input 
                    type="url" 
                    className="bg-gray-700/50 border border-gray-600 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 transition-all" 
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>

              <button className="bg-green-600 text-gray-900 font-bold px-8 py-4 rounded-xl cursor-pointer hover:from-green-400 hover:to-emerald-400 transition-all duration-200 shadow-lg shadow-green-500/20 w-full mt-8">
                Submit Application
              </button>
            </div>
          </div>

          {/* Suggested Jobs Sidebar */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              {/* Job Alert Card */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <FaBell className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">Create Job Alert</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Get notified when similar positions become available.
                    </p>
                    <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm mt-3 flex items-center gap-2 transition-colors">
                      Create Alert <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Suggested Jobs */}
              <div className="bg-gray-800/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Similar Positions
                </h3>
                <div className="space-y-4">
                  {suggestedJobs.map((job) => (
                    <div 
                      key={job.id} 
                      className="group p-4 rounded-xl border border-gray-600 hover:border-green-500 hover:bg-gray-700/30 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                          {job.title}
                        </h4>
                        {job.urgent && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                        <FaLocationDot className="text-xs" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-green-400 text-sm font-medium">{job.salary}</span>
                        <span className="text-gray-400 text-sm">{job.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <Link to="/jobs">
                    <button className="w-full py-3 border border-gray-600 rounded-xl text-gray-300 font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all flex items-center justify-center gap-2">
                      View All Jobs <FaArrowRight className="text-xs" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;