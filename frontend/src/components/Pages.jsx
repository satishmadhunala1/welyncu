import { useState, useRef, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

const Pages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [pages, setPages] = useState([
    {
      id: 1,
      name: "Netflix",
      followers: "112k",
      createdOn: "12/12/2024",
      image: "/netflix.jpeg",
      description: "The world's leading streaming entertainment service"
    },
    {
      id: 2,
      name: "Delottie",
      followers: "89k",
      createdOn: "11/15/2024",
      image: "/delottie.png",
      description: "Professional services and consulting"
    },
    {
      id: 3,
      name: "Google",
      followers: "2.1M",
      createdOn: "10/22/2024",
      image: "/google.jpeg",
      description: "Search engine and technology company"
    },
    {
      id: 4,
      name: "Amazon",
      followers: "1.8M",
      createdOn: "09/30/2024",
      image: "/amazon.webp",
      description: "E-commerce and cloud computing giant"
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    website: "",
    tags: "",
    image: null
  });

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (pageId, event) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === pageId ? null : pageId);
  };

  const handleEdit = (pageId) => {
    console.log("Edit page:", pageId);
    setActiveDropdown(null);
    // Implement edit functionality
  };

  const handleDelete = (pageId) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      setPages(pages.filter(page => page.id !== pageId));
      setActiveDropdown(null);
    }
  };

  const handleCreatePage = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      description: "",
      category: "",
      website: "",
      tags: "",
      image: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.description.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const newPage = {
      id: pages.length + 1,
      name: formData.name,
      description: formData.description,
      followers: "0",
      createdOn: new Date().toLocaleDateString(),
      image: formData.image || "/default-page.jpg"
    };

    setPages(prev => [...prev, newPage]);
    handleCloseModal();
    
    // Show success message
    alert("Page created successfully!");
  };

  const DropdownMenu = ({ pageId }) => (
    <div className="absolute top-8 right-2 bg-[#2A2A2E] border border-gray-700 rounded-lg shadow-2xl shadow-black/50 z-10 min-w-[120px]">
      <button
        onClick={() => handleEdit(pageId)}
        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(pageId)}
        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700/50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
      >
        Delete
      </button>
    </div>
  );

  return (
    <div className="bg-[#1A1A1E] min-h-[80vh]  border border-gray-800 rounded-xl p-4 md:p-6 shadow-xl ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-100 uppercase tracking-tight">
            Your Pages
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Manage your professional pages and communities
          </p>
        </div>
        <button
          onClick={handleCreatePage}
          className="border flex items-center gap-2 border-gray-600 bg-gray-800/10 hover:bg-gray-600/20 px-4 py-2.5 rounded-lg cursor-pointer font-semibold text-white  transition-all duration-200 group"
        >
          <MdAdd className="text-lg group-hover:scale-110 transition-transform duration-200" />
          <p>Create a Page</p>
        </button>
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pages.map((page) => (
          <div
            key={page.id}
            className="relative group bg-[#202024] border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/5"
          >
            {/* Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={(e) => handleDropdownToggle(page.id, e)}
                className="absolute top-0 right-0 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 z-20"
              >
                <HiOutlineDotsVertical size={18} className="text-gray-400" />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === page.id && <DropdownMenu pageId={page.id} />}
            </div>

            {/* Page Content */}
            <div className="flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={page.image}
                  className="h-16 w-16 object-cover rounded-lg border border-gray-700"
                  alt={`${page.name} logo`}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-gray-100 truncate">
                    {page.name}
                  </h3>
                  <p className="text-purple-400 text-sm font-semibold">
                    {page.followers} followers
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {page.description}
              </p>

              <div className="text-xs text-gray-500 mb-4">
                <p>Created on: {page.createdOn}</p>
              </div>

             <Link to={"/page"}>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200">
                View Details
              </button>
             </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Create Page Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1A1A1E] border border-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-100">
                  Create New Page
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <span className="text-2xl text-gray-400">×</span>
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                Build your professional presence and connect with your audience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Page Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Page Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your page name"
                    className="w-full bg-[#202024] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none  duration-200"
                    required
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your page and what it offers"
                    rows="3"
                    className="w-full bg-[#202024] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none  duration-200 resize-none"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-[#202024] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none  duration-200"
                  >
                    <option value="">Select a category</option>
                    <option value="technology">Technology</option>
                    <option value="business">Business</option>
                    <option value="education">Education</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health & Wellness</option>
                  </select>
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    className="w-full bg-[#202024] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none  duration-200"
                  />
                </div>

                {/* Tags */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="Add relevant tags (comma separated)"
                    className="w-full bg-[#202024] border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none  duration-200"
                  />
                </div>

                {/* Image Upload */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Page Image
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-600/20 file:text-green-400 hover:file:bg-green-600/30"
                      />
                    </div>
                    {formData.image && (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="h-16 w-16 object-cover rounded-lg border border-gray-700"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 justify-end mt-8 pt-6 border-t border-gray-800">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-gray-800 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium shadow-lg shadow-purple-600/20"
                >
                  Create Page
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pages;