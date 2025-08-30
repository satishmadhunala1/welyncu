

import React, { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Usersrofile() {
  const [activeTab, setActiveTab] = useState('profile');
  
  const skills = [
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 75, category: 'frontend' },
    { name: 'React', level: 80, category: 'frontend' },
    { name: 'Next.js', level: 70, category: 'frontend' },
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Express', level: 70, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'backend' },
    { name: 'Docker', level: 60, category: 'devops' },
    { name: 'CI/CD', level: 65, category: 'devops' },
    { name: 'CSS', level: 80, category: 'frontend' },
    { name: 'HTML', level: 90, category: 'frontend' },
    { name: 'Git', level: 75, category: 'tools' }
  ];

  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Remote",
      period: "Jan 2025 - Present • 4mo",
      description: "Worked remotely on projects including a full stack Node.js website clone for a US client and a full stack MERN marketing website for a US client.",
      achievements: [
        "Developed responsive web applications using React and Node.js",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Collaborated with international clients to deliver tailored solutions"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Tech Solutions Inc.",
      location: "Hyderabad, India",
      period: "Jun 2024 - Dec 2024 • 6mo",
      description: "Assisted in developing and maintaining web applications, working with a team of senior developers.",
      achievements: [
        "Built reusable components for the company's UI library",
        "Optimized website performance, reducing load time by 30%",
        "Participated in code reviews and agile development processes"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech - Electronics and Communication Engineering",
      institution: "Siddhartha Institute of Technology and Sciences",
      location: "India",
      period: "Jan 2019 - Jan 2023",
      description: "Studied Electronics and Communication Engineering with a focus on embedded systems and signal processing."
    }
  ];

  const courses = [
    {
      name: "Complete React Developer",
      provider: "Udemy",
      date: "2024"
    },
    {
      name: "Node.js API Masterclass",
      provider: "Coursera",
      date: "2023"
    },
    {
      name: "Docker for Developers",
      provider: "Pluralsight",
      date: "2023"
    }
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#"
    },
    {
      name: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      technologies: ["Next.js", "Socket.io", "MongoDB"],
      link: "#"
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio website with project showcase and blog",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      link: "#"
    }
  ];

  const opportunities = ['Full Time', 'Remote', 'India', 'Hybrid', 'Contract'];

  return (
    <div className="min-h-screen ">

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-col gap-6 md:gap-8">
          {/* Main Content */}
          <div className="flex-1  bg-[#1A1A1E] border border-gray-800  rounded-lg p-6 md:p-8">
            {/* Navigation Tabs */}
           <div className='flex items-center justify-between w-full border-b border-gray-700 mb-4 pb-4'>
             <div className="flex flex-wrap gap-2 ">
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-green-600/30 text-white' : 'bg-transparent border border-gray-800 text-gray-300 hover:bg-gray-700'}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'experience' ? 'bg-green-600/30 text-white' : 'bg-transparent border border-gray-800  text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'projects' ? 'bg-green-600/30 text-white' : 'bg-transparent border border-gray-800  text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setActiveTab('projects')}
              >
                Projects
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'skills' ? 'bg-green-600/30 text-white' : 'bg-transparent border border-gray-800  text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
            </div>

            <Link to='/editprofile'>
              <div className='bg-[#1A1A1E] border border-gray-800 rounded-full p-2 hover:bg-gray-700 cursor-pointer'>
                <FaEdit />
            </div>
            </Link>
           </div>



            {/* Profile Content */}
            {activeTab === 'profile' && (
              <>
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                  <div className="relative border-3 border-gray-800 rounded-full">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                      alt="Profile"
                      className="w-16 h-16 rounded-full  object-cover"
                    />
                    <div className="absolute -bottom-1 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-200 mb-1">Musku Vamshi</h1>
                    <p className="text-[15px] text-gray-400 mb-3">Freelance Web Developer</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-transparent border border-gray-700 text-gray-400 text-[13px] rounded-md font-medium"># JavaScript</span>
                      <span  className="px-3 py-1 bg-transparent border border-gray-700 text-gray-400 text-[13px] rounded-md font-medium"># TypeScript</span>
                      <span  className="px-3 py-1 bg-transparent border border-gray-700 text-gray-400 text-[13px] rounded-md font-medium"># React</span>
                      <span  className="px-3 py-1 bg-transparent border border-gray-700 text-gray-400 text-[13px] rounded-md font-medium"># Node.js</span>
                      <span  className="px-3 py-1 bg-transparent border border-gray-700 text-gray-400 text-[13px] rounded-md font-medium"># MongoDB</span>
                      <span  className="px-3 py-1 bg-transparent border border-gray-700 text-gray-400 text-[13px] rounded-md font-medium">+7 more</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 flex-wrap">
                      <div className="flex items-center gap-1">
                        <span className="text-green-500">🇮🇳</span>
                        <span>India</span>
                      </div>
                      <span>Junior</span>
                      <span>Remote</span>
                      <span>Available for work</span>
                    </div>
                  </div>
                </div>

                {/* Profile Description */}
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Musku Vamshi is a Junior Freelance Web Developer based in India, looking for Remote job opportunities.</strong>
                  </p>
                  <br />
                  <p className="text-gray-200 bg-[#1f1f1f] p-4  rounded-xl leading-relaxed">
                    I am a MERN Stack Developer with hands-on experience building scalable and responsive full-stack web applications. 
                    Skilled in frontend and backend technologies, deployment, CI/CD pipelines, and cloud infrastructure. Passionate about 
                    clean code, agile workflows, and optimized performance.
                  </p>
                </div>

                {/* Ideal Opportunity Section */}
                <div className="mb-8">
                  <h2 className="text-[17px] font-sans font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    Ideal next opportunity
                  </h2>
                  <div className="ml-4 flex flex-wrap gap-2">
                    {opportunities.map((opportunity, index) => (
                      <span key={index} className="px-3 py-1 bg-[#1f1f1f] text-gray-200 text-sm rounded-sm">
                        {opportunity}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Experience Content */}
            {activeTab === 'experience' && (
              <div className="mb-8">
                <h2 className="text-[17px] font-sans font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="ml-4 border-l-2 border-gray-700 pl-6 pb-6 relative">
                      <div className="absolute -left-1.5 top-0 w-3 h-3 bg-green-500 rounded-full"></div>
                      <h3 className="text-white font-medium text-lg">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-2">
                        <span>@{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-gray-300 mb-3">{exp.description}</p>
                      <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                      <ul className="text-gray-300 list-disc list-inside space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Content */}
            {activeTab === 'projects' && (
              <div className="mb-8">
                <h2 className="text-[17px] font-sans font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-[#1f1f1f] rounded-lg p-4 transition-colors">
                      <h3 className="text-white font-medium text-lg mb-2">{project.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-[#1f1f1f] border border-gray-800 text-gray-200 text-xs rounded-md">
                            # {tech}
                          </span>
                        ))}
                      </div>
                      <a href={project.link} className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
                        View Project <span>↗</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Content */}
            {activeTab === 'skills' && (
              <div className="mb-8">
                <h2 className="text-[17px] font-sans font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Skills
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-white font-medium mb-4">Frontend Development</h3>
                  <div className="space-y-3">
                    {skills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                      <div key={index} className="ml-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-gray-400 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full">
                          <div 
                            className="h-full bg-blue-500 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-white font-medium mb-4">Backend Development</h3>
                  <div className="space-y-3">
                    {skills.filter(skill => skill.category === 'backend').map((skill, index) => (
                      <div key={index} className="ml-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-gray-400 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full">
                          <div 
                            className="h-full bg-green-500 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-white font-medium mb-4">DevOps & Tools</h3>
                  <div className="space-y-3">
                    {skills.filter(skill => skill.category === 'devops' || skill.category === 'tools').map((skill, index) => (
                      <div key={index} className="ml-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-gray-400 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full">
                          <div 
                            className="h-full bg-purple-500 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Education Section */}
            <div className="mb-8">
              <h2 className="text-[17px] font-sans font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Education
              </h2>
              <div className="ml-4 border-l-2 bg-[#1f1f1f] rounded-lg border-gray-700 pl-6 pb-6 relative">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-white font-medium">{education[0].degree}</h3>
                <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>@{education[0].institution}</span>
                  <span>•</span>
                  <span>{education[0].location}</span>
                  <span>•</span>
                  <span>{education[0].period}</span>
                </div>
                <p className="text-gray-300">{education[0].description}</p>
              </div>
            </div>

            {/* Courses Section */}
            <div className="mb-8">
              <h2 className="text-[17px] font-sans font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Courses & Certifications
              </h2>
              <div className="ml-4">
                <ul className="text-gray-400 list-disc list-inside space-y-2">
                  {courses.map((course, index) => (
                    <li key={index}>
                      <span className="font-medium text-[15px]">{course.name}</span> - {course.provider} ({course.date})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Languages Section */}
            <div className="mb-8">
              <h2 className="text-[17px] font-sans font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Languages
              </h2>
              <div className="ml-4">
                <div className="flex items-center justify-between max-w-xs">
                  <span className="text-gray-300">English</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs text-white">
                        {star <= 4 ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between max-w-xs mt-2">
                  <span className="text-gray-300">Telugu</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs text-white">
                        {star <= 5 ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between max-w-xs mt-2">
                  <span className="text-gray-300">Hindi</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs text-white">
                        {star <= 3 ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usersrofile;