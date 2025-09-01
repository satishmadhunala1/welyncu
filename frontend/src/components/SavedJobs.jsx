import React from 'react'

const jobs = [
  {
    id: 1,
    companyLogo: '/amazon.webp',
    title: 'Frontend Developer',
    countryFlag: '/us.png',
    location: 'United States',
    type: 'Hybrid',
    role: 'Full Time',
    tags: ['Technology', 'MuleSoft', 'API Development', 'AWS Services']
  },
  {
    id: 2,
    companyLogo: '/apple.jpg',
    title: 'Full Stack Developer',
    countryFlag: '/india.png',
    location: 'India',
    type: 'Hybrid',
    role: 'Full Time',
    tags: ['Technology', 'MuleSoft', 'API Development', 'AWS Services']
  },
  {
    id: 3,
    companyLogo: '/google.jpeg',
    title: 'UI/UX Designer',
    countryFlag: '/aus.png',
    location: 'Australia',
    type: 'Hybrid',
    role: 'Full Time',
    tags: ['Technology', 'MuleSoft', 'API Development', 'AWS Services']
  },
  {
    id: 4,
    companyLogo: '/netflix.jpeg',
    title: 'DevOps Engineer',
    countryFlag: '/uk.png',
    location: 'United Kingdom',
    type: 'Hybrid',
    role: 'Full Time',
    tags: ['Technology', 'MuleSoft', 'API Development', 'AWS Services']
  },
  {
    id: 5,
    companyLogo: '/delottie.png',
    title: 'Machine Learning Engineer',
    countryFlag: '/poland.png',
    location: 'Poland',
    type: 'Hybrid',
    role: 'Full Time',
    tags: ['Technology', 'MuleSoft', 'API Development', 'AWS Services']
  }
];

const SavedJobsTab = () => {
  return (
    <div className="bg-[#1A1A1E] border border-gray-800 rounded-lg p-2 md:p-3">
      <h2 className="text-2xl font-bold mb-4 text-white">Saved Jobs</h2>
      
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-[#1f1f1f] p-4 rounded-lg shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Left Section */}
            <div className="flex gap-4 items-center">
              <img src={job.companyLogo} alt={job.title} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2 border border-gray-800 w-fit rounded-sm px-2 py-1">
                    <img src={job.countryFlag} alt={job.location} className="h-4 w-4 rounded-full" />
                    <p className="text-sm text-gray-400">{job.location}</p>
                  </div>
                  <p className="text-sm text-gray-400 border border-gray-800 w-fit rounded-sm px-2 py-1">{job.type}</p>
                  <p className="text-sm text-gray-400 border border-gray-800 w-fit rounded-sm px-2 py-1">{job.role}</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, idx) => (
                <p key={idx} className="text-[12px] text-gray-400 border border-gray-800 w-fit rounded-sm px-2">
                  #{tag}
                </p>
              ))}
            </div>

            {/* Apply Button */}
            <button className="bg-green-600/30 hover:bg-green-600/70 text-white px-4 py-2 rounded-sm cursor-pointer self-start md:self-auto">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedJobsTab
