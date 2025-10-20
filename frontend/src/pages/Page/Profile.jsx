import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaBell, FaMapMarkerAlt, FaUsers, FaLink } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Profile = () => {
  // Sample company stats
  const companyStats = [
    { label: "Followers", value: "39M" },
    { label: "Employees", value: "10K+" },
    { label: "Founded", value: "1998" },
    { label: "Location", value: "Global" }
  ];

  // Sample featured links
  const featuredLinks = [
    { name: "careers.google.com", url: "#" },
    { name: "about.google", url: "#" },
    { name: "blog.google", url: "#" }
  ];

  return (
    <div className="min-h-screen">
      <div className="lg:max-w-6xl lg:mx-auto  px-2 sm:px-5 lg:px-8">
        {/* Profile Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
          {/* Cover Photo Section */}
          <div className="relative">
            <img
              src="/google_cover.jpg"
              alt="Google cover"
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            
            {/* Profile Image */}
            <div className="absolute -bottom-16 left-6 sm:left-8 md:left-12">
              <div className="relative">
                <img
                  src="/google.jpeg"
                  alt="Google profile"
                  className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-2xl object-cover border-4 border-gray-800 shadow-xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-gray-800">
                  <MdOutlineVerifiedUser className="text-white text-sm" />
                </div>
              </div>
            </div>

            {/* Notification Bell */}
            <div className="absolute top-4 right-4">
              <button className="bg-gray-900/80 hover:bg-gray-800 backdrop-blur-sm p-3 rounded-xl transition-all duration-200 group">
                <FaBell className="text-gray-300 group-hover:text-white text-lg" />
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 pb-8 px-6 sm:px-8">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                {/* Company Name and Verification */}
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Google
                  </h1>
                  <MdOutlineVerifiedUser className="text-blue-400 text-xl sm:text-2xl mt-1" />
                </div>

                {/* Tagline */}
                <p className="text-gray-300 text-lg font-medium mb-2">
                  Organize the world's information and make it universally accessible and useful.
                </p>

                {/* Company Details */}
                <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-sm" />
                    <span>Mountain View, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-sm" />
                    <span>Software Development</span>
                  </div>
                  <span>•</span>
                  <span>Public Company</span>
                </div>

                {/* Featured Links */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {featuredLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                      <FaLink className="text-xs" />
                      <span className="text-sm font-medium group-hover:underline">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md">
                  {companyStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-white font-bold text-xl sm:text-2xl">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                  <IoSendSharp className="text-sm" />
                  <span>Message</span>
                </button>

                <button className="flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 hover:bg-gray-700/50 text-gray-200 font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                  <IoAddOutline className="text-lg" />
                  <span>Follow</span>
                </button>

                <button className="flex items-center justify-center border border-gray-600 hover:border-gray-500 hover:bg-gray-700/50 text-gray-200 p-3 rounded-xl transition-all duration-200">
                  <HiOutlineDotsHorizontal className="text-lg" />
                </button>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid md:grid-cols-2 gap-8">
                {/* About Section */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">About Google</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Google's mission is to organize the world's information and make it universally accessible and useful. 
                    Through products and platforms like Search, Maps, Gmail, Android, Google Play, Chrome, and YouTube, 
                    Google plays a meaningful role in the daily lives of billions of people.
                  </p>
                </div>

                {/* Highlights Section */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Company Highlights</h3>
                  <div className="space-y-3">
                    {[
                      "Founded by Larry Page and Sergey Brin in 1998",
                      "Part of Alphabet Inc. since 2015",
                      "Ranked among world's most valuable brands",
                      "Focus on AI, cloud computing, and innovation"
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
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
};

export default Profile;