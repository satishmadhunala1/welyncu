import React, { useState } from 'react';
import { FiSearch, FiMoreVertical, FiPaperclip, FiSmile, FiMic, FiSend, FiChevronLeft, FiVideo, FiMessageSquare } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';

const ProfessionalChat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState({}); // keep local messages

  // Sample data
  const contacts = [
    { id: 1, name: 'Sarah Johnson', role: 'Product Manager', avatar: '/hero1.jpg', status: 'online', lastMessage: 'Looking forward to our meeting tomorrow!', time: '2:30 PM', unread: 0 },
    { id: 2, name: 'Michael Chen', role: 'UX Designer', avatar: '/hero2.jpg', status: 'away', lastMessage: 'I sent the design files', time: 'Yesterday', unread: 2 },
    { id: 3, name: 'Emily Rodriguez', role: 'Frontend Developer', avatar: '/hero3.jpg', status: 'offline', lastMessage: 'Can we schedule a code review?', time: 'Wednesday', unread: 0 },
    { id: 4, name: 'David Kim', role: 'Marketing Director', avatar: '/hero4.jpg', status: 'online', lastMessage: 'The campaign results are in', time: 'Tuesday', unread: 1 },
    { id: 5, name: 'Jessica Williams', role: 'CEO', avatar: '/hero5.jpg', status: 'online', lastMessage: 'Let\'s discuss the quarterly goals', time: 'Monday', unread: 0 }
  ];

  // Default messages per contact
  const defaultMessages = {
    1: [
      { id: 1, text: 'Hi there! How can I help you today?', sender: 'them', time: '2:15 PM' },
      { id: 2, text: 'I wanted to discuss the project timeline', sender: 'me', time: '2:17 PM' },
      { id: 3, text: 'Sure, I have the updated schedule ready', sender: 'them', time: '2:20 PM' },
      { id: 4, text: 'That would be great. Can you share it?', sender: 'me', time: '2:22 PM' },
      { id: 5, text: 'Looking forward to our meeting tomorrow!', sender: 'them', time: '2:30 PM' }
    ],
    2: [
      { id: 1, text: 'Hey, have you finished the UI designs?', sender: 'me', time: '10:15 AM' },
      { id: 2, text: 'Almost done. I\'ll send them by EOD', sender: 'them', time: '10:30 AM' },
      { id: 3, text: 'I sent the design files', sender: 'them', time: '4:45 PM' }
    ],
    3: [
      { id: 1, text: 'The component is ready for review', sender: 'them', time: '3:15 PM' },
      { id: 2, text: 'Great! Can we schedule a code review?', sender: 'them', time: '3:20 PM' }
    ],
    4: [
      { id: 1, text: 'The new campaign is performing well', sender: 'them', time: '11:15 AM' },
      { id: 2, text: 'That\'s excellent news!', sender: 'me', time: '11:20 AM' },
      { id: 3, text: 'The campaign results are in', sender: 'them', time: '2:15 PM' }
    ],
    5: [
      { id: 1, text: 'We need to align on Q3 objectives', sender: 'them', time: '9:15 AM' },
      { id: 2, text: 'I\'ve prepared a draft presentation', sender: 'me', time: '9:30 AM' },
      { id: 3, text: 'Let\'s discuss the quarterly goals', sender: 'them', time: '10:15 AM' }
    ]
  };

  const getMessages = (id) => chatMessages[id] || defaultMessages[id] || [];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && selectedChat) {
      const newMsg = {
        id: Date.now(),
        text: message,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => ({
        ...prev,
        [selectedChat.id]: [...getMessages(selectedChat.id), newMsg]
      }));
      setMessage('');
    }
  };

  const handleVideoCall = () => setIsVideoCallOpen(true);
  const closeVideoCall = () => setIsVideoCallOpen(false);

  const StatusIndicator = ({ status }) => {
    let color;
    switch (status) {
      case 'online': color = 'text-green-500'; break;
      case 'away': color = 'text-yellow-500'; break;
      case 'offline': color = 'text-gray-500'; break;
      default: color = 'text-gray-500';
    }
    return <BsCircleFill className={`${color} text-xs`} />;
  };

  return (
    <div className="flex h-screen bg-[#1A1A1E] border border-gray-800 rounded-lg">
      {/* Sidebar */}
      <div className={`w-full md:w-80 border-r border-gray-800 flex flex-col transition-all duration-300 ${selectedChat ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Messages</h2>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-700">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-[#1A1A1E] border border-gray-800 rounded-lg focus:outline-none text-gray-200"
            />
          </div>
        </div>

        {/* Contacts */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {contacts.map(contact => (
            <div
              key={contact.id}
              className={`flex items-center p-4 border-b border-gray-800 cursor-pointer hover:bg-[#232327] ${selectedChat?.id === contact.id ? 'bg-[#232327]' : ''}`}
              onClick={() => setSelectedChat(contact)}
            >
              <div className="relative">
                <img src={contact.avatar} className="w-10 h-10 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0">
                  <StatusIndicator status={contact.status} />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-100">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-gray-400 truncate max-w-[200px]">{contact.lastMessage}</p>
                  {contact.unread > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {contact.unread}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{contact.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      {selectedChat && (
        <div className="flex-1 w-full flex flex-col">
          {/* Header */}
          <div className="border-b border-gray-800 px-4 py-3 flex items-center">
            <button className="md:hidden mr-3 text-gray-400" onClick={() => setSelectedChat(null)}>
              <FiChevronLeft size={20} />
            </button>
            <div className="flex items-center">
              <img src={selectedChat.avatar} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="font-medium text-gray-200">{selectedChat.name}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <StatusIndicator status={selectedChat.status} />
                  <span className="ml-1 capitalize">{selectedChat.status}</span>
                </p>
              </div>
            </div>
            <div className="ml-auto flex items-center">
              <button className="text-gray-400 hover:text-white mr-2" onClick={handleVideoCall}>
                <FiVideo size={18} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <FiMoreVertical size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {getMessages(selectedChat.id).map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${msg.sender === 'me' ? 'bg-blue-500/20 text-white' : 'bg-gray-800 text-gray-200'}`}>
                  <p className='text-[10px] md:text-[15px]'>{msg.text}</p>
                  <p className="text-xs mt-1 text-gray-400">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t  border-gray-800 py-2">
            <form onSubmit={handleSendMessage} className="flex items-center ">
              <button type="button" className="text-gray-400 hover:text-white p-1">
                <FiPaperclip size={20} />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[#1A1A1E] border border-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none"
              />
              <button type="button" className="text-gray-400 hover:text-white p-1">
                <FiSmile size={20} />
              </button>
              <button type="button" className="text-gray-400 hover:text-white p-1">
                <FiMic size={20} />
              </button>
              <button type="submit" disabled={!message.trim()} className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 disabled:bg-blue-300">
                <FiSend size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Video Call Modal */}
      {isVideoCallOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1A1A1E] border border-gray-800 rounded-lg w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Video Call with {selectedChat?.name}</h3>
              <button onClick={closeVideoCall} className="text-gray-400 hover:text-white">
                ✕
              </button>
            </div>
            <div className="bg-black rounded-lg h-80 flex items-center justify-center mb-4">
              <p className="text-gray-500">Dummy Video Call Interface</p>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600"><FiMic size={20} /></button>
              <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600"><FiVideo size={20} /></button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={closeVideoCall}>End Call</button>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!selectedChat && (
        <div className="flex-1 hidden md:flex flex-col items-center justify-center p-8 text-center">
          <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
            <FiMessageSquare className="text-blue-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Select a conversation</h3>
          <p className="text-gray-400">Choose a contact from the sidebar to start chatting</p>
        </div>
      )}
    </div>
  );
};

export default ProfessionalChat;
