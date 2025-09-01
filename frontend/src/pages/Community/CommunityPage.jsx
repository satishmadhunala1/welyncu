import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { TiArrowUpOutline } from "react-icons/ti";
import { FaRegComment, FaShare } from "react-icons/fa";
import { FiBookmark, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const CommunityPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      username: "John Smith",
      time: "2 hrs ago",
      title:
        "It took me 3 months to implement React Server Components from Scratch",
      image: "/react2.jpg",
      upvotes: "10k",
      comments: "2.9k",
    },
    {
      id: 2,
      username: "Emma Wilson",
      time: "5 hrs ago",
      title: "Building a Scalable Microservices Architecture with Node.js",
      image: "/aws.jpg",
      upvotes: "8.5k",
      comments: "1.7k",
    },
    {
      id: 3,
      username: "Alex Patel",
      time: "Yesterday",
      title: "My Journey Optimizing Web Performance with Lazy Loading",
      image: "/react.jpg",
      upvotes: "12.3k",
      comments: "3.4k",
    },
    {
      id: 4,
      username: "Sarah Kim",
      time: "2 days ago",
      title: "How I Built a Real-Time Chat App with WebSocket",
      image: "/chat.jpg",
      upvotes: "6.2k",
      comments: "980",
    },
    {
      id: 5,
      username: "Michael Brown",
      time: "3 days ago",
      title: "Exploring GraphQL: From REST to GraphQL in 30 Days",
      image: "/graphql.jpg",
      upvotes: "15.7k",
      comments: "4.1k",
    },
  ];

  // Filter posts
  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative max-w-7xl mx-auto px-3 mt-3">
      {/* Top bar with search & toggle */}
      <div className="flex justify-between items-center mb-5">
        {/* Search */}
        <div className="flex items-center gap-2 bg-[#1A1A1E] border border-gray-800 rounded-full px-3 py-2 w-full md:w-[60%]">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            className="bg-transparent outline-none text-white text-sm w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Toggle btn (mobile only) */}
        <button
          onClick={() => setShowSidebar(true)}
          className="ml-3 p-2 rounded-full bg-[#1A1A1E] border border-gray-700 text-white lg:hidden"
        >
          <FiMenu size={20} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT FEED */}
        <div className="w-full lg:w-[70%] flex flex-col gap-10 bg-[#1A1A1E] border border-gray-800 rounded-xl p-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                <div>
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src={`/hero${post.id}.jpg`}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div className="flex items-center gap-1">
                        <p className="text-gray-500 text-[13px]">
                          {post.username}
                        </p>
                        <div className="h-1 w-1 rounded-full bg-gray-600" />
                        <p className="text-gray-500 text-[13px]">{post.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-5 py-1 bg-green-600/30 text-white rounded-full">
                        Join
                      </button>
                      <BsThreeDots />
                    </div>
                  </div>

                  {/* Title & Image */}
                  <h3 className="text-white font-bold text-[16px] mt-3">
                    {post.title}
                  </h3>
                  <img
                    src={post.image}
                    className="w-full h-[250px] md:h-[300px] object-cover rounded-lg mt-3"
                  />

                  {/* Actions */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full hover:bg-white/30">
                        <TiArrowUpOutline />
                        <p className="text-white text-[13px]">{post.upvotes}</p>
                        <TiArrowUpOutline className="rotate-180" />
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full hover:bg-white/30">
                        <FaRegComment />
                        <p className="text-white text-[13px]">{post.comments}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full hover:bg-white/30">
                        <FaShare />
                        <p className="text-white text-[13px]">Share</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 w-fit p-2 rounded-full hover:bg-white/30">
                      <FiBookmark />
                    </div>
                  </div>
                </div>
                {index < posts.length - 1 && (
                  <div className="h-[1px] w-full bg-gray-800" />
                )}
              </React.Fragment>
            ))
          ) : (
            <p className="text-gray-400">No posts found.</p>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div
          className={`w-full lg:w-[30%] border border-gray-800 rounded-xl p-4 bg-[#1A1A1E] h-fit transform transition-transform duration-300 lg:translate-x-0 ${
            showSidebar ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          } fixed top-0 right-0 h-full lg:static mt-10  md:mt-10 lg:mt-0 overflow-y-auto`}
        >
          {/* Close button (mobile only) */}
          <div className="flex justify-end lg:hidden">
            <button
              onClick={() => setShowSidebar(false)}
              className="p-2 text-white"
            >
              <FiX size={22} />
            </button>
          </div>

          <p className="font-bold text-[17px] text-gray-300">Communities</p>

          <div className="flex items-center gap-3 mt-5 border border-gray-800 p-3 rounded-xl cursor-pointer hover:bg-gray-800/40 transition">
            <GoPlus size={20} />
            <p>Create Community</p>
          </div>

          <div className="mt-5 flex flex-col gap-5">
            {[
              { name: "Frontend", img: "/reactlogo.jpg" },
              { name: "Javascript", img: "/jslogo.jpg" },
              { name: "Machine Learning", img: "/mllogo.jpg" },
              { name: "Backend", img: "/nodelogo.jpg" },
              { name: "Data Science", img: "/dslogo.jpg" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <img
                  src={c.img}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold">{c.name}</h4>
                    <button className="px-4 py-1 bg-gray-700 text-[13px] font-semibold hover:bg-gray-800 text-white rounded-full">
                      Join
                    </button>
                  </div>
                  <p className="text-gray-400 text-[13px] truncate w-[200px]">
                    Here you can share your knowledge about {c.name}
                  </p>
                  <p className="text-gray-400 text-[13px]">12k members</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
