import React, { useState } from 'react';
import UsersProfile from "../../pages/Profile/Profile"
import SavedJobsTab from "../../components/SavedJobs"
import FunGames from '../../components/FunGames';
import ChatPage from '../../components/ChatPage';
import WalletPage from '../../components/WalletPage';
const Dashboard = () => {
  return (
   <div>
      <UsersProfile/>
    </div>
  );
};

const SavedJobs = () => {
  return (
    <div>
      <SavedJobsTab/>
    </div>
  );
};

const Games = () => {
  return (
    <div> 
     <FunGames/>

    </div>
  );
};

const Chat = () => {
  return (
   <div>
    <ChatPage/>
   </div>
  );
};

const Community = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Community</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Web Developers Group</h3>
          <p className="text-gray-600">1.2k members • 45 online</p>
          <p className="text-sm text-gray-500 mt-2">Latest post: React vs Vue - which is better for job seeking?</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Remote Workers</h3>
          <p className="text-gray-600">3.5k members • 120 online</p>
          <p className="text-sm text-gray-500 mt-2">Latest post: How to negotiate remote work arrangements?</p>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <UsersProfile/>
    </div>
  );
};

const Wallet = () => {
  return (
   <div>
    <WalletPage/>
   </div>
  );
};

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-gauge' },
    { id: 'saved-jobs', label: 'Saved Jobs', icon: 'fa-bookmark' },
    { id: 'games', label: 'Games', icon: 'fa-gamepad' },
    { id: 'chat', label: 'Chat', icon: 'fa-comment' },
    { id: 'community', label: 'Community', icon: 'fa-users' },
    { id: 'profile', label: 'Profile', icon: 'fa-user' },
    { id: 'wallet', label: 'Wallet', icon: 'fa-wallet' }
  ];

  return (
    <div className="bg-[#1A1A1E] border border-gray-800 rounded-lg p-6 w-64">
      <div className="flex flex-col space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-green-600/30 text-white'
                : 'text-gray-300 hover:bg-[#1f1f23] hover:text-white'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <i className={`fas ${tab.icon} w-5 text-center`} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-800">
        <button className="flex items-center space-x-3 text-gray-400 hover:text-white px-4 py-2 w-full">
          <i className="fas fa-gear w-5 text-center" />
          <span>Settings</span>
        </button>
        <button className="flex items-center space-x-3 text-gray-400 hover:text-white px-4 py-2 w-full">
          <i className="fas fa-right-from-bracket w-5 text-center" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'saved-jobs': return <SavedJobs />;
      case 'games': return <Games />;
      case 'chat': return <Chat />;
      case 'community': return <Community />;
      case 'profile': return <Profile />;
      case 'wallet': return <Wallet />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen px-10 py-2  flex">
      <div className="flex-shrink-0">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex-1  pl-3 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;