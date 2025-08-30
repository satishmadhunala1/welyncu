import React, { useState } from "react";
import { FaSearch, FaUserPlus, FaBolt, FaFilter, FaTimes, FaStar, FaClock, FaMoneyBillWave, FaMapMarkerAlt, FaBriefcase, FaVideo, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Connect = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [sessionLength, setSessionLength] = useState(10); // Default to 10 minutes

  // Dummy people (replace with API later)
  const people = [
    { 
      id: 1, 
      name: "Alice Johnson", 
      skill: "Graphic Design", 
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", 
      bgImg: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80",
      rate: 2, 
      rating: 4.8,
      projects: 42,
      available: true,
      location: "San Francisco, CA",
      experience: "8 years"
    },
    { 
      id: 2, 
      name: "Mark Lee", 
      skill: "Web Development", 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", 
      bgImg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      rate: 3, 
      rating: 4.5,
      projects: 28,
      available: true,
      location: "New York, NY",
      experience: "6 years"
    },
    { 
      id: 3, 
      name: "Sophia Kim", 
      skill: "Digital Marketing", 
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80", 
      bgImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      rate: 5, 
      rating: 4.9,
      projects: 67,
      available: false,
      location: "Chicago, IL",
      experience: "10 years"
    },
    { 
      id: 4, 
      name: "David Chen", 
      skill: "UI/UX Design", 
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", 
      bgImg: "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      rate: 4, 
      rating: 4.7,
      projects: 35,
      available: true,
      location: "Austin, TX",
      experience: "7 years"
    },
    { 
      id: 5, 
      name: "Emma Wilson", 
      skill: "Content Writing", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80", 
      bgImg: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      rate: 2, 
      rating: 4.6,
      projects: 51,
      available: true,
      location: "Boston, MA",
      experience: "5 years"
    },
    { 
      id: 6, 
      name: "James Taylor", 
      skill: "Mobile Development", 
      img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80", 
      bgImg: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      rate: 4, 
      rating: 4.8,
      projects: 39,
      available: false,
      location: "Seattle, WA",
      experience: "9 years"
    },
  ];

  const categories = ["Design", "Development", "Marketing", "Writing", "Business", "Languages"];
  const sessionOptions = [
    { value: 10, label: "10 minutes" },
    { value: 20, label: "20 minutes" },
    { value: 30, label: "30 minutes" },
  ];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredPeople = people.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          person.skill.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
                            selectedCategories.some(cat => person.skill.toLowerCase().includes(cat.toLowerCase()));
    const matchesAvailability = availabilityFilter === "all" || 
                                (availabilityFilter === "available" && person.available) ||
                                (availabilityFilter === "scheduled" && !person.available);
    return matchesSearch && matchesCategory && matchesAvailability;
  });

  const handleSessionChange = (e) => {
    setSessionLength(parseInt(e.target.value));
  };

  return (
    <div className="flex min-h-screen text-white">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-800 p-6 space-y-8 overflow-y-auto">
        <div className="relative border border-gray-800 rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name or skill..."
            className="pl-10 pr-4 py-3 w-full border-none focus:outline-none rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Live Section Button */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaVideo className="text-green-600" /> Live Sessions
          </h3>
         <Link to="/live">
           <button
            className="w-full px-4 py-2 rounded-lg text-left transition-all text-green-400 border border-green-600/30 hover:bg-green-600/30"
          >
            Join Live Sessions Here
          </button>
         </Link>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaFilter className="text-green-600" /> Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-2 rounded-full text-sm transition-all ${
                  selectedCategories.includes(category)
                    ? "bg-green-600/20 text-green-400 font-medium border border-green-600/30"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700"
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Availability</h3>
          <div className="flex flex-col space-y-2">
            <button
              className={`px-4 py-2 rounded-lg text-left transition-all ${
                availabilityFilter === "all" 
                  ? "bg-green-600/20 text-green-400 border border-green-600/30" 
                  : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
              }`}
              onClick={() => setAvailabilityFilter("all")}
            >
              All Experts
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-left transition-all ${
                availabilityFilter === "available" 
                  ? "bg-green-600/20 text-green-400 border border-green-600/30" 
                  : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
              }`}
              onClick={() => setAvailabilityFilter("available")}
            >
              Available Now
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-left transition-all ${
                availabilityFilter === "scheduled" 
                  ? "bg-green-600/20 text-green-400 border border-green-600/30" 
                  : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
              }`}
              onClick={() => setAvailabilityFilter("scheduled")}
            >
              Schedule Later
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800">
          <p className="text-gray-400">
            Showing <span className="text-green-400 font-medium">{filteredPeople.length}</span> of {people.length} experts
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-sans font-bold">FIND EXPERTS</h1>
            <p className="text-gray-400 mt-2 text-sm">Connect with skilled professionals for your projects</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Sort by:</span>
            <select className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 focus:outline-none ">
              <option>Relevance</option>
              <option>Rate: Low to High</option>
              <option>Rate: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {filteredPeople.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold">No experts found</h3>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredPeople.map((person) => (
              <div
                key={person.id}
                className="border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative"
              >
                <div className="h-34 w-full overflow-hidden">
                  <img
                    src={person.bgImg}
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="px-4 pb-4">
                  <div className="flex justify-start">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-20 h-20 rounded-full border-4 border-gray-900 -mt-10 object-cover"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start mt-2">
                    <div className="flex-1">
                      <h2 className="text-lg font-bold">{person.name}</h2>
                      <p className="text-green-400 font-medium text-[13px]">{person.skill}</p>
                    </div>
                    {!person.available && (
                      <div className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                        Not available
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <div className="flex items-center mr-4">
                      <FaStar size={15} className="text-yellow-400 mr-1" />
                      <span className="font-semibold">{person.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBriefcase className="mr-1" />
                      <span>{person.projects} projects</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-sm text-gray-500 flex items-center justify-between">
                    <div>
                      <div className="flex items-center mb-1">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{person.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-2" />
                        <span>{person.experience} experience</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <span className="text-white font-semibold"><span className="text-[30px] font-bold">${person.rate}</span>/min</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <button 
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-tl-lg rounded-br-lg transition ${
                        person.available 
                          ? "bg-green-700 hover:bg-green-600" 
                          : "bg-gray-700 cursor-not-allowed text-gray-400"
                      }`}
                      disabled={!person.available}
                    >
                      <FaUserPlus /> Connect
                    </button>
                    <button
                      onClick={() => setSelectedPerson(person)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-tl-lg rounded-br-lg transition ${
                        person.available 
                          ? "bg-white text-gray-900 hover:bg-gray-200" 
                          : "bg-gray-700 cursor-not-allowed text-gray-400"
                      }`}
                      disabled={!person.available}
                    >
                      <FaBolt /> Instant
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Instant Popup */}
      {selectedPerson && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 transition-opacity duration-300">
          <div className="bg-gray-900 max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 max-w-md w-full relative border border-green-600/30 shadow-2xl">
            {/* Green Scrollbar */}
            <style>
              {`
                ::-webkit-scrollbar {
                  width: 8px;
                }
                ::-webkit-scrollbar-track {
                  background: #1a1a1e;
                  border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb {
                  background: #16a34a;
                  border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                  background: #22c55e;
                }
              `}
            </style>

            {/* Close Button */}
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 z-10"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            {/* Header with Expert Info */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src={selectedPerson.img}
                  alt={`${selectedPerson.name}'s profile`}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-green-600/30 shadow-lg"
                />
                {selectedPerson.available && (
                  <div className="absolute bottom-4 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white">{selectedPerson.name}</h2>
              <p className="text-green-400 font-medium text-[14px]">{selectedPerson.skill}</p>

              <div className="flex items-center justify-center mt-3 text-yellow-400 text-sm">
                <FaStar className="mr-1" />
                <span className="font-semibold">{selectedPerson.rating}</span>
                <span className="text-gray-500 mx-2">•</span>
                <span>{selectedPerson.projects} projects</span>
              </div>

              <div className="mt-4 text-sm text-gray-400 flex flex-col gap-1">
                <div className="flex items-center justify-center gap-2">
                  <FaMapMarkerAlt className="text-green-400" />
                  <span>{selectedPerson.location}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaClock className="text-green-400" />
                  <span>{selectedPerson.experience} experience</span>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-4 rounded-xl border border-green-600/20 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-300 text-sm">Session Rate</p>
                  <p className="text-green-400 font-bold text-2xl">${selectedPerson.rate}<span className="text-gray-400 text-sm">/min</span></p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 text-sm">Estimated Total</p>
                  <p className="text-white font-bold text-2xl">${selectedPerson.rate * sessionLength}</p>
                </div>
              </div>
            </div>

            {/* Session Details */}
            <div className="space-y-5">
              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Session Length</label>
                <div className="grid grid-cols-3 gap-2">
                  {sessionOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`py-3 rounded-lg border transition-all ${
                        sessionLength === option.value
                          ? "bg-green-600/20 text-green-400 border-green-600/50 font-medium"
                          : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                      }`}
                      onClick={() => setSessionLength(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <h3 className="text-gray-300 font-medium text-sm">What's included:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span>One-on-one video consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span>Screen sharing capabilities</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span>Session recording available</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span>Unused time refunded</span>
                  </div>
                </div>
              </div>

              {/* Payment Note */}
              <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                <p className="text-gray-400 text-xs text-center">
                  A hold of <span className="text-green-400 font-medium">${selectedPerson.rate * sessionLength}</span> 
                  will be placed for a {sessionLength}-minute session. Unused time will be refunded.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg shadow-green-600/20"
                  onClick={() => alert(`Starting instant session with ${selectedPerson.name} for ${sessionLength} minutes`)}
                >
                  <FaBolt className="animate-pulse" /> Start Instant Session
                </button>
                
                <button
                  className="w-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onClick={() => alert(`Scheduling session with ${selectedPerson.name}`)}
                >
                  <FaCalendarAlt /> Schedule for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Connect;