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
      const res = await axios.get("http://localhost:8000/api/companions");
      setCompanions(res.data);
    } catch (err) {
      console.error("Error fetching companions:", err);
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
    try {
      await axios.post("http://localhost:8000/api/companions/create", {
        companion: formData,
      });
      await fetchCompanions(); // refresh list
      closeModal();
    } catch (error) {
      console.error("Error creating companion:", error.response?.data || error.message);
      alert("Failed to create companion. Please try again.");
    }
  };

  return (
    <div className="min-h-screen px-10 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[25px]">Your Companion Library</h3>
        <div className="flex items-center gap-5">
          {/* Search Input with Icon */}
          <div className="relative">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search your companion"
              className="border border-gray-300 pl-10 pr-4 py-2 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
            />
          </div>

          {/* Create New Button */}
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-green-700 px-4 py-2 rounded-lg font-semibold text-white cursor-pointer hover:bg-green-600 transition-colors"
          >
            <IoAddSharp size={20} />
            <p>Create New</p>
          </button>
        </div>
      </div>

      {/* Masonry Style Cards */}
      <div className="columns-3 gap-7 mt-10">
        {companions.map((card, i) => {
          const clipColor =
            clipColors[Math.floor(Math.random() * clipColors.length)];
          return (
            <div
              key={i}
              className="bg-gray-300 relative mb-7 break-inside-avoid p-6 pt-10 rounded-xl shadow-xl flex flex-col"
            >
              {/* Random Clip */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 h-10 w-52 ${clipColor} rounded-b-lg shadow-md`}
              />

              {/* Heading */}
              <h2 className="font-extrabold text-black text-[30px] mt-6">
                {card.subject}
              </h2>

              {/* Divider */}
              <div className="h-[2px] w-full bg-black mt-4 mb-4" />

              <h4 className="font-bold text-[18px] text-black mb-2">
                {card.name}
              </h4>
              <p className="text-gray-600 font-semibold text-[15px]">
                {card.teach}
              </p>

              <Link to={`/companions/${card._id}`}>
                <button className="mt-6 bg-black text-white w-full py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Launch Lesson
                </button>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Modal for Creating New Companion */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1f1f1f] rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 ">
              <h3 className="text-2xl font-bold text-gray-100">
                Create New Companion
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-300 cursor-pointer bg-black/30 p-2 rounded-full transition-colors"
              >
                <IoClose size={28} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-200 mb-2 font-medium">
                    Companion Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none "
                    placeholder="e.g., Codey, the Logic Hacker"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-gray-200 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none "
                    placeholder="e.g., React JS, Mathematics"
                    required
                  />
                </div>

                {/* Teaching Style Field */}
                <div className="md:col-span-2">
                  <label className="block text-gray-200 mb-2 font-medium">
                    Teaching Style/Approach
                  </label>
                  <textarea
                    name="teach"
                    value={formData.teach}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none "
                    placeholder="Describe how this companion should teach..."
                    required
                  ></textarea>
                </div>

                {/* Voice Selection */}
                <div>
                  <label className="block text-gray-200 mb-2 font-medium">
                    Voice Preference
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="voice"
                        value="male"
                        checked={formData.voice === "male"}
                        onChange={handleInputChange}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      <span>Male</span>
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
                      <span>Female</span>
                    </label>
                  </div>
                </div>

                {/* Style Selection */}
                <div>
                  <label className="block text-gray-200 mb-2 font-medium">
                    Communication Style
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value="formal"
                        checked={formData.style === "formal"}
                        onChange={handleInputChange}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      <span>Formal</span>
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
                      <span>Friendly</span>
                    </label>
                  </div>
                </div>

                {/* Language Selection */}
                <div className="md:col-span-2">
                  <label className="block text-gray-200 mb-2 font-medium">
                    Language
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none"
                  >
                    <option value="english">English</option>
                  </select>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-4 mt-8 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2 rounded-lg text-gray-200 font-medium hover:bg-gray-100 hover:text-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-700 px-5 py-2 rounded-lg text-white font-medium hover:bg-green-600 transition-colors"
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
