import React, { useState, useEffect } from 'react';
import { 
  FiMessageSquare, 
  FiCalendar, 
  FiDollarSign, 
  FiRefreshCw, 
  FiUserPlus,
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiTrash2,
  FiFilter,
  FiX,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';

// Notification data
const initialNotifications = [
  {
    id: 1,
    title: 'New Message',
    message: 'You have received a new message from Sarah Johnson.',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    isRead: false,
    type: 'message',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Meeting Reminder',
    message: 'Team meeting starts in 15 minutes. Please join on time.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    isRead: false,
    type: 'reminder',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Payment Received',
    message: 'Your invoice #INV-2023-05 for $1,250.00 has been paid.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    isRead: true,
    type: 'financial',
    priority: 'high'
  },
  {
    id: 4,
    title: 'System Update Available',
    message: 'New version v2.5.1 is available with security patches and performance improvements.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    isRead: true,
    type: 'system',
    priority: 'medium'
  },
  {
    id: 5,
    title: 'New Follower',
    message: 'John Smith started following you. Check out their profile.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    isRead: false,
    type: 'social',
    priority: 'low'
  },
  {
    id: 6,
    title: 'Security Alert',
    message: 'New login from unrecognized device. Please verify if this was you.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    isRead: false,
    type: 'security',
    priority: 'high'
  },
];

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [expandedNotification, setExpandedNotification] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Simulate API fetch
  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      setNotifications(initialNotifications);
      setIsLoading(false);
    };

    fetchNotifications();
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      isRead: true
    })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'message': return <FiMessageSquare className="text-gray-400" />;
      case 'reminder': return <FiCalendar className="text-gray-400" />;
      case 'financial': return <FiDollarSign className="text-gray-400" />;
      case 'system': return <FiRefreshCw className="text-gray-400" />;
      case 'social': return <FiUserPlus className="text-gray-400" />;
      case 'security': return <FiBell className="text-gray-400" />;
      default: return <FiBell className="text-gray-400" />;
    }
  };

  // const getPriorityBadge = (priority) => {
  //   let className = "";
  //   switch (priority) {
  //     case 'high': className = "bg-red-100 text-red-800"; break;
  //     case 'medium': className = "bg-yellow-100 text-yellow-800"; break;
  //     case 'low': className = "bg-blue-100 text-blue-800"; break;
  //     default: className = "bg-gray-100 text-gray-800";
  //   }
    
  //   return (
  //     <span className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}>
  //       {priority}
  //     </span>
  //   );
  // };

  const filteredNotifications = notifications.filter(notification => {
    // Type filter
    const typeMatch = filter === 'all' || notification.type === filter;
    // Priority filter
    const priorityMatch = priorityFilter === 'all' || notification.priority === priorityFilter;
    
    return typeMatch && priorityMatch;
  });

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    
    if (diffInSeconds < 60) {
      return 'Just now';
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
    
    return timestamp.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  if (isLoading) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div> */}
          <p className="text-gray-500">Loading notifications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1E] border border-gray-800  rounded-lg p-2 md:p-3">
      <div className="max-w-7xl mx-auto">
        <div className=" rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="px-2 py-4 border-b border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center">
              <div className="bg-[#1f1f1f] p-2 rounded-lg">
                <FiBell className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-300">Notifications</h2>
                <p className="text-[12px] text-gray-500">Manage your alerts and updates</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="flex items-center text-[10px] text-green-600/80 hover:text-blue-800 font-medium px-3 py-2 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <FiCheckCircle className="mr-1" />
                  Mark all as read
                </button>
              )} */}
              
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-sm text-gray-600 hover:text-gray-400 font-medium px-3 py-2 rounded-md  transition-colors"
              >
                <FiFilter className="mr-1" />
                Filters
                {showFilters ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
              </button>
              
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {unreadCount} unread
              </span>
            </div>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div className="px-6 py-4 border-b border-gray-800 ">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-4">Type</label>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'message', 'reminder', 'financial', 'system', 'social', 'security'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize ${
                          filter === type
                            ? 'bg-gray-800 text-gray-300 border border-gray-800'
                            : ' text-gray-400 hover:bg-gray-700 border border-gray-800'
                        }`}
                      >
                        {type === 'all' ? 'All Types' : type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="sm:border-l sm:border-gray-800 sm:pl-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Priority</label>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'high', 'medium', 'low'].map((priority) => (
                      <button
                        key={priority}
                        onClick={() => setPriorityFilter(priority)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize ${
                          priorityFilter === priority
                            ? ' text-gray-300 bg-gray-800'
                            : ' text-gray-400 hover:bg-gray-600 border border-gray-800'
                        }`}
                      >
                        {priority === 'all' ? 'All Priorities' : priority}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications list */}
          <div className="divide-y divide-gray-800 max-h-[500px] scrollbar-hide overflow-y-auto">
            {filteredNotifications.length === 0 ? (
              <div className="py-12 text-center">
                <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FiBell className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">No notifications found</p>
                <p className="text-gray-400 text-sm mt-1">
                  {filter !== 'all' || priorityFilter !== 'all' 
                    ? 'Try changing your filters' 
                    : 'You\'re all caught up!'}
                </p>
              </div>
            ) : (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`px-2 py-4 flex items-start transition-colors ${
                    !notification.isRead ? 'border border-gray-800 mt-2 mb-2' : 'border border-gray-800 mt-2 mb-2'
                  }`}
                >
                  <div className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center mr-4 ${
                    !notification.isRead ? 'border border-gray-800' : 'border border-gray-800'
                  }`}>
                    {getNotificationIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-400">
                          {notification.title}
                        </p>
                        {/* {getPriorityBadge(notification.priority)} */}
                      </div>
                      <span className="text-[10px] text-gray-500 whitespace-nowrap">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                    </div>
                    
                    <p className="mt-1 text-[13px] text-gray-600">
                      {notification.message}
                    </p>
                    
                    <div className="mt-3 flex space-x-3">
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="inline-flex items-center text-xs text-green-600 hover:text-green-800"
                        >
                          <FiCheck className="mr-1" />
                          Mark as read
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="inline-flex items-center text-xs text-red-500 hover:text-red-800"
                      >
                        <FiTrash2 className="mr-1" />
                        Delete
                      </button>
                      <button
                        onClick={() => setExpandedNotification(
                          expandedNotification === notification.id ? null : notification.id
                        )}
                        className="inline-flex items-center text-xs text-gray-600 hover:text-gray-400 cursor-pointer"
                      >
                        {expandedNotification === notification.id ? 'Less' : 'More'} details
                      </button>
                    </div>
                    
                    {expandedNotification === notification.id && (
                      <div className="mt-3 p-3 bg-[#1f1f1f] rounded-lg text-xs text-gray-500">
                        {/* <p>ID: {notification.id}</p> */}
                        <p>Type: {notification.type}</p>
                        <p>Priority: {notification.priority}</p>
                        <p>Full date: {notification.timestamp.toLocaleString()}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-700 bg-[#1f1f1f] flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Showing {filteredNotifications.length} of {notifications.length} notifications
              </p>
              <button
                onClick={clearAllNotifications}
                className="text-sm text-red-600 hover:text-red-800 font-medium flex items-center"
              >
                <FiTrash2 className="mr-1" />
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;