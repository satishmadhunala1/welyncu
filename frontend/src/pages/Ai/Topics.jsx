import { useState, useEffect } from "react";
import { IoAddSharp, IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

// Random colors for the clips
const clipColors = [
  "bg-red-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-yellow-600",
  "bg-orange-600",
];

const Topics = () => {
  const [companions, setCompanions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    teach: "",
    voice: "male",
    style: "friendly",
    language: "english",
  });

  // ✅ Fetch companions from backend
  const fetchCompanions = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://sw-ai-m50t.onrender.com/api/companions");
      setCompanions(res.data);
    } catch (err) {
      console.error("Error fetching companions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanions();
  }, []);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      subject: "",
      teach: "",
      voice: "male",
      style: "friendly",
      language: "english",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      await axios.post("https://sw-ai-m50t.onrender.com/api/companions/create", {
        companion: formData,
      });
      await fetchCompanions(); // refresh list
      closeModal();
    } catch (error) {
      console.error("Error creating companion:", error.response?.data || error.message);
      alert("Failed to create companion. Please try again.");
    }
  };

  // Filter companions based on search query
  const filteredCompanions = companions.filter(companion =>
    companion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    companion.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    companion.teach.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-gray-600 text-lg">Loading companions...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-2xl sm:text-3xl lg:text-[25px] text-gray-800 mb-2">
            Your Companion Library
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            {filteredCompanions.length} companion{filteredCompanions.length !== 1 ? 's' : ''} available
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Search Input with Icon */}
          <div className="relative w-full sm:w-64">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search your companion"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 pl-10 pr-4 py-2 sm:py-3 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
            />
          </div>

          {/* Create New Button */}
          <button
            onClick={openModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-700 px-4 py-2 sm:py-3 rounded-lg font-semibold text-white cursor-pointer hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-500/25 transform hover:scale-105 active:scale-95"
          >
            <IoAddSharp size={20} />
            <span className="hidden sm:inline">Create New</span>
            <span className="sm:hidden">New Companion</span>
          </button>
        </div>
      </div>

      {/* Masonry Style Cards */}
      {filteredCompanions.length === 0 ? (
        <div className="text-center py-12 sm:py-16">
          <div className="text-gray-400 text-6xl mb-4">🤖</div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">
            {searchQuery ? "No companions found" : "No companions yet"}
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            {searchQuery 
              ? "Try adjusting your search terms or create a new companion."
              : "Create your first AI companion to start learning!"
            }
          </p>
          {!searchQuery && (
            <button
              onClick={openModal}
              className="mt-6 bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <IoAddSharp size={20} />
              Create First Companion
            </button>
          )}
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 lg:gap-7">
          {filteredCompanions.map((card, i) => {
            const clipColor = clipColors[i % clipColors.length];
            return (
              <div
                key={card._id || i}
                className="bg-white relative mb-4 sm:mb-7 break-inside-avoid p-4 sm:p-6 pt-8 sm:pt-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-200 hover:border-green-200"
              >
                {/* Random Clip */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 h-8 sm:h-10 w-40 sm:w-52 ${clipColor} rounded-b-lg shadow-md`}
                />

                {/* Subject */}
                <h2 className="font-extrabold text-gray-800 text-xl sm:text-2xl lg:text-[30px] mt-4 sm:mt-6 leading-tight">
                  {card.subject}
                </h2>

                {/* Divider */}
                <div className="h-[2px] w-full bg-gray-300 mt-3 sm:mt-4 mb-3 sm:mb-4" />

                {/* Companion Details */}
                <div className="flex-1">
                  <h4 className="font-bold text-lg sm:text-[18px] text-gray-800 mb-2">
                    {card.name}
                  </h4>
                  <p className="text-gray-600 font-medium text-sm sm:text-[15px] leading-relaxed line-clamp-3">
                    {card.teach}
                  </p>
                </div>

                {/* Launch Button */}
                <Link to={`/companions/${card._id}`} className="mt-4 sm:mt-6">
                  <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-gray-800/25">
                    Launch Lesson
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal for Creating New Companion */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white sm:bg-[#1f1f1f] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 sm:text-gray-100">
                Create New Companion
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-300 cursor-pointer bg-black/10 sm:bg-black/30 p-2 rounded-full transition-colors"
              >
                <IoClose size={24} className="sm:hidden" />
                <IoClose size={28} className="hidden sm:block" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Name Field */}
                <div className="md:col-span-2">
                  <label className="block text-gray-800 sm:text-gray-200 mb-2 font-medium">
                    Companion Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 sm:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white sm:bg-transparent text-gray-800 sm:text-white"
                    placeholder="e.g., Codey, the Logic Hacker"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="md:col-span-2">
                  <label className="block text-gray-800 sm:text-gray-200 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 sm:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white sm:bg-transparent text-gray-800 sm:text-white"
                    placeholder="e.g., React JS, Mathematics"
                    required
                  />
                </div>

                {/* Teaching Style Field */}
                <div className="md:col-span-2">
                  <label className="block text-gray-800 sm:text-gray-200 mb-2 font-medium">
                    Teaching Style/Approach
                  </label>
                  <textarea
                    name="teach"
                    value={formData.teach}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-300 sm:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white sm:bg-transparent text-gray-800 sm:text-white resize-none"
                    placeholder="Describe how this companion should teach..."
                    required
                  ></textarea>
                </div>

                {/* Voice Selection */}
                <div className="md:col-span-2 sm:col-span-1">
                  <label className="block text-gray-800 sm:text-gray-200 mb-2 font-medium">
                    Voice Preference
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="voice"
                        value="male"
                        checked={formData.voice === "male"}
                        onChange={handleInputChange}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-800 sm:text-gray-200">Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="voice"
                        value="female"
                        checked={formData.voice === "female"}
                        onChange={handleInputChange}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-800 sm:text-gray-200">Female</span>
                    </label>
                  </div>
                </div>

                {/* Style Selection */}
                <div className="md:col-span-2 sm:col-span-1">
                  <label className="block text-gray-800 sm:text-gray-200 mb-2 font-medium">
                    Communication Style
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value="formal"
                        checked={formData.style === "formal"}
                        onChange={handleInputChange}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-800 sm:text-gray-200">Formal</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value="friendly"
                        checked={formData.style === "friendly"}
                        onChange={handleInputChange}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-800 sm:text-gray-200">Friendly</span>
                    </label>
                  </div>
                </div>

                {/* Language Selection */}
                <div className="md:col-span-2">
                  <label className="block text-gray-800 sm:text-gray-200 mb-2 font-medium">
                    Language
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 sm:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white sm:bg-transparent text-gray-800 sm:text-white"
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                  </select>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2 rounded-lg text-gray-600 sm:text-gray-200 font-medium hover:bg-gray-100 sm:hover:bg-gray-700 transition-colors order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-700 px-5 py-2 rounded-lg text-white font-medium hover:bg-green-600 transition-colors shadow-lg order-1 sm:order-2"
                >
                  Create Companion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topics;