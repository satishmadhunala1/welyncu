import { MdVerified } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { GiPostStamp } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa6";

const LeftSidebar = () => {
  // Menu items data
  const menuItems = [
    { id: "feed", label: "Feed", icon: <RiHome6Fill size={20} />, isActive: true },
    { id: "friends", label: "Friends", icon: <FaUserFriends size={20} /> },
    { id: "posts", label: "Posts", icon: <GiPostStamp size={20} /> },
    { id: "marketplace", label: "Market Place", icon: <FaBuilding size={20} /> },
  ];

  // Pages data
  const pages = [
    { id: 1, name: "JavaScript", image: "/jslogo.jpg" },
    { id: 2, name: "Business", image: "/gamebanner.jpg" },
    { id: 3, name: "React", image: "/reactlogo.jpg" },
    { id: 4, name: "DataScience", image: "/memory.png" },
  ];

  // Stats data
  const stats = [
    { label: "Followers", value: "2.3k" },
    { label: "Following", value: "500" },
    { label: "Posts", value: "13k" },
  ];

  return (
    <div className="min-h-screen hidden lg:block w-80 border  sticky top-4">
      {/* Profile Section */}
      <div className="border border-gray-800 p-4 rounded-lg bg-[#1A1A1E]">
        <div className="flex items-center gap-3">
          <img
            src="/mentor.jpg"
            className="h-12 w-12 rounded-full object-cover border-2 border-green-500"
            alt="Profile"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold truncate">Undertaker</h2>
              <MdVerified className="text-blue-500 flex-shrink-0" />
            </div>
            <p className="text-sm text-gray-400 truncate">@undertakerwwe</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <h1 className="font-bold text-lg text-white">{stat.value}</h1>
              <p className="text-xs text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border border-gray-800 p-3 rounded-lg mt-4 bg-[#1A1A1E]">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition-all duration-200 ${
              item.isActive
                ? "bg-green-600/20 text-green-400 border border-green-600/30"
                : "hover:bg-gray-800 text-gray-300"
            }`}
          >
            {item.icon}
            <h2 className="font-semibold text-base">{item.label}</h2>
          </div>
        ))}
      </div>

      {/* Pages Section */}
      <div className="border border-gray-800 p-4 rounded-lg mt-4 bg-[#1A1A1E]">
        <p className="text-xs uppercase font-bold text-gray-400 mb-3">
          Pages you may like
        </p>

        <div className="space-y-2">
          {pages.map((page) => (
            <div
              key={page.id}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200"
            >
              <img
                src={page.image}
                className="h-10 w-10 rounded-full object-cover border border-gray-600"
                alt={page.name}
              />
              <p className="text-gray-300 text-base font-medium truncate">
                {page.name}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs uppercase font-bold text-gray-400  cursor-pointer hover:underline ">View All</p>
      </div>
    </div>
  );
};

export default LeftSidebar;