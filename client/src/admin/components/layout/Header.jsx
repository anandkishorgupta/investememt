import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { unreadCount, notifications, markAsRead } = useNotifications();
  const { user } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);
  
  const getPageTitle = () => {
    const paths = {
      '/': 'Dashboard',
      '/media': 'Media Gallery',
      '/press': 'Press Releases',
      '/news': 'News & Articles',
      '/contact': 'Contact Messages'
    };
    return paths[location.pathname] || 'Dashboard';
  };

  // Handle clicking on a notification
  const handleNotificationClick = async (notification) => {
    await markAsRead(notification._id);
    setShowNotifications(false);
    navigate('/contact');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMins < 1) return 'Just now';
    if (diffInMins < 60) return `${diffInMins} min${diffInMins > 1 ? 's' : ''} ago`;
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 border-b border-gray-200">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h2>
      </div>
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-3 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
                {unreadCount > 0 && (
                  <p className="text-xs text-gray-500">{unreadCount} new message{unreadCount > 1 ? 's' : ''}</p>
                )}
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification._id}
                      onClick={() => handleNotificationClick(notification)}
                      className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-xs">
                              {notification.Name?.charAt(0) || 'U'}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-800">{notification.Name}</p>
                              <p className="text-xs text-gray-500">{formatDate(notification.createdAt)}</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {notification.Message}
                          </p>
                        </div>
                        <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <svg className="w-12 h-12 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <p className="text-sm text-gray-500">No new notifications</p>
                  </div>
                )}
              </div>

              {notifications.length > 0 && (
                <div className="p-2 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setShowNotifications(false);
                      navigate('/contact');
                    }}
                    className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium py-2 rounded hover:bg-blue-50 transition-colors"
                  >
                    View all messages
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* User Profile */}
        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-sm font-bold text-white">{user?.name?.charAt(0) || 'A'}</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-800">{user?.name || 'Admin User'}</p>
            <p className="text-xs text-gray-500">{user?.role || 'Administrator'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;