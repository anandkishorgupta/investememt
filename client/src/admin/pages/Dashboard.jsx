import { useEffect, useState } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import { useAuth } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;

const DashboardPage = () => {
  const [stats, setStats] = useState([
    {
      title: 'Media Files',
      value: '0',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      link: '/admin/media'
    },
    {
      title: 'Portfolios',
      value: '0',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      link: '/admin/portfolio'
    },
    {
      title: 'Directors',
      value: '0',
      // icon: (
      //   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      //       d="M5.121 17.804A9 9 0 1119.879 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      //   </svg>
      // ),
      icon: <FaUserTie className="w-5 h-5" />,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/Directors'
    },

    {
      title: 'Contact Messages',
      value: '0',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      link: '/admin/contact'
    }
  ]);

  const [recentActivity, setRecentActivity] = useState([
    { action: 'Loading recent activity...', time: 'Just now', type: 'loading' }
  ]);

  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Get auth token
      const token = localStorage.getItem('adminToken');

      if (!token) {
        console.error('No authentication token found');
        return;
      }

      // Fetch counts from all APIs
      const [mediaRes, portfolioRes, directorRes, contactRes] = await Promise.all([
        fetch(`${API_URL}/api/media`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_URL}/api/portfolio`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_URL}/api/directors`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch(`${API_URL}/api/contact`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      const [mediaResult, portfolioResult, DirectorsResult, contactResult] = await Promise.all([
        mediaRes.json(),
        portfolioRes.json(),
        directorRes.json(),
        contactRes.json()
      ]);

      // Handle pagination response format
      const mediaData = Array.isArray(mediaResult) ? mediaResult : mediaResult.media || [];
      const portfolioData = Array.isArray(portfolioResult) ? portfolioResult : portfolioResult.portfolio || [];
      const directorData =
        DirectorsResult?.directors ??
        DirectorsResult?.data ??
        DirectorsResult?.director ??
        [];

      const contactData = Array.isArray(contactResult) ? contactResult : contactResult.messages || [];

      // Calculate media file count (sum of all images in all media documents)
      const mediaCount = mediaData.reduce((total, media) => total + (media.images ? media.images.length : 0), 0);

      // Update stats
      const updatedStats = [
        { ...stats[0], value: mediaCount.toString() },
        { ...stats[1], value: portfolioData.length.toString() },
        { ...stats[2], value: directorData.length.toString() },
        { ...stats[3], value: contactData.length.toString() }
      ];

      setStats(updatedStats);

      // Create recent activity based on latest items
      const activities = [];

      // Get latest media
      if (mediaData.length > 0) {
        const latestMedia = mediaData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
        if (latestMedia) {
          activities.push({
            action: 'New media uploaded',
            time: formatTimeAgo(latestMedia.createdAt),
            type: 'media'
          });
        }
      }

      // Get latest portfolio
      if (portfolioData.length > 0) {
        const latestportfolio = portfolioData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
        if (latestportfolio) {
          activities.push({
            action: 'Portfolio published',
            time: formatTimeAgo(latestportfolio.createdAt),
            type: 'portfolio'
          });
        }
      }
      if (directorData.length > 0) {
        const latestDirector = directorData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
        if (latestDirector) {
          activities.push({
            action: 'Director published',
            time: formatTimeAgo(latestDirector.createdAt),
            type: 'Director'
          });
        }
      }



      // Get latest contact
      if (contactData.length > 0) {
        const latestContact = contactData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
        if (latestContact) {
          activities.push({
            action: 'New contact message',
            time: formatTimeAgo(latestContact.createdAt),
            type: 'contact'
          });
        }
      }

      // Sort activities by time (newest first)
      activities.sort((a, b) => {
        const timeA = getTimeFromAgo(a.time);
        const timeB = getTimeFromAgo(b.time);
        return timeB - timeA;
      });

      // Limit to 4 most recent activities
      const recentActivities = activities.slice(0, 4);

      if (recentActivities.length > 0) {
        setRecentActivity(recentActivities);
      } else {
        setRecentActivity([{ action: 'No recent activity', time: '', type: 'empty' }]);
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setRecentActivity([{ action: 'Error loading activity', time: '', type: 'error' }]);
    } finally {
      setLoading(false);
    }
  };

  // Format time ago helper
  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMinutes = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

  // Helper to convert time ago string back to timestamp for sorting
  const getTimeFromAgo = (timeAgo) => {
    if (timeAgo === 'Just now') return Date.now();

    const match = timeAgo.match(/(\d+)\s*(minute|hour|day|week|month|year)s?\s+ago/);
    if (!match) return Date.now();

    const value = parseInt(match[1]);
    const unit = match[2];

    const now = Date.now();
    switch (unit) {
      case 'minute': return now - (value * 60000);
      case 'hour': return now - (value * 3600000);
      case 'day': return now - (value * 86400000);
      case 'week': return now - (value * 604800000);
      case 'month': return now - (value * 2629800000);
      case 'year': return now - (value * 31557600000);
      default: return now;
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="fade-in">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
          </div>
          <button
            onClick={fetchDashboardData}
            disabled={loading}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50"
            title="Refresh data"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link to={stat.link} key={index}>
            <div className={`bg-gradient-to-r ${stat.color} rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">{stat.title}</p>
                  <p className="text-4xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className="opacity-80">
                  {stat.icon}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link to="/admin/media" className="block">
              <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Upload Media
              </button>
            </Link>
            <Link to="/admin/portfolio" className="block">
              <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Portfolios
              </button>
            </Link>
            <Link to="/admin/Directors" className="block">
              <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-colors flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Director
              </button>
            </Link>

            <Link to="/admin/contact" className="block">
              <button className="w-full text-left px-4 py-3 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg transition-colors flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Messages
              </button>
            </Link>
          </div>


        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;