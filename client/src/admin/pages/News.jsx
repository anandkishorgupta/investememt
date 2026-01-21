import React, { useState, useEffect } from 'react';
import Button from '../components/common/Button';
import Table from '../components/common/Table';
const API_URL = import.meta.env.VITE_API_URL ;
import IsolatedModal, { 
  FormGroup, 
  Label, 
  Input as BWInput, 
  Button as BWButton 
} from '../components/common/IsolatedModal';
import { MoreVertical } from 'lucide-react';

const NewsPage = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalNews: 0,
    hasNextPage: false,
    hasPrevPage: false
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    link: ''
  });
  const [openMenuId, setOpenMenuId] = useState(null);

  // Fetch news articles from backend with pagination
  const fetchNewsArticles = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/news?page=${page}&limit=10`);
      const data = await response.json();
      setNewsArticles(data.news);
      setPagination(data.pagination);
    } catch (error) {
      console.error('Error fetching news articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchNewsArticles(newPage);
    }
  };

  const columns = [
    {
      header: 'Title',
      key: 'Title'
    },
    {
      header: 'Link',
      key: 'Link',
      render: (value) => (
        <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Article
        </a>
      )
    },
    {
      header: 'Date',
      key: 'Date',
      render: (value) => new Date(value).toLocaleDateString()
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
            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-lg z-20">
              <button
                onClick={() => {
                  setOpenMenuId(null);
                  handleAction('edit', row);
                }}
                className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setOpenMenuId(null);
                  handleAction('delete', row);
                }}
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

  const handleAction = async (action, rowData) => {
    if (action === 'delete') {
      if (window.confirm('Are you sure you want to delete this article?')) {
        try {
          await fetch(`http://localhost:5000/api/news/${rowData._id}`, {
            method: 'DELETE',
          });
          setNewsArticles(newsArticles.filter(article => article._id !== rowData._id));
        } catch (error) {
          console.error('Error deleting article:', error);
          alert('Failed to delete article');
        }
      }
    } else if (action === 'edit') {
      setEditingArticle(rowData);
      setFormData({
        title: rowData.Title,
        link: rowData.Link
      });
      setIsModalOpen(true);
    }
  };

  const handleAdd = () => {
    setEditingArticle(null);
    setFormData({
      title: '',
      link: ''
    });
    setIsModalOpen(true);
    setOpenMenuId(null);
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.link) {
      alert('Please fill all required fields');
      return;
    }

    try {
      if (editingArticle) {
        // Update existing
        const response = await fetch(`http://localhost:5000/api/news/${editingArticle._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Title: formData.title,
            Link: formData.link,
            Date: editingArticle.Date // Keep the original date
          }),
        });
        if (response.ok) {
          // Refresh the current page
          await fetchNewsArticles(pagination.currentPage);
        }
      } else {
        // Add new
        const response = await fetch('http://localhost:5000/api/news', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Title: formData.title,
            Link: formData.link,
            Date: new Date()
          }),
        });
        if (response.ok) {
          // Refresh the current page
          await fetchNewsArticles(1); // Go to first page to see new item
        }
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Failed to save article');
    }
  };

  return (
    <div className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">News & Articles</h1>
          <p className="text-gray-600 mt-1">Manage news articles and external links</p>
        </div>
        <Button variant="primary" onClick={handleAdd} className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add New</span>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Articles</p>
              <p className="text-3xl font-bold">{newsArticles.length}</p>
            </div>
            <svg className="w-12 h-12 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        {loading ? (
          <div className="p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading articles...</p>
          </div>
        ) : newsArticles.length > 0 ? (
          <Table 
            columns={columns} 
            data={newsArticles} 
            onAction={handleAction} 
          />
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">No articles found</p>
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
            Total {pagination.totalNews} articles
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

      {!loading && newsArticles.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="mt-2 text-gray-600">No news articles yet</p>
        </div>
      )}

      {/* Add/Edit Modal - Black & White Theme */}
      <IsolatedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingArticle ? 'Edit News Article' : 'Add News Article'}
        footer={
          <>
            <BWButton variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </BWButton>
            <BWButton variant="primary" onClick={handleSubmit}>
              {editingArticle ? 'Update' : 'Add'}
            </BWButton>
          </>
        }
      >
        <FormGroup>
          <Label required>Title</Label>
          <BWInput
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter article title"
          />
        </FormGroup>
        
        <FormGroup>
          <Label required>Link</Label>
          <BWInput
            type="url"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            placeholder="https://example.com/article"
          />
        </FormGroup>
      </IsolatedModal>
    </div>
  );
};

export default NewsPage;