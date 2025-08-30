import React, { useState } from 'react';
import { IoAdd, IoSearch } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';

const LiveCards = [
    {
        "id": 1,
        "img": "/l1.png",
        "title": "Mastering React Hooks for Beginners",
        "host": "John Doe",
        "date": "July 25, 2025",
        "time": "10:00 AM PST",
        "course": "Web Development"
    },
    {
        "id": 2,
        "img": "/l2.png",
        "title": "Introduction to UI/UX Design Principles",
        "host": "John Smith",
        "date": "July 26, 2025",
        "time": "02:00 PM EST",
        "course": "UI/UX Design"
    },
    {
        "id": 3,
        "img": "/l3.png",
        "title": "Advanced SEO Strategies for Digital Marketing",
        "host": "Alice Johnson",
        "date": "July 27, 2025",
        "time": "09:00 AM GMT",
        "course": "Digital Marketing"
    },
    {
        "id": 4,
        "img": "/l4.png",
        "title": "Building Scalable Backend with Node.js",
        "host": "Robert Brown",
        "date": "July 28, 2025",
        "time": "1:00 PM PST",
        "course": "Backend Development"
    },
    {
        "id": 5,
        "img": "/l5.png",
        "title": "Crafting Compelling Copy for Social Media",
        "host": "Sarah Green",
        "date": "July 29, 2025",
        "time": "11:00 AM EST",
        "course": "Content Creation"
    },
    {
        "id": 6,
        "img": "/l6.png",
        "title": "Data Visualization with D3.js",
        "host": "Michael Davis",
        "date": "July 25, 2025",
        "time": "03:00 PM GST",
        "course": "Data Visualization"
    }
];

const LiveSessions = () => {
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [isHostModalOpen, setIsHostModalOpen] = useState(false);
    const [sessionCode, setSessionCode] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [hostForm, setHostForm] = useState({
        title: "",
        date: "",
        time: "",
        hour: "10",
        minute: "00",
        period: "AM",
        course: "",
        description: "",
        image: null,
        imagePreview: null
    });

    const handleJoinByCode = () => {
        setIsJoinModalOpen(true);
    };

    const handleCloseJoinModal = () => {
        setIsJoinModalOpen(false);
        setSessionCode("");
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        alert(`Joining session with code: ${sessionCode}`);
        handleCloseJoinModal();
    };

    const handleHostSession = () => {
        setIsHostModalOpen(true);
    };

    const handleCloseHostModal = () => {
        setIsHostModalOpen(false);
        setHostForm({
            title: "",
            date: "",
            time: "",
            hour: "10",
            minute: "00",
            period: "AM",
            course: "",
            description: "",
            image: null,
            imagePreview: null
        });
    };

    const handleHostSubmit = (e) => {
        e.preventDefault();
        // Format time with AM/PM
        const formattedTime = `${hostForm.hour}:${hostForm.minute} ${hostForm.period}`;
        const formData = {
            ...hostForm,
            time: formattedTime
        };
        alert(`Hosting new session: ${JSON.stringify(formData)}`);
        handleCloseHostModal();
    };

    const handleHostFormChange = (e) => {
        const { name, value } = e.target;
        setHostForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setHostForm((prev) => ({
                    ...prev,
                    image: file,
                    imagePreview: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setHostForm((prev) => ({
            ...prev,
            image: null,
            imagePreview: null
        }));
    };

    // Filter sessions based on search query
    const filteredSessions = LiveCards.filter(session => {
        const searchLower = searchQuery.toLowerCase();
        return (
            session.title.toLowerCase().includes(searchLower) ||
            session.host.toLowerCase().includes(searchLower) ||
            session.course.toLowerCase().includes(searchLower) ||
            session.date.toLowerCase().includes(searchLower) ||
            session.time.toLowerCase().includes(searchLower)
        );
    });

    // Generate hour options
    const hourOptions = [];
    for (let i = 1; i <= 12; i++) {
        hourOptions.push(<option key={i} value={i}>{i}</option>);
    }

    // Generate minute options
    const minuteOptions = [];
    for (let i = 0; i < 60; i += 5) {
        const minute = i < 10 ? `0${i}` : i;
        minuteOptions.push(<option key={i} value={minute}>{minute}</option>);
    }

    return (
        <div className='min-h-screen px-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-[30px]'>Live Sessions</h1>
                    <p className='text-gray-400 text-[15px]'>Join, host, or connect in real-time workshops and video calls.</p>
                </div>
                <div className='flex items-center gap-5'>
                    <div
                        className='flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg font-semibold cursor-pointer'
                        onClick={handleHostSession}
                        aria-label="Host new session"
                    >
                        <IoAdd size={20} />
                        <p>Host new Session</p>
                    </div>
                    <div
                        className='flex items-center gap-2 bg-transparent border border-gray-600 px-4 py-2 rounded-lg font-semibold cursor-pointer'
                        onClick={handleJoinByCode}
                        aria-label="Join session by code"
                    >
                        <FaCode size={20} />
                        <p>Join by Code</p>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mt-6 mb-4">
                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IoSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search sessions by title, host, course, date, or time..."
                        className="pl-10 pr-4 py-3 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                        >
                            <FaTimes />
                        </button>
                    )}
                </div>
                <p className="text-gray-400 text-sm mt-2">
                    {filteredSessions.length} {filteredSessions.length === 1 ? 'session' : 'sessions'} found
                    {searchQuery && ` for "${searchQuery}"`}
                </p>
            </div>

            <h2 className='font-bold text-yellow-600 text-[20px] mt-4'>Featured & Upcoming Sessions</h2>

            {/* LiveSessionCards */}
            {filteredSessions.length === 0 ? (
                <div className="text-center py-16">
                    <div className="text-5xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold">No sessions found</h3>
                    <p className="text-gray-400 mt-2">Try adjusting your search query</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7'>
                    {filteredSessions.map((item) => (
                        <div
                            key={item.id}
                            className='bg-black/80 p-2 rounded-xl shadow-xl shadow-black flex flex-col h-[400px] transition-transform duration-300 hover:scale-[1.02]'
                        >
                            <img
                                src={item.img}
                                alt={`${item.title} thumbnail`}
                                className='h-[200px] w-full object-cover rounded-xl'
                            />
                            <div className='flex flex-col flex-1 p-3'>
                                <h3 className='font-bold text-[17px] mt-2 line-clamp-2'>{item.title}</h3>
                                <p className='text-gray-400 text-[13px]'>Hosted by {item.host}</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <MdDateRange className="text-green-400" />
                                    <p className='text-gray-400 text-[13px]'>{item.date} - {item.time}</p>
                                </div>
                                <p className='text-gray-400 text-[13px] mt-2'>{item.course}</p>
                                <div className='mt-auto pt-3'>
                                    <div className='flex items-center gap-2 cursor-pointer w-full bg-green-600 px-4 py-2 rounded-lg font-semibold justify-center hover:bg-green-700 transition-colors'>
                                        <FaVideo />
                                        <p>Join Session</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Join by Code Modal */}
            {isJoinModalOpen && (
                <div className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300'>
                    <div className='bg-gray-900 rounded-2xl p-6 max-w-md w-full relative border border-green-600/30 shadow-2xl'>
                        <button
                            onClick={handleCloseJoinModal}
                            className='absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-200'
                            aria-label="Close join modal"
                        >
                            <FaTimes size={20} />
                        </button>
                        <h2 className='text-2xl font-bold text-white text-center'>Join Session by Code</h2>
                        <p className='text-gray-400 text-center mt-2'>Enter the session code to join a live session.</p>
                        <div className='mt-6'>
                            <input
                                type='text'
                                placeholder='Enter session code'
                                value={sessionCode}
                                onChange={(e) => setSessionCode(e.target.value)}
                                className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600'
                                aria-label="Session code input"
                            />
                            <button
                                onClick={handleCodeSubmit}
                                className='w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold text-white mt-4 transition-all duration-200 disabled:bg-gray-700 disabled:cursor-not-allowed'
                                disabled={!sessionCode.trim()}
                            >
                                Join Session
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Host New Session Modal */}
            {isHostModalOpen && (
                <div className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300'>
                    <div className='bg-gray-900 rounded-2xl p-6 max-w-lg w-full relative border border-green-600/30 shadow-2xl overflow-y-auto max-h-screen'>
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
                        <button
                            onClick={handleCloseHostModal}
                            className='absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-200'
                            aria-label="Close host modal"
                        >
                            <FaTimes size={20} />
                        </button>
                        <h2 className='text-2xl font-bold text-white text-center'>Host New Session</h2>
                        <p className='text-gray-400 text-center mt-2'>Fill in the details to create a new live session.</p>

                        <form onSubmit={handleHostSubmit} className='mt-6 space-y-4'>
                            {/* Image Upload */}
                            <div>
                                <label className='text-gray-400 text-sm'>Session Image</label>
                                <div className='mt-1 flex items-center gap-4'>
                                    {hostForm.imagePreview ? (
                                        <div className='relative'>
                                            <img
                                                src={hostForm.imagePreview}
                                                alt="Session preview"
                                                className='h-24 w-24 object-cover rounded-lg border border-gray-700'
                                            />
                                            <button
                                                type="button"
                                                onClick={removeImage}
                                                className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1'
                                            >
                                                <FaTimes size={12} />
                                            </button>
                                        </div>
                                    ) : (
                                        <label className='flex flex-col items-center justify-center h-24 w-24 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-green-600 transition-colors duration-200'>
                                            <IoAdd size={24} className='text-gray-400' />
                                            <span className='text-xs text-gray-400 mt-1'>Add Image</span>
                                            <input
                                                type='file'
                                                accept='image/*'
                                                onChange={handleImageChange}
                                                className='hidden'
                                            />
                                        </label>
                                    )}
                                    <p className='text-gray-500 text-xs'>Recommended: 800x450px (16:9 aspect ratio)</p>
                                </div>
                            </div>

                            <div>
                                <label className='text-gray-400 text-sm'>Session Title *</label>
                                <input
                                    type='text'
                                    name='title'
                                    placeholder='Enter session title'
                                    value={hostForm.title}
                                    onChange={handleHostFormChange}
                                    className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600 mt-1'
                                    required
                                />
                            </div>

                            {/* <div>
                                <label className='text-gray-400 text-sm'>Description</label>
                                <textarea
                                    name='description'
                                    placeholder='Enter session description'
                                    value={hostForm.description}
                                    onChange={handleHostFormChange}
                                    rows={3}
                                    className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600 mt-1 resize-none'
                                />
                            </div> */}

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className='text-gray-400 text-sm'>Date *</label>
                                    <input
                                        type='date'
                                        name='date'
                                        value={hostForm.date}
                                        onChange={handleHostFormChange}
                                        className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600 mt-1'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='text-gray-400 text-sm'>Time *</label>
                                    <div className='flex gap-2 mt-1'>
                                        <select
                                            name='hour'
                                            value={hostForm.hour}
                                            onChange={handleHostFormChange}
                                            className='flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600'
                                        >
                                            {hourOptions}
                                        </select>
                                        <span className='text-white py-2'>:</span>
                                        <select
                                            name='minute'
                                            value={hostForm.minute}
                                            onChange={handleHostFormChange}
                                            className='flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600'
                                        >
                                            {minuteOptions}
                                        </select>
                                        <select
                                            name='period'
                                            value={hostForm.period}
                                            onChange={handleHostFormChange}
                                            className='flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600'
                                        >
                                            <option value="AM">AM</option>
                                            <option value="PM">PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className='text-gray-400 text-sm'>Course/Category *</label>
                                <input
                                    type='text'
                                    name='course'
                                    placeholder='Enter course name or category'
                                    value={hostForm.course}
                                    onChange={handleHostFormChange}
                                    className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600 mt-1'
                                    required
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold text-white mt-4 transition-all duration-200 disabled:bg-gray-700 disabled:cursor-not-allowed'
                                disabled={!hostForm.title.trim() || !hostForm.date || !hostForm.course.trim()}
                            >
                                Create Session
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LiveSessions;