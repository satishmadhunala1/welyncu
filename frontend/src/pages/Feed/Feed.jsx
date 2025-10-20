import React, { useState, useEffect, useRef } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { IoIosAttach } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { RiHashtag } from "react-icons/ri";
import { HiAtSymbol } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { TiArrowUpOutline } from "react-icons/ti";
import { FaRegComment, FaShare } from "react-icons/fa6";
import { FiBookmark } from "react-icons/fi";

const Feed = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(null);
  const [search, setSearch] = useState("");

  // posts data
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

  // Sample stories data with current user first
  const stories = [
    {
      id: 1,
      username: "You",
      image: "/mentor.jpg",
      isCurrentUser: true,
      hasUnpostedStory: true,
      stories: [],
    },
    {
      id: 2,
      username: "undertaker",
      image: "/undertaker.jpg",
      stories: [
        { id: 1, type: "image", url: "/gamebanner.jpg", duration: 5000 },
        { id: 2, type: "image", url: "/gamebanner.jpg", duration: 5000 },
      ],
    },
    {
      id: 3,
      username: "john_doe",
      image: "/hero1.jpg",
      stories: [
        { id: 1, type: "image", url: "/gamebanner.jpg", duration: 5000 },
      ],
    },
    {
      id: 4,
      username: "sarah_m",
      image: "/hero2.jpg",
      stories: [
        { id: 1, type: "image", url: "/gamebanner.jpg", duration: 5000 },
      ],
    },
    {
      id: 5,
      username: "tech_guru",
      image: "/hero3.jpg",
      stories: [
        { id: 1, type: "image", url: "/gamebanner.jpg", duration: 5000 },
      ],
    },
    {
      id: 6,
      username: "travel_buddy",
      image: "/hero4.jpg",
      stories: [
        { id: 1, type: "image", url: "/gamebanner.jpg", duration: 5000 },
      ],
    },
  ];

  // Auto-advance stories
  useEffect(() => {
    if (!selectedStory || isPaused) return;

    const currentStory = selectedStory.stories[currentStoryIndex];
    if (!currentStory) return;

    const interval = 50; // Update every 50ms for smooth progress
    const totalSteps = currentStory.duration / interval;
    const increment = 100 / totalSteps;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextStory();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [selectedStory, currentStoryIndex, isPaused]);

  const handleStoryClick = (story, index) => {
    if (story.isCurrentUser && story.hasUnpostedStory) {
      handleAddStory();
      return;
    }

    if (story.stories.length > 0) {
      setSelectedStory(story);
      setCurrentStoryIndex(0);
      setProgress(0);
      setIsPaused(false);
    }
  };

  const handleAddStory = () => {
    // Simulate adding a story
    alert("Add story functionality would open camera/gallery here!");

    // In real implementation, this would:
    // 1. Open camera or gallery
    // 2. Allow user to take/select photo/video
    // 3. Upload and add to stories
  };

  const handleCloseStory = () => {
    setSelectedStory(null);
    setCurrentStoryIndex(0);
    setProgress(0);
    setIsPaused(false);
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }
  };

  const goToNextStory = () => {
    if (selectedStory && currentStoryIndex < selectedStory.stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0);
    } else {
      handleCloseStory();
    }
  };

  const goToPrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setProgress(0);
    }
  };

  const handlePauseStory = () => {
    setIsPaused(true);
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }
  };

  const handleResumeStory = () => {
    setIsPaused(false);
  };

  return (
    <div className="min-h-screen lg:w-[60%] w-full border border-gray-800 rounded-xl lg:p-4 p-2">
      {/* Stories - New Design */}
      <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-4 scrollbar-hide">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="flex flex-col items-center cursor-pointer flex-shrink-0 relative"
            onClick={() => handleStoryClick(story, index)}
          >
         
            <div className="relative w-34  h-40 rounded-2xl overflow-hidden border-2 border-transparent">
           
              {!story.isCurrentUser && story.stories.length > 0 && (
                <img
                  src={story.stories[0].url}
                  className="w-full h-full object-cover"
                  alt="Story background"
                />
              )}
              
           
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
           
              <div className="absolute top-2 left-7 transform -translate-x-1/2">
                <div className={`p-0.5 rounded-full ${
                  story.isCurrentUser 
                    ? 'bg-gradient-to-r from-gray-400 to-gray-600' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-50'
                }`}>
                  <img
                    src={story.image}
                    className="h-10 w-10 rounded-full object-cover border-2 border-gray-900"
                    alt={story.username}
                  />
                </div>
              </div>

           

              <div className="absolute bottom-2 left-0 right-0 text-center px-1">
                <p className="text-white text-xs font-semibold truncate">
                  {story.isCurrentUser ? "Your Story" : story.username}
                </p>
              </div>

      
              {story.isCurrentUser && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-blue-500 rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Story Viewer Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onMouseEnter={handlePauseStory}
          onMouseLeave={handleResumeStory}
        >
          <div className="relative w-full max-w-md h-[80vh]">
            
            <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
              {selectedStory.stories.map((story, index) => (
                <div
                  key={story.id}
                  className="h-1 bg-gray-600 rounded-full flex-1 overflow-hidden"
                >
                  <div
                    className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                    style={{
                      width:
                        index === currentStoryIndex
                          ? `${progress}%`
                          : index < currentStoryIndex
                          ? "100%"
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleCloseStory}
              className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

   
            <div className="w-full h-full flex items-center justify-center bg-black">
              <img
                src={selectedStory.stories[currentStoryIndex].url}
                className="max-w-full max-h-full object-contain"
                alt="Story"
              />
            </div>

            <button
              onClick={goToPrevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={goToNextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ›
            </button>

      
            <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
              <img
                src={selectedStory.image}
                className="h-8 w-8 rounded-full object-cover border border-gray-600"
                alt={selectedStory.username}
              />
              <span className="text-white font-semibold">
                {selectedStory.username}
              </span>
              <span className="text-gray-400 text-sm">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

      
            {isPaused && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl z-10">
                ⏸️
              </div>
            )}
          </div>
        </div>
      )}

      {/* post field */}
      <div className="mt-7 border border-gray-800 p-4 rounded-sm">
        <div className="flex items-center gap-3">
          <img
            src="/mentor.jpg"
            className="h-10 w-10 rounded-full aspect-square object-cover"
            alt=""
          />


          <div className="relative w-full">
            <input
              type="text"
              placeholder="What's on your mind..."
              className="border border-gray-700 p-2 w-full rounded-full focus:outline-none pr-10"
            />
          
            <CiFaceSmile
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              size={22}
            />
          </div>

          <button className="bg-green-700 p-2 rounded-lg w-[120px] cursor-pointer">
            Post
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-5 mt-7">
          <div className="flex items-center gap-2">
            <CiImageOn className="" />
            <p className="text-gray-400 text-[15px] font-semibold">
              Image/Video
            </p>
          </div>

          <div className="flex items-center gap-2">
            <IoIosAttach className="" />
            <p className="text-gray-400 text-[15px] font-semibold">
              Attachement
            </p>
          </div>

          <div className="flex items-center gap-2">
            <RiLiveFill />
            <p className="text-gray-400 text-[15px] font-semibold">Live</p>
          </div>

          <div className="flex items-center gap-2">
            <RiHashtag className="" />
            <p className="text-gray-400 text-[15px] font-semibold">Hashtag</p>
          </div>

          <div className="flex items-center gap-2">
            <HiAtSymbol className="" />
            <p className="text-gray-400 text-[15px] font-semibold">Mention</p>
          </div>
        </div>
      </div>

      {/* Feed Content */}
      <div className="space-y-4 mt-5">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <React.Fragment key={post.id}>
              <div>
          
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
                    <BsThreeDots />
                  </div>
                </div>

             
                <h3 className="text-white font-bold text-[16px] mt-3">
                  {post.title}
                </h3>
                <img
                  src={post.image}
                  className="w-full h-[250px] md:h-[300px] object-cover rounded-lg mt-3"
                />

       
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
    </div>
  );
};

export default Feed;