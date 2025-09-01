import React, { useState } from 'react';
import UsersProfile from "../../pages/Profile/Profile";
import SavedJobsTab from "../../components/SavedJobs";
import FunGames from '../../components/FunGames';
import ChatPage from '../../components/ChatPage';
import WalletPage from '../../components/WalletPage';
import NotificationPage from '../../components/Notifications';
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Dashboard = () => <UsersProfile />;
const SavedJobs = () => <SavedJobsTab />;
const Games = () => <FunGames />;
const Chat = () => <ChatPage />;
const Notifications = () => <NotificationPage />;
const Profile = () => <UsersProfile />;
const Wallet = () => <WalletPage />;

const Sidebar = ({ activeTab, setActiveTab, onClose }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-gauge' },
    { id: 'saved-jobs', label: 'Saved Jobs', icon: 'fa-bookmark' },
    { id: 'games', label: 'Games', icon: 'fa-gamepad' },
    { id: 'chat', label: 'Chat', icon: 'fa-comment' },
    { id: 'notifications', label: 'Notifications', icon: 'fa-bell' },
    { id: 'wallet', label: 'Wallet', icon: 'fa-wallet' }
  ];

  return (
    <div className="bg-[#1A1A1E] border border-gray-800 rounded-lg p-6 w-64 h-full flex flex-col">
      {/* Close button (mobile only) */}
      <div className="lg:hidden flex justify-end mb-4">
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <FiX size={22} />
        </button>
      </div>

      {/* Nav items */}
      <div className="flex flex-col space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-green-600/30 text-white'
                : 'text-gray-300 hover:bg-[#1f1f23] hover:text-white'
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              onClose?.(); // auto-close on mobile
            }}
          >
            <i className={`fas ${tab.icon} w-5 text-center`} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Bottom actions */}
      <div className="mt-auto pt-6 border-t border-gray-800">
        <Link to="/settings">
          <button className="flex items-center space-x-3 text-gray-400 hover:text-white px-4 py-2 w-full">
          <i className="fas fa-gear w-5 text-center" />
          <span>Settings</span>
        </button>
        </Link>
       <Link to={"/login"}>
         <button className="flex items-center space-x-3 text-gray-400 hover:text-white px-4 py-2 w-full">
          <i className="fas fa-right-from-bracket w-5 text-center" />
          <span>Logout</span>
        </button>
       </Link>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showSidebar, setShowSidebar] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'saved-jobs': return <SavedJobs />;
      case 'games': return <Games />;
      case 'chat': return <Chat />;
      case 'notifications': return <Notifications />;
      case 'profile': return <Profile />;
      case 'wallet': return <Wallet />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex ">
      {/* Sidebar for desktop */}
      <div className="hidden lg:block flex-shrink-0">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Sidebar for mobile (slide-in) */}
      <div className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 lg:hidden ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onClose={() => setShowSidebar(false)} />
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-3 overflow-auto">
        {/* Mobile top bar with menu button */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setShowSidebar(true)} 
            className="p-2 rounded-lg bg-[#1A1A1E] border border-gray-700 text-white"
          >
            <FiMenu size={20} />
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;
