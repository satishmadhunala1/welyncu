import React, { useState } from 'react';
import { IoAdd, IoSearch } from "react-icons/io5";
import { FaCode, FaVideo } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaTimes } from 'react-icons/fa';

const LiveCards = [
    { "id": 1, "img": "/l1.png", "title": "Mastering React Hooks for Beginners", "host": "John Doe", "date": "July 25, 2025", "time": "10:00 AM PST", "course": "Web Development" }, { "id": 2, "img": "/l2.png", "title": "Introduction to UI/UX Design Principles", "host": "John Smith", "date": "July 26, 2025", "time": "02:00 PM EST", "course": "UI/UX Design" }, { "id": 3, "img": "/l3.png", "title": "Advanced SEO Strategies for Digital Marketing", "host": "Alice Johnson", "date": "July 27, 2025", "time": "09:00 AM GMT", "course": "Digital Marketing" }, { "id": 4, "img": "/l4.png", "title": "Building Scalable Backend with Node.js", "host": "Robert Brown", "date": "July 28, 2025", "time": "1:00 PM PST", "course": "Backend Development" }, { "id": 5, "img": "/l5.png", "title": "Crafting Compelling Copy for Social Media", "host": "Sarah Green", "date": "July 29, 2025", "time": "11:00 AM EST", "course": "Content Creation" }, { "id": 6, "img": "/l6.png", "title": "Data Visualization with D3.js", "host": "Michael Davis", "date": "July 25, 2025", "time": "03:00 PM GST", "course": "Data Visualization" }
];

const LiveSessions = () => {
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [isHostModalOpen, setIsHostModalOpen] = useState(false);
    const [sessionCode, setSessionCode] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [hostForm, setHostForm] = useState({
        title: "",
        date: "",
        hour: "10",
        minute: "00",
        period: "AM",
        course: "",
        description: "",
        image: null,
        imagePreview: null,
    });

    // Open / Close
    const handleJoinByCode = () => setIsJoinModalOpen(true);
    const handleCloseJoinModal = () => { setIsJoinModalOpen(false); setSessionCode(""); };
    const handleHostSession = () => setIsHostModalOpen(true);
    const handleCloseHostModal = () => {
        setIsHostModalOpen(false);
        setHostForm({
            title: "", date: "", hour: "10", minute: "00", period: "AM",
            course: "", description: "", image: null, imagePreview: null
        });
    };

    // Handlers
    const handleCodeSubmit = e => {
        e.preventDefault();
        alert(`Joining session with code: ${sessionCode}`);
        handleCloseJoinModal();
    };
    const handleHostFormChange = e => {
        const { name, value } = e.target;
        setHostForm(prev => ({ ...prev, [name]: value }));
    };
    const handleImageChange = e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setHostForm(prev => ({ ...prev, image: file, imagePreview: reader.result }));
            reader.readAsDataURL(file);
        }
    };
    const removeImage = () => setHostForm(prev => ({ ...prev, image: null, imagePreview: null }));

    const handleHostSubmit = e => {
        e.preventDefault();
        const formattedTime = `${hostForm.hour}:${hostForm.minute} ${hostForm.period}`;
        alert(`Hosting new session: ${JSON.stringify({ ...hostForm, time: formattedTime })}`);
        handleCloseHostModal();
    };

    // Filtering
    const filteredSessions = LiveCards.filter(s => {
        const q = searchQuery.toLowerCase();
        return [s.title, s.host, s.course, s.date, s.time].some(field =>
            field.toLowerCase().includes(q)
        );
    });

    // Options
    const hourOptions = [...Array(12).keys()].map(i => (
        <option key={i + 1} value={i + 1}>{i + 1}</option>
    ));
    const minuteOptions = [...Array(60).keys()]
        .filter(i => i % 5 === 0)
        .map(i => <option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</option>);

    return (
        <div className="min-h-screen px-2 lg:px-10 py-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="font-bold text-3xl">Live Sessions</h1>
                    <p className="text-gray-400 text-sm">Join, host, or connect in real-time workshops and video calls.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <button onClick={handleHostSession} className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                        <IoAdd size={20} /> Host New
                    </button>
                    <button onClick={handleJoinByCode} className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                        <FaCode size={18} /> Join by Code
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="mt-6 mb-4">
                <div className="relative max-w-md">
                    <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search sessions..."
                        className="pl-10 pr-10 py-3 w-full bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                            <FaTimes />
                        </button>
                    )}
                </div>
                <p className="text-gray-400 text-sm mt-2">
                    {filteredSessions.length} {filteredSessions.length === 1 ? 'session' : 'sessions'} found {searchQuery && `for "${searchQuery}"`}
                </p>
            </div>

            {/* Grid */}
            <h2 className="font-bold text-yellow-600 text-lg mt-4">Featured & Upcoming</h2>
            {filteredSessions.length === 0 ? (
                <div className="text-center py-16">
                    <div className="text-5xl mb-2">🔍</div>
                    <p className="font-semibold">No sessions found</p>
                    <p className="text-gray-400 text-sm">Try a different search</p>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filteredSessions.map(item => (
                        <div key={item.id} className="bg-black/70 rounded-xl overflow-hidden shadow-lg flex flex-col hover:scale-[1.02] transition-transform">
                            <img src={item.img} alt="" className="h-48 w-full object-cover" />
                            <div className="flex flex-col flex-1 p-4">
                                <h3 className="font-bold text-lg line-clamp-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">Hosted by {item.host}</p>
                                <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
                                    <MdDateRange className="text-green-400" /> {item.date} - {item.time}
                                </div>
                                <p className="text-gray-400 text-sm mt-1">{item.course}</p>
                                <div className="mt-auto pt-3">
                                    <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold">
                                        <FaVideo /> Join Session
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Join Modal */}
            {isJoinModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md relative">
                        <button onClick={handleCloseJoinModal} className="absolute top-4 right-4 text-gray-400 hover:text-white"><FaTimes /></button>
                        <h2 className="text-xl font-bold text-center mb-2">Join by Code</h2>
                        <input value={sessionCode} onChange={e => setSessionCode(e.target.value)}
                            placeholder="Enter session code"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-green-600"
                        />
                        <button onClick={handleCodeSubmit} disabled={!sessionCode.trim()}
                            className="w-full mt-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 py-2 rounded-lg font-semibold">
                            Join Session
                        </button>
                    </div>
                </div>
            )}

            {/* Host Modal */}
            {isHostModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 rounded-xl p-3  max-w-lg relative max-h-[90vh] overflow-y-auto custom-scroll">
                        <button onClick={handleCloseHostModal} className="absolute top-4 right-4 text-gray-400 hover:text-white"><FaTimes /></button>
                        <h2 className="text-xl font-bold text-center mb-2">Host New Session</h2>
                        <form onSubmit={handleHostSubmit} className="space-y-4">
                            {/* Image */}
                            <div>
                                <label className="text-sm text-gray-400">Session Image</label>
                                {hostForm.imagePreview ? (
                                    <div className="relative mt-2">
                                        <img src={hostForm.imagePreview} alt="" className="h-24 w-40 object-cover rounded-lg" />
                                        <button type="button" onClick={removeImage} className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1"><FaTimes size={12} /></button>
                                    </div>
                                ) : (
                                    <label className="flex flex-col items-center justify-center mt-2 h-24 w-40 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer">
                                        <IoAdd className="text-gray-400" />
                                        <span className="text-xs text-gray-400">Add Image</span>
                                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                    </label>
                                )}
                            </div>

                            {/* Title */}
                            <input name="title" value={hostForm.title} onChange={handleHostFormChange}
                                placeholder="Session Title *"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                                required
                            />

                            {/* Date & Time */}
                            <div className="grid grid-cols-2 gap-3">
                                <input type="date" name="date" value={hostForm.date} onChange={handleHostFormChange}
                                    className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none" required />
                                <div className="md:flex gap-2">
                                    <div className='flex gap-2'>
                                        <select name="hour" value={hostForm.hour} onChange={handleHostFormChange} className="bg-gray-800 border border-gray-700 rounded-lg px-2 py-2 text-white">{hourOptions}</select>
                                        <select name="minute" value={hostForm.minute} onChange={handleHostFormChange} className="bg-gray-800 border border-gray-700 rounded-lg px-2 py-2 text-white">{minuteOptions}</select>
                                    </div>
                                    <div className='mt-2 md:mt-0'>
                                        <select name="period" value={hostForm.period} onChange={handleHostFormChange} className="bg-gray-800 border border-gray-700 rounded-lg px-2 py-2 text-white"><option>AM</option><option>PM</option></select>
                                    </div>
                                </div>
                            </div>

                            {/* Course */}
                            <input name="course" value={hostForm.course} onChange={handleHostFormChange}
                                placeholder="Course/Category *"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                                required
                            />

                            {/* Description */}
                            <textarea name="description" value={hostForm.description} onChange={handleHostFormChange}
                                placeholder="Session Description"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white min-h-[80px]"
                            />

                            <button type="submit" disabled={!hostForm.title.trim() || !hostForm.date || !hostForm.course.trim()}
                                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-700 py-3 rounded-lg font-semibold">
                                Create Session
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Scoped scrollbar */}
            <style jsx>{`
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #16a34a; border-radius: 4px; }
      `}</style>
        </div>
    );
};

export default LiveSessions;
