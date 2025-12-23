import { MoreVertical } from 'lucide-react';
import { useEffect, useState } from 'react';
import Modal from '../components/common/Modal';
import Table from '../components/common/Table';
import { useNotifications } from '../context/NotificationContext';

const API_URL = import.meta.env.VITE_API_URL ;

const ContactPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalMessages: 0,
    hasNextPage: false,
    hasPrevPage: false
  });
  const { refreshNotifications } = useNotifications();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  // Fetch messages from backend with pagination
  const fetchMessages = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/contact?page=${page}&limit=10`);
      const data = await response.json();
      setMessages(data.messages);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchMessages(newPage);
    }
  };

  const handleAction = async (action, rowData) => {
    setOpenMenuId(null);

    if (action === 'delete') {
      if (window.confirm('Are you sure you want to delete this message?')) {
        try {
          await fetch(`${API_URL}/contact/${rowData._id}`, {
            method: 'DELETE',
          });
          setMessages(messages.filter(m => m._id !== rowData._id));
          refreshNotifications();
        } catch (error) {
          console.error('Error deleting message:', error);
        }
      }
    }

    if (action === 'markAsRead' && rowData.status === 'new') {
      try {
        await fetch(`${API_URL}/contact/${rowData._id}/read`, {
          method: 'PATCH',
        });
        setMessages(messages.map(m =>
          m._id === rowData._id ? { ...m, status: 'read' } : m
        ));
        refreshNotifications();
      } catch (error) {
        console.error('Error marking message as read:', error);
      }
    }
  };

  const columns = [
    {
      header: 'Name',
      key: 'Name',
      render: (value) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm mr-2">
            {value?.charAt(0) || 'U'}
          </div>
          {value}
        </div>
      )
    },
    {
      header: 'Email',
      key: 'Email',
      render: (value) => (
        <a href={`mailto:${value}`} className="text-blue-600 hover:underline">
          {value}
        </a>
      )
    },
    {
      header: 'Message',
      key: 'Message',
      render: (value) => (
        <span className="line-clamp-2">{value}</span>
      )
    },
    {
      header: 'Date',
      key: 'createdAt',
      render: (value) => new Date(value).toLocaleDateString()
    },
    {
      header: 'Status',
      key: 'status',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'new'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {value === 'new' ? 'New' : 'Read'}
        </span>
      )
    },
    {
      header: '',
      key: 'actions',
      render: (_, row) => (
        <div className="relative">
          <button
            onClick={() =>
              setOpenMenuId(openMenuId === row._id ? null : row._id)
            }
            className="p-2 rounded hover:bg-gray-100"
          >
            <MoreVertical size={18} />
          </button>

          {openMenuId === row._id && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-20">
              {row.status === 'new' && (
                <button
                  onClick={() => handleAction('markAsRead', row)}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                >
                  Mark as Read
                </button>
              )}
              <button
                onClick={() => handleAction('delete', row)}
                className="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="fade-in contact-page-container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contact Messages</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {messages.filter(m => m.status === 'new').length} new message{messages.filter(m => m.status === 'new').length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-visible">
        {loading ? (
          <div className="p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading messages...</p>
          </div>
        ) : messages.length > 0 ? (
          <Table columns={columns} data={messages} />
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">No messages found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            disabled={!pagination.hasPrevPage}
            className={`px-4 py-2 rounded ${pagination.hasPrevPage ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            Previous
          </button>
          
          <div className="text-sm text-gray-600">
            Page {pagination.currentPage} of {pagination.totalPages}
            <span className="mx-2">•</span>
            Total {pagination.totalMessages} messages
          </div>
          
          <button
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            disabled={!pagination.hasNextPage}
            className={`px-4 py-2 rounded ${pagination.hasNextPage ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            Next
          </button>
        </div>
      )}

      {selectedMessage && (
        <Modal
          // isOpen={viewModal}
          // onClose={() => setViewModal(false)}
          title="Message Details"
        >
          <div className="space-y-3">
            <p><strong>Name:</strong> {selectedMessage.Name}</p>
            <p><strong>Email:</strong> {selectedMessage.Email}</p>
            <p><strong>Date:</strong> {new Date(selectedMessage.createdAt).toLocaleDateString()}</p>
            <p className="bg-gray-50 p-3 rounded">{selectedMessage.Message}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ContactPage;
