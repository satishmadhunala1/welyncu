import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { TiArrowUpOutline } from "react-icons/ti";
import { FaRegComment, FaShare, FaRegBookmark, FaBookmark, FaFire, FaChartLine } from "react-icons/fa";
import { FiSearch, FiPlus } from "react-icons/fi";
import { IoTimeOutline, IoTrendingUp } from "react-icons/io5";

const Posts = () => {
  const [search, setSearch] = useState("");
  const [savedPosts, setSavedPosts] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState("all");
  const [upvotedPosts, setUpvotedPosts] = useState(new Set());

  const posts = [
    {
      id: 1,
      username: "Google",
      time: "2 hrs ago",
      title: "It took me 3 months to implement React Server Components from Scratch",
      description: "Deep dive into building React Server Components from the ground up. Learn about the architecture, challenges faced, and performance benefits achieved.",
      image: "/react2.jpg",
      upvotes: "10.2k",
      comments: "2.9k",
      shares: "1.2k",
      readTime: "8 min read",
      tags: ["React", "Server Components", "Web Development"],
      trending: true
    },
    {
      id: 2,
      username: "Google",
      time: "5 hrs ago",
      title: "Building a Scalable Microservices Architecture with Node.js",
      description: "Exploring best practices for building resilient microservices with Node.js, Docker, and Kubernetes in production environments.",
      image: "/aws.jpg",
      upvotes: "8.5k",
      comments: "1.7k",
      shares: "892",
      readTime: "12 min read",
      tags: ["Node.js", "Microservices", "AWS"],
      trending: false
    },
    {
      id: 3,
      username: "Google",
      time: "Yesterday",
      title: "My Journey Optimizing Web Performance with Lazy Loading",
      description: "How we improved Core Web Vitals by 40% through strategic lazy loading implementation and code splitting.",
      image: "/react.jpg",
      upvotes: "12.3k",
      comments: "3.4k",
      shares: "2.1k",
      readTime: "6 min read",
      tags: ["Performance", "React", "Lazy Loading"],
      trending: true
    },
    {
      id: 4,
      username: "Google",
      time: "2 days ago",
      title: "How I Built a Real-Time Chat App with WebSocket",
      description: "Step-by-step guide to building a scalable real-time chat application using WebSocket, Node.js, and React.",
      image: "/chat.jpg",
      upvotes: "6.2k",
      comments: "980",
      shares: "456",
      readTime: "10 min read",
      tags: ["WebSocket", "Real-time", "Node.js"],
      trending: false
    },
    {
      id: 5,
      username: "Google",
      time: "3 days ago",
      title: "Exploring GraphQL: From REST to GraphQL in 30 Days",
      description: "Our team's journey migrating from REST to GraphQL - challenges, benefits, and lessons learned along the way.",
      image: "/graphql.jpg",
      upvotes: "15.7k",
      comments: "4.1k",
      shares: "3.2k",
      readTime: "15 min read",
      tags: ["GraphQL", "API", "Migration"],
      trending: true
    },
  ];

  const toggleSavePost = (postId) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const toggleUpvote = (postId) => {
    setUpvotedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const trendingPosts = posts.filter(post => post.trending);

  return (
    <div className="min-h-screen">
      <div className=" px-1 sm:px-5 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Google Posts</h1>
              <p className="text-gray-400">Latest updates, insights, and technical deep dives</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: "all", label: "All Posts", icon: null },
              { id: "trending", label: "Trending", icon: <FaFire className="text-sm" /> },
              { id: "popular", label: "Most Popular", icon: <IoTrendingUp className="text-sm" /> },
              { id: "recent", label: "Recent", icon: <IoTimeOutline className="text-sm" /> }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                }`}
              >
                {filter.icon}
                <span className="text-sm font-medium">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Section */}
        {trendingPosts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FaFire className="text-orange-500" />
              <h2 className="text-lg font-semibold text-white">Trending Now</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {trendingPosts.slice(0, 2).map((post) => (
                <div key={post.id} className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full font-medium">
                      Trending
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.upvotes} upvotes</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Posts Feed */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300"
              >
                <div className="">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/google.jpeg"
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-600"
                        alt="Google"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">{post.username}</span>
                          {post.trending && (
                            <FaFire className="text-orange-500 text-sm" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <span>{post.time}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleSavePost(post.id)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          savedPosts.has(post.id)
                            ? "text-yellow-400 bg-yellow-400/10"
                            : "text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10"
                        }`}
                      >
                        {savedPosts.has(post.id) ? <FaBookmark /> : <FaRegBookmark />}
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200">
                        <BsThreeDots />
                      </button>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {post.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-gray-600/50 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="mb-4">
                      <img
                        src={post.image}
                        className="w-full h-64 object-cover rounded-xl border border-gray-600"
                        alt="Post visual"
                      />
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-4">
                      {/* Upvote Button */}
                      <button
                        onClick={() => toggleUpvote(post.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                          upvotedPosts.has(post.id)
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50 border border-gray-600"
                        }`}
                      >
                        <TiArrowUpOutline className={`text-lg ${upvotedPosts.has(post.id) ? "text-blue-400" : ""}`} />
                        <span className="font-medium">{post.upvotes}</span>
                      </button>

                      {/* Comments */}
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50 border border-gray-600 transition-all duration-200">
                        <FaRegComment />
                        <span className="font-medium">{post.comments}</span>
                      </button>

                      {/* Share */}
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-600/50 border border-gray-600 transition-all duration-200">
                        <FaShare />
                        <span className="font-medium">Share</span>
                      </button>
                    </div>

                    <div className="text-gray-400 text-sm hidden lg:block">
                      {post.shares} shares
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No posts found</div>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>

        {/* Create Post Button */}
        <button className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white p-4 rounded-full shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 z-50">
          <FiPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Posts;