import { useState } from 'react';
import About from './About';
import Posts from './Posts';
import Jobs from './Jobs';

const Details = () => {
  const [activeTab, setActiveTab] = useState('About');

  const tabComponents = {
    About: () => <div className="p-4 border border-gray-600 mt-2 rounded-sm"><About /></div>,
    Posts: () => <div className="p-4 border border-gray-600 mt-2 rounded-sm"><Posts /></div>,
    Jobs: () => <div className="p-4 border border-gray-600 mt-2 rounded-sm"><Jobs /></div>,
  };

  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="lg:px-10 px-2 mt-7">
      <div className="flex items-center gap-4">
        {Object.keys(tabComponents).map((tabName) => (
          <p
            key={tabName}
            className={`border border-gray-600 px-5 py-2 font-semibold hover:bg-gray-800 rounded-sm cursor-pointer transition-colors ${
              activeTab === tabName
                ? 'bg-gray-800 text-white'
                : 'bg-transparent'
            }`}
            onClick={() => setActiveTab(tabName)}
          >
            {tabName}
          </p>
        ))}
      </div>

      {/* Render the active tab component */}
      <ActiveComponent />
    </div>
  );
};

export default Details;
